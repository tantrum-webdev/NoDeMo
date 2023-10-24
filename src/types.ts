export interface User {
  name: string;
  id: string;
}

export type Maybe<T> = T | null;

export interface UserForm {
  name: string;
  password: string;
}

export interface Bookmark {
  cover: string;
  title: string;
  url: string;
  date: number;
  id: string;
}
