<template>

    <div id="camera">
        <video :srcObject.prop.camel="this.$store.state.videoStreem" playsinline autoplay class="video"></video>
    </div>

</template>

<script>
export default {

/**** On start activate video feed. V-bind to html Video ****/
  async mounted() {
    console.log("Videofeed Activated")
    try {
        const videoFeed = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 }});
        this.$store.state.videoStreem = videoFeed;
    }   catch (error) {
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
        border-radius: 0.6rem;
        box-shadow: 1px 1px 5px 1px rgba(255, 146, 146, 0.877);
        border: solid 1.4px rgba(250, 128, 128, 0.527);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }

    @media only screen and (min-width: 780px) { 
        .video {
            width: 50vw;
        }
    }

</style>