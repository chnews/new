import Frontpage from '../components/frontend/Frontpage';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect} from 'react';
import renderHTML from 'react-render-html';
import styled from 'styled-components';
import styles from '../styles/Frontpage.module.css';
import { withRouter } from 'next/router';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import HomeRightAds from '../components/frontend/HomeRightAds';
import HomeLongAds from '../components/frontend/HomeLongAds';
import HomeSmallFirstAds from '../components/frontend/HomeSmallFirstAds';
import HomeSmallSecAds from '../components/frontend/HomeSmallSecAds';
import Poll from '../components/poll/Poll';
import { stepButtonClasses } from '@mui/material';
import Allnav from '../components/Allnav';
import Footer from '../components/Footer';
import AllnavEng from '../components/english-view/AllnavEng';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nheading = styled.p`

    font-weight: 600;
    font-size: 25px;

`;

const Blogs = ({ elast, sports, technology, education, health, lifestyle, artlit, religion, travel, reciepe, entertainment, gallery, video, worldnews,  economy,  politics,  bangladesh,  special,  america, eamerica,  last, blogs,  muktomot,  categories,  tags,  totalBlogs,  blogsLimit,  blogSkip, router }) => {
 
  
  const head = () => (
    <Head>
        <title>NewYork News | {APP_NAME}</title>
        <meta
            name="description"
            content="Daily newyork news news"
        />
        <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
        <meta property="og:title" content={`Latest newyork news for | ${APP_NAME}`} />
        <meta
            property="og:description"
            content="Newyork News"
        />
        <meta property="og:type" content="webiste" />
        <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
        <meta property="og:site_name" content={`${APP_NAME}`} />

        <meta property="og:image" content={`${DOMAIN}/public/chalaman.png`} />
        <meta property="og:image:secure_url" content={`${DOMAIN}/public/chalaman.png`} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );


 


  


  return ( 
    <>
      {head()}
      
      <>
    {/* <Allnav/> */}
    


    <div className='container-fluid'>
          
          <div className='row mt-3'>
            <div className='col-md-4 text-center'>
              <div className='col-md-12 col-sm-12'>
              
                <Image src = {`${API}/blog/photo/${last[0]?.slug}`} width = '100' height = '60' layout="responsive"/>
                {/* style={{ width: '100%', height: '250px'}} */}
              </div>
              <Link href={`/blogs/${last[0]?.slug}`}> 
              <a className='text-start'>
                  <Nheading>
                    {last[0]?.title}
                  </Nheading>
              </a>
              </Link>
              <p className={styles.content_justify}>{renderHTML(last[0]?.excerpt)}</p>
            </div>

            <div className='col-md-4 text-center'>
            <Image src={`${API}/blog/photo/${last[1]?.slug}`} width = '100' height = '60' layout="responsive"/>
              
              <Link href={`/blogs/${last[1]?.slug}`}>
              <a className='text-start'>
                  <Nheading> 
                    {last[1]?.title}
                  </Nheading>
              </a>
              </Link>
              <p className={styles.content_justify}>{renderHTML(last[1]?.excerpt)}</p>
            </div>

            <div className='col-md-4 text-center'>
            <Image src={`${API}/blog/photo/${last[2]?.slug}`} width = '100' height = '60' layout="responsive" />
              <Link href={`/blogs/${last[2]?.slug}`}>
              <a className='text-start'>
                  <Nheading>
                    {last[2]?.title}
                  </Nheading>
              </a>
              </Link>
              <p className={styles.content_justify}>{renderHTML(last[2]?.excerpt)}</p>
            </div>
          </div>

{/****************************  america section start here **********************************************************/}

          <div className='row'>
            <div className='col-md-12'>
            <Link href='/categories/america'>
              <p className={styles.america} style={{cursor: "pointer"}}>
                আমেরিকা
                </p>
                </Link>
              <div className={styles.hr}></div>
            </div>
          </div>



          <div className='row mt-3'>

            <div className='col-lg-3 col-6 text-center'>
              {/* <img src='img1.jpg' className='w-100' /> */}
              <Image src={`${API}/blog/photo/${america[0]?.slug}`} width = '100' height = '60' layout="responsive" />
              <Link href={`/blogs/${america[0]?.slug}`}>
              <a className='text-start'>
                <Nheading>
                  <p className="">{america[0]?.title}</p>
                </Nheading>
              </a>
              </Link>
              <p className={styles.content_justify}>{america[0]?.excerpt}</p>
            </div>


            <div className='col-lg-3 col-6 text-center'>
              {/* <img src='img1.jpg' className='w-100' /> */}
              <Image src={`${API}/blog/photo/${america[1]?.slug}`} width = '100' height = '60' layout="responsive"/>
              <Link href={`/blogs/${america[1]?.slug}`}>
              <a className='text-start'>
                <Nheading>
                  <p className="font-weight-bold">{america[1]?.title}</p>
                </Nheading>
              </a>
              </Link>
              <p className={styles.content_justify}>{renderHTML(america[1]?.excerpt)}</p>
            </div>


            <div className='col-lg-3 col-6 text-center'>
              {/* <img src='img1.jpg' className='w-100' /> */}
              <Image src={`${API}/blog/photo/${america[2]?.slug}`} width = '100' height = '60' layout="responsive"/>
              {/* style={{width: "100%", height: "180px"}} */}
              <Link href={`/blogs/${america[2]?.slug}`}>
              <a className='text-start'>
                 <Nheading>
                  <p className="font-weight-bold">{america[2]?.title}</p>
                 </Nheading>
              </a>
              </Link>
              <p className={styles.content_justify}>{renderHTML(america[2]?.excerpt)}</p>
            </div>


            <div className='col-lg-3 col-6 text-center'>
              {/* <img src='img1.jpg' className='w-100' /> */}
              <Image src={`${API}/blog/photo/${america[3]?.slug}`} width = '100' height = '60' layout="responsive"/>
              <Link href={`/blogs/${america[3]?.slug}`}>
              <a className='text-start'>
                  <Nheading>
                    <p className="font-weight-bold">{america[3]?.title}</p>
                  </Nheading>
              </a>
              </Link>
              <p className={styles.content_justify}>{renderHTML(america[3]?.excerpt)}</p>
            </div>

            <div className='col-lg-3 col-6 text-center'>
              {/* <img src='img1.jpg' className='w-100' /> */}
              <Image src={`${API}/blog/photo/${america[4]?.slug}`} width = '100' height = '60' layout="responsive"/>
              <Link href={`/blogs/${america[4]?.slug}`}>
              <a className='text-start'>
                  <Nheading>
                    <p className="font-weight-bold">{america[4]?.title}</p>
                  </Nheading>
              </a>
              </Link>
              <p className={styles.content_justify}>{renderHTML(america[4]?.excerpt)}</p>
            </div>

            <div className='col-lg-3 col-6 text-center'>
              {/* <img src='img1.jpg' className='w-100' /> */}
              <Image src={`${API}/blog/photo/${america[5]?.slug}`} width = '100' height = '60' layout="responsive"/>
              <Link href={`/blogs/${america[5]?.slug}`}>
              <a className='text-start'>
                  <Nheading>
                    <p className="font-weight-bold">{america[5]?.title}</p>
                  </Nheading>
              </a>
              </Link>
              <p className={styles.content_justify}>{renderHTML(america[5]?.excerpt)}</p>
            </div>

            <div className='col-lg-3 col-6 text-center'>
              {/* <img src='img1.jpg' className='w-100' /> */}
              <Image src={`${API}/blog/photo/${america[6]?.slug}`} width = '100' height = '60' layout="responsive"/>
              <Link href={`/blogs/${america[6]?.slug}`}>
              <a className='text-start'>
                  <Nheading>
                    <p className="font-weight-bold">{america[6]?.title}</p>
                  </Nheading>
              </a>
              </Link>
              <p className={styles.content_justify}>{renderHTML(america[6]?.excerpt)}</p>
            </div>

            <div className='col-lg-3 col-6 text-center'>
              {/* <img src='img1.jpg' className='w-100' /> */}
              <Image src={`${API}/blog/photo/${america[7]?.slug}`} width = '100' height = '60' layout="responsive"/>
              <Link href={`/blogs/${america[7]?.slug}`}>
              <a className='text-start'>
                  <Nheading>
                    <p className="font-weight-bold">{america[7]?.title}</p>
                  </Nheading>
              </a>
              </Link>
              <p className={styles.content_justify}>{renderHTML(america[7]?.excerpt)}</p>
            </div>
          </div>

{/************************************************* Muktomot section start here **********************************/}
          <div className='row'>
            <div className='col-md-12'>
              <p className={styles.america}>মুক্তমত </p>
              <div className={styles.hr}></div>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-md-3'>
              {/* <img src='img1.jpg' className={styles.borderimg} /> */}
              <Image src={`${API}/blog/photo/${muktomot[0]?.slug}`} className={styles.borderimg} width = '100' height = '60' layout="responsive"/>
              <h4 className={styles.borderst}>
                <Link href={`/blogs/${muktomot[0]?.slug}`}>
                  <a> 
                    {muktomot[0]?.title}
                  </a>
                </Link>
              </h4>
            </div>

            <div className='col-md-3'>
              {/* <img src='img1.jpg' className={styles.borderimg} /> */}
              <Image src={`${API}/blog/photo/${muktomot[1]?.slug}`} className={styles.borderimg} width = '100' height = '60' layout="responsive"/>
              <h4 className={styles.borderst}>
                <Link href={`/blogs/${muktomot[1]?.slug}`}>
                  <a> 
                    {muktomot[1]?.title}
                  </a>
                </Link>
              </h4>
            </div>

            <div className='col-md-3'>
              {/* <img src='img1.jpg' className={styles.borderimg} /> */}
              <Image src={`${API}/blog/photo/${muktomot[2]?.slug}`} className={styles.borderimg} width = '100' height = '60' layout="responsive"/>
              <h4 className={styles.borderst}>
                <Link href={`/blogs/${muktomot[2]?.slug}`}>
                  <a>
                    {muktomot[2]?.title}
                  </a>
                </Link>
              </h4>
            </div>

            <div className='col-md-3'>
              {/* <img src='img1.jpg' className={styles.borderimg} /> */}
              <Image src={`${API}/blog/photo/${muktomot[3]?.slug}`} className={styles.borderimg} width = '100' height = '60' layout="responsive"/>
              <h4 className={styles.borderst}>
                <Link href={`/blogs/${muktomot[3]?.slug}`}>
                  <a> 
                    {muktomot[3]?.title}
                  </a>
                </Link>
              </h4>
            </div>
          </div>



{/************************************************* Special news section start here **********************************/}
   
          <div className='row mt-4'>
            <div className='col-md-12'>
              <p className={styles.america}>স্পেশাল নিউজ </p>
              <div className={styles.hr}></div>
            </div>
          </div>

          
          <div className='row'>

            <div className='col-md-3'>
              <div className={styles.specialsec}>
                {/* <img src='img1.jpg' className='w-100 h-100' /> */}
                
                <Image src={`${API}/blog/photo/${special[0]?.slug}`} width = '100' height = '100' layout="responsive"/>
                <h4 className={styles.bottomleft}>
                  <Link href={`/blogs/${special[0]?.slug}`}>
                    <a> 
                      {special[0]?.title}
                    </a>
                  </Link>
                </h4>
              </div>
            </div>

            <div className='col-md-3'>
              <div className={styles.specialsec}>
                {/* <img src='img1.jpg' className='w-100 h-100' /> */}
                <Image src={`${API}/blog/photo/${special[1]?.slug}`} width = '100' height = '100' layout="responsive"/>
                <h4 className={styles.bottomleft}>
                  <Link href={`/blogs/${special[1]?.slug}`}>
                    <a> 
                      {special[1]?.title}
                    </a>
                  </Link>
                </h4>
              </div>
            </div>

            <div className='col-md-3'>
              <div className={styles.specialsec}>
                {/* <img src='img1.jpg' className='w-100 h-100' /> */}
                <Image src={`${API}/blog/photo/${special[2]?.slug}`} width = '100' height = '100' layout="responsive"/>
                <h4 className={styles.bottomleft}>
                  <Link href={`/blogs/${special[2]?.slug}`}>
                    <a> 
                      {special[2]?.title}
                    </a>
                  </Link>
                </h4>
              </div>
            </div>

            <div className='col-md-3'>
              <div className={styles.specialsec}>
                {/* <img src='img1.jpg' className='w-100 h-100' /> */}
                <Image src={`${API}/blog/photo/${special[3]?.slug}`} width = '100' height = '100' layout="responsive"/>
                <h4 className={styles.bottomleft}>
                  <Link href={`/blogs/${special[3]?.slug}`}>
                    <a> 
                      {special[3]?.title}
                    </a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>

{/************************************************* bangladesh news section start here **********************************/}
          <div className='row mt-4'>
            <div className='col-md-12'>
              <p className={styles.america}>বাংলাদেশ </p>
              <div className={styles.hr}></div>
            </div>
          </div>

          
              <div className='row'>
                <div className='col-md-8'>
                  <div className='row'>
                <div className='col-md-4 mt-3'>
                  <div className={styles.banglasec}>
                    {/* <img src='img1.jpg' className='w-100'/> */}
                    <Image src={`${API}/blog/photo/${bangladesh[0]?.slug}`} width = '100' height = '55' layout="responsive"/>
                    <h4 className='p-2'>
                      <Link href={`/blogs/${bangladesh[0]?.slug}`}>
                        <a>
                          {bangladesh[0]?.title}
                        </a>
                      </Link>
                    </h4>
                    <p className='p-2'>{renderHTML(bangladesh[0]?.excerpt)}</p>
                  </div>
                </div>

                <div className='col-md-4 mt-3'>
                  <div className={styles.banglasec}>
                    {/* <img src='img1.jpg' className='w-100'/> */}
                    <Image src={`${API}/blog/photo/${bangladesh[1]?.slug}`} width = '100' height = '55' layout="responsive"/>
                    <h4 className='p-2'>
                      <Link href={`/blogs/${bangladesh[1]?.slug}`}>
                        <a>  
                          {bangladesh[1]?.title}
                        </a>
                      </Link>
                    </h4>
                    <p className='p-2'>{renderHTML(bangladesh[1]?.excerpt)}</p>
                  </div>
                </div>

                <div className='col-md-4 mt-3'>
                  <div className={styles.banglasec}>
                    {/* <img src='img1.jpg' className='w-100'/> */}
                    <Image src={`${API}/blog/photo/${bangladesh[2]?.slug}`} width = '100' height = '55' layout="responsive"/>
                    <h4 className='p-2'>
                      <Link href={`/blogs/${bangladesh[2]?.slug}`}>
                        <a>  
                          {bangladesh[2]?.title}
                        </a>
                      </Link>
                    </h4>
                    <p className='p-2'>{renderHTML(bangladesh[2]?.excerpt)}</p>
                  </div>
                </div>

                <div className='col-md-4 mt-3'>
                  <div className={styles.banglasec}>
                    {/* <img src='img1.jpg' className='w-100'/> */}
                    <Image src={`${API}/blog/photo/${bangladesh[3]?.slug}`} width = '100' height = '55' layout="responsive"/>
                    <h4 className='p-2'>
                      <Link href={`/blogs/${bangladesh[3]?.slug}`}>
                        <a>
                          {bangladesh[3]?.title}
                        </a>
                      </Link>
                    </h4>
                    <p className='p-2'>{renderHTML(bangladesh[3]?.excerpt)}</p>
                  </div>
                </div>

                <div className='col-md-4 mt-3'>
                  <div className={styles.banglasec}>
                    {/* <img src='img1.jpg' className='w-100'/> */}
                    <Image src={`${API}/blog/photo/${bangladesh[4]?.slug}`} width = '100' height = '55' layout="responsive"/>
                    <h4 className='p-2'>
                      <Link href={`/blogs/${bangladesh[4]?.slug}`}>
                        <a>
                          {bangladesh[4]?.title}
                        </a>
                      </Link>
                    </h4>
                    <p className='p-2'>{renderHTML(bangladesh[4]?.excerpt)}</p>
                  </div>
                </div>

                <div className='col-md-4 mt-3'>
                  <div className={styles.banglasec}>
                    {/* <img src='img1.jpg' className='w-100'/> */}
                    <Image src={`${API}/blog/photo/${bangladesh[3]?.slug}`} width = '100' height = '55' layout="responsive"/>
                    <h4 className='p-2'>
                      <Link href={`/blogs/${bangladesh[5]?.slug}`}>
                        <a> 
                          {bangladesh[5]?.title}
                        </a>
                      </Link>
                    </h4>
                    <p className='p-2'>{renderHTML(bangladesh[5]?.excerpt)}</p>
                  </div>
                </div>
                </div>
                </div>

              
                <div className='col-md-4 mt-3'>
                <div className={styles.fixedadds} >
                  <div className='col-12'>
                  <HomeRightAds/>
                  </div>
                </div>
                </div>
                </div>
                
    {/************************************************* Politics news section start here **********************************/}
          
        
            

            {/* politics section start here */}

            <div className='row'>
              <div className='col-md-4'>
                <div className='row'>
                
                <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america}>রাজনীতি</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 mt-2 border'>
                    {/* <img src='img1.jpg' className='w-100'/> */}
                    <Image src={`${API}/blog/photo/${politics[0]?.slug}`} width = '100' height = '60' layout="responsive"/>
                    <div>
                      <h3 className='mt-3 p-2'>
                        <Link href={`/blogs/${politics[0]?.slug}`}>
                          <a>  
                            {politics[0]?.title}
                          </a>
                        </Link>
                      </h3>
                    </div>



                    <div className={styles.rajnitisecimg}>
                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            {/* <img src='img1.jpg' className='w-100'/> */}
                            <img src={`${API}/blog/photo/${politics[1]?.slug}`} width = '100' height = '60' layout="responsive"/>
                          </div>
                          <div className='col-8'>
                            <p>
                              <Link href={`/blogs/${politics[1]?.slug}`}>
                                <a> 
                                  {politics[1]?.title}
                                </a>
                              </Link>
                            </p>
                          </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            {/* <img src='img1.jpg' className='w-100'/> */}
                            <Image src={`${API}/blog/photo/${politics[2]?.slug}`} width = '100' height = '60' layout="responsive"/>
                          </div>
                        <div className='col-8'>
                          <p>
                            <Link href={`/blogs/${politics[2]?.slug}`}>
                              <a> 
                                {politics[2]?.title}
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            {/* <img src='img1.jpg' className='w-100'/> */}
                            <Image src={`${API}/blog/photo/${politics[3]?.slug}`} width = '100' height = '60' layout="responsive"/>
                          </div>
                        <div className='col-8'>
                          <p>
                            <Link href={`/blogs/${politics[3]?.slug}`}>
                              <a> 
                                {politics[3]?.title}
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
                </div>
              </div>




{/************************************************* economy news section start here **********************************/}
  
              <div className='col-md-4'>
                <div className='row'>
                
                <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america}>অর্থনীতি</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 mt-2 border'>
                    {/* <img src='img1.jpg' className='w-100'/> */}
                    <Image src={`${API}/blog/photo/${economy[0]?.slug}`} width = '100' height = '60' layout="responsive"/>
                    <div>
                      <h3 className='mt-3 p-2'>
                        <Link href={`/blogs/${economy[0]?.slug}`}>
                          <a>
                            {economy[0]?.title}
                          </a>
                        </Link>
                      </h3>
                    </div>



                    <div className={styles.rajnitisecimg}>
                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            {/* <img src='img1.jpg' className='w-100'/> */}
                            <Image src={`${API}/blog/photo/${economy[1]?.slug}`} width = '100' height = '60' layout="responsive"/>
                          </div>
                          <div className='col-8'>
                            <p>
                              <Link href={`/blogs/${economy[1]?.slug}`}>
                                <a>
                                  {economy[1]?.title}
                                </a>
                              </Link>
                            </p>
                          </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            {/* <img src='img1.jpg' className='w-100'/> */}
                            <Image src={`${API}/blog/photo/${economy[2]?.slug}`} width = '100' height = '60' layout="responsive"/>
                          </div>
                        <div className='col-8'>
                          <p>
                            <Link href={`/blogs/${economy[2]?.slug}`}>
                              <a>
                                {economy[2]?.title}
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            {/* <img src='img1.jpg' className='w-100'/> */}
                            <Image src={`${API}/blog/photo/${economy[3]?.slug}`} width = '100' height = '60' layout="responsive"/>
                          </div>
                        <div className='col-8'>
                          <p>
                            <Link href={`/blogs/${economy[3]?.slug}`}>
                              <a>
                                {economy[3]?.title}
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
                </div>
              </div>







