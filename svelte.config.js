import adapter from 'svelte-adapter-github';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
        paths: {
            base: dev ? '' : '/dani'
        },
        // appDir: 'internal'
	}
};

export default config;
