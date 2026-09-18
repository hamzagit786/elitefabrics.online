import React from 'react';
import { X, Bookmark, Trash2, ArrowRight, Layers, BookOpen } from 'lucide-react';

export interface SavedItem {
  id: string;
  title: string;
  type: 'fabric' | 'article';
  slug: string;
}

interface SavedArticlesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedItems: SavedItem[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const SavedArticlesDrawer: React.FC<SavedArticlesDrawerProps> = ({
  isOpen,
  onClose,
  savedItems,
  onRemoveItem,
  onClearAll,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const handleItemClick = (item: SavedItem) => {
    if (item.type === 'fabric') onNavigate('fabric', item.slug);
    else onNavigate('article', item.slug);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-2xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#E6E0D7] shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#E6E0D7] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-[#9E472A]" />
              <div>
                <h3 className="font-serif-heading font-bold text-lg text-[#1C1C1C]">
                  My Reading List ({savedItems.length})
                </h3>
                <p className="text-[11px] text-[#7A7265]">Saved offline in your browser</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#8C8478] hover:text-[#1C1C1C] rounded-md"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="p-5 flex-1 overflow-y-auto space-y-3">
            {savedItems.length === 0 ? (
              <div className="text-center py-16 space-y-3 text-[#7A7265]">
                <Bookmark className="w-10 h-10 mx-auto text-[#D5CDBC]" />
                <p className="font-serif-heading text-base font-bold text-[#1C1C1C]">Your reading list is empty</p>
                <p className="text-xs max-w-xs mx-auto">
                  Click the "Save Fabric" or "Save Article" bookmark button on any profile to review it later.
                </p>
              </div>
            ) : (
              savedItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#E6E0D7] rounded-xl p-4 flex items-start justify-between gap-3 hover:border-[#9E472A]/50 transition-colors group"
                >
                  <div 
                    onClick={() => handleItemClick(item)}
                    className="flex-1 cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#9E472A] mb-1">
                      {item.type === 'fabric' ? <Layers className="w-3 h-3" /> : <BookOpen className="w-3 h-3" />}
                      {item.type}
                    </span>
                    <h4 className="font-serif-heading font-bold text-sm text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors leading-snug">
                      {item.title}
                    </h4>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-[#A39B8E] hover:text-[#9E3535] p-1.5 rounded transition-colors"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {savedItems.length > 0 && (
            <div className="p-4 bg-white border-t border-[#E6E0D7] flex items-center justify-between text-xs">
              <button
                onClick={onClearAll}
                className="text-[#9E3535] hover:underline font-medium"
              >
                Clear All
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#1C1C1C] text-white rounded font-medium hover:bg-[#333333]"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
