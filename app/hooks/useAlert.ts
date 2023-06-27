import { create } from "zustand";

type useAlertModalStroe = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}


const useAlertModal = create<useAlertModalStroe>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAlertModal;
