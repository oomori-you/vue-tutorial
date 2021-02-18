<template>
  <div id="app">
    <HelloWorld :title="slot">
      <li v-for="obj in slotobjs" :key="obj.name">
        {{ obj.name }} ({{ obj.mail }})
      </li>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data: function() {
    return {
      slotobjs: [
        {name: 'Taro', mail: 'taro@'},
        {name: 'Hanako', mail: 'hanako@'},
        {name: 'Sachiko', mail: 'sachiko@'},
      ]
    };
  },
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
