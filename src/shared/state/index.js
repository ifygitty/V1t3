import { create } from "zustand";

const useNavStyleLogic = create((set) => ({
    isNavColored: false,
    setIsNavColored : (payload) => set({isNavColored: payload})
}));

export{useNavStyleLogic};