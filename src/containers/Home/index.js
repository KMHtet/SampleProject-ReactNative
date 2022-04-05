import React from 'react';
import { View, StyleSheet, Button, FlatList, SafeAreaView, Text } from 'react-native';

const DATA = [
    {
        id: 1,
        title: 'Google Map',
        Screen: 'GoogleMap'
    },
    {
        id: 2,
        title: 'Google Map',
        Screen: 'GoogleMap'
    }
]

export default class Home extends React.PureComponent {

    onPressButton = () => {
        this.props.navigation.navigate('GoogleMap');
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Hello</Text>
                {/* <View style={styles.container} >
                    <Button onPress={
                        () => this.onPressButton()}
                        title="Google Map"
                        color="#841584" />
                </View> */}
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
});