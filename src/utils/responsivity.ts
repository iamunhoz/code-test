import { useEffect, useState } from 'react'

export const sizes: Record<string, string> = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

type Screen = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

// source: https://upmostly.com/tutorials/how-to-use-media-queries-in-react
export const useMediaQuery = (screen: Screen) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const query = `(min-width: ${sizes[screen]})`
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, screen])

  return matches
}
