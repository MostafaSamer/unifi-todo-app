export const loadFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  if (item) return JSON.parse(item);

  return null;
};

export const addToLocalStorage = (key, obj) => {
  localStorage.setItem(key, JSON.stringify(obj));
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
