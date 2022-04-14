
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation'
import Home from "../Screens/Home";
import Review from "../Screens/Review"; 




const screens = {
   
    Home : { 
        screen : Home 
    },
    Review : {
        screen : Review 
    }, 

}


const HomeStack = createStackNavigator(screens); 

export default  createAppContainer(HomeStack);  