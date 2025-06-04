
export const generateSamplePosts = (startId: number, count: number) => {
  const businesses = [
    {
      name: 'TechFlow Solutions',
      avatar: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&crop=face',
      content: 'Revolutionizing workflow automation for modern businesses.',
    },
    {
      name: 'Creative Marketing Co',
      avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face',
      content: 'Behind the scenes of our latest campaign!',
    },
    {
      name: 'DataViz Analytics',
      avatar: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop&crop=face',
      content: 'The power of data visualization in action.',
    },
    {
      name: 'DevCode Studios',
      avatar: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop&crop=face',
      content: 'Clean code is not just about syntax.',
    },
    {
      name: 'Future Events Hub',
      avatar: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=100&h=100&fit=crop&crop=face',
      content: 'Connecting businesses through immersive virtual experiences.',
    },
    {
      name: 'InnovateXR',
      avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face',
      content: 'The future is here! Our AR/VR solutions are transforming businesses.',
    }
  ];

  const mediaItems = [
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&fit=crop',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&fit=crop',
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&fit=crop',
    'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&fit=crop',
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&fit=crop',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&fit=crop',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&fit=crop'
  ];

  return Array.from({ length: count }, (_, i) => {
    const businessIndex = (startId + i) % businesses.length;
    const business = businesses[businessIndex];
    
    // Generate 1-4 media items per post
    const mediaCount = Math.floor(Math.random() * 4) + 1;
    const media = Array.from({ length: mediaCount }, (_, mediaIndex) => {
      const itemIndex = (startId + i + mediaIndex) % mediaItems.length;
      return {
        url: mediaItems[itemIndex],
        type: Math.random() > 0.3 ? 'image' : 'video'
      };
    });
    
    return {
      id: (startId + i).toString(),
      businessName: business.name,
      businessAvatar: business.avatar,
      content: business.content,
      media: media,
      likes: Math.floor(Math.random() * 300) + 50,
      comments: Math.floor(Math.random() * 50) + 5,
      timeAgo: `${Math.floor(Math.random() * 24) + 1} hours ago`,
      height: Math.floor(Math.random() * 200) + 250
    };
  });
};
