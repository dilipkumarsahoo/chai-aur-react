import React, {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

//This component is used for protected  routing and pages
export default function Protected({children, authentication=true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //true && true
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        //false && false
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}
