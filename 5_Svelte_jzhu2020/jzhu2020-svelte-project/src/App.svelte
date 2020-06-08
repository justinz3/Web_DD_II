<script>
	import Navbar from './Navbar.svelte'

    // default variable values
    let name = "Mii";
    let jobTitle = "JumpMan";
    let jobDescription = "I platform";
    let profileImage = "https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png";
</script>

<Navbar />


<!-- Contact Card Form -->
<div class="w3-container w3-cell-row">
    
    <div class="w3-card-4 w3-cell w3-half">
        <div class="w3-container w3-green">
            <h2>Contact Card Input</h2>
        </div>

        <form class="w3-container">
            <p>
                <input class="w3-input w3-hover-cyan" type="text" bind:value="{name}">
                <label>Name</label></p>
            <p>     
                <input class="w3-input w3-hover-cyan" type="text" bind:value="{jobTitle}">
                <label>Job Title</label>
            </p>

            <p>     
                <input class="w3-input w3-hover-cyan" type="text" bind:value="{jobDescription}">
                <label>Job Description</label>
            </p>

            <p>     
                <input class="w3-input w3-hover-cyan" type="text" bind:value="{profileImage}">
                <label>Profile Image</label>
            </p>
        </form>
    </div>

    <div class="w3-cell w3-half">

        

    </div>
</div>

<style>



</style>
