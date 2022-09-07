import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, FlatList, Modal, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import ModalComponent from "./components/ModalComponent";
import MovieItem from "./components/MovieItem";
import PaginationContainer from "./components/PaginationContainer";

const Home = () => {

    const [currPageData, setCurrPageData] = useState([]);
    const [selectedItem, setSelectedItem] = useState({})
    const [modalState, setModalState] = useState(false)
    const [currPageNum, setCurrPageNum] = useState(1)


    useEffect(() => {
        fetch("https://www.omdbapi.com/?s=Batman&apikey=eeefc96f&page=1")
            .then((response) => response.json())
            .then((json) => {
                if (json.Response === "True") {
                    setCurrPageData(json.Search)
                }
            })
            .catch((err) => {
                console.log('inner err:', err);
            })
            .catch((err) => {
                console.log('outer err:', err);
            })
    }, [])

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=Batman&apikey=eeefc96f&page=${currPageNum}`)
            .then((response) => response.json())
            .then((json) => {
                if (json.Response === "True") {
                    setCurrPageData(json.Search)
                }
            })
            .catch((err) => {
                console.log('inner err:', err);
            })
            .catch((err) => {
                console.log('outer err:', err);
            })
    }, [currPageNum])

    const onCloseModal = () => {
        setModalState(false);
        setSelectedItem({});
    }

    return (
        <LinearGradient style={{ flex: 1 }} colors={['#ffafbd', '#ffc3a0']}>
            <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
                <View style={{ flex: 1, paddingTop: 30 }}>
                    <FlatList
                        data={currPageData}
                        keyExtractor={(item) => item.imdbID}
                        // numColumns={2}
                        renderItem={({ item }) => {
                            return (
                                <MovieItem item={item} setSelectedItem={setSelectedItem} setModalState={setModalState} />
                            )
                        }}
                    />
                    <PaginationContainer currPageNum={currPageNum} setCurrPageNum={setCurrPageNum} />

                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalState}
                        onRequestClose={onCloseModal}>
                        <ModalComponent selectedItem={selectedItem} onCloseModal={onCloseModal} />
                    </Modal>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )

}

const styles = StyleSheet.create({

})

export default Home;