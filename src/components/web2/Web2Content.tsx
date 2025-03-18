
import React, { useState } from 'react';
import { ThumbsUp, MessageCircle, Share2, Bookmark, Heart } from 'lucide-react';

const Web2Content = () => {
  const [likes, setLikes] = useState({ post1: 157, post2: 89, post3: 243 });
  const [comments, setComments] = useState({ post1: [], post2: [], post3: [] });
  const [commentText, setCommentText] = useState('');
  const [bookmarked, setBookmarked] = useState({ post1: false, post2: false, post3: false });
  const [liked, setLiked] = useState({ post1: false, post2: false, post3: false });

  const handleLike = (post: 'post1' | 'post2' | 'post3') => {
    setLiked((prev) => {
      const newState = { ...prev, [post]: !prev[post] };
      setLikes((prevLikes) => ({
        ...prevLikes,
        [post]: prevLikes[post] + (newState[post] ? 1 : -1),
      }));
      return newState;
    });
  };

  const handleBookmark = (post: 'post1' | 'post2' | 'post3') => {
    setBookmarked((prev) => ({ ...prev, [post]: !prev[post] }));
  };

  const handleAddComment = (post: 'post1' | 'post2' | 'post3', e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments((prev) => ({
        ...prev,
        [post]: [...prev[post], { text: commentText, author: 'You', timestamp: new Date().toLocaleTimeString() }],
      }));
      setCommentText('');
    }
  };

  return (
    <div className="bg-web2-gray min-h-screen pb-12">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Content */}
          <div className="md:w-2/3 space-y-6">
            {/* Featured Post */}
            <div className="web2-card">
              <h2 className="text-2xl font-bold text-web2-dark mb-4">Welcome to Web 2.0!</h2>
              <p className="text-gray-700 mb-4">
                Web 2.0 transformed the internet from static pages to interactive experiences. 
                Users became creators, not just consumers, with features like comments, likes, 
                and social sharing becoming standard.
              </p>
              <div className="bg-web2-gray rounded-lg p-4 mb-4">
                <p className="text-gray-700">
                  <strong>Key Web 2.0 features:</strong>
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>User-generated content and social interactions</li>
                  <li>Dynamic pages with AJAX technology</li>
                  <li>Rounded corners, gradients, and reflections</li>
                  <li>Web applications replacing desktop software</li>
                  <li>Mobile-responsive designs</li>
                </ul>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                <div className="flex space-x-4">
                  <button 
                    className={`flex items-center space-x-1 ${liked.post1 ? 'text-blue-500' : 'text-gray-500'}`}
                    onClick={() => handleLike('post1')}
                  >
                    <ThumbsUp className="h-5 w-5" />
                    <span>{likes.post1}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500">
                    <MessageCircle className="h-5 w-5" />
                    <span>{comments.post1.length}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
                <button 
                  className={`${bookmarked.post1 ? 'text-yellow-500' : 'text-gray-500'}`}
                  onClick={() => handleBookmark('post1')}
                >
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-4">
                <form onSubmit={(e) => handleAddComment('post1', e)} className="flex">
                  <input
                    type="text"
                    className="web2-input flex-grow"
                    placeholder="Write a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                  <button type="submit" className="web2-button ml-2">
                    Comment
                  </button>
                </form>
                <div className="mt-3 space-y-2">
                  {comments.post1.map((comment, index) => (
                    <div key={index} className="bg-gray-100 p-2 rounded">
                      <div className="flex justify-between text-sm">
                        <span className="font-bold">{comment.author}</span>
                        <span className="text-gray-500">{comment.timestamp}</span>
                      </div>
                      <p>{comment.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Posts */}
            <div className="web2-card">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-web2-blue flex items-center justify-center text-white font-bold">
                  JS
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Jane Smith</p>
                  <p className="text-sm text-gray-500">Posted 2 hours ago</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Just tried this amazing new JavaScript framework! It's so much faster and easier to use than the old ones. 
                #WebDev #JavaScript #Web2point0
              </p>
              <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                <div className="flex space-x-4">
                  <button 
                    className={`flex items-center space-x-1 ${liked.post2 ? 'text-blue-500' : 'text-gray-500'}`}
                    onClick={() => handleLike('post2')}
                  >
                    <ThumbsUp className="h-5 w-5" />
                    <span>{likes.post2}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500">
                    <MessageCircle className="h-5 w-5" />
                    <span>{comments.post2.length}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
                <button 
                  className={`${bookmarked.post2 ? 'text-yellow-500' : 'text-gray-500'}`}
                  onClick={() => handleBookmark('post2')}
                >
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="web2-card">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-web2-green flex items-center justify-center text-white font-bold">
                  MT
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Mark Thompson</p>
                  <p className="text-sm text-gray-500">Posted yesterday</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Just launched our new responsive website! It works perfectly on desktop, tablets, and mobile phones.
                Check it out and let me know what you think in the comments below!
              </p>
              <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                <div className="flex space-x-4">
                  <button 
                    className={`flex items-center space-x-1 ${liked.post3 ? 'text-blue-500' : 'text-gray-500'}`}
                    onClick={() => handleLike('post3')}
                  >
                    <ThumbsUp className="h-5 w-5" />
                    <span>{likes.post3}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500">
                    <MessageCircle className="h-5 w-5" />
                    <span>{comments.post3.length}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
                <button 
                  className={`${bookmarked.post3 ? 'text-yellow-500' : 'text-gray-500'}`}
                  onClick={() => handleBookmark('post3')}
                >
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-1/3 space-y-6">
            <div className="web2-card">
              <h3 className="text-lg font-bold text-web2-dark mb-3">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-web2-blue text-white rounded-full text-sm">#WebDesign</span>
                <span className="px-3 py-1 bg-web2-green text-white rounded-full text-sm">#JavaScript</span>
                <span className="px-3 py-1 bg-web2-red text-white rounded-full text-sm">#CSS3</span>
                <span className="px-3 py-1 bg-web2-yellow text-white rounded-full text-sm">#Responsive</span>
                <span className="px-3 py-1 bg-web2-blue text-white rounded-full text-sm">#UX</span>
                <span className="px-3 py-1 bg-web2-green text-white rounded-full text-sm">#SocialMedia</span>
                <span className="px-3 py-1 bg-web2-red text-white rounded-full text-sm">#Content</span>
              </div>
            </div>

            <div className="web2-card">
              <h3 className="text-lg font-bold text-web2-dark mb-3">Trending Topics</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-web2-blue mr-2"></div>
                  <span className="text-gray-700">AJAX and Dynamic Content Loading</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-web2-green mr-2"></div>
                  <span className="text-gray-700">Responsive Design Principles</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-web2-red mr-2"></div>
                  <span className="text-gray-700">Social Media Integration</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-web2-yellow mr-2"></div>
                  <span className="text-gray-700">User-Generated Content</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-web2-dark mr-2"></div>
                  <span className="text-gray-700">Web Applications vs Desktop Software</span>
                </li>
              </ul>
            </div>

            <div className="web2-card">
              <h3 className="text-lg font-bold text-web2-dark mb-3">Friends Online</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-web2-blue flex items-center justify-center text-white text-sm font-bold">
                    JD
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-semibold">John Doe</p>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                      <p className="text-xs text-gray-500">Online</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-web2-green flex items-center justify-center text-white text-sm font-bold">
                    AS
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-semibold">Alice Smith</p>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                      <p className="text-xs text-gray-500">Online</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-web2-red flex items-center justify-center text-white text-sm font-bold">
                    RJ
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-semibold">Robert Johnson</p>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-gray-400 mr-1"></div>
                      <p className="text-xs text-gray-500">Offline</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web2Content;
