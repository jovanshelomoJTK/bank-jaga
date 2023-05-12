let rekeningNo = document.getElementById("rekening-no");
let rekeningEye = document.getElementById("rekening-eye");

function toggleRekening() {
  if (rekeningEye.src.match("assets/home/eye-closed.svg")) {
    rekeningEye.src = "assets/home/eye-open.svg";
    rekeningNo.innerHTML = "1234-567-890-1237";
  } else {
    rekeningEye.src = "assets/home/eye-closed.svg";
    rekeningNo.innerHTML = "****-***-***-*237";
  }
}

//onload
rekeningEye.addEventListener("click", toggleRekening);

// search feature
features = [
  { name: "Transfer", icon: "assets/home/transfer.svg" },
  {
    name: "Tagihan",
    icon: "assets/home/tagihan.svg",
  },
  {
    name: "Tarik Tunai",
    icon: "assets/home/tarik-tunai.svg",
  },
  {
    name: "Virtual Account",
    icon: "assets/home/virtual-account.svg",
  },
  {
    name: "Top Up E-Wallet",
    icon: "assets/home/topup-ewallet.svg",
  },
  {
    name: "Setor Tunai",
    icon: "assets/home/setor-tunai.svg",
  },
  {
    name: "Pulsa & Data",
    icon: "assets/home/pulsa-data.svg",
  },
  {
    name: "Listrik",
    icon: "assets/home/listrik.svg",
  },
  {
    name: "Budgeting",
    icon: "assets/home/budgeting.svg",
  },
];

let featureWrapper = document.getElementsByClassName("main-menu")[0];
let featureTemplate = document.querySelector(".main-menu > :nth-child(1)");
renderFeatures();
function renderFeatures() {
  features.map((feature) => {
    let featureElement = featureTemplate.cloneNode(true);
    featureElement.querySelector("img").src = feature.icon;
    featureElement.querySelector("p").innerHTML = feature.name;
    //append before last child
    featureWrapper.insertBefore(featureElement, featureTemplate);
  });
}

let searchFeatures = document.getElementById("search-features");
let resultContainer = document.getElementsByClassName("search-results")[0];
let resultTemplate = document.getElementsByClassName("search-result")[0];
searchFeatures.addEventListener("input", (e) => {
  resultContainer.innerHTML = "";
  let search = e.target.value.toLowerCase();
  let featuresFiltered = features.filter((feature) => {
    return feature.name.toLowerCase().includes(search);
  });

  featuresFiltered.map((feature) => {
    let template = resultTemplate.cloneNode(true);
    template.querySelector("img").src = feature.icon;
    template.querySelector("p").innerHTML = feature.name;
    resultContainer.appendChild(template);
  });
});

//on searchFeatures focus change
searchFeatures.addEventListener("focus", (e) => {
  resultContainer.innerHTML = "";
  resultContainer.style.display = "";
});

searchFeatures.addEventListener("blur", (e) => {
  resultContainer.innerHTML = "";
  resultContainer.style.display = "none";
});
