<template>
  <div id="app">
    <button 
        @click="createTree"
        type="button">
        Create Tree
    </button>
    <ztree 
      :treeId="ztreeId"
      :nodes="ztreeNodes" 
      :selectId="selectId"
      @beforeClick="beforeClick"
      @onClick="onClick"
    />
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
    </div>
    <div>
      <button 
        @click="changeTree"
        type="button">
        데이터 변경 TEST
      </button>
    </div>
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
        ztreeId: '',
        ztreeNodes: [],
        selectId: '',
        selectedNode: {},
        moveNodeText: '',
      };
    },
    methods: {
      createTree: function () {
        this.ztreeId = 'tree-test-001';
        this.ztreeNodes = [
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
        ];
        this.selectId = 'luna';
      },
      beforeClick: function (treeId, treeNode) {
      },
      onClick: function (event, treeId, treeNode) {
        this.selectId = treeNode.serviceSetting;
        if (treeNode.isParent) {
          console.log('getChildrenNode', treeNode.children)
        } else {
          console.log('getParentNode', treeNode.getParentNode().children)
        }
      },
      moveNode: function () {
        this.selectId = this.moveNodeText;
      },
      changeTree: function () {
        this.ztreeId = 'tree-test-002';
        this.ztreeNodes = [
          { id: 'luna2', pId: 'root', name: 'ROOT /* luna', testData: [1, 2, 3, 4, 5], children: [
            { id: 'main2', name: '메인 /* main', isParent: true},
            { id: 'admin2', name: '관리자 /* admin', isParent: true, children: [
              { id: 'account2', name: '계정관리 /* account' },
              { id: 'auth2', name: '권한관리 /* auth' },
              { id: 'menu2', name: '메뉴관리 /* menu' },
            ]},
            { id: 'member2', name: '회원관리 /* member', isParent: true},
            { id: 'business2', name: '영업관리 /* business', isParent: true, children: [
              { id: 'businessCheck2', pId: 'business', name: '영업조회 /* businessCheck'},
            ]},
            { id: 'service2', name: '서비스관리 /* service', isParent: true, children: [
              { id: 'serviceSetting2', name: '서비스세팅 /* serviceSetting' }
            ]}
          ]}
        ];
        this.selectId = 'member2';
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
