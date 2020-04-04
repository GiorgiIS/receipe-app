import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The CategoriesScreen</Text>
            <Button
                title='Go to CategoryMeals'
                // 1. navigate will not always navigate you to another screen
                //    e.x. if you are already in that scree, but push will always.
                //    onPress={() => { props.navigation.push('CategoryMeals') }}
                // 2. goBack() and pop(). Navigation has also functions goBack and pop, back will 
                //    get you in previous scree, and pop will pop current screem
                //    that means you will get in previous screen. Difference is that
                //    pop can only be used in stack navigator, goBack works in every navigation      
                // 3. popToTop() takes you to the root screen
                // 4. replace() replaces current screen with another, that means stack is empty and
                //    goBack can't be used. e.x. This will be usefull when user logs in
                onPress={() => { props.navigation.navigate('CategoryMeals') }}
                 />
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

export default CategoriesScreen;