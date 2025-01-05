// Leaflet harita ayarları
var map = L.map('harita').setView([40.815273, 29.291231], 15); // Piri Reis Üniversitesi'nin koordinatları

// Harita TileLayer ekle
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Harita üzerine konum işareti ekle
L.marker([40.815273, 29.291231]).addTo(map)
  .bindPopup("Piri Reis Üniversitesi<br>Postane Mahallesi, Eflatun Sokak, No:8, 34940 Tuzla/İstanbul")
  .openPopup();


// Form kontrol ve geri bildirim
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Form elemanlarını al
  var adSoyad = document.getElementById('AdSoyad').value;
  var eposta = document.getElementById('Eposta').value;
  var konu = document.getElementById('Konu').value;
  var mesaj = document.getElementById('Mesaj').value;

  // Hata kontrolü
  if (!adSoyad || !eposta || !konu || !mesaj) {
    document.getElementById('feedbackMessage').style.display = 'block';
    document.getElementById('successMessage').style.display = 'none';
  } else {
    document.getElementById('feedbackMessage').style.display = 'none';

    // Dinamik mesaj oluştur
    var dynamicMessage = `Sayın ${adSoyad}, "${konu}" konulu "${mesaj}" mesajınız tarafımıza ulaşmıştır. Sizinle en kısa sürede iletişime geçeceğiz.`;

    // Mesajı göster
    document.getElementById('successMessage').innerText = dynamicMessage;
    document.getElementById('successMessage').style.display = 'block';
  }
});

// Ad Soyad kontrol fonksiyonu
function kontrolAdSoyad() {
    const adSoyad = document.getElementById('AdSoyad').value;
    if (!adSoyad) {
      alert('Lütfen isim ve soy isminizi giriniz.');
    }
  }
  
  // Telefon kontrol fonksiyonu
  function kontrolTelefon() {
    const telefon = document.getElementById('Telefon').value;
    if (!telefon) {
      alert('Lütfen telefon numaranızı giriniz.');
    }
  }
  
  // E-posta kontrol fonksiyonu
  function kontrolEposta() {
    const eposta = document.getElementById('Eposta').value;
    if (!eposta) {
      alert('Lütfen e-posta adresinizi giriniz.');
    }
  }
  
  // Konu kontrol fonksiyonu
  function kontrolKonu() {
    const konu = document.getElementById('Konu').value;
    if (!konu) {
      alert('Lütfen mesaj konusunu giriniz.');
    }
  }
  
  // Mesaj kontrol fonksiyonu
  function kontrolMesaj() {
    const mesaj = document.getElementById('Mesaj').value;
    if (!mesaj) {
      alert('Lütfen mesajınızı yazınız.');
    }
  }
  
