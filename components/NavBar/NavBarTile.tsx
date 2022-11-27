export const NavBarTile = ({ text, link }: { text: string; link: string }) => {
	return (
		<li>
			<a
				href={link}
				className="block 
		
		rounded 
		hover:bg-transparent 
		p-0 
		pt-0
		md:hover:text-white 
		text-gray-400 
		hover:bg-gray-700 
		hover:text-white 
		border-gray-700"
			>
				{text}
			</a>
		</li>
	);
};
