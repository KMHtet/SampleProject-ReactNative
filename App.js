import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/containers/Home';
import GoogleMapScreen from './src/containers/GoogleMap';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="GoogleMap" component={GoogleMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;





// import React from 'react';
// import Home from './src/containers/Home';
// import GoogleMap from './src/containers/GoogleMap';
// import { Navigation } from "react-native-navigation";
// import Router from './src/routes';

// export default function App() {
//   return (
//     // <Home></Home>
//     <GoogleMap/>
//     // <Router/>
//   );
// }


