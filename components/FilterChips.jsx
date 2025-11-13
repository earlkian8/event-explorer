import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

const filters = ['All', 'Music', 'Food', 'Sports', 'Free'];

export function FilterChips({ activeFilter, onFilterChange }) {
  return (
    <View className="pb-2" style={{ height: 44 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 16 }}>
        <View className="flex-row gap-2">
        {filters.map((filter) => (
          <Pressable
            key={filter}
            onPress={() => onFilterChange(filter)}
            className={`px-4 py-2 rounded-full ${
              activeFilter === filter
                ? 'bg-sky-500'
                : 'bg-gray-100'
            }`}
          >
            <Text
              className={`text-sm font-medium ${
                activeFilter === filter ? 'text-white' : 'text-gray-700'
              }`}
            >
              {filter}
            </Text>
          </Pressable>
        ))}
        </View>
      </ScrollView>
    </View>
  );
}

