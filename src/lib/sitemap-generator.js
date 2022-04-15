const fs = require("fs")
const path = require("path")
const globby = require("globby")
const matter = require("gray-matter")

const postsDirectory = path.join(process.cwd(), 'posts')

function toUrlTemplate(pathName) {

  const filteredPath = pathName.replace('pages', '')
    .replace('src/', '')
    .replace('/index', '')
    .replace(/\.mdx$/, '')
    .replace(/\.jsx$/, '')

  const findPostPath = filteredPath.match(/\/post\//)

  if(findPostPath != null) {
    const filteredPostPath = findPostPath.input.replace(/\/post/, '')
    const fullPath = path.join(postsDirectory, filteredPostPath + '.md')
    const postData = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(postData)

    return `
  <url>
    <loc>${`https://blog.nizarbaihaqi.com${filteredPath}`}</loc>
    <lastmod>${data.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`
  } else {
    return `
  <url>
    <loc>${`https://blog.nizarbaihaqi.com${filteredPath}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`
  }
}

async function generateSitemap() {
  const pageNames = await globby([
    'src/pages/**/*{.jsx,.mdx}',
    '!src/pages/_*.jsx',
    '!src/pages/api',
    '!src/pages/post/[id].jsx',
  ])
  
  const postsFileNames = fs.readdirSync(postsDirectory)
  const postNames = postsFileNames.map(fileName => {
    
    const id = fileName.replace(/\.md$/, '')
    
    const postPath = `/post/${id}`

    return postPath
  })

  const allPageNames = [...pageNames, ...postNames]

  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${allPageNames.map(toUrlTemplate).join('')}
</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()
