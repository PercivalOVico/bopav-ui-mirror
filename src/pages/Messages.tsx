import { useState } from 'react';
import { AppSidebar } from '@/components/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Search, Filter, Archive, Trash2, Reply, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MainLayout } from "@/components/Layout/MainLayout";

interface Message {
  id: string;
  sender: {
    name: string;
    avatar: string;
    username: string;
  };
  subject: string;
  preview: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  isStarred: boolean;
  category: 'inbox' | 'promotion' | 'archived';
}

const mockMessages: Message[] = [
  {
    id: '1',
    sender: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612d0bd?w=40&h=40&fit=crop&crop=face',
      username: '@sarahw'
    },
    subject: 'New collaboration opportunity',
    preview: 'Hey! I saw your recent post and would love to collaborate...',
    content: 'Hey! I saw your recent post and would love to collaborate on a project. Are you interested in discussing this further?',
    timestamp: '2 hours ago',
    isRead: false,
    isStarred: true,
    category: 'inbox'
  },
  {
    id: '2',
    sender: {
      name: 'Marketing Team',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face',
      username: '@marketing'
    },
    subject: 'Special promotion just for you!',
    preview: 'Don\'t miss out on our limited time offer...',
    content: 'Don\'t miss out on our limited time offer. Get 50% off premium features for the next 7 days!',
    timestamp: '5 hours ago',
    isRead: true,
    isStarred: false,
    category: 'promotion'
  },
  {
    id: '3',
    sender: {
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      username: '@alexj'
    },
    subject: 'Great post!',
    preview: 'Really enjoyed your latest post about...',
    content: 'Really enjoyed your latest post about business networking. Your insights were very valuable!',
    timestamp: '1 day ago',
    isRead: true,
    isStarred: false,
    category: 'inbox'
  }
];

