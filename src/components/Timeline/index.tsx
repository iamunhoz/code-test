import HeadlineCard from 'components/HeadlineCard'
import LoadingSpinner from 'components/LoadingSpinner'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useAppStore } from 'state'

export default function Timeline() {
  const { posts, fetchPosts, loadingGet } = useAppStore((state) => state)
  const [page, setPage] = useState(-1)

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
    if (page < 0) return
    fetchPosts({ _page: page, _limit: 10 })
  }, [fetchPosts, page])

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
    <>
      <div className="w-full grid grid-rows-1 grid-cols-1 md:grid-rows-12 md:grid-cols-6 mt-12">
        {posts.map((post, idx) => {
          return <HeadlineCard key={post.id} post={post} idx={idx} />
        })}
        <div ref={loaderRef} />
      </div>
      <LoadingSpinner loading={loadingGet} />
    </>
  )
}
