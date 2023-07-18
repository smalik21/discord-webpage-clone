import discord from './assets/discord.svg';

function Logo() {
    return (
        <div className='Logo'>
            <a>
                <img className='logo' src={discord} />
                <p>Discord</p>
            </a>
        </div>
    )
}

export default Logo