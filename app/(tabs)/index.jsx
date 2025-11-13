import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { EventDetail } from '../../components/EventDetail';
import { EventsList } from '../../components/EventsList';
import { FilterChips } from '../../components/FilterChips';
import { SearchBar } from '../../components/SearchBar';
import { useEventStore } from '../../hooks/useEventStore';

export default function EventsScreen() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const {
    filteredEvents,
    savedEvents,
    searchQuery,
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    toggleSaveEvent,
    isEventSaved
  } = useEventStore();

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
        {/* Header with Gradient */}
        <View className="bg-purple-600 px-6 pt-8 pb-6 rounded-b-3xl">
          <Text className="text-2xl font-bold text-white mb-1">Event Explorer</Text>
          <Text className="text-sm text-purple-100">Discover amazing local events</Text>
        </View>

        {/* Content Area */}
        <View className="flex-1 px-4 py-6">
          <View className="flex-1 gap-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search events..." />
            <FilterChips activeFilter={activeFilter} onFilterChange={setActiveFilter} />

            <EventsList
              events={filteredEvents}
              onEventClick={handleEventClick}
              savedEventIds={new Set(savedEvents.map((e) => e.id))}
              onToggleSave={toggleSaveEvent}
            />
          </View>
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

