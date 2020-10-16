const fs = require("fs").promises
const dedent = require("dedent")
const camelcase = require("camelcase")
const { promisify } = require("util")
const rimraf = promisify(require("rimraf"))
const svgr = require("@svgr/core").default

function svgToReact(svg, componentName) {
  return svgr(svg, {}, { componentName })
}

console.log("Building React 24x24 icon components...")

return Promise.all([
  fs.readdir("./icons/24x24").then((files) => {
    return Promise.all(
      files.map((file) => {
        const componentName = `${camelcase(file.replace(/\.svg$/, ""), {
          pascalCase: true,
        })}`
        return fs
          .readFile(`./icons/24x24/${file}`, "utf8")
          .then((content) => {
            return svgToReact(content, `${componentName}24`)
          })
          .then((component) => {
            const fileName = `${componentName}24.jsx`
            const content = component
            return fs
              .writeFile(`./react/${fileName}`, content)
              .then(() => fileName)
          })
      })
    ).then((fileNames) => {
      const exportStatements = fileNames
        .map((fileName) => {
          const componentName = `${camelcase(fileName.replace(/\.jsx$/, ""), {
            pascalCase: true,
          })}`
          return `export { default as ${componentName} } from './${fileName}'`
        })
        .join("\n")

      return fs.writeFile("./react/index.js", exportStatements)
    })
  }),
]).then(() => console.log("Finished building react components.\n"))
