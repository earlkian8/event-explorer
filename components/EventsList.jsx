import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Search } from 'lucide-react-native';
import { EventCard } from './EventCard';

export function EventsList({ events, onEventClick, savedEventIds, onToggleSave }) {
  if (events.length === 0) {
    return (
      <View className="items-center justify-center py-16 px-4" style={{ minHeight: 200 }}>
        <View className="w-20 h-20 bg-gray-100 rounded-full items-center justify-center mb-4">
          <Search size={40} color="#9ca3af" />
        </View>
        <Text className="text-lg font-semibold text-gray-900 mb-2">No events found</Text>
        <Text className="text-gray-500 text-center text-sm">
          Try adjusting your search or filters to discover more events
        </Text>
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="gap-4">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onCardClick={() => onEventClick(event)}
            isSaved={savedEventIds.has(event.id)}
            onToggleSave={onToggleSave ? () => onToggleSave(event.id) : undefined}
          />
        ))}
      </View>
    </ScrollView>
  );
}

