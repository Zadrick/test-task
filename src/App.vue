<template lang="pug">
  //-dont know how to use SOLID here... ))):
  div
    title {{$route.name}}
    Header
    .body
      span.body__path {{location.origin + $route.path.replaceAll('/', '->')}}
      Navbar(:props="navbar")
      notifications(group="app" position="top right")

      router-view
    Footer
</template>

<script lang="ts">
//using class-style option in vue-cli project generating
import { Vue, Component, Watch } from 'vue-property-decorator'
import store from './store'

@Component({
  components: {
    Header: ()=> import('@/components/Header.vue'),
    Navbar: ()=> import('@/components/Navbar.vue'),
    Footer: ()=> import('@/components/Footer.vue')
  }
})
export default class App extends Vue {

  location = location

  get navbar() {
    return {
      items: this.$route.path === '/options'? [
          { text: 'Группы пользователей', to: 'users' },
          { text: 'Пользователи', to: 'users-groups' }
        ]
        : [
          { text: 'Главная', to: '/' },
          { text: 'Сайт', to: '/app' },
          { text: 'Заявки', to: '/requests' },
          { text: 'Настройки', to: '/options' }
        ]
    }
  }

  @Watch('$route.path') onRedirect(c: string) {
    if(this.navbar.items.find(e=> e.to === c)) {
      if(c === '/') this.$store.commit('home/SET_VISITS_QUANTITY', this.$store.getters['home/visitsQuantity'] +1)
      else this.$store.commit(`${c.replace('/', '')}/SET_VISITS_QUANTITY`, this.$store.getters[`${c.replace('/', '')}/visitsQuantity`] +1)
      this.$notify({ group: 'app', text: this.navbar.items.find(e=> e.to === c)!.text, duration: 2000, speed: 200})
    }
  }

  mounted() {
    console.log(this.navbar)
  }
} 
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: monospace;
}

.c-sor_point {
  cursor: pointer;
}

.d_flex {
  display: flex;
}

.body {
  min-height: 100vh;
  padding: 5px;
  background: #0a0061;
}

.body__path {
  color: #fff
}
</style>