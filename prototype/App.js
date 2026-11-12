import { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createTracker } from './runner-app/tracking';

export default function App() {
  const [pace, setPace] = useState(10);
  const [updates, setUpdates] = useState(0);

  // Live GPS tracking (#59): one tracker per run, started and stopped by the button.
  const trackerRef = useRef(null);
  const [tracking, setTracking] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function handleTrackingPress() {
    if (trackerRef.current === null) {
      trackerRef.current = createTracker(`run-${Date.now()}`);
    }
    setBusy(true);
    setError('');
    try {
      const nowTracking = await trackerRef.current.toggle();
      setTracking(nowTracking);
      if (!nowTracking) {
        trackerRef.current = null; // the next Start begins a new run
      }
    } catch (e) {
      setError(e.message);
      trackerRef.current = null;
    } finally {
      setBusy(false);
    }
  }

  // Stop sending positions if the screen closes while tracking.
  useEffect(() => () => trackerRef.current?.stop(), []);

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

      <View style={styles.trackingSection}>
        <Text style={styles.label}>Live Tracking</Text>
        <Text style={styles.info}>
          {tracking ? 'Sending your position every 5 seconds' : 'Not tracking'}
        </Text>
        <Button
          title={tracking ? 'Stop Tracking' : 'Start Tracking'}
          onPress={handleTrackingPress}
          disabled={busy}
        />
        {error !== '' && <Text style={styles.error}>{error}</Text>}
      </View>

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
  trackingSection: {
    alignItems: 'center',
    marginTop: 40,
  },
  error: {
    fontSize: 14,
    color: '#c00',
    marginTop: 10,
  },
});
