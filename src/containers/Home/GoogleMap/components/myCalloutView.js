import React from 'react';
import { View, Text } from 'react-native';

export default class MyCalloutView extends React.PureComponent{

    render() {
        const { it } = this.props;
        return (
          <View
            style={{
              backgroundColor: 'white',
              alignSelf: 'center',
              width: 130,
            }}
          >
            <Text
              numberOfLines={2}
              style={{
                fontWeight: 'bold',
                fontSize: 13,
              }}
            >
              {it.name}
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 13,
              }}
            >
              {it.address}
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 13,
              }}
            >
              {it.phone}
            </Text>
          </View>
        );
      }
}