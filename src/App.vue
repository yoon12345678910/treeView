<template>
  <div id="app">
    <ztree 
      :treeId="ztreeId"
      :nodes="ztreeNodes" 
      :selectId="selectId"
      @beforeClick="beforeClick"
      @onClick="onClick"
    />
    <!-- <div>
      <pre v-show="isParentNode">
        <code> {{ childrenNodes }} </code>
      </pre>
    </div>
    <div>
      <input 
        v-model="moveNodeText"
        type="text" 
        placeholder="선택할 항목 ID를 입력하세요" 
      />
      <button 
        @click="moveNode"
        type="button">
        이동
      </button>
    </div> -->
  </div>
</template>

<script>
  import ztree from './components/ztree.vue'

  export default {
    name: 'app',
    components: {
      'ztree': ztree
    },
    data: function () {
      return {
        ztreeId: 'tree-test-001',
        ztreeNodes: [
          { id: 'luna', pId: 'root', name: 'ROOT / luna', testData: [1, 2, 3, 4, 5], children: [
            { id: 'main', name: '메인 / main', isParent: true},
            { id: 'admin', name: '관리자 / admin', isParent: true, children: [
              { id: 'account', name: '계정관리 / account' },
              { id: 'auth', name: '권한관리 / auth' },
              { id: 'menu', name: '메뉴관리 / menu' },
            ]},
            { id: 'member', name: '회원관리 / member', isParent: true},
            { id: 'business', name: '영업관리 / business', isParent: true, children: [
              { id: 'businessCheck', pId: 'business', name: '영업조회 / businessCheck'},
            ]},
            { id: 'service', name: '서비스관리 / service', isParent: true, children: [
              { id: 'serviceSetting', name: '서비스세팅 / serviceSetting' }
            ]}
          ]}
        ],
        selectId: 'luna',
      };
    },
    methods: {
      beforeClick: function (treeId, treeNode) {
      },
      onClick: function (event, treeId, treeNode) {
        this.selectId = treeNode.serviceSetting;
      }
    }
}
</script>

<style>
  body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
  }

  pre {
    width: 500px;
    height: 230px;
    border: 1px solid black;
  }
</style>
