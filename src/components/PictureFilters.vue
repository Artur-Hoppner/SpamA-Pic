<template>
<div>

      <button v-on:click="greyscale" >greyscale</button>
      <button v-on:click="kawaii" >kawaii</button>
      <button @click="reset" >reset</button>

      <label for="bright">Brightness</label>
      <input type="range" min="0" max="100" value="0" step="5" v-on:change="bright"  class="slider">

      <label for="Noise">Make Some Noise</label>
      <input type="range" min="0" max="100" value="0" step="5" v-on:input="noise"  class="slider">

</div>
</template>

<script>
export default {

/***** 1 Alternative Brightness *****/
  /*Alternative
  data() {
    return {
      currentBrightness: 0,
    }
  },
  */

  methods: {
    
      bright(data) {
        const inputValue = parseInt(data.target.value)
        
          this.Caman("#myCanvas", function () {
            this.revert();
            this.brightness(inputValue)
            this.render();
          })
      },

      noise(data) {
        const inputValue = parseInt(data.target.value)

          this.Caman("#myCanvas", function () {
            this.revert();
            this.hue(inputValue)
            this.render();
          })
      },

      greyscale() {
        this.Caman("#myCanvas", function () {
          this.greyscale()
          this.render();
        })
      },

      kawaii() {
        this.Caman("#myCanvas", function () {
          this.love()
          this.render();
        })
      },

    reset() {
      this.Caman("#myCanvas", function () {
          this.revert();
      })
    },

  },

/***** 1 Alternative Brightness *****/
  /*  bright(data) {
      const inputValue = parseInt(data.target.value)
      const currentBrightness = this.currentBrightness
      
        this.Caman("#photo", function () {
          if(inputValue > currentBrightness) {
            this.brightness(5)
            this.render();
            } else {
              this.brightness()
              this.revert(5);
              }
          })

      this.currentBrightness = inputValue
    },
    */

}

</script>

<style lang='scss'>
.slider {
  -webkit-appearance: none;
  width: 15vw;
  height: 25px;
  background: #575757;
  border: solid 1px rgb(182, 87, 87);
  outline: none;
  opacity: 0.5;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-radius: 1rem;
}

.slider:hover {
  opacity: 0.8;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: solid 1px rgb(182, 87, 87);
  background: #e97f87;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: solid 1px rgb(182, 87, 87);
  background: #e97f87;
  cursor: pointer;
}


</style>