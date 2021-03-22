<template lang="pug">
  header
    .d_flex
      i(class="fas fa-bars header__bars c-sor_point" @click="openNavbar")
      router-link(to="/")#logo
    //- let that we are finding a car
    router-link(to="#" v-if="$route.path === '/options'" style="color: #000") вернуться к публичной части
    Autocomplete(:props="autocomplete" v-else)
    
    i(class="fas fa-sign-out-alt c-sor_point" @click="localStorage.clear(), $router.replace('/')")

    
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    Autocomplete: ()=> import('@/components/Autocomplete.vue')
  }
})
export default class Home extends Vue {
  localStorage = localStorage

  openNavbar() {
    dispatchEvent(new Event('open-navbar'))
  }
  autocomplete = {
    items: this.$store.getters['header/cars']
  }
}
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    padding: 0 10px;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    background: #0065fc;

      .d_flex {
        justify-content: space-evenly;
        align-items: center;
      }

      .header__bars {
        font-size: 150%;

        &:hover {
        transition: .2s;
        transform: rotateY(180deg);
      }
      }

      #logo {
        display: block;
        height: 40px;
        width: 40px;
        background-image: url('../assets/logo.png');
        background-size: 100%;

        &:hover {
          transform: rotate(360deg);
          transition: .2s;
        }
      }
  }


</style>
