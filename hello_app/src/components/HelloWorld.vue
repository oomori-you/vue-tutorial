<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <pre>{{ message }}</pre>
    <hr>
    <div class="area"
         v-on:click.left.prevent="left"
         v-on:click.middle.prevent="middle"
         v-on:click.right.prevent="right"
    >
      click here!
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
    left: function() {
      this.message = '[left button]';
    },
    right: function() {
      this.message = '[right button]'
    },
    middle: function() {
      this.message = '[middle button]'
    }
  },
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
.area {
  width: 300px;
  height: 100px;
  background-color: #ddd;
  padding: 10px;
  font-size: 20px;
}

</style>
