<script>
	import Navbar from './Navbar.svelte'
	import Title from './Title.svelte'

	// default settings
	let levelIndex = 0;
	let score = 0;
	let levels = ['not worthy', 'noob', 'padawan'];
	let thresholds = [1, 2, 3];

	// change score function
	function incrementScore() {
		score += 1;
	}

	// reactive variables
	$: if (score >= thresholds[levelIndex] && levelIndex < levels.length - 1) {
		levelIndex += 1;
	}
	$: console.log(levelIndex);
	$: levelNameUpper = levels[levelIndex].toUpperCase();
	

	// change level function
	function changeLevel() {
		if(score > 0)
			levelIndex = Math.max(0, levelIndex - 2); 
		// note: this function is unable to reduce the level back to levelIndex = 0
		// 			because the reactivity makes the index increment as soon as it is changed 
		//			due to how score thresholds are currently implemented
	}

</script>

<Navbar />

<Title />
<Title />
<Title />
<Title />

<main class="w3-black">
	<!-- <h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> 
	<p> My name is {name} and my age is {age}</p>

	<button on:click={incrementAge}> Change Age </button> -->

	<div class="w3-card w3-pading-48 w3-margin">
		<div class="w3-container">
			<h2>Welcome to Click Master! You are at {levelNameUpper} level.</h2>
			<p>Click below to increase your training and change your level...</p>

			<button on:click="{incrementScore}">Click</button> <h3>Score: {score}</h3>

			<button on:click="{changeLevel}">Change Level</button>
		</div>
	</div>
</main>

