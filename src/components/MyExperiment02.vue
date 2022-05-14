<template>
  <div class="my-experiment-02">
    <h2>a要素を出力する</h2>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">URL</label>
        <input v-model="this.targetUrl" class="form-control" placeholder="URLを入力してください">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">セレクター</label>
        <input v-model="this.targetSelector" class="form-control" placeholder="セレクターを入力してください">
      </div>
      <button type="button" @click="crawlTargetUrl" class="btn btn-primary">送信</button>
      <!--
      <button type="submit" class="btn btn-primary">送信</button>
      -->
    </form>

    <div v-for="element in elements" :key="element">
      <a :href="element.href" target="_blank" rel="noopener noreferrer">{{element.innerHTML}}</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
const axios = require('axios').default

export default {
  data() {
    return {
      targetUrl: "https://developer.mozilla.org/ja/docs/Web/API",
      targetSelector: "a",
      elements: [],
    }
  },
  mounted() {
    //this.crawlTargetUrl()
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
    crawlTargetUrl: function(){
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/')
      axios.post('/api/stroke', { //バックエンドでbodyとして取得できる
        targetUrl: self.targetUrl,
        targetSelector: self.targetSelector,
        /*
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: 
          JSON.stringify({
            targetUrl: self.targetUrl,
            targetSelector: self.targetSelector,
        }),
        */
      })
      .then(function (res) {
        console.log(res.data)
        self.elements = res.data
      })
      .catch(function (err){
        console.log(err)
        self.elements = err.data
      })
    },
  },
}
</script>