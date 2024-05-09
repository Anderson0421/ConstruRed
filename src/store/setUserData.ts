import create from "zustand";

interface DataUserInterface {
    user: [] | any,
    setDataUser: (data: any) => void
}

export const SetDataUser = create<DataUserInterface>((set) => ({
    user : [],
    setDataUser: (data) => set({user: data})
}))