<script>
	import Navbar from './Navbar.svelte'
    import ContactCard from "./ContactCard.svelte"

    // default variable values
    let userNameInput = "Mii";
    let userJobTitleInput = "JumpMan";
    let userJobDescriptionInput = "I platform";
    let userImageInput = "https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png";
</script>

<Navbar />


<!-- Contact Card Form -->
<div class="w3-container w3-cell-row">
    
    <div class="w3-card-4 w3-cell w3-half w3-padding">
        <div class="w3-container w3-green">
            <h2>Contact Card Input</h2>
        </div>

        <form class="w3-container">
            <p>
                <input class="w3-input w3-hover-cyan" type="text" bind:value="{userNameInput}" style="width:50%;">
                <label>Name</label>
            </p>
            <p> 
                <input class="w3-input w3-hover-cyan" type="text" bind:value="{userJobTitleInput}" style="width:50%;">
                <label>Job Title</label>
            </p>

            <p> 
                <input class="w3-input w3-hover-cyan" type="text" bind:value="{userJobDescriptionInput}" style="width:50%;">
                <label>Job Description</label>
            </p>

            <p> 
                <input class="w3-input w3-hover-cyan" type="text" bind:value="{userImageInput}" style="width:50%;">
                <label>Profile Image</label>
            </p>
        </form>
    </div>

    <div class="w3-cell w3-half w3-padding">

        <ContactCard 
            
            userName = {userNameInput}
            userJobTitle = {userJobTitleInput}
            userJobDescription = {userJobDescriptionInput}
            userImage = {userImageInput}

        />

    </div>
</div>

<style>



</style>
