import path from 'path'
const root = path.join(__dirname, '..')

export default {
  entry: path.join(root, 'docs/src/index'),
  outputPath: path.join(root, 'docs/dist'),
  aliasScalexUi: path.join(root, 'src'),
  aliasScalexUiDocs: path.join(root, 'docs/src'),
  staticFolder: path.join(root, 'docs'),
  index: path.join(root, 'docs/index.html'),
  theme: path.join(root, 'src/styles'),
  port: 3030
}


