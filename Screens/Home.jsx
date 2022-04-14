import {  Text, View , Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../Styles/Global'
 

const Home = ({ navigation }) => { 



  const pressHandler = () => {
    navigation.navigate('Reviews')
    // navigation.push('Reviews') 
  }
  

  return (
    <View style={globalStyles.container} >
      <Text  style={globalStyles.homeTitle} >Home Screen </Text>
      <Button title='go to Reviews'  onPress={pressHandler } />   
    </View>
  )
}

export default Home ; 

