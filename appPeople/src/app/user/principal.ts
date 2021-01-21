import { User } from "./user";

export interface Principal extends User{
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}
