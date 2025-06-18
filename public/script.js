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
