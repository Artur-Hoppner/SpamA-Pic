<template>
<div>

      <button v-on:click="greyscale()" >greyscale</button>
<!-- <input type="range" min="0" max="100" step="1" value="0" > -->
      <button @click="bright" >bright</button>
</div>
</template>

<script>
// import Caman from "Caman"

export default {
methods: {
  bright() {
    this.Caman("#photo", function () {
      this.brightness(40)
      this.render();
    })
  },

  greyscale() {
    this.Caman("#photo", function () {
        this.greyscale()
        this.render();
      })
  },
},

}

</script>

<style lang='scss'>

</style>