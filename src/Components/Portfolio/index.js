import TopNav from "../TopNav"
import Categories from "./Categories"
import Projects from "./Projects"
import Footer from "../Footer"
import { useEffect, useState } from "react"

const projects = require("../db.json")

const categories = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "PHP",
    "MySQL"
]

const Index = () => {

    const [currentCategories, setCurrentCategories] = useState(["Show all"])
    const [currentProjects, setCurrentProjects] = useState([])

    const categoriesHandler = (category, action) => {

        
        switch (action) {
            case "add":
                setCurrentCategories([...currentCategories, category])
                break
            case "remove":
                setCurrentCategories(currentCategories.filter((currentCategory) => currentCategory !== category));
                break
        }
    }

    useEffect(() => {
        if (currentCategories.includes("Show all")) setCurrentProjects(projects)

        else setCurrentProjects(
            projects.filter((project) => {
                for (let i = 0; i < project.doc.categories.length; i++) {
                    if (currentCategories.includes(project.doc.categories[i])) return project
                }
            })
        )

    }, [currentCategories])

    return (
        <>
            <div className="justify-center">
                <div className="padding-x-32 light padding-y-60 HPNXA06qJ7">
                    <div>
                        <p className="fs-32 ff-titan-one">
                            Projects
                        </p>
                    </div>
                    <div className="padding-top-10">
                        <p className="fs-20">
                            Here are some of the projects I've done
                        </p>
                    </div>
                    <Categories categories={categories} categoriesHandler={categoriesHandler} currentCategories={currentCategories}/>
                    <Projects projects={currentProjects}/>
                </div>
            </div>
        </>
    )
}

export default Index
