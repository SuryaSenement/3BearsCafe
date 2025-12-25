export interface MenuItem {
  id?: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  image_url?: string;
}

export interface EventItem {
  id?: string;
  _id?: string;
  title: string;
  type: "event" | "workshop";
  category?: string;
  date?: string;
  time?: string;
  description?: string;
  image_url?: string;
  image?: string;
  ageGroup?: string;
  age?: string | number;
  capacity?: number;
  bookingLink?: string;
  price?: string | number;
  status?: 'upcoming' | 'ongoing' | 'past' | 'cancelled';
  registrations?: number;
}

