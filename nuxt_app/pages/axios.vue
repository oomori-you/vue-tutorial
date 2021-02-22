<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <input v-model="find">
    <button @click="getData">Click</button>
    <hr>
    <ul v-for="(data, key) in json_data" :key="key">
      <li><strong>{{ key }}</strong><br>{{data}}</li>
    </ul>
  </div>
</template>

<script>
const axios = require('axios')

let url = 'https://valsamina-vue-default-rtdb.firebaseio.com/person.json?orderBy=%22age%22';

export default {
  data: function() {
    return {
      title: 'Axios',
      message: 'axios sample.',
      find: '',
      json_data: {}
    };
  },
  methods: {
    getData: function() {
      let range = this.find.split(',');
      let age_url = url + "&startAt=" + range[0] + "&endAt=" + range[1];
      axios.get(age_url).then((res) => {
        this.message = 'get: ' + range[0] + ' < age < ' + range[1];
        this.json_data = res.data;
      }).catch((errpr) => {
        this.message = 'ERROR!';
        this.json_data = {};
      })
    }
  }
}
</script>

<style>
ul {
  margin: 0px 10px;
  background-color: aliceblue;
}
li {
  padding: 10px;
  font-size: 16pt;
}
input {
  font-size: 14pt
}
button {
  font-size: 14pt
}
tr th {
  width: 150px;
  background-color: darkblue;
  color: white;
  font-size: 16pt;
}
tr td {
  padding: 5px 10px;
  background-color: #eef;
  font-size: 14pt;
}
.container {
  padding: 5px 10px;
}
h1 {
  font-size: 60pt;
  color: #345980;
}
p {
  padding-top: 5px;
  font-size: 20pt;
}
div {
  font-size: 14pt;
}
pre {
  padding: 10px;
  font-size: 18pt;
  background-color: #efefef;
  white-space: pre-wrap;
}
hr {
  margin: 10px 0px;
}
</style>
