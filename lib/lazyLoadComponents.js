// Lazy loading utilities for performance optimization
// These components are deferred until they're needed

import dynamic from 'next/dynamic';

// Testimonials - Large component with animations, loaded on scroll
export const Testimonials = dynamic(
  () => import('@/components/Testimonials'),
  {
    loading: () => (
      <div
        style={{
          height: '400px',
          background: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
        }}
        aria-label="Loading testimonials"
      >
        <div style={{ textAlign: 'center', color: '#999' }}>
          <p>Loading testimonials...</p>
        </div>
      </div>
    ),
    ssr: true, // Keep SSR for SEO
  }
);

// Services - Heavy section with multiple cards
export const Services = dynamic(
  () => import('@/components/Services'),
  {
    loading: () => (
      <div
        style={{
          height: '300px',
          background: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Loading services"
      >
        <p style={{ color: '#999' }}>Loading services...</p>
      </div>
    ),
    ssr: true,
  }
);

// ValueSlider (Swiper) - Heavy carousel component
export const ValueSlider = dynamic(
  () => import('@/components/ValueSlider'),
  {
    loading: () => (
      <div
        style={{
          height: '350px',
          background: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Loading slider"
      >
        <p style={{ color: '#999' }}>Loading slider...</p>
      </div>
    ),
    ssr: true,
  }
);

// AllProducts - Heavy data component with pagination and search
export const AllProducts = dynamic(
  () => import('@/components/AllProducts'),
  {
    loading: () => (
      <div
        style={{
          minHeight: '600px',
          background: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Loading products"
      >
        <p style={{ color: '#999' }}>Loading products...</p>
      </div>
    ),
    ssr: false, // Requires client-side Firebase
  }
);

// Testimonials (full dynamic, no SSR) - for sections below fold
export const TestimonialsLazy = dynamic(
  () => import('@/components/Testimonials'),
  {
    loading: () => null, // Silent loading for below-fold
    ssr: false,
  }
);

// Services (full dynamic, no SSR) - for sections below fold
export const ServicesLazy = dynamic(
  () => import('@/components/Services'),
  {
    loading: () => null,
    ssr: false,
  }
);

// ValueSlider (full dynamic, no SSR) - for sections below fold
export const ValueSliderLazy = dynamic(
  () => import('@/components/ValueSlider'),
  {
    loading: () => null,
    ssr: false,
  }
);
