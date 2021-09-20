import { render, screen } from "@testing-library/react";
import React from "react";
import { ChaftaCooTemplate } from "./ChaftaCooTemplate";
import { ChaftaCooSampleV2 } from "./sampleV2";
import { ChaftaCooSampleV3 } from "./sampleV3";

describe("chafta coo v2", () => {
  it("should render titles correctly", () => {
    render(<ChaftaCooTemplate document={ChaftaCooSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("CERTIFICATE OF ORIGIN")).toHaveLength(2);
  });

  it("should render a signature", () => {
    render(<ChaftaCooTemplate document={ChaftaCooSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("signature")).toBeInTheDocument();
  });
});

describe("chafta coo v3", () => {
  it("should render titles correctly", () => {
    render(<ChaftaCooTemplate document={ChaftaCooSampleV3} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("CERTIFICATE OF ORIGIN")).toHaveLength(2);
  });

  it("should render a signature", () => {
    render(<ChaftaCooTemplate document={ChaftaCooSampleV3} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("signature")).toBeInTheDocument();
  });
});
