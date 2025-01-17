interface MainProps {
	children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
	return <div className='flex-1'>{children}</div>;
}
