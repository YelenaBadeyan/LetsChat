window.addEventListener('load', (event) => {
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username)
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else {
        if (!isEmail(emailValue)) {
            setErrorFor(email, 'Email is not valid');
        } else {
            setSuccessFor(email);
        }
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password)
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank');
    } else if (passwordValue != password2Value) {
        setErrorFor(password2, 'Password does not match');
    } else {
        setSuccessFor(password2)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function isEmail(email) {
        return /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(email);
    }



    //particlesJS("particles-js", {
    //    "particles": {
    //        "number": {
    //            "value": 380,
    //            "density": {
    //                "enable": true,
    //                "value_area": 800
    //            }
    //        },
    //        "color": {
    //            "value": "#ffffff"
    //        },
    //        "shape": {
    //            "type": "circle",
    //            "stroke": {
    //                "width": 0,
    //                "color": "#000000"
    //            },
    //            "polygon": {
    //                "nb_sides": 5
    //            },
    //            "image": {
    //                "src": "img/github.svg",
    //                "width": 100,
    //                "height": 100
    //            }
    //        },
    //        "opacity": {
    //            "value": 0.5,
    //            "random": false,
    //            "anim": {
    //                "enable": false,
    //                "speed": 1,
    //                "opacity_min": 0.1,
    //                "sync": false
    //            }
    //        },
    //        "size": {
    //            "value": 3,
    //            "random": true,
    //            "anim": {
    //                "enable": false,
    //                "speed": 40,
    //                "size_min": 0.1,
    //                "sync": false
    //            }
    //        },
    //        "line_linked": {
    //            "enable": true,
    //            "distance": 150,
    //            "color": "#ffffff",
    //            "opacity": 0.4,
    //            "width": 1
    //        },
    //        "move": {
    //            "enable": true,
    //            "speed": 6,
    //            "direction": "none",
    //            "random": false,
    //            "straight": false,
    //            "out_mode": "out",
    //            "bounce": false,
    //            "attract": {
    //                "enable": false,
    //                "rotateX": 600,
    //                "rotateY": 1200
    //            }
    //        }
    //    },
    //    "interactivity": {
    //        "detect_on": "canvas",
    //        "events": {
    //            "onhover": {
    //                "enable": true,
    //                "mode": "grab"
    //            },
    //            "onclick": {
    //                "enable": true,
    //                "mode": "push"
    //            },
    //            "resize": true
    //        },
    //        "modes": {
    //            "grab": {
    //                "distance": 140,
    //                "line_linked": {
    //                    "opacity": 1
    //                }
    //            },
    //            "bubble": {
    //                "distance": 400,
    //                "size": 40,
    //                "duration": 2,
    //                "opacity": 8,
    //                "speed": 3
    //            },
    //            "repulse": {
    //                "distance": 200,
    //                "duration": 0.4
    //            },
    //            "push": {
    //                "particles_nb": 4
    //            },
    //            "remove": {
    //                "particles_nb": 2
    //            }
    //        }
    //    },
    //    "retina_detect": true
    //});


    ///* ---- stats.js config ---- 

    //var count_particles, stats, update;
    //stats = new Stats;
    //stats.setMode(0);
    //stats.domElement.style.position = 'absolute';
    //stats.domElement.style.left = '0px';
    //stats.domElement.style.top = '0px';
    //document.body.appendChild(stats.domElement);
    //count_particles = document.querySelector('.js-count-particles');
    //update = function () {
    //    stats.begin();
    //    stats.end();
    //    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    //        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    //    }
    //    requestAnimationFrame(update);
    //};
    //requestAnimationFrame(update);*/

});


