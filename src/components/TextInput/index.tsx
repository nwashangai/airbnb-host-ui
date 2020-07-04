// react libraries
import * as React from 'react';

// Utilities
import classNameFormatter from 'utilities/classNameFormatter';

// Interface
import { TextInputProps } from './interface';

// Styles
import './TextInput.scss';

export default ({
  type = 'text',
  id,
  isValid,
  label,
  labelClasses,
  textarea = false,
  isDisabled = false,
  value = '',
  feedback = '',
  placeholder = '',
  onChange,
  onBlurCallback,
  isCircular,
  ...props
}: TextInputProps) => {
  const classes = classNameFormatter(
    {
      'is-valid': isValid === true,
      'is-invalid': isValid === false
    },
    `text-input-theme`
  );
  const inputClasses = classNameFormatter(
    {
      'text-input-theme__curved-border': isCircular,
      'is-valid': isValid === true,
      'is-invalid': isValid === false
    },
    `text-input-theme__form-control`
  );

  return (
    <div className={classes}>
      {!textarea ? (
        <input
          type={type}
          id={id}
          className={inputClasses}
          disabled={isDisabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
      ) : (
        <textarea
          className={inputClasses}
          id={id}
          disabled={isDisabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
      )}
    </div>
  );
};
