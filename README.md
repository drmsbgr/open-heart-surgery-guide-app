# Açık Kalp Ameliyatı Hasta Eğitim Rehberi (Open Heart Surgery Guide)

Açık kalp ameliyatı olacak hastalar ve yakınları için bilgilendirici, modern ve erişilebilir bir mobil uygulama.

## 🚀 Özellikler

- **Kapsamlı İçerik**: Ameliyat öncesi hazırlıktan ameliyat sonrası bakıma kadar detaylı rehberler.
- **Video Kütüphanesi**: Önemli egzersizler ve bakım süreçleri için video kaynakları.
- **Metin Okuma (TTS)**: Görme zorluğu çeken veya okumakta zorlanan hastalar için bölümleri sesli dinleme özelliği.
- **Kişiselleştirilebilir Temalar**: Mavi (Varsayılan), Mor ve Turuncu renk seçenekleri.
- **Karanlık Mod**: Göz yormayan gece modu desteği.
- **Modern Tasarım**: Gradient başlıklar, animasyonlu kartlar ve temiz arayüz.
- **Offline & Online Mod**: Supabase entegrasyonu ile anlık veri güncellemesi, internet yoksa yerel verilerle çalışma (Fallback).

## 🛠️ Kurulum

1.  **Projeyi Klonla**:
    ```bash
    git clone https://github.com/KULLANICI_ADI/REPO_ADI.git
    cd guide-app
    ```

2.  **Bağımlılıkları Yükle**:
    ```bash
    npm install
    ```

3.  **Çevresel Değişkenleri Ayarla (.env)**:
    - `.env.example` dosyasının adını `.env` yapın.
    - Supabase URL ve API Key bilgilerinizi ekleyin (Opsiyonel: Eklenmezse `data.json` kullanılır).

4.  **Uygulamayı Başlat**:
    ```bash
    npx expo start --clear
    ```

## 🏗️ Build Alma (APK / AAB)

Bu proje **EAS Build** ile yapılandırılmıştır.

```bash
# EAS CLI Yükle
npm install -g eas-cli

# Android APK (Test)
eas build -p android --profile preview

# Android Production (Play Store)
eas build -p android --profile production
```

## 📂 Proje Yapısı

- `app/`: Expo Router ekranları ve navigasyon.
- `components/`: Tekrar kullanılabilir UI bileşenleri (`ThemedText`, `ThemedView` vb.).
- `constants/`: Renkler ve konfigürasyonlar.
- `context/`: Tema yönetimi (`ThemeContext`).
- `hooks/`: Veri çekme (`useData`) ve tema (`useThemeColor`) hook'ları.
- `assets/`: Resimler, logolar ve yerel veri (`data.json`).
- `lib/`: Supabase istemci ayarları.


APK link: https://expo.dev/artifacts/eas/h1SBtfEHAZVTGv6sc3NmSg.apk