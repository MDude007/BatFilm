import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const MovieItem = ({ item, setSelectedItem, setModalState }) => {

    const onItemPress = () => {
        setSelectedItem(item);
        setModalState(true);
    }

    return (
        <TouchableOpacity style={styles.mainContainerStyle} onPress={onItemPress}>
            {
                item.Poster !== "N/A"
                    ?
                    <Image style={{ width: 40, height: 60, borderRadius: 10 }} source={{ uri: item.Poster }} />
                    :
                    <View style={{ width: 40, height: 60, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Text style={{ fontFamily: 'Avenir', fontSize: 12, fontWeight: 'bold', color: '#05324d' }}>N/A</Text>
                    </View>
            }

            <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={{ fontFamily: 'Avenir', fontSize: 18, fontWeight: 'bold', color: '#05324d', lineHeight: 20 }}>{item.Title}</Text>
                <Text style={{ fontFamily: 'Avenir', fontSize: 14, marginTop: 5 }}>{item.Year}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainerStyle: {
        flex: 1,
        backgroundColor: 'white',
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 2
    }
})

export default MovieItem;