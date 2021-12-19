import React from 'react'
import { Loading, Header } from '../components'

export function LoadingContainer(){
    return(
        <Loading>
            <Header.Logo
                style = {{
                    transform: "scale(1.85)",
                    cursor: "auto",
                    margin: '0',
                    padding: '0',
                    marginBottom: '3em',
                    animation: 'none'

                }}
            >
                 Portfolio
            </Header.Logo>
            <Loading.Circle/>
        </Loading>
    )
}