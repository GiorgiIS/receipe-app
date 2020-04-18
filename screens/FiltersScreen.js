import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constans/Colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    );
};

const FiltersScreen = props => {

    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    // useCallback hook allows to wrap a function 
    // that will be cashed and will return memorized version of function.
    // cash will change when dependency is updated:
    // [isGlutenFree, isLactoseFree, isVegan, isVegetarian]
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            isVegetarian: isVegetarian
        };
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    // after every render I want to save filter
    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]);

    const { save } = props.route.params;

    props.navigation.setOptions({
        headerTitle: 'Filters',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Menu'
                    iconName='ios-menu' // can be any icon from @expo/vector-icons
                    onPress={() => {
                        props.navigation.toggleDrawer();;
                    }}
                />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Save"
                    iconName="ios-save"
                    onPress={save}
                />
            </HeaderButtons>
        )
    });

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                label="Gluten-free"
                state={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
                label="Lactose-free"
                state={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label="Vegan"
                state={isVegan}
                onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch
                label="Vegetarian"
                state={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        alignItems: 'center'
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },

    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }

});

export default FiltersScreen;
