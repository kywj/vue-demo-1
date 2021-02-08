const Vue = window.Vue
Vue.config.productionTip = false

// Vue.component('Demo2', {
//   template: `
//     <div>demo2</div>
//   `
// })
import Demo from './demo.vue'
new Vue({
  components: { Demo },
  // el: '#jerry',
  //  template: `
  //  <div>hi</div>
  // `,
 data(){
  return {
    n: 0,
    array: [1,2,3,4,5,6,7,8]
  } 
 },
 template: `
  <div class="red">
  {{n}}
  <button @click="add">+1</button>
  <Demo :message="n"/>
  </div>
 `,
 created(){
   console.log('这玩意出现在内存中')
 },
 mounted(){
   console.log('这玩意出现在页面中')
 },
 updated(){
   console.log('更新了')
   console.log(this.n)
 },
 methods: {
   add(){
     this.n += 1
   },
 }
}).$mount('#jerry')