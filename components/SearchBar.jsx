import React from 'react';
import { TextInput, View } from 'react-native';
import { Search } from 'lucide-react-native';

export function SearchBar({ value, onChange, placeholder = 'Search events...' }) {
  return (
    <View className="relative">
      <View className="absolute left-3 top-1/2 z-10">
        <Search size={20} color="#9ca3af" />
      </View>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 text-gray-900"
        style={{ paddingLeft: 40 }}
      />
    </View>
  );
}

