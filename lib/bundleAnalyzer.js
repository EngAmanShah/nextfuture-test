// This file enables bundle analysis when needed
// Usage: ANALYZE=true npm run build

import { promises as fs } from 'fs';
import path from 'path';

const BundleAnalyzerSetup = `
// To enable bundle analysis, add this to your next.config.mjs:

/**
import { withBundleAnalyzer } from '@next/bundle-analyzer';

const withAnalyzer = process.env.ANALYZE === 'true' ? 
  withBundleAnalyzer() : 
  (config) => config;

export default withAnalyzer(nextConfig);
**/

// Installation:
// npm install --save-dev @next/bundle-analyzer

// Usage:
// ANALYZE=true npm run build

// This will generate a report in .next/analyze folder
`;

export default BundleAnalyzerSetup;
