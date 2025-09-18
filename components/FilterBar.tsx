import React from 'react';
import SearchBar from './SearchBar';

interface FilterBarProps {
  nameQuery: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  expertiseQuery: string;
  onExpertiseChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  nameQuery,
  onNameChange,
  expertiseQuery,
  onExpertiseChange,
}) => {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      <SearchBar
        value={nameQuery}
        onChange={onNameChange}
        placeholder="Search by Name..."
      />
      <SearchBar
        value={expertiseQuery}
        onChange={onExpertiseChange}
        placeholder="Search by Expertise or Skill..."
      />
    </div>
  );
};