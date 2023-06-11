import AboutPage from "./pages/About"
import HomePage from "./pages/Home"
// import NotFoundPage from "./pages/NotFoundPage"
import ProjectPage from "./pages/project"
// import ProjectDetailPage from "./pages/ProjectDetail"
import { router, render } from './lib'
import ProjectManagementPage from "./pages/Admin/ProjectManagementt"
import AddProjectPage from "./pages/Admin/AddProject"
import UpdateProjectPage from "./pages/Admin/UpdateProject"
import "../src/css/styles.css"
import "../src/css/style.css"
import Store from "./pages/Store"
const app = document.querySelector("#app")

router.on('/', () => { //sử dụng phương thức on để khai báo đường dẫn đến từng page
    return render(HomePage, app)
})
router.on('/about', () => {
    return render(AboutPage, app)
})
router.on('/project', () => {
    return render(ProjectPage, app)
})
router.on('/project/:id', ({ data }) => {
    // console.log(data); // {id:1000}
    return render(() => {
        return ProjectDetailPage(data)
    }, app) // ProjectDetailPage()()
})
router.on('/store', () => {
    return render(Store, app)
})
// Admin
router.on('/admin/project', () => {
    return render(ProjectManagementPage, app)
})
router.on('/admin/project/add', () => {
    return render(AddProjectPage, app)
})
router.on('/admin/project/update/:id', ({ data }) => {
    return render(() => {
        return UpdateProjectPage(data)
    }, app)
})

router.notFound(() => {
    return render(NotFoundPage, app)
})

router.resolve() //sử dụng phương thức resolve để thực thi 