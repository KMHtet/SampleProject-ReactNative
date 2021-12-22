import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import images from '../../../assets/images';

export default class MyMarkerView extends React.PureComponent {
    render() {
        const { it } = this.props;
        switch (it.type) {
            case 1:
                return (
                    <View style={styles.container}>
                        <Image source={images.map_maker_green} style={styles.img} />
                    </View>
                );
            case 2:
                return (
                    <View style={styles.container}>
                        <Image source={images.map_maker_red} style={styles.img} />
                    </View>
                );
            default:
                return (
                    <View style={styles.container}>
                        <Image source={images.map_maker_green} style={styles.img} />
                    </View>
                );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 40,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    img: {
        width: 30,
        height: 40
    }
});