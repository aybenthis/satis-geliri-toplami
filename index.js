const { arabaStogu } = require('./arabaStogu.js');
//[{ name: 'Hyundai Verna 1.6 SX', year: 2012, selling_price: 600000, km_driven: 100000, fuel: 'Dizel', seller_type: 'Sahibinden', transmission: 'Manuel', owner: 'İlk Sahibi', }]
function calculateRevenue(list, filterBy) {
  const kimdenListesi = list.filter((araba) => araba.seller_type === filterBy);

  const satisGeliri = kimdenListesi.reduce(
    (accumulator, currentValue) => accumulator + currentValue.selling_price,
    0
  );
  return satisGeliri;
}
