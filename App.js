/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import React from 'react';
import { createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Thunk from 'redux-thunk'
import reducers from './src/redux/reducers'
import { NavigationContainer } from '@react-navigation/native'
import {
  ThemeContext,
  getTheme
} from 'react-native-material-ui'
import { theme } from './src/supports/styles'

// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Image
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import AppInit from './AppInit'

const store=createStore(reducers,{},applyMiddleware(Thunk))

const App =  () =>  {
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={getTheme(theme)}>
        <NavigationContainer>
          <AppInit/>
        </NavigationContainer>
      </ThemeContext.Provider>
    </Provider>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
