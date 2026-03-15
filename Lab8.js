window.addEventListener("load", function() {  
    var thumbs = document.getElementById("thumbnails");

    // Event delegation untuk klik gambar kecil [cite: 24]
    thumbs.addEventListener("click", function (e) {
        if (e.target.nodeName.toLowerCase() == 'img') { // [cite: 27]
            var clickedImageSource = e.target.src; // [cite: 29]
            
            // Logik menukar folder small kepada medium 
            var newSrc = clickedImageSource.replace("small", "medium");
            
            var featuredImage = document.querySelector("#featured img"); // [cite: 34]
            featuredImage.src = newSrc; // [cite: 35]
            featuredImage.title = e.target.title; // [cite: 36]
        }
    });

    var featured = document.getElementById("featured"); // [cite: 39]

    // Mouseover untuk tunjuk kapsyen [cite: 40]
    featured.addEventListener("mouseover", function (e) {
        var caption = document.querySelector("#featured figcaption");
        caption.style.opacity = 0.80; // [cite: 44]
        caption.innerHTML = document.querySelector("#featured img").title; // [cite: 45]
    });

    // Mouseout untuk sembunyi kapsyen [cite: 46]
    featured.addEventListener("mouseout", function (e) {
        var caption = document.querySelector("#featured figcaption");
        caption.style.opacity = 0; // [cite: 50]
    });
});