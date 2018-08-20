import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/headsup.js',
  output: {
    file: 'dist/headsup.js',
    format: 'umd',
    name: 'headsup'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}