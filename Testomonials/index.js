const testomonials = [
    {
        name:'Jessica Johnson',
        photoUrl:"https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
        text:'I am extremely satisfied with the exceptional service provided by apple. Their cabdiraxmaancaliibraahim@gmail.com is truly top-notch, meeting all my needs and expectations. I highly recommend their services to anyone looking for reliability and efficiency.'
    },

    {
        name:'Emily Johnson',
        photoUrl:"https://images.unsplash.com/photo-1635525382666-4d07a1d48d31?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:'I am incredibly impressed with the service provided by apple. Their cabdiraxmaancaliibraahim@gmail product is top-notch and exceeded all my expectations. I highly recommend giving them a try for all your email needs.'

    },
    {
        name:' Emily Williams',
        photoUrl:"https://images.unsplash.com/photo-1583872853143-adca5736c654?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        text:'I recently signed up for apples  cabdiraxmaancaliibraahim@gmail service and Im amazed by the level of professionalism and efficiency. I can now easily manage my emails anywhere, anytime. Highly recommend it!'
    },
];

const nameEl= document.querySelector('.username')
const textEl= document.querySelector('.text')
const imgEl= document.querySelector('img ')



let idx = 0;
updatedTestomonial () ;
function updatedTestomonial () {
    const {name, photoUrl, text} = testomonials[idx];
        nameEl.innerText = name;
        imgEl.src = photoUrl;
        textEl.innerText = text;
        idx++

    if (idx === testomonials.length) {
        idx = 0;
    }

        setTimeout(() => {
            updatedTestomonial()
        },5000)
}