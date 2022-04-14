import { Button, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../Styles/Global'


const Reviews = ({navigation}) => {

  
  const pressHandler = ( ) => { 
    // navigation.navigate('Reviews')
    navigation.goBack();  
  }

  return (
    <View style={globalStyles.container} >
      <Text style={globalStyles.homeTitle}> Review   Screen </Text>
      <Button title='back to home'  onPress={pressHandler } />  
    </View>
  )
}

export default Reviews ;  

