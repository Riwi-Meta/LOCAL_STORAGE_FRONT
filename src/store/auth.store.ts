import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface State {
  user: Object | undefined;
  token: string | undefined;

  login: (email: string, password: string) => void;
  signUp: () => void;
  logOut: () => void;
}

const store: StateCreator<State> = (set, get) => ({
  user: undefined,
  token: undefined,

  login: async (email: string, password: string) => {},
  signUp: async () => {},
  logOut: () => set({ user: undefined, token: undefined }),
});

export const useAuthStore = create<State>()(
  devtools(
    persist(store, {
      name: "auth-store",
    })
  )
);
