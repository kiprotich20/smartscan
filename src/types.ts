export interface StudentRecord {
  id: string;
  regNumber: string;
  name: string;
  course: string;
  department: string;
  timestamp: string;
  status: 'present' | 'late' | 'absent';
  locationVerified: boolean;
  distanceFromVenueMeters: number;
}

export interface ClassSession {
  code: string;
  title: string;
  lecturer: string;
  venue: string;
  geofenceRadiusMeters: number;
  scheduledTime: string;
  totalEnrolled: number;
  qrCodeSeed: string;
}

export interface SystemFeature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  benefits: string[];
  technicalSpecs: string[];
}
