/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar
} from "react-native";

import Loader from "./src/components/Loader";

import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import Authservice from "./src/components/authservice";
import LoginScreen from "./src/components/login";
import Homepage from "./src/components/homepage";
import Commande from "./src/components/commande";
import Profile from "./src/components/profile";
import Mappage from "./src/components/map";
import About from "./src/components/about";
import CommandDetail from "./src/components/commande/CommandDetail";
import ViewPDF from "./src/components/commande/ViewPDF";

// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import reducers from "./src/components/reducers";

// import Navigation from "./src/components/Navigation";

// const store = createStore(reducers);

const AppStack = createStackNavigator({
  Home: Homepage,
  Commande: Commande,
  CommandDetail: CommandDetail,
  Profile: Profile,
  Map: Mappage,
  About: About,
  ViewPDF: ViewPDF
});
const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: Authservice,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

// type Props = {};
// export default class App extends Component<Props> {
//   state = { loggedIn: true };

//   renderInitialView = () => {
//     switch (this.state.loggedIn) {
//       case true:
//         return <Navigation />;

//       case false:
//         return <Login />;

//       default:
//         return <Loader size="large" />;
//     }
//   };

//   render() {
//     return (
//       // <Provider>
//       <View style={styles.container}>
//         <StatusBar backgroundColor="rgb(0,157,224)" barStyle="light-content" />
//         {/* <Text style={styles.welcome}>Welcome to Manorbois</Text> */}
//         <ScrollView
//           contentContainerStyle={styles.contentContainer}
//           showsVerticalScrollIndicator={false}
//         >
//           {this.renderInitialView()}
//         </ScrollView>
//       </View>
//       // </Provider>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",

//     backgroundColor: "rgb(0,157,224)"
//   },
//   contentContainer: {
//     paddingVertical: 20
//   }
// });

// const MainNavigator = createStackNavigator({
//   Home: {screen: HomeScreen},
//   Profile: {screen: ProfileScreen},
// });

// const App = createAppContainer(MainNavigator);

// export default App;
