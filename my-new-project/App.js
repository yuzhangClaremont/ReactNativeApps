import React, {useState} from 'react';
// {useState} hooks https://reactjs.org/docs/hooks-intro.html
// components 
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  // functional component return JS.x code
  // [curState, function to set state]  useState( default state )
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title = "change text" onPress={()=>setOutputText('the text changed')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
