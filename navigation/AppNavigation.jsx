import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import ProductScreen from "../screens/ProductScreen"


const Stack = createNativeStackNavigator()

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
            <Stack.Screen name="Product" options={{headerShown: false}} component={ProductScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}