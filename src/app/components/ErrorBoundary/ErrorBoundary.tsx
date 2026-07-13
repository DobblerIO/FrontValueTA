import React from 'react';

interface ErrorBoundaryProps {
    fallback: React.ReactNode;
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static getDerivedStateFromError(_error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    componentDidCatch(error: Error, info: any) {
        console.error(error);
        console.error(info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return this.props.fallback;
        }

        return this.props.children;
    }
}