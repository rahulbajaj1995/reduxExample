import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { connect } from "react-redux";
import { assets } from '../assets/assets';

class DetailsScreen extends Component {
    render() {
        const displayData = this.props.data[this.props.navigation.state.params.selectedIndex];
        return (
            <>
                <SafeAreaView style={{ backgroundColor: 'green' }}></SafeAreaView>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: 'green', alignItems: 'center', padding: 10 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image style={{ height: 25, width: 25 }} source={assets.back} />
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 10, color: 'white', fontSize: 20 }}>NY Details</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ margin: 15 }}>
                            <Text style={{ fontSize: 16, color: 'black' }}>Title :</Text>
                            <Text style={{ fontSize: 12, marginTop: 5 }}>{displayData.title}</Text>
                        </View>
                        <View style={{ height: 1, backgroundColor: 'gray' }}></View>
                        <View style={{ margin: 15 }}>
                            <Text style={{ fontSize: 16, color: 'black' }}>Published Date :</Text>
                            <Text style={{ fontSize: 12, marginTop: 5 }}>{displayData.published_date}</Text>
                        </View>
                        <View style={{ height: 1, backgroundColor: 'gray' }}></View>
                        <View style={{ margin: 15 }}>
                            <Text style={{ fontSize: 16, color: 'black' }}>Abstract :</Text>
                            <Text style={{ fontSize: 12, marginTop: 5 }}>{displayData.abstract}</Text>
                        </View>
                        <View style={{ height: 1, backgroundColor: 'gray' }}></View>
                        <View style={{ margin: 15 }}>
                            <Text style={{ fontSize: 16, color: 'black' }}>Adx Keywords :</Text>
                            <Text style={{ fontSize: 12, marginTop: 5 }}>{displayData.adx_keywords}</Text>
                        </View>
                        <View style={{ height: 1, backgroundColor: 'gray' }}></View>
                    </View>
                </View>
                <SafeAreaView></SafeAreaView>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.apiReducer.data
    };
};
export default connect(mapStateToProps)(DetailsScreen)