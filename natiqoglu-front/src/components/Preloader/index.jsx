import React, { useEffect } from 'react'
import "./preloader.scss"
import { preLoaderAnim } from './preloader'

function Preloader() {

    useEffect(() => {
        preLoaderAnim()
    }, [])
    
  return (
    <div>
        <div className="preloader">
            <div className="texts-container">
                <span>oglanlar</span>
                <span>Diyarina</span>
                <span>Xos gelmisiniz!!</span>
            </div>
        </div>
    </div>
  )
}

export default Preloader