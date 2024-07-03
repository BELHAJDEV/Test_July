
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Store from './redux/Store';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import DetailsScreen from './screens/DetailsScreen';
import client from './apolloClient';
import { ApolloProvider } from '@apollo/client';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {

  return (
    <ApolloProvider client={client}>

      <Provider store={Store}>

        <SafeAreaView style={{flex : 1}}>
          
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown : false}}>
              <Stack.Screen name="main" component={MainScreen} />
              <Stack.Screen name='detail' component={DetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>

        </SafeAreaView>

      </Provider>

    </ApolloProvider>

  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1
  }
});

export default App;
