import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import NewWork from "./pages/NewWork";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import List from "./pages/List";

const Tab = createBottomTabNavigator();

function RoutesTab() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'List') {
          iconName = focused ? 'clipboard-list' : 'clipboard-list-outline';
        } else if (route.name === 'NewWork') {
          iconName = focused ? 'plus-circle' : 'plus-circle-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'account-box' : 'account-box-outline';
        }
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'cornflowerblue',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="List" component={List} options={{title:"Lista de animes"}}/>
      <Tab.Screen name="NewWork" component={NewWork} options={{title:"Novo anime"}}/>
      <Tab.Screen name="Profile" component={Profile} options={{title:"Perfil"}}/>
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{title:"Log-in"}}/>
        <Stack.Screen name="Register" component={Register} options={{title:"Nova conta"}}/>
        <Stack.Screen name="RoutesTab" component={RoutesTab} options={{title:"OtakuList"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
