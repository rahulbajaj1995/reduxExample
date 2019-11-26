import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { connect } from "react-redux";

class DetailsScreen extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ borderWidth: 1 }} onPress={() => alert('134') }><Text>Details Here</Text></TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.apiReducer.data
    };
};
export default connect(mapStateToProps)(DetailsScreen)