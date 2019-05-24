import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';

export default {
	input: 'src/components/index.js',
	output: {
		name: 'react-vtl-editor',
		file: 'lib/index.js',
		format: 'cjs',
		strict: false,
		globals: {
			react: 'React',
		},
		sourcemap: true,
	},
	plugins: [
		builtins(),
		resolve(),
		postcss(),
		babel({
			exclude: 'node_modules/**',
			include: 'node_modules/antlr4/**',
			plugins: ['external-helpers'],
		}),
		replace({
			exclude: 'node_modules/**',
			ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
		}),
		commonjs(),
	],
	external: [
		'react',
		'react-dom',
		'prop-types',
		'react-monaco-editor',
		'antlr4',
	],
};
