import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [pace, setPace] = useState(10);
  const [updates, setUpdates] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate a new pace reading every 10 seconds.
      setPace(previous => previous + 0.1);
      setUpdates(previous => previous + 1);
    }, 10000);

    // Stop the timer when the screen closes.
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marathon Pace Tracker</Text>

      <Text style={styles.label}>Current Pace</Text>
      <Text style={styles.pace}>
        {pace.toFixed(2)} min/mile
      </Text>

      <Text style={styles.info}>
        Updates every 10 seconds
      </Text>

      <Text style={styles.info}>
        Updates received: {updates}
      </Text>

      <Text style={styles.demo}>
        Demo mode: simulated pace data
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  label: {
    fontSize: 18,
    color: '#555',
  },
  pace: {
    fontSize: 38,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  info: {
    fontSize: 16,
    marginTop: 10,
  },
  demo: {
    fontSize: 14,
    color: '#777',
    marginTop: 30,
  },
});
