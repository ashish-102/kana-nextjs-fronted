import { atom, useAtom } from "jotai";

const modalState = atom(false);

export const useFilterInfoModal = () => {
    return useAtom(modalState);
};