# Dokumentasi Daon Toast

## Pendahuluan
**Daon Toast** adalah pustaka notifikasi ringan yang memungkinkan Anda menampilkan pemberitahuan (toast) dengan berbagai konfigurasi seperti posisi, durasi, dan penundaan waktu.

---

## Inisialisasi Daon Toast
Sebelum menggunakan **Daon Toast**, Anda perlu menginisialisasinya dengan fungsi `initDaon()`. Fungsi ini menerima objek konfigurasi dengan beberapa parameter opsional.

### Contoh Inisialisasi
```javascript
initDaon({
    avatar: "https://kiki.my.id/assets/img/hero2.jpg", // URL gambar avatar pada notifikasi
    title: "Success", // Judul default toast
    message: "Successfully logged in", // Pesan default toast
    time: 5000, // Durasi toast (dalam milidetik)
    startAt: 0, // Waktu mulai munculnya toast dalam milidetik (0 berarti langsung muncul)
    position: "bottom-end" // Posisi toast (pilihan: top-start, top-end, bottom-start, bottom-end)
});
```

---

## Menjalankan Daon Toast
Setelah diinisialisasi, Anda dapat memanggil toast dengan fungsi `daonGo()`. 

### Contoh Penggunaan

#### 1. Menjalankan Toast Secara Langsung
```javascript
daonGo({
    title: "Kikukeii",
    message: "Daon Toast running successfully",
});
```

#### 2. Menjalankan Toast dengan Penundaan 5 Detik
```javascript
daonGo({
    title: "Kikukeii",
    message: "Run Daon Toast in 5 seconds",
    startAt: 5000, // Toast muncul setelah 5 detik
});
```

#### 3. Menjalankan Toast dengan Durasi 10 Detik
```javascript
daonGo({
    title: "Kikukeii",
    message: "Run Daon Toast 10 seconds delay",
    time: 10000, // Toast akan muncul selama 10 detik
});
```

#### 4. Menjalankan Toast Saat Tombol Diklik
```javascript
$('button').click(function () {
    daonGo({
        title: "Kikukeii",
        message: "Daon Toast running by click",
    });
});
```

---

## Parameter
Berikut adalah parameter yang dapat digunakan dalam `initDaon()` dan `daonGo()`:

| Parameter | Tipe | Deskripsi |
|-----------|------|------------|
| `avatar` | `string` | URL gambar avatar dalam toast |
| `title` | `string` | Judul toast |
| `message` | `string` | Pesan yang ditampilkan dalam toast |
| `time` | `number` | Durasi toast dalam milidetik (default: 5000) |
| `startAt` | `number` | Waktu penundaan sebelum toast muncul dalam milidetik (default: 0) |
| `position` | `string` | Posisi toast pada layar (opsi: `top-start`, `top-end`, `bottom-start`, `bottom-end`) |

---

## Kesimpulan
**Daon Toast** adalah pustaka ringan yang memudahkan pengelolaan notifikasi dalam aplikasi web. Dengan fleksibilitas dalam pengaturan waktu, posisi, dan event pemicu, Daon Toast cocok digunakan dalam berbagai kebutuhan pemberitahuan antarmuka pengguna.

