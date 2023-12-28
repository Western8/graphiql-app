import React, { ReactNode } from 'react';

interface ErrorProps {
  children: ReactNode;
}

interface ErrorState {
  hasError: boolean;
  errorInfo: string;
}

class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: '',
    };
  }
  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      errorInfo: error,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>{`Ooops.. there was an error:\n ${this.state.errorInfo}`}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
