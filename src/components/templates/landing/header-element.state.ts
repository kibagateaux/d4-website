import { atom } from "recoil";

import { ElementBounds } from "models";

export const selectedItemHeaderAtom = atom<ElementBounds | null>({
  key: "selectedItemHeaderAtom",
  default: null,
});
