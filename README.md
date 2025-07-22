
# Aplikasi Payroll Les Privat

Aplikasi ini dibuat menggunakan React (TypeScript) untuk menghitung dan menampilkan **pendapatan bulanan** dari kegiatan les privat berdasarkan mata pelajaran, jenjang pendidikan, dan jumlah sesi per jam.

## Fitur Utama

- **Statistik Bulanan**: Menampilkan total pendapatan dan jumlah kelas aktif dalam satu bulan.
- **Filter Dinamis**: Pengguna dapat memfilter data berdasarkan mata pelajaran (Fisika, Matematika, Bahasa) dan jenjang (SD, SMP, SMA).
- **Navigasi Bulan**: Tombol navigasi untuk berpindah antar bulan dalam kalender.
- **Tabel Interaktif**: Menampilkan daftar kelas, jenjang, dan pendapatan. Setiap baris dapat diperluas untuk melihat rincian sesi per hari.
- **Perhitungan Otomatis**: Pendapatan dihitung berdasarkan durasi sesi, biaya per jam, dan jumlah murid (subscription).

## Struktur File Utama

- **App.tsx**: Komponen utama yang mengelola tampilan statistik dan menyusun layout halaman.
- **ExpandableTable.tsx**: Menampilkan tabel dinamis dengan fitur sorting, ekspansi, dan perhitungan pendapatan harian serta total.
- **ComboboxDemo.tsx**: Komponen untuk dropdown filter (mata pelajaran dan jenjang).
- **Perhitungan.ts**: Fungsi utilitas untuk menghitung total pendapatan.
- **TableBaru.tsx**: Contoh tabel statis.

## Cara Kerja Perhitungan Pendapatan

1. Durasi dihitung dari waktu mulai dan akhir setiap sesi (misal: 17.00 - 18.00 = 1 jam).
2. Biaya per jam dikalikan durasi dan jumlah subscription.
3. Hasil dikonversi ke format mata uang Indonesia.

Contoh:
```
Durasi = 1 jam
Biaya per jam = Rp 100.000
Subscription = 5 murid
Pendapatan Hari = 1 x 100.000 x 5 = Rp 500.000
```

## Teknologi yang Digunakan

- **React + TypeScript**
- **Tailwind CSS**
- **@tanstack/react-table**: Untuk tabel interaktif
- **Lucide-react**: Untuk ikon
- **Intl.NumberFormat**: Untuk format mata uang IDR

---

© 2025 - Aplikasi Payroll Les


## Cara Menjalankan Aplikasi

1. **Clone repository**
   ```bash
   git clone <url-repo-anda>
   cd <nama-folder>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan aplikasi**
   ```bash
   npm run dev
   ```

4. **Akses di browser**
   Buka `http://localhost:5173` di browser untuk melihat aplikasi.

## Lisensi

Aplikasi ini menggunakan lisensi **MIT License**.

```
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
