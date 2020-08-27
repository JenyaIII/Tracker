import React from 'react';
import {
  NavigationContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "@react-navigation/native";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

export default function App() {
  return <NavigationContainer>

  </NavigationContainer>
}

// const switchNavigator = createSwitchNavigator({
//   loginFlow: createStackNavigator({
//     Signup: SignupScreen,
//     Signin: SigninScreen
//   }),
//   mainFlow: createBottomTabNavigator({
//     trackListFlow: createStackNavigator({
//       TrackList: TrackListScreen,
//       TrackDetail: TrackDetailScreen
//     }),
//     TrackCreate: TrackCreateScreen,
//     Account: AccountScreen
//   })
// });
//
// export default NavigationContainer(switchNavigator);