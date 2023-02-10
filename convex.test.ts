import { expect, test } from "@jest/globals";
import { ConvexHttpClient } from "convex/browser";

const url = "https://doesnt-matter.convex.cloud";

test("basic get and set", async () => {
  const client = new ConvexHttpClient(url);
  const workflowId = await client.mutation("createSomething")({
    displayName: "Test",
  });
  const workflow = await client.query("getSomething")({ id: workflowId });
  expect(workflowId.equals(workflow._id)).toBe(true);
  expect(workflow.displayName).toEqual("Test");
});
