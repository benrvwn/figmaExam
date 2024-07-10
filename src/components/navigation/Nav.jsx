import './Nav.scss';

function Nav(){

    return (
        <>
        <div className='nav-container'>
            <div className='title-container'>
                <h1>
                    <span className='red-font'>Kings</span>
                    Landing</h1>
                <div>
                    <ul className='red-font'>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">VIDEOS</a></li>
                        <li><a href="#">MODELS</a></li>
                        <li><a href="#">BTS</a></li>
                        <li><a href="#">STORE</a></li>
                    </ul>
                </div>
            </div>
            <div className='login-container'>
                <div className='contacts'>
                    <span><a href=""><i class="bi bi-search"></i></a></span>
                    <a href="#"><i class="bi bi-twitter"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                </div>
                <div className='login-links'>
                    <a href="#" className='login'><i class="bi bi-person-circle"></i> LOGIN</a>
                    <a href="#">JOIN NOW</a>
                </div>
            </div>
        </div>
    </>
    )
}
    

export default Nav