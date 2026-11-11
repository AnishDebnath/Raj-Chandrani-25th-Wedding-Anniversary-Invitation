export interface EventData {
  eventName: string;
  coupleName: string;
  anniversary: string;
  date: string;
  day: string;
  eventTime: string;
  invitationFrom: string;
  venue: {
    name: string;
    address: string;
    landmark: string;
    googleMaps: string;
  };
  rsvp: {
    raj: string;
    chandrani: string;
  };
}

export interface TimelineEvent {
  time: string;
  title: string;
  description?: string;
  iconName: 'users' | 'mic' | 'cake' | 'utensils';
}

export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export interface RSVPResponse {
  success: boolean;
  message?: string;
  error?: string;
  rsvp?: {
    id: string;
    name: string;
    attendance: 'yes' | 'no';
    guests: number;
    submittedAt: string;
  };
}

export interface RSVPStats {
  totalResponses: number;
  totalAttending: number;
  totalDeclined: number;
  totalGuests: number;
}
