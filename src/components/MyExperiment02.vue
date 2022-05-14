<template>
  <div class="my-experiment-02">
    <h2>a要素を出力する</h2>
    <div v-for="element in elements" :key="element">
      <a :href="element.href">{{element.innerHTML}}</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
const axios = require('axios').default

export default {
  data() {
    return {
      elements: [],
    }
  },
  mounted() {
    this.greeting()
    // CORSエラー 
    //Access to XMLHttpRequest at 'http://www.example.org/' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    /*
    var oReq = new XMLHttpRequest()
    oReq.addEventListener("load", this.reqListener)
    oReq.open("GET", "http://www.example.org");
    //oReq.open("GET", "http://www.example.org/example.txt");
    oReq.setRequestHeader("Access-Control-Allow-Origin", "*")
    oReq.send();
    */
  },
  methods: {
    greeting: function(){
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/')
      axios.get('/api/stroke')
      .then(function (res) {
        console.log(res.data)
        self.elements = res.data
      })
      .catch(
        (err) => {console.log(err)}
      )
    },
    /*
    reqListener () {
      console.log(this.responseText);
    }
    */
  },
}
</script>