import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas de componente GifExpertApp.js", () => {
  const title = "titulo";
  const url = "http://sdfegr";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test("Debe de mostrar componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("parra con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });
  test("Debe de tener una imagen", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
  test("Debe tener clase de animacion", () => {
    const div = wrapper.find("div");
    const clasName = div.prop("className");
    expect(clasName.includes("animate__fadeIn")).toBe(true);
  });
});
