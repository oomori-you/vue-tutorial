<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <pre v-on:click="clear">{{ message }}</pre>
    <hr>
    <div>
      <input type="text"
             v-on:keypress="type"
             v-on:keydown.delete="clear"
             v-on:keydown.space="space"
             v-on:keydown.enter="enter"
      >
    </div>
  </div>
</template>

<script>
export default  {
  name: 'HelloWorld',
  props: {
    title: String,
  },
  data: function() {
    return {
      message: '',
    };
  },
  methods: {
    type: function (event) {
      if (event.key === 'Enter') {
        return;
      }
      this.message += event.key + ' ';
      event.target.value = '';
    },
    clear: function() {
      this.message = ''
    },
    space: function() {
      this.message += '_ ';
    },
    enter: function (event) {
      let res = this.message.split(' ').join('')
      this.message = res.split('_').join(' ');
      event.target.value = '';
    }
  }
}
</script>

<style>
div {
  margin: 0px;
  padding: 0px;
  text-align: left;
}

h1 {
  font-size: 72pt;
  font-weight: bold;
  text-align: right;
  letter-spacing: -8px;
  color: #f0f0f0;
  margin: 0px;
}
p {
  margin: 0px;
  color: #666;
  font-size: 16px;
}
pre {
  font-size: 14px;
  line-height: 1.25;
}
div.out {
  padding: 5px 0px;
  background-color: #eee;
  width: 300px;
  height: 200px;
}
div.mid {
  padding: 5px 0px;
  background-color: #ddd;
  width: 200px;
  height: 175px;
}
div.in {
  padding: 5px 0px;
  background-color: #ccc;
  width: 100px;
  height: 150px;
}

</style>
