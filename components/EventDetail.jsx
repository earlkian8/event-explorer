import { Bookmark, Calendar, Clock, MapPin, X } from 'lucide-react-native';
import React from 'react';
import { Image, Modal, Pressable, ScrollView, Text, View } from 'react-native';

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

export function EventDetail({ event, isSaved, onClose, onToggleSave }) {
  return (
    <Modal visible={true} transparent animationType="slide" onRequestClose={onClose}>
      <View className="flex-1 bg-black/50 justify-end">
        <View className="bg-white rounded-t-3xl max-h-[90%] flex-1">
          {/* Header Image */}
          <View className="relative h-56">
            <Image source={{ uri: event.image }} className="w-full h-full" resizeMode="cover" />
            <Pressable
              onPress={onClose}
              className="absolute top-4 right-4 bg-white rounded-full p-2"
            >
              <X size={20} color="#374151" />
            </Pressable>
            <View className="absolute top-4 left-4">
              <View className={`px-3 py-1.5 rounded-full ${categoryColors[event.category] || 'bg-gray-100'}`}>
                <Text className={`text-sm font-semibold ${categoryTextColors[event.category] || 'text-gray-700'}`}>
                  {event.category}
                </Text>
              </View>
            </View>
          </View>

          {/* Content */}
          <ScrollView className="flex-1 p-6">
            <Text className="text-2xl font-bold text-gray-900 mb-4">{event.title}</Text>

            <View className="gap-3 mb-6">
              <View className="flex-row items-start gap-3">
                <Calendar size={20} color="#0ea5e9" />
                <View className="flex-1">
                  <Text className="font-medium text-gray-900">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </Text>
                </View>
              </View>

              <View className="flex-row items-start gap-3">
                <Clock size={20} color="#0ea5e9" />
                <Text className="font-medium text-gray-900">{event.time}</Text>
              </View>

              <View className="flex-row items-start gap-3">
                <MapPin size={20} color="#0ea5e9" />
                <Text className="font-medium text-gray-900">{event.location}</Text>
              </View>
            </View>

            {event.price && (
              <View className="bg-sky-50 rounded-xl p-4 mb-6">
                <Text className="text-sm text-gray-600 mb-1">Price</Text>
                <Text className="text-xl font-bold text-sky-600">{event.price}</Text>
              </View>
            )}

            <View className="mb-6">
              <Text className="text-lg font-semibold text-gray-900 mb-2">About this event</Text>
              <Text className="text-gray-600 leading-6">{event.description}</Text>
            </View>

            {/* Map */}
            {/* <View className="rounded-xl mb-6 overflow-hidden" style={{ height: 200 }}>
              <EventsMap events={[event]} onEventClick={() => {}} />
            </View> */}
          </ScrollView>

          {/* Footer Button */}
          <View className="p-4 border-t border-gray-200">
            <Pressable
              onPress={onToggleSave}
              className={`w-full py-4 rounded-xl font-semibold items-center justify-center flex-row gap-2 ${
                isSaved ? 'bg-gray-100' : 'bg-sky-500'
              }`}
            >
              <Bookmark size={20} color={isSaved ? '#374151' : '#ffffff'} fill={isSaved ? '#374151' : '#ffffff'} />
              <Text className={isSaved ? 'text-gray-700 font-semibold' : 'text-white font-semibold'}>
                {isSaved ? 'Remove from Saved' : 'Save Event'}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

