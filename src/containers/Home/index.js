import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

export default class Home extends React.PureComponent {

    onPressButton = () => {
        this.props.navigation.navigate('GoogleMap');
    };

    render() {
        return (
            <View style={styles.container} >
                <Button onPress={
                    () => this.onPressButton()}
                    title="Google Map Example"
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