import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <a className='navbar-brand text-light' href="">Stock Prediction Portal</a>
            <div>
            <Button class='btn btn-outline-info' text='Login'/>
            &nbsp;
            <Button class='btn btn-info' text='Register'/>
        </div>
        </nav>
        
    </>
  )
}

export default Header