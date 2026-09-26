import React, { useState } from 'react';
import { Copy, Check, Share2, RotateCcw } from 'lucide-react';

interface ToolShareAndCopyProps {
  toolSlug: string;
  resultText?: string;
  onReset?: () => void;
  onClear?: () => void;
  className?: string;
}

export const ToolShareAndCopy: React.FC<ToolShareAndCopyProps> = ({
  toolSlug,
  resultText,
  onReset,
  onClear,
  className = ''
}) => {
  const [copiedResult, setCopiedResult] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleClearOrReset = onClear || onReset;

  const handleCopyResult = async () => {
    if (!resultText) return;
    try {
      await navigator.clipboard.writeText(resultText);
      setCopiedResult(true);
      setTimeout(() => setCopiedResult(false), 2200);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = resultText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedResult(true);
      setTimeout(() => setCopiedResult(false), 2200);
    }
  };

  const handleShareTool = async () => {
    const shareUrl = `https://elitefabrics.online/tools/${toolSlug}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Elite Fabrics Tool',
          text: 'Check out this free fabric calculation tool on Elite Fabrics:',
          url: shareUrl
        });
        return;
      } catch {
        // user cancelled or share failed, fallback to copy
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2200);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = shareUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2200);
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-2.5 pt-4 ${className}`}>
      {resultText && (
        <button
          type="button"
          onClick={handleCopyResult}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-lg transition-all duration-150 bg-[#1C1C1C] text-white hover:bg-[#9E472A] shadow-2xs active:scale-[0.98]"
          title="Copy calculation summary to clipboard"
        >
          {copiedResult ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Result Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Result</span>
            </>
          )}
        </button>
      )}

      {handleClearOrReset && (
        <button
          type="button"
          onClick={handleClearOrReset}
          className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold rounded-lg border border-[#D9D1C5] bg-white text-[#524B40] hover:bg-[#FAF8F5] hover:text-[#1C1C1C] transition-all duration-150 shadow-2xs active:scale-[0.98]"
          title="Clear inputs and reset to default"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Clear</span>
        </button>
      )}

      <button
        type="button"
        onClick={handleShareTool}
        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold rounded-lg border border-[#D9D1C5] bg-white text-[#524B40] hover:bg-[#FAF8F5] hover:text-[#1C1C1C] transition-all duration-150 shadow-2xs active:scale-[0.98]"
        title="Share this tool"
      >
        {copiedShare ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>Link Copied!</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5 text-[#7A7266]" />
            <span>Share</span>
          </>
        )}
      </button>
    </div>
  );
};

