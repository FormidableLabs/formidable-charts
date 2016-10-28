/**
 * Client tests
 */
/*eslint-disable max-nested-callbacks */
/* eslint no-unused-expressions: 0 */

import React from "react";
import { mount } from "enzyme";
import { Standalone } from "src";

describe("components/formidable-charts", () => {
  describe("default component rendering", () => {
    it("renders an svg with the correct width and height", () => {
      const wrapper = mount(
        <Standalone/>
      );
      const svg = wrapper.find("svg");
      expect(svg.prop("style").width).to.equal("100%");
      expect(svg.prop("style").height).to.equal("auto");
    });

    it("renders an svg with the correct viewBox", () => {
      const wrapper = mount(
        <Standalone/>
      );
      const svg = wrapper.find("svg");
      const viewBoxValue =
        `0 0 ${450} ${300}`;
      expect(svg.prop("viewBox")).to.equal(viewBoxValue);
    });
  });
});
