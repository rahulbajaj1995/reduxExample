import React from 'react';
import { View } from 'react-native'
import ListingScreen from './screens/ListingScreen';
import DetailsScreen from './screens/DetailsScreen';
import { createStackNavigator } from 'react-navigation-stack';
import {
    createAppContainer,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation';

export default class Router extends React.Component {
    render() {
        const AppStackNavigator = createStackNavigator({
            ListingScreen: ListingScreen,
            DetailsScreen: DetailsScreen,
        }, {
                initialRouteName: 'ListingScreen',
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