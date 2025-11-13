import React from 'react';
import { Text, View } from 'react-native';
import { About } from '../../components/About';

export default function AboutScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="flex-1 bg-white">
        {/* Header */}
        <View className="bg-sky-600 px-6 pt-8 pb-6 rounded-b-3xl shadow-lg">
          <Text className="text-2xl font-bold text-white mb-1">About</Text>
          <Text className="text-sm text-sky-100">Learn more about VibeCheck</Text>
        </View>

        {/* Content Area */}
        <View className="flex-1 px-4 py-6">
          <About />
        </View>
      </View>
    </View>
  );
}

