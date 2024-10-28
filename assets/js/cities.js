let cities = [
  { 
      city: "Adana", 
      famousFor: "Kebap", 
      type: "food", 
      plateNumber: "01" 
  },
  { 

      city: "Ankara", 
      famousFor: "Simidi", 
      type: "food", 
      plateNumber: "06" 
  },
  { 
      city: "İstanbul", 
      famousFor: "Boğaz", 
      type: "place", 
      plateNumber: "34" 
  },
  { 
      city: "İzmir", 
      famousFor: "Boyoz", 
      type: "food", 
      plateNumber: "35" 
  },
  { 
      city: "Bursa", 
      famousFor: "İskender Kebabı", 
      type: "food", 
      plateNumber: "16" 
  },
  { 
      city: "Antalya", 
      famousFor: "Düden Şelalesi", 
      type: "place", 
      plateNumber: "07" 
  },
  { 
      city: "Gaziantep", 
      famousFor: "Baklava", 
      type: "food", 
      plateNumber: "27" 
  },
  { 
      city: "Konya", 
      famousFor: "Etli Ekmek", 
      type: "food", 
      plateNumber: "42" 
  },
  { 
      city: "Trabzon", 
      famousFor: "Hamsi", 
      type: "food", 
      plateNumber: "61" 
  },
  { 
      city: "Kayseri", 
      famousFor: "Mantı", 
      type: "food", 
      plateNumber: "38" 
  },
  { 
      city: "Eskişehir", 
      famousFor: "Lületaşı", 
      type: "place", 
      plateNumber: "26" 
  },
  { 
      city: "Rize", 
      famousFor: "Çay", 
      type: "food", 
      plateNumber: "53" 
  },
  { 
      city: "Erzurum", 
      famousFor: "Cağ Kebabı", 
      type: "food", 
      plateNumber: "25" 
  },
  { 
      city: "Diyarbakır", 
      famousFor: "Karpuz", 
      type: "place", 
      plateNumber: "21" 
  },
  { 
      city: "Mardin", 
      famousFor: "Taş Evler", 
      type: "place", 
      plateNumber: "47" 
  },
  { 
      city: "Van", 
      famousFor: "Van Kedisi", 
      type: "place", 
      plateNumber: "65" 
  },
  { 
      city: "Sivas", 
      famousFor: "Kangal Köpeği", 
      type: "place", 
      plateNumber: "58" 
  },
  { 
      city: "Şanlıurfa", 
      famousFor: "Balıklıgöl", 
      type: "place", 
      plateNumber: "63" 
  },
  { 
      city: "Mersin", 
      famousFor: "Tantuni", 
      type: "food", 
      plateNumber: "33" 
  },
  { 
      city: "Muğla", 
      famousFor: "Turistik Yerleri", 
      type: "place", 
      plateNumber: "48" 
  },
  { 
      city: "Çanakkale", 
      famousFor: "Tarihi Gelibolu Yarımadası", 
      type: "place", 
      plateNumber: "17" 
  },
  { 
      city: "Hatay", 
      famousFor: "Antakya Mozaikleri", 
      type: "place", 
      plateNumber: "31" 
  },
  { 
      city: "İzmir", 
      famousFor: "Efes Antik Kenti", 
      type: "place", 
      plateNumber: "35" 
  },
  { 
      city: "Nevşehir", 
      famousFor: "Kapadokya", 
      type: "place", 
      plateNumber: "50" 
  },
  { 
      city: "Aydın", 
      famousFor: "Milet Antik Kenti", 
      type: "place", 
      plateNumber: "09" 
  }
];

const citiesBox = document.querySelector(".citiesList");
const yemeklerBtn = document.querySelector(".yemeklerBtn");
const tarihiYerlerBtn = document.querySelector(".tarihiYerlerBtn");
const plakalarBtn = document.querySelector(".plakalarBtn");

function listele(sehirler) {
  citiesBox.innerHTML = "";
  sehirler.forEach(city => {
    citiesBox.innerHTML += `
      <li class="city">
        ${city.city} <span>${city.famousFor} ile ünlü</span>
      </li>`;
  });
}

function tumPlakalariListele(plakalar) {
  citiesBox.innerHTML = `
    <button class="tekSayililarBtn">Tek sayılı plakalar</button>
    <button class="ciftSayililarBtn">Çift sayılı plakalar</button>
    <ul class="plakaListesi"></ul>
  `;

  const plakaListesi = document.querySelector(".plakaListesi");

  plakalar.forEach(city => {
    plakaListesi.innerHTML += `
      <li class="plakaItem">
        ${city.city} <span>${city.plateNumber}</span>
      </li>`;
  });

  const tekBtn = document.querySelector(".tekSayililarBtn");
  const ciftBtn = document.querySelector(".ciftSayililarBtn");

  tekBtn.addEventListener("click", () => {
    plakaListesi.innerHTML = "";
    plakalar
      .filter(city => Number(city.plateNumber) % 2 !== 0)
      .forEach(city => {
        plakaListesi.innerHTML += `
          <li class="tekSayililar plakaItem">
            ${city.city} <span>${city.plateNumber}</span>
          </li>`;
      });
  });

  ciftBtn.addEventListener("click", () => {
    plakaListesi.innerHTML = "";
    plakalar
      .filter(city => Number(city.plateNumber) % 2 === 0)
      .forEach(city => {
        plakaListesi.innerHTML += `
          <li class="ciftSayililar plakaItem">
            ${city.city} <span>${city.plateNumber}</span>
          </li>`;
      });
  });
}

yemeklerBtn.addEventListener("click", () => {
  const yemegiUnluSehirler = cities.filter(city => city.type === "food");
  listele(yemegiUnluSehirler);
});

tarihiYerlerBtn.addEventListener("click", () => {
  const tarihiYerler = cities.filter(city => city.type === "place");
  listele(tarihiYerler);
});

plakalarBtn.addEventListener("click", () => {
  tumPlakalariListele(cities);
});

