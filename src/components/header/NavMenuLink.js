import React from 'react'
import {NavMenuLinkStyled} from "./styles/NavMenuStyled"

export default function NavMenuLink({text}) {
    return (
        <NavMenuLinkStyled>
            {text}
        </NavMenuLinkStyled>
    )
}
