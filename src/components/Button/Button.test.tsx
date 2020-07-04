// react libraries
import * as React from 'react';

// third-party libraries
import { mount } from 'enzyme';

// components
import Button from './';

describe('The button component', () => {
  const TEST_ICON = 'test-icon';
  const TEST_NAME = 'test-name';
  const TEST_TYPE = 'test-type';
  const TEST_SIZE = 'test-size';
  const TEST_ISACTIVE = true;
  const TEST_CLASSES = 'preview-form';

  it('displays a button with classes "button regular hollow" when mounted with no configuration props', () => {
    const wrapper = mount(<Button name={TEST_NAME} />);
    const button = wrapper.find('button');

    expect(button).toMatchSnapshot();
    expect(button.props().className).toBe('button regular hollow');
  });

  it('displays an image if the icon prop is passed', () => {
    const wrapper = mount(<Button name="test-name" icon={TEST_ICON} />);
    const img = wrapper.find('img');

    expect(wrapper).toMatchSnapshot();
    expect(img.props().src).toBe(TEST_ICON);
  });

  it('overwrites type and size props when values are provided', () => {
    const wrapper = mount(
      <Button
        name={TEST_NAME}
        type={TEST_TYPE}
        size={TEST_SIZE}
        icon={TEST_ICON}
      />
    );
    const button = wrapper.find('button');

    expect(wrapper).toMatchSnapshot();
    expect(button.props().className).toBe(`button ${TEST_SIZE} ${TEST_TYPE}`);
  });

  it('adds an active class to the button when isActive props is passed', () => {
    const wrapper = mount(<Button name={TEST_NAME} isActive={TEST_ISACTIVE} />);
    const button = wrapper.find('button');

    expect(wrapper).toMatchSnapshot();
    expect(button.props().className).toBe(`button active regular hollow`);
  });

  it('spreads additional props passed into the component down into the button element', () => {
    const wrapper = mount(
      <Button disabled name={TEST_NAME} isActive={TEST_ISACTIVE} />
    );
    const button = wrapper.find('button');

    expect(button.props().disabled).toBe(true);
  });

  it('adds the additional classes passed into the button', () => {
    const wrapper = mount(<Button name={TEST_NAME} classes={TEST_CLASSES} />);
    expect(wrapper.find('button').props().className).toMatch(TEST_CLASSES);
  });

  it('displays the image tag to the right if the alignImageRight prop is passed as false', () => {
    const wrapper = mount(
      <Button
        name={TEST_NAME}
        icon="images/fake.svg"
        alignImageRight={false}
        classes={TEST_CLASSES}
      />
    );
    expect(wrapper.find('button').html()).toMatch(
      `<img src="images/fake.svg" alt=""> test-name`
    );
  });

  it('displays the image tag to the left if the alignImageRight prop is not passed', () => {
    const wrapper = mount(<Button name={TEST_NAME} classes={TEST_CLASSES} />);
    expect(wrapper.find('button').html()).toMatch(`test-name`);
  });

  it('should not display spinner when isLoading is false', () => {
    const wrapper = mount(<Button name={TEST_NAME} icon={TEST_ICON} />);
    expect(wrapper.find('Spinner')).toHaveLength(0);
  });

  it('displays spinner when isLoading is true', () => {
    const wrapper = mount(
      <Button name={TEST_NAME} icon={TEST_ICON} isLoading={true} />
    );
    expect(wrapper.find('.spinner')).toHaveLength(1);
  });

  it('displays the image tag to the left if the alignImageRight prop is passed as true', () => {
    const wrapper = mount(
      <Button
        name="export"
        icon="icon.svg"
        alignImageRight={true}
        classes={TEST_CLASSES}
      />
    );

    expect(wrapper.find('button').html()).toMatch(
      `<button name="export" icon="icon.svg" type="button" class="button regular hollow preview-form">export <img src="icon.svg" alt=""></button>`
    );
  });
});
