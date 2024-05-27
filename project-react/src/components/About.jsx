import React from 'react';
import '../css/About.css';

function About(){
    return (
        <body>
            <section classNameName="sectionone">
                <div className="s1_left-col">
                    <img src="./img/us.jpg"/>
                </div>

                <div className="s1_right-col">
                    <h1>About Us</h1>
                    <h2>Hi, we are Ariana Palle and Hare Pabatao!</h2>
                    <p>Welcome to Pasta Ricette, your ultimate destination for delectable pasta recipes! Founded by Ariana and Hare, two passionate 2nd-year IT students from the University of Science and Technology of Southern Philippines, our website is dedicated to bringing you a delightful array of pasta dishes from classNameic favorites to innovative creations.</p>
                    <p>What began as a performance task for our Web Systems and Technologies className has blossomed into a vibrant community for pasta lovers everywhere.</p>
                </div>

            </section>

            <section className="sectiontwo">
                        <img src="./img/img1.jpg"/>

            </section>

            <section className="sectionthree">
                <div className="s2_left-col">
                    <h1>Our Mission</h1>
                    <p>At Pasta Ricette, we believe that pasta is more than just food—it's an experience. Our mission is to make the art of pasta making accessible to everyone, regardless of their cooking skills. We strive to provide easy-to-follow recipes, expert tips, and creative ideas that will help you create delicious pasta dishes at home. Whether you’re looking for a quick weeknight meal or a gourmet dish to impress your guests, we have something for everyone.</p>
                </div>

                <div className="s2_right-col">
                    <img src="./img/img2.jpg"/>
                </div>
            </section>

        </body>
    );
}

export default About