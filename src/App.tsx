import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Footer, Header, Newsletter } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { AgencyCategoryPage, AgencyIndexPage } from './pages/AgencyPages'
import { AgencyProfilePage } from './pages/ProfilePage'
import { BestDesignsPage, HowItWorksPage } from './pages/AwardsPages'
import { NewsArticlePage, NewsIndexPage } from './pages/NewsPages'
import { BenefitsPage, MembershipPage, ProjectBriefPage } from './pages/MarketplacePages'
import { AboutPage, ContactPage, LoginPage, MethodologyPage } from './pages/InfoPages'

export default function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agency" element={<AgencyIndexPage />} />
          <Route path="/agency/profile/:slug" element={<AgencyProfilePage />} />
          <Route path="/agency/*" element={<AgencyCategoryPage />} />
          <Route path="/best-designs" element={<BestDesignsPage />} />
          <Route path="/best-designs/how-it-works" element={<HowItWorksPage />} />
          <Route path="/news" element={<NewsIndexPage />} />
          <Route path="/news/:slug" element={<NewsArticlePage />} />
          <Route path="/marketplace/project-brief" element={<ProjectBriefPage />} />
          <Route path="/marketplace/membership" element={<MembershipPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/account/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <Newsletter />
    </HashRouter>
  )
}
