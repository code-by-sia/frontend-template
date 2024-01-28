import { useCallback, useState } from "react"
import "./button.scss"

export default function Button({ className, children, ...rest }) {
    return <button className={"button " + className} {...rest}>{children}</button>
}

export function CommandButton({ icon: Icon , label, onClick}) {
    const [isLoading, setIsLoading] = useState(false)
    const click = useCallback(()=> {
        setIsLoading(true)
        console.log('231242342342424234234');
        Promise.resolve(onClick())
        .then(() => {
            console.log('yoyoyoyo');
            setIsLoading(false)
        })
        .catch(() => {
            console.log('terwerwr');
            setIsLoading(false)
        })
    }, [onClick, setIsLoading])

    return <Button className={isLoading?"animate-spin":""} onClick={click}>
        {Icon && <Icon />}
        {label} 
    </Button>
}