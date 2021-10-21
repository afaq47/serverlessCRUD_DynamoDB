import { create1 } from "../src/functions/create/handler";

let body = {
  body: {
    Id: "123",
    email: "abc",
  },
};
test("Enter correct body", async () => {
  expect((await create1(body, null, null)).statusCode).toBe(200);
});
