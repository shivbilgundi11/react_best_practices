export const useLocalStorage = (key: string) => {
  const setItem = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      alert(error);
    }
  };

  const getItem = () => {
    try {
      const item = window.localStorage.getItem(key);

      if (item) {
        return item ? JSON.parse(item) : undefined;
      }
    } catch (error) {
      alert(error);
    }
  };

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      alert(error);
    }
  };

  return { setItem, getItem, removeItem };
};
