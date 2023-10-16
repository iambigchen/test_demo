import React from "react";
import axios from "axios";
import { mocked } from "jest-mock";

jest.mock("axios");

// 10 | Mock: 怎么替代不那么重要的逻辑？
describe("examples for mock", () => {
  test("a test for global mock", async () => {
    const res = "this is a test for global mock";
    mocked(axios.get).mockResolvedValue(res);
    const data = await axios.get("/");
    expect(data).toBe("this is a test for global mock");
  });
});