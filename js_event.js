let account = document.querySelector('#account');
let account_sync = document.querySelector('#account-sync');

if (account) {
    // account.addEventListener('change', () => {
    //     console.log('changed');
    //     if (account_sync) {
    //         account_sync.innerHTML = account.value;
    //     }        
    // });

    // account.addEventListener('blur', () => {
    //     console.log(account.value);
    // });

    // account.addEventListener('keypress', () => {
    //     if (account_sync) {
    //         account_sync.innerHTML = account.value;
    //     }  
    // })

    account.addEventListener('keyup', () => {
        if (account_sync) {
            account_sync.innerHTML = account.value;
        }  
    })
}


let scope = document.querySelector('#scope');
let calc_btn = document.querySelector('#calc-btn');
let scope_level = document.querySelector('#scope-level');


if (scope && calc_btn) {
    calc_btn.addEventListener('click', () => {
        let value = scope.value;
        let level = '不及格';

        if (value < 0 || value > 100) {
            level = '超出範圍';
        } else {
            if (value >= 60) {
                level = '丁';
            }
    
            if (value >= 70) {
                level = '丙';
            }
    
            if (value >= 80) {
                level = '乙';
            }
    
            if (value >= 90) {
                level = '甲';
            }
        }

        scope_level.innerHTML = level;
    });  
}