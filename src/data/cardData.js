import { LuClock4 } from "react-icons/lu";
import { LuChartColumn } from "react-icons/lu";
import { LuLayers } from "react-icons/lu";
import { LuPalette } from "react-icons/lu";
import { LuRotateCcw } from "react-icons/lu";

const cards = [
  {
    icon: <LuClock4 className="text-6xl text-blue-600" />,
    frontTitle: "Smart Review System",
    backTitle: "Perfect Timing",
    description:
      "Cards come back at the perfect time, so you never forget. Our algorithm ensures optimal review intervals.",
  },
  {
    icon: <LuChartColumn className="text-6xl text-blue-600" />,
    frontTitle: "Adaptive Intervals",
    backTitle: "Smart Frequency",
    description:
      "Easy cards show up less often, hard ones more, personalized to your memory patterns.",
  },
  {
    icon: <LuLayers className="text-6xl text-blue-600" />,
    frontTitle: "Custom Decks",
    backTitle: "Unlimited Topics",
    description:
      "Build flashcards for anything - school, university, languages, career skills or personal growth.",
  },
  {
    icon: <LuPalette className="text-6xl text-blue-600" />,
    frontTitle: "Simple & Clean Design",
    backTitle: "Focus Mode",
    description:
      "A distraction free interface built only for learning. Clean, minimal, effective.",
  },
  {
    icon: <LuRotateCcw className="text-6xl text-blue-600" />,
    frontTitle: "Reset & Control",
    backTitle: "Full Control",
    description:
      "Change your rating anytime, Qard adapts instantly. You're always in control of your learning.",
  },
];

export default cards;
