// app/[locale]/[...slug]/page.tsx
import { notFound } from 'next/navigation'

export default function CatchAllPage() {
  // This will trigger the nearest not-found boundary,
  // which is app/[locale]/not-found.tsx
  notFound()
}
