import { Bookmark, Mail, Rocket, Search, Sparkles, Target, Users } from 'lucide-react-native';
import React from 'react';
import { Image, Linking, Pressable, ScrollView, Text, View } from 'react-native';

export function About() {
  const teamMembers = [
    {
      name: 'Earl Kian A. Bancayrin',
      role: 'Full-Stack Developer Lead',
      contribution: 'Technical architecture & implementation',
      image: require('../assets/team/earl.png')
    },
    {
      name: 'Jenson L. Canones',
      role: 'Full-Stack Developer',
      contribution: 'Frontend & backend development',
      image: require('../assets/team/jenson.png')
    },
    {
      name: 'Cydrick V. Amparan',
      role: 'Business Analyst',
      contribution: 'Business requirements & analysis',
      image: require('../assets/team/cydrick.png')
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
    Linking.openURL('mailto:earlkian8@gmail.com');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1 pb-4">
      <View className="gap-8">
        {/* Hero Section */}
        <View className="items-center">
          <View className="w-20 h-20 bg-sky-600 rounded-3xl items-center justify-center mb-4 shadow-md">
            <Sparkles size={40} color="#ffffff" />
          </View>
          <Text className="text-3xl font-bold text-gray-900 mb-2">VibeCheck</Text>
          <Text className="text-gray-500">Version 1.0</Text>
        </View>

        {/* Mission */}
        <View className="bg-sky-50 rounded-2xl p-6">
          <View className="flex-row items-start gap-3 mb-3">
            <Target size={24} color="#0ea5e9" />
            <View className="flex-1">
              <Text className="text-xl font-bold text-gray-900 mb-2">Our Mission</Text>
              <Text className="text-gray-700 leading-6">
                VibeCheck helps locals discover, explore, and bookmark nearby happenings. We believe every
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
              <View className="flex-row items-center gap-2 mb-1">
                <Search size={18} color="#0ea5e9" />
                <Text className="font-semibold text-gray-900">Discover Events</Text>
              </View>
              <Text className="text-sm text-gray-600">
                Browse local events with smart search and category filters
              </Text>
            </View>
            {/* <View className="bg-white rounded-xl p-4 border border-gray-200">
              <View className="flex-row items-center gap-2 mb-1">
                <Map size={18} color="#0ea5e9" />
                <Text className="font-semibold text-gray-900">Visualize Locations</Text>
              </View>
              <Text className="text-sm text-gray-600">See events on an interactive map to plan your route</Text>
            </View> */}
            <View className="bg-white rounded-xl p-4 border border-gray-200">
              <View className="flex-row items-center gap-2 mb-1">
                <Bookmark size={18} color="#0ea5e9" />
                <Text className="font-semibold text-gray-900">Save Favorites</Text>
              </View>
              <Text className="text-sm text-gray-600">Bookmark events you're interested in for quick access</Text>
            </View>
          </View>
        </View>

        {/* Team */}
        <View>
          <View className="flex-row items-center gap-2 mb-3">
            <Users size={24} color="#0ea5e9" />
            <Text className="text-xl font-bold text-gray-900">UniSync Team</Text>
          </View>
          <View className="gap-2.5">
            {teamMembers.map((member, index) => (
              <View key={index} className="bg-white rounded-xl p-3.5 border border-gray-200 shadow-sm">
                <View className="flex-row items-center gap-3">
                  <View className="w-16 h-16 rounded-full overflow-hidden border-2 border-sky-300 shadow-sm">
                    <Image 
                      source={member.image} 
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-bold text-gray-900 mb-0.5">{member.name}</Text>
                    <Text className="text-sm font-semibold text-sky-600 mb-1">{member.role}</Text>
                    <Text className="text-xs text-gray-600 leading-4">{member.contribution}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Future Roadmap */}
        <View>
          <View className="flex-row items-center gap-2 mb-4">
            <Rocket size={24} color="#0ea5e9" />
            <Text className="text-xl font-bold text-gray-900">Future Roadmap</Text>
          </View>
          <View className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
            {futureFeatures.map((feature, index) => (
              <View key={index} className="flex-row items-start gap-2 mb-2">
                <Text className="text-sky-600 mt-1">•</Text>
                <Text className="text-sm text-gray-700 flex-1">{feature}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Contact */}
        <View className="bg-sky-600 rounded-2xl p-6 mb-8 shadow-lg">
          <View className="flex-row items-start gap-3">
            <Mail size={24} color="#ffffff" />
            <View className="flex-1">
              <Text className="text-xl font-bold text-white mb-2">Get in Touch</Text>
              <Text className="text-sky-100 mb-3">
                Have feedback or suggestions? We'd love to hear from you!
              </Text>
              <Pressable
                onPress={handleContact}
                className="bg-white px-4 py-2 rounded-lg self-start"
              >
                <Text className="text-sky-600 font-semibold text-sm">Contact Us</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

