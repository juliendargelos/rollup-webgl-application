import autoprefixer from 'autoprefixer'
import htmlMinifier from 'rollup-plugin-html-minifier'
import nodeResolve from '@rollup/plugin-node-resolve'
import staticFiles from 'rollup-plugin-static-files'
import commonjs from '@rollup/plugin-commonjs'
import cleaner from 'rollup-plugin-cleaner'
import replace from 'rollup-plugin-replace'
import glslify from 'rollup-plugin-glslify'
import postcss from 'rollup-plugin-postcss'
import alias from '@rollup/plugin-alias'
import ts from 'rollup-plugin-ts'
import { terser } from 'rollup-plugin-terser'
import { eslint } from 'rollup-plugin-eslint'

import tsconfig from './tsconfig.json'

const src = 'src'
const dest = 'dist'
const development = process.env.NOLLUP
const production = !development

export default {
  input: `${src}/javascripts/index.ts`,
  output: {
    dir: dest,
    format: 'iife',
    sourcemap: development,
    entryFileNames: '[name].[hash].js',
    assetFileNames: '[name].[hash][extname]'
  },
  plugins: [
    postcss({
      extract: true,
      minimize: production,
      plugins: [autoprefixer]
    }),
    nodeResolve(),
    commonjs(),
    glslify({ basedir: `${src}/javascripts/webgl/shaders` }),
    eslint(),
    ts(),
    cleaner({ targets: [dest] }),
    replace({
      'process.env.production': production,
      'process.env.development': development
    }),
    alias({
      resolve: ['.ts'],
      entries: Object
        .entries(tsconfig.compilerOptions.paths)
        .map(([find, [replacement]]) => ({ find, replacement }))
    }),
    production && staticFiles({ include: ['static'] }),
    production && htmlMinifier({ collapseWhitespace: true }),
    production && terser()
  ]
}
