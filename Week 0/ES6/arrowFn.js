// const square = (number) => number ** 2
// const res = square(5)
// console.log(res)


// Next Example
// const jobs = [
//     {id: 1, isActive: true},
//     {id: 2, isActive: true},
//     {id: 3, isActive: false},
// ]
//
//
// const activeJobs =jobs.filter((job) => job.isActive)
// console.log(activeJobs)


// Arrow & this Example
// const person = {
//     talk() {
//         let self = this
//         setTimeout(function (){
//         console.log('This', self);
//         }, 1000)
//     }
// }


const person = {
    talk() {
        // let self = this
        setTimeout(() =>{
        console.log('This', this);
        }, 1000)
    }
}

console.log(person.talk())