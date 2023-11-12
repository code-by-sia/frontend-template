import React from "react";

function Message({ children }) {
    return <div className="bg-white p-3 shadow w-1/3 rounded">
        {children}
    </div>
}

export function App() {
    return <div className="bg-neutral-100 w-full flex items-center justify-center">
        <Message>
            <strong>Title</strong>
            <p>Lorem ipsum doller sit amet, consi lat</p>
        </Message>
    </div>;
}