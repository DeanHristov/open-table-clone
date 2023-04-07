import { c as RequestHandler } from "msw/lib/glossary-de6278a9";
import {
  graphql,
  GraphQLContext,
  GraphQLRequest,
  GraphQLVariables,
  ResponseComposition,
} from "msw";

export const menuHandlers: Array<RequestHandler> = [
  graphql.query(
    "doSomething",
    (
      req: GraphQLRequest<GraphQLVariables>,
      res: ResponseComposition<any>,
      ctx: GraphQLContext<any>
    ) => {
      return res(
        ctx.delay(2000),
        ctx.data({
          msg: "It is ok...",
        })
      );
    }
  ),
];
