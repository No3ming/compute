import Concat from '../components/Concat.vue'

export interface IRouteItem {
  path: string,
  component: any,
  name: string,
  des: string
}
const routes: IRouteItem[] = [
  { path: '/concat',  component: Concat, name: 'concat', des: '拼接' },

]

export default routes
