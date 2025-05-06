import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="mr-6 flex items-center space-x-2">
      <span className="font-bold">@karlhorky</span>
    </Link>
  );
}
