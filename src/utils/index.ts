export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export const sanitize = (dirty: string): string => {
  return dirty.replace(/<(\s|\S)+>/, '')
}

export const articleParser = (article: string): string[] => {
  const matches = article
    .split(/p>\s*</)
    .map((match) =>
      match
        .replace('<p>', '')
        .replace('</', '')
        .replace('</p>', '')
        .replace('p>', '')
        .replace('.p>', '')
        .replace('\n', '')
    )

  return matches
}

export const getHeadline = (dirtyArticle: string, headLineSize: number) => {
  const article = articleParser(dirtyArticle)[0]
  return `${article.substring(0, headLineSize)}(...)`
}

export const getLocaleDate = (d: string) => {
  const date = new Date(d)

  const month = new Intl.DateTimeFormat('pt-br', { month: 'short' })
    .format(date)
    .split('')
  const monthCapital = [month[0].toUpperCase(), ...month.slice(1)].join('')

  return `${monthCapital} ${date.getDate()}, ${date.getFullYear()}`
}
