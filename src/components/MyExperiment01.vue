<template>
  <div class="my-experiment-01">
    <h2>Nodeの全要素を出力する</h2>
    <div v-for="element in elements" :key="element">{{element.nodeName}}</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      elements: [],
    }
  },
  mounted() {
    const nodes = document.querySelectorAll("html")
    console.log(nodes)  // NodeList
    console.log(nodes[0]) // Node
    console.log(nodes[0].childNodes)  // Node
    //this.nodes = nodes[0].childNodes
    nodes.forEach(function(node) {
        //console.log(node)
        this.printDOM(node)
      }, this)
  },
  methods: {
    printDOM(node) {
      console.log(node)
      for(let i=0; i<node.childNodes.length; i++) {
        this.printDOM(node.childNodes[i]);
        this.elements.push(node.childNodes[i])
      }
    }
  },
}
</script>