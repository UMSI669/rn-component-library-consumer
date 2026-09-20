import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import {
  ChoiceChips,
  DemoButton,
  StatusCard,
} from 'rn-component-library-demo';

const audienceOptions = [
  { label: 'UX', value: 'ux' },
  { label: 'Management', value: 'management' },
  { label: 'Engineering', value: 'engineering' },
] as const;

export default function App() {
  const [audience, setAudience] = useState('ux');
  const [lastCallback, setLastCallback] = useState(
    'No callback has fired yet.',
  );

  const handleAudienceChange = (nextAudience: string) => {
    // Teaching note: ChoiceChips reports intent; this screen owns the value.
    setAudience(nextAudience);
    setLastCallback(`ChoiceChips selected “${nextAudience}”.`);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.intro}>
            <Text style={styles.eyebrow}>DIRECT GIT DEPENDENCY</Text>
            <Text style={styles.heading}>
              The building blocks are already here.
            </Text>
            <Text style={styles.body}>
              This Expo screen imports three components from the library package.
              None of their source was copied into this app.
            </Text>
          </View>

          <StatusCard
            message="This card is rendered by the package installed from the library repository."
            status="success"
            title="Library component connected"
          />

          <View style={styles.section}>
            <ChoiceChips
              label="Which perspective are you bringing?"
              onChange={handleAudienceChange}
              options={audienceOptions}
              value={audience}
            />
            <Text style={styles.selection}>Current value: {audience}</Text>
          </View>

          <DemoButton
            label="Show the callback"
            onPress={() => setLastCallback('DemoButton onPress fired.')}
          />

          <View accessibilityLiveRegion="polite" style={styles.callbackPanel}>
            <Text style={styles.callbackLabel}>VISIBLE CALLBACK RESULT</Text>
            <Text style={styles.callbackText}>{lastCallback}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#F3F6FB',
    flex: 1,
  },
  content: {
    alignSelf: 'center',
    gap: 24,
    maxWidth: 680,
    padding: 24,
    paddingBottom: 48,
    width: '100%',
  },
  intro: {
    gap: 8,
  },
  eyebrow: {
    color: '#3157D5',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
  heading: {
    color: '#172033',
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 38,
  },
  body: {
    color: '#526078',
    fontSize: 17,
    lineHeight: 25,
  },
  section: {
    gap: 10,
  },
  selection: {
    color: '#526078',
    fontSize: 14,
  },
  callbackPanel: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CBD5E1',
    borderRadius: 12,
    borderWidth: 1,
    gap: 4,
    padding: 16,
  },
  callbackLabel: {
    color: '#526078',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  callbackText: {
    color: '#172033',
    fontSize: 16,
  },
});
