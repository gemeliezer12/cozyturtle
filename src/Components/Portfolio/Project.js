import { Link } from "react-router-dom"

const Project = ({project, projectId}) => {
    return (
        <div className="padding-all-15 column gap-10 space-between" style={{
            backgroundColor: "var(--bg-color-4)",
            borderRadius: "10px",
            boxShadow: "0 0 6px -4px black",
        }}>
            <div style={{
                aspectRatio: "16/9"
            }}>
                <img style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }} src={`images/${project.thumbnail}`} alt=""/>
            </div>
            <div>
                <p className="ff-cubano fs-26">{project.name}</p>
            </div>
            <div>
                <p>{project.description}</p>
            </div>
            <Link to={`/portfolio/${project.link_name}`} className="solid-btn" style={{
                background: "var(--indigo)"
            }}>
                <p>Visit</p>
            </Link>
        </div>
    )
}

export default Project
