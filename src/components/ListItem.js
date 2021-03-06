import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText/AppText';

function ListItem({ title, subTitle, image}) {
    return (
        <View style={styles.container}>
            <Image
            style={styles.image} 
            source={image} />
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 10,
    },
    title: {
        fontWeight: '500',
    },
    subTitle: {
        color: colors.grey,
    },
})

export default ListItem;