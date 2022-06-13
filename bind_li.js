
bindMenu();

function bindMenu() {
    let menu = document.querySelector('#menu');

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target.tagName == 'LI') {
            console.log(target.innerHTML);
        }
        
    });
}

let add_li = document.querySelector('#add-li');

add_li.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerHTML = 99;
    let menu = document.querySelector('#menu');
    menu.appendChild(li);
});

// function bindLi() {
//     let lis = document.querySelectorAll('#menu li');

//     lis.forEach((li) => {
//         li.addEventListener('click', () => {
//             console.log(li.innerHTML);
//         })
//     })
// }