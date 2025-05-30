export interface Avatar {
  front: string;
  back: string;
}

export const AVATARS: Record<number, Avatar> = {
  1: {
    front: '/Ava1Front.png',
    back: '/Ava1Back.png'
  },
  2: {
    front: '/Ava2Front.png',
    back: '/Ava2Back.png'
  }
};
