import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Setting extends React.PureComponent{

    onPressButton = () => {
        console.warn("hello setting");
    };

    render() {
        const { navigation, route } = this.props;
        return (
            <View style={styles.container}>
                <Button onPress={
                    () => this.onPressButton()}
                    title="Setting"
                    color="#841584" />
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