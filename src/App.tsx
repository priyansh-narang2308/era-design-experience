
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EraProvider } from "@/context/EraContext";
import MainLayout from "@/components/layout/MainLayout";
import Index from "@/pages/Index";
import Explore from "@/pages/Explore";
import Compare from "@/pages/Compare";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";

const App = () => (
  <EraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Index />} />
          <Route path="explore" element={<Explore />} />
          <Route path="compare" element={<Compare />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </EraProvider>
);

export default App;
