export default async function Blog() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/collections/posts/records?perPage=10`)
  const json = await res.json()
  const posts = json.items || []

  return (
    <div>
      <h1 className="text-3xl mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map(p => (
          <li key={p.id} className="card p-4">
            <a href={`/blog/${p.slug}`} className="text-xl">{p.title}</a>
            <p className="text-sm text-gray-300 mt-2">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}