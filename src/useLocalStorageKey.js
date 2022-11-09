import { useEffect, useState } from 'react';
import { localStorageService } from './LocalStorageService';

export const useLocalStorageKey = (key) => {
  const [value, setValue] = useState(localStorageService.getItem(key));

  useEffect(() => {
    const onUpdate = (newValue) => {
      setValue(newValue);
    };

    return localStorageService.subscribe(key, onUpdate);
  }, [key]);

  const setLocalStorageValue = (value) => {
    localStorageService.setItem(key, value);
  };

  return [value, setLocalStorageValue];
};
