const Footer = () => {
    return (
        <div className="padding-x-32 dark padding-y-60 column align-center" style={{
            backgroundColor: "var(--bg-color-2)",
            height: "100%"
        }}>
            <div className="row align-center gap-4">
                <p>Created with React <i className="fab fa-react" style={{
                    color: "var(--light-blue)"
                }}></i> by <a href="https://github.com/gemeliezer12" target="_blank" style={{
                    color: "var(--blue)",
                    textDecoration: "underline"
                }}>Gem Eliezer</a>  <i className="fab fa-github" style={{
                    color: "white"
                }}></i></p>
            </div>
            <div className="row align-center gap-4">
                <p>
                    Interested in working with me? Visit my
                </p>
                <img src="images/firverr.png" alt="" style={{
                    height: "16px",
                    width: "16px",
                    borderRadius: "50%"
                }}/>
                <a href="https://www.fiverr.com/gemeliezer?up_rollout=true" style={{
                    color: "var(--blue)",
                    textDecoration: "underline"
                }}>
                    fiverr account
                </a>
            </div>
        </div>
    )
}

export default Footer
