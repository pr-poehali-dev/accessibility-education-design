import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navigationItems = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "calendar", label: "Календарь мероприятий", icon: "Calendar" },
    { id: "admission", label: "Информация о поступлении", icon: "GraduationCap" },
    { id: "specialties", label: "Перечень специальностей", icon: "BookOpen" },
    { id: "programs", label: "Программы обучения", icon: "Library" },
    { id: "support", label: "Услуги поддержки", icon: "Heart" },
    { id: "contacts", label: "Контакты", icon: "Phone" },
  ];

  const specialties = [
    { name: "Программирование в компьютерных системах", code: "09.02.03", duration: "3 года 10 мес" },
    { name: "Информационные системы и программирование", code: "09.02.07", duration: "3 года 10 мес" },
    { name: "Экономика и бухгалтерский учет", code: "38.02.01", duration: "2 года 10 мес" },
    { name: "Дизайн", code: "54.02.01", duration: "3 года 10 мес" },
    { name: "Гостиничное дело", code: "43.02.14", duration: "3 года 10 мес" },
  ];

  const events = [
    { date: "15 ноября 2025", title: "День открытых дверей", description: "Знакомство с колледжем и специальностями" },
    { date: "20 ноября 2025", title: "Профориентационный семинар", description: "Выбор профессии для людей с ОВЗ" },
    { date: "1 декабря 2025", title: "Консультация психолога", description: "Индивидуальные консультации" },
    { date: "10 декабря 2025", title: "Ярмарка вакансий", description: "Встреча с работодателями" },
  ];

  const supportServices = [
    { 
      title: "Психологическая поддержка", 
      description: "Индивидуальные и групповые консультации психолога",
      icon: "Users"
    },
    { 
      title: "Тьюторское сопровождение", 
      description: "Персональная помощь в процессе обучения",
      icon: "User"
    },
    { 
      title: "Адаптированные программы", 
      description: "Образовательные программы с учетом особых потребностей",
      icon: "FileText"
    },
    { 
      title: "Доступная среда", 
      description: "Безбарьерная инфраструктура и специальное оборудование",
      icon: "Accessibility"
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground p-6 border-b-4 border-secondary">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Среднее профессиональное образование
          </h1>
          <p className="text-2xl">Для людей с инвалидностью и ОВЗ</p>
        </div>
      </header>

      <nav className="bg-secondary border-b-4 border-primary sticky top-0 z-50">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                variant={activeSection === item.id ? "default" : "outline"}
                size="lg"
                className="text-lg font-semibold min-w-[200px] border-2"
              >
                <Icon name={item.icon as any} className="mr-2" size={24} />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto p-6 md:p-8">
        {activeSection === "home" && (
          <div className="space-y-8">
            <Card className="p-8 border-4 border-primary">
              <h2 className="text-3xl font-bold mb-4 text-primary">Добро пожаловать!</h2>
              <p className="text-xl mb-4">
                Мы предоставляем качественное среднее профессиональное образование 
                для людей с инвалидностью и ограниченными возможностями здоровья.
              </p>
              <p className="text-xl mb-4">
                Наша цель — обеспечить доступную и комфортную среду для получения 
                востребованной профессии и успешной интеграции в общество.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="p-6 bg-secondary text-center border-2 border-primary">
                  <Icon name="Award" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">15+ специальностей</h3>
                  <p className="text-lg">Широкий выбор направлений обучения</p>
                </Card>
                <Card className="p-6 bg-secondary text-center border-2 border-primary">
                  <Icon name="Users" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">Индивидуальный подход</h3>
                  <p className="text-lg">Персональное сопровождение каждого студента</p>
                </Card>
                <Card className="p-6 bg-secondary text-center border-2 border-primary">
                  <Icon name="Briefcase" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">Помощь в трудоустройстве</h3>
                  <p className="text-lg">Содействие в поиске работы после обучения</p>
                </Card>
              </div>
            </Card>
          </div>
        )}

        {activeSection === "calendar" && (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6 text-primary">Календарь мероприятий</h2>
            {events.map((event, index) => (
              <Card key={index} className="p-6 border-4 border-primary hover:bg-secondary transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-primary p-4 rounded border-2 border-primary min-w-[150px] text-center">
                    <Icon name="Calendar" size={32} className="mx-auto mb-2" />
                    <p className="text-xl font-bold">{event.date}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-primary">{event.title}</h3>
                    <p className="text-xl">{event.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeSection === "admission" && (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6 text-primary">Информация о поступлении</h2>
            <Card className="p-8 border-4 border-primary">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="documents">
                  <AccordionTrigger className="text-2xl font-bold">
                    <Icon name="FileText" className="mr-2" size={28} />
                    Необходимые документы
                  </AccordionTrigger>
                  <AccordionContent className="text-xl space-y-2 pl-10">
                    <p>• Заявление о приеме</p>
                    <p>• Документ об образовании (аттестат)</p>
                    <p>• Паспорт (копия)</p>
                    <p>• Справка МСЭ (для лиц с инвалидностью)</p>
                    <p>• Заключение ПМПК (для лиц с ОВЗ)</p>
                    <p>• 6 фотографий 3×4</p>
                    <p>• Медицинская справка формы 086-у</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="dates">
                  <AccordionTrigger className="text-2xl font-bold">
                    <Icon name="Calendar" className="mr-2" size={28} />
                    Сроки приема документов
                  </AccordionTrigger>
                  <AccordionContent className="text-xl pl-10">
                    <p className="mb-2">С 20 июня по 15 августа 2025 года</p>
                    <p className="font-semibold">Зачисление: 25 августа 2025 года</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="benefits">
                  <AccordionTrigger className="text-2xl font-bold">
                    <Icon name="Star" className="mr-2" size={28} />
                    Льготы при поступлении
                  </AccordionTrigger>
                  <AccordionContent className="text-xl space-y-2 pl-10">
                    <p>• Зачисление без экзаменов для некоторых категорий</p>
                    <p>• Преимущественное право зачисления</p>
                    <p>• Дополнительные баллы за индивидуальные достижения</p>
                    <p>• Отсрочка от армии на период обучения</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="process">
                  <AccordionTrigger className="text-2xl font-bold">
                    <Icon name="ClipboardList" className="mr-2" size={28} />
                    Процесс поступления
                  </AccordionTrigger>
                  <AccordionContent className="text-xl space-y-2 pl-10">
                    <p>1. Подача документов (лично или онлайн)</p>
                    <p>2. Консультация с психологом и тьютором</p>
                    <p>3. Определение необходимых условий обучения</p>
                    <p>4. Формирование рейтинга абитуриентов</p>
                    <p>5. Публикация списков зачисленных</p>
                    <p>6. Заключение договора об образовании</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        )}

        {activeSection === "specialties" && (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6 text-primary">Перечень специальностей</h2>
            <div className="grid gap-6">
              {specialties.map((specialty, index) => (
                <Card key={index} className="p-6 border-4 border-primary hover:bg-secondary transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-primary">{specialty.name}</h3>
                      <p className="text-xl text-muted-foreground">Код специальности: {specialty.code}</p>
                    </div>
                    <div className="bg-secondary p-4 rounded border-2 border-primary text-center">
                      <Icon name="Clock" size={32} className="mx-auto mb-2 text-primary" />
                      <p className="text-xl font-bold">{specialty.duration}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === "programs" && (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6 text-primary">Программы обучения</h2>
            <Card className="p-8 border-4 border-primary">
              <Tabs defaultValue="adapted" className="w-full">
                <TabsList className="grid w-full grid-cols-2 h-auto gap-2 bg-transparent">
                  <TabsTrigger value="adapted" className="text-xl py-4 border-2 data-[state=active]:bg-secondary data-[state=active]:text-primary">
                    Адаптированные программы
                  </TabsTrigger>
                  <TabsTrigger value="standard" className="text-xl py-4 border-2 data-[state=active]:bg-secondary data-[state=active]:text-primary">
                    Стандартные программы
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="adapted" className="mt-6 space-y-4">
                  <p className="text-xl mb-4">
                    Адаптированные образовательные программы разработаны с учетом особенностей 
                    психофизического развития и индивидуальных возможностей обучающихся.
                  </p>
                  <div className="space-y-4">
                    <Card className="p-6 bg-secondary border-2 border-primary">
                      <h4 className="text-2xl font-bold mb-2 flex items-center">
                        <Icon name="Eye" className="mr-2 text-primary" size={28} />
                        Для лиц с нарушениями зрения
                      </h4>
                      <p className="text-xl">Увеличенные шрифты, аудиоматериалы, тактильные пособия</p>
                    </Card>
                    <Card className="p-6 bg-secondary border-2 border-primary">
                      <h4 className="text-2xl font-bold mb-2 flex items-center">
                        <Icon name="Ear" className="mr-2 text-primary" size={28} />
                        Для лиц с нарушениями слуха
                      </h4>
                      <p className="text-xl">Видеоматериалы с субтитрами, жестовый язык, визуальные пособия</p>
                    </Card>
                    <Card className="p-6 bg-secondary border-2 border-primary">
                      <h4 className="text-2xl font-bold mb-2 flex items-center">
                        <Icon name="Accessibility" className="mr-2 text-primary" size={28} />
                        Для лиц с нарушениями опорно-двигательного аппарата
                      </h4>
                      <p className="text-xl">Специальное оборудование, эргономичные рабочие места</p>
                    </Card>
                    <Card className="p-6 bg-secondary border-2 border-primary">
                      <h4 className="text-2xl font-bold mb-2 flex items-center">
                        <Icon name="Brain" className="mr-2 text-primary" size={28} />
                        Для лиц с интеллектуальными нарушениями
                      </h4>
                      <p className="text-xl">Упрощенные программы, дополнительное время на освоение материала</p>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="standard" className="mt-6 space-y-4">
                  <p className="text-xl mb-4">
                    Стандартные образовательные программы соответствуют ФГОС СПО 
                    и включают все необходимые дисциплины для получения квалификации.
                  </p>
                  <div className="space-y-4">
                    <Card className="p-6 bg-secondary border-2 border-primary">
                      <h4 className="text-2xl font-bold mb-2">Общеобразовательный цикл</h4>
                      <p className="text-xl">Русский язык, математика, история, обществознание, английский язык</p>
                    </Card>
                    <Card className="p-6 bg-secondary border-2 border-primary">
                      <h4 className="text-2xl font-bold mb-2">Общепрофессиональный цикл</h4>
                      <p className="text-xl">Дисциплины, формирующие базовые профессиональные знания</p>
                    </Card>
                    <Card className="p-6 bg-secondary border-2 border-primary">
                      <h4 className="text-2xl font-bold mb-2">Профессиональный цикл</h4>
                      <p className="text-xl">Специальные дисциплины и практика по выбранной специальности</p>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        )}

        {activeSection === "support" && (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6 text-primary">Услуги поддержки для студентов с ОВЗ</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {supportServices.map((service, index) => (
                <Card key={index} className="p-8 border-4 border-primary hover:bg-secondary transition-colors">
                  <Icon name={service.icon as any} size={48} className="text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-primary">{service.title}</h3>
                  <p className="text-xl">{service.description}</p>
                </Card>
              ))}
            </div>
            <Card className="p-8 border-4 border-primary bg-secondary mt-8">
              <h3 className="text-3xl font-bold mb-4 text-primary flex items-center">
                <Icon name="Building" className="mr-2" size={36} />
                Доступная инфраструктура
              </h3>
              <ul className="text-xl space-y-3">
                <li className="flex items-start">
                  <Icon name="Check" className="mr-2 mt-1 text-primary flex-shrink-0" size={24} />
                  <span>Пандусы и подъемники для маломобильных граждан</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="mr-2 mt-1 text-primary flex-shrink-0" size={24} />
                  <span>Специализированные учебные кабинеты с современным оборудованием</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="mr-2 mt-1 text-primary flex-shrink-0" size={24} />
                  <span>Адаптированные компьютерные классы</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="mr-2 mt-1 text-primary flex-shrink-0" size={24} />
                  <span>Библиотека с аудиокнигами и крупношрифтовыми изданиями</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="mr-2 mt-1 text-primary flex-shrink-0" size={24} />
                  <span>Сенсорная комната для релаксации и снятия стресса</span>
                </li>
              </ul>
            </Card>
          </div>
        )}

        {activeSection === "contacts" && (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6 text-primary">Контактная информация</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 border-4 border-primary">
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                  <Icon name="MapPin" className="mr-2" size={32} />
                  Адрес
                </h3>
                <p className="text-xl mb-2">г. Москва, ул. Образования, д. 15</p>
                <p className="text-xl">Метро: Университет</p>
              </Card>

              <Card className="p-8 border-4 border-primary">
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                  <Icon name="Phone" className="mr-2" size={32} />
                  Телефоны
                </h3>
                <p className="text-xl mb-2">Приемная комиссия: +7 (495) 123-45-67</p>
                <p className="text-xl">Отдел по работе с ОВЗ: +7 (495) 123-45-68</p>
              </Card>

              <Card className="p-8 border-4 border-primary">
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                  <Icon name="Mail" className="mr-2" size={32} />
                  Email
                </h3>
                <p className="text-xl mb-2">priem@college-ovz.ru</p>
                <p className="text-xl">info@college-ovz.ru</p>
              </Card>

              <Card className="p-8 border-4 border-primary">
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                  <Icon name="Clock" className="mr-2" size={32} />
                  Режим работы
                </h3>
                <p className="text-xl mb-2">Понедельник - Пятница: 9:00 - 18:00</p>
                <p className="text-xl">Суббота: 10:00 - 15:00</p>
                <p className="text-xl">Воскресенье: выходной</p>
              </Card>
            </div>

            <Card className="p-8 border-4 border-primary bg-secondary">
              <h3 className="text-3xl font-bold mb-6 text-primary">Как добраться</h3>
              <div className="space-y-4 text-xl">
                <p className="flex items-start">
                  <Icon name="Train" className="mr-3 mt-1 text-primary flex-shrink-0" size={28} />
                  <span><strong>На метро:</strong> станция "Университет", выход №3, далее 5 минут пешком</span>
                </p>
                <p className="flex items-start">
                  <Icon name="Bus" className="mr-3 mt-1 text-primary flex-shrink-0" size={28} />
                  <span><strong>На автобусе:</strong> маршруты №119, №661 до остановки "Колледж"</span>
                </p>
                <p className="flex items-start">
                  <Icon name="Car" className="mr-3 mt-1 text-primary flex-shrink-0" size={28} />
                  <span><strong>На автомобиле:</strong> парковка для людей с инвалидностью у главного входа</span>
                </p>
              </div>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-primary text-primary-foreground mt-12 p-8 border-t-4 border-secondary">
        <div className="container mx-auto text-center">
          <p className="text-2xl mb-4">
            Среднее профессиональное образование для людей с инвалидностью и ОВЗ
          </p>
          <p className="text-xl">
            © 2025 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
