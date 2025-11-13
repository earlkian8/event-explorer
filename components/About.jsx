import React from 'react';
import { Linking, Pressable, ScrollView, Text, View } from 'react-native';
import { Mail, Rocket, Target, Users } from 'lucide-react-native';

export function About() {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Product Lead',
      contribution: 'Product vision & user research'
    },
    {
      name: 'Marcus Johnson',
      role: 'Lead Developer',
      contribution: 'Technical architecture & implementation'
    },
    {
      name: 'Priya Patel',
      role: 'UX Designer',
      contribution: 'Interface design & user flows'
    },
    {
      name: 'Alex Rivera',
      role: 'Backend Engineer',
      contribution: 'API development & data management'
    },
    {
      name: 'Emma Williams',
      role: 'QA Lead',
      contribution: 'Testing & quality assurance'
    },
    {
      name: 'Jordan Lee',
      role: 'Marketing',
      contribution: 'Go-to-market strategy & content'
    }
  ];

  const futureFeatures = [
    'Personalized event recommendations',
    'Social sharing and friend invites',
    'Calendar integration',
    'In-app ticket purchasing',
    'Event check-in and reviews',
    'Push notifications for saved events'
  ];

  const handleContact = () => {
    Linking.openURL('mailto:team@eventexplorer.app');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1 pb-4">
      <View className="gap-8">
        {/* Hero Section */}
        <View className="items-center">
          <View className="w-20 h-20 bg-purple-600 rounded-3xl items-center justify-center mb-4">
            <Text className="text-4xl">🎉</Text>
          </View>
          <Text className="text-3xl font-bold text-gray-900 mb-2">Event Explorer</Text>
          <Text className="text-gray-500">Version 1.0</Text>
        </View>

        {/* Mission */}
        <View className="bg-purple-50 rounded-2xl p-6">
          <View className="flex-row items-start gap-3 mb-3">
            <Target size={24} color="#9333ea" />
            <View className="flex-1">
              <Text className="text-xl font-bold text-gray-900 mb-2">Our Mission</Text>
              <Text className="text-gray-700 leading-6">
                Event Explorer helps locals discover, explore, and bookmark nearby happenings. We believe every
                community has amazing events worth experiencing, and we're here to make finding them effortless and
                exciting.
              </Text>
            </View>
          </View>
        </View>

        {/* What We Do */}
        <View>
          <Text className="text-xl font-bold text-gray-900 mb-4">What We Do</Text>
          <View className="gap-3">
            <View className="bg-white rounded-xl p-4 border border-gray-200">
              <Text className="font-semibold text-gray-900 mb-1">🔍 Discover Events</Text>
              <Text className="text-sm text-gray-600">
                Browse local events with smart search and category filters
              </Text>
            </View>
            <View className="bg-white rounded-xl p-4 border border-gray-200">
              <Text className="font-semibold text-gray-900 mb-1">🗺️ Visualize Locations</Text>
              <Text className="text-sm text-gray-600">See events on an interactive map to plan your route</Text>
            </View>
            <View className="bg-white rounded-xl p-4 border border-gray-200">
              <Text className="font-semibold text-gray-900 mb-1">📌 Save Favorites</Text>
              <Text className="text-sm text-gray-600">Bookmark events you're interested in for quick access</Text>
            </View>
          </View>
        </View>

        {/* Team */}
        <View>
          <View className="flex-row items-center gap-2 mb-4">
            <Users size={24} color="#9333ea" />
            <Text className="text-xl font-bold text-gray-900">Group 6 Team</Text>
          </View>
          <View className="gap-3">
            {teamMembers.map((member, index) => (
              <View key={index} className="bg-white rounded-xl p-4 border border-gray-200">
                <View className="flex-row items-start gap-3">
                  <View className="w-10 h-10 bg-purple-400 rounded-full items-center justify-center">
                    <Text className="text-white font-bold">{member.name.charAt(0)}</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="font-semibold text-gray-900">{member.name}</Text>
                    <Text className="text-sm text-purple-600 mb-1">{member.role}</Text>
                    <Text className="text-sm text-gray-600">{member.contribution}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Future Roadmap */}
        <View>
          <View className="flex-row items-center gap-2 mb-4">
            <Rocket size={24} color="#9333ea" />
            <Text className="text-xl font-bold text-gray-900">Future Roadmap</Text>
          </View>
          <View className="bg-white rounded-xl p-4 border border-gray-200">
            {futureFeatures.map((feature, index) => (
              <View key={index} className="flex-row items-start gap-2 mb-2">
                <Text className="text-purple-600 mt-1">•</Text>
                <Text className="text-sm text-gray-700 flex-1">{feature}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Contact */}
        <View className="bg-purple-600 rounded-2xl p-6 mb-8">
          <View className="flex-row items-start gap-3">
            <Mail size={24} color="#ffffff" />
            <View className="flex-1">
              <Text className="text-xl font-bold text-white mb-2">Get in Touch</Text>
              <Text className="text-purple-100 mb-3">
                Have feedback or suggestions? We'd love to hear from you!
              </Text>
              <Pressable
                onPress={handleContact}
                className="bg-white px-4 py-2 rounded-lg self-start"
              >
                <Text className="text-purple-600 font-semibold text-sm">Contact Us</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

