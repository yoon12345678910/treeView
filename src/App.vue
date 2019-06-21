<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <tree-view :treeViewData="treeViewData"/> -->
    <ztree 
      :nodes="nodes" 
      :settings="settings" 
      :selectId="'luna'"  
    />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import ztree from './components/ztree.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld,
      'ztree': ztree
    },
    data: function () {
      return {
        nodes: [
          { id: 'luna', pId: 'root', name: "루나소프트", expanded: true, children: [
            { id: 'main', name: '메인', isParent: true, expanded: true },
            { id: 'admin', name: '관리자', isParent: true, expanded: true, children: [
              { id: 'account', name: '계정관리' },
              { id: 'auth', name: '권한관리' },
              { id: 'menu', name: '메뉴관리' },
            ]},
            { id: 'member', name: '회원관리', isParent: true, expanded: true },
            { id: 'business', name: '영업관리', isParent: true, expanded: true, children: [
              { id: 'businessCheck', pId: 'business', name: '영업조회'},
            ]},
            { id: 'service', name: '서비스관리', isParent: true, expanded: true, children: [
              { id: 'serviceSetting', name: '서비스세팅' }
            ]}
          ]}
        ],
        settings: {
          callback: {
            onDblClick: (event, treeId, treeNode) => {
              console.log('parent')
            },
          }
        }

      }
    },
     methods:{

    }
}
</script>


<style>
  body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
  }
</style>
