import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpSubmitScreen from '../screens/SignUpSubmitScreen';


const screens = {
    LoginScreen:{
        screen: LoginScreen,
        navigationOptions: {headerShown: false}
    },
    SignUpScreen:{
        screen: SignUpScreen,
        navigationOptions: {headerShown: true, title:''}
    },
    SignUpSubmitScreen:{
        screen: SignUpSubmitScreen,
        navigationOptions: {headerShown: true, title:''}
    }
}

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);