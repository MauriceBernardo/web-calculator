import { mount } from '@vue/test-utils'
import operationButton from '@/components/calculator/Operationbutton.vue'
import baseButton from '@/components/calculator/Basebutton.vue'

describe('Operationbutton.vue', () => {
  it('Should put out right symbol based on the props', () => {
    const wrapper = mount(operationButton,{
        propsData: {
            symbol: '='
        }
    })
    const button = wrapper.find('button')
    expect(button.text()).toEqual('=')
    wrapper.setProps({symbol:'+'})
    expect(button.text()).toEqual('+')
  })

  describe('Action when clicked event triggered', () => {
        it('Should emit the operationHandled event',() => {
            const wrapper = mount(operationButton,{
                propsData: {
                    calcData: {
                        result: '0',
                        lastOperand: null,
                        storedValue: 0
                    }
                }
            })
            wrapper.find(baseButton).vm.$emit('clicked')
            expect(Object.keys(wrapper.emitted())).toEqual(['operationHandled'])
        })

        it('Should return the right calcData', () => {
            const wrapper = mount(operationButton,{
                propsData: {
                    calcData: {
                        result: '0',
                        lastOperand: null,
                        storedValue: 0
                    }
                }
            })
            wrapper.find(baseButton).vm.$emit('clicked')
            wrapper.setProps({
                calcData: {
                result: '10',
                lastOperand: '+',
                storedValue: 90
               },
               symbol: '+'
            })
            
            wrapper.find(baseButton).vm.$emit('clicked')
            expect(wrapper.emitted().operationHandled)
                .toEqual([[{"lastOperand": "", "result": "0", "storedValue": 0}]
                , [{"lastOperand": "+", "result": "0", "storedValue": 100}]])
            
        })

    })
})
