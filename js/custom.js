// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector('#displayYear').innerHTML = currentYear;
}

getYear();

// isotope js
$(window).on('load', function () {
  $('.filters_menu li').click(function () {
    $('.filters_menu li').removeClass('active');
    $(this).addClass('active');

    var data = $(this).attr('data-filter');
    $grid.isotope({
      filter: data,
    });
  });

  var $grid = $('.grid').isotope({
    itemSelector: '.all',
    percentPosition: false,
    masonry: {
      columnWidth: '.all',
    },
  });
});

// nice select
$(document).ready(function () {
  $('select').niceSelect();
});

/** google_map js **/
// function myMap() {
//   var mapProp = {
//     center: new google.maps.LatLng(40.712775, -74.005973),
//     zoom: 18,
//   };
//   var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
// }

// client section owl carousel
$('.client_owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  dots: false,
  nav: true,
  navText: [],
  autoplay: true,
  autoplayHoverPause: true,
  navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

// =========================================================================
// FUNGSI BARU: Mengirim Data Form ke WhatsApp
// =========================================================================

function sendWhatsApp(event) {
  // Mencegah form untuk refresh halaman secara default
  event.preventDefault();

  // 1. Ambil Nilai dari Inputan menggunakan ID
  const name = document.getElementById('inputName').value;
  const email = document.getElementById('inputEmail').value;
  const phone = document.getElementById('inputPhone').value;
  const message = document.getElementById('inputMessage').value;

  // 2. Tentukan Nomor Tujuan WhatsApp (Ganti dengan Nomor Anda)
  // Format: +6281234567890 (tanpa spasi, diawali kode negara)
  const phoneNumber = '6289509912871'; // <<< GANTI DENGAN NOMOR WHATSAPP BISNIS NAYANA <<<

  // 3. Buat Teks Pesan
  // Menggunakan encodeURIComponent untuk memastikan spasi dan karakter khusus aman dalam URL
  const waText = `Halo Nayana, saya ingin bertanya melalui website.\n\n*DATA PELANGGAN:*\nNama: ${name}\nEmail: ${email || 'Tidak diisi'}\nNomor WA: ${phone}\n\n*PESAN KHUSUS:*\n${message}`;

  // 4. Buat URL WhatsApp
  const waURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waText)}`;

  // 5. Buka Jendela Baru (atau tab) ke WhatsApp
  window.open(waURL, '_blank');
}
