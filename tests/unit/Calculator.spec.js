import { shallowMount } from "@vue/test-utils";
import Calculator from "@/components/Calculator.vue";
import clear from "@/components/calculator/Clear.vue";
import back from "@/components/calculator/Back.vue";
import numberButton from "@/components/calculator/Numberbutton.vue";
import operationButton from "@/components/calculator/Operationbutton.vue";

describe("Calculator.vue", () => {
  describe("Action when event triggered", () => {
    it("Should update the calcData", () => {
      const wrapper = shallowMount(Calculator);
      const mockCalcData = {
        result: "0",
        lastOperand: null,
        storedValue: 0
      };
      const mockUpdateValue = jest.fn()
      wrapper.setMethods({updateValue : mockUpdateValue})
      wrapper.find(clear).vm.$emit("clearHandled", mockCalcData);
      expect(mockUpdateValue.mock.calls.length).toEqual(1)
      wrapper.find(operationButton).vm.$emit("operationHandled", mockCalcData);
      expect(mockUpdateValue.mock.calls.length).toEqual(2)
      wrapper.find(numberButton).vm.$emit("numberHandled", mockCalcData);
      expect(mockUpdateValue.mock.calls.length).toEqual(3)
      wrapper.find(back).vm.$emit("backHandled", mockCalcData);
      expect(mockUpdateValue.mock.calls.length).toEqual(4)
    });
  });
});
