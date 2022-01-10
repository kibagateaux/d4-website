import { atom, selector } from "recoil"
import GhostContentAPI, { GhostAPI } from '@tryghost/content-api'

export const ghostKeyAtom = atom<string>({
  key: 'ghostKey',
  default: process.env.NEXT_PUBLIC_GHOST_KEY || 'set NEXT_PUBLIC_GHOST_KEY'
})

export const ghostUriAtom = atom<string>({
  key: 'ghostUri',
  default: process.env.NEXT_PUBLIC_GHOST_URI || 'set NEXT_PUBLIC_GHOST_URI'
})

const getInstance = ({ url, key, tries = 5 } : { url: string, key: string, tries?: number }) : GhostAPI | undefined  => {
  try {
    return new GhostContentAPI({
      url,
      key,
      version: "v3"
    });
  } catch(error) {
    if (tries > 0) {
      console.error(`- useGhost - getInstance: ${tries}`)
      getInstance({ url, key, tries: tries - 1 })
    }
  }
}

export const ghostAtom = selector<GhostAPI | undefined>({
  key: 'ghost',
  get: ({ get }) => {
    const url = get(ghostUriAtom);
    const key = get(ghostKeyAtom);
    const result = getInstance({ url, key })
    console.log('ghostAtom', url, key, result)
    return result;
  }
})
