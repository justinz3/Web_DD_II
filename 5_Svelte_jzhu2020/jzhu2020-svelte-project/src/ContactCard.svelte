

<script>
    export let userName;
    export let userJobTitle;
    export let userJobDescription;
    export let userImage;

</script>


<header class="w3-container w3-cyan">
    <h1>{userName}</h1>
    <h3>{userJobTitle}</h3>
  </header>
<div class="w3-card-4">
    <img src={userImage} alt="{userImage}" style="width:50%;">
    <div class="w3-container w3-center">
        <p>{userJobDescription}</p>
    </div>
</div>

<style>



</style>