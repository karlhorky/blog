'use client';

import Logo from '@/app/_components/logo';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="border-border/40 bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-sm">
      <div className="container flex h-14 max-w-(--breakpoint-2xl) items-center justify-between">
        <div className="mr-4 flex">
          <Logo />
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className={cn(
                'hover:text-foreground/80 transition-colors',
                pathname === '/blog' ? 'text-foreground' : 'text-foreground/60',
              )}
            >
              Blog
            </Link>
            <Link
              href="https://github.com/karlhorky"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'text-foreground/60 hover:text-foreground/80 transition-colors',
              )}
            >
              GitHub
            </Link>
            <Link
              href="https://bsky.app/profile/karlhorky.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'text-foreground/60 hover:text-foreground/80 transition-colors',
              )}
            >
              Bluesky
            </Link>
          </nav>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
