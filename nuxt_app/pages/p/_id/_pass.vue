<script src="../../../store/index.js"></script>
<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p v-html="message">no message.</p>
    <hr>
    <div class="right">
      <router-link to="/">Go to Top</router-link>
    </div>
  </div>
</template>

<script>
export default {
  validate ({ params}) {
    if (params.id === undefined || params.pass === undefined) {
      return false;
    } else {
      return true;
    }
  },
  data: function() {
    return {
      title: 'Login',
    }
  },
  computed: {
    message: function() {
      let id = this.$route.params.id !== undefined ? this.$route.params.id : '*** no id ***';
      let pass = this.$route.params.pass !== undefined ? this.$route.params.pass : '*** no password ***';
      return 'ID: ' + id + '<br>PASS: ' + pass;
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
a {
  font-size: 16pt;
}
.right {
  tet-align: right;
}
</style>
