'use client'

import { use } from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Loader2 } from 'lucide-react'
import pb from '@/lib/pb'

const Page = ({ params }) => {
  const { slug } = use(params)
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPost()
  }, [slug])

  const fetchPost = async () => {
    try {
      setLoading(true)
      const record = await pb.collection('posts').getFirstListItem(`slug = "${slug}"`, {
        requestKey: null
      })
      setPost(record)
    } catch (err) {
      console.error('Error fetching post:', err)
      setError('Nie znaleziono artykułu')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-spin" />
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Wróć do bloga</span>
          </Link>
          <p className="text-gray-600 dark:text-gray-400">{error || 'Nie znaleziono artykułu'}</p>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen pt-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Wróć do bloga</span>
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.created)}</span>
            </div>
          </div>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </article>
  )
}

export default Page