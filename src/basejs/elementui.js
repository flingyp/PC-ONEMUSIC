import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Button,
  Header,
  Container,
  Aside,
  Main,
  Input,
  Carousel,
  CarouselItem,
  Pagination,
  Message,
  Table,
  TableColumn,
  Tabs,
  TabPane
} from 'element-ui'


Vue.use(Button)
Vue.use(Aside)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Input)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tabs)
Vue.use(TabPane)

Vue.prototype.$message = Message
