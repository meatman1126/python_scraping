import App from './Scraping.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'scraping'
	}
});

export default app;