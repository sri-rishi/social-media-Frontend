import React, { ReactNode } from "react";

type Props = {
    onClick: () => void,
    className: string,
    text?: string,
    icon?: ReactNode
}

export const Button: React.FC<Props> = ({onClick, className, text, icon}) => {
    return (
        <button onClick={() => onClick && onClick()} className={className && className}>{icon && icon}{text && text}</button>
    )
}