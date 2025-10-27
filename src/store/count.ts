import { create } from "zustand";
import { combine, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useCountStore = create(
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
);

useCountStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    //listener
    console.log(count, prevCount);
    const store = useCountStore.getState();
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
