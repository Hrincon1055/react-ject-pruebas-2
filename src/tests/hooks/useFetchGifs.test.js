import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";
describe("Pruebas en el hook", () => {
  test("Debe de retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    console.log("useFetchGifs.test LINE 10 =>", data);
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  test("Debe de retornar un arreglo de imagenes y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data).toBe(10);
    expect(loading).toBe(false);
  });
});
