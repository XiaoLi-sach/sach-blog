import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  name: 'App',
  setup() {
    return () => {
      return <ElConfigProvider locale={zhCn}>{() => <RouterView />}</ElConfigProvider>
    }
  }
})
