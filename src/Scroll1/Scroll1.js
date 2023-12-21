import React from 'react';
import './Scroll1.scss';

const Scroll1 = () => {
  return (
    <div className='Scroll1'>
        <div className='upperPortion'>
            <div className='container'>
                <div className='icon'>
                    <span>P</span>
                </div>
                <div className='content'>
                    <div className='left'>
                        <div className='up'>
                            <div className='upTextContainer'>
                                <span>PROD-MAIN_PROD-WORKING-HOUR_DOWN</span>
                            </div>
                        </div>
                        <div className='down'>
                        <div className='downTextContainer'>
                                <span>Please Fill the required Parameters for runtime</span>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div>
                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4.5" cy="5" r="4.5" fill="#407BCA"/>
                            </svg>
                        </div>
                    
                    <div className='mandatoryText'>
                        <span>SHOW MANDATORY ONLY</span>
                    </div>

                    <div className='offBtn'>
                        <div className='circle'></div>
                        <div className='offText'><span>OFF</span></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='lowerPortion'>
            <div className='stage1'>
                <div className='outterContainer'>
                    <div className='innerContainer'>
                        <div className='up'>
                            <div className='circle'></div>
                            <span>STAGE1</span>
                        </div>
                        <div className='down'>
                            <span>Jira Ticket Creation</span>
                        </div>

                        <div className='blueLine'></div>
                    </div>
                </div>
            </div>

            {/* Adding lines */}
            <div className='line'></div>

            <div className='stage1 shiftLeft'>
                <div className='outterContainer'>
                    <div className='innerContainer'>
                        <div className='up'>
                            <div className='circle'></div>
                            <span>STAGE 2</span>
                        </div>
                        <div className='down'>
                            <span>Integration</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Adding lines */}
            <div className='line'></div>

            <div className='stage1 shiftLeft'>
                <div className='outterContainer'>
                    <div className='innerContainer'>
                        <div className='up'>
                            {/* <div className='circle'></div> */}
                            <span>STAGE 3</span>
                        </div>
                        <div className='down'>
                            <span>Build & Deploy</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Adding lines */}
            <div className='line'></div>

            <div className='stage1 shiftLeft'>
                <div className='outterContainer'>
                    <div className='innerContainer'>
                        <div className='up'>
                            {/* <div className='circle'></div> */}
                            <span>STAGE 4</span>
                        </div>
                        <div className='down'>
                            <span>Jira Ticket Update</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Adding lines */}
            <div className='line'></div>
            <div style={{position:'absolute',top:'92px',left:'590px'}}  className='line'></div>

            <div className='stage1 shiftLeft'>
                <div className='outterContainer'>
                    <div className='innerContainer'>
                        <div className='up'>
                            <div style={{marginTop:'-10px', backgroundColor:'black'}} className='circle'></div>
                            <span className='uplift'>STAGE 5</span>
                        </div>
                        
                        <div className='down'>
                            <p style={{marginTop:'-10px',marginLeft:'-10px'}}>Promote</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Adding lines */}
            <div className='line'></div>

            <div className='stage1 shiftLeft'>
                <div className='outterContainer'>
                    <div className='innerContainer'>
                        <div className='up'>
                            {/* <div className='circle'></div> */}
                            <span>STAGE 6</span>
                        </div>
                        <div className='down'>
                            <span>Jira Ticket Update</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Adding lines */}
            <div className='line'></div>

            <div className='stage1 shiftLeft'>
                <div className='outterContainer'>
                    <div className='innerContainer'>
                        <div className='up'>
                            <div className='circle'></div>
                            <span>STAGE 7</span>
                        </div>
                        <div className='down'>
                            <span>Build & Deploy</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='line'></div> */}

        </div>
    </div>
  )
}

export default Scroll1;