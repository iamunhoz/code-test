import HeadlineCard from 'components/HeadlineCard'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useAppStore } from 'state'

export default function Timeline() {
  const { posts, getPosts } = useAppStore((state) => state)
  const [page, setPage] = useState(0)

  const loaderRef = useRef(null)

  const handleObserver: IntersectionObserverCallback = useCallback(
    (entries) => {
      const target = entries[0]
      if (target.isIntersecting) {
        setPage((prev) => prev + 1)
      }
    },
    []
  )

  useEffect(() => {
    getPosts({ _page: page, _limit: 10 })
  }, [getPosts, page])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if (loaderRef.current) observer.observe(loaderRef.current)
  }, [handleObserver])

  return (
    <div className="w-full grid grid-rows-1 grid-cols-1 md:grid-rows-6 md:grid-cols-6 mt-12">
      {posts.map((post, idx) => {
        return <HeadlineCard key={post.id} post={post} idx={idx} />
      })}
      <div ref={loaderRef} />
    </div>
  )
}
