import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class ListItem extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { item, onClickFlatListItem } = this.props;
        return (
            <View>
                <Text>Hello</Text>
            </View>
            // <TouchableOpacity style={styles.container} onPress={() => onClickFlatListItem && onClickFlatListItem(item)}>
            //     <Text>Hello</Text>
            // </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#42a832',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

