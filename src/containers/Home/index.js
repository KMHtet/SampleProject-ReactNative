import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import Navigation from '../Navigator/homeNavigation';

export default class Home extends React.PureComponent {

    onPressButton = () => {
        this.props.navigation.navigate('GoogleMap');
    };

    render() {
        return (
            <View style={styles.container} >
                <Button onPress={
                    () => this.onPressButton()}
                    title="Google Map"
                    color="#841584" />
            </View>
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
});