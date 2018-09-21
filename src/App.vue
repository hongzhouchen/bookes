<template>
  <div id="app">
      <router-view/>
      <Footer/>
  </div>
</template>

<script>
  import  Footer from '@/components/Footer'

export default {
    name: 'App',
    components:{
       Footer
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    margin-top: 10px
    color: #333;
</style>
