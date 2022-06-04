import React from 'react'
import About from '../../../components/page/About'
import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from '../../../components/Sidebar';
import StyleLinks from '../../../components/StyleLinks';
import Advertisement from '../../../components/page/Advertisement';
import Header from '../../../components/Header';

const advertisement = () => {
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
                      <Advertisement/>
                        </div>
                    </div>
                </div>
                
            </Admin>
        </Layout>

        <StyleLinks/>
        
    
    </>
  )
}

export default advertisement