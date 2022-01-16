import React from 'react';
import { Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';

import colors from '../config/colors';


function PrimaryButton({title, onPress}) {
    return (
        <TouchableOpacity
        style={styles.button} 
        onPress={() => Alert.alert('Button pressed')}>
            <Text style={styles.text}>
            {title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});

export default PrimaryButton;