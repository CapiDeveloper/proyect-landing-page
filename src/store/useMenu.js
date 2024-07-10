import { create } from 'zustand'

export const useMenu = create((set) => ({
  isOpenMenu: false,
  openMenu: () => set({ isOpenMenu: true }),
  closeMenu: () => set({ isOpenMenu: false }),
}))