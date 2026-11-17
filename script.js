const tombolMenu = document.querySelector('#tombol-menu');
const menuUtama = document.querySelector('#menu-utama');

if (tombolMenu && menuUtama) {
  tombolMenu.addEventListener('click', () => {
    const terbuka = menuUtama.classList.toggle('buka');
    tombolMenu.setAttribute('aria-expanded', String(terbuka));
  });

  menuUtama.querySelectorAll('a').forEach((tautan) => {
    tautan.addEventListener('click', () => {
      menuUtama.classList.remove('buka');
      tombolMenu.setAttribute('aria-expanded', 'false');
    });
  });
}

const sertifikat = [
  {nama:'MikroTik Certified Network Associate (MTCNA)', gambar:'aset/MTCNA-1.png', alt: 'Dokumen sertifikat MikroTik Certified Network Associate (MTCNA)' },
  {nama:'IT Specialist: Networking', gambar: 'aset/Certiport IT SPECIALIST NETWORKING-1.png', alt: 'Dokumen sertifikat IT Specialist: Networking' },
  {nama:'Axioo Technology Specialist: ACP #1 — Hardware Fundamental', gambar: 'aset/acp1-1.png', alt: 'Dokumen sertifikat Axioo Technology Specialist: ACP #1 — Hardware Fundamental' },
  {nama:'Huawei AI Basic: Overview of AI', gambar: 'aset/huawei talent ai.png', alt: 'Dokumen sertifikat Huawei AI Basic: Overview of AI' },
  {nama:'AI Ready ASEAN — Certificate of Completion', gambar: 'aset/ai asean (1)-1.png', alt: 'Dokumen sertifikat AI Ready ASEAN — Certificate of Completion' }
];
const daftarSertifikat = document.querySelectorAll('[data-sertifikat]');
const gambarSertifikat = document.querySelector('#gambar-sertifikat');
const namaSertifikat = document.querySelector('#nama-sertifikat');

daftarSertifikat.forEach((tombol) => {
  tombol.addEventListener('click', () => {
    const data = sertifikat[Number(tombol.dataset.sertifikat)];
    if (!data || !gambarSertifikat || !namaSertifikat) return;

    daftarSertifikat.forEach((item) => item.setAttribute('aria-pressed', String(item === tombol)));
    gambarSertifikat.src = data.gambar;
    gambarSertifikat.alt = data.alt;
    namaSertifikat.textContent = data.nama;
  });
});

const tahun = document.querySelector('#tahun-sekarang');
if (tahun) tahun.textContent = new Date().getFullYear();
