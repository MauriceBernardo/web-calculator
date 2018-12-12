import { shallowMount } from "@vue/test-utils";
import Calculator from "@/components/Calculator.vue";
import clear from "@/components/calculator/Clear.vue";
import back from "@/components/calculator/Back.vue";
import numberButton from "@/components/calculator/Numberbutton.vue";
import operationButton from "@/components/calculator/Operationbutton.vue";

describe("Calculator.vue", () => {
  describe("Number of buttons", () => {
    it("Should have only one clear button", () => {
      const wrapper = shallowMount(Calculator);
      const Clear = wrapper.findAll(clear);
      expect(Clear.length).toBe(1);
    });

    it("Should have only one back button", () => {
      const wrapper = shallowMount(Calculator);
      const Back = wrapper.findAll(back);
      expect(Back.length).toBe(1);
    });

    it("Should have 5 operation button", () => {
      const wrapper = shallowMount(Calculator);
      const OperationButton = wrapper.findAll(operationButton);
      expect(OperationButton.length).toBe(5);
    });

    it("Should have 10 number button", () => {
      const wrapper = shallowMount(Calculator);
      const NumberButton = wrapper.findAll(numberButton);
      expect(NumberButton.length).toBe(10);
    })
  });

  describe("Action when event triggered", () => {
    it("Should update the calcData", () => {
      const wrapper = shallowMount(Calculator);
      const mockCalcData = {
        result: "0",
        lastOperand: null,
        storedValue: 0
      };
      const mockUpdateValue = jest.fn();
      wrapper.setMethods({ updateValue: mockUpdateValue });
      wrapper.find(clear).vm.$emit("clearHandled", mockCalcData);
      expect(mockUpdateValue.mock.calls.length).toEqual(1);
      wrapper.find(operationButton).vm.$emit("operationHandled", mockCalcData);
      expect(mockUpdateValue.mock.calls.length).toEqual(2);
      wrapper.find(numberButton).vm.$emit("numberHandled", mockCalcData);
      expect(mockUpdateValue.mock.calls.length).toEqual(3);
      wrapper.find(back).vm.$emit("backHandled", mockCalcData);
      expect(mockUpdateValue.mock.calls.length).toEqual(4);
    });
  });
});
