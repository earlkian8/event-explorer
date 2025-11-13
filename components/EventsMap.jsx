import React, { useEffect, useRef } from 'react';
import { Text, View } from 'react-native';

let MapView, Marker;
try {
  const maps = require('react-native-maps');
  MapView = maps.default;
  Marker = maps.Marker;
} catch (error) {
  console.warn('react-native-maps not available:', error);
}

export function EventsMap({ events, onEventClick }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && events.length > 0 && MapView) {
      const coordinates = events.map((event) => ({
        latitude: event.coordinates.lat,
        longitude: event.coordinates.lng
      }));

      mapRef.current.fitToCoordinates(coordinates, {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: true
      });
    }
  }, [events]);

  if (events.length === 0) {
    return (
      <View className="items-center justify-center bg-white bg-opacity-90 rounded-2xl" style={{ minHeight: 300 }}>
        <View className="items-center px-4">
          <View className="w-16 h-16 bg-gray-100 rounded-full items-center justify-center mb-3">
            <Text className="text-3xl">📍</Text>
          </View>
          <Text className="text-lg font-semibold text-gray-900 mb-2">No events to display</Text>
          <Text className="text-gray-500 text-sm text-center">
            Try adjusting your filters to see events on the map
          </Text>
        </View>
      </View>
    );
  }

  // If MapView is not available, show a placeholder
  if (!MapView || !Marker) {
    return (
      <View className="items-center justify-center bg-white bg-opacity-90 rounded-2xl" style={{ minHeight: 300 }}>
        <View className="items-center px-4">
          <View className="w-16 h-16 bg-gray-100 rounded-full items-center justify-center mb-3">
            <Text className="text-3xl">🗺️</Text>
          </View>
          <Text className="text-lg font-semibold text-gray-900 mb-2">Map View</Text>
          <Text className="text-gray-500 text-sm text-center">
            {events.length} event{events.length !== 1 ? 's' : ''} found
          </Text>
          <Text className="text-gray-400 text-xs text-center mt-2">
            Map requires native build. Run: npx expo prebuild
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 rounded-2xl overflow-hidden">
      <MapView
        ref={mapRef}
        className="w-full h-full"
        initialRegion={{
          latitude: 40.7589,
          longitude: -73.9851,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {events.map((event) => (
          <Marker
            key={event.id}
            coordinate={{
              latitude: event.coordinates.lat,
              longitude: event.coordinates.lng
            }}
            title={event.title}
            description={event.location}
            onPress={() => onEventClick(event)}
          />
        ))}
      </MapView>
    </View>
  );
}

