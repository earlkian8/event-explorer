import { createContext, useContext, useState, useMemo } from 'react';
import { mockEvents } from '../data/mockEvents';

// Create context
const EventStoreContext = createContext(null);

// Provider component
export function EventStoreProvider({ children }) {
  const [savedEventIds, setSavedEventIds] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [lastViewedSavedCount, setLastViewedSavedCount] = useState(0);

  const filteredEvents = useMemo(() => {
    let filtered = mockEvents;

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(query) ||
          event.location.toLowerCase().includes(query) ||
          event.category.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (activeFilter !== 'All') {
      if (activeFilter === 'Today') {
        const today = new Date().toISOString().split('T')[0];
        filtered = filtered.filter((event) => event.date === today);
      } else if (activeFilter === 'This Week') {
        const today = new Date();
        const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        filtered = filtered.filter((event) => {
          const eventDate = new Date(event.date);
          return eventDate >= today && eventDate <= weekFromNow;
        });
      } else {
        filtered = filtered.filter((event) => event.category === activeFilter);
      }
    }

    return filtered;
  }, [searchQuery, activeFilter]);

  const savedEvents = useMemo(() => {
    return mockEvents.filter((event) => savedEventIds.has(event.id));
  }, [savedEventIds]);

  // Calculate unread count (new saved events since last view)
  const unreadSavedCount = useMemo(() => {
    const currentCount = savedEvents.length;
    return Math.max(0, currentCount - lastViewedSavedCount);
  }, [savedEvents.length, lastViewedSavedCount]);

  const toggleSaveEvent = (eventId) => {
    setSavedEventIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  const removeAllSaved = () => {
    setSavedEventIds(new Set());
    setLastViewedSavedCount(0);
  };

  const markSavedAsRead = () => {
    setLastViewedSavedCount(savedEvents.length);
  };

  const isEventSaved = (eventId) => savedEventIds.has(eventId);

  const value = {
    allEvents: mockEvents,
    filteredEvents,
    savedEvents,
    searchQuery,
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    toggleSaveEvent,
    removeAllSaved,
    isEventSaved,
    unreadSavedCount,
    markSavedAsRead
  };

  return <EventStoreContext.Provider value={value}>{children}</EventStoreContext.Provider>;
}

// Hook to use the store
export function useEventStore() {
  const context = useContext(EventStoreContext);
  if (!context) {
    throw new Error('useEventStore must be used within EventStoreProvider');
  }
  return context;
}
