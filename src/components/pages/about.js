import React from 'react';
import profilePicture from "../../../static/assets/images/bio/headshot.jpg"

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column" 
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div className="right-column">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda temporibus alias aliquid laudantium officia? Consequatur sit consectetur quisquam blanditiis porro, fugit dignissimos, accusamus exercitationem illum distinctio voluptate neque fuga sapiente atque amet minus et accusantium uas voluptatum necessitatibus quaerat unde saepe? Eius fuga quaerat odit deleniti doloremque laudantium ab ea.
            </div>
        </div>
    );
}