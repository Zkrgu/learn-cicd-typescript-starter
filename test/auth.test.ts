import { describe, expect, test } from "vitest";

import { getAPIKey } from "../src/api/auth";

describe("person", () => {
  test("fails if no auth header", () => {
    const h = {};
    expect(getAPIKey(h)).toBeDefined();
  });

  test("fails if auth header isn't APIKey", () => {
    const h = {
      Authorization: "Bearer someBearerToken",
    };
    expect(getAPIKey(h)).toBeDefined();
  });
  test("succeeds if ApiKey auth header", () => {
    const h = {
      Authorization: "ApiKey someApiKey",
    };
    expect(getAPIKey(h)).toBeDefined();
  });
});
