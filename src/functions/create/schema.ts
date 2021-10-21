export default {
  type: "object",
  properties: {
    email: { type: "string" },
    Id: { type: "string" },
  },
  required: ["email", "Id"],
} as const;
