import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { Handler } from "aws-lambda";
import { Dynamo } from "../../libs/dynamodb";

export const create1: Handler = async (event) => {
  var email1 = {
    email: event.body.email,
    Id: event.body.Id,
  };

  const newUser = await Dynamo.write(email1, "typescriptv1");

  if (!newUser) {
    return formatJSONResponse({ message: "Failed to create user by email" });
  }

  return formatJSONResponse({ message: newUser });
};

export const main = middyfy(create1);
