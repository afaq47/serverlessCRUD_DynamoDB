import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { Dynamo } from "../../libs/dynamodb";
import schema from "./schema";

const getalldata: ValidatedEventAPIGatewayProxyEvent<typeof schema> =
  async () => {
    const user = await Dynamo.getalldata("typescriptv1");

    if (!user) {
      return formatJSONResponse({ message: "Failed to get user by email" });
    }

    return formatJSONResponse({ message: user });
  };

export const main = middyfy(getalldata);
