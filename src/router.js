import React from 'react';
import { View } from 'react-native'
import LandingScreen from './screens/LandingScreen';
import ListingScreen from './screens/ListingScreen';
import DetailsScreen from './screens/DetailsScreen';
import SideMenu from './screens/SideMenu';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

export default class Router extends React.Component {
    render() {
        const SideMenuNavigator = createDrawerNavigator({
            LandingScreen: LandingScreen,
        }, {
                swipeEnabled: false,
                headerMode: 'none',
                initialRouteName: 'LandingScreen',
                drawerPosition: 'left',
                contentComponent: SideMenu,
                drawerOpenRoute: 'DrawerOpen',
                drawerCloseRoute: 'DrawerClose',
                drawerToggleRoute: 'DrawerToggle',
                drawerLockMode: 'locked-closed',
            }
        );
        const AppStackNavigator = createStackNavigator({
            ListingScreen: ListingScreen,
            DetailsScreen: DetailsScreen,
            SideMenuNavigator: SideMenuNavigator,
        }, {
                initialRouteName: 'SideMenuNavigator',
                headerMode: 'none',
            }
        )
        const AppContainer = createAppContainer(AppStackNavigator);
        return (
            <View style={{ flex: 1 }}>
                <AppContainer />
            </View>
        )
    }
}