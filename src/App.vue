<template>
  <Familiar :fam="fam"/>
  <button @click="incfam">Next familiar</button>
</template>

<script>
import Familiar from './components/Familiar.vue'

export default {
  name: 'App',
  components: {
    Familiar
  },
  data() {
    return { famnum: 0 }
  },
  computed: {
    fam() {
      return window.fams.favorites[this.famnum];
    }
  },
  methods: {
    incfam() {
      this.famnum = this.famnum + 1;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
