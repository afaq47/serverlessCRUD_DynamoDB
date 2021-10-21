import schema from "./schema";
import { handlerPath } from "@libs/handlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "put",
        path: "update",
        request: {
          schema: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
