import esbuild from 'esbuild'
import fs from 'fs'
import path from 'path'
import glob from 'tiny-glob'

const dir = process.cwd()

const packageJson = JSON.parse(await fs.promises.readFile(path.join(dir, 'package.json'), 'utf8'))

/** @type {import("esbuild").BuildOptions} */
const options = {
  entryPoints: [path.join(dir, packageJson.main)],
  platform: 'node',
  bundle: true,
  external: [...Object.keys(packageJson.dependencies || {}), ...Object.keys(packageJson.devDependencies || {})],
}

esbuild
  .build({
    ...options,
    outdir: path.join(dir, 'dist', 'cjs'),
    format: 'cjs',
    outExtension: {
      '.js': '.cjs',
    },
  })
  .then(() => console.log(`cjs build complete`))
esbuild
  .build({
    ...options,
    outdir: path.join(dir, 'dist', 'esm'),
    format: 'esm',
    outExtension: {
      '.js': '.mjs',
    },
  })
  .then(() => console.log(`esm build complete`))
