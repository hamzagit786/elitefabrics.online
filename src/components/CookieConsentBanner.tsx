import React, { useState, useEffect } from 'react';
import { Cookie, X, ShieldCheck } from 'lucide-react';

interface CookieConsentBannerProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onNavigate }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consentGiven = localStorage.getItem('elite_fabrics_cookie_consent');
      if (!consentGiven) {
        setVisible(true);
      }
    } catch (e) {
      // In case localStorage is blocked
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('elite_fabrics_cookie_consent', 'accepted');
    } catch (e) {}
    setVisible(false);
  };

  const handleDismiss = () => {
    try {
      localStorage.setItem('elite_fabrics_cookie_consent', 'dismissed');
    } catch (e) {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside 
      aria-label="Cookie and Privacy Notice"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-5 bg-white/95 backdrop-blur-md border-t border-[#E6E0D7] shadow-xl animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Cookie className="w-5 h-5 text-[#9E472A] shrink-0 mt-0.5" />
          <div className="text-xs text-[#4A453E] space-y-1">
            <p>
              <strong>We respect your privacy:</strong> Elite Fabrics uses cookies and browser local storage to remember your reading preferences, analyze site traffic, and support third-party advertising partners like Google AdSense.
            </p>
            <p className="text-[#7A7266]">
              By continuing to use our website, you agree to our{' '}
              <button
                onClick={() => onNavigate('privacy-policy')}
                className="text-[#9E472A] underline hover:text-[#B55535] font-semibold"
              >
                Privacy Policy
              </button>{' '}
              and{' '}
              <button
                onClick={() => onNavigate('cookie-policy')}
                className="text-[#9E472A] underline hover:text-[#B55535] font-semibold"
              >
                Cookie Policy
              </button>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 self-end md:self-center shrink-0">
          <button
            onClick={() => onNavigate('cookie-policy')}
            className="px-3 py-1.5 bg-[#FAF8F5] border border-[#DDD5C7] hover:bg-[#F2EDE4] text-[#1C1C1C] rounded text-xs font-semibold transition-colors"
          >
            Manage Preferences
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 bg-[#1C1C1C] hover:bg-[#333333] text-white rounded text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            Accept &amp; Continue
          </button>
          <button
            onClick={handleDismiss}
            aria-label="Dismiss cookie notice"
            className="p-1 text-[#8A8277] hover:text-[#1C1C1C] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
