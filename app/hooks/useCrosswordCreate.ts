import { create } from "zustand";

type useCrosswordCreateModalStroe = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}


const useCrosswordCreateModal = create<useCrosswordCreateModalStroe>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCrosswordCreateModal;
