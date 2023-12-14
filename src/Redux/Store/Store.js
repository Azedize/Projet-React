import { legacy_createStore } from "redux";
import  Reducer from '../Reducer/Redcer' ;




const store = legacy_createStore(Reducer)

export default store