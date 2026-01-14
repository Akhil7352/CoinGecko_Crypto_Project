import { ErrorBoundary } from "react-error-boundary";

function CustomErrorBoundryUI({ error, resetErrorBoundary}){
    return (
        <div className=" flex h-screen justify-center items-center px-6">
        <div role="alert" className="alert alert-error">
            <p>Something went wrong</p>
            <div>{error?.message}</div>
            <button onClick={resetErrorBoundary} className="cursor-pointer">Try Again</button>
        </div>
        </div>
    )
}


export default function CustomErrorBoundry({ children }){
    return (
        <ErrorBoundary
        FallbackComponent={CustomErrorBoundryUI}
        onReset={() => window.location.reload()}
        >
            {children}
        </ErrorBoundary>
    )
}