import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import AppText from '../components/AppText/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image 
            style={styles.image}
            source={require('../assets/jacket.jpg')}/>
            <View style={styles.listingContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.subTitle}>$100</AppText>
                <View style={styles.item}>
                <ListItem 
                    image={require('../assets/amanda.png')}
                    title='Amanda F.'
                    subTitle='3 Listings'
                />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    listingContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    subTitle: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    item: {
        marginVertical: 40,
    },
})

export default ListingDetailsScreen;