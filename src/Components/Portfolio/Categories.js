import { useState } from "react"

const Categories = ({ categories, categoriesHandler, currentCategories }) => {

    return (
        <div className="row flex-wrap gap-6 padding-top-10" style={{
            transitionDuration: "0.1s"
        }}>
            {currentCategories.includes("Show all") ? 
            <div className={`kvcdz3lpy3 cursor-pointer`} style={{
                backgroundColor: "var(--indigo)",
            }} onClick={() => categoriesHandler("Show all", "remove")}>
                <p>
                    Show all
                </p>
            </div>
            :
            <div className={`kvcdz3lpy3 cursor-pointer`} style={{
                color: "var(--indigo)",
                borderColor: "var(--indigo)"
            }} onClick={() => categoriesHandler("Show all", "add")}>
                <p>
                    Show all
                </p>
            </div>
            }
            {categories.map((category, index) => (
                currentCategories.includes(category) ? 
                <div key={index} className="kvcdz3lpy3 cursor-pointer" style={{
                    backgroundColor: "var(--indigo)"
                }} onClick={() => categoriesHandler(category, "remove")}>
                    <p>
                        {category}
                    </p>
                </div>
                :
                <div key={index} className="kvcdz3lpy3 cursor-pointer" style={{
                    color: "var(--indigo)",
                    borderColor: "var(--indigo)"
                }} onClick={() => categoriesHandler(category, "add")}>
                    <p>
                        {category}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Categories
