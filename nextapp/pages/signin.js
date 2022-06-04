import Layout from "../components/Layout";
import Head from 'next/head';
import SigninComponent from "../components/auth/SigninComponent";
import StyleLinks from "../components/StyleLinks";

const Signin = () => {




  return (
    <>
    
      <Layout>
          <SigninComponent />
         
      </Layout>


      <StyleLinks />
    </>
  );
};

export default Signin;