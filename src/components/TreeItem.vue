<template>
  <li>
    <span
      @click="toggle"
      :class="{expanded: expanded}"
      class="button switch">
    </span>
    <div
      @dblclick="toggle"
      :class="{selected: isFolder}"
      class="node">
      <span 
        :class="{expanded: expanded}"
        class="button folder">
      </span>
      <span>{{node.name}}</span>
    </div>
    <ul 
      v-show="expanded" 
      v-if="isFolder">
      <tree-item
        v-for="node in node.children"
        :key="node.key"
        :node="node"
        class="item">
      </tree-item>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'tree-item',
    props: {
      node: {
        type: Object,
        default: function () {
          return {
            name: 'item',
            expanded: false,
            isParent: false,
          }
        }
      }
    },
    data: function () {
      return {
        expanded: this.node.expanded || false
      }
    },
    computed: {
      isFolder: function () {
        return this.node.children && this.node.children.length
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.expanded = !this.expanded
        } else {
          Vue.set(this.node, 'children', []);
          this.addChild();
          this.expanded = true;
        }

        console.log('item', this)

      }
    },
    created () {
      console.log('created', this.node)
    }
  }
</script>

<style scoped>
  ol, ul, ul li, ol li {
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    vertical-align: middle;
  }
  li ul {
    padding: 0 0 0 18px;
  }
  li span {
    margin: 0 2px;
    line-height: 16px;
    user-select: none;
  }
  .node {
    display: inline-block; 
    height: 17px;
    padding: 1px 3px 0 0;
    margin: 0;
    color: #333;
    background-color: transparent;
    text-decoration: none;
    vertical-align: top;
    cursor: pointer;
  }
  .button {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0;
    border: 0 none;
    line-height: 0;
    vertical-align: middle;
    outline: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-image: url('~@/assets/images/zTreeStandard.png');
    cursor: pointer;
  }
  .button.switch {
    width: 18px;
    height: 18px;
    background-position: -74px -18px;
  }
  .button.switch.expanded {
    background-position: -92px -18px;
  }
  .button.folder {
    margin-right: 2px;
    background-position: -110px 0;
    vertical-align: top;
  }
  .button.folder.expanded {
    background-position: -110px -16px;
  }

  
</style>