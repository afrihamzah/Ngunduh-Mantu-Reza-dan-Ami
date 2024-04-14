lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  disableScrolling: true,
});

const hero = document.querySelector("#hero")
const btnHero = document.querySelector("#btn-hero")
const home = document.querySelector("#home");

document.addEventListener('DOMContentLoaded', function() {
  // Sembunyikan navbar pada awal
  const navbar = document.querySelector('.navbar');
  navbar.style.display = 'none';
});

btnHero.addEventListener("click", function(){
  // Tambahkan class 'hide' untuk memulai transisi
  hero.classList.add("hide");

  // Tunggu transisi selesai
  setTimeout(() => {
    // Hapus hero setelah transisi selesai
    hero.remove();

    // Scroll smooth ke section home
    home.scrollIntoView({ behavior: 'smooth' });

    
  }, 1000); // Pastikan durasi sesuai dengan transisi CSS
})

btnHero.addEventListener("click", function(){
  // Tampilkan navbar
  const navbar = document.querySelector('.navbar');
  navbar.style.display = 'flex'// Atau 'block' tergantung pada layout CSS kamu
})

const saveDateButton = document.getElementById('saveDateButton');

saveDateButton.addEventListener('click', () => {
  const savedDate = new Date(2024, 3, 20); // Tanggal April dimulai dari 0 (Januari = 0, Februari = 1, dst.)
  const dateString = savedDate.toISOString(); // Mengubah tanggal menjadi format string yang bisa disimpan

  localStorage.setItem('savedDate', dateString); // Menyimpan tanggal di localStorage

  alert('Tanggal 20 April 2024 telah disimpan!');
  
  // Membuka kalender di perangkat pengguna (jika memungkinkan)
  const isSupported = window.navigator.msLaunchUri !== undefined || navigator.share !== undefined;
  if (isSupported) {
    const calendarEvent = {
      title: 'Acara Penting',
      start: savedDate,
      end: savedDate
    };
    window.navigator.msLaunchUri(`cal://?action=add&${encodeURIComponent(JSON.stringify(calendarEvent))}`);
    // Atau navigator.share(new URL('https://www.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent('Acara Penting') + '&dates=' + encodeURIComponent(savedDate) + '/' + encodeURIComponent(savedDate) + '&details=' + encodeURIComponent('Deskripsi Acara') + '&location=' + encodeURIComponent('Lokasi Acara')));
  } else {
    alert('Maaf, browser Anda tidak mendukung integrasi otomatis dengan aplikasi kalender.');
  }
});


document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.querySelector('.btn-gifts');
    const accountNumber = '0622510506';

    copyButton.addEventListener('click', function() {
        const tempInput = document.createElement('input');
        tempInput.value = accountNumber;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        alert('Berhasil menyalin nomor rekening');
    });
});
