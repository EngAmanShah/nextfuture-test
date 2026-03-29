"use client";

import { useState, useEffect } from "react";

export default function ArticlePageClient({ article, lang }) {
  const [isVisible, setIsVisible] = useState(false);
  const isRTL = lang === "ar";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!article) return null;

  return (
    <div 
      className="min-h-screen bg-white" 
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-white font-semibold text-sm">B</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-4xl">
        
        {/* Article Header */}
        <div className={`mb-6 sm:mb-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-center mb-4 sm:mb-6">
            <h1 className={`text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              {article.title}
            </h1>
            
            <div className="w-16 h-1 bg-gray-300 mx-auto"></div>
          </div>
        </div>

        {/* Featured Image */}
        {article.image && (
          <div className={`mb-6 sm:mb-8 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-full">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg"
                loading="lazy"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className={`transition-all duration-500 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div
            dangerouslySetInnerHTML={{ __html: article.description }}
            className={`
              prose 
              prose-sm 
              sm:prose-base 
              md:prose-lg 
              max-w-none 
              ${isRTL ? 'prose-headings:text-right prose-p:text-right prose-li:text-right prose-blockquote:text-right' : ''}
              prose-headings:text-gray-900 
              prose-headings:font-semibold
              prose-p:text-gray-700 
              prose-p:leading-relaxed
              prose-p:mb-4
              prose-a:text-blue-600 
              hover:prose-a:text-blue-700
              prose-blockquote:border-l-2 
              prose-blockquote:border-gray-300 
              prose-blockquote:bg-gray-50 
              prose-blockquote:px-4 
              sm:prose-blockquote:px-6
              prose-blockquote:py-2
              prose-img:rounded-lg
              prose-img:w-full
              prose-img:h-auto
              prose-table:w-full
              prose-table:overflow-x-auto
              ${isRTL ? 
                'prose-blockquote:border-l-0 prose-blockquote:border-r-2 prose-blockquote:border-r-gray-300' : 
                ''
              }
            `}
            style={{
              textAlign: isRTL ? 'right' : 'left',
              direction: isRTL ? 'rtl' : 'ltr'
            }}
          />
        </div>

        {/* Article Meta */}
        <div className={`mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-between items-center">
            {/* Optional: Add back metadata if needed */}
          </div>
        </div>

        {/* Related Topics */}
        <div className={`mt-6 sm:mt-8 transition-all duration-500 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : 'justify-start'}`}>
            {['Professional', 'Development', 'Insights'].map((topic) => (
              <span 
                key={topic}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}