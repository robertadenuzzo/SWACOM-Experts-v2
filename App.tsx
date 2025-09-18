import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { TeamMemberCard } from './components/TeamMemberCard';
import { ThemeTags } from './components/ThemeTags';
import { TEAM_DATA } from './constants/teamData';

const App: React.FC = () => {
  const [nameQuery, setNameQuery] = useState('');
  const [expertiseQuery, setExpertiseQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    TEAM_DATA.forEach(member => {
      member.tags.forEach(tag => tags.add(tag));
    });
    // A curated list for better presentation
    const popularTags = ['YouTube', 'PMax', 'Sales', 'Demand Gen', 'Google Ads', 'Storytelling', 'Discovery', 'Optimization'];
    return popularTags.filter(tag => tags.has(tag));
  }, []);

  const isSearching = nameQuery.trim() !== '' || expertiseQuery.trim() !== '' || selectedTag !== null;

  const filteredTeam = useMemo(() => {
    if (!isSearching) return [];
    
    return TEAM_DATA.filter(member => {
      const nameMatch = nameQuery.trim() === '' || 
                        member.name.toLowerCase().includes(nameQuery.toLowerCase());

      const expertiseMatch = expertiseQuery.trim() === '' ||
                             member.expertise.toLowerCase().includes(expertiseQuery.toLowerCase()) ||
                             member.tags.some(tag => tag.toLowerCase().includes(expertiseQuery.toLowerCase()));

      const tagMatch = !selectedTag || member.tags.includes(selectedTag);

      return nameMatch && expertiseMatch && tagMatch;
    });
  }, [nameQuery, expertiseQuery, selectedTag, isSearching]);

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
      setExpertiseQuery(''); // clear expertise query when a tag is selected
      setNameQuery(''); // also clear name query
    }
  };

  return (
    <div className="min-h-screen font-sans flex flex-col">
      <main className={`container mx-auto px-4 py-8 flex-grow flex flex-col ${!isSearching ? 'justify-center' : ''}`}>
        <div className="w-full max-w-5xl mx-auto">
          <Header />
          <div className="space-y-8">
            <FilterBar
              nameQuery={nameQuery}
              onNameChange={(e) => {
                setNameQuery(e.target.value);
                if (selectedTag) setSelectedTag(null);
              }}
              expertiseQuery={expertiseQuery}
              onExpertiseChange={(e) => {
                setExpertiseQuery(e.target.value);
                if (selectedTag) setSelectedTag(null);
              }}
            />
            <ThemeTags 
              tags={allTags}
              selectedTag={selectedTag}
              onTagClick={handleTagClick}
            />
          </div>
        </div>
        
        {isSearching && (
          <div className="mt-12 animate-fadeIn">
            {filteredTeam.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredTeam.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                <h2 className="text-2xl font-semibold">No experts found</h2>
                <p>Try adjusting your search or selecting a different skill.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
