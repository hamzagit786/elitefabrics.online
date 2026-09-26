import React, { useState } from 'react';
import { Copy, Check, RotateCcw } from 'lucide-react';

interface ToolActionButtonsProps {
  onClear: () => void;
  resultText?: string;
  className?: string;
}

export const ToolActionButtons: React.FC<ToolActionButtonsProps> = ({
  onClear,
  resultText,
  className = ''
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!resultText) return;
    try {
      await navigator.clipboard.writeText(resultText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = resultText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`flex items-center gap-3 pt-4 border-t border-[#E8E2D9] ${className}`}>
      <button
        type="button"
        onClick={handleCopy}
        disabled={!resultText}
        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1C1C1C] hover:bg-[#333333] active:bg-[#000000] text-white text-sm font-semibold rounded-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-xs focus:outline-none focus:ring-2 focus:ring-[#1C1C1C] focus:ring-offset-2"
        title="Copy calculation summary to clipboard"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Copied to Clipboard</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            <span>Copy Result</span>
          </>
        )}
      </button>

      <button
        type="button"
        onClick={onClear}
        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white hover:bg-[#F5F2ED] border border-[#D9D1C5] text-[#3A352E] text-sm font-semibold rounded-md transition-colors shadow-xs focus:outline-none focus:ring-2 focus:ring-[#9E472A] focus:ring-offset-2"
        title="Reset calculator inputs"
      >
        <RotateCcw className="w-3.5 h-3.5 text-[#6B6357]" />
        <span>Clear</span>
      </button>
    </div>
  );
};
