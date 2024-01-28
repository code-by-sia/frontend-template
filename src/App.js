import React from "react";
import Message from "./components/message"
import Button, { CommandButton } from "./components/button"

export function App() {
    return <div className="bg-neutral-100 w-full flex flex-col gap-2 items-center justify-center">
        <Message title="Message!!">
           Lorem ipsum doller sit amet
        </Message>

        <Button>Click me</Button>
        <CommandButton label="testing" onClick={
            ()=> {
            console.log('3242342342');
        }} />
         <CommandButton label="testing" onClick={
           async()=> await fetch("google.com") }  />
    </div>;
}