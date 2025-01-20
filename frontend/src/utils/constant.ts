import { NavItem } from '../types/common';
import FirstCharacter from './../assets/images/cards/1.png';
import SecondCharacter from './../assets/images/cards/2.png';
import ThirdCharacter from './../assets/images/cards/3.png';
import FourthCharacter from './../assets/images/cards/4.png';
import FifthCharacter from './../assets/images/cards/5.png';

export const NAV_BAR_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Teams', path: '/teams' },
  { label: 'Marketplace', path: '/marketplace' },
  { label: 'Roadmap', path: '/roadmap' },
  { label: 'Whitepaper', path: '/whitepaper' },
];

export const NAV_FOOTER_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Teams', path: '/teams' },
  { label: 'Marketplace', path: '/marketplace' },
  { label: 'Roadmap', path: '/roadmap' },
  { label: 'Whitepaper', path: '/whitepaper' },
  { label: 'FAQs', path: '/faqs' },
  { label: 'News', path: '/news' },
  { label: 'Community', path: '/community' },
];

export const NAV_FOOTER_POLICY_ITEMS: NavItem[] = [
  { label: 'Security', path: '/security' },
  { label: 'Legal', path: '/legal' },
  { label: 'Privacy', path: '/privacy' },
];

export const CATEGORIES_BACKGROUND = {
  LOWER_BODY: 'linear-gradient(90deg, #6A11CB, #2575FC)',
  UPPER_BODY: 'linear-gradient(90deg, #FF9A9E, #FAD0C4)',
  HAT: 'linear-gradient(90deg, #D76EF5, #8E54E9)',
  SHOES: 'linear-gradient(90deg, #A8FF78, #78FFD6)',
  ACCESSORY: 'linear-gradient(90deg, #FF7A00, #FFC837)',
  LEGENDARY: 'linear-gradient(90deg, #FE955A, #F1DA63)',
  MYTHIC: 'linear-gradient(90deg, #fe5a5a, #f163d2)',
  EPIC: 'linear-gradient(90deg, #DD5AFE, #6366F1)',
  RARE: 'linear-gradient(90deg, #43A6F6, #5868F3)',
  COMMON: 'linear-gradient(90deg, #49DD81, #22B4C6)',
  DEFAULT: 'linear-gradient(90deg, #4AC29A, #BDFFF3)',
};

export const CARD_IMG = {
  1: FirstCharacter,
  2: SecondCharacter,
  3: ThirdCharacter,
  4: FourthCharacter,
  5: FifthCharacter,
  6: FirstCharacter,
  7: SecondCharacter,
  8: ThirdCharacter,
  9: FourthCharacter,
  10: FifthCharacter,
  11: FirstCharacter,
  12: SecondCharacter,
  13: ThirdCharacter,
  14: FourthCharacter,
  15: FifthCharacter,
  16: FirstCharacter,
  17: SecondCharacter,
  18: ThirdCharacter,
  19: FourthCharacter,
  20: FifthCharacter,
};

export const BASE_URL = 'http://localhost:5005';
