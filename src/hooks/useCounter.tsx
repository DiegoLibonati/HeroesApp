import { useState } from "react";
import { UseCounter } from "../entities/entities";

export const useCounter = (initialValue: number = 0): UseCounter => {
  const [counter, setCounter] = useState<number>(initialValue);

  const increment = (value: number = 1): void => {
    setCounter(counter + value);
  };

  const decrement = (value: number = 1): void => {
    setCounter(counter - value);
  };

  const reset = (): void => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
    setCounter,
  };
};
