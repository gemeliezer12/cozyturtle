const About = () => {
    return (
        <div className="padding-x-32 twnB7Cz2Lp" style={{
            display: "grid",
            gridTemplateColumns: "1fr 40%",
            gap: "20px"
        }}>
            <div className="column gap-10">
                <div>
                    <p className="ff-cubano fs-32">About me</p>
                </div>
                <div>
                    <p>
                        I am a front-end web developer. I mainly build websites with React JS. I could also do backend using Firebase. I love programming and building websites. And I would love to help you build your dream project.
                    </p>
                </div>
            </div>
            <div className="column gap-10">
                <div>
                    <p className="ff-cubano fs-32">Skills</p>
                </div>
                <div className="row gap-6" style={{
                    flexWrap: "wrap"
                }}>
                    <div className="kvcdz3lpy3" style={{
                        backgroundColor: "var(--indigo)"
                    }}>
                        <p>HTML</p>
                    </div>
                    <div className="kvcdz3lpy3" style={{
                        backgroundColor: "var(--indigo)"
                    }}>
                        <p>CSS</p>
                    </div>
                    <div className="kvcdz3lpy3" style={{
                        backgroundColor: "var(--indigo)"
                    }}>
                        <p>JavaScript</p>
                    </div>
                    <div className="kvcdz3lpy3" style={{
                        backgroundColor: "var(--indigo)"
                    }}>
                        <p>React</p>
                    </div>
                    <div className="kvcdz3lpy3" style={{
                        backgroundColor: "var(--indigo)"
                    }}>
                        <p>Firebase</p>
                    </div>
                    <div className="kvcdz3lpy3" style={{
                        backgroundColor: "var(--indigo)"
                    }}>
                        <p>PHP</p>
                    </div>
                    <div className="kvcdz3lpy3" style={{
                        backgroundColor: "var(--indigo)"
                    }}>
                        <p>MySQL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
