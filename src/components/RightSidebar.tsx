
import { Button } from "@/components/ui/button"

const stories = [
  {
    name: "Anatoly Pr...",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Lolita Earns",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b820?w=80&h=80&fit=crop&crop=face"
  }
]

const suggestions = [
  {
    name: "Nick Shelburne",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
  },
  {
    name: "Brittni Lando",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
  },
  {
    name: "Ivan Shevchenko",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
  }
]

const recommendations = [
  { name: "Music", color: "bg-pink-500", icon: "🎵" },
  { name: "UI/UX", color: "bg-gray-600", icon: "✏️" },
  { name: "Cooking", color: "bg-orange-500", icon: "🍳" },
  { name: "Hiking", color: "bg-purple-500", icon: "⛰️" }
]

export function RightSidebar() {
  return (
    <div className="w-80 bg-gray-900/90 backdrop-blur-md p-6 space-y-6 border-l border-gray-700/50 fixed right-0 top-0 h-screen overflow-hidden z-40">
      {/* Stories Section */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-4">Stories</h3>
        <div className="flex space-x-3">
          {stories.map((story, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-purple-500/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
              <span className="text-white text-xs mt-2 text-center">{story.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Suggestions Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold text-lg">Suggestions</h3>
          <Button variant="ghost" className="text-gray-400 hover:text-white text-sm p-0">
            See all
          </Button>
        </div>
        <div className="space-y-3">
          {suggestions.map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-white font-medium">{user.name}</span>
              </div>
              <Button 
                size="sm" 
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-4 py-1 text-xs"
              >
                Follow
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations Section */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-4">Recommendations</h3>
        <div className="grid grid-cols-2 gap-3">
          {recommendations.map((item, index) => (
            <div
              key={index}
              className={`${item.color} p-4 rounded-2xl text-white text-center hover:scale-105 transition-transform cursor-pointer`}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <span className="font-medium text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
