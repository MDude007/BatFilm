import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import LottieView from 'lottie-react-native';

const Splash = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.mainContainerStyle}>
            <LottieView
                source={require('./assets/batFilmSplash.json')}
                autoPlay={true}
                loop={false}
                speed={2.5}
                onAnimationFinish={() => navigation.replace("Home")}

            />
        </View>
    )

}

const styles = StyleSheet.create({
    mainContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ffdde1',
        backgroundColor: '#ffc3a0'
    }
})

export default Splash;