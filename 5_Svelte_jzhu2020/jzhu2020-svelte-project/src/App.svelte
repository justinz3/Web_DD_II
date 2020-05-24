<script>
	import Navbar from './Navbar.svelte'
	import Title from './Title.svelte'

	// default settings
	let levelIndex = 0;
	let score = 0;
	let levels = ['not worthy', 'noob', 'padawan'];
	let thresholds = [1, 2, 3];
	let userName = "Mii";

	// change score function
	function incrementScore() {
		score += 1;
	}

	// reactive variables
	$: if (score >= thresholds[levelIndex] && levelIndex < levels.length - 1) {
		levelIndex += 1;
	}
	$: console.log(levelIndex);
	$: console.log(userName);
	$: levelNameUpper = levels[levelIndex].toUpperCase();
	

	// change level function
	function changeLevel() {
		if(score > 0)
			levelIndex = Math.max(0, levelIndex - 2); 
		// note: this function is unable to reduce the level back to levelIndex = 0
		// 			because the reactivity makes the index increment as soon as it is changed 
		//			due to how score thresholds are currently implemented
	}

	// function nameInput(event) {
	// 	const enteredValue = event.target.value;
	// 	userName = enteredValue;
	// }

</script>

<Navbar />


<main class="w3-black">

	<div class="w3-card w3-pading-48 w3-margin">
		<div class="w3-container w3-cell-row">
			<div class="w3-cell" style="width:50%;">
				<h2>Welcome to <Title /></h2>
			</div>
			<div class="w3-cell" style="width:50%;">

				<button on:click="{incrementScore}">Click</button> <h3>Score: {score}</h3>

				<button on:click="{changeLevel}">Change Level</button>
				<h2>You are at {levelNameUpper} level.</h2>

				<h3>User Name:</h3>
				<!-- <input type="text" value="{userName}" on:input="{nameInput}"> long way two-way binding -->

				<input type="text" bind:value="{userName}"> 
			</div>
		</div>
	</div>
</main>

