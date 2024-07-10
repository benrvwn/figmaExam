import './Footer.scss'

function Footer(){
    return (
        <>
            <footer>
                <div className='top-footer'>
                    <div>
                        <h1>
                            <span>Kings</span>
                            Landing
                        </h1>
                        <span className='rights'>
                            &copy; KingsLanding. All rights reserved.
                        </span>
                    </div>
                    <div className='footer-links'>
                        <div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">Models</a></li>
                                <li><a href="#">BTS</a></li>
                                <li><a href="#">Store</a></li>
                                <li><a href="#">Join Now</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-about'>
                        <h2>
                            ABOUT KingsLanding
                        </h2>
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius a nisl non facilisis. Phasellus finibus scelerisque massa, ac elementum enim sollicitudin sed. Ut finibus pulvinar interdum. Proin sed neque in nisl ultrices euismod. Ut mattis turpis sed odio.
                        </div>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>  
                    </div>
                </div>
                <div className='bottom-footer'>
                    <p>&copy; 2024 KingsLanding. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;