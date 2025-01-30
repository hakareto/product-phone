// let mou = ['ali' , 'mahmoud' , 'moustafa', ' desha ' ]


// for(let i = 0 ; i < mou.length;i++ ){

//     console.log( 'hello' + ' ' + mou[i] );
    
    
// }




// let desha = ['red', 'green', 'blue']


// desha.push('brown')
// desha.unshift('black')
// // desha.pop()
// // desha.shift()
// // desha.splice( , )


// console.log(desha);

// let newArr=desha


// desha.splice(1,2)

// console.log(newArr);






let proName = document.getElementById('proName')
let category = document.getElementById('category')
let prise = document.getElementById('prise')
let sale = document.getElementById('sale')
let btn = document.getElementById('btn')
let form = document.getElementById('form')
let tbody = document.getElementById('tbody')
let deleteAll= document.getElementById('deleteAll')
let repetit= document.getElementById('repetit')



 
//---- creating ----//
let date =[]
form.onsubmit = function(mou){
    mou.preventDefault()
    let all = {
     allProName : proName.value ,
     allCategory  : category.value ,
     allPrise: prise.value ,
     allSale : sale.value ,
     repetit : repetit.value 
    }


    if(all.repetit >= 1){
        for(let i = 0 ; i < all.repetit; i++ ){

            date.push(all)
        }
    }


    //--- Reading ---//

    display()
deleteAllPro() 

    
    
 }

function display(){
    let one = ''
for(let i = 0 ; i < date.length ; i++){
one += `<tr>
            <td>${i + 1} </td>
            <td> ${date[i].allProName} </td>
            <td>  ${date[i].allCategory} </td>
            <td> ${date[i].allPrise}   </td>
            <td><del>  ${date[i].allSale} </del></td>
            <td> <button class='del' onclick= 'deletee(${i})'> delete</button> </td>
            <td> <button> update</button> </td>

        </tr>`
}
tbody.innerHTML = one

}


function deletee(ee){
    

    date.splice( ee , 1 )
    display()
    deleteAllPro() 

}

function deleteAllPro(){

    if(date.length > 0 ){
        deleteAll.style.display = 'block'
    }else{
        deleteAll.style.display = 'none'
       
    }

    deleteAll.onclick = function (){
    
    
        date.splice(0)

        display()
    
deleteAllPro() 
        
    }
}
deleteAllPro() 
