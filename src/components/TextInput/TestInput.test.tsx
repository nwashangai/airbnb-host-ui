// react libraries
import * as React from 'react';

// third-party libraries
import { mount } from 'enzyme';

// components
import InputBox from './';

describe('The InputBox component', () => {
  it('sets placeholder of input box to the placeholder props passed in', () => {
    const props = {
      onChange: jest.fn(),
      placeholder: 'Apple TV'
    };

    const wrapper = mount(<InputBox {...props} />);
    expect(wrapper.find('input').props().placeholder).toBe(props.placeholder);
  });

  it('calls onChange prop when input value changes', () => {
    const props = {
      draggable: true,
      onChange: jest.fn()
    };

    const wrapper = mount(<InputBox {...props} />);
    wrapper.find('input').simulate('change');
    expect(props.onChange).toHaveBeenCalled();
  });

  it('sets value of input to the value prop if passed in', () => {
    const props = {
      draggable: true,
      value: 'INPUT_DEFAULT_VALUE',
      onChange: jest.fn()
    };
    const wrapper = mount(<InputBox {...props} />);
    expect(wrapper.find('input').props().value).toBe(props.value);
  });

  it('renders a textarea if `textarea` prop is true', () => {
    const props = {
      textarea: true,
      onChange: jest.fn()
    };

    const wrapper = mount(<InputBox {...props} />);
    expect(wrapper.find('textarea').length).toBe(1);
  });

  it('sets name, value, placeholder and onChange to textarea if passed in', () => {
    const props = {
      value: 'INPUT_DEFAULT_VALUE',
      onChange: jest.fn(),
      textarea: true,
      name: 'test-textarea'
    };

    const wrapper = mount(<InputBox {...props} />);
    const textareaProps = wrapper.find('textarea').props();
    expect(textareaProps.value).toBe(props.value);
    expect(textareaProps.onChange).toBe(props.onChange);
    expect(textareaProps.name).toBe(props.name);
  });
});
