import React from 'react';
import { View, StyleSheet, Button, FlatList, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import { deviceWidth } from '../../themes/metrics';
import images from '../../assets/images';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const DATA = [
    {
        id: 1,
        title: 'Navigation',
        Screen: 'Navigation'
    },
    {
        id: 2,
        title: 'Google Map',
        Screen: 'GoogleMap'
    },
    {
        id: 3,
        title: 'Sample Hook',
        Screen: 'SampleHook'
    },
]

export default class Home extends React.PureComponent {

    onClickFlastListItem = (item) => {
        this.props.navigation.navigate(item.Screen);
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.flxContainer} onPress={() => this.onClickFlastListItem(item)}>
                <Text>{item.title}</Text>
                <Image
                    source={images.search}
                    style={styles.img}
                />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    ref={(ref) => { this.flastListFef = ref; }}
                    data={DATA}
                    showsHorizontalScrollIndicator={false}
                    onClickFlastListItem={this.onClickFlastListItem}
                    extraData={this.state}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItem}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flxContainer: {
        width: deviceWidth,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        padding: 10,
        marginTop: 8,
        shadowColor: 'grey',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        justifyContent: 'space-between'
    },
    img: {
        height: 15,
        width: 15,
        marginRight: 5,
        resizeMode: "contain"
    },
});