import React from 'react';
import { Button, Image, StyleSheet, TextInput, View, Text, TouchableOpacity, Alert} from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {MaterialCommunityIcons} from '@expo/vector-icons'
 


function LoginScreen({navigation}) {
    const [show, setShow] = React.useState(false);
    const [visible, setVisible] = React.useState(true);
    return (
        <View style={styles.background}>
           <Image style={styles.logo} source={require('../../assets/Synthia_logo.png')}/>  
            <TextInput style={styles.textInput1} placeholder="Email"/>
            <View style={styles.action}>
                <TextInput style={styles.textInput2} secureTextEntry = {visible} placeholder="Password"/>            
                <TouchableOpacity style={styles.btnEye} onPress={() => {setVisible(!visible), setShow(!show)}}>
                    <MaterialCommunityIcons
                    name={show == false ? 'eye-off' : 'eye-outline'} 
                    size={23} 
                    color={"#808080"}/>
                </TouchableOpacity> 
            </View>
            <AppButton title="LOGIN"/>
            <View style={styles.allignButtons}>            
            <ButtonPassword title="Forgot Password?"/>
            <Text style={styles.allginTextField}>New User?</Text>

                 <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={styles.buttonContainerPassword}>
                    <Text style = {styles.buttonText}>SIGN UP</Text>
                 </TouchableOpacity>
              
            </View>
            <Text style={styles.alignGoogleText}>Or login with</Text>
            <View>
                <TouchableOpacity onPress={() => Alert.alert('image clicked')} style={styles.imageContainer}>
                    <Image source={{uri:'https://img-authors.flaticon.com/google.jpg'}} style={styles.image}/>
                </TouchableOpacity>
            </View>
        </View>
        
    );
}
//<ButtonSignUp title="SIGN UP"/>4
/*<View>
             <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={styles.buttonContainerPassword}>
               <Text style={styles.buttonText}>SIGN UP</Text>
             </TouchableOpacity>
            </View>

/* <View>
     <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={styles.buttonContainerPassword}>
     <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    </View> */

const ButtonSignUp = ({onPress, title}, {navigation}) => (
    <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={styles.buttonContainerPassword}>
     <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

const ButtonPassword = ({onPress, title}) => (
    <TouchableOpacity onPress={(onPress)} style={styles.buttonContainerPassword}>
     <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

/*const ButtonSignUp = ({onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainerSignUp}>
     <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);*/

const AppButton = ({onPress, title}) => (
 <TouchableOpacity onPress={() => Alert.alert('Login Clicked')} style={styles.appButtonContainer}>
     <Text style={styles.appButtonText}>{title}</Text>
 </TouchableOpacity>
);


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        position: 'absolute',
        alignSelf: 'center',
        top: 120,
    },
    btnEye: {
        position:'absolute',
        top: 370,
        left: 320,
    },
    textInput1: {
        position: 'absolute',
        fontSize: 17,
        width: '80%',
        top: 320,
        left: 30,
        marginTop: 10,
        borderBottomWidth: 0.5,
        paddingLeft: 10,
        borderBottomColor: "#808080",
    },
    textInput2: {
        position: 'absolute',
        fontSize: 16,
        width: '80%',
        top: 360,
        left: 30,
        marginTop: 10,
        borderBottomWidth: 0.5,
        paddingLeft: 10,
        borderBottomColor: "#808080",
    },
    image: {
        //position: 'absolute',
       // marginTop: 550,
        height: 80,
        width: 80,
        //alignSelf:'center',

    },
    imageContainer: {
        alignItems: 'center',
        top: 560,
        width: "80%",
        left: 30,
    },
    /*buttonContainer: {
        top: 410,
        width: "80%",
        left:30,
        color: "#fff",
        shadowColor: "#808080",
        shadowOffset: {width: 10, height: 10, },
        shadowOpacity: 5.0,      
    },
    buttonLogin: {
        color: "#1e90ff",
    },*/
    allignButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    appButtonContainer: {
       //color: "#808080",
       shadowColor: "#808080",
       shadowOffset: {width: 10, height: 10, },
       shadowOpacity: 5.0, 
       shadowRadius: 60,
       elevation: 3,
       height: 35,
       backgroundColor: '#fff',  
       alignItems: 'center',
       top: 410,
       width: "80%",
       left: 30,
    },
    appButtonText: {
        color: "#1e90ff",
        alignSelf:"center",
        fontSize: 18,
        marginTop: 7,
        fontWeight: 'bold',
    },
    alignGoogleText:{
        position: 'absolute',
        top: 598,
        left: 145,
        height: 150,
        width: 150,
        alignSelf:'center',
        color: "#808080",
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttonContainerPassword: {
        //height: 35,  
        alignItems: 'center',
        top: 420,
        width: "30%",
        left: 30,
     },
     buttonContainerSignUp: {
        top:420,
        marginRight:45,
        
     },
     buttonText: {
         color: "#1e90ff",
         alignSelf:"center",
         fontSize: 12,
         marginTop: 7,
         fontWeight: 'bold',
         width: "100%",
     },
     allginTextField: {
        top: 425,
        width: "30%",
        left: 95,
        color: "#a9a9a9",
        fontWeight: 'bold',
     },
     action: {
        flexDirection: 'row',
     },
})



export default LoginScreen;