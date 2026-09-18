import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Elite Fabrics component tree:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF8F5] text-[#1C1C1C] flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md bg-white border border-[#E6E0D7] rounded-xl p-8 shadow-sm">
            <h1 className="font-serif text-2xl font-bold text-[#1C1C1C] mb-3">Elite Fabrics</h1>
            <p className="text-sm text-[#6B655C] mb-6">
              An unexpected error occurred while loading this view. You can reload the page to continue exploring our textile guides.
            </p>
            <button
              onClick={() => {
                window.location.hash = '#home';
                window.location.reload();
              }}
              className="px-5 py-2.5 bg-[#9E472A] text-white text-sm font-semibold rounded-lg hover:bg-[#853B22] transition-colors"
            >
              Reload Elite Fabrics
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
