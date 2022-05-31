import create from 'zustand'

type NavigationSliceType = {
	open: boolean
	setOpen: () => void
}

export const useNavStore = create<NavigationSliceType>((set) => ({
	open: true,
	setOpen: () => set((state) => ({ open: !state.open })),
}))
