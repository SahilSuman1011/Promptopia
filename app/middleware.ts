import { NextResponse } from 'next/server'

export function middleware(request) {
  const response = NextResponse.next()

  // Add security headers
  const contentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `

  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  )

  return response
}

export const config = {
  matcher: '/:path*',
}