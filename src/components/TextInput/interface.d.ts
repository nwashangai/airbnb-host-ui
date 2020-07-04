export interface TextInputProps {
  type?: string;
  id?: string;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  onBlurCallback?: (event: any) => void;
  classes?: string;
  isValid?: boolean | null;
  label?: string;
  labelClasses?: string;
  textarea?: boolean;
  feedback?: any;
  isDisabled?: boolean;
  value?: string;
  placeholder?: string;
  isCircular?: boolean;
  props?: any;
}
