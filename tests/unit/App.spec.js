import Vue from "vue";
import App from "@/App";
import { shallowMount } from "@vue/test-utils";

describe("App", () => {
  it("should render correct contents", () => {
    let wrapper = shallowMount(App);
    expect(wrapper.find(".title").text()).toBe("todos");
    expect(wrapper.find(".new-todo").element.placeholder).toBe(
      "What needs to be done?"
    );
  });
  it("should set correct default data", () => {
    let wrapper = shallowMount(App);
    expect(wrapper.vm.todos).toEqual([]);
    expect(wrapper.vm.newTodo).toEqual("");
  });
});
