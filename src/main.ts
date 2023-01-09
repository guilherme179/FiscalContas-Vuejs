import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTruck, faHouse, faPerson, faBoxesStacked, faDolly, faTruckRampBox, faReceipt, faFileInvoiceDollar, faBuildingColumns, faMoneyBill1Wave, faHandHoldingDollar, faPenToSquare, faTrashCan, faSquarePlus, faEye } from '@fortawesome/free-solid-svg-icons'

library.add(faEye, faSquarePlus, faTrashCan, faPenToSquare, faTruck, faHouse, faPerson, faBoxesStacked, faDolly, faTruckRampBox, faReceipt, faFileInvoiceDollar, faBuildingColumns, faMoneyBill1Wave, faHandHoldingDollar)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app')
