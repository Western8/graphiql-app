import React, { ErrorInfo, ReactNode } from 'react';

interface ErrorProps {
  children: ReactNode;
}

interface ErrorState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error   :   ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops.. there was an error</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
