const metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js',
}

interface Props {
	children: React.ReactNode,
}

const RootLayout = ({children}: Props) => (
	<html lang='en'>
		<body>{children}</body>
	</html>
)

export {metadata}
export default RootLayout
