import Header from "../component/Header"
import { projectList } from "../../db.json"
import footer from "../component/Footer"

const ProjectPage = () => {
    return `
    ${Header()}
    
       ${projectList.map((project) => {
        return `

        <section class="page-section">
            <div class="container">
                <div class="product-item">
                    <div class="product-item-title d-flex">
                        <div class="bg-faded p-5 d-flex ms-auto rounded">
                            <h2 class="section-heading mb-0">
                                <span class="section-heading-upper">${project.title}</span>
                                <span class="section-heading-lower">${project.content}</span>
                            </h2>
                        </div>
                    </div>
                    <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="${project.image}" alt="..." />
                    <div class="product-item-description d-flex me-auto">
                        <div class="bg-faded p-5 rounded"><p class="mb-0">${project.url}</p></div>
                        <div class="bg-faded p-5 rounded"><p class="mb-0">${project.repository}</p></div>
                    </div>
                </div>
            </div>
        </section>`
    }).join("")}
        ${footer()}
            `
}

export default ProjectPage