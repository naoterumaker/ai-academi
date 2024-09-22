import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'あなたのAIアカデミア - AI時代を生き抜くスキルを2日間で習得',
  description: 'AIの波に乗り遅れないために。フリーランスや個人事業主のためのAI集中講座。2日間でAIスキルを一気に習得し、キャリアアップを実現します。',
  keywords: 'AI, 人工知能, スキルアップ, フリーランス, 個人事業主, 講座, 大阪',
  authors: [{ name: 'あなたのAIアカデミア' }],
  openGraph: {
    title: 'あなたのAIアカデミア - AI時代を生き抜くスキルを2日間で習得',
    description: 'AIの波に乗り遅れないために。フリーランスや個人事業主のためのAI集中講座。2日間でAIスキルを一気に習得し、キャリアアップを実現します。',
    url: 'https://ai-academi.vercel.app',
    siteName: 'あなたのAIアカデミア',
    images: [
      {
        url: 'https://ai-academi.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'あなたのAIアカデミア - AI時代を生き抜くスキルを2日間で習得',
    description: 'AIの波に乗り遅れないために。フリーランスや個人事業主のためのAI集中講座。2日間でAIスキルを一気に習得し、キャリアアップを実現します。',
    images: ['https://ai-academi.vercel.app/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
