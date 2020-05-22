import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Justin',
		age: 17
	}
});

export default app;