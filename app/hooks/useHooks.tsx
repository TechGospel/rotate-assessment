'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

const SUGGESTIONS = [
  {
    title: 'Add tags for solutions',
    description: 'Easier to search for solutions based on a specific stack.',
    tag: 'Enhancement',
    comments: 2,
    upvotes: 112,
  },
  {
    title: 'Add a dark theme option',
    description:
      'It would help people with light sensitivities and who prefer dark mode.',
    tag: 'Feature',
    comments: 4,
    upvotes: 99,
  },
  {
    title: 'Q&A within the challenge hubs',
    description: 'Challenge-specific Q&A would make for easy reference.',
    tag: 'Feature',
    comments: 1,
    upvotes: 65,
  },
  {
    title: 'Allow image/video upload to feedback',
    description: 'Images and screencasts can enhance comments on solutions.',
    tag: 'Enhancement',
    comments: 2,
    upvotes: 51,
  },
  {
    title: 'Ability to follow others',
    description: 'Stay updated on comments and solutions other people post.',
    tag: 'Feature',
    comments: 3,
    upvotes: 42,
  },
  {
    title: 'Preview images not loading',
    description:
      'Challenge preview images are missing when you apply a filter.',
    tag: 'Bug',
    comments: 0,
    upvotes: 3,
  },
];

const FEATURES = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

type FeatureContextType = {
  features: string[];
  suggestions: typeof SUGGESTIONS;
  handleFilterSuggestions: (feature: string) => void;
  handleSortSuggestions: (sortOption: string) => void;
  activeSuggestion: string;
  sortBy: string;
};

const FeatureContext = createContext<FeatureContextType | undefined>(undefined);

export const FeatureProvider = ({ children }: { children: ReactNode }) => {
  const [activeSuggestion, setActiveSuggestion] = useState('All');
  const [suggestions, setSuggestions] = useState(SUGGESTIONS);
  const [sortBy, setSortBy] = useState<string>('upvotes');

  const handleFilterSuggestions = (feature: string) => {
    setActiveSuggestion(feature);
    if (feature === 'All') {
      setSuggestions(SUGGESTIONS);
      return;
    }
    setSuggestions(SUGGESTIONS.filter((suggestion) => suggestion.tag === feature));
  };

  const handleSortSuggestions = (sortOption: string) => {
    setSortBy(sortOption);
    let sortedSuggestions = [...suggestions];

    switch (sortOption) {
      case 'most-upvotes':
        sortedSuggestions.sort((a, b) => b.upvotes - a.upvotes);
        break;
      case 'least-upvotes':
        sortedSuggestions.sort((a, b) => a.upvotes - b.upvotes);
        break;
      case 'most-comments':
        sortedSuggestions.sort((a, b) => b.comments - a.comments);
        break;
      case 'least-comments':
        sortedSuggestions.sort((a, b) => a.comments - b.comments);
        break;
      default:
        break;
    }

    setSuggestions(sortedSuggestions);
  };

  return (
    <FeatureContext.Provider
      value={{
        features: FEATURES,
        suggestions,
        handleFilterSuggestions,
        handleSortSuggestions,
        activeSuggestion,
        sortBy,
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
};

export const useFeature = () => {
  const context = useContext(FeatureContext);
  if (!context) {
    throw new Error('useFeature must be used within a FeatureProvider');
  }
  return context;
};
