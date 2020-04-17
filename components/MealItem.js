import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground
                            source={{ uri: props.item.imageUrl }}
                            style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{props.item.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.meaDetails }}>
                        <Text>{props.item.duration}m</Text>
                        <Text>{props.item.complexity}</Text>
                        <Text>{props.item.affordability}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        backgroundColor: 'lightgray',
        borderRadius: 20,
        overflow: 'hidden',
        margin: 10
    },

    mealRow: {
        flexDirection: 'row'
    },

    mealHeader: {
        height: '85%'
    },

    meaDetails: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: 'center'
    },

    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
    },

    title: {
        fontSize: 22,
        textAlign: 'center',
        color: 'white'
    },

    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 12,
        paddingVertical: 5
    }
});

export default MealItem;