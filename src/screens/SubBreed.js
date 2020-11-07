import Axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import {
    View,
    Text,
    Image,
    SafeAreaView,
    FlatList,
} from 'react-native'
import {Button} from 'react-native-material-ui'
import PrimaryText from '../components/PrimaryText'
import {primaryColor} from '../supports/styles'
import { APIURL } from '../supports/ApiUrl'

const SubBreed=({route})=>{

    const [list,setlist]=useState([])
    const breed=route.params.Breed
    const subBreed=route.params.subBreed
    const [loading,setloading]=useState(true)

    const [countimg,setcountimg]=useState(3)

    useEffect(()=>{

        loadMoreImages()
    },[])

    const loadMoreImages=()=>{
        setloading(true)
        Axios.get(`${APIURL}/breed/${breed}/${subBreed}/images/random/4`)
        .then((res)=>{
            // console.log(res.data.message.length)
            const newList=list
            newList.push(...res.data.message)
            setlist(newList)
            setloading(false)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const renderFooter=()=>{
        if(loading){
            return (
                <Button 
                    primary
                    // raised
                    text={`Loading ...`} 
                    style={{
                        container: {
                            width: '100%',
                            paddingVertical: 25,
                            borderWidth: 0,
                            borderColor: 'rgba(0,0,0,.5)',
                        },
                        text: {
                            fontFamily: 'Ubuntu-Medium',
                            color:'rgba(0,0,0,.5)'
                        }
                    }}
                    disabled
                />
            )
        }else{
            return (
                <View
                    style={{
                        flex: 1,
                        marginTop: 20,
                        marginBottom: 40
                    }}
                >
                    <Button 
                        primary
                        // raised
                        text={`More Images ...`} 
                        style={{
                            container: {
                                width: '100%',
                                paddingVertical: 25,
                                borderWidth: 1,
                                borderColor: primaryColor,
                            },
                            text: {
                                fontFamily: 'Ubuntu-Medium'
                            }
                        }}
                        onPress={()=>{
                            loadMoreImages()
                        }}
                    />
                </View>
            )

        }
    }

    const renderHeader=()=>{
        return (
            <PrimaryText
                style={{
                    fontFamily: 'Ubuntu-Light',
                    fontSize: 25,
                    color: 'rgba(0,0,0,.9)',
                    marginTop: 8,
                    marginBottom: 20
                }}
            >
                {subBreed}
            </PrimaryText>
        )
    }

    const renderImages=({item,index})=>{
        console.log(item)
            return (
                <View
                    style={[
                        {
                            // borderColor: 'rgba(0,0,0,.3)',
                            // borderWidth: .5,
                            // borderRadius: 5,
                            // overflow: 'hidden',
                            marginBottom: 10,
                            width: '100%',
                            padding: 10,
                            // flex: 1,
                        },
                        // styles.shadow
                    ]}
                >

                    <View
                        style={{
                            paddingBottom: 10,
                            borderBottomColor: 'rgba(0,0,0,.3)',
                            // borderBottomWidth: 1,
                        }}
                    >
                        <Image
                            style={{
                                width: '100%',
                                height: 150,
                                resizeMode: 'contain',
                                borderColor: 'red',
                                // borderWidth: 1
                            }}
                            source={{
                                uri: item
                            }}
                        />
                    </View>

                </View>
            )
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList
                data={list}
                renderItem={renderImages}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={renderHeader()}
                ListFooterComponent={renderFooter()}
                style={{
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    backgroundColor:'white'
                }}
                // onEndReachedThreshold={0.01}
                // onEndReached={()=>{
                //     this.props.LoadMoreBreeds()
                // }}
            />

                
        </SafeAreaView>
    )
}

export default SubBreed;

// class SubBreed extends Component {
//     state = {  }

//     componentDidMount=()=>{
//         console.log(this.props.navigation.state.params)
//     }


//     render() { 
//         // const { params } = this.props.navigation.state;
//         return ( 
//             <View>
//                 <Text>
//                     SUB BREED
//                     {params.SubBreed}
//                     {/* { this.props.navigation.state.params.subBreed} */}
//                 </Text>
//             </View>
//          );
//     }
// }
 
// export default SubBreed;