import React from 'react'
import About from '../../../components/page/About'
import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from '../../../components/Sidebar';
import StyleLinks from '../../../components/StyleLinks';
import Header from '../../../components/Header';

const about = () => {
  return (
    <>

    {/* <Header/> */}
     <Layout>
            <Admin>
            <div className='container-fluid'>
                    <div className='row mt-5'>
                        <div className='col-2'>
                            <Sidebar/>
                        </div>

                        <div className='col-10'>
                        <About/>
                        </div>
                    </div>
                </div>
                
            </Admin>
        </Layout>

        <StyleLinks/>


        
        
    
    </>
  )
}

export default about