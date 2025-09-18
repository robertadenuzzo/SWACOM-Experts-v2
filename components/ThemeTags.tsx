import React from 'react';
import { ChartBarIcon } from './icons/ChartBarIcon';
import { CurrencyDollarIcon } from './icons/CurrencyDollarIcon';
import { LightBulbIcon } from './icons/LightBulbIcon';
import { MegaphoneIcon } from './icons/MegaphoneIcon';
import { SparklesIcon } from './icons/SparklesIcon';
import { UsersIcon } from './icons/UsersIcon';
import { VideoCameraIcon } from './icons/VideoCameraIcon';
import { MagnifyingGlassIcon } from './icons/MagnifyingGlassIcon';


const GOOGLE_COLORS = [
  { text: 'text-blue-600', bg: 'bg-blue-50', hoverBg: 'hover:bg-blue-100', ring: 'ring-blue-500' },
  { text: 'text-red-600', bg: 'bg-red-50', hoverBg: 'hover:bg-red-100', ring: 'ring-red-500' },
  { text: 'text-green-600', bg: 'bg-green-50', hoverBg: 'hover:bg-green-100', ring: 'ring-green-500' },
  { text: 'text-yellow-600', bg: 'bg-yellow-50', hoverBg: 'hover:bg-yellow-100', ring: 'ring-yellow-500' },
];

const getIconForTag = (tag: string) => {
  switch (tag.toLowerCase()) {
    case 'youtube': return <VideoCameraIcon className="h-8 w-8 mb-2" />;
    case 'pmax': return <ChartBarIcon className="h-8 w-8 mb-2" />;
    case 'sales': return <CurrencyDollarIcon className="h-8 w-8 mb-2" />;
    case 'demand gen': return <MegaphoneIcon className="h-8 w-8 mb-2" />;
    case 'google ads': return <UsersIcon className="h-8 w-8 mb-2" />;
    case 'storytelling': return <LightBulbIcon className="h-8 w-8 mb-2" />;
    case 'discovery': return <MagnifyingGlassIcon className="h-8 w-8 mb-2" />;
    case 'optimization': return <SparklesIcon className="h-8 w-8 mb-2" />;
    default: return null;
  }
};


interface ThemeTagsProps {
  tags: string[];
  selectedTag: string | null;
  onTagClick: (tag: string) => void;
}

export const ThemeTags: React.FC<ThemeTagsProps> = ({ tags, selectedTag, onTagClick }) => {
  return (
    <div className="text-center">
      <h2 className="text-sm font-medium text-gray-500 mb-6">Or explore by theme</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
        {tags.map((tag, index) => {
          const color = GOOGLE_COLORS[index % GOOGLE_COLORS.length];
          const isSelected = selectedTag === tag;

          return (
            <button
              key={tag}
              onClick={() => onTagClick(tag)}
              className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-200 transform hover:-translate-y-1 shadow-sm hover:shadow-lg focus:outline-none ${
                isSelected
                  ? `${color.bg} ${color.text} ring-2 ring-offset-2 ${color.ring}`
                  : `bg-white ${color.text} ${color.hoverBg}`
              }`}
            >
              {getIconForTag(tag)}
              <span className="font-bold text-md">{tag}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};