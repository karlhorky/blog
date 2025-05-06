'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';
import { Moon, Sun } from './icons';

export function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setTheme('light')}
        aria-label="Switch to light mode"
        className={isDark ? 'opacity-70 hover:opacity-100' : 'hidden'}
      >
        <Sun className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        aria-label="Switch to dark mode"
        className={isDark ? 'hidden' : 'opacity-70 hover:opacity-100'}
      >
        <Moon className="h-5 w-5" />
      </button>
    </div>
  );
}
