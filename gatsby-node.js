const home = require("./src/data/home.json")
const categories = require("./src/data/categories.json")
const pages = require("./src/data/pages.json")

exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/homePage.js"),
    context: { categories, home },
  })

  categories.forEach(page => {
    createPage({
      path: page.slug,
      component: require.resolve("./src/templates/categoryPage.js"),
      context: { categories, page },
    })
  })

  pages.forEach(page => {
    createPage({
      path: page.slug,
      component: require.resolve("./src/templates/page.js"),
      context: { categories, page },
    })
  })
}
