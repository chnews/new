import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogUpdate from '../../../components/crud/BlogUpdate';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from '../../../components/Sidebar';
import StyleLinks from '../../../components/StyleLinks';
import Header from '../../../components/Header';

const Blog = () => {
    return (

        <>

<Head>
           
        </Head>
{/* <Header/> */}
        <Layout>
            <Admin>
            <div className='container-fluid mt-5'>
                    <div className='row'>
                        <div className='col-2'>
                            <Sidebar/>
                        </div>

                        <div className='col-10'>
                            <BlogUpdate />
                        </div>
                    </div>
                </div>
                
             </Admin>
        </Layout>


      <StyleLinks/>

        </>
    );
};

export default Blog;
