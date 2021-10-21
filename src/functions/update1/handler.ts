import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { Dynamo } from "../../libs/dynamodb";
import schema from "./schema";

const update11: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  var email1 = {
    email: event.body.email,
    Id: event.body.Id,
  };
  const newUser = await Dynamo.update1(email1, "typescriptv1");

  if (!newUser) {
    return formatJSONResponse({ message: "Failed to create user by email" });
  }

  return formatJSONResponse({ message: newUser });
};

export const main = middyfy(update11);
