export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
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

export const getHeadline = (article: string) => {
  const matches = articleParser(article)
  const headline = matches[0].split('.').slice(0, 3).join('.')
  return `${headline}.`
}

export const getLocaleDate = (d: string) => {
  const date = new Date(d)

  const month = new Intl.DateTimeFormat('pt-br', { month: 'short' })
    .format(date)
    .split('')
  const monthCapital = [month[0].toUpperCase(), ...month.slice(1)].join('')

  return `${monthCapital} ${date.getDate()}, ${date.getFullYear()}`
}
