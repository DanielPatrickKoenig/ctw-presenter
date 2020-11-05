<template>
  <div class="prez-container">
    <header>
      <img src="CSS_TrainingWheel_02.svg" />
      <h1>Training Wheels</h1>
      <label>Slide {{slideIndex + 1}} / {{slides.length}}</label>
    </header>
    <div
      v-for="(slide, i) in slides"
      :key="'slide-'+i.toString()"
    >
      <Slide
        v-if="slideIndex == i"
        :title="slides[slideIndex].title"
        :images="slides[slideIndex].images"
        :bullets="slides[slideIndex].bullets"
        v-on:click="incrementSlide"
      />
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue';
import axios from 'axios';
import Slide from './components/Slide.vue';
export default {
  name: 'App',
  components: {
    Slide
  },
  setup () {
    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    function incrementSlide(){
      slideIndex.value++;
      if(slideIndex.value >= slides.value.length){
        slideIndex.value = 0;
      }
    }
    const slideIndex = ref(0);
    const slideName = getParameterByName('slide');
    const slideFilePath = slideName ? `slides/${slideName}.json` : 'slides/testslides.json';
    const slides = ref([]);
    
    onMounted(() => {
      axios.get(slideFilePath).then((result) => {
        slides.value = result.data;
      });
    });
    return  {slides, slideIndex, incrementSlide};
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=K2D:wght@400;700&display=swap');
body{
  font-family:K2D;
}
.prez-container{
  width:1200px;
  max-width:100%;
  margin:0 auto;
}
header{
  box-shadow:0 1px 0 #3588C9;
  height: 5em;
}
header > h1{
  display:inline-block;
  font-size:4.8em;
  margin-top:-12px;
  margin-left:12px;
  color:#3588C9;
  text-shadow: 0 3px 0 #ffffff, 6px 0 0 #ffffff, -6px 0 0 #ffffff;
}
header > img{
  width:60px;
  height: auto;
  margin-bottom:-.25em;
}
header > label{
  float:right;
}
</style>
