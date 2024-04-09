
// const pullar = [500, 200, 100, 50, 20, 10, 5, 1];

// let data = [];
// const showData = () => {
//   pullar.innerHTML = "";
//   data
//     .filter((a) => a.title.startsWith(search.value))
//     .map((a) => {
//       const pul = document.createElement("div");
//       pul.classList.add("money");
//       const productImage = document.createElement("div");
//       productImage.classList.add("pul__image");
//       const photo = document.createElement("img");
//       photo.src = 500img.jpg;
//       photo.src = 200img.jpg;
//       photo.src = 100img.jpg;
//       photo.src = 50img.jpg;
//       photo.src = 20img.jpg;
//       photo.src = 10img.jpg;
//       photo.src = 5img.jpg;
//       photo.src = 1img.jpg;

//       pulImage.append(photo);

//     });
// };



function pulgosder() {
  let miqdar = document.getElementById("miqdar").value;
  let pulsekilleriDiv = document.getElementById("pulsekilleri");
  pulmiqdariDiv.innerHTML = "Yazilan mebleg: " + miqdar + " Manat";

  // Sekilin yolun gosterende error verdi. Urlsi ile verdim
  const pullar = {
      '1man': 'https://upload.wikimedia.org/wikipedia/commons/6/6e/1_manat_-_2020_-_obv.jpg',
      '5man': 'https://en.numista.com/catalogue/photos/azerbaidjan/631d9db1e8dcc4.47167320-original.jpg',
      '10man': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/10_manat_rev.jpg/1200px-10_manat_rev.jpg',
      '20man': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Azerbaijan_20_manat_2020_obverse.jpg/1200px-Azerbaijan_20_manat_2020_obverse.jpg',
      '50man': 'https://upload.wikimedia.org/wikipedia/commons/a/a0/50-manat_front.jpg',
      '100man': 'https://upload.wikimedia.org/wikipedia/commons/e/ef/100_manat_obv.jpg',
      '200man': 'https://upload.wikimedia.org/wikipedia/commons/9/9c/200_Azerbaijani_manat_in_2018_Obverse.jpg',
      '500man': 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Azerbaijan_500_manat_Karabakh_obverse.jpg'
  };

  pulsekilleriDiv.innerHTML = "";
  for (let pul in pullar) {
      var eded = Math.floor(miqdar / parseInt(pul));
      if (eded > 0) {
          for (let i = 0; i < eded; i++) {
              let img = document.createElement("img");
              img.src = pullar[pul];
              img.alt = pul;
              img.className = "pulsekilleri";
              pulsekilleriDiv.appendChild(img);
          }
          miqdar %= parseInt(pul);
      }
  }
}

btn.addEventListener("click", () => {
  showData();
});