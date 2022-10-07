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

  console.log('matches', matches)

  return matches
}
