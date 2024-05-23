import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarFontAwesomeIcon } from '@/components/navigation/TabBarFontAwesomeIcon';
import { TabBarMaterialCommunityIcon } from '@/components/navigation/TabBarMaterialCommunityIcon';
import { Colors } from '@/constants/Colors';
import { TabBarStyles } from '@/components/navigation/TabBarStyle';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.icon.primary,
        tabBarInactiveTintColor: Colors.icon.secondary,
        tabBarStyle: TabBarStyles.background,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarFontAwesomeIcon name={'home'} color={focused ? Colors.icon.primary : Colors.icon.secondary} />
          ),
          tabBarLabelStyle: TabBarStyles.label
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Restaurants',
          tabBarIcon: ({ color, focused }) => (
            <TabBarMaterialCommunityIcon name={'silverware-fork-knife'} color={focused ? Colors.icon.primary : Colors.icon.secondary} />
          ),
          tabBarLabelStyle: TabBarStyles.label
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <TabBarFontAwesomeIcon name={'search'} color={focused ? Colors.icon.primary : Colors.icon.secondary} />
          ),
          tabBarLabelStyle: TabBarStyles.label
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarFontAwesomeIcon name={'user-circle'} color={focused ? Colors.icon.primary : Colors.icon.secondary} />
          ),
          tabBarLabelStyle: TabBarStyles.label
        }}
      />
    </Tabs>
  );
}
