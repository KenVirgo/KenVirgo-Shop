import React from 'react';
import './HomeHeader.scss';
import AccessibleIcon from '@mui/icons-material/Accessible';
import Search from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
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

            </div >
        )
    }
}
export default HomeHeader;
