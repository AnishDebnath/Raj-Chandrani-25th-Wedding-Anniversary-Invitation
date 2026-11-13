// ponytail: centralized assets export for active production assets only
import heroImg from './hero.jpg';
import footerImg from './footer.jpg';
import venueImg from './venue.jpg';
import backgroundImg from './background.png';
import introVideo from './intro.mp4';
import introPoster from './intro-poster.png';
import faviconImg from './favicon.png';
import tphLogoImg from './tph-logo.png';
import watermarkImg from './watermark/watermark.png';
import ogCoverImg from './og-cover.jpg';
import backgroundMusic from './background-music.mp3';

// Story images from img folder
import storyImg1 from './img/Traditional Bengali Wedding Portrait1.jpg';
import storyImg2 from './img/Sindoor Ceremony in Gold and Red.jpg';
import storyImg3 from './img/Bengali Wedding Ritual Offering.jpg';
import storyImg4 from './img/Golden Bengali Wedding Portrait.jpg';
import storyImg5 from './img/Joyful South Asian Wedding Portrait.jpg';
import storyImg6 from './img/Sindoor Ceremony in Bengali Wedding Attire.jpg';
import storyImg7 from './img/Smiling Ceremonial Portrait in Gold.jpg';
import storyImg8 from './img/Bengali Bridal Portrait on a Golden Throne.jpg';
import storyImg9 from './img/Regal Blue Bridal Portrait.jpg';
import storyImg10 from './img/Royal Blue Bridal Portrait.jpg';

export interface StoryPhoto {
  id: number;
  img: string;
  alt: string;
}

export const storyPhotos: StoryPhoto[] = [
  { id: 1, img: storyImg1, alt: 'Traditional Bengali Wedding Portrait' },
  { id: 2, img: storyImg2, alt: 'Sindoor Ceremony in Gold and Red' },
  { id: 3, img: storyImg3, alt: 'Bengali Wedding Ritual Offering' },
  { id: 4, img: storyImg4, alt: 'Golden Bengali Wedding Portrait' },
  { id: 5, img: storyImg5, alt: 'Joyful South Asian Wedding Portrait' },
  { id: 6, img: storyImg6, alt: 'Sindoor Ceremony in Bengali Wedding Attire' },
  { id: 7, img: storyImg7, alt: 'Smiling Ceremonial Portrait in Gold' },
  { id: 8, img: storyImg8, alt: 'Bengali Bridal Portrait on a Golden Throne' },
  { id: 9, img: storyImg9, alt: 'Regal Blue Bridal Portrait' },
  { id: 10, img: storyImg10, alt: 'Royal Blue Bridal Portrait' },
];

// Backwards-compatible aliases
export const heroCoupleImg = heroImg;
export const footerCoupleImg = footerImg;
export const venueAdbManorImg = venueImg;
export const journey1Img = storyImg1;
export const journey2Img = storyImg2;
export const journey3Img = storyImg3;

export {
  heroImg,
  footerImg,
  venueImg,
  backgroundImg,
  introVideo,
  introPoster,
  faviconImg,
  tphLogoImg,
  watermarkImg,
  ogCoverImg,
  backgroundMusic,
};
