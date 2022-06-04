import React from 'react'
import Topnav from '../components/frontend/Topnav'
import Logosec from '../components/frontend/Logosec'
import Navbar from '../components/frontend/Navbar';
import Scrollbar from '../components/frontend/Scrollbar';
import styles from '../styles/Frontpage.module.css'
import Mobilenav from './frontend/mobile/Mobilenav';
import styled from 'styled-components';




const Wrapper = styled.div`

  margin-left: 2%;
  margin-right: 2%;

`

const Allnav = () => {
  return (
      <>    
    
       <div className='container-fluid'>
         <div className='row'>
           <div className='col-12'>
            <div className={styles.main_menu_show}>
              <Topnav/>
              <Logosec/>
              <Scrollbar/>
              <Navbar/>
            </div>


            <div className={styles.mobile_menu_show}>
              <Mobilenav/>
              <Scrollbar/>
            </div>
           </div>
         </div>
       </div>
       
    </>

  )
}

export default Allnav