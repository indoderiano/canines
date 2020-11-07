import Axios from 'axios'
import { APIURL } from '../../supports/ApiUrl'
import { CANINES_LOADING, CANINES_PULL, CANINES_DISPLAY, CANINES_BREED_IMAGES_LOADING } from '../reducers/Types'


export const BeginLoadCanines=()=>{
    return (dispatch)=>{
        dispatch({type: CANINES_LOADING})

        console.log('begin loading')

        // GET LIST OF ALL BREEDS
        Axios.get(`${APIURL}/breeds/list/all`)
        .then((res)=>{
            var list=res.data.message

            //////////////////////
            // RESTRUCTURE DATA //
            //////////////////////

            // MAIN DATA
            var Canines=[]

            for(var dog in list){
                var canine={
                    breed: dog,
                    subBreed: list[dog]
                }
                Canines.push(canine)
                // console.log('loop ', dog)
            }
            
            // STORE
            dispatch({type: CANINES_PULL, payload: Canines})

            dispatch(LoadMoreBreeds())
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const LoadMoreBreeds=()=>{
    console.log('load more breeds')
    return async (dispatch,getState)=>{
        var list=getState().Canines.list
        var display=getState().Canines.display
        var loading=getState().Canines.loading

        var indexStart=display.length
        var step=2  // how many breeds load in each step


        if(!loading){

            if(display.length<list.length){

                for(let i=indexStart;i<indexStart+step;i++){
        
                    dispatch({type: CANINES_LOADING})
        
                    try{
                        var res = await Axios.get(`${APIURL}/breed/${list[i].breed}/images/random/3`)
                        display[i]={
                            ...list[i],
                            images: res.data.message
                        }
                        dispatch({type:CANINES_DISPLAY,payload:display})
                    }catch(err){
                        console.log(err)
                    }
        
                }

            }else{
                console.log('all breeds are displayed')
            }


        }else{
            console.log('is loading')
        }


    }
}



export const loadMoreBreedImages = (breed,index) => {
    console.log('load more breed images')

    return (dispatch,getState)=>{
        var display=getState().Canines.display

        dispatch({type:CANINES_BREED_IMAGES_LOADING,payload:index})

        Axios.get(`${APIURL}/breed/${breed}/images/random/3`)
        .then((res)=>{
            // console.log(res.data.message)

            display[index].images.push(...res.data.message)

            dispatch({type:CANINES_DISPLAY,payload:display})

        }).catch((err)=>{
            console.log(err)
        })
    }

}










// export const LoadAllTypes=()=>{
//     return (dispatch)=>{
//         dispatch({type: CANINES_LOADING})
        
//         console.log('getting all canines list')
//         Axios.get(`${APIURL}/breeds/list/all`)
//         .then( (res)=>{
//             var list=res.data.message

//             //////////////////////
//             // RESTRUCTURE DATA //
//             //////////////////////


//             // MAIN DATA
//             var Canines=[]

//             for(var dog in list){
//                 var canine={
//                     breed: dog,
//                     subBreed: list[dog]
//                 }
//                 Canines.push(canine)
//                 // console.log('loop ', dog)
//             }
            
//             // FIRST LOAD
//             // LOAD ALL BREED TYPES AND SUBBREED
//             dispatch({type: CANINES_PULL, payload: Canines})


//             // MODIFY CANINES LIST
//             // GIVE EACH DOG BREED RANDOM IMAGES

//             for(let i=0;i<Canines.length;i++){

//                 console.log(i)

//                 Axios.get(`${APIURL}/breed/${Canines[i].breed}/images/random/3`)
//                 .then((breedImages)=>{
                    
//                     Canines[i].images=breedImages.data.message
//                     console.log('loop ',i, ' of', Canines.length-1)

//                     // SECOND LOAD
//                     // DISPATCH
//                     // RETRIEVE IMAGES DATA, ONE BY ONE
//                     dispatch({type: CANINES_PULL, payload: Canines})
//                 }).catch((err)=>{
//                     console.log(err)
//                 })
//             }
            

//             // SYNCHRONOUSLY
//             // for(let i=0;i<Canines.length;i++){

//             //     try{
//             //         var breedImages = await Axios.get(`${APIURL}/breed/${Canines[i].breed}/images/random/3`)
//             //         Canines[i].images=breedImages.data.message
//             //         console.log('loop ',i, ' of', Canines.length)

//             //         // SECOND LOAD
//             //         // DISPATCH
//             //         // RETRIEVE IMAGES DATA, ONE BY ONE
//             //         dispatch({type: CANINES_PULL, payload: Canines})
//             //     }catch(err){
//             //         console.log(err)
//             //     }
//             // }


//         }).catch((err)=>{
//             console.log(err)
//         })
//     }
// }


// export const addBreedImages = (breed, index) => {

//     Axios.get(`${APIURL}/breed/${breed}/images/random/3`)
//     .then((res)=>{
//         console.log('request now')
//         console.log(res.data.message)
//     }).catch((err)=>{
//         console.log(err)
//     })

//     return (dispatch,getState)=>{
//         console.log('get more breed images')

//         // console.log(getState().Canines.list)

//         // ACCESS REDUX STORE, CANINES
//         var Canines=getState().Canines

//         Axios.get(`${APIURL}/breed/${breed}/images/random/3`)
//         .then((res)=>{
//             console.log(res.data.message)
//             // console.log(Canines.list)
//             // Canines.list[index].images.push(...res.data.message)

//             // dispatch({type: CANINES_PULL, payload: Canines})
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }
// }