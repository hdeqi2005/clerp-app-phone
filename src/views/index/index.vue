<template>
  <div id="app"  v-cloak>
     <router-view/>
  </div>
</template>

<script>


export default {
  name:'index',
  data(){
    return {
       access:''
    }
  },
  computed: {
    // menuList () {
    //   let tempMenuList =this.$store.getters.menuList_getters
    //   console.log('tempMenuList'+JSON.stringify(tempMenuList))
    //   return tempMenuList
    // }
  },
  mounted(){
     
  },
  methods:{
    // openScan(){
    //   var FNScanner = window.api.require('FNScanner');
    //     FNScanner.open({
    //         autorotation: true
    //     }, function(ret, err) {
    //         if (ret) {
    //             alert(JSON.stringify(ret));
    //         } else {
    //             alert(JSON.stringify(err));
    //         }
    //     })
    // },
  
}
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 // color: #2c3e50;
}

</style>
