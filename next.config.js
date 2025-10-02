/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for Vercel deployment
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  
  // Static generation
  trailingSlash: false,
  
  // Headers for better performance and CSP for GetCourse
  async headers() {
    const securityHeaders = [
      {
        key: 'X-Frame-Options',
        value: 'DENY'
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin'
      },
      {
         key: 'Content-Security-Policy',
         value:
           "default-src 'self' http: https:; " +
           "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://school.ismablog.ru http://school.ismablog.ru; " +
           "style-src 'self' 'unsafe-inline' http: https:; " +
           "connect-src 'self' http: https:; " +
           "img-src 'self' data: http: https:; " +
           "font-src 'self' http: https:; " +
           "frame-src 'self' http://school.ismablog.ru https://school.ismablog.ru;"
       }
    ];
    
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ]
  }
}

module.exports = nextConfig