<template>
<div id="camera">
    <h1>Video Component</h1>
        <video :srcObject.prop.camel="this.$store.state.videoStreem" autoplay class="video"></video>

</div>
</template>

<script>
export default {
//     data() {
//     return {
//         videoStreem: ''
//     }
// },

computed: {

    // getVideoStream() {
    //     return this.$store.state.videoStreem
    //     console.log(videoStreem)
    //     }
},
  
//   methods: {
//       async captureImage() {
//   const mediaTrack = this.$store.state.videoStreem.getVideoTracks()[0];
//   console.log(mediaTrack);
//   const captureImg = new ImageCapture(mediaTrack);
//   const photo = await captureImg.takePhoto()
//   console.log(photo)
//   this.$refs.photo.src = URL.createObjectURL(photo);
// //   console.log(imgUrl);
// //   this.$refs.photo.src = imgUrl;
// }
//   },

  // On start activate video feed. V-bind to html Video
  async mounted() {
      console.log("Videofeed Activated")
      try {
        const videoFeed = await navigator.mediaDevices.getUserMedia({ video: true});
        this.$store.state.videoStreem = videoFeed;

        const track = this.$store.state.videoStreem.getVideoTracks()[0];
        console.log(track, "track")
        let imageCapture = new ImageCapture(track);
         console.log(imageCapture, "imageCapture")
      } catch (error) {
          console.log(error);
      }
  },

}

</script>

<style lang='scss'>
.video {
   width: 85vw;

}
</style>