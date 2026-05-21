<<<<<<< HEAD
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AllProductsPage } from './pages/AllProductsPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { OurStoryPage } from './pages/OurStoryPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { LoginPage } from './pages/LoginPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { OrderSuccessPage } from './pages/OrderSuccessPage';
import { FAQPage } from './pages/FAQPage';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { SmoothScroll } from './components/animations/SmoothScroll';

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="relative"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
          <Route path="/product/:productSlug" element={<ProductDetailPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:blogSlug" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <div className="relative min-h-screen bg-[#f5f0e8]">
        <AnnouncementBar />
        <Header />
        <main className="relative">
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
=======
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import TrustBar from "./components/TrustBar";
import FeaturedProducts from "./components/home/FeaturedProducts";
import EditorialQuote from "./components/home/EditorialQuote";
import IngredientShowcase from "./components/home/IngredientShowcase";
import SignatureProduct from "./components/home/SignatureProduct";
import SeasonalHarvest from "./components/home/SeasonalHarvest";
import ProcessTransparency from "./components/home/ProcessTransparency";
import WellnessBundles from "./components/home/WellnessBundles";
import WhyChooseUs from "./components/WhyChooseUs";
import FounderStory from "./components/home/FounderStory";
import GiftBoxes from "./components/home/GiftBoxes";
import GiftGuide from "./components/home/GiftGuide";
import ShopByCategory from "./components/ShopByCategory";
import Sustainability from "./components/home/Sustainability";
import SocialProof from "./components/home/SocialProof";
import OurStory from "./components/OurStory";
import InstagramGallery from "./components/InstagramGallery";
import Newsletter from "./components/Newsletter";
import PreFooterCTA from "./components/footer/PreFooterCTA";
import NewFooter from "./components/footer/NewFooter";
import TrustStrip from "./components/footer/TrustStrip";
import BackToTop from "./components/footer/BackToTop";
import LiveChat from "./components/footer/LiveChat";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import CustomCursor from "./components/ui/CustomCursor";
import ShopPage from "./components/shop/ShopPage";
import AboutPage from "./components/about/AboutPage";
import AnnouncementBar from "./components/header/AnnouncementBar";
import Header from "./components/header/Header";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "shop" | "about">("home");

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <AnnouncementBar />
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />

      <div>
        {currentPage === "home" ? (
          <div>
            <HeroSection onShopNowClick={() => setCurrentPage("shop")} />
            <TrustBar />
            <FeaturedProducts />
            <EditorialQuote />
            <IngredientShowcase />
            <SignatureProduct />
            <SeasonalHarvest />
            <ProcessTransparency />
            <WellnessBundles />
            <WhyChooseUs />
            <FounderStory />
            <GiftBoxes />
            <GiftGuide />
            <ShopByCategory />
            <Sustainability />
            <SocialProof />
            <OurStory />
            <InstagramGallery />
            <Newsletter />
            <PreFooterCTA onShopNowClick={() => setCurrentPage("shop")} />
            <TrustStrip />
            <NewFooter />
          </div>
        ) : currentPage === "about" ? (
          <div>
            <AboutPage onShopNowClick={() => setCurrentPage("shop")} />
            <PreFooterCTA onShopNowClick={() => setCurrentPage("shop")} />
            <TrustStrip />
            <NewFooter />
          </div>
        ) : (
          <div>
            <ShopPage />
            <PreFooterCTA onShopNowClick={() => setCurrentPage("shop")} />
            <TrustStrip />
            <NewFooter />
          </div>
        )}
      </div>

      <BackToTop />
      <LiveChat />
      <WhatsAppButton />
    </div>
  );
}
>>>>>>> c4ad31e53da1c9c7bdaa1bb1e9d4bf7a53f69000
