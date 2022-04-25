import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NewWork from "./pages/NewWork";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import List from "./pages/List";

const Tab = createBottomTabNavigator();

function RoutesTab() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="NewWork" component={NewWork} />     
        <Tab.Screen name="Profile" component={Profile} />   
      </Tab.Navigator> 
  );
}

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RoutesTab" component={RoutesTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
