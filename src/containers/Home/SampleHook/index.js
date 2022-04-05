import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

const SampleHook = (props) => {

    const [name, setName] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => { // component did mount
        setCount(2);
    })

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={text => setName(text)}
                value={name}
                placeholder="enter name"
            />
            <Text style={styles.txt}>{name}</Text>
            <Text>Count is incremented {count} times</Text>
        </View>
    );
}

export default SampleHook;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 16,
        color: 'green'
    }
});
