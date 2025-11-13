import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Bookmark, Trash2 } from 'lucide-react-native';
import { EventCard } from './EventCard';

export function SavedEvents({ events, onEventClick, onRemoveEvent, onRemoveAll }) {
  if (events.length === 0) {
    return (
      <View className="flex-1 items-center justify-center py-16 px-4 min-h-[60vh]">
        <View className="w-24 h-24 bg-sky-50 rounded-full items-center justify-center mb-4">
          <Bookmark size={48} color="#0ea5e9" fill="#0ea5e9" />
        </View>
        <Text className="text-xl font-bold text-gray-900 mb-2">No saved events yet</Text>
        <Text className="text-gray-500 text-center max-w-xs">
          Start exploring and bookmark your favorite events to see them here!
        </Text>
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="gap-4">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-lg font-bold text-gray-900">
            {events.length} Saved {events.length === 1 ? 'Event' : 'Events'}
          </Text>
          <Pressable
            onPress={onRemoveAll}
            className="flex-row items-center gap-2 px-4 py-2 bg-red-50 rounded-lg"
          >
            <Trash2 size={16} color="#dc2626" />
            <Text className="text-sm font-medium text-red-600">Remove All</Text>
          </Pressable>
        </View>

        <View className="gap-4">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onCardClick={() => onEventClick(event)}
              isSaved={true}
              showRemove={true}
              onRemove={() => onRemoveEvent(event.id)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

