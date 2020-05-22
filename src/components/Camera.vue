<template>
<div id="camera">
        <video :srcObject.prop.camel="this.$store.state.videoStreem" playsinline autoplay class="video"></video>

</div>
</template>

<script>
export default {



  // On start activate video feed. V-bind to html Video
  async mounted() {
      console.log("Videofeed Activated")
      try {
        const videoFeed = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 }});
        this.$store.state.videoStreem = videoFeed;

        // const track = this.$store.state.videoStreem.getVideoTracks()[0];
        // console.log(track, "track")
        // let imageCapture = new ImageCapture(track);
        //  console.log(imageCapture, "imageCapture")
      } catch (error) {
          console.log(error);
      }
  },

}

</script>

<style lang='scss'>
body {
      background-image: url("../assets/hearts.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
.video {
   width: 75vw;
   border-radius: 1%;
   box-shadow: 1px 1px 5px 1px rgba(255, 146, 146, 0.877);
   border: solid 1px rgba(0, 0, 0, 0.13);


}

    @media only screen and (min-width: 780px) { 
        .video {
     width: 50vw;
    }

    }
</style>