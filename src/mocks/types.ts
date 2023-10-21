export interface UserFormRequest {
  name: string;
  password: string;
}

export interface StoredUser {
  name: string;
  password: string;
  userName: string;
  id: string;
}
