import { setupServer, SetupServer } from "msw/node";
import { restaurantsHandlers } from "./handlers/restaurantHandlers";
import { menuHandlers } from "./handlers/menuHandlers";
import { locationHandlers } from "./handlers/locationHandlers";
import { cuisineHandlers } from "./handlers/cuisineHandlers";

export const server: SetupServer = setupServer(
  ...menuHandlers,
  ...restaurantsHandlers,
  ...locationHandlers,
  ...cuisineHandlers
);
