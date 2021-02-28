import React from 'react';
import {  Button, StyleSheet, Text,TextInput ,View } from 'react-native';

function SignUpScreen({navigation}) {
    return (
        <View style={styles.mainGround}>
        <Text style={{marginTop:50 , fontSize:30, fontWeight:'bold', left:35}}>Sign Up</Text>    
        {/* First Name View*/}
        <View style={styles.SectionStyle}>
          <TextInput style={styles.inputStyle}
            placeholder="First Name"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            returnKeyType="next"
            underlineColorAndroid="#f000"
            />                                                       
       </View>  
       {/* Last Name View */} 
       <View style={styles.SectionStyle}>
          <TextInput style={styles.inputStyle}
            placeholder="Last Name" 
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            />                                                       
       </View> 
       {/* Email View */}
       <View style={styles.SectionStyle}>
          <TextInput style={styles.inputStyle}
            placeholder="Email" 
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            />                                                       
       </View>
      {/* Password View */}
       <View style={styles.SectionStyle}>
          <TextInput style={styles.inputStyle}
            placeholder="Password" 
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            />                                                       
       </View> 
       {/*Confirmed Password View */}
       <View style={styles.SectionStyle}>
          <TextInput style={styles.inputStyle}
            placeholder="Confirmed Password"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
            />                                                       
       </View> 
       {/*Next Button View */}
       <View style={styles.nextButton}>   
        <Button
          title="Next"
          onPress={() => navigation.navigate('SignUpSubmitScreen')}
        />
        </View>           
      </View>    
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    /* Style for the all 'Section View' */
    SectionStyle: {
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
      //borderWidth: 1.5,
    },
    /* Style for the 'Next Button' */
    nextButton: {     
      height: 40,
      marginTop: 20,
      marginLeft: '60%',
      marginRight: '50%',
      margin: 10, 
      justifyContent: 'flex-end',
      width: '30%'
    },
    /* Style for the 'TextInputs' */
    inputStyle: {
      flex: 1,
      color: 'black',
      paddingLeft: 15,
      paddingRight: 15,
      //borderWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#dadae8',
    },
    mainGround: {
        backgroundColor: "#fff",
    },
  });

export default SignUpScreen;