import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constans/Colors';
import { Platform } from 'react-native';

const CustomHeaderButton = props => {
    return <HeaderButton {...props}
        iconSize={23}
        IconComponent={Ionicons}
        color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
}

export default CustomHeaderButton;
