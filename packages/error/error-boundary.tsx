// @ts-ignore
import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  // @ts-ignore  
  componentDidCatch(error: string, errorInfo: any) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }
  
  render() {
    // @ts-ignore
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {/* @ts-ignore */}
            {this.state.error && this.state.error.toString()}
            <br />
            {/* @ts-ignore */}
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    // @ts-ignore
    return this.props.children;
  }  
}
