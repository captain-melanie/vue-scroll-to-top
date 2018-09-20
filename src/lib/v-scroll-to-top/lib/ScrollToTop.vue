<template>
  <div>
    <a @click="scrollToTop"
       v-show="isVisible"
       id="icon-container"
       href="javascript:"
       role="button">
      <customIcon name="chevron-up" id="icon-arrow-up"></customIcon>
    </a>
  </div>
</template>

<script>
import customIcon from './lib/vue-feather.esm'
export default {

  data() {
    return {
      isVisible: false,
    }
  },
  components: {
    customIcon
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    handleScroll(event) {
      event.preventDefault();
      this.isVisible = ((document.documentElement
          && document.documentElement.scrollTop)
          || document.body.scrollTop ) >= 0.2 * window.innerHeight
    }
  }

}
</script>

<style scoped>

#icon-container {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: rgba(0, 0, 0, 0.7);
  width: 50px;
  height: 50px;
  display: block;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
#icon-container:hover {
  background: rgba(0, 0, 0, 0.9);
}
#icon-arrow-up {
  position: relative;
  color: #fff;
  margin: 0;
  top: 10px;
  width: 30px;
  height: 30px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
#icon-arrow-up:hover {
  top: 5px;
}

</style>
