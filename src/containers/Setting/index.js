import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Setting extends React.PureComponent{

    onPressNavigateButton = () => {
        this.props.navigation.navigate('SettingDetail');
    };

    onPressPushButton = () => {
        this.props.navigation.push('SettingDetail');
    };

    onPressGoBackButton = () => {
        this.props.navigation.goBack();
    };

    render() {
        const { navigation, route } = this.props;
        navigation.setOptions({ title: 'Updated!' });
        return (
            <View style={styles.container}>
                <Button onPress={
                    () => this.onPressNavigateButton()}
                    title="Navigate"
                    color="#841584" />
                <Button onPress={
                    () => this.onPressPushButton()}
                    title="Push"
                    color="#841584" />
                <Button onPress={
                    () => this.onPressGoBackButton()}
                    title="GoBack"
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