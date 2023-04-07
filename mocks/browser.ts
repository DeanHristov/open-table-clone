import { graphql, rest, setupWorker, SetupWorker } from "msw";
import { restaurantsHandlers } from "./handlers/restaurantHandlers";
import { menuHandlers } from "./handlers/menuHandlers";
import { locationHandlers } from "./handlers/locationHandlers";
import { cuisineHandlers } from "./handlers/cuisineHandlers";

declare global {
  interface Window {
    msw: any;
  }
}

export const worker: SetupWorker = setupWorker(
  ...menuHandlers,
  ...restaurantsHandlers,
  ...locationHandlers,
  ...cuisineHandlers
);

window.msw = {
  worker,
  graphql,
  rest,
};
