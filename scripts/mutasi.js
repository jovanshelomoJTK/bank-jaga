/*
<div class="mutasi-item">
          <div class="mutasi-item-icon">
              <img src="assets/budgeting.svg" />
          </div>
          <div class="mutasi-item-deskripsi">
            <p> <span style="font-weight: 900;">Top Up Gopay</span> - Budi Idub</p>
            <p> 30 Januari 2023 | 19:45:55 WIB</p>
          </div>
          <div class="mutasi-item-nominal pengeluaran">-Rp60.000
          </div>
        </div>
*/

//FILTER
function openFilter(){
  let modal = document.getElementById("myModal");
  let overlay = document.getElementById("overlay");

  modal.style.display = "flex";
  overlay.style.opacity = 1;
}

function closeFilter(){
  let modal = document.getElementById("myModal");
  let overlay = document.getElementById("overlay");

  modal.style.display = "none";
  overlay.style.opacity = 0;
}

//SORT
function openSort(){
  let modal = document.getElementById("mySortModal");
  let overlay = document.getElementById("overlay");

  modal.style.display = "flex";
  overlay.style.opacity = 1;
}

function closeSort(){
  let modal = document.getElementById("mySortModal");
  let overlay = document.getElementById("overlay");

  modal.style.display = "none";
  overlay.style.opacity = 0;
}

let mutations = [
  {
    icon: "topup.svg",
    title: "Top Up Gopay",
    person: "Budi Idub",
    date: "30 Januari 2023 | 19:45:55 WIB",
    total: 60000,
    isPengeluaran: true
  },
  {
    icon: "trf-in.svg",
    title: "TRF Dari BRI",
    person: "Muhammad Fulan",
    date: "30 Januari 2023 | 16:05:55 WIB",
    total: 250000,
    isPengeluaran: false
  },
  {
    icon: "belanja.svg",
    title: "Belanja",
    person: "Shopee",
    date: "29 Januari 2023 | 12:02:05 WIB",
    total: 1000000,
    isPengeluaran: true
  },
  {
    icon: "trf-out.svg",
    title: "TRF Ke BCA",
    person: "Maemunah",
    date: "26 Januari 2023 | 06:59:55 WIB",
    total: 150000,
    isPengeluaran: true
  },
  {
    icon: "QRIS.svg",
    title: "QRIS",
    person: "Kantin Jujur JTK",
    date: "22 Januari 2023 | 08:45:55 WIB",
    total: 5000,
    isPengeluaran: true
  },
  {
    icon: "trf-in.svg",
    title: "TRF Dari BSI",
    person: "Agus Suga",
    date: "15 Januari 2023 | 23:45:55 WIB",
    total: 55000,
    isPengeluaran: false
  },
  {
    icon: "pulsa.svg",
    title: "Pulsa",
    person: "XL Axiata",
    date: "14 Januari 2023 | 15:25:55 WIB",
    total: 26500,
    isPengeluaran: true
  },
  {
    icon: "listrik.svg",
    title: "Token Listrik",
    person: "",
    date: "13 Januari 2023 | 18:15:55 WIB",
    total: 100000,
    isPengeluaran: true
  },
  {
    icon: "tarik-tunai.svg",
    title: "Tarik Tunai",
    person: "",
    date: "12 Januari 2023 | 17:45:55 WIB",
    total: 500000,
    isPengeluaran: true
  },
]

const loadMutation = (mutations)=>{
  list.innerHTML = "";
  mutations.map((mutation)=>{
    let cloned = template.cloneNode(true);
    let icon = cloned.getElementsByClassName("mutasi-item-icon")[0];
    let title = cloned.getElementsByClassName("title")[0];
    let person = cloned.getElementsByClassName("person")[0];
    let date = cloned.getElementsByClassName("date")[0];
    let nominal = cloned.getElementsByClassName("mutasi-item-nominal")[0];
    
    icon.classList.add(mutation.isPengeluaran?"pengeluaran":"pemasukan");
    icon.children[0].src = "assets/mutasi/"+mutation.icon;
    
    title.innerText = mutation.title;
    
    person.innerText= mutation.person? " - " + mutation.person : mutation.person;
    
    date.innerText = mutation.date;
    
    nominal.classList.add(mutation.isPengeluaran?"pengeluaran":"pemasukan");
    nominal.innerText = (mutation.isPengeluaran?"-":"+") + "Rp"+mutation.total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    
    list.appendChild(cloned);
    
    cloned.setAttribute("onclick", "location.href='delvito-rincian-mutasi.html'")
    
  })
}

document.getElementById("search-mutasi").addEventListener("input",(e)=>{
  let value = e.target.value.toLowerCase();
  loadMutation(mutations.filter(mutation=>
   mutation.title.toLowerCase().includes(value) || mutation.date.toLowerCase().includes(value) || mutation.person.toLowerCase().includes(value) || mutation.total.toString().startsWith(value)
  ))
})
let template = document.getElementsByClassName("mutasi-item")[0];
let list = document.getElementsByClassName("mutasi-list")[0];
list.innerHTML = "";
loadMutation(mutations)


