import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// {padding: 30} is a React Native api object
export default function App() {
  return (

    <View style = { {padding:40} }>
      {/*  flexBoxDirection https://facebook.github.io/react-native/docs/flexbox */}
      <Text style = { {textAlign: "center", color: "#823DB6", fontSize: 30} }> CheckList </Text>
      <View style = {  {padding: 30, flexDirection: "row", justifyContent: "center"}  }>
        <TextInput 
          placeholder = "add checklist" 
          style = { {borderBottomWidth: 1, borderColor: "pink", width : "85%"} }/>
        <Button 
          
          title = "ADD"
          color = "pink" 
          />
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
