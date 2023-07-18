

function Navigation() {
    const links = ['Download', 'Nitro', 'Discover', 'Safety', 'Support', 'Blog', 'Careers'];

    return (
        <div className="Navigation">
            {links.map((link) => <a className="link">{link}</a>)}
        </div>
    )
}

export default Navigation