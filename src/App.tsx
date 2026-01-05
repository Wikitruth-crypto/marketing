import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ConditionalLayout from '@/components/ConditionalLayout'
import { startIpfsGatewayPolling } from '@/config/ipfsUrl/sync'
startIpfsGatewayPolling()

// Dynamically import route pages, implement code splitting
const HomePage = lazy(() => import('@/pages/Home'))
const BlogPage = lazy(() => import('@/pages/Blog'))
const TeamPage = lazy(() => import('@/pages/Team'))
const RoadmapPage = lazy(() => import('@/pages/Roadmap'))

// Loading placeholder component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-white">Loading...</div>
  </div>
)

function App() {
  return (
    <>
      <ConditionalLayout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </Suspense>
      </ConditionalLayout>
    </>
  )
}

export default App

