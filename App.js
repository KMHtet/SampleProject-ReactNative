import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './src/containers/Navigator/homeNavigation';
import SettingNavigation from './src/containers/Navigator/settingNavigation';

const Tab = createBottomTabNavigator();
// const HomeStack  = createNativeStackNavigator();
// const SettingsStack = createNativeStackNavigator();

// function HomeStackNavigation({navigation}) {
//   return (
//       <HomeStack.Navigator screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}>
//           <HomeStack.Screen name="Home" component={() => <HomeNavigation navigation={navigation}/>}/>
//       </HomeStack.Navigator>
//   )
// }

// function SettingsStackNavigation({navigation}) {
//   return (
//       <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
//           <SettingsStack.Screen name="Setting" component={() => <SettingNavigation navigation={navigation}/>}/>
//       </SettingsStack.Navigator>
//   )
// }

const BottomTab = ({navigation}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={() => <HomeNavigation navigation={navigation}/>} />
        <Tab.Screen name="Setting" component={() => <SettingNavigation navigation={navigation}/>} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;


