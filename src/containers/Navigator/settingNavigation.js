import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingScreen from '../Setting';
import SettingDetailScreen from '../Setting/settingDetail';

const Stack = createNativeStackNavigator();

const SettingNavigation = ({navigation}) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="SettingDetail" component={SettingDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SettingNavigation;


