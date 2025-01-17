import { useState } from 'react';

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

const useFeature = () => {
  const [activeSuggestion, setActiveSuggestion] = useState('All');
  const [suggestions, setSuggestions] = useState(SUGGESTIONS);
  const [sortBy, setSortBy] = useState<string>('upvotes');

  const handleFilterSuggestions = (feature: string) => {
    console.log("filter:", feature)
    setActiveSuggestion(feature);
    if (feature === 'All') {
      setSuggestions(SUGGESTIONS);
      return;
    }
    setSuggestions(
      SUGGESTIONS.filter((suggestion) => suggestion.tag === feature)
    );
    console.log("suggestion:", suggestions)
  };

  const handleSortSuggestions = (sortOption: string) => {
    setSortBy(sortOption);
    let sortedSuggestions = [...suggestions];

    switch (sortOption) {
      case 'upvotes':
        sortedSuggestions = sortedSuggestions.sort(
          (a, b) => b.upvotes - a.upvotes
        );
        break;
      case 'downvotes':
        sortedSuggestions = sortedSuggestions.sort(
          (a, b) => a.upvotes - b.upvotes
        );
        break;
      case 'comments':
        sortedSuggestions = sortedSuggestions.sort(
          (a, b) => b.comments - a.comments
        );
        break;
      case 'least_comments':
        sortedSuggestions = sortedSuggestions.sort(
          (a, b) => a.comments - b.comments
        );
        break;
      default:
        break;
    }

    setSuggestions(sortedSuggestions);
  };

  return {
    features: FEATURES,
    suggestions,
    handleFilterSuggestions,
    handleSortSuggestions,
    activeSuggestion,
    sortBy,
    activeSort: sortBy,
  };
};

export default useFeature;
