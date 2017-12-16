import React from "react";

import Footer from "../components/Footer";

export default class About extends React.Component{

	render(){
		return(
            <div>
    <div class="jumbotron" id="about">
            <div class="container">
            <h1>About </h1>
            <p>Chain/Lyrics. Literally every chainsmoker song.</p>
            <p></p>
        </div>
    </div>
    <div class="container" id="about_container">
        <p id="intro">I actually love the chainsmokers and their music, evenbetter in 2017 there was a meme popularizing how easy it is to make achainsmokers song. I wanted to see if even a program made by me could do it ;) </p>
        <h2>How it works</h2>
        <p>CHAIN/LYRICS uses markov chains and public api's to try to guess the next chainsmoker, or any other pop song! I'm punny ;)</p>
        <div id="dev_profile">
            <h2>About Me</h2>
            <div class="row" id="profile_row">
                <div class="col-md-6">
                    <div class="profile_image_container"><img src="assets/img/P7130218.jpg" class="profile_photo"/>
                        <div class="profile_triangle"></div>
                    </div>
                </div>
                <div class="col-md-6 profile_colomn">
                    <div class="profile_description">
                        <p>Hi I'm Ryan Jiang, student, coder, voracious crepe eater.</p>
                        <p>Currently a student at waterloo, if you want to reach me for profesional or personal purposes (I lift!) ;) my email is: ryan.qiyu.jiang@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</div>
			);
		}

}