import Container from '@/app/_components/container';
import Header from '@/app/_components/header';
import { PostPreview } from '@/app/_components/post-preview';
import { getAllPosts } from '@/lib/api';

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Header />
      <Container>
        <div className="py-16 sm:text-center">
          <h1 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Karl Horky
          </h1>
          <h2 className="text-foreground text-lg">
            Tech education: curriculum design, open source, community building
          </h2>
        </div>

        <div className="relative mx-auto max-w-xl sm:pb-12">
          <div className="absolute top-3 right-full bottom-0 mr-7 hidden w-px bg-slate-200 sm:block md:mr-[3.25rem]" />

          <div className="space-y-16">
            {allPosts.map((post) => (
              <PostPreview key={`post-preview-${post.slug}`} {...post} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
