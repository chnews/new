import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Category from '../../../components/crud/Category';
import Tag from '../../../components/crud/Tag';
import Link from 'next/link';
import Sidebar from '../../../components/Sidebar';
import Head from 'next/head';
import StyleLinks from '../../../components/StyleLinks';
import Header from '../../../components/Header';


const CategoryTag = () => {

   
    return (
        <>


<Head>
      
        </Head>


        {/* <Header/> */}
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-md-2'>
                        <Sidebar/>
                        </div>
                        <div className='col-md-10'>
                        <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Manage Categories and Tags</h2>
                        </div>
                        <div className="col-md-6">
                            <Category />
                        </div>
                        <div className="col-md-6">
                            <Tag />
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>

        <StyleLinks/>
        </>
    );
};

export default CategoryTag;
