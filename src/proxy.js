import { NextResponse } from 'next/server'

export function proxy(request) {
  if (request.nextUrl.pathname === '/collections') {
    return NextResponse.redirect(
      new URL('/collections/kyoto', request.url)
    )
  }
}