import { lazy, Suspense, useState, useEffect } from 'react';
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

// Lazy load non-critical components with explicit default exports
const InvestmentPlans = lazy(() => import('@/components/InvestmentPlans')
  .then(module => ({ default: module.InvestmentPlans })));

const Features = lazy(() => import('@/components/Features')
  .then(module => ({ default: module.Features })));

const Stats = lazy(() => import('@/components/Stats')
  .then(module => ({ default: module.Stats })));

const CompanyDetails = lazy(() => import('@/components/CompanyDetails')
  .then(module => ({ default: module.CompanyDetails })));

const Testimonials = lazy(() => import('@/components/Testimonials')
  .then(module => ({ default: module.Testimonials })));

const PaymentMethods = lazy(() => import('@/components/PaymentMethods')
  .then(module => ({ default: module.PaymentMethods })));

// Simple loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Error boundary for lazy-loaded components
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error('Component error:', error);
      setHasError(true);
    };
    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (hasError) {
    return <div className="text-center p-8 text-red-500">Component failed to load</div>;
  }

  return children;
};

const Index = ({ isAuthenticated }) => {
  return (
    <div className="min-h-screen">
      {/* Critical above-the-fold components */}
      <Hero isAuthenticated={isAuthenticated} />
      
      {/* Lazy-loaded sections with error boundaries */}
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <InvestmentPlans />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={null}> {/* No spinner for less important sections */}
          <CompanyDetails />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Features />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={null}>
          <Stats />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Testimonials />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={null}>
          <PaymentMethods />
        </Suspense>
      </ErrorBoundary>

      <Footer />
    </div>
  );
};

export default Index;