/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CredibilityStat {
  id: string;
  value: string;
  label: string;
  subtext: string;
}

export interface NeedCard {
  id: string;
  title: string;
  description: string;
}

export interface FrameworkLevel {
  id: string;
  levelNum: number;
  title: string;
  focus: string;
}

export interface StakeholderBenefit {
  title: string;
  benefits: string[];
}

export interface CollaborationModel {
  id: 'excel' | 'combined' | 'intense';
  name: string;
  tagline: string;
  description: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  designation: string;
  school: string;
  image?: string;
}

export interface AppointmentRequest {
  id: string;
  schoolName: string;
  city: string;
  board: string;
  studentStrength: string;
  gradesInterested: string;
  contactPerson: string;
  designation: string;
  mobile: string;
  email: string;
  preferredDate: string;
  message?: string;
  createdAt: string;
}
