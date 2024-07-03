import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { MainStackParamsList } from '../components/CustomTypes'
import { useAppSelector } from '../redux/ReduxHooks'
import { setCurrentPost } from '../redux/reducers/PostReducer'
import { useDispatch } from 'react-redux'

type RootProp = RouteProp<MainStackParamsList, 'detail'>

const DetailsScreen = () => {
    const route = useRoute<RootProp>();
    const { item } = route.params;
    const currentPost = useAppSelector(state => state.PostReducer.currentPost);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleBack = () => {
        navigation.goBack();
        dispatch(setCurrentPost(null))
    }
  return (
    <View style={styles.container}>
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{currentPost?.['id']}</Text>
            <Text style={styles.itemText}>{currentPost?.['title']}</Text>
        </View>
        <Button title='Go Back' onPress={handleBack} />
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "white"

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
    itemText : {
        color : "black",
        fontSize : 17,
        textAlign : "center"
    }

})