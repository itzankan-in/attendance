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
          <div class="th thw-0">Roll No</div>
          <div class="th thw-1">Name </div>
      </div>
    </div>`

let JSONDATA = {};
let a = {
    "data": [
      {
        "Roll-No": 1,
        "Admission-Number": 4539,
        "Name": "KUNAL GORAIN",
        "21-Jun": "P",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "P",
        "1-Jul": "A",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P",
        "6-Jul": "p",
        "8-Jul": "p",
        "9-Jul": "p",
        "10-Jul": "p",
        "11-Jul": "p",
        "12-Jul": "p",
        "15-Jul": "p",
        "16-Jul": "p",
        "19-Jul": "p",
        "20-Jul": "p"
      },
      {
        "Roll-No": 2,
        "Admission-Number": 3170,
        "Name": "RISITA SINHA",
        "21-Jun": "A",
        "22-Jun": "A",
        "24-Jun": "A",
        "25-Jun": "A",
        "26-Jun": "A",
        "27-Jun": "A",
        "28-Jun": "A",
        "29-Jun": "A",
        "1-Jul": "A",
        "2-Jul": "A",
        "3-Jul": "A",
        "4-Jul": "A",
        "5-Jul": "A"
      },
      {
        "Roll-No": 3,
        "Admission-Number": 3206,
        "Name": "SANDEEP DUTTA",
        "21-Jun": "A",
        "22-Jun": "A",
        "24-Jun": "A",
        "25-Jun": "A",
        "26-Jun": "A",
        "27-Jun": "A",
        "28-Jun": "A",
        "29-Jun": "A",
        "1-Jul": "A",
        "2-Jul": "A",
        "3-Jul": "A",
        "4-Jul": "A",
        "5-Jul": "A"
      },
      {
        "Roll-No": 4,
        "Admission-Number": 3264,
        "Name": "SAYAN SARKHEL",
        "21-Jun": "P",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "A",
        "28-Jun": "P",
        "29-Jun": "P",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 5,
        "Admission-Number": 3265,
        "Name": "TANAY ROY CHOWDHURY",
        "21-Jun": "P",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "A",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "A",
        "4-Jul": "P",
        "5-Jul": "A"
      },
      {
        "Roll-No": 6,
        "Admission-Number": 3940,
        "Name": "ADHYETRI BISWAS",
        "21-Jun": "P",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "P",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 7,
        "Admission-Number": 3351,
        "Name": "AENDRILA BARMAN",
        "21-Jun": "A",
        "22-Jun": "P",
        "24-Jun": "A",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "A",
        "4-Jul": "A",
        "5-Jul": "P"
      },
      {
        "Roll-No": 8,
        "Admission-Number": 5156,
        "Name": "ALISHA MONDAL",
        "21-Jun": "A",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "A",
        "28-Jun": "P",
        "29-Jun": "P",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "A",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 9,
        "Admission-Number": 3383,
        "Name": "ANKAN MANDAL",
        "21-Jun": "P",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "P",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 10,
        "Admission-Number": 4237,
        "Name": "ANWESHA DAS",
        "21-Jun": "A",
        "22-Jun": "P",
        "24-Jun": "A",
        "25-Jun": "A",
        "26-Jun": "A",
        "27-Jun": "A",
        "28-Jun": "A",
        "29-Jun": "A",
        "1-Jul": "A",
        "2-Jul": "P",
        "3-Jul": "A",
        "4-Jul": "A",
        "5-Jul": "P"
      },
      {
        "Roll-No": 11,
        "Admission-Number": 3343,
        "Name": "ARMIN DAS",
        "21-Jun": "A",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "P",
        "1-Jul": "A",
        "2-Jul": "A",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 12,
        "Admission-Number": 3417,
        "Name": "ARYAN MALLAH CHOWDHURY",
        "21-Jun": "P",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 13,
        "Admission-Number": 3651,
        "Name": "AYOSHI MONDAL",
        "21-Jun": "P",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "P",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 14,
        "Admission-Number": 4450,
        "Name": "BISHAL MANDAL",
        "21-Jun": "P",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "P",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 15,
        "Admission-Number": 5182,
        "Name": "DEBANSHU KUMAR",
        "21-Jun": "A",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "A",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 16,
        "Admission-Number": 3345,
        "Name": "DIPSHIKHA SARKAR",
        "21-Jun": "P",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "A",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "A",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 17,
        "Admission-Number": 3630,
        "Name": "FARHANA TABASSUM",
        "21-Jun": "P",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "A",
        "27-Jun": "A",
        "28-Jun": "P",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "A",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 18,
        "Admission-Number": 5307,
        "Name": "HARSH UPADHYAY",
        "21-Jun": "P",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "A",
        "29-Jun": "A",
        "1-Jul": "A",
        "2-Jul": "A",
        "3-Jul": "A",
        "4-Jul": "A",
        "5-Jul": "A"
      },
      {
        "Roll-No": 19,
        "Admission-Number": 4154,
        "Name": "ISANI DAS",
        "21-Jun": "A",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "A",
        "1-Jul": "A",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "A",
        "5-Jul": "P"
      },
      {
        "Roll-No": 20,
        "Admission-Number": 3405,
        "Name": "JAYDEEP PAL",
        "21-Jun": "P",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 21,
        "Admission-Number": 3460,
        "Name": "KOSHIK RAY",
        "21-Jun": "A",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "A",
        "26-Jun": "P",
        "27-Jun": "A",
        "28-Jun": "P",
        "29-Jun": "A",
        "1-Jul": "A",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 22,
        "Admission-Number": 5456,
        "Name": "KOYAL MONDAL",
        "21-Jun": "A",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "A",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "A",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "A"
      },
      {
        "Roll-No": 23,
        "Admission-Number": 4520,
        "Name": "MANDIRA PAL",
        "21-Jun": "P",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "A",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "P",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "A",
        "5-Jul": "P"
      },
      {
        "Roll-No": 24,
        "Admission-Number": 5290,
        "Name": "MD SOHAN HAQUE",
        "21-Jun": "A",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "A",
        "28-Jun": "A",
        "29-Jun": "P",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "A",
        "5-Jul": "A"
      },
      {
        "Roll-No": 25,
        "Admission-Number": 3413,
        "Name": "MD SOAIF BIN SAROWAR",
        "21-Jun": "A",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "P",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 26,
        "Admission-Number": 3401,
        "Name": "NEHA MANDAL",
        "21-Jun": "A",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "A",
        "29-Jun": "P",
        "1-Jul": "P",
        "2-Jul": "A",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 27,
        "Admission-Number": 3363,
        "Name": "OVIKE MANDAL",
        "21-Jun": "A",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "A",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "A"
      },
      {
        "Roll-No": 28,
        "Admission-Number": 3376,
        "Name": "PURASHRI BISWAS",
        "21-Jun": "P",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "A",
        "1-Jul": "A",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 29,
        "Admission-Number": 3378,
        "Name": "RANI DEY",
        "21-Jun": "P",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "A",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "P",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 30,
        "Admission-Number": 3410,
        "Name": "RUDRA BISWAS",
        "21-Jun": "A",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "A",
        "28-Jun": "P",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "A",
        "5-Jul": "P"
      },
      {
        "Roll-No": 31,
        "Admission-Number": 3491,
        "Name": "SAHID MALLIK",
        "21-Jun": "A",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "A",
        "5-Jul": "P"
      },
      {
        "Roll-No": 32,
        "Admission-Number": 5095,
        "Name": "SAHITYA SUBHRA DAS",
        "21-Jun": "P",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "A",
        "29-Jun": "P",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 33,
        "Admission-Number": 3481,
        "Name": "SANIYA KHATUN",
        "21-Jun": "P",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "A",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "A",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 34,
        "Admission-Number": 4457,
        "Name": "SANJULA ROY",
        "21-Jun": "P",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "A",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "A",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 35,
        "Admission-Number": 3360,
        "Name": "SAYAN SAHA",
        "21-Jun": "P",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "A",
        "28-Jun": "P",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 36,
        "Admission-Number": 3371,
        "Name": "SAYANDIP CHAKRABORTY",
        "21-Jun": "P",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "P",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 37,
        "Admission-Number": 4510,
        "Name": "SEHENAJ RAHMAN",
        "21-Jun": "P",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 38,
        "Admission-Number": 3368,
        "Name": "SOUNAK MANDAL",
        "21-Jun": "P",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "A",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 39,
        "Admission-Number": 4111,
        "Name": "SOUVIK MANDAL",
        "21-Jun": "A",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "P",
        "1-Jul": "A",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 40,
        "Admission-Number": 3387,
        "Name": "SUCHISMITA RAJAK",
        "21-Jun": "A",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "A",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 41,
        "Admission-Number": 5260,
        "Name": "SUNAYNA SULTANA",
        "21-Jun": "P",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "P",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 42,
        "Admission-Number": 3399,
        "Name": "SWAGATA MITRA",
        "21-Jun": "P",
        "22-Jun": "P",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "P",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 43,
        "Admission-Number": 3393,
        "Name": "TABASSUM NAAZ",
        "21-Jun": "A",
        "22-Jun": "P",
        "24-Jun": "A",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "A",
        "29-Jun": "A",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": 44,
        "Admission-Number": 3346,
        "Name": "TRISHAN CHOWDHURY",
        "21-Jun": "A",
        "22-Jun": "A",
        "24-Jun": "P",
        "25-Jun": "P",
        "26-Jun": "P",
        "27-Jun": "P",
        "28-Jun": "P",
        "29-Jun": "P",
        "1-Jul": "P",
        "2-Jul": "P",
        "3-Jul": "P",
        "4-Jul": "P",
        "5-Jul": "P"
      },
      {
        "Roll-No": " ",
        "Admission-Number": " ",
        "Name": "TOTAL",
        "21-Jun": 44,
        "22-Jun": 45,
        "24-Jun": 45,
        "25-Jun": 45,
        "26-Jun": 45,
        "27-Jun": 45,
        "28-Jun": 45,
        "29-Jun": 45,
        "1-Jul": 45,
        "2-Jul": 45,
        "3-Jul": 45,
        "4-Jul": 45,
        "5-Jul": 45,
        "6-Jul": 45
      },
      {
        "Roll-No": " ",
        "Admission-Number": " ",
        "Name": "PRESENT",
        "21-Jun": 24,
        "22-Jun": 21,
        "24-Jun": 39,
        "25-Jun": 37,
        "26-Jun": 36,
        "27-Jun": 34,
        "28-Jun": 33,
        "29-Jun": 19,
        "1-Jul": 34,
        "2-Jul": 37,
        "3-Jul": 33,
        "4-Jul": 34,
        "5-Jul": 37,
        "6-Jul": 1
      },
      {
        "Roll-No": " ",
        "Admission-Number": " ",
        "Name": "ABSENT",
        "21-Jun": 20,
        "22-Jun": 24,
        "24-Jun": 6,
        "25-Jun": 8,
        "26-Jun": 9,
        "27-Jun": 11,
        "28-Jun": 12,
        "29-Jun": 26,
        "1-Jul": 11,
        "2-Jul": 8,
        "3-Jul": 12,
        "4-Jul": 11,
        "5-Jul": 8,
        "6-Jul": 44
      }
    ]
  }


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
        th.classList.add("th")
        th.classList.add("tdw",i)
        th.classList.add("tdw")
        th.innerHTML=e;
        document.querySelector(".tr-webview0").appendChild(th)
    })
    console.log(dateArr)    
}
   