import React, { useEffect } from 'react'
import { useAppStore } from 'state'
import { articleParser } from 'utils'

export default function Timeline() {
  const { posts, getPosts } = useAppStore((state) => state)

  useEffect(() => {
    if (!posts.length) {
      getPosts({ _page: 0, _limit: 10 })
    }
  }, [getPosts, posts.length])

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="border">
          <div>
            {articleParser(post.article).map((paragraph) => (
              <p key={paragraph.slice(0, 10)}>{paragraph}</p>
            ))}
          </div>
          <p>{post.author}</p>
        </div>
      ))}
    </div>
  )
}
