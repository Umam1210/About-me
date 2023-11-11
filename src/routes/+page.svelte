<script lang="ts">
	import Navbar from "./sverdle/navbar.svelte";


</script>

<svelte:head>
	<title>Khairul Umam</title>
	<meta name="Khairul Umam" content="About Me..." />
</svelte:head>
<style>
	h1 {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: inline-block;
  margin: 0 auto;
  font-weight: 900;
  text-transform: none;
  text-align: center;
  font-size: 6vw;
  animation: background 20s linear infinite;
  
  background: linear-gradient(90deg, rgba(150,48,30,1) 0%,rgba(199,201,88,1) 10%,rgba(28,147,46,1) 20%,rgba(74,165,168,1) 30%,rgba(89,90,165,1) 40%,rgba(84,16,67,1) 50%,rgba(28,58,63,1) 60%,rgba(82,175,183,1) 70%,rgba(78,170,76,1) 80%,rgba(150,48,30,1) 90%,rgba(199,201,88,1) 100%);
  background-size: 1000% 100%;
  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
}



@keyframes background {
  0%{background-position:0% 50%}
  100%{background-position:100% 50%}
}
</style>


<div >
	<div class="flex items-center justify-center mt-12">
		<Navbar />
	</div>
	<div class="h-96 flex flex-col items-center justify-center">
	<h1>Hi. I'm Khairul.</h1>
	<h1>a Software Engineer</h1>
</div>

</div>