{/************************************************* world news news section start here **********************************/}
  
              <div className='col-md-4'>
                <div className='row'>
                
                <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america}>বিশ্বজুড়ে</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 mt-2 border'>
                    {/* <img src='img1.jpg' className='w-100'/> */}
                    <Image src={`${API}/blog/photo/${worldnews[0]?.slug}`} width = '100' height = '60' layout="responsive"/>
                    <div>
                      <h3 className='mt-3 p-2'>
                        <Link href={`/blogs/${worldnews[0]?.slug}`}>
                          <a>
                            {worldnews[0]?.title}
                          </a>
                        </Link>
                      </h3>
                    </div>



                    <div className={styles.rajnitisecimg}>
                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            {/* <img src='img1.jpg' className='w-100'/> */}
                            <Image src={`${API}/blog/photo/${worldnews[1]?.slug}`} width = '100' height = '60' layout="responsive"/>
                          </div>
                          <div className='col-8'>
                            <p>
                              <Link href={`/blogs/${worldnews[1]?.slug}`}>
                                <a>
                                  {worldnews[1]?.title}
                                </a>
                              </Link>
                            </p>
                          </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            {/* <img src='img1.jpg' className='w-100'/> */}
                            <Image src={`${API}/blog/photo/${worldnews[2]?.slug}`} width = '100' height = '60' layout="responsive"/>
                          </div>
                        <div className='col-8'>
                          <p>
                            <Link href={`/blogs/${worldnews[2]?.slug}`}>
                              <a>
                                {worldnews[2]?.title}
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            {/* <img src='img1.jpg' className='w-100'/> */}
                            <Image src={`${API}/blog/photo/${worldnews[3]?.slug}`} width = '100' height = '60' layout="responsive"/>
                          </div>
                        <div className='col-8'>
                          <p>
                            <Link href={`/blogs/${worldnews[3]?.slug}`}>
                              <a>
                                {worldnews[3]?.title}
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
                </div>
              </div>
             
            </div>






       

        {/* middle advertisement start here */}
        
            <div className='row mt-3'>
              <div className='col-12 mb-2'>
                <HomeLongAds />
              </div>
              <div className='col-6'>
                <HomeSmallFirstAds />
              </div>
              <div className='col-6'>
                <HomeSmallSecAds />
              </div>
            </div>


            {/************************************************* education news section start here **********************************/}
  
            <div className='row mt-3'>
            <div className='col-md-3'>
              <div className='row'>
              <div className='row mt-4 mb-2'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>শিক্ষা</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 border'>
                    {/* <img src='img1.jpg' className='w-100'/> */}
                    <Image src={`${API}/blog/photo/${education[0]?.slug}`} width = '100' height = '60' layout="responsive" style={{width: "100%", height: "180px"}}/>
                    <div>
                      <p className='fw-bold p-2 font-weight-bold'>
                        <Link href={`/blogs/${education[0]?.slug}`}>
                          <a> 
                            {education[0]?.title}
                          </a>
                        </Link>
                      </p>
                    </div>



                    <div className={styles.rajnitisecimg}>
                    <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                         
                          </div>
                        <div className='col-10'>
                        <p className=''>
                          <Link href={`/blogs/${education[1]?.slug}`}>
                              <a>
                                {education[1]?.title}
                              </a>
                          </Link>
                        </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                          <p>
                            <Link href={`/blogs/${education[2]?.slug}`}>
                              <a>
                                {education[2]?.title}
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className ="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                          <p>
                            <Link href={`/blogs/${education[3]?.slug}`}>
                              <a>
                                {education[3]?.title}
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>
              </div>
             

