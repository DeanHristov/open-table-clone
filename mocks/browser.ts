import {graphql, rest, setupWorker} from "msw";
import {productHandlers} from "./handlers/products";

declare global {
    interface Window {
        msw: any;
    }
}

export const worker = setupWorker(
    ...productHandlers
);

window.msw = {
    worker,
    graphql,
    rest,
};
