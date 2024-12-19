import React from 'react';
import { Clock, DollarSign, Phone, Home } from 'lucide-react';

const content = {
  en: {
    title: "Project Overview",
    subtitle: "Essential information about our EnglishOffline Task Preparation",
    requirements: [
      {
        title: "Duration",
        description: "2 months project timeline",
        icon: Clock
      },
      {
        title: "Payment",
        description: "$15 per mission",
        icon: DollarSign
      },
      {
        title: "Equipment & Method",
        description: "Two phones needed: one for the Shujiajia APP, one with a mobile card for calls. Input phone number without '+'.",
        icon: Phone
      },
      {
        title: "Environment",
        description: "Quiet room required. No other people, laughter, or noise. Avoid open areas.",
        icon: Home
      }
    ]
  },
  uz: {
    title: "Loyiha Haqida",
    subtitle: "Annotatsiya loyihasi haqida muhim ma'lumotlar",
    requirements: [
      {
        title: "Davomiyligi",
        description: "2 oylik loyiha muddati",
        icon: Clock
      },
      {
        title: "To'lov",
        description: "Har bir missiya uchun $15",
        icon: DollarSign
      },
      {
        title: "Jihozlar va Usul",
        description: "Ikki telefon kerak: biri Shujiajia APP uchun, biri qo'ng'iroqlar uchun. Telefon raqamini '+'siz kiriting.",
        icon: Phone
      },
      {
        title: "Muhit",
        description: "Tinch xona kerak. Boshqa odamlar, kulgi yoki shovqin bo'lmasligi kerak. Ochiq joylardan saqlaning.",
        icon: Home
      }
    ]
  },
  kz: {
    title: "Жоба Туралы",
    subtitle: "Аннотация жобасы туралы маңызды ақпарат",
    requirements: [
      {
        title: "Ұзақтығы",
        description: "2 айлық жоба мерзімі",
        icon: Clock
      },
      {
        title: "Төлем",
        description: "Әр миссия үшін $15",
        icon: DollarSign
      },
      {
        title: "Жабдықтар мен Әдіс",
        description: "Екі телефон қажет: бірі Shujiajia APP үшін, бірі қоңыраулар үшін. Телефон нөірін '+'сыз енгізіңіз.",
        icon: Phone
      },
      {
        title: "Орта",
        description: "Тыныш бөлме қажет. Басқа адамдар, күлкі немесе шу болмауы керек. Ашық жерлерден аулақ болыңыз.",
        icon: Home
      }
    ]
  },
  ru: {
    title: "Обзор Проекта",
    subtitle: "Важная информация о проекте аннотации",
    requirements: [
      {
        title: "Длительность",
        description: "Срок проекта 2 месяца",
        icon: Clock
      },
      {
        title: "Оплата",
        description: "$15 за каждую миссию",
        icon: DollarSign
      },
      {
        title: "Оборудование и Метод",
        description: "Нужно два телефона: один для Shujiajia APP, другой с SIM-картой для звонков. Вводите номер без '+'.",
        icon: Phone
      },
      {
        title: "Среда",
        description: "Требуется тихая комната. Без других людей, смеха или шума. Избегайте открытых пространств.",
        icon: Home
      }
    ]
  }
};

export function ProjectOverview({ language }) {
  const t = content[language];

  return (
    <section id="overview" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {t.subtitle}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {t.requirements.map((item, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="rounded-lg bg-gray-50 p-2 ring-1 ring-gray-200/50">
                  <item.icon className="h-6 w-6 text-gray-600" />
                </div>
                <dt className="mt-4 font-semibold text-gray-900">{item.title}</dt>
                <dd className="mt-2 leading-7 text-gray-600">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}