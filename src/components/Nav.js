import React from "react"
import {IndexLink, Link} from "react-router";

export default class Nav extends React.Component{
	render(){
        const { location } = this.props;
        const home_active = location.pathname==="/"?"active":"";
        const about_active = location.pathname.match(/^\/about/) ? "active":"";
        return(
         <nav class="navbar navbar-default navigation-clean">
             <div class="container">
                 <div class="navbar-header"><IndexLink to='/' class="navbar-brand navbar-link" href="#">CHAIN/LYRICS </IndexLink>
                     <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
                 </div>
                 <div class="collapse navbar-collapse" id="navcol-1">
                     <ul class="nav navbar-nav navbar-right">
                         <li class={home_active} role="presentation">
                         <IndexLink to="/"><img src="assets/img/chainlyricsmall.png" id="logo"/>HOME </IndexLink>
                         </li>
                         <li class={about_active} role="presentation"><Link to="about" href="about.html">ABOUT </Link></li>
                     </ul>
                 </div>
             </div>
         </nav>
         );
    }
}