import React from "react";
import { render, screen } from "@testing-library/react";
import { DomQuery } from "../components/DomQuery";

describe("tests for 《4 | DOM查询(上)：页面元素的渲染和行为查询》 & 《5 | DOM查询(下)：页面元素的参照物查询和优先级》", () => {
    test("get & query & find", () => {
        render(<DomQuery />);
        const getElement = screen.getByText("test1");
        const getAllElement = screen.getAllByText(/test/i);
        const queryElement = screen.queryByText("test3");
        const queryAllElement = screen.queryAllByText("test3");
        debugger;
    });
  });