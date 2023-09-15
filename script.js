
window.onload = function() {
    // Variables for Fabergé Egg
    var fabergeButton = document.getElementById('purchaseButton');
    var fabergeVideo = document.getElementById('productVideo');
    
    // Variables for Kringle Kronic
    var kringleButton = document.getElementById('kringleproductButton');
    var kringleVideo = document.getElementById('kringleproductVideo');
    
    // Variables for Don't Press the Egg
    var dpteButton = document.getElementById('dptepurchaseButton');
    var dpteVideo = document.getElementById('dpteproductVideo');
    
    if (fabergeButton && fabergeVideo) {
        fabergeButton.addEventListener('click', function() {
            document.getElementById('fabergeImage').style.display = 'none';
            fabergeVideo.style.display = 'block';
            fabergeVideo.play();
            this.style.display = 'none';
    
            fabergeVideo.addEventListener('ended', function() {
                document.getElementById('fabergeImage').src = 'assets/EarlyEggcessA.gif';
                document.getElementById('fabergeImage').style.display = 'block';
                fabergeVideo.style.display = 'none';
                document.getElementById('nextButton').disabled = false;
                localStorage.setItem('fabergeProductViewed', 'true');
            });
        });
    }
    
    if (kringleButton && kringleVideo) {
        kringleButton.addEventListener('click', function() {
            document.getElementById('kringleImage').style.display = 'none';
            kringleVideo.style.display = 'block';
            kringleVideo.play();
            this.style.display = 'none';
    
            kringleVideo.addEventListener('ended', function() {
                document.getElementById('kringleImage').src = 'assets/EarlyEggcessB.gif';
                document.getElementById('kringleImage').style.display = 'block';
                kringleVideo.style.display = 'none';
                document.getElementById('nextButton').disabled = false;
                localStorage.setItem('kringleProductViewed', 'true');
            });
        });
    }
    
if (dpteButton && dpteVideo) {
    dpteButton.addEventListener('click', function() {
        // Play the button video animation when clicked
        this.play();
    });

    // Once the button video animation ends, play the product video
    dpteButton.addEventListener('ended', function() {
        document.getElementById('DPtEImage').style.display = 'none';
        dpteVideo.style.display = 'block';
        dpteVideo.play();
        dpteButton.style.display = 'none';
    });

    // Once the product video ends, do the additional logic
    dpteVideo.addEventListener('ended', function() {
        document.getElementById('DPtEImage').src = 'assets/EarlyEggcessC.gif';
        document.getElementById('DPtEImage').style.display = 'block';
        dpteVideo.style.display = 'none';
        document.getElementById('nextButton').disabled = false;
        localStorage.setItem('DPtEProductViewed', 'true');
    });
}

    
    // If the 'kringleProductViewed' flag is not set in localStorage, disable the link
    var kringleLinkElem = document.getElementById('kringleLink');
    if (!localStorage.getItem('fabergeProductViewed') && kringleLinkElem) {
        kringleLinkElem.classList.add('disabled');
        kringleLinkElem.addEventListener('click', function(event) {
            event.preventDefault();
        });
    }

    // If the 'DPtEProductViewed' flag is not set in localStorage, disable the link
    var DPtELinkElem = document.getElementById('DPtELink');
    if (!localStorage.getItem('kringleProductViewed') && DPtELinkElem) {
        DPtELinkElem.classList.add('disabled');
        DPtELinkElem.addEventListener('click', function(event) {
            event.preventDefault();
        });
    }
}

var dpteVideo = document.getElementById('dpteproductVideo');
var classifriedButton = document.getElementById('classifriedButton');

// Check if CutsceneC.mp4 has been viewed (in local storage)
if (!localStorage.getItem('DPtEProductViewed')) {
    // If not viewed, disable the Classifried button
    classifriedButton.disabled = true;
} else {
    // If viewed, enable the Classifried button
    classifriedButton.disabled = false;
}

if (dpteVideo) {
    dpteVideo.addEventListener('ended', function() {
        // Once the video ends, enable the Classifried button
        classifriedButton.disabled = false;

        // And set the item in local storage
        localStorage.setItem('DPtEProductViewed', 'true');
    });
}