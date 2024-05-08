import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface LinkItemBlockProps {
  IconComponent: ReactNode;
  label: string;
  url: string;
}

export default function LinkItemBlock({ IconComponent, label, url }: LinkItemBlockProps) {
  return (
    <Link to={url} className="flex items-center gap-3  text-white px-8 py-2 rounded-xl">
      <span className="bg-blue-600 rounded-2xl p-2.5">
        {IconComponent}
      </span>
      <span>
        {label}
      </span>
    </Link>
  );
}
