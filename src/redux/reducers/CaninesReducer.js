import { CANINES_LOADING, CANINES_PULL, CANINES_DISPLAY, CANINES_BREED_IMAGES_LOADING } from './Types'

const INITIAL_STATE={
    list: [],       // data storage
    display: [],    // what will go into the screen
    loading: false,
    indexLoading: -1
}

const reducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CANINES_LOADING:
            return {...state,loading:true}
        case CANINES_PULL:
            return {...state,loading:false,indexLoading:-1,list:action.payload}
        case CANINES_DISPLAY:
            return {...state,loading:false,indexLoading:-1,display:action.payload}
        case CANINES_BREED_IMAGES_LOADING:
            return {...state,indexLoading:action.payload}
        case 'REMOVE':
            return INITIAL_STATE
        default:
            return state
    }
}

export default reducer;