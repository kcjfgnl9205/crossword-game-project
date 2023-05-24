import { create } from "zustand";

type usePartCreateModalStroe = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}


const usePartCreateModal = create<usePartCreateModalStroe>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePartCreateModal;
