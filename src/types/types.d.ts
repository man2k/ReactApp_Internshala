export interface UserData {
  name: string;
  phoneNumber: string;
  email: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
