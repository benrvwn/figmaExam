import './Upcoming.scss'
import video1 from '../../assets/video1.png'
import video2 from '../../assets/video2.png'
import backward from '../../assets/backward.png'
import next from '../../assets/next.png'

function Upcoming(){
    return (
        <>
            <div className='upcoming-container'>
                <div className='top-content'>
                    <h1>
                        <span>UPCOMING</span>
                        VIDEOS
                    </h1>
                    <span className='line'></span>
                </div>
                <div className='upcoming-video-container'>
                    <div className='arrow-btn'>
                        <a href="#"><img src={backward} alt="" /></a>
                    </div>
                    <div className='video-container'>
                        <div className='video-cover-container'>
                            <img src={video1} alt="video 1" className='video-cover' />
                        </div>
                        <div className='video-details'>
                            <div>
                                <h2>The Red Wedding</h2>
                                <span>DANAERYS • JON SNOW • CERSEI</span>
                            </div>
                        </div>
                    </div>
                    <div className='video-container'>
                        <div className='video-cover-container'>
                            <img src={video2} alt="video 1" className='video-cover' />
                        </div>
                        <div className='video-details'>
                            <div>
                                <h2>The Red Wedding</h2>
                                <span>DANAERYS • JON SNOW • CERSEI</span>
                            </div>
                        </div>
                    </div>
                    <div className='arrow-btn'>
                        <a href="#"><img src={next} alt="" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Upcoming;