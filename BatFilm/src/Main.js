import { createStackNavigator } from "@react-navigation/stack";
import Home from "./HomeScreen";
import Splash from "./SplashScreen";

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerTransparent: true
            }}>
            <Stack.Screen name="Splash" component={Splash} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Home" component={Home} options={{
                title: "BatFilm",
                headerTitleStyle: {
                    color: 'white',
                    fontFamily: 'Avenir',
                    fontSize: 22,
                    fontWeight: 'bold'
                },
                headerStyle: {
                    backgroundColor: 'gray'
                }
            }} />
        </Stack.Navigator >
    )
}

export default MyStack