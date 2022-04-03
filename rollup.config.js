import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import sass from 'node-sass';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import packageJson from './package.json';

// see https://gist.github.com/BenjaminWFox/567fd293013090ec565b61228088087a

export default {
  input: './src/index',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'react-is': ['isForwardRef', 'isValidElementType'],
      },
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    postcss({
      preprocessor: (content, id) => new Promise((res) => {
        const result = sass.renderSync({ file: id })

        res({ code: result.css.toString() })
      }),
      plugins: [autoprefixer],
      modules: {
        scopeBehaviour: 'global',
      },
      sourceMap: true,
      extract: true,
    }),
  ],
};
