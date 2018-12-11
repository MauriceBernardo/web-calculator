import { mount } from "@vue/test-utils";
import Result from "@/components/calculator/Result.vue";

describe("Result.vue", () => {
  it("Should put out right symbol based on the props", () => {
    const wrapper = mount(Result, {
      propsData: {
        value: "5"
      }
    });
    expect(wrapper.text()).toEqual("5");
    wrapper.setProps({ value: "2" });
    expect(wrapper.text()).toEqual("2");
  });
});
