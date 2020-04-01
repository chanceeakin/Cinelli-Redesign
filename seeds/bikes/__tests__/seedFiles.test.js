const Frames = require("../framesSeeds.js");

describe("frame seeds", () => {
  it("is an array", () => {
    expect(typeof Frames).toBe("array");
  });

  it("does not contains a key called puppers", () => {
    expect(Frames.puppers).toBe(undefined);
  });
});
