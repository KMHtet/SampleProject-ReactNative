import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Detail extends React.PureComponent{
    render() {
        const { navigation, route } = this.props;
        return (
            <View style={styles.container}>
                <Text>{route.params.shopItem?.name || null}</Text>
                <Text>{route.params.shopItem?.address || null}</Text>
                <Text>{route.params.shopItem?.phone || null}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});