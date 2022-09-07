import React, { useRef } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PaginationContainer = ({ currPageNum, setCurrPageNum }) => {

    const pageNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const flatListRef = useRef();

    const onItemPress = (item) => {
        setCurrPageNum(item);
        flatListRef.current.scrollToIndex({ index: item - 1, viewPosition: 0.5 })
    }

    const onPrevPress = () => {
        let temp = currPageNum;
        if (temp != 1) {
            setCurrPageNum(temp - 1);
            flatListRef.current.scrollToIndex({ index: temp - 2, viewPosition: 0.5 })
        }
    }

    const onNextPress = () => {
        let temp = currPageNum;
        if (temp != 10) {
            setCurrPageNum(temp + 1);
            flatListRef.current.scrollToIndex({ index: temp, viewPosition: 0.5 })
        }
    }

    return (
        <View style={{ flexDirection: 'row', marginHorizontal: 20, paddingHorizontal: 20, alignItems: 'center', marginTop: 20 }}>
            <TouchableOpacity style={{ marginRight: 10 }} onPress={onPrevPress} disabled={currPageNum == 1}>
                <Text style={currPageNum == 1 ? styles.diabledActionText : styles.enabledActionText}>Prev</Text>
            </TouchableOpacity>
            <FlatList
                ref={flatListRef}
                data={pageNumber}
                horizontal={true}
                keyExtractor={(item, id) => id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => { onItemPress(item) }} style={currPageNum == item ? styles.selectedItem : styles.nonSelectedItem}>
                            <Text style={currPageNum == item ? styles.selectedText : styles.nonSelectedText}>{item}</Text>
                        </TouchableOpacity>
                    )
                }}

            />
            <TouchableOpacity style={{ marginLeft: 10 }} onPress={onNextPress} disabled={currPageNum == 10}>
                <Text style={currPageNum == 10 ? styles.diabledActionText : styles.enabledActionText}>Next</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    diabledActionText: {
        fontFamily: 'Avenir',
        fontSize: 18,
        color: '#EEEEEE'
    },
    enabledActionText: {
        fontFamily: 'Avenir',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    selectedText: {
        fontFamily: 'Avenir',
        fontSize: 18,
        color: '#05324d',
        fontWeight: 'bold'
    },
    nonSelectedText: {
        fontFamily: 'Avenir',
        fontSize: 18,
        color: 'white',
        // fontWeight: 'bold'
    },
    selectedItem: {
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 20
    },
    nonSelectedItem: {
        paddingHorizontal: 15,
    }
})

export default PaginationContainer