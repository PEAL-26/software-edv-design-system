import {
  ChangeEvent,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  useEffect,
  useState,
} from 'react';

type Value = string | number | readonly string[] | undefined;

interface UseRestrictedInputProps {
  type?: HTMLInputTypeAttribute | 'text' | 'number' | 'literal';
  value?: Value;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export function useRestrictedInput(
  props: UseRestrictedInputProps,
): [Value, (event: ChangeEvent<HTMLInputElement>) => void] {
  const { value, type, onChange } = props;
  const [currentValue, setCurrentValue] = useState<any>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (type === 'number' && /^-?\d*\.?\d*$/.test(inputValue)) {
      if (inputValue === '-') {
        setCurrentValue('-0');
      } else {
        setCurrentValue(inputValue);
      }
      onChange?.(event);
    } else if (type === 'literal' && /^[a-zA-Z\s]*$/.test(inputValue)) {
      setCurrentValue(inputValue);
      onChange?.(event);
    } else if (type === undefined) {
      setCurrentValue(inputValue);
      onChange?.(event);
    }
  };

  useEffect(() => {
    setCurrentValue(value || '');
  }, [value]);

  return [currentValue, handleChange];
}
