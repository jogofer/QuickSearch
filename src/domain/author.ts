export interface Author {
    id: string;
    name: string;
    alternateNames?: string[];
    birthDate?: string;
    topWork?: string;
    workCount: number;
    imageUrl?: string;
  }