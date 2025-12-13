import { ThemeModeToggle } from '@/components/shared/theme-mode-toggler';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <ThemeModeToggle />
    </div>
  );
}
