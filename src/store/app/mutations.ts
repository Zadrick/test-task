import { SET_VISITS_QUANTITY } from './mutations-types'
import { StateInterface} from './state'

export default {
  [SET_VISITS_QUANTITY](state: StateInterface, n: number) {
    state.visitsQuantity = n
  }
}