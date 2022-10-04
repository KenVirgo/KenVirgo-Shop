import React from 'react';
import './HomeHeader.scss';
import AccessibleIcon from '@mui/icons-material/Accessible';
import Search from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
class HomeHeader extends React.Component {

    render() {

        return (
            <div >
                <div className="home-header-container">
                    <div className='home-header-content'>
                        <div className='left-content'>
                            free shipping on all u.s orders over $50
                        </div>
                        <div className='right-content'>
                            <div className='child-content'>
                                <div>USD </div>
                            </div>
                            <div className='child-content'>
                                <div>English </div>
                            </div>
                            <div className='child-content'>
                                <div>My Account </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-container'>
                    <div className='home-content'>
                        <div className='left-banner'>
                            Ken <div className='virgo'>Virgo</div>
                        </div>
                        <div className='center-banner'>
                            <div className='child-banner'>HOME
                            </div>
                            <div className='child-banner'>SHOP
                            </div>
                            <div className='child-banner'>PROMOTION
                            </div>
                            <div className='child-banner'>PAGES
                            </div>
                            <div className='child-banner'>BLOG
                            </div>
                            <div className='child-banner'>CONTACT
                            </div>
                        </div>

                        <div className='right-banner'>
                            <div className='icon-banner'>
                                <div className='icon'>

                                    <Search fontSize="large" />
                                </div>
                                <div className='icon'>
                                    <AccessibleIcon fontSize="large" />
                                </div>
                                <div className='icon'>
                                    <AddShoppingCartIcon fontSize="large" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='body'>
                    <div className='picture'>
                        <div className='banner'>SPRING / SUMMER COLLECTION 2017
                            <div className='main-banner'>
                                <h1>Get up to 30% Off New Arrivals</h1></div>

                            <div className='end-button'>
                                <button className='btn-shopnow'>SHOP NOW</button>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='vip-banner'>
                    <div className='vipro-banner'>
                        <div className='pic-banner-left'>
                            <div className='banner-category' ><p style={{ cursor: 'pointer' }}>WOMEN's</p></div>

                        </div>
                        <div className='pic-banner-cennter'>
                            <div className='banner-category'>ACCESSORIES's</div>
                        </div>
                        <div className='pic-banner-right'>
                            <div className='banner-category'>MEN's</div>
                        </div>
                    </div>
                </div>

                {/* container */}
                <div className='new_arrivals'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col text-center'>
                                <h2>New Arrivals</h2>
                            </div>
                        </div>
                        <div className='row-border'>
                            <div className='border'></div>
                            <div className='title'>
                                <div className='all'>All</div>
                                <div className='all'>WOMEN'S</div>
                                <div className='all'>ACCESSORIES'S</div>
                                <div className='all'>MEN'S</div>
                            </div>
                        </div>
                        <div className='main-product'>
                            <Row>
                                <Col sm={3}>

                                </Col>
                                <Col sm={3}>sm=3</Col>
                                <Col sm={3}>sm=4</Col>
                                <Col sm={3}>sm=4</Col>
                            </Row>
                            <div className='product'>



                                <div className='img'>

                                </div>
                                <div className='detail-product'>
                                    <h4>Fujifilm X100T 16 MP Digital Camera (Silver)</h4>
                                </div>
                                <div className='price'>$520</div>
                                <div className='add-card'>
                                    <button className='btn-add'>ADD TO CARD</button>
                                </div>
                            </div>

                            <div className='product'>
                                <div className='img'>

                                </div>
                                <div className='detail-product'>
                                    <h4>Fujifilm X100T 16 MP Digital Camera (Silver)</h4>
                                </div>
                                <div className='price'>$520</div>
                                <div className='add-card'>
                                    <button className='btn-add'>ADD TO CARD</button>
                                </div>
                            </div>
                            <div className='product'>
                                <div className='img'>

                                </div>
                                <div className='detail-product'>
                                    <h4>Fujifilm X100T 16 MP Digital Camera (Silver)</h4>
                                </div>
                                <div className='price'>$520</div>
                                <div className='add-card'>
                                    <button className='btn-add'>ADD TO CARD</button>
                                </div>
                            </div>
                            <div className='product'>
                                <div className='img'>

                                </div>
                                <div className='detail-product'>
                                    <h4>Fujifilm X100T 16 MP Digital Camera (Silver)</h4>
                                </div>
                                <div className='price'>$520</div>
                                <div className='add-card'>
                                    <button className='btn-add'>ADD TO CARD</button>
                                </div>
                            </div>
                            <div className='product'>
                                <div className='img'>

                                </div>
                                <div className='detail-product'>
                                    <h4>Fujifilm X100T 16 MP Digital Camera (Silver)</h4>
                                </div>
                                <div className='price'>$520</div>
                                <div className='add-card'>
                                    <button className='btn-add'>ADD TO CARD</button>
                                </div>
                                <div className='silde-product'>

                                </div>
                            </div>

                        </div>



                    </div>
                </div>
                <div className='deal_ofthe_week'>
                    <div className='image'>

                    </div>
                    <div className='deal'>
                        <div className='section-title'>
                            <h2>Deal Of The Week</h2>
                        </div>
                        <div className='border'></div>
                        <div className='timer'>

                            <div className='box-timer'></div>
                            <div className='box-timer'></div>
                            <div className='box-timer'></div>
                            <div className='box-timer'></div>
                        </div>
                        <div className='black-button'>
                            <button className='btn-shopnow'>SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div className='best_sellers'>
                    <div className='col text-center'>
                        <h2>Best Sellers</h2>
                    </div>
                    <div className='border'></div>
                    <div className='collact'>

                        <div className='left-icon'><ArrowCircleLeftIcon fontSize="large" /></div>
                        <div className='product'>
                            <div className='img'>

                            </div>
                            <div className='detail-product'>
                                <h4>Fujifilm X100T 16 MP Digital Camera (Silver)</h4>
                            </div>
                            <div className='price'>$520</div>
                            <div className='add-card'>
                                <button className='btn-add'>ADD TO CARD</button>
                            </div>
                            <div className='silde-product'>

                            </div>
                        </div>
                        <div className='right-icon'><ArrowCircleRightIcon fontSize="large" /></div>
                    </div>
                </div >
                <div className='benefit'>
                    <div className='child-benefit'>
                        <div className='icon'><LocalShippingIcon fontSize='large' color="success" /></div>
                        <div className='text'>
                            <h4>FREE SHIPPING</h4>
                            <div className='small-text'>Suffered Alteration in Some Form</div>
                        </div>
                    </div>
                    <div className='child-benefit'>
                        <div className='icon'><LocalAtmIcon fontSize='large' color="success" /></div>
                        <div className='text'>
                            <h4>CACH ON DELIVERY</h4>
                            <div className='small-text'>The Internet Tend To Repeat</div>
                        </div>
                    </div>
                    <div className='child-benefit'>
                        <div className='icon'><KeyboardReturnIcon fontSize='large' color="success" /></div>
                        <div className='text'>
                            <h4>45 DAYS RETURN </h4>
                            <div className='small-text'>Making it Look Like Readable</div>
                        </div>
                    </div>
                    <div className='child-benefit'>
                        <div className='icon'><AccessTimeIcon fontSize='large' color="success" /></div>
                        <div className='text'>
                            <h4>OPENING ALL WEEK</h4>
                            <div className='small-text'>8AM - 09PM</div>
                        </div>
                    </div>
                </div>

                <div className='blog'>
                    <div className='col text-center-blog'>
                        <h2>Latest Blogs</h2>
                    </div>
                    <div className='border-blog'></div>
                    <div className='row blogs_container'>
                        <div className='col-lg-4 blog_item_col'>
                            <div className='blog_item'>
                                <div className='blog_background_one' >

                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 blog_item_col'>
                            <div className='blog_item'>
                                <div className='blog_background_two'>

                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 blog_item_col'>
                            <div className='blog_item'>
                                <div className='blog_background_three'>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='newsletter'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='text'><h4>Newsletter</h4></div>
                                <br></br>
                                <p>Subscribe to our newsletter and get 20% off your first purchase</p>
                            </div>
                            <div className='col-lg-6'>
                                <form action='post'>
                                    <div className='newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center'>
                                        <input id='newsletter_email' type='email' placeholder='Your email' required='required' data-error='Valid email is required'></input>
                                        <button id='newsletter_submit' type='submit' className='newsletter_submit_btn trans_300' value='submit' >SUBSCRIBE</button>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <footer className='footer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center'>
                                    <ul className='footer_nav'>
                                        <li><p>Blog</p></li>
                                        <li><p>FAQs</p></li>
                                        <li><p>Contact us</p></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center'>
                                    <ul>
                                        <li> <FacebookIcon></FacebookIcon></li>
                                        <li><TwitterIcon></TwitterIcon></li>
                                        <li><InstagramIcon></InstagramIcon></li>
                                        <li><YouTubeIcon></YouTubeIcon></li>
                                        <li><PinterestIcon></PinterestIcon></li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>

                </footer>
            </div >
        )
    }
}
export default HomeHeader;
