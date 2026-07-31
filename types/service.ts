export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: number;
  isAvailable: boolean;
  technicianId: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;

  category: {
    id: string;
    name: string;
    slug: string;
    icon: string | null;
  };

  technician: {
    id: string;
    bio: string;
    experience: number;
    location: string;
    averageRating: number;
    completedJobs: number;

    user: {
      id: string;
      name: string;
      profileImg: string | null;
    };
  };
}