{/************************************************* health news section start here **********************************/}
  
            <div className='col-md-3'>
              <div className='row'>
              <div className='row mt-4 mb-2'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>স্বাস্থ্য</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 border'>
                    {/* <img src='img1.jpg' className='w-100'/> */}
                    <Image src={`${API}/blog/photo/${health[0]?.slug}`} width = '100' height = '60' layout="responsive" style={{width: "100%", height: "180px"}}/>
                    <div>
                      <p className='fw-bold p-2 font-weight-bold'>
                        <Link href={`/blogs/${health[0]?.slug}`}>
                          <a>
                            {health[0]?.title}
                          </a>
                        </Link>
                      </p>
                    </div>



                    <div className={styles.rajnitisecimg}>
                    <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <p className=''>
                          <Link href={`/blogs/${health[1]?.slug}`}>
                            <a>
                              {health[1]?.title}
                            </a>
                          </Link>
                        </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                          <p>
                            <Link href={`/blogs/${health[2]?.slug}`}>
                              <a>
                                {health[2]?.title}
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                          <p>
                            <Link href={`/blogs/${health[3]?.slug}`}>
                              <a>
                                {health[3]?.title}
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>
              </div>




{/************************************************* Lifestyle news section start here **********************************/}
  
              {/* ************************************************************** */}
              <div className='col-md-3'>
              <div className='row'>
              <div className='row mt-4 mb-2'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>লাইফস্টাইল</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 border'>
                    {/* <img src='img1.jpg' className='w-100'/> */}
                    <Image src={`${API}/blog/photo/${lifestyle[0]?.slug}`} width = '100' height = '60' layout="responsive" style={{width: "100%", height: "180px"}}/>
                    <div>
                      <p className='fw-bold p-2 font-weight-bold'>
                        <Link href={`/blogs/${lifestyle[0]?.slug}`}>
                          <a>
                            {lifestyle[0]?.title}
                          </a>
                        </Link>
                      </p>
                    </div>



                    <div className={styles.rajnitisecimg}>
                    <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <p className=''>
                          <Link href={`/blogs/${lifestyle[1]?.slug}`}>
                            <a>
                              {lifestyle[1]?.title}
                            </a>
                          </Link>
                        </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                          <p>
                            <Link href={`/blogs/${lifestyle[2]?.slug}`}>
                              <a>
                                {lifestyle[2]?.title}
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                          <p>
                            <Link href={`/blogs/${lifestyle[3]?.slug}`}>
                              <a>
                                {lifestyle[3]?.title}
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>
              </div>

              {/* ****************************************************** */}
{/************************************************* art and literature news section start here **********************************/}
  
            <div className='col-md-3'>
              <div className='row'>
              <div className='row mt-4 mb-2'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>শিল্প ও সাহিত্য</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 border'>
                    {/* <img src='img1.jpg' className='w-100'/> */}
                    <Image src={`${API}/blog/photo/${artlit[0]?.slug}`} width = '100' height = '60' layout="responsive" style={{width: "100%", height: "180px"}}/>
                    <div>
                      <p className='fw-bold p-2 font-weight-bold'>
                        <Link href={`/blogs/${artlit[0]?.slug}`}>
                          <a>
                            {artlit[0]?.title}
                          </a>
                        </Link>
                      </p>
                    </div>



                    <div className={styles.rajnitisecimg}>
                    <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <p className=''>
                          <Link href={`/blogs/${artlit[1]?.slug}`}>
                            <a>
                              {artlit[1]?.title}
                            </a>
                          </Link>
                        </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                          <p>
                            <Link href={`/blogs/${artlit[2]?.slug}`}>
                              <a>
                                {artlit[2]?.title}
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                          <p>
                            <Link href={`/blogs/${artlit[3]?.slug}`}>
                              <a>
                                {artlit[3]?.title}
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>
            </div>
              {/* *************************************************************** */}
{/************************************************* technology news section start here **********************************/}
  
            <div className='col-md-3'>
              <div className='row'>
              <div className='row mt-4 mb-2'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>প্রযুক্তি</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 border'>
                    {/* <img src='img1.jpg' className='w-100'/> */}
                    <Image src={`${API}/blog/photo/${technology[0]?.slug}`} width = '100' height = '60' layout="responsive" style={{width: "100%", height: "180px"}}/>
                    <div>
                      <p className='fw-bold p-2 font-weight-bold'>
                        <Link href={`/blogs/${technology[0]?.slug}`}>
                          <a>
                            {technology[0]?.title}
                          </a>
                        </Link>  
                      </p>
                    </div>



                    <div className={styles.rajnitisecimg}>
                    <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <p className=''>
                          <Link href={`/blogs/${technology[1]?.slug}`}>
                            <a>
                              {technology[1]?.title}
                            </a>
                          </Link>
                        </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                          <p>
                            <Link href={`/blogs/${technology[2]?.slug}`}>
                              <a>
                                {technology[2]?.title}
                              </a>
                            </Link>  
                          </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                          <p>
                            <Link href={`/blogs/${technology[3]?.slug}`}>
                              <a>
                                {technology[3]?.title}
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>
              </div>

