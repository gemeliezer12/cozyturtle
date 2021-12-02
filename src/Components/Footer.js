const Footer = () => {
    return (
        <div className="padding-x-32 dark padding-y-60 column align-center" style={{
            backgroundColor: "var(--bg-color-2)"
        }}>
            <div>
                <p>Created with React <i className="fab fa-react" style={{
                    color: "var(--light-blue)"
                }}></i> by <a href="https://github.com/gemeliezer12" target="_blank" style={{
                    color: "var(--blue)",
                    textDecoration: "underline"
                }}>Gem Eliezer</a>  <i className="fab fa-github" style={{
                    color: "white"
                }}></i></p>
            </div>
        </div>
    )
}

export default Footer
