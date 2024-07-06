let date = new Date();
const API = "https://script.googleusercontent.com/macros/echo?user_content_key=VIRw8Mnk95jWk3xMK8aRi_ACCtgeXzFch9xj--wteoIh3dQ0D5UwSUu18-FxxKxQsODuTKzFieKeKvDMlB8xyehpB3SlJtvmm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDEeRQvmyOzubxLUUbQL_LYBLqv9ME5tC-ZjMNfA4XMzHcFSgXaPPsr7X0rZI3aU4BqqZ3UlevfOtTuTWJBsdj3tmANFrvb1g9z9Jw9Md8uu&lib=MK3rsfq1iNKA8KRA5dbzb3LqhTasYq6kZ"
const MAINBODY = document.querySelector(".mainbody")
const GREET = document.querySelector("#greeting")
let hh = date.getHours();
let chartCode = ` <div class="table">
            <div class="tr tr1">
                <div class="th th1" style=>Roll Number</div>
                <div class="th th2">Admission Number</div>
                <div class="th th3">Name of the student</div>
            </div>
            
    `
let chartCode2= `<div class="table table-webview">
     <div class="tr tr-webview tr-webview0">
     <div class="th tdf">
      Roll Number
     </div>
     <div class="th tdf">
      Name Of the Student
     </div>
     </div>
    </div>`

let JSONDATA = {};



if (hh>=0&&hh<12) {
    GREET.innerHTML="Good Morning!"
} else {
    GREET.innerHTML="Good Evening!"
}
let logo1 = document.querySelector(".logo1")
logo1.addEventListener("click", () => {
    // location.href = "https://pmshri.education.gov.in"
    window.open("https://pmshri.education.gov.in")
})
let logo2 = document.querySelector(".logo2")
logo2.addEventListener("click", () => {
    // location.href = "https://pmshri.education.gov.in"
    window.open("https://kvsangathan.nic.in")
})
let loader = document.querySelector(".loader")
function loading() {
    loader.style.display = 'flex'
}
function stopLoading() {
    loader.style.display = 'none'
}
loading()
let response = fetch(API).then(e=>e.json()).then(async (e) => {
    JSONDATA = e;
    console.log(JSONDATA)
    console.log(JSONDATA)
    stopLoading();
}) 
const btn = document.getElementsByClassName("bth");
// console.log(btn.length)
for (let i =0; i<4; i++) {
    // console.log(i)
   btn[0].addEventListener("click", clickF1)
   btn[1].addEventListener("click", clickF2)
   btn[2].addEventListener("click", clickF3)
}

function clickF1() {
    for(i=0; i < JSONDATA['data'].length-3; i++) {
        chartCode += `
            <div class="tr tr1${i}">
                <div class="td th${i}1">${JSONDATA['data'][i]['Roll-No']}</div>
                <div class="td th${i}2">${JSONDATA['data'][i]['Admission-Number']}</div>
                <div class="td th${i}3">${JSONDATA['data'][i]['Name']}</div>
            </div>
        </div>
    </div>
        `
    MAINBODY.innerHTML = chartCode
    
    }
    // console.log(chartCode)
    // footer();
  
}

function clickF2() {

    window.open("https://docs.google.com/spreadsheets/d/1D90gvkRE2saWPJAm7xq8tC0cZRZ5_NP-KDJ5lOnJ3S0/edit?gid=1962345637#gid=1962345637 ")
}
function clickF3() {
    MAINBODY.innerHTML = chartCode2;


    const SAMPLE = JSONDATA.data[0]
      let dateArr = []
    for(i in SAMPLE) {
        if(i=='Name'||i=='Admission-Number'||i=="Roll-No") {
            continue;
        } else {
            dateArr.push(i)
        }
    }
    dateArr.forEach((e,i) => {
        let th = document.createElement("div")
        th.setAttribute('class','th tdre')
        th.innerHTML=e;
        document.querySelector(".tr-webview0").appendChild(th)
    })
    JSONDATA.data.forEach((e,i) => {
      let row = document.createElement("div");
      row.setAttribute("class",`tr tr-webview tr-webview-${i}`)

      let td0 = document.createElement("div")
      td0.setAttribute("class","td tdf")
      td0.innerHTML = e['Roll-No']


      let td1 = document.createElement("div")
      td1.setAttribute("class","td tdf")
      td1.innerHTML = e['Name']
      
      let table = document.querySelector(".table-webview")
      console.log(table)
      row.appendChild(td0)
      row.appendChild(td1)
      table.appendChild(row)

      dateArr.forEach((f,i) => {
        let datae = document.createElement("div")
      datae.setAttribute("class","td tdre")
        datae.innerHTML = `${e[f]}`
        
        if(e[f]=="A"||e[f]=="a") {
          datae.style.color = "#810404"
        } else {
          datae.style.color = "#000"
        }

        row.appendChild(datae)
        if(e['Name']=="TOTAL"||e['Name']=="PRESENT"||e['Name']=='ABSENT') {
          datae.addEventListener('click', () => {
            alert(`The data you clicked on is of ${f}`)
          })
       
      } else {
         datae.addEventListener('click', () => {
          alert(`The data you clicked on is of ${e['Name']}, Roll No: ${e['Roll-No']},  On ${f}`)
        })
      }
      })
    })
}
   