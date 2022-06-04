import Link from 'next/link';
import styles from '../../styles/Nav.module.css';
import sty from '../../styles/Search.module.css';
import styled from 'styled-components';
import Search from '../blog/Search';


// const Wrapper = styled.ul`
// list-style-type: none;
// margin: 0;
// padding: 0;
// overflow: hidden;
// `;




const Navbar = () => {
    // const showBlogCategories = blog =>
    //     blog.categories.map((c, i) => (
    //         <Link key={i} href={`/categories/${c.slug}`}>
    //             <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
    //         </Link>
    //     ));
  return (
      <>
      
      {/* <nav className={styles.nav}>
      
          <ul>
              <li><i className="fa-solid fa-bars"></i></li>
              <li>
                  <Link href='/'>প্রচ্ছদ</Link>
              </li>
              <li>
                  <Link href='#'>প্রদান খবর </Link>
              </li>
              <li>
                  <Link href='/categories/america'>আমেরিকা </Link>
              </li>
              <li>
                  <Link href='/categories/bangladesh'>বাংলাদেশ </Link>
              </li>
              <li>
                  <Link href='/categories/world-news'>বিশ্বজুড়ে </Link>
              </li>
              <li>
                  <Link href='/categories/politics'>রাজনীতি </Link>
              </li>
              
              <li>
                  <Link href='/categories/economy'>অর্থনীতি </Link>
              </li>
              <li>
                  <Link href='/categories/sports'>খেলা </Link>
              </li> 
          </ul>
            <span>
            <Search/>
                <div>
                    <button className={styles.button1} >Classified</button>
                </div>
            
                <div>
                   
                        <button className={styles.button2}>English Version</button>
                    
                </div>
            </span>
      </nav> */}





      <ul className={styles.ul}>
        <li className={styles.li}>
            <a className="active" href="#home"><Link href='/'>প্রচ্ছদ</Link></a>
        </li>

        <li className={styles.li}>
            <a className="active" href="#home"><Link href='/categories/bangladesh'>প্রদান খবর </Link></a>
        </li>

        <li className={styles.li}>
            <a className="active" href="#home"><Link href='/categories/america'>আমেরিকা </Link></a>
        </li>
        
        <li className={styles.li}>
            <a className="active" href="#home"><Link href='/categories/bangladesh'>বাংলাদেশ </Link></a>
        </li>
        
        <li className={styles.li}>
            <a className="active" href="#home"><Link href='/categories/world-news'>বিশ্বজুড়ে </Link></a>
        </li>

        <li className={styles.li}>
            <a className="active" href="#home"><Link href='/categories/politics'>রাজনীতি </Link></a>
        </li>

        <li className={styles.li}>
            <a className="active" href="#home"> <Link href='/categories/economy'>অর্থনীতি </Link></a>
        </li>

        <li className={styles.li}>
            <a className="active" href="#home"><Link href='/categories/sports'>খেলা </Link></a>
        </li>
        
        <li className={styles.li} style={{float: 'right'}}>
       
       <Search/>

        </li>

    </ul>

    



    {/* <div className={sty.navbar}>
        <div className={sty.subnav}>
            <button className={sty.subnavbtn}>
            Search <i className="fa fa-caret-down" />
            </button>
            <div className={sty.subnavContent}>
            <Search/>
            </div>
        </div>
    </div> */}

{/* <div className={sty.navbar}>
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <div className={sty.dropdown}>
    <button className={sty.dropbtn}>
      Dropdown
      <i className="fa fa-caret-down" />
    </button>
    <div className={sty.dropdownContent}>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
</div> */}



  {/* <input type="checkbox" id={sty.toggleMenu} />
  <label htmlFor={sty.toggleMenu} className={sty.headerMenuBtn}>
    Menu 
  </label>
  <div className={sty.headerMenuItems}>
    <div>
        <Search/>
    </div>
  </div> */}





     

    
      </>
  );
};

export default Navbar;
