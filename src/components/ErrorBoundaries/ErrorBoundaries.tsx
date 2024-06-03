import React from 'react';

interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: string;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: '' };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({ hasError: true, error: error?.message });
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.error}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
