import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { STORIES, SUGGESTIONS, RECOMMENDATIONS } from "@/data/constants";

export const RightSidebar = React.memo(() => {
  return (
    <motion.div 
      className="w-80 bg-sidebar/90 backdrop-blur-md p-6 space-y-6 border-l border-sidebar-border fixed right-0 top-0 h-screen overflow-hidden z-40 rounded-none"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      {/* Header with theme toggle */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-heading font-semibold text-sidebar-foreground">
          Activity
        </h2>
        <ThemeToggle />
      </div>

      {/* Stories Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <h3 className="text-sidebar-foreground font-heading font-semibold text-lg mb-4">Stories</h3>
        <div className="flex space-x-3">
          {STORIES.map((story, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-primary/50 group-hover:border-primary transition-colors" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
              <span className="text-sidebar-foreground text-xs mt-2 text-center">{story.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Suggestions Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sidebar-foreground font-heading font-semibold text-lg">Suggestions</h3>
          <Button variant="ghost" className="text-muted-foreground hover:text-sidebar-foreground text-sm p-0">
            See all
          </Button>
        </div>
        <div className="space-y-3">
          {SUGGESTIONS.map((user, index) => (
            <motion.div 
              key={index} 
              className="flex items-center justify-between group"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
            >
              <div className="flex items-center space-x-3">
                <img 
                  src={user.image} 
                  alt={user.name} 
                  className="w-10 h-10 rounded-full object-cover group-hover:scale-105 transition-transform" 
                />
                <span className="text-sidebar-foreground font-medium">{user.name}</span>
              </div>
              <Button 
                size="sm" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-4 py-1 text-xs transition-all hover:scale-105"
              >
                Follow
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recommendations Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        <h3 className="text-sidebar-foreground font-heading font-semibold text-lg mb-4">Recommendations</h3>
        <div className="grid grid-cols-2 gap-3">
          {RECOMMENDATIONS.map((item, index) => (
            <motion.div 
              key={index} 
              className={`${item.color} p-4 rounded-2xl text-white text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <span className="font-medium text-sm">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
});

RightSidebar.displayName = 'RightSidebar';