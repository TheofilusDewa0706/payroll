
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
