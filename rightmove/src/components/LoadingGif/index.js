import React from "react";
import './style.css'

const LoadingGif = () => {
    return (
        <div className="center valign-wrapper">
        <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-red-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div><div className="gap-patch">
                    <div className="circle"></div>
                </div><div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LoadingGif;