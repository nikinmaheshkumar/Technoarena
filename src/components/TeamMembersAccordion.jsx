import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const TeamMembersAccordion = ({ members, isTopThree = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!members || members.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full text-left transition-colors duration-200 hover:${isTopThree ? 'text-red-200' : 'text-gray-200'}`}
      >
        <span className={`text-sm font-medium ${isTopThree ? 'text-red-100' : 'text-gray-100'}`}>
          {members.length} member{members.length !== 1 ? 's' : ''}
        </span>
        {isOpen ? (
          <ChevronUpIcon className={`w-4 h-4 ${isTopThree ? 'text-red-300' : 'text-gray-300'}`} />
        ) : (
          <ChevronDownIcon className={`w-4 h-4 ${isTopThree ? 'text-red-300' : 'text-gray-300'}`} />
        )}
      </button>
      
      {isOpen && (
        <div className="mt-2 space-y-1 animate-[fadeIn_0.2s_ease-in-out]">
          {members.map((member, index) => (
            <div 
              key={index} 
              className={`text-sm pl-2 border-l-2 ${isTopThree ? 'text-red-100 border-red-400/30' : 'text-gray-100 border-gray-400/30'}`}
            >
              {member}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamMembersAccordion;