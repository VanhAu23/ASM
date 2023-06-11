import footer from "../component/Footer"
import Header from "../component/Header"

const Store = () => {
    return `
    ${Header}
    <section class="page-section cta">
    <div class="container">
        <div class="row">
            <div class="col-xl-9 mx-auto">
                <div class="cta-inner bg-faded text-center rounded">
                    <h2 class="section-heading mb-5">
                        <span class="section-heading-upper">Come On In</span>
                        <span class="section-heading-lower">We're Open</span>
                    </h2>
                    <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                        <li class="list-unstyled-item list-hours-item d-flex">
                            Sunday
                            <span class="ms-auto">Closed</span>
                        </li>
                        <li class="list-unstyled-item list-hours-item d-flex">
                            Monday
                            <span class="ms-auto">7:00 AM to 8:00 PM</span>
                        </li>
                        <li class="list-unstyled-item list-hours-item d-flex">
                            Tuesday
                            <span class="ms-auto">7:00 AM to 8:00 PM</span>
                        </li>
                        <li class="list-unstyled-item list-hours-item d-flex">
                            Wednesday
                            <span class="ms-auto">7:00 AM to 8:00 PM</span>
                        </li>
                        <li class="list-unstyled-item list-hours-item d-flex">
                            Thursday
                            <span class="ms-auto">7:00 AM to 8:00 PM</span>
                        </li>
                        <li class="list-unstyled-item list-hours-item d-flex">
                            Friday
                            <span class="ms-auto">7:00 AM to 8:00 PM</span>
                        </li>
                        <li class="list-unstyled-item list-hours-item d-flex">
                            Saturday
                            <span class="ms-auto">9:00 AM to 5:00 PM</span>
                        </li>
                    </ul>
                    <p class="address mb-5">
                        <em>
                            <strong>1116 Orchard Street</strong>
                            <br />
                            Golden Valley, Minnesota
                        </em>
                    </p>
                    <p class="mb-0">
                        <small><em>Call Anytime</em></small>
                        <br />
                        (317) 585-8468
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="page-section about-heading">
    <div class="container">
        <img class="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enPH/Images/hoc-black-pink-tcc_tcm184-1024879.png" alt="..." />
        <div class="about-heading-content">
            <div class="row">
                <div class="col-xl-9 col-lg-10 mx-auto">
                    <div class="bg-faded rounded p-5">
                        <h2 class="section-heading mb-4">
                            <span class="section-heading-upper">About US</span>
                            <span class="section-heading-lower">Workout clothes, for any sport</span>
                        </h2>
                        <p>Founded in 1987 by the Hernandez brothers, our establishment has been serving up rich coffee sourced from artisan farmers in various regions of South and Central America. We are dedicated to travelling the world, finding the best coffee, and bringing back to you here in our cafe.</p>
                        <p class="mb-0">
                        Through our collections we blur the borders between high fashion and high performance. Like our adidas by Stella McCartney athletic clothing collection – designed to look the part inside and outside of the gym. Or some of our adidas Originals lifestyle pieces, that can be worn as sportswear too. Our lives are constantly changing. Becoming more and more versatile. And adidas designs with that in mind.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
${footer}
    `
}
export default Store