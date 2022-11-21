<script>
	import '../app.css';
	import Particles from 'svelte-particles';
	import { loadFull } from 'tsparticles';
    import Icon from 'fa-svelte';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';

	let particlesConfig = {
		fpsLimit: 60,
		background: {
			color: '#000000'
		},
		interactivity: {
			detectsOn: 'window',
			events: {
				onHover: {
					enable: true,
					mode: 'bubble'
				},
				resize: true
			},
			modes: {
				bubble: {
					distance: 40,
					duration: 2,
					opacity: 8,
					size: 10,
					speed: 3
				},
				repulse: {
					distance: 50,
					duration: 0.4
				}
			}
		},
		particles: {
			color: {
				value: '#ff0000',
				animation: {
					enable: true,
					speed: 20,
					sync: true
				}
			},
			lineLinked: {
				blink: false,
				color: 'random',
				consent: false,
				distance: 200,
				enable: true,
				opacity: 0.3,
				width: 0.5
			},
			move: {
				attract: {
					enable: true,
					rotate: {
						x: 600,
						y: 1200
					}
				},
				bounce: false,
				direction: 'none',
				enable: true,
				outMode: 'bounce',
				random: true,
				speed: 0.5,
				straight: false
			},
			number: {
				density: {
					enable: false,
					area: 2000
				},
				limit: 0,
				value: 50
			},
			opacity: {
				animation: {
					enable: true,
					minimumValue: 0.05,
					speed: 2,
					sync: false
				},
				random: false,
				value: 1
			},
			shape: {
				type: 'circle'
			},
			size: {
				animation: {
					enable: false,
					minimumValue: 1,
					speed: 40,
					sync: false
				},
				random: true,
				value: 3
			}
		}
	};

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;
	};
	let particlesInit = async (main) => {
        if (window.matchMedia("(min-width: 1024px)").matches) {
            particlesConfig.particles.number.value = 150
        }
		await loadFull(main);
	};
</script>

<Particles
	id="tsparticles"
	options={particlesConfig}
	on:particlesLoaded={onParticlesLoaded}
	{particlesInit}
/>
<header />
<slot />
<footer
	class="bg-accent font-['JetBrains_Mono'] text-xs lg:text-xl text-text-primary py-5 grid gap-4 grid-cols-3 grid-rows-1 items-center">
	<div><a href="https://github.com/HFDan" class="ml-10 inline-block self-start"><Icon class="text-[2em]" icon={faGithub}></Icon></a></div>
	<div class="text-center">Made with ❤️ for Open Source and Programming</div>
</footer>
