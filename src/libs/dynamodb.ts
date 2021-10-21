const AWS = require("aws-sdk");

const documentClient = new AWS.DynamoDB.DocumentClient({
  region: "localhost",
  endpoint: "http://localhost:8000",
});

export const Dynamo = {
  async get(email, TableName) {
    const params = {
      TableName,
      Key: {
        email,
      },
    };
    const data = await documentClient.get(params).promise();
    if (!data || !data.Item) {
      throw Error(
        `There was an error fetching the data for eamil of ${email} from ${TableName}`
      );
    }
    return data.Item;
  },
  async write(data, TableName) {
    const params = {
      TableName: TableName,
      Item: {
        email: data.email,
        Id: data.Id,
      },
    };

    const res = await documentClient.put(params).promise();
    if (!res) {
      throw Error(
        `There was an error inserting eamil of ${data.email} in table ${TableName}`
      );
    }

    return data;
  },
  async update1(data, TableName) {
    const params = {
      TableName: TableName,
      Key: {
        email: data.email,
      },
      UpdateExpression: "set Id = :id",
      ExpressionAttributeValues: {
        ":id": data.Id,
      },
    };
    const res = await documentClient.update(params).promise();
    if (!res) {
      throw Error(
        `There was an error inserting eamil of ${data.email} in table ${TableName}`
      );
    }
    return data;
  },

  async delete(email, TableName) {
    const params = {
      TableName: TableName,
      Key: {
        email: email,
      },
    };

    const res = await documentClient.delete(params).promise();
    if (!res) {
      throw Error(
        `There was an error inserting ID of ${email} in table ${TableName}`
      );
    }
    return JSON.stringify({
      Message: " Value daleted",
    });
  },
  async getalldata(TableName) {
    const params = {
      TableName: TableName,
    };
    console.log(params, "123");
    const res = await documentClient.scan(params).promise();

    if (!res) {
      throw Error(`There was in table ${TableName}`);
    }
    return res;
  },
};
