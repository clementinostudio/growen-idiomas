import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  icon: React.ComponentType<any>;
  shortDescription: string;
  howItWorks: string[];
  whenToUse: string[];
  practicalExamples: string[];
  exercises: string[];
  note?: string;
}

export interface Benefit {
  id: number;
  text: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}