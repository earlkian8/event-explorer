import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { EventStoreProvider } from '../hooks/useEventStore';
import './../style/global.css';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1" edges={['top', 'bottom']}>
        <EventStoreProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </EventStoreProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
