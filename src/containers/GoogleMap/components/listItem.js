import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Linking, Image } from 'react-native';
import { deviceWidth, deviceHeight_by_six, deviceHeight_by_five } from '../../../themes/metrics';
import images from '../../../assets/images';

export default class ListItem extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    onPressCall = (shopItem) => {
        this.props.navigation.navigate('Detail',{
            shopItem: shopItem,
        });
        // Linking.canOpenURL(`tel:${shopItem.phone}`)
        //     .then((supported) => {
        //         if (!supported) {
        //             Alert.alert('Unable to make a call');
        //         } else {
        //             return Linking.openURL(`tel:${phone}`);
        //         }
        //     })
        //     .catch((err) => console.warn("kmh", "err", err)); //Alert.alert('Unable to make a phone call', err)
    }

    onPressRoute = (shopItem) => {
        this.lanuchGoogleMapAndRouteDirection(shopItem.latitude, shopItem.longitude);
    }

    lanuchGoogleMapAndRouteDirection = (lat, lon) => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
        Linking.canOpenURL(url)
            .then((supported) => {
                if (!supported) {
                    Alert.alert('Unable to open a google map');
                } else {
                    return Linking.openURL(url);
                }
            })
            .catch((err) => console.warn("kmh", 'An error occurred', err));
    }

    render() {
        const { shopItem, onClickFlatListItem } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() => onClickFlatListItem && onClickFlatListItem(shopItem)}>
                <View style={styles.shopDetailContainer}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.row}>
                            <Image
                                source={images.home}
                                style={styles.img}
                            />
                            <Text style={styles.txt}>Shop Name : {shopItem?.name || null}</Text>
                        </View>
                        <View style={styles.row}>
                            <Image
                                source={images.address}
                                style={styles.img}
                            />
                            <Text style={styles.txt}>Address       : {shopItem?.address || null}</Text>
                        </View>
                        <View style={styles.row}>
                            <Image
                                source={images.phone_call}
                                style={styles.img}
                            />
                            <Text style={styles.txt}>Phone          : {shopItem?.phone || null}</Text>
                        </View>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn} onPress={() => this.onPressCall(shopItem)}>
                            {/* <Text>aa</Text> */}
                            {/* <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}> */}
                            <Text>DETAIL</Text>
                            {/* </View> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={() => this.onPressRoute(shopItem)}>
                            <Text>DIRECTION</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        width: deviceWidth,
        height: deviceHeight_by_five,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shopDetailContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        width: deviceWidth * 0.92,
        height: deviceHeight_by_five * 0.8,
        borderWidth: 1,
        borderColor: '#ECE2E0',
        padding: 10,
        borderWidth: 1.4,
        borderColor: '#D7CFDB',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        // flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#D7CFDB',
        width: deviceWidth * 0.4,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 8
    },
    txt: {
        paddingVertical: 3,
    },
    img: {
        height: 15,
        width: 15,
        marginRight: 5,
        resizeMode: "contain"
    }
});

