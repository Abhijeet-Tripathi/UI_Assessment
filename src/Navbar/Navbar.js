import React from 'react'
import './Navbar.scss';
import main_logo1 from '../Assets/main_logo 1.png';
import userPhoto from '../Assets/userPhoto.png';
import bell from '../Assets/bell.png';
import greenCircle from '../Assets/greenCircle.png';


const Navbar = () => {
  return (
    <div className='navContainer'>
        <div className='navLeft'>
            <div className='imageContainer'>
            <img src='https://www.buildpiper.io/wp-content/uploads/2022/05/logo_black.png' alt='buildpiperLogo'/>      
            </div>
         </div>
        <div className='navRight'>
            <div className='leftPortion'>
                <div className='firstText'>
                    <div className='imgContainer'>
                    <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-64.png' alt='rightSideArrow' />
                    </div>
                   <p>PROD-MAIN_PRO..</p>
                </div>
                <div className='secondText'>
                    <div className='imgContainer'>
                    <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-64.png' alt='rightSideArrow' />
                    </div>
                   <p>RUN WITH PARAMET..</p>
                </div>
            </div>
            <div className='rightPortion'>
                    <div className='profilePhoto'>
                        <div className='lenskartIcon'>
                            <img src={main_logo1} alt='lenskartLogo'/>
                        </div>
                        <div className='user'>
                            <div className='name'>
                                <span className='main'>Twinkle Bhardwaj</span>
                                <span className='subMain'>Super User</span>
                            </div>
                            <div className='photo'>
                                <img src={userPhoto} alt='userPhoto'/>
                            </div>
                        </div>
                    </div>
                    <div className='notificationIcon'>
                        <div className='rectangle2'>
                            <div className='innerRectangle'>
                                <img src={bell} alt='bell'/>
                                <img className='bell' src={greenCircle} alt='bell'/>                            
                            </div>
                            
                        </div>
                    </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar