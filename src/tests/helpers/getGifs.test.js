import React from "react";
import "@testing-library/jest-dom";
import { getGifs } from "../../helpers/getGifs";
describe("Prueba gif Fetch", () => {
  test("Debe traer 10 elementos", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBe(10);
  });
  test("Debe traer 10 elementos", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
