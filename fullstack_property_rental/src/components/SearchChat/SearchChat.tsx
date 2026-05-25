import { useState } from 'react';
import { Search, Bot, User, X, Loader2 } from 'lucide-react';
import { GoogleUser, ChatMessage } from '../../types';
import { searchProperties } from '../../api';

interface Props {
  user: GoogleUser | null;
  onFilter: (ids: number[] | null) => void;
}

const SearchChat = ({ user, onFilter }: Props) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setLoading(true);

    try {
      const result = await searchProperties(userMsg.content, messages);
      setMessages([...updated, { role: 'assistant', content: result.message }]);
      onFilter(result.matchingIds.length > 0 ? result.matchingIds : null);
    } catch {
      setMessages([
        ...updated,
        { role: 'assistant', content: 'Sorry, I had trouble connecting. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([]);
    setInput('');
    onFilter(null);
  };

  return (
    <div className="max-w-2xl mx-auto mb-6 animate-fade-in">
      {!user && (
        <p className="text-center text-sm text-gray-400 mb-2">
          Sign in with Google to use AI property search
        </p>
      )}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && user && handleSearch()}
          placeholder='Ask AI: "2 bed flat under $1000" or "available houses with 3+ bathrooms"'
          disabled={!user}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
        <button
          onClick={handleSearch}
          disabled={!user || loading || !input.trim()}
          className="bg-accent text-white px-4 py-2 rounded-lg hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 text-sm font-medium transition-opacity"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
          {loading ? 'Searching...' : 'Search'}
        </button>
        {messages.length > 0 && (
          <button
            onClick={handleClear}
            className="text-gray-400 hover:text-red-500 transition-colors px-2"
            title="Clear search"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {messages.length > 0 && (
        <div className="mt-3 border border-gray-200 rounded-lg p-4 max-h-52 overflow-y-auto bg-gray-50 animate-fade-in">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-2 mb-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user' ? 'bg-accent' : 'bg-primary'
                }`}
              >
                {msg.role === 'user' ? (
                  <User size={12} className="text-white" />
                ) : (
                  <Bot size={12} className="text-white" />
                )}
              </div>
              <div
                className={`text-sm px-3 py-2 rounded-lg max-w-[80%] ${
                  msg.role === 'user'
                    ? 'bg-accent text-white'
                    : 'bg-white border border-gray-200 text-gray-700'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <Bot size={12} className="text-white" />
              </div>
              <div className="text-sm px-3 py-2 rounded-lg bg-white border border-gray-200 text-gray-400 flex items-center gap-1">
                <Loader2 size={12} className="animate-spin" /> Thinking...
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchChat;
