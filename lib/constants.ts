import { Crimson_Text } from "next/font/google";
import localFont from "next/font/local";

// loading fonts local for better optimization, and quick availability
export const helveticaFont = localFont({
  variable: "--helvetica",
  src: [
    {
      path: "../fonts/Helvetica.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../fonts/Helvetica-Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../fonts/Helvetica-Oblique.ttf",
      style: "italic",
      weight: "400",
    },
    {
      path: "../fonts/Helvetica-BoldOblique.ttf",
      style: "italic",
      weight: "700",
    },
    {
      path: "../fonts/helvetica-light-587ebe5a59211.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "../fonts/helvetica-compressed-5871d14b6903a.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../fonts/helvetica-rounded-bold-5871d05ead8de.otf",
      style: "normal",
      weight: "700",
    },
  ],
  display: "fallback",
});
export const ChomskyFont = localFont({
  variable: "--chomsky",
  src: "../fonts/Chomsky.otf",
  display: "fallback",
  style: "normal",
});
export const crimsonFont = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "fallback",
});

/**stories */
export const MAIN_STORY = {
  id: "a",
  title: "Study: Video games improve reflexes and critical thinking",
  image: {
    src: "/images/gamepad.jpg",
    alt: "An XBox gamepad, shown in dramatic lighting",
  },
  location: "San Francisco",
  abstract: `24-year-old Anthony Vega enjoyed killing zombies, but didn’t realize that those skills were preparing him for work in the 21st century. It turns out, games like Super Mario Brothers and Mega Zombie Bash 2099 have a surprising correlation with in-demand skills like critical reasoning and abstract thinking.

Researchers at the San Francisco think-tank Bestcap Innovations posit that time spent playing video games can be productive, in moderation. Active practice can boost reflexes, skills that will come in handy regardless of your view of the future. Even in the event of a zombie apocalypse, time spent in Mega Zombie Bash 2099 should have a powerful impact.

Not everyone views it the same way, though. David Davidson Sr., professor at LIT University, tells The Grid that any benefits are overshadowed by the social isolation caused by long play sessions, alone in a dark basement. “My cat improves her reflexes by jumping on the dinner table and eating my fish sticks, but I don't celebrate that behaviour!”. Dr. Davidson, it should be noted, does not have a cat.

In 1996, early video game researchers discovered that Pac-Man players were 12% more likely to receive college admission, but 31% more likely to drop out. This suggests that, like famous sprinter Roger Bannister, video game players excel at quick bursts of activity, but struggle with long-term sustained effort.

More than 8 billion people around the world play video games, either recreationally or professionally.`,
};

export const SECONDARY_STORIES = [
  {
    id: "b",
    title: "Politicians scramble as court overrules invalid legislation",
    image: {
      src: "/images/politicitions.png",
      alt: "Lots of white men in suits listen apathetically to a presentation",
    },
    abstract: `In a surprising judgment that surprised no one, the New Amsterdam court of appeals finds Bill 234 unconstitutional, overturning one of the Modern Sovereign party's core legislative achievements. Now, lawmakers are working furiously to rewrite the law before the Royal Ascent next month.`,
  },
  {
    id: "c",
    title: "Vintage cars fetch a premium as car industry shifts gears",
    image: {
      src: "/images/old-car.png",
      alt: "A vintage old Beetle (car), orange and with signs of wear",
    },
    abstract: `In a Landsdowne auction, a vintage 1900s beetle sold “as-is” for ȿ120,000, shattering expectations and records alike. As the automotive industry focuses on ALVs (Autonomous Levitated Vehicles), some enthusiasts are paying big bucks for a more traditional driving experience.`,
  },
  {
    id: "d",
    title:
      "This season’s hottest fashions unveiled amidst designer controversy",
    image: {
      src: "/images/fashion.png",
      alt: "A stylish woman carries a dozen shopping bags",
    },
    abstract: `Ludish Atvalatashia was in his 50s when he launched his first couture line. Famously, he worked as an engineer for Blue Rocket, and learned that many of his inventions were quite eye-catching on the runway. This week, though, whistleblowers from within his agency have revealed the toxic nature of their work environment.`,
  },
];

export const OPINION_STORIES = [
  {
    id: "o-a",
    author: "Stephen Abebe",
    avatar: "/images/avatar-stephen-abebe.jpg",
    title: "Humans need water to survive, and so do your potted plants!",
  },
  {
    id: "o-b",
    author: "Mario DeLuciano",
    avatar: "/images/avatar-mario-deluciano.jpg",
    title: "Sports! The secret to winning big??",
  },
  {
    id: "o-c",
    author: "Alice Smith",
    avatar: "/images/avatar-alice-smith.jpg",
    title: "Why I’ll never buy groceries in-person again",
  },
  {
    id: "o-d",
    author: "Rocko Pierce Stanley",
    avatar: "/images/avatar-rocko-pierce-stanley.jpg",
    title: "Prediction: Disco is coming back, with a vengeance",
  },
];

export const MARKET_DATA = [
  {
    tickerSymbol: "AAPL",
    exchangeName: "NASDAQ",
    percentChange: 4.5,
  },
  {
    tickerSymbol: "AMC",
    exchangeName: "NYSE",
    percentChange: 7.9,
  },
  {
    tickerSymbol: "ENB",
    exchangeName: "TSE",
    percentChange: -12.4,
  },
  {
    tickerSymbol: "GOOG",
    exchangeName: "NASDAQ",
    percentChange: 8.1,
  },
  {
    tickerSymbol: "AMZN",
    exchangeName: "NASDAQ",
    percentChange: -6.6,
  },
  {
    tickerSymbol: "MSFT",
    exchangeName: "NASDAQ",
    percentChange: -1.2,
  },
];

export const SPORTS_STORIES = [
  {
    id: "s-a",
    image: {
      src: "/images/hubs.png",
      alt: "Montreal Canadiens goalie Carey Price covering his net",
    },
    title: "Montreal Canadiens hope to settle the score in Vegas",
  },
  {
    id: "s-b",
    image: {
      src: "/images/bicycles.png",
      alt: "Lots of men in cute matching outfits riding bicycles",
    },
    title: "In surprise move, the Tour de France moves to Belgium",
  },
  {
    id: "s-c",
    image: {
      src: "/images/football.png",
      alt: "A football player runs with the ball, whilst being chased by another player",
    },
    title: "The Texas Giants eke out a victory after a late-game touchdown",
  },
  {
    id: "s-d",
    image: {
      src: "/images/decathlon.png",
      alt: "Women sprinting on a race track",
    },
    title: "The surprising result for this summer decathlon",
  },
  {
    id: "s-3",
    image: {
      src: "/images/coach.png",
      alt: "A soccer coach places pylons on a field",
    },
    title: "Behind the scenes: coaching a Little League team",
  },
];

export const FOOTER_LINKS = [
  {
    title: "Discover Content",
    links: [
      "Politics",
      "World",
      "Financial",
      "Sports and Entertainment",
      "Opinion and Editorials",
    ],
  },
  {
    title: "Regional Websites",
    links: [
      "The Grid United States",
      "The Grid Europe",
      "The Grid Asia",
      "The Grid Mars and Beyond",
      "The Grid Australia",
    ],
  },
  {
    title: "Careers",
    links: ["Open positions", "Meet the team", "Company culture"],
  },
  {
    title: "Legal and Privacy",
    links: [
      "Privacy Policy",
      "Use of cookies",
      "Manage Cookies",
      "Legal notice",
      "Terms and Conditions",
    ],
  },
];
