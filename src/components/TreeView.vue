<template>
  <ul class="treeView">
    <tree-item :nodes="nodes" />
  </ul>
</template>

<script>
  import TreeItem from'./TreeItem.vue'

  export default {
    name: 'tree-view',
    components: {
      'tree-item': TreeItem
    },
    data: function () {
      return {}
    },
    props: {
      treeViewData: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    computed: {
      nodes () {
        console.log('-----', this.treeViewData)


        const treeViewNodes = this.treeViewData.map(node => {
          console.log('map', node)
        });


        return this.treeViewData[0];


      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .treeView {
    list-style: none;
    margin: 0;
    padding: 5px;
    color: #333;
    box-sizing: border-box;
    vertical-align: middle;
  }
</style>