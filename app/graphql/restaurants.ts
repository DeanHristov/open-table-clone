import { gql } from "graphql-request";

export interface IRestaurant {
  id: string;
  location_id: string;
  cuisine_id: string;
  name: string;
  main_image: string;
  price: string;
  description: string;
  images: string[];
  slug: string[];
  open_time: Date;
  close_time: Date;
}

export const GET_RESTAURANTS = gql``;
