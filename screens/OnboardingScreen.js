import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'

const OnboardingScreen = ({navigation}) => {
    return (
       <Onboarding
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: 'black',
                    image: <Image source={require('../assets/onboarding-img1.jpeg')} />,
                    title: 'Introducing ICT To Te Farm',
                    subtitle: 'A New Way To Connect With Other Farmers',
                },
                {
                    backgroundColor: 'black',
                    image: <Image source={require('../assets/onboarding-img2.jpeg')} />,
                    title: 'Working with other farmers to succeed together.',
                    subtitle: 'As Well As Marketeers',
                },
                {
                    backgroundColor: 'black',
                    image: <Image source={require('../assets/onboarding-img3.jpeg')} />,
                    title: 'Enough Intro...',
                    subtitle: 'Lets Get Started!',
                },
            ]}
       />
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },

});
