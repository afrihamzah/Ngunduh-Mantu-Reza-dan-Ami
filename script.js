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

const addToCalendarButton = document.getElementById('saveDateButton');

addToCalendarButton.addEventListener('click', () => {
  const eventTitle = 'Ngunduh Mantu Reza dan Ami'; // Judul acara
  const eventLocation = 'Jl. Merak No.11 Komplek Perumahan Pemda Langkat Kwala Bingai Kec Stabat Kab Langkat Sumatera Utara'; // Lokasi acara
  const startDate = new Date(2024, 3, 20); // Tanggal mulai acara (20 April 2024)
  const endDate = new Date(2024, 3, 20); // Tanggal akhir acara (20 April 2024)

  const calendarUrl = `BEGIN:VEVENT\nSUMMARY:${eventTitle}\nLOCATION:${eventLocation}\nDTSTART:${startDate.toISOString().replace(/-|:|\.\d+/g, '')}\nDTEND:${endDate.toISOString().replace(/-|:|\.\d+/g, '')}\nEND:VEVENT`;
  
  const encodedCalendarUrl = encodeURI(`data:text/calendar;charset=utf8,${calendarUrl}`);
  
  window.open(encodedCalendarUrl);
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
