import footer from "../component/Footer";
import Header from "../component/Header";

const AboutPage = () => {
    return `${Header}
 
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

export default AboutPage