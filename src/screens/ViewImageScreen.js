import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.background}>
        <View 
            style={styles.closeButton}>
            <MaterialCommunityIcons name='close' color='white' size={35}/>
        </View>
        <View 
            style={styles.deleteButton}>
            <MaterialCommunityIcons name='trash-can-outline' color='white' size={35}/>
        </View>
        <Image
        resizeMode='contain'
        style={styles.image}
        source={require('../assets/chair.jpg')}>
        </Image>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    background: {
        backgroundColor: colors.black,
        flex: 1,
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        left: 30,
    },
    deleteButton: {
        position: 'absolute',
        top: 40,
        right: 30,
    },
});

export default ViewImageScreen;