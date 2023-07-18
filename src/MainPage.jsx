import Header from './Header'
import LeftImage from './assets/background-image-left.svg'
import RightImage from './assets/background-image-right.svg'
import DownloadIcon from './assets/download-icon.png'

function MainPage() {
    return (
        <div className="MainPage">
            <Header />

            <div className='center-content'>
                <h1>IMAGINE A PLACE...</h1>
                <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                <div className='buttons'>
                    <button className='download-button'><img src={DownloadIcon} />Download for Windows</button>
                    <button className='open-button'>Open Discord in your browser</button>
                </div>
            </div>
             
            <div className='images'>
                <img className='left-image' src={LeftImage} />
                <img className='right-image' src={RightImage} />
            </div>
            
        </div>
    )
}

export default MainPage