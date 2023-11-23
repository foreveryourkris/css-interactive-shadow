const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 300;

function shadow (ev) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;

    let { offsetX: x, offsetY: y } = ev;
    // let x = ev.offsetX;
    // let y = ev.offsetY;

    if (this !== ev.target) {
        x = x + ev.target.offsetLeft;
        y = y + ev.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${yWalk * -1}px 0 blue,
    ${xWalk}px ${yWalk * -1}px 0 green,
    ${xWalk * -1}px ${yWalk}px 0 yellow
    `
}

hero.addEventListener('mousemove', shadow);