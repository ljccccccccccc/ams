<template>
  <div id="app">
    <router-view></router-view>
  </div>  
</template>


<style>
*{
  margin: 0;
  padding: 0;
}
html::-webkit-scrollbar{
display: none;
}
</style>

<script>
// import Index from './pages/index';

  export default {
    name:'app'    
  };
</script>
