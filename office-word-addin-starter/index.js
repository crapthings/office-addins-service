const {
  FuseBox,
  SVGPlugin,
  CSSPlugin,
  BabelPlugin,
} = require('fuse-box')

let fuse = new FuseBox({
  homeDir: 'src/',
  sourcemaps: true,
  outFile: './build/addin.js',
  plugins: [
      SVGPlugin(),
      CSSPlugin(),
      BabelPlugin(),
  ]
})

fuse.devServer('>index.js')
