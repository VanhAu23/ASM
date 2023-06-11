import Header from '../component/Header'
import footer from '../component/Footer'


const HomePage = () => {

    return `
    ${Header}
    <section class="page-section clearfix">
    <div class="container">
        <div class="intro">
            <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="src/assets/img/fab6b49cf49f49e8b9992fcdda628529_9366.webp" alt="..." />
            <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                <h2 class="section-heading mb-4">
                    <span class="section-heading-upper">Spotlight</span>
                    <span class="section-heading-lower">MOVE FOR THE PLANET </span>
                </h2>
                <p class="mb-3">Join now on the adidas Running app and move for the places we play.</p>
                <div class="intro-button mx-auto"><a class="btn btn-primary btn-xl" href="#!">Join now!</a></div>
            </div>
        </div>
    </div>
</section>
<section class="page-section cta">
    <div class="container">
        <div class="row">
            <div class="col-xl-9 mx-auto">
                <div class="cta-inner bg-faded text-center rounded">
                    <h2 class="section-heading mb-4">
                        <span class="section-heading-upper">Our Story</span>
                        <span class="section-heading-lower">STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949</span>
                    </h2>
                    <p class="mb-0">Sport keeps us fit. Keeps you mindful. Brings us together. Through sport we have the power to change lives. Whether it is through stories of inspiring athletes. Helping you to get up and get moving. Sportswear featuring the latest technologies, to up your performance. Beat your PB.adidas offers a home to the runner, the basketball player, the soccer kid, the fitness enthusiast. The weekend hiker that loves to escape the city</p>
                </div>
            </div>
        </div>
    </div>
</section>
${footer}
    `
}

export default HomePage