import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Footer, Header, Newsletter } from './components/Layout'
import { PreFooterBlock } from './components/PreFooterBlock'
import { HomePage } from './pages/HomePage'
import { AgencyCategoryPage, AgencyIndexPage } from './pages/AgencyPages'
import { AgencyProfilePage } from './pages/ProfilePage'
import {
  BecomeJudgePage,
  BestDesignCategoryPage,
  BestDesignsPage,
  HowItWorksPage,
  JuryPage,
  SubmitDesignPage,
} from './pages/AwardsPages'
import { NewsArticlePage, NewsIndexPage, NewsTopicPage } from './pages/NewsPages'
import {
  BenefitsPage,
  MarketplaceFaqsPage,
  MarketplaceHomePage,
  MembershipPage,
  ProjectBriefPage,
} from './pages/MarketplacePages'
import { AboutPage, ContactPage, MethodologyPage } from './pages/InfoPages'
import {
  AccessibilityPage,
  AdvertisePage,
  FaqsPage,
  FraudProtectionPage,
  PrivacyPage,
  SitemapPage,
  SponsorshipPage,
  SubmitAgencyPage,
  TermsPage,
} from './pages/LegalPages'

export default function App() {
  return (
    <HashRouter>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agency" element={<AgencyIndexPage />} />
          <Route path="/agency/profile/:slug" element={<AgencyProfilePage />} />
          <Route path="/agency/*" element={<AgencyCategoryPage />} />
          <Route path="/best-designs" element={<BestDesignsPage />} />
          <Route path="/best-designs/how-it-works" element={<HowItWorksPage />} />
          <Route path="/best-designs/jury" element={<JuryPage />} />
          <Route path="/best-designs/jury/become-a-judge" element={<BecomeJudgePage />} />
          <Route path="/best-designs/submit" element={<SubmitDesignPage />} />
          <Route path="/best-designs/:category" element={<BestDesignCategoryPage />} />
          <Route path="/news" element={<NewsIndexPage />} />
          <Route path="/news/topic/:topic" element={<NewsTopicPage />} />
          <Route path="/news/:slug" element={<NewsArticlePage />} />
          <Route path="/marketplace" element={<MarketplaceHomePage />} />
          <Route path="/marketplace/project-brief" element={<ProjectBriefPage />} />
          <Route path="/marketplace/membership" element={<MembershipPage />} />
          <Route path="/marketplace/faqs" element={<MarketplaceFaqsPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/fraud-protection" element={<FraudProtectionPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/advertise" element={<AdvertisePage />} />
          <Route path="/sponsorship" element={<SponsorshipPage />} />
          <Route path="/submit-agency" element={<SubmitAgencyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <PreFooterBlock />
      <Footer />
      <Newsletter />
    </HashRouter>
  )
}
