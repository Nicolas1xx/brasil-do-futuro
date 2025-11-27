import React from 'react';

export interface Leader {
  name: string;
  role: string;
  image: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Proposal {
  title: string;
  description: string;
  category: string;
}