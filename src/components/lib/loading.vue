<template>
	<div>
		<div class="loader">
			<div class="box">test</div>
		</div>
		<div class="overlay"></div>
	</div>
</template>

<style scoped>
.overlay{
top:0;
left: 0;
width: 100%;
height: 100%;
margin: auto;
position: fixed;
opacity: 0.3;
background-color: #000;	
}
.loader {
top:0;
left: 0;
width: 100%;
height: 100%;
margin: auto;
position: fixed;
}
.box{
top: calc( 50% - 50px);
left: calc( 50% - 50px);
width: 100px;
height: 100px;
position: fixed;
background-color: darkcyan;
}
</style>

<script>
export default {
  name: "Loading",
  props: {},
  components: {},
  data() {
    return {};
  }
};
</script>
