import React from 'react';
import '../css/Home.css';

function Home() {
    return (
        <>
        <section className="sectionone">
            <img src="./img/image_1(2).jpg"/>
                <div className="bg">
                    <h1 className="tagline">Savor the Flavor Pasta Recipes Made Easy</h1>
                    <p className="description">Join us on a flavorful expedition into the world of pasta, where each recipe is a celebration of tradition, innovation, and the pure pleasure of savoring a delicious meal.</p>
                </div>
            </section>
            
            <section className="sectiontwo">
                <h2>3 Basic Pasta Sauces that even You Can Reinvent</h2>
                <div className="container">

                    <div className="column">
                        <img src="./img/marinara.png"/>
                            <h1>Marinara Sauce</h1>
                            <p> A classic Italian tomato-based sauce typically made with tomatoes, garlic, onions, and herbs.</p>
                        </div>

                    <div className="column">
                        <img src="./img/alfredo.png"/>
                            <h1>Alfredo Sauce</h1>
                            <p>A creamy sauce made with butter, heavy cream, and Parmesan cheese, originating from Rome.</p>
                        </div>

                    <div className="column">
                        <img src="./img/pesto.png"/>
                            <h1>Pesto Sauce</h1>
                            <p>A vibrant sauce made with fresh basil, garlic, pine nuts, Parmesan cheese, and olive oil.</p>
                        </div>
                </div>
            </section>
            
            <section className="sectionthree">
                <div className="left-col">
                    <h1>Explore the World of Pasta</h1>
                    <p>Pasta is a versatile and widely loved dish in Italian cuisine, consisting primarily of unleavened dough made from durum wheat flour and water, shaped into various forms and sizes. It's a staple food in many cultures around the world and comes in numerous shapes, each with its own unique texture, flavor, and sauce compatibility.</p>
                </div>

                <img src="./img/s_3.jpg"/>
                </section><section className="sectionfour">
                <h1>Most Popular Recipes</h1>

                <div className="s4_container">

                    <div className="s4_column">
                        <img src="./img/spaghetti.png"/>
                            <h2>Filipino Sweet Spaghetti</h2>
                        </div>

                    <div className="s4_column">
                        <img src="./img/carbonara.png"/>
                            <h2>Creamy Carbonara</h2>
                        </div>

                    <div className="s4_column">
                        <img src="./img/aglioEolio.png"/>
                            <h2>Shrimp Aglio e Olio</h2>
                        </div>

                    <div className="s4_column">
                        <img src="./img/lasagna.png"/>
                            <h2>classNameic Italian Lasagna</h2>
                        </div>
                </div>
            </section><section className="sectionfive">
                <div className="s5_left-col">
                    <h2>Join the family</h2>
                    <p>Sign up for a delicious surprise in your inbox</p>
                </div>

                <div className="s5_right-col">
                    <input type="email" placeholder="Enter email address"/>
                        <button>Sign Up</button>
                    </div>

            </section>
            </>

    );
}

export default Home