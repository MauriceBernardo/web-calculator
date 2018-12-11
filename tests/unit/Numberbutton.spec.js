import { mount } from "@vue/test-utils";
import numberButton from "@/components/calculator/Numberbutton.vue";
import baseButton from "@/components/calculator/Basebutton.vue";

describe("numberButton.vue", () => {
  it("Should put out right symbol based on the props", () => {
    const wrapper = mount(numberButton, {
        propsData: {
          value: 9
        }
    });
    expect(wrapper.text()).toEqual("9");
    wrapper.setProps({ value: 0 });
    expect(wrapper.text()).toEqual("0");
  });

  it("Should have the right width the same as the props", () => {
    const wrapper = mount(numberButton, {
        propsData: {
          width: 9
        }
    });
    expect(wrapper.vm.width).toEqual(9);
    wrapper.setProps({ width: 1 });
    expect(wrapper.vm.width).toEqual(1);
  });

  describe("Action when clicked event triggered", () => {
    it("Should emit the numberHandled event", () => {
      const wrapper = mount(numberButton, {
        propsData: {
          calcData: {
            result: "0",
            lastOperand: null,
            storedValue: 0
          }
        }
      });
      wrapper.find(baseButton).vm.$emit("clicked");
      expect(Object.keys(wrapper.emitted())).toEqual(["numberHandled"]);
    });

    it("Should return the right calcData", () => {
      const wrapper = mount(numberButton, {
        propsData: {
          calcData: {
            result: "0",
            lastOperand: null,
            storedValue: 0
          },
          value: 9
        }
      });
      wrapper.find(baseButton).vm.$emit("clicked");
      wrapper.setProps({
        calcData: {
          result: "10",
          lastOperand: "+",
          storedValue: 90
        },
        value: 2
      });

      wrapper.find(baseButton).vm.$emit("clicked");
      expect(wrapper.emitted().numberHandled).toEqual([
        [{ lastOperand: null, result: "9", storedValue: 0 }],
        [{ lastOperand: "+", result: "102", storedValue: 90 }]
      ]);
    });
  });
});
