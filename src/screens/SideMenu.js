import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default class SideMenu extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Coming soon</Text>
                </View>
            </SafeAreaView>
        )
    }
}