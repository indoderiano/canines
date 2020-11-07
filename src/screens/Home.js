import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    SafeAreaView,
    FlatList,
    ActivityIndicator,
    Platform,
} from 'react-native'
import PrimaryText from '../components/PrimaryText'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import { Button, COLOR } from 'react-native-material-ui'
import { primaryColor } from '../supports/styles'
import { connect } from 'react-redux'
import { loadMoreBreedImages, LoadMoreBreeds } from '../redux/actions'
import Logo from '../components/Logo'

class Home extends Component {
    state = { 
        Canines: []
     }


    renderSubBreedNav=(Breed,subBreed)=>{

        return (
            <View
                style={{
                    marginVertical: 20,
                    opacity: .8,
                    backgroundColor: 'rgba(0,0,0,.1)',
                    padding: 15,
                    borderRadius: 5
                }}
            >
                <View
                    style={{
                        flex: 1,
                        marginBottom: 5
                    }}
                >
                    <PrimaryText
                        style={{
                            fontSize: 21
                        }}
                    >
                        Sub Breed
                    </PrimaryText>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    
                    {
                        subBreed.map((sub,index)=>{
                            return (
                                <View
                                    key={index}
                                    style={{
                                        width: '45%',
                                        padding: 10,
                                        margin: '2.5%',
                                        backgroundColor: 'rgba(0,0,0,.2)',
                                        borderRadius: 5,
                                        alignItems: 'center'
                                    }}
                                >
                                    <PrimaryText
                                        style={{
                                            fontSize: 16
                                        }}
                                    >
                                        {sub}
                                    </PrimaryText>
                                    <FA5 name='dog' size={50} color='rgba(0,0,0,.6)'
                                        style={{
                                            marginTop: 15,
                                            marginBottom: 10
                                        }}
                                    />

                                    <View
                                        style={{
                                            width: '100%',
                                            borderColor: 'rgba(0,0,0,.5)',
                                            borderWidth: 1,
                                            marginBottom: 15
                                        }}
                                    />

                                    <Button 
                                        primary
                                        // raised
                                        text={`View`} 
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
                                            console.log('navigate to sub breed ', sub)
                                            this.props.navigation.navigate('Sub Breed',{Breed,subBreed:sub})
                                        }}
                                    />

                                </View>
                            )
                        })
                        
                    }
                </View>

            </View>
        )

    }
    

    renderImages=(imagelist)=>{
        return imagelist.map((source,index)=>{
            return (
                <View
                    key={index}
                    style={[
                        {
                            marginBottom: 10,
                            width: '100%',
                            padding: 10,
                        },
                    ]}
                >

                    <View
                        style={{
                            paddingBottom: 10,
                            borderBottomColor: 'rgba(0,0,0,.3)',
                        }}
                    >
                        <Image
                            style={{
                                width: '100%',
                                height: 150,
                                resizeMode: 'contain',
                                borderColor: 'red',
                            }}
                            source={{
                                uri: source
                            }}
                        />
                    </View>

                </View>
            )
        })
    }

    renderItem=({item, index})=>{
        return (
            <View
                style={{
                    paddingTop: 10,
                    paddingBottom: 20,
                    borderTopWidth: 1,
                    borderColor: 'rgb(0,0,0,.6)',
                    minHeight: 600
                }}
            >
                <PrimaryText
                    style={{
                        fontFamily: 'Ubuntu-Light',
                        fontSize: 25,
                        color: 'rgba(0,0,0,.9)',
                        marginTop: 8,
                        marginBottom: 10
                    }}
                >
                    {item.breed}
                </PrimaryText>

                {
                    item.images?
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}
                    >
                        {this.renderImages(item.images)}

                    </View>
                    :
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <ActivityIndicator size='large' color="rgba(0,0,0,.6)"/>
                    </View>

                }


                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >

                    {
                        this.props.Canines.indexLoading==index?
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
                        :
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
                            onPress={()=>{this.props.loadMoreBreedImages(item.breed,index)}}
                        />

                    }
                    
                </View>

                {
                    item.subBreed.length?
                    this.renderSubBreedNav(item.breed,item.subBreed)
                    : null
                }


            </View>
        )
    }

    renderHeader=()=>{
        return (
            <View
                style={{
                    flexDirection: 'column'
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        paddingTop: 10,
                        paddingBottom: 30,
                        backgroundColor: 'white'
                    }}
                >
                    <View>
                        <Logo/>
                    </View>

                    <View
                        style={{
                            justifyContent: 'flex-end',
                            marginLeft: 10,
                            paddingTop: 14
                        }}
                    >
                        <Text
                            style={{
                                alignItems: 'baseline',
                                fontFamily: 'Ubuntu-Light',
                                fontSize: 60,
                                color: 'rgba(0,0,0,.9)'
                            }}
                        >
                            Canines
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        paddingTop: 10,
                        paddingBottom: 30,
                        backgroundColor: 'white'
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Ubuntu-Light',
                            fontSize: 21
                        }}
                    >
                        These are the list of all our dog breeds from around the world. Scroll down to see more breeds
                    </Text>
                </View>

            </View>
        )
    }

    renderFooter=()=>{
        return (
            
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    // height: 700,
                    marginTop: 20,
                    marginBottom: 40
                }}
            >
                {
                    this.props.Canines.loading?
                    <ActivityIndicator size='large' color="rgba(0,0,0,.6)"/>
                    :
                    <PrimaryText>
                        You have reached the bottom page
                    </PrimaryText>
                }
            </View>
        )
    }


    render() { 
        console.log(this.props.Canines.display.length, ' of ',this.props.Canines.list.length)

        return ( 
            <SafeAreaView style={{flex: 1}}>
                <FlatList
                    data={this.props.Canines.display}
                    renderItem={this.renderItem}
                    keyExtractor={dog => dog.breed}
                    ListHeaderComponent={this.renderHeader()}
                    ListFooterComponent={this.renderFooter()}
                    style={{
                        paddingVertical: 15,
                        paddingHorizontal: 20,
                        backgroundColor:'white'
                    }}
                    onEndReachedThreshold={0.01}
                    onEndReached={()=>{
                        this.props.LoadMoreBreeds()
                    }}
                />

                    
            </SafeAreaView>
         );
    }
}

const styles=StyleSheet.create({
    shadow: {
        ...Platform.select({
            
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.20,
            },
            android: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.20,
                shadowRadius: 1.41,
        
                elevation: 2,

                backgroundColor : "rgba(200,200,200,.01)",
                
            }
            
        })
    }
})

const Mapstatetoprops=(state)=>{
    return {
        Canines: state.Canines
    }
}
 
export default connect(Mapstatetoprops,{loadMoreBreedImages,LoadMoreBreeds}) (Home);