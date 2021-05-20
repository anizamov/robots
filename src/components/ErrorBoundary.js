import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
    };

    componentDidCatch(...args) {
        this.setState({ hasError: true });
    }

    render() {
        const { hasError } = this.state;
        if (hasError) {
            return (
                <h1>Error</h1>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;