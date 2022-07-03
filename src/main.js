// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index'
 
import {
  Message,MessageBox,Upload,
  ColorPicker,Radio,RadioGroup,Table,
  TableColumn,Button,Input,
  Form,FormItem,Select,Dialog,
  Option,Pagination,Tag,
  Dropdown,DropdownMenu,DropdownItem,
  CheckboxGroup,Checkbox,DatePicker,Loading
} from 'element-ui'
Vue.use(Upload)
Vue.use(ColorPicker)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Dialog)
Vue.use(Option)
Vue.use(Pagination)
Vue.use(Tag)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(DatePicker)
Vue.use(Loading)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.config.productionTip = false

Vue.prototype.$form = []
Vue.prototype.$now = ''

// function defineReactive(data, key, value) {
//   Object.defineProperty(data, key, {
//     enumerable: true,
//     configurable: true,
//     get: function defineGet() {
//       console.log(`get key: ${key} value: ${value}`)
//       return value
//     },
//     set: function defineSet(newVal) {
//       console.log(`set key: ${key} value: ${newVal}`)
//       value = newVal
//     }
//   })
// }

// function observe(data) {
//  data.forEach(function(key) {
//    defineReactive(data, key, data[key])
//  })
// }

// observe(this.form)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

