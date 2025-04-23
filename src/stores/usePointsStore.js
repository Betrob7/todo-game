// src/store/usePointsStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePointsStore = create(
  persist(
    (set) => ({
      points: {
        Poäng: 0,
      },
      addPoints: (user, amount) =>
        set((state) => ({
          points: {
            ...state.points,
            [user]: state.points[user] + amount,
          },
        })),
      spendPoints: (user, amount) =>
        set((state) => ({
          points: {
            ...state.points,
            [user]: Math.max(0, state.points[user] - amount),
          },
        })),
    }),
    {
      name: "points-storage", // localStorage key
    }
  )
);

export default usePointsStore;
