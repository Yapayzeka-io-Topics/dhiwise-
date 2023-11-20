import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopEight = React.lazy(() => import("pages/DesktopEight"));
const DesktopThree = React.lazy(() => import("pages/DesktopThree"));
const Customer = React.lazy(() => import("pages/Customer"));
const DesktopSeven = React.lazy(() => import("pages/DesktopSeven"));
const DesktopFive = React.lazy(() => import("pages/DesktopFive"));
const Help = React.lazy(() => import("pages/Help"));
const Sifrekurtarmaonayi = React.lazy(() => import("pages/Sifrekurtarmaonayi"));
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const DesktopFour = React.lazy(() => import("pages/DesktopFour"));
const Sifresifirlama = React.lazy(() => import("pages/Sifresifirlama"));
const DesktopSix = React.lazy(() => import("pages/DesktopSix"));
const KullaniciKayit = React.lazy(() => import("pages/KullaniciKayit"));
const Kullanicigiris = React.lazy(() => import("pages/Kullanicigiris"));
const IndexAnasayfa = React.lazy(() => import("pages/IndexAnasayfa"));
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const Desktop = React.lazy(() => import("pages/Desktop"));
const UIIntro = React.lazy(() => import("pages/UIIntro"));
const Chatbot = React.lazy(() => import("pages/Chatbot"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Chatbot />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/uiintro" element={<UIIntro />} />
          <Route path="/desktop" element={<Desktop />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
          <Route path="/indexanasayfa" element={<IndexAnasayfa />} />
          <Route path="/kullanicigiris" element={<Kullanicigiris />} />
          <Route path="/kullanicikayit" element={<KullaniciKayit />} />
          <Route path="/desktopsix" element={<DesktopSix />} />
          <Route path="/sifresifirlama" element={<Sifresifirlama />} />
          <Route path="/desktopfour" element={<DesktopFour />} />
          <Route path="/desktopone" element={<DesktopOne />} />
          <Route path="/sifrekurtarmaonayi" element={<Sifrekurtarmaonayi />} />
          <Route path="/help" element={<Help />} />
          <Route path="/desktopfive" element={<DesktopFive />} />
          <Route path="/desktopseven" element={<DesktopSeven />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/desktopthree" element={<DesktopThree />} />
          <Route path="/desktopeight" element={<DesktopEight />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
