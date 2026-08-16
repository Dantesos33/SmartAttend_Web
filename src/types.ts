export type UserRole = 'student' | 'teacher' | 'admin';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface StepItem {
  stepNumber: string;
  title: string;
  description: string;
  detail: string;
}

export interface RoleDetail {
  role: UserRole;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  capabilities: string[];
}

export interface AttendanceRecord {
  id: string;
  studentName: string;
  rollNo: string;
  course: string;
  time: string;
  status: 'present' | 'absent' | 'verified';
  confidence: number;
  avatarUrl?: string;
}

export type ModalType = 'privacy' | 'manual' | 'scanner' | 'download_apk' | null;
