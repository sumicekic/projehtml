// Leaflet harita ayarları
var map = L.map('harita').setView([40.9484, 29.2971], 13); // Tuzla Piri Reis Üniversitesi'nin koordinatları

// Harita TileLayer ekle
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Harita üzerine konum işareti ekle
L.marker([40.9484, 29.2971]).addTo(map)
  .bindPopup("Tuzla Piri Reis Üniversitesi")
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
  } else {
    document.getElementById('feedbackMessage').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
  }
});
