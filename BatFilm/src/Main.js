import { createStackNavigator } from "@react-navigation/stack";
import Home from "./HomeScreen";
import Splash from "./SplashScreen";

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Home" component={Home} options={{
                title: "BatFilm",
                headerTitleStyle: {
                    color: 'white'
                },
                headerStyle: {
                    backgroundColor: 'gray'
                }
            }} />
        </Stack.Navigator >
    )
}

export default MyStack