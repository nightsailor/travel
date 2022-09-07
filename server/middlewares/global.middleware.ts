import { NextApiHandler } from "next";
import { HandlerWithResponse, withErrorAndResponse } from "./response.middleware";

/**
 * Adds all the global middlewares to the handler
 * @param handler Handler function
 * @returns Composed handler function
 */
export function withGlobalMiddleware(handler: HandlerWithResponse): NextApiHandler {
  return (req, res) => {
    return withErrorAndResponse(handler)(req, res);
  };
}