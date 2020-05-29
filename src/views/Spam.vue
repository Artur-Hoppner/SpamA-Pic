<template>
  <div>
          <button v-on:click="subthescribe">subscribe</button>

    <section class="top-container">
      <img src="../assets/unicorn-hearts.png" alt="unicorn-hearts" class="img-unicorn">
      <div class="title-container">
      <h1>Spam </h1>
      <h1>A</h1>
      <h1>Pic</h1>
    </div>
    </section>
<Camera />
<Pictures />


  </div>
</template>

<script>
import Camera from '../components/Camera'
import Pictures from '@/components/Pictures.vue'

export default {
  data: () => ({
    
    }),
  name: 'Spam',
  components: {
    Camera,
    Pictures,

  },
  methods: {
      subthescribe() {
        this.$store.dispatch("subscribeMe")
      }


  }
}
</script>

<style lang="scss">

body {
  background-color: rgb(255, 185, 185);
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  }

.top-container {
  display: flex;
  justify-content: center;
}


  h1{
    margin: 0 0 0 0;
  }

.img-unicorn {
        width: 25%;
        height: 25%;
}

    @media only screen and (min-width: 760px) { 
      .img-unicorn {
        width: 13%;
        height: 13%;
      }
    }
        @media only screen and (min-width: 1100px) { 
  h1{
    font-size: 40px;  }
    }

button {
    margin: 5px;
    border: none;
    border-radius: 0.3rem;
    background-color: rgb(241, 126, 126) ;
    background-size: 42px;
    box-shadow: 1px 1px 1px 1px rgba(255, 140, 140, 0.534);

    -webkit-appearance: none;
    -moz-appearance: none;
  }

</style>
