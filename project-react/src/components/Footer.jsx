import React from 'react';
import '../css/Footer.css';

function Footer() {
    return (
        <footer>
            <div class="footer-left">
                <img src="./img/footer_img.png"/>
                <p>Pasta Ricette © 2024</p>
            </div>

            <div class="footer-center">
                <div>
                    <i class="fa fa-map-marker"></i>
                    <p>FMGG+XMC, Claro M. Recto Ave Cagayan de Oro, 9000 Misamis Oriental</p>
                </div>

                <div>
                    <i class="fa fa-phone"></i>
                    <p>+1.555.555.5555</p>
                </div>

                <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="pastaricette@gmail.com">pastaricette@gmail.com</a></p>
                </div>
            </div>

            <div class="footer-right">
                <span>About the website</span>
                <p>Your go-to hub for pasta recipes. Pasta Ricette is a dedicated hub for pasta enthusiasts, featuring a diverse array of classic and innovative dishes.</p>

                <div class="socialIcon">
                    <a href="https://www.facebook.com/msharekrishnaaa"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/krshndmp_/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/?lang=en"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://www.pinterest.ph/"><i class="fa-brands fa-pinterest"></i></a>
                </div>
            </div>

        </footer>
    );
}

export default Footer