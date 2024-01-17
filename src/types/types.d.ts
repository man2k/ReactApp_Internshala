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

export interface checkedToggle {
  [key: string]: boolean;
}

export interface dataStr {
  department: string;
  sub_departments: string[];
}
