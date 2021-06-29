import React, { useState, useContext } from 'react';
import { 
    View,
    Text, 
    TouchableOpacity, 
    Image, 
    StyleSheet 
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';


const LoginScreen = ({navigation}) => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const {login, googleLogin, fbLogin} = useContext(AuthContext);

    return (
        <View style={styles.container} >
            <Image 
                source={require('../assets/logo.jpg')}
            />
            <Text style={styles.text}>FarmCare</Text>

            <FormInput
                placeholderText="Email"
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                placeholderText="password"
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Sign In"
                onPress={() => login(email,password) }
            />

            <TouchableOpacity style={styles.forgotButton} 
            onPress={() => {}} >
                <Text style={styles.navButtonText} >
                    Forgot Password
                </Text>
            </TouchableOpacity>

            {Platform.OS === 'android' ? (
                <View>
                <SocialButton
                    buttonTitle="Sign In with Facebook"
                    btnType="facebook"
                    color="#4867aa"
                    backgroundColor="#e6eaf4"
                    onPress={() => fbLogin()}
                />

                <SocialButton
                    buttonTitle="Sign In with Google"
                    btnType="google"
                    color="#de4d41"
                    backgroundColor="#f5e7ea"
                    onPress={() => googleLogin()}
                />
                </View>
            ) : null}


            <TouchableOpacity style={styles.forgotButton}
             onPress={() => navigation.navigate('Signup')} >
                <Text style={styles.navButtonText} >
                    Don't have an account? Create Here...
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
      },
      logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
      },
      text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
      },
      navButton: {
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 35,
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
      },
});