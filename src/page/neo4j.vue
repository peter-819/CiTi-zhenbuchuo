<template>
  <div>
    <div id="viz"></div>
    <textarea rows="4" cols=50 id="cypher"></textarea><br>
    <input type="submit" value="Submit" id="reload" @click="reload">
    <input type="submit" value="Stabilize" id="stabilize" @click="stabilize">
  </div>
</template>
<script>
  import $ from 'jquery'
  const module = import('neovis.js/dist/neovis')
  let viz
  let config = {
    container_id: "viz",
    server_url: "bolt://localhost:7687",
    server_user: "neo4j",
    server_password: "dengzhewo123",
    labels: {
      //"Character": "name",
      "Character": {
        "caption": "name",
        "size": "pagerank",
        "community": "community"
        //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
      },
      "Person":{
        "caption": "name",
        "size":"pagerank",
        "community":"community"
      }
    },
    relationships: {
      "INTERACTS": {
        "thickness": "weight",
        "caption": false
      }
    },
    initial_cypher: "MATCH (n)-[r:INTERACTS]->(m) RETURN n,r,m"
  }

  export default {
    name: "neo4j",
    data() {
      return {

      }
    },
    methods: {
      reload: function () {
        let cypher = $("#cypher").val();

        if (cypher.length > 3) {
          viz.renderWithCypher(cypher);
        } else {
          console.log("reload");
          viz.reload();
        }
      },
      stabilize: function () {
        viz.stabilize();
      }
    },
    beforeCreate() {
      module.then(
        Neovis => {
          viz = new Neovis.default(config);
          viz.render();
          console.log(viz);
        }
      )
    }
  }
</script>

<style scoped>
  #viz {
    width: 900px;
    height: 700px;
    border: 1px solid lightgray;
    font: 22pt arial;
  }
</style>
