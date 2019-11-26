import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { assets } from '../assets/assets';

export default class LandingScreen extends Component {
    navigationHandler = (periodValue) => {
        this.props.navigation.navigate('ListingScreen', { periodValue: periodValue });
    }

    render() {
        return (
            <>
                <SafeAreaView style={{ backgroundColor: 'green' }}></SafeAreaView>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: 'green', alignItems: 'center', padding: 10 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Image style={{ height: 25, width: 25 }} source={assets.menu} />
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 10, color: 'white', fontSize: 20 }}>Home Screen</Text>
                    </View>
                    <Text style={{ margin: 10, fontSize: 15 }}>Select Period Value from the following options</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => this.navigationHandler('1')}
                            style={{ flex: 1, borderWidth: 1, margin: 10, alignItems: 'center', justifyContent: 'center', height: 50, width: 50 }}>
                            <Text>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.navigationHandler('7')}
                            style={{ flex: 1, borderWidth: 1, margin: 10, alignItems: 'center', justifyContent: 'center', height: 50, width: 50 }}>
                            <Text>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.navigationHandler('30')}
                            style={{ flex: 1, borderWidth: 1, margin: 10, alignItems: 'center', justifyContent: 'center', height: 50, width: 50 }}>
                            <Text>30</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <SafeAreaView></SafeAreaView>
            </>
        )
    }
}