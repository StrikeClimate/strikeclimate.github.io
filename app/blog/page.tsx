import posts from '@/app/data/post.json';

export default function BlogPage() {
    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
            <div className="space-y-4">
                {posts.map((post) => (
                    <article
                        key={post.id}
                        className="p-4 border rounded-lg hover:bg-gray-50"
                    >
                        <a href={`/blog/${post.slug}`}>
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                            <p className="text-gray-500 mt-2">{post.date}</p>
                        </a>
                    </article>
                ))}
            </div>
        </div>
    );
}