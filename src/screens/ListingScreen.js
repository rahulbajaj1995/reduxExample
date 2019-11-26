import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import axios from "axios";
import { RESPONSE_SUCCESS, RESPONSE_FAILURE } from '../redux/actions';
import { connect } from "react-redux";
import { isTSEnumMember } from '@babel/types';

class ListingScreen extends Component {
    componentDidMount() {
        this.apiHandler()
    }

    apiHandler = () => {

        let data = {
            // job_seekers_id: this.state.id,
        }
        axios.get('https://kbzdev.affle.com/api/v1/category/get_all_category',
            // data,
            // {
            //     headers: { Authorization: AuthStr }
            // }
        ).then((response) => {
            if (__DEV__) console.log('response', response);
            if (response.data.status === 200) {
                this.props.saveDataInStoreDispatcher(response.data.data.category)
            } else {
                alert('Unable to fetch details. Please try again later.')
            }
        }).catch((error) => {
            if (__DEV__) console.log(error);
        });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        // style={{ flex: 1, marginTop: 2, backgroundColor: c.seperatorViewColor }}
                        extraData={this.props}
                        data={this.props.data}
                        renderItem={({ item }) => <View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('DetailsScreen')}>
                                <Text style={{ padding: 20 }}>{item.category_name}</Text>
                            </TouchableOpacity>
                            <View style={{ height: 1, backgroundColor: 'gray' }}></View>
                        </View>
                        }
                        keyExtractor={item => item.id} />
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

const mapDispatchToProps = dispatch => {
    return {
        saveDataInStoreDispatcher: (value) => dispatch({ type: RESPONSE_SUCCESS, value }),
        saveErrorInStoreDispatcher: (value) => dispatch({ type: RESPONSE_FAILURE, value }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListingScreen)
