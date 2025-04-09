export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'volunteer' | 'donor';
}

export interface LangarMenu {
  id: string;
  date: string;
  items: string[];
  volunteers: string[];
  timeSlots: TimeSlot[];
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  maxVolunteers: number;
  currentVolunteers: number;
}

export interface ClothDonation {
  id: string;
  type: string;
  size: string;
  condition: string;
  status: 'pending' | 'approved' | 'distributed';
  donorId: string;
  requesterId?: string;
}

export interface Donation {
  id: string;
  amount: number;
  type: 'langar' | 'clothes' | 'general';
  donorId: string;
  date: string;
  transactionId: string;
  status: 'pending' | 'completed' | 'failed';
}