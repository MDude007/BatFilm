import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from "react-native";

const ModalComponent = ({ selectedItem, onCloseModal }) => {


    return (
        <View style={styles.modalContainerStyle}>
            <View style={{ borderRadius: 20, backgroundColor: 'white', padding: 10 }}>
                <TouchableOpacity onPress={onCloseModal} style={{ alignSelf: 'flex-end', backgroundColor: 'pink', borderRadius: 30 }}>
                    <Image style={styles.closeIcon} source={require('../assets/close.png')} />
                </TouchableOpacity>


                <View style={{ marginHorizontal: 20 }}>
                    {
                        selectedItem.Poster !== "N/A"
                            ?
                            <Image style={{ width: Dimensions.get('window').width * 0.8, height: Dimensions.get('window').width * 0.8 * 3 / 2, borderRadius: 20 }} source={{ uri: selectedItem.Poster }} />
                            :
                            <View style={{ width: Dimensions.get('window').width * 0.8, height: Dimensions.get('window').width * 0.8 * 3 / 2, justifyContent: 'center', alignItems: 'center', borderRadius: 20, backgroundColor: 'lightgray' }}>
                                <Text style={{ fontFamily: 'Avenir', fontSize: 20, fontWeight: 'bold', color: '#05324d' }}>Poster Not Available</Text>
                            </View>
                    }

                </View>

                <View style={{ alignItems: 'center', marginHorizontal: 20, borderRadius: 20, marginTop: 10, padding: 10, borderWidth: 2, borderColor: '#05324d' }}>
                    <Text style={{ fontFamily: 'Avenir', fontSize: 20, fontWeight: 'bold', color: '#05324d', lineHeight: 23 }}>{selectedItem.Title}</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ flex: 1, fontFamily: 'Avenir', fontSize: 14 }}>{selectedItem.Year}</Text>
                        <Text style={{ fontFamily: 'Avenir', fontSize: 14 }}>{selectedItem.Type}</Text>
                    </View>
                </View>

            </View>
        </View >
    )

}

const styles = StyleSheet.create({

    modalContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000CC'
    },
    modalInnerContainer: {
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    closeIcon: {
        width: 30,
        height: 30
    }

})

export default ModalComponent