{/* *************************************************************************** */}
{/************************************************* Religion news section start here **********************************/}
  
            <div className='col-md-3'>
              <div className='row'>
              <div className='row mt-4 mb-2'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>ধর্ম</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 border'>
                    {/* <img src='img1.jpg' className='w-100'/> */}
                    <Image src={`${API}/blog/photo/${religion[0]?.slug}`} width = '100' height = '60' layout="responsive" style={{width: "100%", height: "180px"}}/>
                    <div>
                      <p className='fw-bold p-2 font-weight-bold'>
                        <Link href={`/blogs/${religion[0]?.slug}`}>
                          <a>
                            {religion[0]?.title}
                          </a>
                        </Link>
                      </p>
                    </div>



                    <div className={styles.rajnitisecimg}>
                    <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <p className=''>
                          <Link href={`/blogs/${religion[1]?.slug}`}>
                            <a>
                              {religion[1]?.title}
                            </a>
                          </Link>
                        </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                          <p>
                          <Link href={`/blogs/${religion[2]?.slug}`}>
                            <a>
                              {religion[2]?.title}
                            </a>
                          </Link>
                            </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                          <p>
                          <Link href={`/blogs/${religion[3]?.slug}`}>
                            <a>
                              {religion[3]?.title}
                            </a>
                          </Link>
                            </p>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>
              </div>

              {/* ********************************************************** */}
{/************************************************* Travel news section start here **********************************/}
  
            <div className='col-md-3'>
              <div className='row'>
              <div className='row mt-4 mb-2'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>ভ্রমণ</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 border'>
                    {/* <img src='img1.jpg' className='w-100'/> */}
                    <Image src={`${API}/blog/photo/${travel[0]?.slug}`} width = '100' height = '60' layout="responsive"/>
                    <div>
                      <p className='fw-bold p-2 font-weight-bold'>
                        <Link href={`/blogs/${travel[0]?.slug}`}>
                          <a>
                            {travel[0]?.title}
                          </a>
                        </Link>
                      </p>
                    </div>



                    <div className={styles.rajnitisecimg}>
                    <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <p className=''>
                          <Link href={`/blogs/${travel[1]?.slug}`}>
                            <a>
                              {travel[1]?.title}
                            </a>
                          </Link>
                        </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                            <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                          <p>
                            <Link href={`/blogs/${travel[2]?.slug}`}>
                              <a>
                                {travel[2]?.title}
                              </a>
                            </Link>    
                          </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                        </div>
                        <div className='col-10'>
                          <p>
                            <Link href={`/blogs/${travel[3]?.slug}`}>
                              <a>
                                {travel[3]?.title}
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>
            </div>

              {/* ************************************************************ */}
{/************************************************* recipe news section start here **********************************/}
  
            <div className='col-md-3'>
              <div className='row'>
              <div className='row mt-4 mb-2'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>রেসিপি</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 border'>
                    {/* <img src='img1.jpg' className='w-100'/> */}
                    <Image src={`${API}/blog/photo/${reciepe[0]?.slug}`} width = '100' height = '60' layout="responsive"/>
                    <div>
                      <p className='fw-bold p-2 font-weight-bold'>
                      <Link href={`/blogs/${reciepe[0]?.slug}`}>
                          <a>
                            {reciepe[0]?.title}
                          </a>
                        </Link>
                        </p>
                    </div>



                    <div className={styles.rajnitisecimg}>
                    <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          <FontAwesomeIcon icon="reply" />
                          </div>
                        <div className='col-10'>
                        <p className=''>
                        <Link href={`/blogs/${reciepe[1]?.slug}`}>
                            <a>
                          {reciepe[1]?.title}
                          </a>
                          </Link>
                          </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                          <p>
                            
                          <Link href={`/blogs/${reciepe[2]?.slug}`}>
                            <a>
                              {reciepe[2]?.title}
                            </a>
                            </Link>
                              </p>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i className="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                          <p>
                          <Link href={`/blogs/${reciepe[3]?.slug}`}>
                            <a>
                            {reciepe[3]?.title}
                            </a>
                            </Link>
                            </p>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>
              </div>
              </div>


            {/* sports section start here */}

