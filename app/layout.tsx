import type { Metadata } from 'next'
import { Cormorant_Garamond, Noto_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['300', '400'],
	style: ['normal', 'italic'],
	variable: '--font-cormorant',
	display: 'swap',
})

const notoSans = Noto_Sans({
	subsets: ['latin'],
	weight: ['300', '400'],
	variable: '--font-noto',
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'House of the Geisha',
	description:
		'An adult supernatural horror anthology series. Set in Sakura City. Coming soon.',
	openGraph: {
		title: 'House of the Geisha',
		description:
			'Eight demons. Eight souls. One house that does not forgive.',
		url: 'https://houseofthegeisha.com',
		siteName: 'House of the Geisha',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'House of the Geisha',
		description: 'Eight demons. Eight souls. One house that does not forgive.',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${cormorant.variable} ${notoSans.variable}`}>
			<body>{children}</body>
		</html>
	)
}