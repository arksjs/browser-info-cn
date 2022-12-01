import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: './src/index.ts',
    output: [
      {
        format: 'umd',
        name: 'BrowserInfo',
        file: 'dist/index.js',
        exports: 'default'
      }
    ],
    plugins: [typescript({}), terser({ compress: { drop_console: false } })]
  },
  {
    input: './src/index.ts',
    output: [
      {
        format: 'cjs',
        file: 'dist/index.cjs',
        exports: 'default'
      },
      {
        format: 'esm',
        file: 'dist/index.mjs'
      }
    ],
    plugins: [typescript({})]
  }
]
