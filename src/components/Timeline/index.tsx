import HeadlineCard from 'components/HeadlineCard'
import React, { useEffect } from 'react'
import { useAppStore } from 'state'

export default function Timeline() {
  const { posts, getPosts } = useAppStore((state) => state)

  useEffect(() => {
    if (!posts.length) {
      getPosts({ _page: 0, _limit: 10 })
    }
  }, [getPosts, posts.length])

  return (
    <div className="w-full grid grid-rows-6 grid-cols-6 gap-y-12 mt-12">
      {posts.map((post, idx) => {
        return <HeadlineCard key={post.id} post={post} idx={idx} />
      })}
    </div>
  )
}
