import React from "react";
import aboutImg from '../images/about.png'

function About() {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutImg} alt=""/>
            </div>
            <div className='about-text'>
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque blanditiis culpa cum deleniti
                    dolor eaque et explicabo fugiat illum incidunt labore minus mollitia nobis officia pariatur quaerat
                    quasi qui quia ratione repellat soluta ullam unde velit veniam vitae voluptatem, voluptatum! Atque,
                    cum distinctio eligendi, ex iusto non nulla perferendis quas saepe soluta totam velit.</p>
                <button id='btn'>READ MORE</button>
            </div>

        </div>
    )
}

export default About;