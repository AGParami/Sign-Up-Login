import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import Navigator from './app/routes/LoginStack';
import { useEffect } from 'react';

export default function App() {
  const[isLoading, setisLoading] = React.useState(true);
  const[userToken, setUserToken] = React.useState(null);
  
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1000);    
  }, []);

  if(isLoading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="#808080"/>
      </View>
    );
  };
  return (<Navigator/>);
  
  //<LoginScreen/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
