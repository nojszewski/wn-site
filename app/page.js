import Image from 'next/image'
import StackCarousel from '../components/StackCarousel'
import ProjectCard from '../components/ProjectCard'
import pb from '../lib/pb'

async function getProjects(){
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/collections/projects/records?perPage=6`)
    const json = await res.json()
    return json.items || []
  }catch(e){return []}
}

export default async function Home(){
  const projects = await getProjects()
  const stack = ['Docker','Kubernetes','Proxmox','Node.js','Next.js','Terraform']

  return (
    <div>
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <Image src="/avatar.png" width={120} height={120} alt="avatar" className="rounded-full" />
        <h1 className="mt-6 text-4xl font-semibold">Wojciech — DevOps / Programista / Admin</h1>
        <p className="mt-3 text-gray-300 max-w-xl">Buduję stabilne i wydajne infra oraz aplikacje. Proxmox, 10GbE, automatyzacja, backupy, monitoring.</p>
        <div className="mt-6 flex gap-4">
          <a href="/projekty" className="px-4 py-2 rounded-lg border">Projekty</a>
          <a href="/blog" className="px-4 py-2 rounded-lg border">Blog</a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl mb-4">Stack</h2>
        <StackCarousel items={stack} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl mb-4">Projekty</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map(p => <ProjectCard key={p.id} project={{name:p.name, short:p.short, github:p.github, url:p.url}} />)}
        </div>
      </section>

    </div>
  )
}