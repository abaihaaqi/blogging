const fs = require("fs")
const globby = require("globby")

function toUrlTemplate(pathName) {

  const filteredPath = pathName.replace('pages', '')
    .replace('posts/', '')
    .replace('src/', '')
    .replace('/index', '')
    .replace(/\.md$/, '')
    .replace(/\.mdx$/, '')
    .replace(/\.jsx$/, '')

  return `https://blog.nizarbaihaqi.com/${filteredPath}
`
}

async function generateSitemap() {
  const pageNames = await globby([
    'posts/*.md',
    'src/pages/**/*{.jsx,.mdx}',
    '!src/pages/_*.jsx',
    '!src/pages/api',
    '!src/pages/post/[id].jsx',
  ])

  const sitemap = `${pageNames.map(toUrlTemplate).join('')}`

  console.log(sitemap);

  fs.writeFileSync('public/sitemap.txt', sitemap)
}

generateSitemap()
