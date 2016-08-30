// // var students = ['Vasyl', 'Inna'];
// // students[20] = 'Petro';
// // students.push('Ivan');

// // for (var i = 0; i < students.length; i++) {
// //     console.log(students[i]);
// // }

// // students.forEach(function(el) {console.log(el)});

// // var students = {
// //     'AX123' : 'Vasyl',
// //     'AS345' : 'Inna',
// //     '0' : 'Petro'
// // };

// // console.log(students['0']);


// // for (var key in students) {
// //     console.log(students[key]);
// // }


// var pushok = {
//     name: 'Pushok',
//     color: 'white'
// }
// var ryzhik = {
//     name: 'Pushok',
//     color: 'white'
// }

// var ryzhik = {};
// ryzhik.name = 'Ryzhik';
// ryzhik.color = 'red';

// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
//     this.run = function() {
//         console.log(this.name + 'has run!');
//         return this
//     }
// }

var googleLink;
googleLink.addEventListener('click', joke);
function joke(e) {
    e.preventDefault();
    alert('It\'s a joke');
    
}
