import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/ReduxHooks'
import keyable, { MainStackParamsList } from '../components/CustomTypes'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { gql, useQuery } from '@apollo/client'
import client from '../apolloClient';
import { setCurrentPost } from '../redux/reducers/PostReducer'

type NavigationProp = StackNavigationProp<MainStackParamsList,'main'>

const GET_POSTS = gql`
  query {
    posts(options:{paginate : {limit : 30}}){
        data {
            id
            title
        }
    }
  }
`;

const MainScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>()
  const { loading, error, data } = useQuery(GET_POSTS, {
    client,
  });
  
  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

   const handleNavigation = (item:keyable) => {

    navigation.navigate("detail",{item : item})
    dispatch(setCurrentPost(item))
   }
  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={() => console.log(data?.posts?.data)}>Posts</Text>
      <FlatList
        data={data?.posts?.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => handleNavigation(item)}>
            <Text style={styles.itemTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "white",
        padding : 15,
        justifyContent : "center",
        // alignItems : "center"
    },
    title : {
        fontSize : 20,
        color : "black",
        marginBottom : 20,
        textAlign : "center"
    },
    itemContainer : {
        width : "80%",
        padding : 10,
        alignSelf : "center",
        marginVertical : 10,
        borderWidth : 1,
        borderColor : "gray",
        borderRadius : 5
    },
    itemTitle : {
        fontSize : 16,
        color : "black",
        textAlign : "center"
    }


})