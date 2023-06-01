import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Compass from './Sensor';
import Light from './Light';
import Button from './Button';
export default function App() {
  const [showComponent, setShowComponent] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 25 }}>I am bored...</Text>
      <StatusBar style="auto" />
      <Button
        label="Surprise Me!"
        show={setShowComponent}
        status={showComponent}
      />

      {showComponent && (
        <>
          <View style={{ flex: 1 / 3, alignContent: 'center', width: 300 }}>
            <Compass />
          </View>
          <View style={{ flex: 1 / 4, alignContent: 'center', width: 300 }}>
            <Light />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddffd6',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
