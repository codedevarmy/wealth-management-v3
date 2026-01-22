import { refreshAccessToken } from '@/lib/google';
import { NextResponse } from 'next/server';

export async function GET() {
  console.log('refresh-for testing', process.env.GOOGLE_REFRESH_TOKEN);
  let accessToken: string | null = null;
  const token = await refreshAccessToken();
  accessToken = token;
  console.log('Refreshed access token in cron job:', accessToken);

  return NextResponse.json({ ok: true });
}
