import { SET_VISITS_QUANTITY } from './mutations-types'
import { state } from './state'

export default {
  [SET_VISITS_QUANTITY](state: state, n: number) {
    state.visitsQuantity = n
  }
}