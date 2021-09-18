import React from 'react';
import './HomeBody.css';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

const Homebody = () => {
    return (
        <div className="body">

            <div className="bodyContainer">

                <div className="bodySection1Container">

                    <div className="leftSection1">
                        <h3> Chat with  <span> friends </span> <span style={{ color: "black" }}>.</span> </h3>

                        <h3> Watch funny content. </h3>

                        <p>
                            Forward-thinking businesses use Timekit to imagine, design and manage the perfect scheduling flows to imagine, design and manage.
                        </p>

                        <div className="ctaContainer">
                            <input type="text" placeholder="(123) 4567-8901" className="inputBox" />

                            <button className="textLinkBtn"> Text link </button>
                        </div>
                        
                    </div>

                    <div className="rightSection1">

                        <img src="/assets/iPhoneX-sm.png" alt="small phone" className="smallPhone" />

                        <img src="/assets/iPhoneX-bg.png" alt="big phone" className="bigPhone" />

                    </div>

                </div>


                <div className="bodySection2Container">
                    <div className="imageSection2">

                        <div className="leftSection2-1">
                            <img src="/assets/image1.png" alt="image1" className="image1" />
                            <img src="/assets/image2.png" alt="image1" className="image2" />
                        </div>

                        <div className="leftSection2-2">
                            <img src="/assets/image3.png" alt="image1" className="image3" />
                            <img src="/assets/image4.png" alt="image1" className="image4" />
                        </div>

                    </div>

                    <div className="rightSection2">
                        <h3> Keep in touch while traveling the world. </h3>

                        <p>
                            Forward-thinking businesses use Timekit to imagine, design and manage the perfect scheduling flows to imagine, design and manage.
                        </p>

                        <button className="viewShowlist"> View show list </button>
                    </div>
                </div>


                <div className="bodySection3Container">

                    <div className="leftSection3">
                        <h3> Chat with your friends while watching together. </h3>

                        <p>
                            Forward-thinking businesses use Timekit to imagine, design and manage the perfect scheduling flows to imagine, design and manage.
                        </p>

                    </div>


                    <div className="rightSection3">
                        <img src="/assets/chat.png" alt="Chat" className="chatImage" height="100%" />
                    </div>

                </div>


            </div>
            

            <div className="videoSectionContainer">

                <img src="assets/ocean.png" alt="Ocean" className="oceanImg" />


                <button className="playBtnContainer">
                    <PlayArrowRoundedIcon className="playBtn" />
                    watch video
                </button>

            </div>


        </div>
    )
}

export default Homebody;