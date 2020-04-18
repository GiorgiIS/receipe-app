import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FiltersScreen = props => {
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
        )
    })

    return (
        <View style={styles.screen}>
            <Text>The FiltersScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FiltersScreen;