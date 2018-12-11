import { mount } from "@vue/test-utils";
import Clear from "@/components/calculator/Clear.vue";
import baseButton from "@/components/calculator/Basebutton.vue"

describe("Clear.vue", () => {
  it("Should put out right symbol based on the props", () => {
    const wrapper = mount(Clear);
    expect(wrapper.text()).toEqual("C");
  });

  describe("Action when clicked event triggered", () => {
    it("Should emit the clearHandled event", () => {
      const wrapper = mount(Clear, {
        propsData: {
          calcData: {
            result: "0",
            lastOperand: null,
            storedValue: 0
          }
        }
      });
      wrapper.find(baseButton).vm.$emit("clicked");
      expect(Object.keys(wrapper.emitted())).toEqual(["clearHandled"]);
    });

    it("Should return the right calcData", () => {
      const wrapper = mount(Clear, {
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
      expect(wrapper.emitted().clearHandled).toEqual([
        [{ lastOperand: null, result: "0", storedValue: 0 }],
        [{ lastOperand: null, result: "0", storedValue: 0 }]
      ]);
    });
  });
});
