* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #ffffff;
    color: #111111;
    line-height: 1.6;
}


/* NAVIGATION */

header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    background: rgba(10, 10, 10, 0.95);
}

.navbar {
    max-width: 1200px;
    margin: auto;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
}

.logo {
    font-size: 28px;
    font-weight: 900;
    color: white;
}

.logo span,
.footer-logo span,
.hero h1 span,
.about-logo span {
    color: #00bfff;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 28px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
}

.nav-links a:hover {
    color: #00bfff;
}

.menu-btn {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
}


/* HERO */

.hero {
    min-height: 100vh;
    background:
        linear-gradient(rgba(0,0,0,.78), rgba(0,0,0,.78)),
        radial-gradient(circle at center, #063b54, #050505 65%);

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 100px 20px 50px;
    color: white;
}

.hero-content {
    max-width: 850px;
}

.small-title {
    color: #00bfff;
    font-weight: bold;
    letter-spacing: 4px;
    margin-bottom: 10px;
}

.hero h1 {
    font-size: clamp(60px, 12vw, 130px);
    line-height: 1;
    font-weight: 900;
    letter-spacing: -5px;
}

.hero h2 {
    margin: 25px 0 15px;
    font-size: 25px;
}

.hero p {
    font-size: 18px;
    color: #ddd;
    max-width: 650px;
    margin: auto;
}

.hero-buttons {
    margin-top: 35px;
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

.btn {
    display: inline-block;
    padding: 14px 28px;
    background: #00bfff;
    color: #000;
    text-decoration: none;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: .3s;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,191,255,.3);
}

.btn.secondary {
    background: transparent;
    border: 2px solid #00bfff;
    color: white;
}


/* GENERAL SECTIONS */

.section {
    padding: 100px 7%;
}

.dark-section {
    background: #080808;
    color: white;
}

.section-title {
    text-align: center;
    margin-bottom: 60px;
}

.section-title p {
    color: #00bfff;
    font-weight: bold;
    letter-spacing: 3px;
}

.section-title h2 {
    font-size: 42px;
}


/* ABOUT */

.about-container {
    max-width: 1100px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.about-image {
    height: 350px;
    background: linear-gradient(135deg, #050505, #063b54);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    border: 1px solid #00bfff;
}

.about-logo {
    font-size: 50px;
    font-weight: 900;
    color: white;
}

.about-text h3 {
    font-size: 30px;
    margin-bottom: 20px;
}

.about-text p {
    margin-bottom: 20px;
    color: #555;
}

.about-stats {
    display: flex;
    gap: 35px;
    margin-top: 30px;
}

.about-stats div {
    display: flex;
    flex-direction: column;
}

.about-stats strong {
    font-size: 28px;
    color: #00aee8;
}


/* SERVICES */

.services-container {
    max-width: 1150px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.service-card {
    padding: 35px 25px;
    background: #111;
    border: 1px solid #222;
    border-radius: 12px;
    transition: .3s;
}

.service-card:hover {
    transform: translateY(-8px);
    border-color: #00bfff;
}

.icon {
    font-size: 40px;
    margin-bottom: 15px;
}

.service-card h3 {
    margin-bottom: 10px;
    font-size: 22px;
}

.service-card p {
    color: #aaa;
}


/* PORTFOLIO */

.portfolio-container {
    max-width: 1150px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

.portfolio-card {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0,0,0,.1);
}

.portfolio-image {
    height: 250px;
    background: linear-gradient(135deg, #111, #00aee8);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    font-weight: bold;
}

.portfolio-info {
    padding: 20px;
    background: #f5f5f5;
}

.portfolio-info h3 {
    margin-bottom: 5px;
}


/* SKILLS */

.skills-container {
    max-width: 850px;
    margin: auto;
}

.skill {
    margin-bottom: 25px;
}

.skill-name {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}

.progress {
    width: 100%;
    height: 10px;
    background: #222;
    border-radius: 20px;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    background: #00bfff;
}


/* CONTACT */

.contact-container {
    max-width: 1050px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
}

.contact-info h3 {
    font-size: 32px;
    margin-bottom: 15px;
}

.contact-item {
    margin-top: 25px;
}

.contact-item strong {
    color: #00aee8;
}

form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

input,
textarea {
    width: 100%;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
    font-size: 16px;
}

input:focus,
textarea:focus {
    border-color: #00bfff;
}


/* FOOTER */

footer {
    background: #050505;
    color: white;
    text-align: center;
    padding: 50px 20px;
}

.footer-logo {
    font-size: 35px;
    font-weight: bold;
}

.socials {
    margin: 20px 0;
}

.socials a {
    color: #aaa;
    margin: 0 10px;
    text-decoration: none;
}

.socials a:hover {
    color: #00bfff;
}

.copyright {
    color: #777;
    margin-top: 20px;
}


/* WHATSAPP */

.whatsapp {
    position: fixed;
    right: 20px;
    bottom: 20px;
    background: #25D366;
    color: white;
    padding: 14px 20px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    box-shadow: 0 5px 20px rgba(0,0,0,.3);
    z-index: 999;
}


/* MOBILE */

@media (max-width: 800px) {

    .nav-links {
        position: absolute;
        top: 75px;
        left: 0;
        width: 100%;
        background: #050505;
        flex-direction: column;
        text-align: center;
        padding: 25px 0;
        display: none;
    }

    .nav-links.active {
        display: flex;
    }

    .menu-btn {
        display: block;
    }

    .about-container,
    .contact-container {
        grid-template-columns: 1fr;
    }

    .services-container {
        grid-template-columns: 1fr 1fr;
    }

    .portfolio-container {
        grid-template-columns: 1fr;
    }

    .hero h1 {
        letter-spacing: -2px;
    }
}


@media (max-width: 550px) {

    .section {
        padding: 75px 5%;
    }

    .services-container {
        grid-template-columns: 1fr;
    }

    .section-title h2 {
        font-size: 32px;
    }

    .about-stats {
        gap: 20px;
    }

    .about-logo {
        font-size: 35px;
    }

}