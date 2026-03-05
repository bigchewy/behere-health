import { getAllPosts } from '../../lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Comparisons — BeHere.health`,
};

export default async function ComparisonsPage() {
  const posts = await getAllPosts('comparison');
  return (
    <>
      <header className="border-b border-border bg-background-elevated">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold text-primary" style={{ fontFamily: "'Inter', sans-serif" }}>
            BeHere.health
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
            <a href="/comparisons" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
            <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
          </div>
        </nav>
      </header>
      <main className="flex-1 mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Comparisons</h1>
        {posts.length === 0 ? (
          <p>No comparisons yet.</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <a key={post.slug} href={`/comparisons/${post.slug}`} className="block p-6 shadow-lg bg-background-elevated rounded-xl">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-sm mt-1">{post.description}</p>
              </a>
            ))}
          </div>
        )}
      </main>
      <footer className="border-t border-border bg-background-elevated mt-auto">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm">&copy; 2026 BeHere.health. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-text-muted hover:text-text transition-colors">Home</a>
              <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
              <a href="/comparisons" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
              <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
