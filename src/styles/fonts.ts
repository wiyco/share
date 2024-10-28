import { Inter, Noto_Sans_JP, Zen_Maru_Gothic } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-maru-gothic",
  weight: ["300", "400", "500", "700", "900"],
});

export { inter, notoSansJP, zenMaruGothic };
