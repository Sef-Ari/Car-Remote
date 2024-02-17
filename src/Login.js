import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput  placeholder='Email'/>
      <TextInput   placeholder='Password'/>
      <Button title='login'/>
    {/* copy */}
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
