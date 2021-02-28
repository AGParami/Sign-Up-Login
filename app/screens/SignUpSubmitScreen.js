import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, NativeEventEmitter, StyleSheet, Text,TextInput ,View , TouchableOpacity} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function SignUpSubmitScreen(props) {
  const { inputStyle } = styles;
  const { SedentaryCircle } = styles;
  const { Fitness } = styles;

    return (
        <View style={styles.mainBackground}>
     <Text style={{fontSize:30, fontWeight:'bold', left:25}}>Sign Up</Text>   
        <View style={{ flexDirection: 'row' }}>
            <TextInput style={inputStyle} 
              placeholder="Weight"                                
              keyboardType="number-pad"
              returnKeyType="next"
            />
           
           <TextInput style={inputStyle} 
              placeholder="Height"                                
              keyboardType="number-pad"
              returnKeyType="next"
            />
            
        </View>
        <View style={{ flexDirection: 'row' }}>                                  
            <TextInput style={inputStyle} 
              placeholder="Sex"                              
              keyboardType="number-pad"
              returnKeyType="next"
            />
             <TextInput style={inputStyle} 
              placeholder="Meals Per Day" 
              keyboardType="number-pad"
              returnKeyType="next"
            />             
        </View>
          
        <View style={{flexDirection: 'row'  }}>
            <TextInput style={styles.BdayBox} placeholder="Birthday"  />           
        </View>
        <Text style={{marginTop:10 , marginLeft:35,fontSize:20, fontWeight:'bold'}}  > Actvity Level </Text>
        <View style={ styles.ActTextBox}  > 
        
          <View style={{ SedentaryCircle, flexDirection: 'row', justifyContent: 'space-between' }}>         
            <View >
              <TouchableOpacity             
                  style={styles.SedentaryCircle }>
                  <Text>S</Text>                
              </TouchableOpacity>                                 
            </View>
            <Text style={ styles.Sedentary}>Sedentary</Text>     

            <View>                             
              <TouchableOpacity             
                style={styles.LeightCircle } placeholder="M" >                   
                <Text>L</Text>                         
              </TouchableOpacity>
              <Text  style={ styles.Active}>Leight Active</Text> 
            </View>
               
            <View> 
              <TouchableOpacity             
                style={styles.ModCircle}>                       
              </TouchableOpacity>
              <Text  style={ styles.Active}>Mod Active</Text>
            </View>
                
            <View> 
              <TouchableOpacity             
                style={styles.VeryCircle}>
                <Text ></Text>                         
              </TouchableOpacity>
              <Text  style={ styles.Active}>Very Active</Text> 
            </View>

            <View> 
              <TouchableOpacity            
                style={styles.HeavyCircle}>
                <Text  style={ styles.Active} >l</Text>                         
              </TouchableOpacity>
              <Text  style={ styles.Active}>Heavy Active</Text> 
            </View>          
          </View>
         
        </View>
        <Text style={{marginTop:20 , marginLeft:35,fontSize:20, fontWeight:'bold'}}>Fitness Goal</Text>
        <Text style={ styles.FitnessTextBox}> 
        
        
        <View style={{ flexDirection: 'row' }}>
        <Button style={Fitness} 
          title="Weight Gain"                               
         //keyboardType="number-pad"
         //returnKeyType="next"
         color="lightgreen"
         //paddingLeft={15}
       />
      
      <Button style={Fitness} 
       title="Weight Loss"
         placeholder=""                                
        // keyboardType="number-pad"
         //returnKeyType="next"
         color="#c0c0c0"
       />
        </View>
        </Text> 

        {/*Next Button View */}
     <View style={styles.SubmitButton}>   
      <Button
        title="Submit"
        onPress={() => Alert.alert('Submitted')}
      />
      </View>

      </View>   
    );
}

const styles = StyleSheet.create({
    inputStyle: {
      //elevation: 2,
      borderColor: '#dadae8',   
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 25,
      //left: 15,
      paddingLeft:15,
      marginRight: 35,
      margin: 10,
      borderWidth: 1.5,
      width: '35%',
        
  },
  BdayBox:{
    //elevation: 2,
    borderColor: '#dadae8',   
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 25,
    marginRight: 35,
    margin: 10,
    paddingLeft:15,
    borderWidth: 1.5,
    width: '88%',
  },
  SedentaryCircle:{
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 12,
    marginRight: 10,
    width:40,
    height: 40,
    height: 40,
    padding: 20,
    borderRadius: 40,
    backgroundColor: 'green',
    color: 'black'
  
  },
  LeightCircle:{
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
    width:40,
    height: 40,
    height: 40,
    padding: 20,
    borderRadius: 40,
    backgroundColor: 'yellow'
  },
  ModCircle:{
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
    width:40,
    height: 40,
    height: 40,
    padding: 20,
    borderRadius: 40,
    backgroundColor: 'pink'
  },
  
  VeryCircle:{
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
    width:40,
    height: 40,
    height: 40,
    padding: 20,
    borderRadius: 40,
    backgroundColor: 'purple'
  },
  
  HeavyCircle :{
      flexDirection: 'row',
      marginTop: 20,
      marginLeft: 20,
      marginRight: 10,
      width:40,
      height: 40,
      height: 40,
      padding: 20,
      borderRadius: 40,
      backgroundColor: 'orange'
    },
        
    ActTextBox:{
      //elevation: 2,  
      borderColor: '#dadae8', 
      flexDirection: 'row',
      height: 130,
      marginTop: 10,
      marginLeft: 25,
      marginRight: 35,
      margin: 10,
      borderWidth: 1.5,
      width: '88%' 
    },
  
    Sedentary:{
      marginTop:60,
      marginLeft: 10,
      //left:0,
      height:45,
      position: 'absolute',
    },
   
    Active:{
      marginTop:60,
      marginLeft: 15,
      left:8,
      height:35,
      position: 'absolute'
    },
    Fitness:{
      elevation: 2,
      borderColor: 'transparent',   
      flexDirection: 'row',
      justifyContent:'space-between',
      height: 40,
      marginTop: 50,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
      borderWidth: 1.5,
      position: 'absolute',
      width: '35%',
      //paddingLeft:15,
    },
    /* Style for the 'Next Button' */
    SubmitButton: {     
      height: 40,
      marginTop: 20,
      marginLeft: '60%',
      marginRight: '50%',
      margin: 10, 
      justifyContent: 'flex-end',
      width: '30%'
    },
    FitnessTextBox:{
      //elevation: 2,  
      borderColor: '#dadae8', 
      flexDirection: 'row',
      height: 70,
      marginTop: 10,
      marginLeft: 25,
      marginRight: 35,
      margin: 10,
      borderWidth: 1.5,
      width: '88%' 
    },
    mainBackground: {
      backgroundColor: "#fff",
    },
  });

export default SignUpSubmitScreen;