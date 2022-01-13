import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../utils/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.background}>
        <View 
            style={styles.closeButton}>
        </View>
        <View 
            style={styles.deleteButton}>
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
        width: 50,
        height: 50,
        position: 'absolute',
        top: 40,
        left: 30,
        backgroundColor: colors.secondary,
    },
    deleteButton: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 40,
        right: 30,
        backgroundColor: colors.primary
    },
});

export default ViewImageScreen;