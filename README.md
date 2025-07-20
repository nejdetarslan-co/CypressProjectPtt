
- Page Object Model: Her sayfa veya modül için ayrı bir JS dosyası, tüm işlemler ve selector’lar burada merkezi olarak tutulur.
- Test(product) Dosyaları: Sadece “ne test ediliyor”u anlatır, “nasıl”ı page object’lere bırakır.
- Custom Commands: Login ve search gibi tekrar eden işlemler tek satırda çağrılır.

---

Test Senaryoları

### 1. Sepet Kontrolü
- Kullanıcı login olur.
- Ürün arar ve 4. ürünü seçer.
- Ürünü sepete ekler ve açılan modaldan sepete gider.
- Sepet sayfasında ürün adı, fiyatı ve adedini doğrular.
- Tüm adımlar zincirli ve gerçek kullanıcı akışına uygun şekilde yazılmıştır.

### 2. Favorilere Ürün Ekleme
- Kullanıcı login olur.
- Ürün arar ve 4. ürünü seçer.
- Ürünü favorilere ekler.
- Favori listesinde ürünün başarıyla göründüğünü doğrular.

---

## Kurulum ve Çalıştırma

1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

2. Testleri başlatın:
   - **Görsel arayüz ile (GUI):**
     ```bash
     npx cypress open
     ```
     Açılan pencereden istediğiniz testi seçip çalıştırabilirsiniz.

   - Headless (arka planda) çalıştırmak için:
     ```bash
     npx cypress run
     ```

---

## Neden Bu Yapı?

- Modülerlik: Her sayfa ve işlem ayrı dosyada, değişiklikler merkezi olarak yönetilebilir.
- Bakım Kolaylığı: Selector veya akış değişirse, sadece ilgili Page Object güncellenir.
- Okunabilirlik: Test dosyaları sadece iş akışını anlatır, teknik detaylar arka planda kalır.
- Yeniden Kullanılabilirlik: Login, arama, sepete ekleme gibi işlemler farklı senaryolarda tekrar tekrar kullanılabilir.

---

## Ek Notlar

- Testlerde kullanılan kullanıcı bilgileri `cypress/fixtures/users.json` dosyasında tutulmaktadır.