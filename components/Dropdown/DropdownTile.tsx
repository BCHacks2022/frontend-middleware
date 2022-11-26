export const DropdownTile = ({ title }: { title: string }) => {
  return (
    <li>
      <a href="#" className="block py-2 px-4 bg-primary hover:bg-gray-100">
        {title}
      </a>
    </li>
  );
};
