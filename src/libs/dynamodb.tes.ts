// import { Dynamo } from "./dynamodb";

// test("Dynamo is an object", () => {
//   expect(typeof Dynamo).toBe("object");
// });

// test("dynamo has get and write", () => {
//   expect(typeof Dynamo.get).toBe("function");
// });

// test("test dynamo get function write", () => {
//   expect(typeof Dynamo.write).toMatch("function");
// });
// const validTableName = "typescriptv1";

// const data = { Id: "54", email: "abc4" };

// test("Dynamo wirte work ", async () => {
//   try {
//     const res = await Dynamo.write(data, validTableName);
//     expect(res).toBe(data);
//     expect(res).toMatch(validTableName);
//   } catch (error) {
//     console.log("error in dynamo write test", error);
//   }
// });

// test("Dynamo get work", async () => {
//   try {
//     const res = await Dynamo.getalldata(validTableName);
//     expect(res).toMatch(validTableName);
//   } catch (error) {
//     console.log("error in dynamo get function test", error);
//   }
// });

// test("test Dynamo update work", async () => {
//   try {
//     const res = await Dynamo.update1(data, validTableName);
//     expect(res).toMatch(validTableName);
//     expect(res).toBe(data);
//   } catch (error) {
//     console.log("errorin dynamo update  function test ", error);
//   }
// });
