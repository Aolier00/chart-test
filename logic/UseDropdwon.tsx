import { DropdownInterface } from "@/domains/Dropdown";
import { useState } from "react";

type Props = {
  setSelectedItem: React.Dispatch<
    React.SetStateAction<DropdownInterface | null>
  >;
};

export default function useDropdownSingle({ setSelectedItem }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((prev) => !prev);

  const handleSelectItem = (item: DropdownInterface) => {
    setSelectedItem((prev) => (prev == item ? null : item));
    setOpen(false);
  };

  return { open, handleOpen, handleSelectItem, setOpen };
}
