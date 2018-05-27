<template>
  <div id="app">
    <!-- <Search></Search> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
body,
html{
margin: 0;
height: 100%;
}
input{
    padding: 0;
    border-width: 0;
    outline: none;
}
ul,
li{
  padding: 0;
  margin: 0;
  list-style: none;
}
p{
  margin: 0;
}
h2{
  margin: 0;
}
img{
  border: none;
  vertical-align: middle;
}
</style>
