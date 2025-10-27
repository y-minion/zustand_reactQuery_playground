import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useCountStore = create(
  persist(
    subscribeWithSelector(
      immer(
        combine({ count: 0 }, (set, get) => ({
          actions: {
            increase() {
              set((state) => {
                state.count += 1;
              }); //set함수는 스토어의 상태값을 변화시키는데 이때, 전체 스토어를 넘길 필요 없이 변화하고 싶은 상태만 골라서 반환하면 된다. 드래서 당연히 이때의 반환값은 객체다.
            },
            decrease() {
              set((state) => {
                state.count -= 1;
              });
            },
          },
        })),
      ),
    ),
    {
      name: "countStore",
      partialize: (store) => ({
        //스토어 전체를 로컬 스토리지에 저장하는게 아니라 선택적으로 설정해서 저장할 수 있다.
        count: store.count, //count 상태만 로컬스토리지에 저장해서 사용하겠다.
      }),
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

useCountStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    //listener
    console.log(count, prevCount);
    const store = useCountStore.getState(); // 해당하는 스토어의 값을 구독이 아니라 단순히 스토어의 현재상태를 한번 가져온다.
  },
);

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decrease);
  return decrease;
};
