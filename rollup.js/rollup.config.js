import buble from 'rollup-plugin-buble';
import eslint from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify';

// rollup.config.js
export default {
  entry: 'src/main.js',
  entry: 'src/main.js',
  moduleName: 'es6',
  plugins: [ 
  buble(),
  uglify(),
  eslint({
      exclude: [
      'styles/**',
      ]
  }),
  ],
  targets: [
    //{ dest: 'dist/bundle.umd.js', format: 'umd' }, // 477 bytes
    { dest: 'dist/bundle.cjs.js', format: 'cjs' }, // 263 bytes
    //{ dest: 'dist/bundle.es.js', format: 'es' }, // 248 bytes
    //{ dest: 'dist/bundle.iife.js', format: 'iife' }, // 285 bytes
    ],
    sourceMap: 'inline'
};
