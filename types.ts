import React from 'react';

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  category: 'Service' | 'Community' | 'Youth' | 'Outreach' | '';
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface Ministry {
  id: string;
  title: string;
  description: string;
  details?: string; // Extended description for the ministries page
  iconName: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon: React.ComponentType<{ className?: string; size?: number | string; strokeWidth?: number }>;
}

export interface DailyVerse {
  id: string;
  date: string; // Format: YYYY-MM-DD
  text: string;
  reference: string;
}