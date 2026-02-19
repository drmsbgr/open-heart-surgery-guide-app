# Açık Kalp Ameliyatı Hasta Eğitim Rehberi

Bu proje, açık kalp ameliyatı geçirecek hastaları ameliyat öncesi, sırası ve sonrası süreçler hakkında bilgilendirmek amacıyla geliştirilmiş bir mobil uygulamadır.

## Özellikler

- **Bölümler:** Ameliyat sürecinin aşamalarına göre ayrılmış detaylı bilgilendirme içerikleri.
- **Videolar:** Eğitim amaçlı video içeriklerine hızlı erişim.
- **Dinamik İçerik:** Tüm içerik ve videolar merkezi bir veri dosyasından yönetilir.
- **Tema Desteği:** Kullanıcı tercihine göre Açık ve Koyu mod desteği.
- **Aşama Yönetimi:** Loading ve Hata durumları için kullanıcı geri bildirimleri.

## Teknolojiler

- **React Native** + **Expo**
- **Expo Router** (Dosya tabanlı yönlendirme)
- **TypeScript**
- **Lucide React Native** (İkon seti)

## Kurulum ve Çalıştırma

1. Projeyi klonlayın veya indirin.
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Uygulamayı başlatın:
   ```bash
   npx expo start
   ```
4. Mobil cihazınızdaki Expo Go uygulamasıyla QR kodu taratın veya emülatörde çalıştırın.

## Proje Yapısı

- `app/`: Uygulama ekranları ve yönlendirme yapısı.
- `components/`: Tekrar kullanılabilir UI bileşenleri.
- `constants/`: Tema renkleri ve sabitler.
- `hooks/`: Özel hook'lar (veri çekme, tema yönetimi vb.).
- `assets/`: Görseller ve veri dosyası (`data.json`).
