import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Home Tab
import HomeScreen from './src/containers/Home';
import GoogleMapScreen from './src/containers/Home/GoogleMap';
import DetailScreen from './src/containers/Home/GoogleMap/Detail';

//Setting Tab
import SettingScreen from './src/containers/Setting';
import SettingDetailScreen from './src/containers/Setting/settingDetail';

//Navigation
import NavigationScreen from './src/containers/Home/Navigation';

//SampleHook
import SampleHookScreen from './src/containers/Home/SampleHook';

const Tab = createBottomTabNavigator();
const HomeStack  = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function TabScreen({navigation}) {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Setting" component={SettingScreen}/>
      </Tab.Navigator>
  )
}

const BottomTab = ({ navigation }) => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={TabScreen}/>
        <HomeStack.Screen name="GoogleMap" component={GoogleMapScreen}/>
        <HomeStack.Screen name="Detail" component={DetailScreen}/>
        <HomeStack.Screen name="Setting" component={SettingScreen}/>
        <HomeStack.Screen name="SettingDetail" component={SettingDetailScreen}/>
        <HomeStack.Screen name="Navigation" component={NavigationScreen}/>
        <HomeStack.Screen name="SampleHook" component={SampleHookScreen}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;




