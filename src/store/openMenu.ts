import create from "zustand";

interface IsOpenMenu {
    isOpen: boolean
    setIsOpen: () => void
}

export const OpenMenuStore = create<IsOpenMenu>((set) => ({
    isOpen: false,
    setIsOpen: () => set((state: IsOpenMenu) => ({ isOpen: !state.isOpen }))
}))