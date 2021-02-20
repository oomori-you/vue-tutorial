<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ $store.state.message }}</p>
    <hr>
    <router-link to="/other">Go to Other</router-link>
    <div class="link"
         @click.exact="$store.commit('count', 1)"
         @click.shift="$store.commit('count', 2)"
         @click.meta="$store.commit('reset')">
      <a>
        clicked: {{ $store.state.counter }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: 'Hello',
      message: 'this is message.',
    }
  }
}
</script>

<style>
.container {
  padding: 5px 10px
}

h1 {
  font-size: 60px;
  color: #345980
}

p {
  padding-top: 5px;
  font-size: 20px
}

pre {
  padding: 10px;
  font-size: 18pt;
  background-color: #efefef;
}

hr {
  margin: 10px 0px;
}

a {
  font-size: 16pt;
}

.link {
  background-color: #def;
  padding: 10px;
}
</style>
