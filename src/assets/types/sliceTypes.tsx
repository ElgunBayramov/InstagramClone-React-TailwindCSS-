export interface UserType {
    id:string;
    email:string;
    password:string;
    fullname:string;
    username:string;
}

export interface AuthSliceType {
  currentUser: UserType | null,
  users:UserType[]
}