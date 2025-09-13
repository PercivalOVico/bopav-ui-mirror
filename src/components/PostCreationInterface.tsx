
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Smile, MapPin, Image as ImageIcon, Video, Send } from 'lucide-react';
import { InteractiveButton } from '@/components/enhanced/InteractiveButton';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface PostCreationInterfaceProps {
  onPost: (content: string) => void;
}

export const PostCreationInterface = React.memo(({ onPost }: PostCreationInterfaceProps) => {
  const [postContent, setPostContent] = useState('');

  const handlePost = useCallback(() => {
    if (postContent.trim()) {
      onPost(postContent);
      setPostContent('');
    }
  }, [postContent, onPost]);

  return (
    <motion.div 
      className="bg-card/80 backdrop-blur-md rounded-2xl p-4 border border-border/50 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-start space-x-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face" />
          <AvatarFallback className="bg-primary text-primary-foreground">U</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="relative">
            <Input
              placeholder="Share something amazing..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary rounded-full pr-12 backdrop-blur-sm transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-2">
              {[
                { icon: ImageIcon, color: "text-blue-500" },
                { icon: Video, color: "text-red-500" },
                { icon: MapPin, color: "text-green-500" },
                { icon: Smile, color: "text-yellow-500" }
              ].map(({ icon: Icon, color }, index) => (
                <motion.button
                  key={index}
                  className={`${color} hover:bg-accent/50 p-2 rounded-full transition-colors duration-200`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.button>
              ))}
            </div>
            <InteractiveButton
              onClick={handlePost}
              disabled={!postContent.trim()}
              glowEffect
              className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4 mr-2" />
              Send
            </InteractiveButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

PostCreationInterface.displayName = 'PostCreationInterface';
