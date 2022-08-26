import { useEffect, useState } from "react";

export const useToggleModal = (
  defaultValue: boolean,
  defaultClose: () => void
) => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setTimeout(() => {
      defaultClose();
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 300);
  }, [defaultValue]);

  return { open, close };
};
