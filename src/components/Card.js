import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText/AppText';


function Card({ image, subTitle, title}) {
    return (
        <View style={styles.card}>
            <Image 
            style={styles.image}
            source={image}/>
            <View style={styles.listing}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    listing: {
        padding: 20,
    },
    title: {
        marginBottom: 7,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold',
    }
});

export default Card;