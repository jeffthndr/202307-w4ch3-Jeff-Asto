export type Character = {
  name: string;
  family: string;
  age: number;
  quote: string;
};

export type KingCharacter = {
  kingdomYears: number;
};
export type FigtherCharacter = {
  weapon: string;
  skill: number;
};
export type CounselorCharacter = {
  boss: Character;
};

export type SquireCharacter = {
  boss: FigtherCharacter;
  serveLvl: number;
};

export type king = Character & KingCharacter;
export type Fighter = Character & FigtherCharacter;
export type Counselor = Character & CounselorCharacter;
export type Squire = Character & SquireCharacter;
