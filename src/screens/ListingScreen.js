import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import axios from "axios";
import { RESPONSE_SUCCESS, SET_LOADING } from '../redux/actions';
import { connect } from "react-redux";
import { apis } from '../constants/URL'
import { assets } from '../assets/assets';
class ListingScreen extends Component {
    componentDidMount() {
        this.props.setLoadingDispatcher(true);
        this.apiHandler()
    }

    apiHandler = () => {
        axios.get(`${apis.mostPopularURL}${this.props.navigation.state.params.periodValue}${apis.endMostPopularURL}${apis.apiKey}`)
            .then((response) => {
                this.props.setLoadingDispatcher(false);
                if (__DEV__) console.log('response', response);
                if (response.data && response.data.status === 'OK') {
                    this.props.saveDataInStoreDispatcher(response.data.results)
                } else {
                    alert('Unable to fetch details. Please try again later.')
                }
            }).catch((error) => {
                if (__DEV__) console.log(error);
                alert('' + error)
                this.props.setLoadingDispatcher(false);
            });
    }

    render() {
        return (
            <>
                <SafeAreaView style={{ backgroundColor: 'green' }}></SafeAreaView>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: 'green', alignItems: 'center', padding: 10 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image style={{ height: 25, width: 25 }} source={assets.back} />
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 10, color: 'white', fontSize: 20 }}>NY Times Most Popular</Text>
                    </View>
                    {!this.props.isLoading && <FlatList
                        extraData={this.props}
                        data={this.props.data}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => <View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('DetailsScreen', { selectedIndex: index })}>
                                <Text style={{ padding: 20 }}>{item.title}</Text>
                            </TouchableOpacity>
                            <View style={{ height: 1, backgroundColor: 'gray' }}></View>
                        </View>
                        }
                        keyExtractor={(item, index) => index.toString()} />
                    }
                    {this.props.isLoading &&
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Loading...</Text>
                        </View>
                    }
                </View>
                <SafeAreaView></SafeAreaView>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.apiReducer.data,
        isLoading: state.apiReducer.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveDataInStoreDispatcher: (value) => dispatch({ type: RESPONSE_SUCCESS, value }),
        setLoadingDispatcher: (value) => dispatch({ type: SET_LOADING, value }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListingScreen)