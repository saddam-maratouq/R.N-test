import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../Styles/Global'
 

const Home = () => {
  return (
    <View style={globalStyles.container} >
      <Text  style={globalStyles.homeTitle} >Home Screen </Text>
    </View>
  )
}

export default Home ; 