const Messages = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'unread' | 'read' | 'promotions'>('all');
  const [replyText, setReplyText] = useState('');

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         message.sender.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         message.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    switch (activeFilter) {
      case 'unread':
        return matchesSearch && !message.isRead;
      case 'read':
        return matchesSearch && message.isRead;
      case 'promotions':
        return matchesSearch && message.category === 'promotion';
      default:
        return matchesSearch && message.category !== 'archived';
    }
  });

  const handleDeleteMessage = (messageId: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
    if (selectedMessage?.id === messageId) {
      setSelectedMessage(null);
    }
  };

  const handleArchiveMessage = (messageId: string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, category: 'archived' as const } : msg
    ));
    if (selectedMessage?.id === messageId) {
      setSelectedMessage(null);
    }
  };

  const handleStarMessage = (messageId: string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, isStarred: !msg.isStarred } : msg
    ));
    if (selectedMessage?.id === messageId) {
      setSelectedMessage({ ...selectedMessage, isStarred: !selectedMessage.isStarred });
    }
  };

  const handleMarkAsRead = (messageId: string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, isRead: true } : msg
    ));
    if (selectedMessage?.id === messageId) {
      setSelectedMessage({ ...selectedMessage, isRead: true });
    }
  };

  const handleSelectMessage = (message: Message) => {
    setSelectedMessage(message);
    if (!message.isRead) {
      handleMarkAsRead(message.id);
    }
  };

  const handleSendReply = () => {
    if (replyText.trim() && selectedMessage) {
      console.log('Sending reply:', replyText);
      setReplyText('');
    }
  };

  return (
    <MainLayout>
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Messages</h1>
          <p className="text-gray-400">Chat with your friends and connections</p>
        </div>

        {/* Chat Interface */}
        <div className="flex-1 bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700/50 overflow-hidden">
          {/* Messages List */}
          <div className="w-1/3 border-r border-gray-700/50 bg-gray-900/50">
            {/* Header */}
            <div className="p-6 border-b border-gray-700/30">
              <h1 className="text-2xl font-bold text-white mb-4">Messages</h1>
              
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search messages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-2">
                <Button
                  variant={activeFilter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter('all')}
                  className={activeFilter === 'all' ? 'bg-purple-600 hover:bg-purple-700' : 'border-gray-700 text-gray-300 hover:bg-gray-800'}
                >
                  All
                </Button>
                <Button
                  variant={activeFilter === 'unread' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter('unread')}
                  className={activeFilter === 'unread' ? 'bg-purple-600 hover:bg-purple-700' : 'border-gray-700 text-gray-300 hover:bg-gray-800'}
                >
                  Unread
                </Button>
                <Button
                  variant={activeFilter === 'read' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter('read')}
                  className={activeFilter === 'read' ? 'bg-purple-600 hover:bg-purple-700' : 'border-gray-700 text-gray-300 hover:bg-gray-800'}
                >
                  Read
                </Button>
                <Button
                  variant={activeFilter === 'promotions' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter('promotions')}
                  className={activeFilter === 'promotions' ? 'bg-purple-600 hover:bg-purple-700' : 'border-gray-700 text-gray-300 hover:bg-gray-800'}
                >
                  Promotions
                </Button>
              </div>
            </div>

            {/* Messages List */}
            <div className="overflow-y-auto h-[calc(100vh-200px)]">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => handleSelectMessage(message)}
                  className={`p-4 border-b border-gray-700/30 cursor-pointer transition-colors ${
                    selectedMessage?.id === message.id 
                      ? 'bg-purple-600/20' 
                      : 'hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={message.sender.avatar}
                      alt={message.sender.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <h3 className={`font-semibold ${!message.isRead ? 'text-white' : 'text-gray-300'}`}>
                            {message.sender.name}
                          </h3>
                          {message.isStarred && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                          {!message.isRead && <div className="w-2 h-2 bg-purple-500 rounded-full"></div>}
                        </div>
                        <span className="text-xs text-gray-400">{message.timestamp}</span>
                      </div>
                      <p className={`text-sm ${!message.isRead ? 'text-white' : 'text-gray-400'} mb-1`}>
                        {message.subject}
                      </p>
                      <p className="text-xs text-gray-500 truncate">{message.preview}</p>
                      {message.category === 'promotion' && (
                        <Badge variant="secondary" className="mt-2 text-xs bg-blue-600/20 text-blue-400">
                          Promotion
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Content */}
          <div className="flex-1 flex flex-col">
            {selectedMessage ? (
              <>
                {/* Message Header */}
                <div className="p-6 border-b border-gray-700/30 bg-gray-900/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={selectedMessage.sender.avatar}
                        alt={selectedMessage.sender.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h2 className="text-xl font-bold text-white">{selectedMessage.sender.name}</h2>
                        <p className="text-gray-400">{selectedMessage.sender.username}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleStarMessage(selectedMessage.id)}
                        className="text-gray-400 hover:text-yellow-500"
                      >
                        <Star className={`h-5 w-5 ${selectedMessage.isStarred ? 'fill-current text-yellow-500' : ''}`} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleArchiveMessage(selectedMessage.id)}
                        className="text-gray-400 hover:text-blue-400"
                      >
                        <Archive className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteMessage(selectedMessage.id)}
                        className="text-gray-400 hover:text-red-400"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{selectedMessage.subject}</h3>
                  <p className="text-gray-400 text-sm">{selectedMessage.timestamp}</p>
                </div>

                {/* Message Content */}
                <div className="flex-1 p-6 bg-gray-950/50">
                  <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                    <p className="text-gray-300 leading-relaxed">{selectedMessage.content}</p>
                  </div>

                  {/* Reply Section */}
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Reply className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">Reply to {selectedMessage.sender.name}</span>
                    </div>
                    <div className="flex gap-3">
                      <Input
                        placeholder="Type your reply..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        className="flex-1 bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400"
                        onKeyPress={(e) => e.key === 'Enter' && handleSendReply()}
                      />
                      <Button
                        onClick={handleSendReply}
                        disabled={!replyText.trim()}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Select a message</h3>
                  <p className="text-gray-400">Choose a message from the sidebar to view it here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Messages;
