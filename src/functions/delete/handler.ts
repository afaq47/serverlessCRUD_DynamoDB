import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { Dynamo } from "../../libs/dynamodb";
import schema from "./schema";

const delete1: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  let email = event.body.email;

  const user = await Dynamo.delete(email, "typescriptv1").catch(() => {
    return null;
  });

  if (!user) {
    return formatJSONResponse({ message: "Failed to get user by email" });
  }
  return formatJSONResponse({ message: user });
};

export const main = middyfy(delete1);
