import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { deviceWidth, deviceHeight_by_six } from '../../../themes/metrics';

export default class ListItem extends React.PureComponent{
    render() {
        const { shopItem } = this.props;
        console.warn("kmh", "shop item", shopItem);
        return (
            <View style={styles.container}>
                <View style={styles.shopDetailContainer}>
                    <Text>Shop Name : {shopItem?.name || null}</Text>
                    <Text>Address   : {shopItem?.address || null}</Text>
                    <View style={styles.btnContainer}>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: deviceWidth * 0.8,
        height: deviceHeight_by_six,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shopDetailContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        width: deviceWidth * 0.75,
        height: deviceHeight_by_six * 0.8,
        borderWidth: 1,
        borderColor: '#ECE2E0',
        padding: 10
    },
    btnContainer: {

    }
});

