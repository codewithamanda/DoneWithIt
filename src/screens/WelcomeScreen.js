import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text, Platform } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import AppText from '../components/AppText/AppText';
import colors from '../config/colors';


function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={10}
        style={styles.background}
        source={require('../assets/background.jpg')}>
        <View style={styles.logoContainer}>
            <Image 
            style={styles.logo}
            source={require('../assets/logo-red.png')}/>
            <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.loginButton}>
            <PrimaryButton title='Login'/>
        </View>
        <View 
            style={styles.registerButton}>
            <SecondaryButton title='Register'/>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 70,
    },
    tagline: {
        fontWeight: '600',
        paddingVertical: 20,
        fontSize: 25,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    },
    loginButton: {
        width: '90%',
        margin: 15,
    },
    registerButton: {
        width: '90%',
        marginBottom: 40,
    }
})

export default WelcomeScreen;