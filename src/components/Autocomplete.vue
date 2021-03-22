<template lang="pug">
  .autocomplete
    input.autocomplete__input(ref="input" v-model="input.value")
    .autocomplete__dropdown(v-if="dropdown.visible")
      .autocomplete__dropdown__box
        .autocomplete__dropdown__box__items(v-for="item in props.items.filter(e=> e.html.toLowerCase().match(input.value.toLowerCase()))") {{item.html}}
</template>

<script lang="ts">
// WARNING! Adding event listener "click" is available only in mounted (@click="" will not work!)
//it has been done to hide .autocomplete__dropdown on click where ever but not dropdown self
import { Vue, Component } from 'vue-property-decorator'

@Component({
  props: {
    props: {}
  }
})
export default class Autocomplete extends Vue {
  input = {
    value: '' 
  }

  dropdown = {
    visible: false
  }

  mounted() {
    //has to be redone
    window.addEventListener('click', (e: MouseEvent)=> {
      
      if(e.target === this.$refs.input) this.dropdown.visible = !0
      else if(e.target!.className === 'autocomplete__dropdown__box__items') this.input.value = e.target.innerText
      else if(this.dropdown.visible) this.dropdown.visible = !!0
    })
  }
}
</script>

<style lang="scss" scoped>
.autocomplete__input {
  border: none;
  border-radius: 5px;
  outline: none;
  width: 300px;
  height: 20px;
  padding: 0 5px;
}

.autocomplete__dropdown {
  position: relative;
}

.autocomplete__dropdown__box {
  position: absolute;
  width: 100%;
  background: #f0f0f0;
}

.autocomplete__dropdown__box__items {
  cursor: pointer;
  padding: 1px 5px;

  &:hover {
    background: #0000004d;
  }
}
</style>