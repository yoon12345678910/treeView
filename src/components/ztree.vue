
<!-- =====================================================
 =
 =    zTree -- jQuery tree plug-ins.
 =    http://www.treejs.cn/v3/main.php
 =
 =
 =
 =    v.TEST
 =
 =    author:  Jongik Yoon <yji1221@gmail.com>
 =    updated: 2019-06-22
 =        
 =
 ====================================================== --> 

<template>
  <ul class="ztree" ref="ztree"></ul>
</template>

<script>
  import ztree from 'ztree'

  export default {
    name: 'ztree',
    props: {
      expandAll: {
        type: Boolean,
        default: true
      },
      nodes: {
        type: Array,
        default: function () {
          return [];
        }
      },
      settings: {
        type: Object,
        default: function () {
          return {};
        }
      },
      selectId: {
        type: [String, Number]
      },
      treeId: {
        type: [String, Number]
      }
    },
    data () {
      return {
        $_treeId: ''
      };
    },
    methods: {
      // https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge/48579540
      mergeDeep: function (target, source) {
        const isObject = item => item && typeof item === 'object' && !Array.isArray(item) && item !== null;
        if (isObject(target) && isObject(source)) {
          for (const key in source) {
            if (isObject(source[key])) {
              if (!target[key]) Object.assign(target, { [key]: {} });
              this.mergeDeep(target[key], source[key]);
            } else {
              Object.assign(target, { [key]: source[key] });
            }
          }
        }
        return target;
      }
    },
    mounted () {
      const defaults = {
        data: {
          simpleData: {
            enable: true
          }
        },
        view: {
          selectedMulti: false
        },
        callback: {}
      };

      // merge data
      const settings = this.mergeDeep(this.settings, defaults);

      // tree id
      this.$_treeId = this.treeId || `zTree-${new Date().getTime()}`;
      this.$refs.ztree.id = this.$_treeId;

      // zTree 생성
      $.fn.zTree.init($(this.$refs.ztree), settings, this.nodes);

      const $zTree = $.fn.zTree.getZTreeObj(this.$_treeId);

      // Node 모두 열기
      if (this.expandAll) $zTree.expandAll(true);

      // 초기 Node 선택
      if (typeof this.selectId === 'string' || typeof this.selectId === 'number') {
        $zTree.selectNode($zTree.getNodeByParam('id', this.selectId));
      }

      // 생성되면 treeId, object return
      if (typeof settings.callback.completed === 'function') {
        settings.callback.completed(this.$_treeId, $zTree);
      }

    }
  };
</script>

<style>
  @import '~ztree/css/zTreeStyle/zTreeStyle.css';

  .ztree * { 
    font-size: 14px; 
  }
  .ztree li {
    padding: 0; 
    margin: 4px 0; 
    list-style: none; 
    line-height: 14px; 
    text-align: left; 
    white-space: nowrap; 
    outline: 0
  }
  .ztree li a.curSelectedNode {
    padding-top: 1px; 
    border: none; 
    background-color: transparent;
    color:#37a8fe; 
    font-weight: 600;
    opacity: initial;
  }
  .ztree li span {
    margin: 0 2px;
    line-height: 16px; 
  }
  .ztree li span.button.ico_docu {
    display:none;
  }

</style>