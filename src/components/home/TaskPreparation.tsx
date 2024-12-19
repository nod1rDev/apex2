import React from 'react';

type Language = 'en' | 'uz' | 'kz' | 'ru';

interface TaskContent {
  title: string;
  description: string;
  features: string[];
  qrInstructions: string[];
  iosDownload: string;
  androidDownload: string;
}

const taskContent: Record<Language, TaskContent> = {
  en: {
    title: "Manage and complete tasks with ease at your fingertips",
    description: "Scan the QR code to track the official account or download the official app.",
    features: [
      "Get the latest mission updates",
      "Exchange more experiences",
      "Priority experience for prosperity activities"
    ],
    qrInstructions: [
      "Scan the QR code to track the official account",
      "Scan the code to download the official APP"
    ],
    iosDownload: "Download for iOS",
    androidDownload: "Download for Android"
  },
  uz: {
    title: "Qo'lingizning kaftida hisoblang va vazifalarni barmoqlaringiz bilan osongina bajaring",
    description: "Rasmiy umumiy hisobni kuzatish yoki rasmiy APPni yuklab olish uchun QR kodini skanerlang.",
    features: [
      "Eng so'nggi missiya ma'lumotlarini oling",
      "Ko'p tajriba almashish",
      "Farovonlik faoliyati uchun ustuvor tajriba"
    ],
    qrInstructions: [
      "Rasmiy umumiy hisobni kuzatish uchun QR kodini skanerlang",
      "Rasmiy APPni yuklab olish uchun kodni skanerlang"
    ],
    iosDownload: "IOS yuklab olish",
    androidDownload: "Android yuklab olish"
  },
  kz: {
    title: "Тапсырмаларды оңай орындаңыз және басқарыңыз",
    description: "Ресми есептік жазбаны бақылау немесе ресми қолданбаны жүктеу үшін QR кодын сканерлеңіз.",
    features: [
      "Соңғы миссия жаңартуларын алыңыз",
      "Көбірек тәжірибе алмасу",
      "Өркендеу іс-шаралары үшін басымдық тәжірибесі"
    ],
    qrInstructions: [
      "Ресми есептік жазбаны бақылау үшін QR кодын сканерлеңіз",
      "Ресми қолданбаны жүктеу үшін кодты сканерлеңіз"
    ],
    iosDownload: "IOS жүктеп алу",
    androidDownload: "Android жүктеп алу"
  },
  ru: {
    title: "Управляйте и выполняйте задачи с легкостью",
    description: "Сканируйте QR-код, чтобы отслеживать официальный аккаунт или скачать официальное приложение.",
    features: [
      "Получите последние обновления миссий",
      "Обмен опытом",
      "Приоритетный опыт для мероприятий по процветанию"
    ],
    qrInstructions: [
      "Сканируйте QR-код для отслеживания официального аккаунта",
      "Сканируйте код для загрузки официального приложения"
    ],
    iosDownload: "Скачать для iOS",
    androidDownload: "Скачать для Android"
  }
};

export function TaskPreparation({ language }: { language: Language }) {
  const t = taskContent[language];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center">{t.title}</h2>
      <p className="mt-4 text-center">{t.description}</p>
      <div className="flex justify-center mt-8">
        <div className="text-center mx-4">
          <h3 className="font-semibold">{t.qrInstructions[0]}</h3>
          <ul className="mt-2">
            {t.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span>🔸</span>
                {feature}
              </li>
            ))}
          </ul>
          <img
            className="w-[100px] h-[100px] mt-4"
            src="https://shujiajia.com/platform/home/static/img/down_icon.10aaebe0.png"
            alt="QR Code 1"
          />
        </div>
        <div className="text-center mx-4">
          <h3 className="font-semibold">{t.qrInstructions[1]}</h3>
          <ul className="mt-2">
            <li className="flex items-center gap-2">
              <span>📱</span>
              {t.iosDownload}
            </li>
            <li className="flex items-center gap-2">
              <span>📱</span>
              {t.androidDownload}
            </li>
          </ul>
          <img
            className="w-[100px] h-[100px] mt-4"
            src="https://shujiajia.com/platform/home/static/img/down_icon.10aaebe0.png"
            alt="QR Code 2"
          />
        </div>
      </div>
    </div>
  );
} 