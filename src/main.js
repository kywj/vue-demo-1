const Vue = window.Vue
Vue.config.productionTip = false

import Demo from './demo.vue'

new Vue({
  components: {
    Demo
  },
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
  <Demo />
  <hr>
  {{filter()}}
  </div>
 `,
 methods: {
   add(){
     this.n += 1
   },
   filter(){
     console.log('执行了 filter 函数')
    return this.array.filter(i => i % 2 === 0)
   }
 }
}).$mount('#jerry')