{/************************************************* sports news section start here **********************************/}
  

            <div className='row'>
            
              <div className='col-md-8'>
                <div className='row'>
                <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america}>খেলাধুলা </p>
                    <div className={styles.hr}></div>
                  </div>
                </div>


                <div className='col-lg-7 mt-2'>
                  {/* <img src='img3.jpg' className='w-100'/> */}
                  <img src={`${API}/blog/photo/${sports[0]?.slug}`} style={{width: "100%", height: "300px"}}/>
                  <Link href={`/blogs/${sports[0]?.slug}`}>
                    <a>
                      <h3 className='p-2'>{sports[0]?.title}</h3>
                    </a>
                  </Link>
                  
                  <p className='p-2'>{renderHTML(sports[0]?.excerpt)}</p>
                </div>
                <div className='col-md-5 row'>
                  <div className={styles.kheladula}>
                  <div className='col-12 row'>
                      <div className='col-4'>
                      <img src={`${API}/blog/photo/${sports[1]?.slug}`} style={{width: "100%", height: "80px"}}/>
                        </div>
                      <div className='col-8'>
                      <Link href={`/blogs/${sports[1]?.slug}`}>
                        <a>
                          {sports[1]?.title}
                        </a>
                      </Link>
                      </div>
                  </div>
                  <hr/>
                  <div className='col-12 row'>
                      <div className='col-4'>
                      <img src={`${API}/blog/photo/${sports[2]?.slug}`} style={{width: "100%", height: "80px"}}/>
                        </div>
                      <div className='col-8'>
                      <Link href={`/blogs/${sports[2]?.slug}`}>
                        <a>
                          {sports[2]?.title}
                        </a>
                      </Link>
                      </div>
                  </div>
                  <hr/>
                  <div className='col-12 row'>
                      <div className='col-4'>
                      <img src={`${API}/blog/photo/${sports[3]?.slug}`} style={{width: "100%", height: "80px"}}/>
                        </div>
                      <div className='col-8'>
                      <Link href={`/blogs/${sports[3]?.slug}`}>
                        <a>
                          {sports[3]?.title}
                        </a>
                      </Link>
                      </div>
                  </div>
                  <hr/>
                  <div className='col-12 row'>
                      <div className='col-4'>
                      <img src={`${API}/blog/photo/${sports[4]?.slug}`} style={{width: "100%", height: "80px"}}/>
                        </div>
                      <div className='col-8'>
                      <Link href={`/blogs/${sports[4]?.slug}`}>
                        <a>
                          {sports[4]?.title}
                        </a>
                      </Link>
                      </div>
                  </div>

                  <hr/>
                  <div className='col-12 row'>
                      <div className='col-4'>
                      <img src={`${API}/blog/photo/${sports[5]?.slug}`} style={{width: "100%", height: "80px"}}/>
                        </div>
                      <div className='col-8'>
                      <Link href={`/blogs/${sports[5]?.slug}`}>
                        <a>
                          {sports[5]?.title}
                        </a>
                      </Link>
                      </div>
                  </div>
                    
                </div>
                </div>
                </div>
              </div>
              
              
{/************************************************* online vote system news section start here **********************************/}
  
              <div className='col-md-4'>
              <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america}>অনলাইন ভোট </p>
                    <div className={styles.hr}></div>
                  </div>
                </div>


                
                  <div className='row mt-2'>
                  <div className='col-6 border-start'>
                      <div className='row'>
                      <div className='col-12'>
                      <img 
                        src='../ads3.gif' 
                        className='w-100'
                        style={{
                          height: '100px',
                          weight: '100px'
                        }} 
                      />
                      <p>
                        Advantage of using an entity name: An entity name is easy to remember.
                        Disadvantage of using an entity name: Browsers may not support all entity names, but the support for entity numbers is good.
                      </p>
                      <Poll/>
                      {/* <form>
                      
                        <div className='border rounded-3 px-2'>
                            <input type="radio" id="yes" name="vote" value="yes"/>
                            <label for="yes">&nbsp;  হ্যাঁ</label><span className='float-end'>29%</span><br/>
                        </div>
                        <div className='border rounded-3  mt-2 px-2'>
                          <input type="radio" id="no" name="vote" value="no"/>
                          <label for="no">&nbsp;  না</label><span className='float-end'>29%</span><br/>
                        </div>
                        <div className='border rounded-3 mt-2 px-2'>
                          <input type="radio" id="nocomments" name="vote" value="nocomments"/>
                          <label for="nocomments"> &nbsp; মন্তব্য নাই</label><span className='float-end'>29%</span>
                        </div>

                        <div className='col-lg-12 '>
                          <button className='btn rounded-pill btn-primary float-end px-4 mt-2' type="submit">Vote</button>  
                        </div>  
                      
                      </form>  */}
                      </div>
                      <div className='col-12 row bg-light mt-4'>
                        <div className='col-6'>
                          <button className='btn rounded-pill'>Share</button>
                        </div>  
                        <div className='col-6'>
                          <button className='btn rounded-pill'>Embed</button>  
                        </div>
                        </div>
                      </div>
                    </div>  




                    <div className='col-6'>
                      <div className='row'>
                      <div className='col-12'>
                      <img 
                        src='../ads3.gif' 
                        className='w-100'
                        style={{
                          height: '100px',
                          weight: '100px'
                        }} 
                      />
                      <p>
                        Advantage of using an entity name: An entity name is easy to remember.
                        Disadvantage of using an entity name: Browsers may not support all entity names, but the support for entity numbers is good.
                      </p>
                      <Poll/>
                      {/* <form>
                      
                        <div className='border rounded-3 px-2'>
                            <input type="radio" id="yes" name="vote" value="yes"/>
                            <label for="yes">&nbsp;  হ্যাঁ</label><span className='float-end'>29%</span><br/>
                        </div>
                        <div className='border rounded-3  mt-2 px-2'>
                          <input type="radio" id="no" name="vote" value="no"/>
                          <label for="no">&nbsp;  না</label><span className='float-end'>29%</span><br/>
                        </div>
                        <div className='border rounded-3 mt-2 px-2'>
                          <input type="radio" id="nocomments" name="vote" value="nocomments"/>
                          <label for="nocomments"> &nbsp; মন্তব্য নাই</label><span className='float-end'>29%</span>
                        </div>

                        <div className='col-lg-12 '>
                          <button className='btn rounded-pill btn-primary float-end px-4 mt-2' type="submit">Vote</button>  
                        </div>  
                      
                      </form>  */}
                      </div>
                      <div className='col-12 row bg-light mt-4'>
                        <div className='col-6'>
                          <button className='btn rounded-pill'>Share</button>
                        </div>  
                        <div className='col-6'>
                          <button className='btn rounded-pill'>Embed</button>  
                        </div>
                        </div>
                      </div>
                    </div>  
                     
                  </div>
                
              </div>
            </div>
          
          



         
{/************************************************* photo gallery section start here **********************************/}
  
          
                  <div className='row'>

                  <div className='col-lg-8'>

                    

                  <div className='row'>
                  <div className='col-12'>
                  <div className='row mt-4'>
                        <div className='col-md-12'>
                          <p className={styles.america}>ছবিঘর </p>
                          <div className={styles.hr}></div>
                        </div>
                      </div>
                    <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="false">
                    <img 
                        src={`${API}/blog/photo/${gallery[0]?.slug}`} 
                        className="d-block w-100 p-2" 
                        alt="..."
                        style={{
                          height: '75vh',
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                      <Link href={`/blogs/${gallery[0]?.slug}`}>
                        <a>
                        <h5>{gallery[0]?.title}</h5>
                        </a>
                        </Link>
                        {/* <p>Some representative placeholder content for the first slide.</p> */}
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="false">
                      <img 
                        src={`${API}/blog/photo/${gallery[1]?.slug}`}  
                        className="d-block w-100 p-2" 
                        alt="..."
                        style={{
                          height: '75vh',
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                      <Link href={`/blogs/${gallery[1]?.slug}`}>
                        <a>
                        <h5>{gallery[1]?.title}</h5>
                        </a>
                        </Link>
                        {/* <p>Some representative placeholder content for the second slide.</p> */}
                      </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="false">
                    <img 
                        src={`${API}/blog/photo/${gallery[2]?.slug}`} 
                        className="d-block w-100 p-2" 
                        alt="..."
                        style={{
                          height: '75vh',
                        }}
                      />
                      
                      <div className="carousel-caption d-none d-md-block">
                      <Link href={`/blogs/${gallery[2]?.slug}`}>
                        <a>
                        <h5>{gallery[2]?.title}</h5>
                        </a>
                        </Link>
                        {/* <p>Some representative placeholder content for the third slide.</p> */}
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                  </div>
                  </div>
                  <div className='col-12' style={{marginLeft: '3px'}}>
                      <Link href={`/blogs/${gallery[3]?.slug}`}>
                         <a>
                          <Image 
                            src={`${API}/blog/photo/${gallery[3]?.slug}`} 
                            className='p-1'
                            width = '124'
                            height="80"
                          />
                         </a>
                      </Link>
                      <Link href={`/blogs/${gallery[4]?.slug}`}>
                          <a>
                          <Image 
                            src={`${API}/blog/photo/${gallery[4]?.slug}`} 
                            className='p-1'
                            width = '124'
                            height="80"
                          />
                          </a>
                      </Link>
                      <Link href={`/blogs/${gallery[5]?.slug}`}>
                        <a>
                        <Image 
                            src={`${API}/blog/photo/${gallery[5]?.slug}`} 
                            className='p-1'
                            width = '124'
                            height="80"
                          />
                        </a>
                      </Link>
                      <Link href={`/blogs/${gallery[6]?.slug}`}>
                        <a>
                        <Image 
                            src={`${API}/blog/photo/${gallery[6]?.slug}`} 
                            className='p-1'
                            width = '124'
                            height="80"
                          />
                        </a>
                      </Link>
                      <Link href={`/blogs/${gallery[7]?.slug}`}>
                        <a>
                        <Image 
                            src={`${API}/blog/photo/${gallery[7]?.slug}`} 
                            className='p-1'
                            width = '124'
                            height="80"
                          />
                        </a>
                      </Link>
                      <Link href={`/blogs/${gallery[8]?.slug}`}>
                        <a>
                        <Image 
                            src={`${API}/blog/photo/${gallery[8]?.slug}`} 
                            className='p-1'
                            width = '124'
                            height="80"
                          />
                        </a>
                      </Link>
                      <Link href={`/blogs/${gallery[9]?.slug}`}>
                        <a>
                        <Image 
                            src={`${API}/blog/photo/${gallery[9]?.slug}`} 
                            className='p-1'
                            width = '124'
                            height="80"
                          />
                        </a>
                      </Link>
                  </div>
                  </div>
                  </div>




  {/************************************************* videos news section start here **********************************/}


                  <div className='col-lg-4'>
                  <div className='row mt-4'>
                      <div className='col-md-12'>
                      
                        <p className={styles.america}>ভিডিও নিউজ </p>
                        <div className={styles.hr}></div>
                      </div>
                    </div>
                  <div className={styles.kheladula}>
                      <div className='col-12 row'>
                          <div className='col-4'>
                            {/* <img src='img3.jpg' /> */}
                            <Image src={`${API}/blog/photo/${video[0]?.slug}`} height='500' width='1000' className='border'/>
                          </div>
                          <div className='col-8 p-2'>
                          <Link href={`/blogs/${video[0]?.slug}`}>
                            <a>
                            <p className='px-2'>{video[0]?.title}</p>
                            </a>
                          </Link>
                              </div>
                      </div>
                      <hr/>
                      <div className='col-12 row'>
                          <div className='col-4'>
                            {/* <img src='img3.jpg' /> */}
                            <Image src={`${API}/blog/photo/${video[1]?.slug}`} height='500' width='1000' className='border'/>
                          </div>
                          <div className='col-8'>
                          <Link href={`/blogs/${video[1]?.slug}`}>
                            <a>
                              {video[1]?.title}
                            </a>
                          </Link>
                            </div>
                      </div>
                      <hr/>
                      <div className='col-12 row'>
                          <div className='col-4'>
                            {/* <img src='img3.jpg'/> */}
                            <Image src={`${API}/blog/photo/${video[2]?.slug}`} height='500' width='1000' className='border'/>
                          </div>
                          <div className='col-8'>
                          <Link href={`/blogs/${video[2]?.slug}`}>
                            <a>
                            {video[2]?.title}
                            </a>
                            </Link>
                            </div>
                      </div>
                      <hr/>
                      <div className='col-12 row'>
                          <div className='col-4'>
                            {/* <img src='img3.jpg' /> */}
                            <Image src={`${API}/blog/photo/${video[3]?.slug}`} height='500' width='1000' className='border'/>
                          </div>
                          <div className='col-8'>
                          <Link href={`/blogs/${video[3]?.slug}`}>
                            <a>
                              {video[3]?.title}
                            </a>
                          </Link>
                          </div>
                      </div>

                      <hr/>
                      <div className='col-12 row'>
                          <div className='col-4'>
                          <Image src={`${API}/blog/photo/${video[4]?.slug}`} height='500' width='1000' className='border'/>
                          </div>
                          <div className='col-8'>
                          <Link href={`/blogs/${video[4]?.slug}`}>
                            <a>
                              {video[4]?.title}
                            </a>
                          </Link>
                          </div>
                      </div>
                        
                    </div>
                  </div>
                  </div>

        </div>{/*main container fluid end here*/}
      
     
      
    {/* <Footer/> */}
    </>
    
      </>
    
  )
};


// Blogs.getInitialProps = () => {
//   let skip = 0;
//   let limit = 3;
//   return listBlogsWithCategoriesAndTags(skip, limit).then(data => {
//       if (data?.error) {
//           console.log(data.error);
//       } else {
//           return {
//               blogs: data?.blogs,
//               categories: data?.categories,
//               tags: data?.tags,
//               totalBlogs: data?.size,
//               blogsLimit: limit,
//               blogSkip: skip
//           };
//       }
//   });
// };


Blogs.getInitialProps = async () =>{
  
  // api for latest news
  const letestnews = await fetch(`${API}/posts`);
  const latestjson = await letestnews.json();
  const last = latestjson;
  
  // api for america caterories
  const amr = await fetch(`${API}/test?cat=6220fc0a36c00b3d8bf08af5&name=createdAt&sort=-1&limit=8&skip=0`);
  const amrjson = await amr.json();
  const america = amrjson;
  
  // api for politics cateries
  const sec = await fetch(`${API}/test?cat=6220fbda36c00b3d8bf08ae9&name=createdAt&sort=-1&limit=8&skip=0`);
  const json2 = await sec.json();
  const politics = json2;

  // api for sports categories
  const sp = await fetch(`${API}/test?cat=6220fc3f36c00b3d8bf08b11&name=createdAt&sort=-1&limit=8&skip=0`);
  const json3 = await sp.json();
  const sports = json3;
  

  // api for bangladesh categories
  const bd = await fetch(`${API}/test?cat=6220fc2036c00b3d8bf08b05&name=createdAt&sort=-1&limit=8&skip=0`);
  const json4 = await bd.json();
  const bangladesh = json4;

  // api for economy categories
  const ec = await fetch(`${API}/test?cat=6220fc3936c00b3d8bf08b0d&name=createdAt&sort=-1&limit=8&skip=0`);
  const json5 = await ec.json();
  const economy = json5;


  // api for worldnews categories
  const wn = await fetch(`${API}/test?cat=6220fc2836c00b3d8bf08b09&name=createdAt&sort=-1&limit=8&skip=0`);
  const json6 = await wn.json();
  const worldnews = json6;

  // api for Muktomot categories
  const mm = await fetch(`${API}/test?cat=6232b65a66acd2c41a454ae0&name=createdAt&sort=-1&limit=8&skip=0`);
  const json7 = await mm.json();
  const muktomot = json7;


  // api for SpecialNews categories
  const spn = await fetch(`${API}/test?cat=6232c15e66acd2c41a454beb&name=createdAt&sort=-1&limit=8&skip=0`);
  const json8 = await spn.json();
  const special = json8;

  // api for Technology categories
  const tec = await fetch(`${API}/test?cat=6232f00466acd2c41a455087&name=createdAt&sort=-1&limit=8&skip=0`);
  const json9 = await tec.json();
  const technology = json9;

  // api for Education categories
  const edu = await fetch(`${API}/test?cat=6232efc666acd2c41a455077&name=createdAt&sort=-1&limit=8&skip=0`);
  const jsone = await edu.json();
  const education = jsone;

  // api for Health categories
  const hel = await fetch(`${API}/test?cat=6232efd066acd2c41a45507b&name=createdAt&sort=-1&limit=8&skip=0`);
  const jsonh = await hel.json();
  const health = jsonh;

  // api for Lifestyle categories
  const lif = await fetch(`${API}/test?cat=6232efd866acd2c41a45507f&name=createdAt&sort=-1&limit=8&skip=0`);
  const jsonl = await lif.json();
  const lifestyle = jsonl;

  // api for Art & Literature categories
  const art = await fetch(`${API}/test?cat=6232eff766acd2c41a455083&name=createdAt&sort=-1&limit=8&skip=0`);
  const jsona = await art.json();
  const artlit = jsona;

  // api for religion categories
  const rel = await fetch(`${API}/test?cat=6232f01266acd2c41a45508b&name=createdAt&sort=-1&limit=8&skip=0`);
  const jsonre = await rel.json();
  const religion = jsonre;

  // api for travel categories
  const trv = await fetch(`${API}/test?cat=6232f01c66acd2c41a45508f&name=createdAt&sort=-1&limit=8&skip=0`);
  const jsontr = await trv.json();
  const travel = jsontr;

  // api for reciepe categories
  const recp = await fetch(`${API}/test?cat=6232f01266acd2c41a45508b&name=createdAt&sort=-1&limit=8&skip=0`);
  const jsonrec = await recp.json();
  const reciepe = jsonrec;

  // api for entertainment categories
  const entr = await fetch(`${API}/test?cat=6232f05866acd2c41a45509f&name=createdAt&sort=-1&limit=12&skip=0`);
  const json_entr = await entr.json();
  const entertainment = json_entr;

  // api for gallery categories
  const glr = await fetch(`${API}/test?cat=6232f04b66acd2c41a45509b&name=createdAt&sort=-1&limit=12&skip=0`);
  const json_glr = await glr.json();
  const gallery = json_glr;

  // api for videos categories
  const vdo = await fetch(`${API}/test?cat=6232f03e66acd2c41a455097&name=createdAt&sort=-1&limit=8&skip=0`);
  const json_vdo = await vdo.json();
  const video = json_vdo;

  
  return {
    america: america,
    politics: politics,
    last:last,
    sports: sports,
    bangladesh: bangladesh,
    economy: economy,
    worldnews: worldnews,
    muktomot: muktomot,
    special: special,
    technology: technology,
    education: education,
    health: health,
    lifestyle: lifestyle,
    artlit: artlit,
    religion: religion,
    travel: travel,
    reciepe: reciepe,
    entertainment: entertainment,
    gallery: gallery,
    video: video
  }
}

  
export default withRouter(Blogs);