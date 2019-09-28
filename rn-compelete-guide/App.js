import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// {padding: 30} is a React Native api object
export default function App() {
  return (

    <View >
      {/*  flexBoxDirection https://facebook.github.io/react-native/docs/flexbox */}
      <View style = {  {padding: 30, flexDirection: "row", justifyContent: "center"}  }>
        <TextInput 
          placeholder = "add checklist" 
          style = { {borderBottomWidth: 1, borderColor: "pink", width : 200} }/>
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
