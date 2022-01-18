const getSuffix = index => index > 0 ? `-${index}` : ''

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  for (let i = 0; i <= 5; i++) {
    createPage({
      path: `/ssr-generated-page${getSuffix(i)}`,
      component: require.resolve("./src/templates/using-ssr-restricted-access.js"),
      context: {
        isPrivate: i >= 3
      }
    })
  }

  for (let i = 0; i <= 2; i++) {
    const isDSG = i > 1;

    createPage({
      path: `/static-page${getSuffix(i)}`,
      component: require.resolve("./src/templates/using-dsg.js"),
      context: {
        isDSG
      },
      defer: isDSG
    })
  }
}
