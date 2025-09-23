import { Toaster } from "react-hot-toast";
import OverviewSection from "./sections/OverviewSection";
import WhatUsersSaySection from "./sections/WhatUsersSaySection";
import WhyQardSection from "./sections/WhyQardSection";

function App() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
      <OverviewSection />
      <WhyQardSection />
      <WhatUsersSaySection />
    </>
  );
}

export default App;
