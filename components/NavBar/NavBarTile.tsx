import { useRouter } from 'next/router'
import { useEffect } from 'react';
export const NavBarTile = ({ text, link }: { text: string; link: string }) => {
	const router = useRouter()

	return (
		<li>
			<a
				href={link}
				className={(router.pathname.toLocaleLowerCase().localeCompare(link.toLocaleLowerCase()) != 0) ? "block rounded hover:bg-transparent p-0 pt-0 md:hover:text-white text-gray-400 hover:text-white border-gray-700" : "block rounded hover:bg-transparent p-0 pt-0 md:hover:text-white hover:text-white border-gray-700 text-white"}
			>
				{text}
			</a>
		</li >
	);
};
