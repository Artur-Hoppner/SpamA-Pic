<template>
<div id="camera">
    <h1>Video Component</h1>

    <video :srcObject.prop.camel="videoStreem" autoplay ></video>

</div>
</template>

<script>
export default {
    data() {
    return {
        videoStreem: ''
    }
},

  async mounted() {
      console.log("Videofeed Activated")
      try {
        const videoFeed = await navigator.mediaDevices.getUserMedia({ video: true});
        this.videoStreem = videoFeed;
      } catch (error) {
          console.log(error);
      }
  },

}

</script>

<style lang='scss'>

</style>