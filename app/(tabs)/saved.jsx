import { useFocusEffect } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { EventDetail } from '../../components/EventDetail';
import { SavedEvents } from '../../components/SavedEvents';
import { useEventStore } from '../../hooks/useEventStore';

export default function SavedScreen() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const { savedEvents, toggleSaveEvent, removeAllSaved, isEventSaved, markSavedAsRead } = useEventStore();

  // Mark saved events as read when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      markSavedAsRead();
    }, [markSavedAsRead])
  );

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseDetail = () => {
    setSelectedEvent(null);
  };

  const handleToggleSave = () => {
    if (selectedEvent) {
      toggleSaveEvent(selectedEvent.id);
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      <View className="flex-1 bg-white">
        {/* Header */}
        <View className="bg-sky-600 px-6 pt-8 pb-6 rounded-b-3xl shadow-lg">
          <Text className="text-2xl font-bold text-white mb-1">Saved Events</Text>
          <Text className="text-sm text-sky-100">Your bookmarked events</Text>
        </View>

        {/* Content Area */}
        <View className="flex-1 px-4 py-6">
          <SavedEvents
            events={savedEvents}
            onEventClick={handleEventClick}
            onRemoveEvent={toggleSaveEvent}
            onRemoveAll={removeAllSaved}
          />
        </View>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <EventDetail
            event={selectedEvent}
            isSaved={isEventSaved(selectedEvent.id)}
            onClose={handleCloseDetail}
            onToggleSave={handleToggleSave}
          />
        )}
      </View>
    </View>
  );
}

