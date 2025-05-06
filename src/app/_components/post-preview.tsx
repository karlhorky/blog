import DateFormatter from '@/app/_components/date-formatter';
import { Dot, RightArrow } from '@/app/_components/icons';
import Link from 'next/link';

type Props = {
  key: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({ key, title, date, excerpt, slug }: Props) {
  return (
    <article key={`article-${key}`} className="group relative">
      <div className="bg-card group-hover:bg-muted absolute -inset-x-4 -inset-y-2.5 transition-colors sm:rounded-2xl md:-inset-x-6 md:-inset-y-4" />
      <Dot className="text-muted-foreground absolute top-2 right-full mr-6 hidden h-[calc(0.5rem+1px)] w-[calc(0.5rem+1px)] overflow-visible sm:block md:mr-12" />
      <div className="relative">
        <h3 className="text-foreground pt-8 text-base font-semibold tracking-tight lg:pt-0">
          {title}
        </h3>
        <div className="prose prose-slate prose-a:relative prose-a:z-10 text-foreground mt-2 mb-4 line-clamp-2">
          {excerpt}
        </div>
        <dl className="absolute top-0 left-0 lg:right-full lg:left-auto lg:mr-[calc(6.5rem+1px)]">
          <dt className="sr-only">Date</dt>
          <dd className="text-muted-foreground text-sm leading-6 whitespace-nowrap">
            <DateFormatter dateString={date} />
          </dd>
        </dl>
      </div>
      <Link
        href={`/posts/${slug}`}
        className="text-foreground hover:text-primary flex items-center text-sm font-medium"
      >
        <span className="absolute -inset-x-4 -inset-y-2.5 sm:rounded-2xl md:-inset-x-6 md:-inset-y-4" />
        <span className="relative">
          Read more<span className="sr-only">, {title}</span>
        </span>
        <RightArrow className="relative mt-px ml-2.5 overflow-visible" />
      </Link>
    </article>
  );
}
