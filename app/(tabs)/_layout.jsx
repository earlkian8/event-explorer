import { Tabs } from 'expo-router';
import { Bookmark, Calendar, Info } from 'lucide-react-native';
import { useEventStore } from '../../hooks/useEventStore';

export default function TabLayout() {
  const { unreadSavedCount } = useEventStore();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#9333ea',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Events',
          tabBarIcon: ({ color, size }) => <Calendar size={size} color={color} />,
          tabBarBadge: undefined
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon: ({ color, size }) => <Bookmark size={size} color={color} />,
          tabBarBadge: unreadSavedCount > 0 ? unreadSavedCount : undefined
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, size }) => <Info size={size} color={color} />
        }}
      />
    </Tabs>
  );
}

