
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation'
import Home from "../Screens/Home";
import Review from "../Screens/Review"; 




const Screens = {
   
    Home : { 
        screen :  Home 
    },
    Reviews : {
        screen : Review  
    },  

}


const HomeStack = createStackNavigator(Screens);  

export default  createAppContainer(HomeStack);  