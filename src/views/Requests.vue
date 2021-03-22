<template lang="pug">
  div
    h1 {{$route.name}}
    h1 visited {{$store.getters['home/visitsQuantity']}} times
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  
}
</script>
