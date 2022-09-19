// penjumlahan tanpa function //
// let bilangan1= 20
// let bilangan2= 30

// console.log(bilangan1 - bilangan2);
// //type data 
// let namaWaqi1 = 20;
// let namaWaqi2 = 30;
// let namaWaqi3 = 40;
// let namaWaqi4 = 50;

// console.log(namaWaqi1);
// console.log(namaWaqi2);
// console.log(namaWaqi3);
// console.log(namaWaqi3 + namaWaqi1);

//ARRAY
// let namaWaqi = ["waqi", 19, "semarang", ["imeilda", 18, "Balikpapan"]];
// console.log(namaWaqi);

//OBJECT//
// let dataPersonal1 = {
//     nama: "Waqi",
//     alamat:"Semarang",
//     umur:"20",
// }
// let dataPersonal2 = {
//     nama: "imel",
//     alamat: "BPP",
//     umur: 18,
// }
// console.log(dataPersonal1);
// console.log(dataPersonal2);
// let dataPersonal =[dataPersonal1, dataPersonal2]
// console.log(dataPersonal);

//ARRAY OBJECT
// let dataPersonal =[
//     {
//         nama: "waqi",
//         alamat: "semarang;",
//         hobi: ["renang", "badminton", "futsal"],
//     },
//     {
//         nama:"imel",
//         alamat: "bpp",
//     },
//     {
//         nama:"jko",
//         alamat: "smg",
//     },
// ]
// console.log(dataPersonal);
// console.log(dataPersonal[2]);
// console.log(dataPersonal[0].hobi);

// function + array data
// function addData() {
   
//     let person = {
//         name: "waqi",
//         alamat: "semarang"
//     }
//     data.push(person)
//     console.log(data);
     
//     let joko = {
//         name: "joko",
//         alamat: "semarang",
//     }
//     data.push(joko)
//     console.log(data);
// }


// let data = []
 
// function addData() {
   
//     let blog = {
//         name: document.getElementById("input-name").value,
//         alamat: document.getElementById("input-describ").value,
//     }
//     data.push(blog)
//     console.log(data);
     
// }

//input data ke dataBLog
let dataBlog = []
function addBlog(event) {
    event.preventDefault() //ketika di refresh nggak ke reset

    let title = document.getElementById("input-name").value
    let content = document.getElementById("input-describ").value
    let image = document.getElementById("input-image").files
    image = URL.createObjectURL(image[0])
    console.log(image);

    let blog ={
        title,
        content,
        image
    }

    dataBlog.push(blog);
    console.log(dataBlog);
    document.getElementById("hmmm").innerHTML = title
   
}