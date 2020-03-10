import { createStore } from 'redux'
import reducer from './indexReducer'

const store = createStore(reducer)

export default store