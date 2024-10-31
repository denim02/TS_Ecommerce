import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const store = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const retrieve = (key) => {
  const value = localStorage.getItem(key);

  return value ? JSON.parse(value) : null;
};
