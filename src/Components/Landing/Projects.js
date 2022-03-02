import { Link } from "react-router-dom"

const Projects = () => {
    return (
            <div className="padding-x-32 padding-top-80 ggcYR7EQsk">
                <div className="text-center" style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    width: "100%",
                    gap: "2px",
                }}>
                    <div style={{
                        background: 
                        "linear-gradient(45deg, var(--blue) 0%, var(--indigo) 50%, var(--purple) 100%)",
                        padding: "2px",
                        borderTopLeftRadius: "20px",
                        overflow: 'hidden'
                    }}>
                        <div className="height-100pc width-100pc align-center justify-center" style={{
                            backgroundColor: "var(--bg-color-2)",
                            borderTopLeftRadius: "20px",
                        }}>
                            <p className="fw-900" style={{
                                background: "-webkit-linear-gradient(45deg, var(--blue) 0%, var(--indigo) 100%)",
                                fontSize: "20px",
                                webkitBackgroundClip: "text",
                                webkitTextFillColor: "transparent",
                            }}>My Projects</p>
                        </div>
                    </div>
                    <div className="Nw77L5UbA7" style={{
                        aspectRatio: "16/9",
                        borderTopRightRadius: "20px",
                        overflow: "hidden",
                    }}>
                        <img src="images/cozy-turtle.png" alt="" style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}/>
                    </div>
                    <div className="oaufAfS7tU" style={{
                        aspectRatio: "16/9",
                        borderBottomLeftRadius: "20px",
                        overflow: "hidden"
                    }}>
                        <img src="images/twitter-clone-1.png" alt="" style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}/>
                    </div>
                    <Link to="/portfolio" className="mxr0Kms3m5" style={{
                        background: 
                        "linear-gradient(45deg, var(--blue) 0%, var(--indigo) 50%, var(--purple) 100%)",
                        padding: "2px",
                        borderBottomRightRadius: "20px",
                        overflow: 'hidden'
                    }}>
                        <div className="height-100pc width-100pc align-center justify-center" style={{
                            backgroundColor: "var(--bg-color-2)",
                            borderBottomRightRadius: "20px",
                        }}>
                            <p className="fw-900" style={{
                                background: "-webkit-linear-gradient(45deg, var(--blue) 0%, var(--indigo) 100%)",
                            webkitBackgroundClip: "text",
                            webkitTextFillColor: "transparent",
                            fontSize: "20px"
                            }}>Show More+</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <div>
                        <p className="fs-32 ff-titan-one">Project</p>
                    </div>
                    <div>
                        <p>
                            Here are some of the projects I've done. Feel free to take a look
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Projects
