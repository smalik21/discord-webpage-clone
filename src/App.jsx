import { useState } from 'react'
import './App.css'
import MainPage from './MainPage'
import Section from './Section'
import Footer from './Footer'
import section1Image from './assets/section1-image.svg'
import section2Image from './assets/section2-image.svg'
import section3Image from './assets/section3-image.svg'
import endSectionImage from './assets/end-section-image.svg'
import DownloadIcon from './assets/download-icon-white.png'

const sections = [
    {
        imageFirst: true,
        image: section1Image,
        title: 'Create an invite-only place where you belong',
        content: 'Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.',
        color: 'white'
    },
    {
        imageFirst: false,
        image: section2Image,
        title: 'Where hanging out is easy',
        content: 'Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.',
        color: 'grey'
    },
    {
        imageFirst: true,
        image: section3Image,
        title: 'From few to a fandom',
        content: 'Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.',
        color: 'white'
    }
]

function App() {

    return (
        <div className='App'>
            <MainPage />
            {sections.map((section) => {
                return (
                    <Section
                        imageFirst={section.imageFirst}
                        image={section.image}
                        title={section.title}
                        content={section.content}
                        color={section.color}
                    />
                )
            })}
            <div className='conclusion'>
                <h1 className='title'>RELIABLE TECH FOR STAYING CLOSE</h1>
                <p className='content'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
                <img className='image' src={endSectionImage} />
                <div className='download'>
                    <h2 className='question'>Ready to start your journey?</h2>
                    <button className='download-button'><img src={DownloadIcon} />Download for Windows</button>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default App
