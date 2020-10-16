const pkg = require("../../package.json")
const fs = require("fs").promises

const packageJSONTemplate = (name) =>
  `{
"name": "nataicons",
"version": "${pkg.version}",
"main": "index.js",
"license": "${pkg.license}",
"homepage": "${pkg.homepage}",
"description": "${pkg.description}",
"keywords": ${JSON.stringify(pkg.keywords)},
"repository": ${JSON.stringify(pkg.repository)},
"author": "${pkg.author}"
}
`.trim()

console.log("\nCreating package.json")

return Promise.all([
  fs.writeFile(`./react/package.json`, packageJSONTemplate("vue")).then(() => {
    fs.copyFile("./README.md", `./vue/README.md`)
  }),
]).then(() => console.log("Finished creating package.json"))
