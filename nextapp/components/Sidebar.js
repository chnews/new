import React from 'react'
import Link from 'next/link';
import {signout, isAuth} from '../actions/auth'

const Sidebar = () => {
     


  return (
    <>


      
                        {/* <div className="bg-dark" >


                        {/* <h4 className='text-white text-center'>Dashboard</h4> */}
                        {/* <nav class="nav flex-column text-white h-100">
                            <Link href="/admin/crud/category-tag"><a className="nav-link active text-white">Category</a></Link>
                            <Link href="/admin/crud/category-tag"><a className="nav-link text-white">Tag</a></Link>
                            <Link href="/admin/crud/blogs"><a className="nav-link text-white">Blog</a></Link>
                            <Link href="/user/update"><a className="nav-link text-white">Profile</a></Link>
                            <Link href="#"><a className="nav-link text-white">Setting</a></Link>
                            
                                   
                        </nav> */}



                            {/* <ul className="list-group bg-dark">
                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Category</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Tag</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/blog">Blog</Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/blogs">
                                        <a>Update/Delete Blog</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/user/update">
                                        <a>Profile</a>
                                    </Link>
                                </li>
                            </ul> 
                        </div> */}

                        



                     





            {/* *****************************************************************************
            **************************************************************************** */}

            
          
  
 
<>
  


  
  <div id="container" style={{marginLeft: '-17px', position: "fixed", top: "0"}} className="effect aside-float aside-bright mainnav-lg">
    {/*NAVBAR*/}
    {/*===================================================*/}
    
    {/*===================================================*/}
    {/*END NAVBAR*/}
   
     
      
      {/*MAIN NAVIGATION*/}
      {/*===================================================*/}
      <nav id="mainnav-container">
        <div id="mainnav">
          {/*OPTIONAL : ADD YOUR LOGO TO THE NAVIGATION*/}
          {/*It will only appear on small screen devices.*/}
          {/*================================
              <div class="mainnav-brand">
                  <a href="index.html" class="brand">
                      <img src="img/logo.png" alt="Nifty Logo" class="brand-icon">
                      <span class="brand-text">Nifty</span>
                  </a>
                  <a href="#" class="mainnav-toggle"><i class="pci-cross pci-circle icon-lg"></i></a>
              </div>
              */}
          {/*Menu*/}
          {/*================================*/}
          <div id="mainnav-menu-wrap">
            <div className="nano">
              <div className="nano-content">
           
               
                <ul id="mainnav-menu" className="list-group">
                
                <li className="">
                  {isAuth() && isAuth().role === 0 && (
                    <Link href="/user">
                    <a href="#">
                      <i className="demo-pli-home" />
                      <span className="menu-title">Dashboard</span>
                      <i className="arrow" />
                    </a>
                    </Link>
                    )}
                    {/*Submenu*/}
                  
                  </li>
                  
                  <li className="">
                  {isAuth() && isAuth().role === 1 && (
                    <Link href="/admin">
                    <a href="#">
                      <i className="demo-pli-home" />
                      <span className="menu-title">Dashboard</span>
                      <i className="arrow" />
                    </a>
                    </Link>
                    )}
                    {/*Submenu*/}
                  
                  </li>

                 
                  {/*Menu list item*/}
                  <li>
                    <Link href="/admin/crud/blogs">
                      <a>
                        <i className="demo-pli-split-vertical-2" />
                        <span className="menu-title">Posts</span>
                        <i className="arrow" />
                      </a>
                    </Link>

                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                          <Link href="/admin/crud/blogs">
                        <a >
                          All Posts
                        </a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/admin/crud/blog">
                            <a >
                            Add New Post
                            </a>
                        </Link>
                      </li>
                      
                      
                    </ul>
                  </li>

                  <li>
                    <Link href="/admin/crud/blogs">
                      <a>
                        <i className="demo-pli-split-vertical-2" />
                        <span className="menu-title">Pages</span>
                        <i className="arrow" />
                      </a>
                    </Link>

                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                          <Link href="/admin/page/about">
                        <a >
                          About Us
                        </a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/admin/page/advertisement">
                            <a >
                            Advertisement
                            </a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/admin/page/editor">
                            <a >
                            Editor
                            </a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/admin/page/contact">
                            <a >
                            Contact
                            </a>
                        </Link>
                      </li>
                      
                      
                    </ul>
                  </li>

                  <li>
                    <Link href="/admin/crud/category-tag">
                      <a>
                        <i className="demo-pli-split-vertical-2" />
                        <span className="menu-title">Categories and Tags</span>
                        <i className="arrow" />
                      </a>
                    </Link>
                    
                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                        <a href="layouts-collapsed-navigation.html">
                          Contact Us
                        </a>
                      </li>
                      
                      
                    </ul>
                  </li>
                  {/*Menu list item*/}


                  <li>
                    <Link href="/admin/ads/ads">
                      <a>
                        <i className="demo-pli-split-vertical-2" />
                        <span className="menu-title">Ads Setting</span>
                        <i className="arrow" />
                      </a>
                    </Link>
                    
                    
                  </li>

                  <li>
                    <Link href="/admin/ads/logo">
                      <a>
                        <i className="demo-pli-split-vertical-2" />
                        <span className="menu-title">Site Setting</span>
                        <i className="arrow" />
                      </a>
                    </Link>
                  </li>

                  
                  <li>
                    <Link href="/user/update">
                      <a>
                        <i className="demo-pli-split-vertical-2" />
                        <span className="menu-title">User Update</span>
                        <i className="arrow" />
                      </a>
                    </Link>
                    
                    
                  </li>
               
              
                
               
                  
                  
                 
                
                 
               
                  
                 
                </ul>
               
              </div>
            </div>
          </div>
         
        </div>
      </nav>
      {/*===================================================*/}
      {/*END MAIN NAVIGATION*/}
    </div>

  
</>

  

  
  
</>

          
    
  );
}

export default Sidebar;
