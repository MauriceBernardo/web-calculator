import { mount } from "@vue/test-utils";
import Back from "@/components/calculator/Back.vue";
import baseButton from "@/components/calculator/Basebutton.vue"

describe("Back.vue", () => {
  it("Should put out right symbol based on the props", () => {
    const wrapper = mount(Back);
    expect(wrapper.text()).toEqual("<-");
  });

  describe("Action when clicked event triggered", () => {
    it("Should emit the backHandled event", () => {
      const wrapper = mount(Back, {
        propsData: {
          calcData: {
            result: "0",
            lastOperand: null,
            storedValue: 0
          }
        }
      });
      wrapper.find(baseButton).vm.$emit("clicked");
      expect(Object.keys(wrapper.emitted())).toEqual(["backHandled"]);
    });

    it("Should return the right calcData", () => {
      const wrapper = mount(Back, {
        propsData: {
          calcData: {
            result: "0",
            lastOperand: null,
            storedValue: 0
          }
        }
      });
      wrapper.find(baseButton).vm.$emit("clicked");
      wrapper.setProps({
        calcData: {
          result: "10",
          lastOperand: "+",
          storedValue: 90
        }
      });

      wrapper.find(baseButton).vm.$emit("clicked");
      expect(wrapper.emitted().backHandled).toEqual([
        [{ lastOperand: null, result: "0", storedValue: 0 }],
        [{ lastOperand: "+", result: "1", storedValue: 90 }]
      ]);
    });
  });
});
