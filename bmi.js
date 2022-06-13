
if (validDom()) {
    calc.addEventListener('click', run);
}

function initDom() {
    return {
        height: document.querySelector('#height'),
        weight: document.querySelector('#weight'),
        calc: document.querySelector('#calc'),
        level: document.querySelector('#level'),
        level_color: document.querySelector('#level-color'),
    }
}

function run() {
    let dom = initDom();
    let bmi = getBmi(dom.height.value, dom.weight.value);
    let level = getLevel(bmi);
    
    dom.level.innerHTML = level.value

    dom.level_color.classList.remove('alert-success');
    dom.level_color.classList.remove('alert-danger');
    dom.level_color.classList.add(level.classes);

}
 
function validDom() {
    let dom = initDom();
    for (let i in dom) {
        if (!dom[i]) {
            return false;
        }
    }

    return true;
}

function getBmi(height, weight) {
    height = height / 100; // 公分轉公尺
    return Math.round(weight / (height * height) * 10) / 10
}

function getLevel(bmi) {

    let level = {classes: 'alert-success', value: '正常'};

    if (bmi < 18.5) {
        level.classes = 'alert-danger';
        level.value = '過輕';
        return level;
    }

    if (bmi >= 35) {
        level.classes = 'alert-danger';
        level.value = '重度肥胖';
        return level;
    }

    if (bmi >= 30) {
        level.classes = 'alert-danger';
        level.value = '中度肥胖';
        return level;
    }

    if (bmi >= 27) {
        level.classes = 'alert-danger';
        level.value = '輕度肥胖';
        return level;
    }

    if (bmi >= 24) {
        level.classes = 'alert-danger';
        level.value = '過重';
        return level;
    }

    return level;
}