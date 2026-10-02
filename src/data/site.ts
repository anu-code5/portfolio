// Everything personal lives here. Replace every [bracketed] value with your own.

export const site = {
  name: 'Anushka Chaudhary',
  initials: 'AC',
  url: 'https://your-domain.dev',
  description:
    'Final-year Electronics and Computer Engineering student building full-stack products and ML systems, and writing about how they broke.',
  college: 'Vellore Institute of Technology',
  classOf: '2027',
  email: 'chaudharyanu.mail@gmail.com',
  resume: '/Anushka_Chaudhary.pdf',
  github: 'https://github.com/anu-code5',
  linkedin: 'https://www.linkedin.com/in/anushka-chaudhary-3663a7276',
  lookingFor: 'open to SDE, full-stack and ML roles from January 2027',
  lastUpdated: 'Oct 2026',
};

// The recruiter strip under the hero.
export const quickFacts = [
  { label: 'Looking for', value: 'SDE · Full-stack · ML engineer' },
  { label: 'Strongest in', value: 'TypeScript, React, Node, Python, PyTorch, SQL' },
  { label: 'Available', value: 'January 2027 · open to relocate' },
  //{ label: 'Proof', value: '[Internship @ Company] · [CGPA] · [Hackathon win]' },
  { label: 'Proof', value: 'CGPA:8.71 · National Semi-Finalist of Flipkart GRiD 7.0' },
];

// Bookshelf spines. `tone` picks a colour from the stylesheet: ink, red, green, slate, cream, paper, grey.
export const books = [
  { title: 'And Then There Were None', tone: 'ink', w: 52, h: 230, review: 'Keeps you guessing\, but is kinda obvious' },
  { title: 'Little Women', tone: 'cream', w: 56, h: 244, review: 'A classic tale of sisterhood and growing up - my winter read' },
  { title: 'The Subtle Art of Not Giving a F*ck', tone: 'red', w: 44, h: 200, review: 'A noob\'s guide to understanding feedback loop' },
  { title: 'Gone Girl', tone: 'green', w: 40, h: 186, review: 'Genius villain whom I cannot hate' },
  { title: 'The Picture of Dorian Gray', tone: 'slate', w: 48, h: 214, review: 'where can vanity and corruption meet?' },
  { title: 'Bird by Bird', tone: 'paper', w: 42, h: 196, review: '[Your one-line review]' },
  { title: 'Crafting Interpreters', tone: 'grey', w: 50, h: 222, review: '[Your one-line review]' },
];

export const nowReading = {
  title: 'The Perfect Child',
  author: 'Lucinda Berry',
  progress: 72, // percent
  marginNote: 'she\'s a psychopath, but I can\'t stop reading',
  booksThisYear: '3',
};

// Sketchbook. Use `image: '/sketches/your-file.jpg'` (put files in public/sketches) to show a real scan,
// or `doodle` for one of the built-in line drawings.
// export const sketches: { caption: string; doodle?: 'mug' | 'skyline' | 'wireframe'; image?: string; alt?: string; tilt: number }[] = [
//   { doodle: 'mug', caption: 'study 03: hostel chai, 2 a.m.', tilt: -1.2 },
//   { doodle: 'skyline', caption: 'study 11: the view from the library', tilt: 1 },
//   { doodle: 'wireframe', caption: 'page 47: first Sketch2UI test input', tilt: -0.6 },
//   { caption: 'study [N]: [caption]', tilt: 1.4 },
// ];

export const sketches: {
  caption: string;
  doodle?: 'mug' | 'skyline' | 'wireframe';
  image?: string;
  alt?: string;
  tilt: number;
}[] = [
  {
    image: '/sketches/gym.jpeg',
    caption: 'justifying junk food',
    alt: 'Gym',
    tilt: -1.2
  },
  {
    image: '/sketches/self.jpeg',
    caption: 'mirror mirror on the wall',
    alt: 'Self portrait sketch',
    tilt: 1
  },
  {
    image: '/sketches/sketch.jpeg',
    caption: 'a page from the sketchbook',
    alt: 'Sketchbook drawing',
    tilt: 1.4
  },
  {
    image: '/sketches/swimming.jpeg',
    caption: 'trying not to drown',
    alt: 'Swimming',
    tilt: 0.7
  },
];

