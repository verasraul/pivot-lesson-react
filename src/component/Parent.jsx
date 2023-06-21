import { useState } from "react"
import GrandChild from "./GrandChild"



export default function Parent(props){

    const [raul, useRaul] =  useState('Boxing')



    return (
        <div>
            <GrandChild person={raul} quote={ props.quote } />
        </div>
    )
}