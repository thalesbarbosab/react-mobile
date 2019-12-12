import { createAppContainer } from 'react-navigation'
//import { createStackNavigator, createStackNavigator } from 'react-navigation-stack'
//import { createSwitchNavigator } from 'react-navigation'
//import { createBottomTabNavigator } from 'react-navigation-tabs'
//import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
    createStackNavigator({
    //createSwitchNavigator({
    //createBottomTabNavigator({
    //createMaterialTopTabNavigator({
        Main,
        User,
    },{
        headerLayoutPreset: 'center',
        headerBackTitleVisible: false,
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#7159c1'
            },
            headerTintColor: '#FFF',
        }
    })
)
export default Routes;