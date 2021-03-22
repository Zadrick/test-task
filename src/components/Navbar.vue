<template lang="pug">
  .navbar(ref="navbar" :class="visible? 'navbar_show': 'navbar_hide'")
    i(class="fas fa-times navbar__close c-sor_point" ref="close-navbar" @click="visible = false")
    .navbar__content
      router-link.navbar__content__links(v-for="link in props.items" :to="link.to") {{link.text}}
      
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component({
  props: {
    props: {}
  }
})
export default class Navbar extends Vue {

  visible = false
 
  @Watch('visible') onVisibleChange(c: boolean) {
    const { navbar } = this.$refs //annotatio Element dont works
    navbar.style.display = 'block'
    c? navbar.classList.add('navbar_show')
    :navbar.classList.add('navbar_hide')
  }

  mounted() {
    window.addEventListener('open-navbar', ()=> this.visible = true)
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    display: none;
    border-top-right-radius: 20px;
    position: fixed ;
    top: 0;
    min-width: 200px;
    overflow: hidden;
    min-height: 100vh;
    background: #170042;

    border-right: 5px solid #8c00ff;
    border-top: 5px solid #8c00ff;
  }

  .navbar__close {
    margin: 5px auto 5px calc(100% - 21px);
    color: #fff;

    &:hover {
      animation-name: shake;
      animation-duration: .2s;
    }
  }

  .navbar__content {
    margin: 20px 0;
  }

  .navbar__content__links {
    display: block;
    text-decoration: none;
    padding: 10px;
    color: #fff;

    &:hover {
      background: #8a00fc;
      color: #000;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }
  }

  .navbar_hide {
    animation-name: hide-navbar;
    animation-duration: .5s;
    animation-fill-mode: forwards;
  }

  .navbar_show {
    animation-name: show-navbar;
    animation-duration: .5s;
    animation-fill-mode: forwards;
  }

  @keyframes hide-navbar {
    0% {
      left: 0;
    }

    100% {
      left: -100%;
    } 
  }

  @keyframes show-navbar {
    0% {
      left: -100%;
    }
    100% {
      left: 0;
    } 
  }

  @keyframes shake {
    0% {
      transform: rotate(0);
    }

    50% {
      transform: rotate(90deg);
    }

    100% {
      transform: rotate(-90deg);
    }
  }
</style>