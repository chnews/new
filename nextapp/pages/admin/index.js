import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Sidebar from '../../components/Sidebar';
import Dashboard from '../../components/Dashboard';
import StyleLinks from '../../components/StyleLinks';
import Header from '../../components/Header';


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
                    <h1 className='text-center'><Dashboard/></h1>
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
