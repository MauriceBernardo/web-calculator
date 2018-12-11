import { mount } from '@vue/test-utils'
import baseButton from '@/components/calculator/Basebutton.vue'

describe('Basebutton.vue', () => {
  it('Should put out right symbol based on the props', () => {
    const wrapper = mount(baseButton,{
        propsData: {
            symbol: '5'
        }
    })
    const button = wrapper.find('button')
    expect(button.text()).toEqual('5')
    wrapper.setProps({symbol:'2'})
    expect(button.text()).toEqual('2')
  })

  it('Should emit clicked event when it is clicked', () => {
      const wrapper = mount(baseButton)
      wrapper.trigger('click')
      expect(wrapper.emitted()).toEqual({clicked:[[]]})
  })
})
