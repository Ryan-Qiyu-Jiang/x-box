import React from "react";
import {IndexLink, Link} from "react-router";

export default class Footer extends React.Component{
	render(){
		return(
		    <div class="footer-basic">
		        <footer>
		            <div class="social"><a href="https://www.linkedin.com/in/ryan-qiyu-jiang/" target="_blank"><i class="icon ion-social-linkedin"></i></a><a href="https://github.com/Ryan-Qiyu-Jiang" target="_blank"><i class="icon ion-social-github"></i></a><a href="https://www.facebook.com/ryan.qiyu.jiang" target="_blank"><i class="icon ion-social-facebook"></i></a></div>
		            <ul class="list-inline">
		                <li><IndexLink to='/'>Home</IndexLink></li>
		                <li><Link to="about">About</Link></li>
		            </ul>
		            <p class="copyright">RYAN SIDE-PROJECTS © 2017</p>
		        </footer>
		    </div>
			);
	}
}