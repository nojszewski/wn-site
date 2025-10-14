export default async function Post({ params }) {
  const { slug } = params
  const res = await fetch(`${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/collections/posts/records?filter=slug%3D${encodeURIComponent(slug)}`)
  const json = await res.json()
  const item = (json.items && json.items[0]) || null
  if(!item) return <div>Nie znaleziono</div>

  return (
    <article className="prose max-w-none">
      <h1>{item.title}</h1>
      <div dangerouslySetInnerHTML={{__html: item.content}} />
    </article>
  )
}