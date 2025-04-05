import { notFound } from 'next/navigation';
import posts from '@/app/data/post.json';

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = posts.find((p) => p.slug === params.slug);
    
    
    return {
        title: post?.title || 'Post Not Found',
    };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) notFound();

    return (
        <div className="max-w-4xl mx-auto py-8">
            <article className="prose lg:prose-xl">
                <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
                <p className="text-gray-500 mb-8">{post.date}</p>
                <p className="text-gray-800">{post.content}</p>
            </article>
            <div className="mt-8">
                <a
                    href="/blog"
                    className="text-blue-600 hover:text-blue-800"
                >
                    &larr; Back to Blog
                </a>
            </div>
        </div>

    );
}