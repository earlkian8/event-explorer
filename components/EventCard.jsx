import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Bookmark, Calendar, Clock, MapPin } from 'lucide-react-native';

const categoryColors = {
  Music: 'bg-purple-100',
  Food: 'bg-orange-100',
  Sports: 'bg-blue-100',
  Art: 'bg-pink-100',
  Tech: 'bg-green-100',
  Free: 'bg-emerald-100'
};

const categoryTextColors = {
  Music: 'text-purple-700',
  Food: 'text-orange-700',
  Sports: 'text-blue-700',
  Art: 'text-pink-700',
  Tech: 'text-green-700',
  Free: 'text-emerald-700'
};

export function EventCard({ event, onCardClick, isSaved, showRemove, onRemove, onToggleSave }) {
  const handleSavePress = (e) => {
    e.stopPropagation();
    if (onToggleSave) {
      onToggleSave();
    }
  };

  return (
    <Pressable onPress={onCardClick} className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 overflow-hidden">
      <View className="relative h-40">
        <Image source={{ uri: event.image }} className="w-full h-full" resizeMode="cover" />
        <View className="absolute top-3 right-3 flex-row gap-2 items-start">
          <View className={`px-3 py-1 rounded-full ${categoryColors[event.category] || 'bg-gray-100'}`}>
            <Text className={`text-xs font-semibold ${categoryTextColors[event.category] || 'text-gray-700'}`}>
              {event.category}
            </Text>
          </View>
        </View>
        {onToggleSave && (
          <Pressable
            onPress={handleSavePress}
            className="absolute top-3 left-3 bg-white rounded-full p-2 shadow-md"
          >
            <Bookmark size={18} color={isSaved ? "#0ea5e9" : "#9ca3af"} fill={isSaved ? "#0ea5e9" : "none"} />
          </Pressable>
        )}
        {!onToggleSave && isSaved && (
          <View className="absolute top-3 left-3">
            <View className="bg-white rounded-full p-1.5 shadow-md">
              <Bookmark size={16} color="#0ea5e9" fill="#0ea5e9" />
            </View>
          </View>
        )}
      </View>

      <View className="p-4">
        <Text className="font-bold text-lg text-gray-900 mb-2" numberOfLines={2}>
          {event.title}
        </Text>

        <View className="gap-1.5">
          <View className="flex-row items-center gap-2">
            <Calendar size={16} color="#9ca3af" />
            <Text className="text-sm text-gray-600">
              {new Date(event.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </Text>
          </View>

          <View className="flex-row items-center gap-2">
            <Clock size={16} color="#9ca3af" />
            <Text className="text-sm text-gray-600">{event.time}</Text>
          </View>

          <View className="flex-row items-center gap-2">
            <MapPin size={16} color="#9ca3af" />
            <Text className="text-sm text-gray-600" numberOfLines={1}>
              {event.location}
            </Text>
          </View>
        </View>

        {event.price && (
          <View className="mt-3 pt-3 border-t border-gray-100">
            <Text className="text-sm font-semibold text-sky-600">{event.price}</Text>
          </View>
        )}

        {showRemove && onRemove && (
          <Pressable
            onPress={() => {
              onRemove();
            }}
            className="mt-3 py-2 rounded-lg bg-red-50"
          >
            <Text className="text-sm font-medium text-red-600 text-center">Remove</Text>
          </Pressable>
        )}
      </View>
    </Pressable>
  );
}

