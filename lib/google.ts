'use server';

import { redirect } from 'next/navigation';

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

type GoogleTokenResponse = {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
  token_type: string;
  scope: string;
};

type TokenResult = {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
};

type CheckAccessTokenResponse = {
  issued_to: string;
  audience: string;
  scope: string;
  expires_in: number;
  access_type: string;
};

/**
 * 1. Generate Google OAuth URL for sign-in button
 * Use this URL as href for your sign-in button
 * @returns Google OAuth URL
 */
export async function getGoogleAuthUrl(): Promise<string> {
  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID || '',
    redirect_uri: REDIRECT_URI || '',
    response_type: 'code',
    // scope:
    //   'openid profile email https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/business.manage',
    scope:
      'https://www.googleapis.com/auth/business.manage https://www.googleapis.com/auth/spreadsheets',
    access_type: 'offline', // Force refresh token
    prompt: 'consent', // Always show consent screen
  });

  return redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`,
  );
}

/**
 * 2. Handle OAuth callback - Extract code from URL
 * Call this in your callback route after user returns from Google
 * @returns Access & Refresh Tokens
 */
export async function handleGoogleCallback(
  searchParams: Record<string, string | string[] | undefined>,
): Promise<TokenResult> {
  const code = searchParams.code as string;
  const error = searchParams.error as string;

  if (error) {
    throw new Error(`Google OAuth error: ${error}`);
  }

  if (!code) {
    throw new Error('No authorization code received from Google');
  }

  // Exchange code for tokens
  const tokens = await exchangeCodeForTokens(code);
  return tokens;
}

/**
 * 3. Exchange authorization code for access & refresh tokens
 * Server-side token exchange with Google
 * @param code Authorization code received from Google
 * @returns Access & Refresh Tokens
 */
export async function exchangeCodeForTokens(
  code: string,
): Promise<TokenResult> {
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !REDIRECT_URI) {
    throw new Error('Missing Google OAuth environment variables');
  }

  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    code,
    grant_type: 'authorization_code',
    redirect_uri: REDIRECT_URI,
  });

  try {
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Token exchange failed: ${error}`);
    }

    const data: GoogleTokenResponse = await response.json();

    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
    };
  } catch (error) {
    throw new Error(
      `Failed to exchange code for tokens: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`,
    );
  }
}

/**
 * 4. Refresh Access Token using Refresh Token
 * @returns New Access Token
 */
export async function refreshAccessToken(): Promise<string> {
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !REFRESH_TOKEN) {
    console.log('Missing env vars:', {
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      REFRESH_TOKEN,
    });
    throw new Error('Missing Google OAuth environment variables for refresh');
  }
  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    refresh_token: REFRESH_TOKEN,
    grant_type: 'refresh_token',
  });
  try {
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Token refresh failed: ${error}`);
    }
    const data: GoogleTokenResponse = await response.json();
    console.log('New access token:', data);
    return data.access_token;
  } catch (error) {
    throw new Error(
      `Failed to refresh access token: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`,
    );
  }
}

/**
 * 5. we can check the status and remaining lifetime of a Google access token manually without triggering a refresh flow.
 * @param accessToken The access token to be checked
 * @returns Token info including expiry time
 */
export async function checkAccessTokenStatus(
  accessToken: string,
): Promise<CheckAccessTokenResponse | null> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`,
    );
    if (!response.ok) {
      const error = await response.text();
      // here we can generate a new access token if needed
      // await refreshAccessToken();

      throw new Error(`Token status check failed: ${error}`);
    }
    const data = (await response.json()) as CheckAccessTokenResponse;
    console.log('Access token status:', data);
    return data;
  } catch (error) {
    console.error('Failed to check access token status:', error);
    // throw new Error(
    //   `Failed to check access token status: ${
    //     error instanceof Error ? error.message : 'Unknown error'
    //   }`,
    // );
    return null;
  }
}
