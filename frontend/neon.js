document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const body = document.body;
    const bookListItems = document.querySelectorAll("#book-list li");
    
    // 🔥 Incliner les livres de façon aléatoire 🔥
    bookListItems.forEach(item => {
        const randomRotation = Math.random() * 10 - 5; // Rotation entre -5 et 5 degrés
        item.style.setProperty("--random-rotation", randomRotation);
    });
    
    // 🔥 Ajout d'images flottantes 🔥
    for (let i = 0; i < 5; i++) {
        let img = document.createElement("img");
        img.src = "https://source.unsplash.com/150x150/?cyberpunk"; // Image aléatoire
        img.classList.add("floating-image");
        img.style.left = `${Math.random() * 90}vw`;
        img.style.top = `${Math.random() * 80}vh`;
        document.body.appendChild(img);
    }
    
    // 🔥 Ajout d'une vague lumineuse sur les titres 🔥
    document.querySelectorAll("h1, h2").forEach(title => {
        setInterval(() => {
            title.style.transform = `scale(${1 + Math.random() * 0.2}) rotate(${Math.random() * 10 - 5}deg)`;
        }, 500);
    });
    
    // 🔥 Effet pulsant sur les boutons 🔥
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.boxShadow = "0 0 40px #ff00ff";
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = "0 0 10px #ff00ff";
        });
        
        button.addEventListener('click', () => {
            button.style.transform = "rotate(10deg) scale(1.2)";
            setTimeout(() => {
                button.style.transform = "rotate(0) scale(1)";
            }, 200);
        });
    });
    
    // 🔥 Animation glitch aléatoire 🔥
    setInterval(() => {
        document.querySelectorAll("h1, h2").forEach(el => {
            el.style.opacity = Math.random() > 0.8 ? 0.8 : 1;
            el.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
        });
    }, 100);
});
