function storage() {
    if (localStorage.getItem('score') === null) {
        localStorage.setItem('score', 0);
    }
}

storage();

$('#hs').text(localStorage.getItem('score'))

let arrA = [];
let arrB = [];
var slice1 = [];
var slice2 = [];
let count = 1;
let play = 1;

let playing = false;
$('#cell-1').click(() => {
    if (playing === true) {
        push_arr1();
        slice_num();
        check_it();
        count_add();
    }
})
$('#cell-2').click(() => {
    if (playing === true) {
        push_arr2();
        slice_num();
        check_it();
        count_add();
    }
})
$('#cell-3').click(() => {
    if (playing === true) {
        push_arr3();
        slice_num();
        check_it();
        count_add();
    }
})
$('#cell-4').click(() => {
    if (playing === true) {
        push_arr4();
        slice_num();
        check_it();
        count_add();
    }
})

let alive = true;
$('body').keypress(() => {
    if (alive === true) {
        $('#hs').text(localStorage.getItem('score'))
        playing = true;
        $('body').css("background-color", "black");
        random();
        colour();
        alive = false;
        $('#ys').text("0");
    }
});

$('button').click(() => {
    $('button').css("display", "none");
    if (alive === true) {
        $('#hs').text(localStorage.getItem('score'))
        playing = true;
        $('body').css("background-color", "black");
        random();
        colour();
        alive = false;
        $('#ys').text("0");
    }
})

function random() {
    for (let i = 0; i < play; i++) {
        let rand_number = Math.floor(Math.random() * 4) + 1;
        arrA.push(rand_number);
        $('#h1').text("Level - " + play);
        colour();
    }
};

function count_add() {
    count++;
}
function slice_num() {
    slice1 = arrA.slice(0, count);
    slice2 = arrB.slice(0, count);
}
function push_arr1() {
    arrB.push(1);
}
function push_arr2() {
    arrB.push(2);
}
function push_arr3() {
    arrB.push(3);
}
function push_arr4() {
    arrB.push(4);
}

function colour() {
    let delay = 600;
    for (let index = 0; index < arrA.length; index++) {
        setTimeout(function () {
            if (arrA[index] == 1) {
                $('#cell-1').fadeTo(100, 0.1);
            } else if (arrA[index] == 2) {
                $('#cell-2').fadeTo(100, 0.1);
            } else if (arrA[index] == 3) {
                $('#cell-3').fadeTo(100, 0.1);
            } else if (arrA[index] == 4) {
                $('#cell-4').fadeTo(100, 0.1);
            }
        }, delay * (index + 1));

        setTimeout(function () {
            if (arrA[index] == 1) {
                $('#cell-1').fadeTo(100, 1);
            } else if (arrA[index] == 2) {
                $('#cell-2').fadeTo(100, 1);
            } else if (arrA[index] == 3) {
                $('#cell-3').fadeTo(100, 1);
            } else if (arrA[index] == 4) {
                $('#cell-4').fadeTo(100, 1);
            }
        }, delay * (arrA.length + 0.1));
    }
}

function check_it() {
    if (JSON.stringify(slice1) != JSON.stringify(slice2)) {
        $('button').css("display", "flex");
        play = 1;
        arrA.length = 0;
        arrB.length = 0;
        playing = false;
        alive = true;
        let yABs = document.getElementById('ys');
        let hABs = document.getElementById('hs');
        if (parseInt(yABs.innerText) > parseInt(hABs.innerText)) {
            let numss = yABs.innerText;
            $('body').css("background-color", "purple");
            $('#h1-pre').text("Game Over!");
            $('#h1').text("Weldone! That's a new highscore. Press A key to save and restart");
            localStorage.setItem('score', numss)
        } else {
            $('body').css("background-color", "red");
            $('#h1').text("Game Over! Press A key to restart");
        }
    } else {
        if (arrB.length == arrA.length) {
            arrA.length = 0;
            arrB.length = 0;
            count = 0;
            $('#ys').text(play * 5);
            play++;
            random();
        }
    }
}
