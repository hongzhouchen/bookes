<template>

  <div class="contianer">
    {{name}}
    <!--首页轮播-->
    <section class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">slider1</div>
        <div class="swiper-slide">slider2</div>
        <div class="swiper-slide">slider3</div>
      </div>
      <!--分页点-->
      <div class="swiper-pagination"></div>
    </section>
  </div>


</template>

<style>


</style>
<script>
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.min.css"


  /**/
  export default {
    mounted() {
      /*创建Vue 的实例对象 */
      var mySwiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
        }
      });
    },
    data() {
      return {
        name: 'Charles'
      }
    }
  }
</script>
