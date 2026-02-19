-- Create tables
CREATE TABLE IF NOT EXISTS topics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    icon TEXT,
    content TEXT,
    "order" SERIAL
);

CREATE TABLE IF NOT EXISTS subtopics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    "order" SERIAL
);

CREATE TABLE IF NOT EXISTS videos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    thumbnail TEXT,
    "order" SERIAL
);

-- Enable Row Level Security (RLS)
ALTER TABLE topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE subtopics ENABLE ROW LEVEL SECURITY;
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;

-- Create policies (Public Read Access)
CREATE POLICY "Allow public read access on topics" ON topics FOR SELECT USING (true);
CREATE POLICY "Allow public read access on subtopics" ON subtopics FOR SELECT USING (true);
CREATE POLICY "Allow public read access on videos" ON videos FOR SELECT USING (true);

-- Seed Data (Topics)
INSERT INTO topics (id, title, icon, content, "order") VALUES
('10000000-0000-0000-0000-000000000001', 'Genel Bilgiler', 'info', 'Açık kalp ameliyatı, kalbin kendisinde veya kalpten çıkan büyük damarlarda yapılan cerrahi işlemleri kapsar. Bu ameliyatlar genellikle koroner arter bypass (CABG), kapak tamiri veya değişimi, doğumsal kalp anomalilerinin düzeltilmesi gibi nedenlerle yapılır. Amacımız, kalp sağlığınızı iyileştirmek ve yaşam kalitenizi artırmaktır.', 1),
('10000000-0000-0000-0000-000000000002', 'Ameliyat Öncesi Dönem', 'calendar-check', NULL, 2),
('10000000-0000-0000-0000-000000000003', 'Ameliyathane Dönemi', 'activity', NULL, 3),
('10000000-0000-0000-0000-000000000004', 'Ameliyat Sonrası Yoğun Bakım', 'heart-pulse', 'Ameliyattan sonra genellikle 1-2 gün yoğun bakımda kalırsınız. Burada hayati fonksiyonlarınız sürekli izlenir. Solunum cihazına bağlı olabilirsiniz, bu süreçte konuşamazsınız ancak hemşireler ihtiyaçlarınızı anlayacaktır.', 4),
('10000000-0000-0000-0000-000000000005', 'Servisteki Bakım', 'hospital', 'Yoğun bakımdan çıktıktan sonra servise alınırsınız. Burada yürüyüş egzersizleri, solunum fizyoterapisi ve yara bakımı önemlidir. Ağrı kontrolü için ilaçlarınız düzenlenecektir.', 5),
('10000000-0000-0000-0000-000000000006', 'Evde Bakım', 'home', 'Taburcu olduktan sonra evde dinlenmeli, ağır kaldırmamalı ve doktorunuzun önerdiği egzersizleri yapmalısınız. İlaçlarınızı düzenli kullanmalı ve kontrollerinizi aksatmamalısınız. Ateş, nefes darlığı veya yara yerinde akıntı olursa hemen doktorunuza başvurun.', 6),
('10000000-0000-0000-0000-000000000007', 'Kaynaklar', 'book-open', 'Türk Kalp Vakfı, Sağlık Bakanlığı Kalp Sağlığı Portalı ve hastanemizin web sitesinden detaylı bilgilere ulaşabilirsiniz.', 7);

-- Seed Data (Subtopics)
INSERT INTO subtopics (topic_id, title, content, "order") VALUES
('10000000-0000-0000-0000-000000000002', 'Hazırlık Süreci', 'Ameliyat öncesinde kan tahlilleri, EKG, akciğer filmi ve anestezi muayenesi yapılır. Kullanmakta olduğunuz ilaçları doktorunuza bildirmeniz önemlidir.', 1),
('10000000-0000-0000-0000-000000000002', 'Beslenme ve Hijyen', 'Ameliyattan önceki gece saat 24:00''ten sonra bir şey yiyip içmemeniz gerekmektedir. Vücut temizliği için size verilecek özel solüsyonla duş almanız istenecektir.', 2),
('10000000-0000-0000-0000-000000000002', 'Psikolojik Hazırlık', 'Stres ve kaygı normaldir. Doktorunuz ve hemşirelerinizle endişelerinizi paylaşmaktan çekinmeyin.', 3),
('10000000-0000-0000-0000-000000000003', 'Ameliyathane Ortamı', 'Ameliyathane soğuk ve steril bir ortamdır. Sizi uyutmak için damar yolu açılacak ve anestezi verilecektir.', 1),
('10000000-0000-0000-0000-000000000003', 'Ameliyat Süresi', 'Ameliyatın türüne göre süre değişebilir ancak genellikle 3-6 saat sürer.', 2);

-- Seed Data (Videos)
INSERT INTO videos (title, url, thumbnail, "order") VALUES
('Kalp Sağlığı ve Egzersiz', 'https://www.youtube.com/watch?v=abcdefg', 'https://img.youtube.com/vi/abcdefg/hqdefault.jpg', 1),
('Ameliyat Sonrası Beslenme', 'https://www.youtube.com/watch?v=hijklmn', 'https://img.youtube.com/vi/hijklmn/hqdefault.jpg', 2),
('Nefes Egzersizleri', 'https://www.youtube.com/watch?v=opqrstu', 'https://img.youtube.com/vi/opqrstu/hqdefault.jpg', 3);
