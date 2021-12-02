import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

import ImageSlider from "../../Assets/ImageSlider"

const projectList = require("../../db.json")

const Project = () => {
    const [currentProject, setCurrentProject] = useState()

    const { currentProjectLinkName } = useParams()

    const where = (array, key, value) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i].doc[key] === value) {
                return array[i]
            }
        }
    }

    useEffect(() => {
        const res = where(projectList, "link_name", currentProjectLinkName)
        setCurrentProject({project: res.doc, id: res.id})
    }, [currentProjectLinkName])

    if(!currentProject) return ""

    console.log(currentProject.project.link, currentProject.project.code)

    return (
        <div className="padding-y-40 padding-x-32 HPNXA06qJ7">
            <div>
                <p className="fs-40 ff-cubano text-center">{currentProject.project.name}</p>
            </div>
            <div className="padding-top-32"/>
            <ImageSlider images={currentProject.project.image_slider}/>
            <div className="padding-top-32">
                {currentProject.project.link ?
                    <div className="flex gap-10">
                        {currentProject.project.link ?
                        <a href={currentProject.project.link} target="_blank" className="solid-btn ut7pmfjxxd" style={{
                            backgroundColor: "var(--indigo)"
                        }}>
                            <p>Visit</p>
                        </a>
                        :
                        ""
                        }
                        {currentProject.project.code ?
                        <a href={currentProject.project.code} target="_blank" className="solid-btn ut7pmfjxxd" style={{
                            backgroundColor: "var(--rose)"
                        }}>
                            <p>Code</p>
                        </a>
                        :
                        ""
                        }
                    </div>
                : ""}
                <div className="padding-top-20"/>
                <div>
                    <p className="ff-cubano fs-32">About This project</p>
                    <p>
                        {currentProject.project.details}
                    </p>
                </div>
                <div className="padding-top-20">
                    <p className="ff-cubano fs-32">Tech Stack</p>
                    <ul className="column">
                        {currentProject.project.categories.map((tag, index) => (
                            <li key={index} className="row inline-flex align-center gap-10">
                                <div className="margin-x-10" style={{
                                    backgroundColor: "var(--text-color-1)",
                                    height: "4px",
                                    width: "4px",
                                    borderRadius: "20px"
                                }}></div>
                                <p>
                                    {tag}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Project
