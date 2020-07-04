// react libraries
import * as React from 'react';

// styles
import './Button.scss';

// component
import Spinner from 'components/Spinner';

// interfaces
import { ButtonProps } from './interfaces';

const Button = (props: ButtonProps) => {
  let {
    size,
    type,
    isActive,
    submit = false,
    isLoading = false,
    alignImageRight = true,
    disabled,
    classes,
    ...rest
  } = props;
  type = !type ? 'hollow' : type;
  size = !size ? 'regular' : size;
  isActive = isActive !== undefined ? isActive : false;

  const classNames = isActive
    ? `button active ${size} ${type}`
    : `button ${size} ${type}`;

  const renderButtonContent = (props: any) => {
    // spinner shows when isLoading is true
    if (isLoading) {
      return <Spinner />;
    }

    return alignImageRight ? (
      <React.Fragment>
        {props.name} {props.icon && <img src={props.icon} alt="" />}
      </React.Fragment>
    ) : (
      <React.Fragment>
        {props.icon && <img src={props.icon} alt="" />} {props.name}
      </React.Fragment>
    );
  };

  const classList = `${
    classes ? `${classNames} ${classes}` : `${classNames}`
  } ${disabled ? 'disabled' : ''}`.trim();

  return (
    <button
      {...rest}
      type={submit ? 'submit' : 'button'}
      id={props.id}
      disabled={disabled}
      className={classList}
      onClick={props.onClick}
    >
      {renderButtonContent(props)}
    </button>
  );
};

export default Button;
