import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoogleMapScreen from '../Home/GoogleMap';
import HomeScreen from '../Home';
import DetailScreen from '../Home/GoogleMap/Detail';

const Stack = createNativeStackNavigator();

const HomeNavigation = ({navigation}) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{tabBarVisible:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GoogleMap" component={GoogleMapScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigation;


