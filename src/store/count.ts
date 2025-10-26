import { create } from "zustand";

type Store = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

export const useCountStore = create<Store>((set) => ({
  count: 0,
  increase() {
    set((store) => ({ count: store.count + 1 })); //set함수는 스토어의 상태값을 변화시키는데 이때, 전체 스토어를 넘길 필요 없이 변화하고 싶은 상태만 골라서 반환하면 된다. 드래서 당연히 이때의 반환값은 객체다.
  },
  decrease() {
    set((store) => ({ count: store.count - 1 }));
  },
}));
