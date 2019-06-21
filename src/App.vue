<template>
  <div id="app">
    <ztree 
      :treeId="'tree-test-001'"
      :nodes="ztreeNodes" 
      :settings="ztreeSettings" 
      :selectId="'luna'" 
    />
    <div>
      <input
        disabled
        v-model="selectedNodeName"
        type="text"
      />
      <button 
        @click="getSelectedNodes"
        type="button">
        선택된 항목 찾기
      </button>
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
        moveNodeText: '',
        selectedNodeName: '',
        ztreeId: '',
        ztreeObj: null,
        ztreeNodes: [
          { id: 'luna', pId: 'root', name: "ROOT / luna", expanded: true, children: [
            { id: 'main', name: '메인 / main', isParent: true, expanded: true },
            { id: 'admin', name: '관리자 / admin', isParent: true, expanded: true, children: [
              { id: 'account', name: '계정관리 / account' },
              { id: 'auth', name: '권한관리 / auth' },
              { id: 'menu', name: '메뉴관리 / menu' },
            ]},
            { id: 'member', name: '회원관리 / member', isParent: true, expanded: true },
            { id: 'business', name: '영업관리 / business', isParent: true, expanded: true, children: [
              { id: 'businessCheck', pId: 'business', name: '영업조회'},
            ]},
            { id: 'service', name: '서비스관리 / service', isParent: true, expanded: true, children: [
              { id: 'serviceSetting', name: '서비스세팅 / serviceSetting' }
            ]}
          ]}
        ],
        ztreeSettings: {
          callback: {
            completed: (ztreeId, ztreeObj) => {
              console.log('completed: ', ztreeId, ztreeObj)
              this.ztreeId = ztreeId;
              this.ztreeObj = ztreeObj;
              this.getSelectedNodes();
            },
            beforeClick: (treeId, treeNode) => {
              console.log('beforeClick - isSelectedNode: ', $.fn.zTree.getZTreeObj(treeId).isSelectedNode(treeNode));
            },
            onClick: (event, treeId, treeNode) => {
              console.log('onClick - isSelectedNode: ', $.fn.zTree.getZTreeObj(treeId).isSelectedNode(treeNode));
            },
          }
        }
      };
    },
     methods: {
      getSelectedNodes: function () {
        console.log('getSelectedNodes: ', this.ztreeObj.getSelectedNodes());
        this.selectedNodeName = this.ztreeObj.getSelectedNodes()[0].name;
      },
      moveNode: function () {
        this.ztreeObj.selectNode(this.ztreeObj.getNodeByParam('id', this.moveNodeText))
      }
    }
}
</script>

<style>
  body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
  }
</style>
