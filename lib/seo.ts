import { Metadata } from 'next';

export function generateMetadata(
  title: string,
  description: string,
  path: string,
  image?: string
): Metadata {
  const url = `${process.env.NEXT_PUBLIC_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: image ? [{ url: image }] : [],
      siteName: 'imprimirfotosonline.es',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'imprimirfotosonline.es',
    url: process.env.NEXT_PUBLIC_URL,
    logo: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
    sameAs: [
      'https://www.instagram.com/imprimirfotos',
      'https://www.facebook.com/imprimirfotos',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: process.env.EMAIL_ADMIN,
    },
  };
}
