import React from 'react'
import { useLocation } from 'react-router-dom'

export const withRouter = (WrappedComponent) =>(props)=> {

     const location = useLocation();
     return <WrappedComponent location={location} {...props}></WrappedComponent>

}
const WithRouter = ()=> {
  return (
    <div>
      {/* const location = useLocation() */}
    </div>
  )
}
// Use for conditional redering of navbar
export default WithRouter
