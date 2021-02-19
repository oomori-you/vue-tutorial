<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr>
    <pre>{{ now }}</pre>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: 'Hello',
      message: 'this is message.',
      now: 'wait ...'
    }
  },
  created: function() {
    setInterval(() => {
      let d = new Date();
      this.now = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    })
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
</style>
