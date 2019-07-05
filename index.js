const codeFrontmatter = require('remark-code-frontmatter');

let transformer = null;

module.exports = ({ markdownAST }) => {
  if (!transformer) {
    transformer = codeFrontmatter();
  }

  return transformer(markdownAST);
}
