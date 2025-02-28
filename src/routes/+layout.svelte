<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import '@fontsource/zilla-slab/600.css';
	import '@fontsource/podkova/600.css';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	onMount(() => {
		AOS.init();
	});
</script>

<slot />
