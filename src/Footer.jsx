import Logo from './Logo'
import twitterIcon from './assets/twitter-icon.svg'
import instagramIcon from './assets/instagram-icon.svg'
import facebookIcon from './assets//facebook-icon.svg'
import youtubeIcon from './assets/youtube-icon.svg'
import tiktokIcon from './assets/tiktok-icon.svg'
import usaIcon from './assets/usa-icon.png'

const social = [
    { icon: twitterIcon, link: 'https://twitter.com/discord' },
    { icon: instagramIcon, link: 'https://www.instagram.com/discord/' },
    { icon: facebookIcon, link: 'https://www.facebook.com/discord/' },
    { icon: youtubeIcon, link: 'https://www.youtube.com/discord/' },
    { icon: tiktokIcon, link: 'https://www.tiktok.com/@discord' }
]

const product = ['Download', 'Nitro', 'Status']
const company = ['About', 'Jobs', 'Brand', 'Newsroom']
const resources = ['College', 'Support', 'Safety', 'Blog', 'Feedback', 'Build', 'StreamKit', 'Creators', 'Community']
const policies = ['Terms', 'Privacy', 'Cookie Settings', 'Guidelines', 'Acknowledgements', 'Licences', 'Moderation', 'Company Information']

function Footer() {
    return (
        <div className="Footer">
            <div className="social">
                <p><img src={usaIcon} />English, USA</p>
                <div className='social-links'>
                    {social.map((item) => {
                        return (
                            <a href={item.link}><img src={item.icon} /></a>
                        )
                    })}
                </div>
            </div>
            <div className='link-container'>
                <div className='links'>
                    <p className='heading'>Product</p>
                    {product.map((item) => <p>{item}</p>)}
                </div>
                <div className='links'>
                    <p className='heading'>Company</p>
                    {company.map((item) => <p>{item}</p>)}
                </div>
                <div className='links'>
                    <p className='heading'>Resources</p>
                    {resources.map((item) => <p>{item}</p>)}
                </div>
                <div className='links'>
                    <p className='heading'>Policies</p>
                    {policies.map((item) => <p>{item}</p>)}
                </div>
            </div>

            <div className='footer'>
                <Logo />
                <button className='open-discord-button purple'>Open Discord</button>
            </div>
        </div>
    )
}

export default Footer