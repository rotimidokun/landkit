import React from 'react';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Footer = () => {
    return (
        <div className="footerContainer">

            <div className="topFooterContainer">
                <div className="leftTopFooter">

                    <p>Get the app now!</p>

                    <p>Get your dream job without the hassle.</p>

                </div>

                <div className="rightTopFooter">

                    <img src="assets/google-play.png" alt="Google Play" className="google-play" />
                    <img src="assets/app-store.png" alt="App Store" className="app-store" />

                </div>
            </div>

            <hr />

            <div className="bottomFooterContainer">
                <div className="leftBottomFooter">
                    <h2>Landkit.</h2>
                    <p>A better way to build.</p>

                    <div className="socialIcons">
                        <InstagramIcon className="socialIcon" />
                        <FacebookIcon className="socialIcon" />
                        <TwitterIcon className="socialIcon" />
                        <PinterestIcon className="socialIcon" />
                    </div>

                </div>


                <div className="rightBottomFooter">

                    <div className="productsServices">

                        <div className="rightFooterColumn">
                            <p>products</p>
                            <ul>
                                <li>Page Builder</li>
                                <li>UI Kit</li>
                                <li>Styleguide </li>
                                <li>Documentation</li>
                                <li>Changelog</li>
                            </ul>
                        </div>

                        <div className="rightFooterColumn">
                            <p>services</p>
                            <ul>
                                <li>Documentation</li>
                                <li>Changelog</li>
                                <li>Page Builder </li>
                                <li>UI Kit</li>
                            </ul>
                        </div>

                    </div>


                    <div className="connectLegal">
                        <div className="rightFooterColumn">
                            <p>connect</p>
                            <ul>
                                <li>Page Builder</li>
                                <li>UI Kit</li>
                                <li>Styleguide </li>
                                <li>Documentation</li>
                                <li>Changelog</li>
                                <li>Documentation</li>
                                <li>Changelog</li>
                            </ul>
                        </div>

                        <div className="rightFooterColumn">
                            <p>legal</p>
                            <ul>
                                <li>Documentation</li>
                                <li>Changelog</li>
                                <li>Page Builder</li>
                            </ul>
                        </div>
                    </div>




                </div>

            </div>

        </div>
    )
}

export default Footer;
