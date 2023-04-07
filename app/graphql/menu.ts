import { gql } from "graphql-request";

export interface IMenu {
  id: string;
  restaurant_id: string;
  name: string;
  description: string;
  price: string;
}

export const GET_MENUS = gql``;
