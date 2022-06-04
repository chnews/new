import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Sidebar from '../../../components/Sidebar';
import Dashboard from '../../../components/Dashboard';
import Logo from '../../../components/crud/ads/Logo'
import StyleLinks from '../../../components/StyleLinks';
import Header from '../../../components/Header';
import Footerlogo from '../../../components/crud/ads/FooterLogo';
import AllLogo from '../../../components/crud/AllLogo';
import Ads from '../../../components/crud/Ads';


const AdminIndex = () => {
  return (
    <>

   
    {/* <Header/> */}
    <Layout>
      <Admin>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar/>
                </div>

                <div className='col-md-10'>
                
             <AllLogo/>
                    
                </div>
            </div>
            </div>
        
      </Admin>
    </Layout>
    
    <div>

 <StyleLinks/>

    </div>
    </>
    
  )
}
AdminIndex.displayName = 'AdminIndex'
export default AdminIndex;
