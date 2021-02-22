<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  data: function() {
    return {
      title: 'Auth',
      message: 'this is message.',
    };
  },
  created: function() {
    const config = {
      apiKey: "AIzaSyA-0SFQdIMMXBfYNoqoTZRUVy9eJfMZoVM",
      authDomain: "valsamina-vue.firebaseapp.com",
      databaseURL: "https://valsamina-vue-default-rtdb.firebaseio.com",
      projectId: "valsamina-vue",
      storageBucket: "valsamina-vue.appspot.com",
      messagingSenderId: "543016180935",
      appId: "1:543016180935:web:f043f060a433a9e969f2e2",
      measurementId: "G-R716BPWPP8"
    };
    firebase.initializeApp(config);

    let provider = new firebase.auth.GoogleAuthProvider();
    var self = this;
    firebase.auth().signInWithPopup(provider).then(function (result) {
      self.message = result.user.displayName + ', ' + result.user.email;
    });
  },
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
