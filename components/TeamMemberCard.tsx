import React from 'react';
import type { TeamMember } from '../types';

const GOOGLE_COLORS = [
  { bg: 'bg-blue-100', text: 'text-blue-800' },
  { bg: 'bg-red-100', text: 'text-red-800' },
  { bg: 'bg-green-100', text: 'text-green-800' },
  { bg: 'bg-yellow-100', text: 'text-yellow-800' },
];

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-5">
        <div className="flex items-center space-x-4">
          <img className="w-16 h-16 rounded-full" src={member.avatarUrl} alt={`${member.name}'s avatar`} />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-3">{member.expertise}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {member.tags.map((tag, index) => {
             const color = GOOGLE_COLORS[index % GOOGLE_COLORS.length];
            return (
              <span key={tag} className={`inline-block ${color.bg} ${color.text} text-xs font-semibold px-2.5 py-0.5 rounded-full`}>
                {tag}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  );
};