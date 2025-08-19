// Internationalization object
const i18n = {
    ru: {
        nav: {
            features: 'Возможности',
            howItWorks: 'Как работает',
            faq: 'FAQ',
            contact: 'Контакты',
            demo: 'Демо'
        },
        hero: {
            title: 'FinExi – Учет и контроль для финансового бизнеса',
            subtitle: 'Автоматизируйте обмены, соблюдайте KYC/AML, управляйте балансами и аналитикой в одной системе.',
            demoBtn: 'Запросить демо',
            learnMoreBtn: 'Узнать больше'
        },
        problems: {
            title: 'Проблемы криптообменников',
            items: [
                {
                    title: 'Отсутствие стандартизированной системы учета',
                    desc: 'Разрозненные инструменты не дают полной картины бизнеса'
                },
                {
                    title: 'Риски несоблюдения AML/KYC',
                    desc: 'Сложности с регуляторными требованиями и проверками'
                },
                {
                    title: 'Сложности с контролем балансов и отчетностью',
                    desc: 'Трудности в отслеживании движения средств'
                },
                {
                    title: 'Прозрачная доходность по операциям',
                    desc: 'Отсутствие четкой аналитики прибыльности'
                },
                {
                    title: 'История и статистика работы с клиентами',
                    desc: 'Нет централизованной базы данных клиентов'
                }
            ]
        },
        solutions: {
            title: 'Решение от FinExi',
            items: [
                {
                    title: 'Комплексная платформа для управления сделками',
                    desc: 'Все операции в одном интерфейсе'
                },
                {
                    title: 'База клиентов и история по ним',
                    desc: 'Полная история взаимодействий с каждым клиентом'
                },
                {
                    title: 'Интеграция tronscan, sumsab (скоро)',
                    desc: 'Автоматическая синхронизация с внешними сервисами'
                },
                {
                    title: 'Поддержка всех типов обменов',
                    desc: 'Фиат ↔ криптовалюта, криптовалюта ↔ криптовалюта, фиат ↔ фиат'
                },
                {
                    title: 'Единое рабочее пространство',
                    desc: 'Клиент ↔ менеджер ↔ кассир ↔ собственник в одном месте'
                },
                {
                    title: 'Интеграция с сайтом (скоро)',
                    desc: 'Автоматический прием заявок с вашего сайта'
                }
            ]
        },
        features: {
            title: 'Возможности FinExi',
            subtitle: 'Полный набор инструментов для эффективного управления обменным бизнесом',
            items: [
                {
                    title: 'Учет обмена',
                    desc: 'Фиат ↔ виртуальная, виртуальная ↔ виртуальная, фиат ↔ фиат'
                },
                {
                    title: 'KYC/AML',
                    desc: 'Ведение клиентских досье и соблюдение регуляторных требований'
                },
                {
                    title: 'Дашборды и аналитика',
                    desc: 'Детальная статистика и отчеты по всем операциям'
                },
                {
                    title: 'Учёт остатков',
                    desc: 'Контроль движений по кассам и кошелькам в реальном времени'
                },
                {
                    title: 'Интеграции',
                    desc: 'Подключение к внешним сервисам и API'
                },
                {
                    title: 'Безопасность',
                    desc: 'Защита данных и гибкое разграничение прав доступа'
                }
            ]
        },
        howItWorks: {
            title: 'Как начать работу с FinExi',
            subtitle: 'Простой процесс запуска за 3 шага',
            steps: [
                {
                    title: 'Настройка точек обмена',
                    desc: 'Конфигурируем систему под ваши бизнес-процессы и требования'
                },
                {
                    title: 'Подключение касс',
                    desc: 'Интегрируем все ваши кассы и кошельки в единую систему'
                },
                {
                    title: 'Запуск и управление',
                    desc: 'Начинаете работать с полным контролем над операциями'
                }
            ]
        },
        trust: {
            title: 'Доверие клиентов',
            subtitle: 'Интерфейс, которому доверяют профессионалы',
            items: [
                {
                    title: 'Главная панель',
                    desc: 'Обзор всех операций'
                },
                {
                    title: 'Аналитика',
                    desc: 'Детальная статистика'
                },
                {
                    title: 'Управление клиентами',
                    desc: 'База клиентов и KYC'
                }
            ]
        },
        faq: {
            title: 'Часто задаваемые вопросы',
            items: [
                {
                    question: 'Для кого предназначена платформа?',
                    answer: 'Наше решение подходит для пунктов обмена валют, микрофинансовых организаций, банков и других участников финансового рынка.'
                },
                {
                    question: 'Какие процессы автоматизирует система?',
                    answer: '• Приём и обработку заявок клиентов<br>• Скоринг и оценку рисков<br>• Управление договорами и платежами<br>• Ведение клиентской базы (CRM)<br>• Отчётность и аналитика'
                },
                {
                    question: 'Можно ли адаптировать ПО под конкретные бизнес-процессы?',
                    answer: 'Да, система гибко настраивается под требования конкретной компании: от дизайна клиентского кабинета до бизнес-логики и интеграций.'
                },
                {
                    question: 'Насколько безопасно хранение данных?',
                    answer: 'Finexi соответствует современным стандартам безопасности, использует шифрование и защищённые каналы связи. Все данные хранятся в соответствии с требованиями законодательства.'
                },
                {
                    question: 'Как быстро можно внедрить систему?',
                    answer: 'Срок внедрения зависит от масштаба компании и объёма кастомизаций. Базовый запуск возможен в течение нескольких недель.'
                },
                {
                    question: 'Предоставляете ли вы техническую поддержку?',
                    answer: 'Да, мы сопровождаем клиентов на всех этапах: от внедрения и обучения сотрудников до круглосуточной технической поддержки.'
                },
                {
                    question: 'Как рассчитывается стоимость использования?',
                    answer: 'Стоимость зависит от выбранного тарифного плана, количества пользователей и необходимых модулей. Для точного расчёта вы можете связаться с нашим отделом продаж.'
                },
                {
                    question: 'Можно ли протестировать систему перед покупкой?',
                    answer: 'Да, мы предоставляем демо-доступ, чтобы вы могли оценить функционал и удобство работы.'
                },
                {
                    question: 'Где хранится криптовалюта компании?',
                    answer: 'Виртуальные активы компании хранятся у него на кошельке и мы не имеем никакого доступа для управления ими.'
                }
            ]
        },
        cta: {
            title: 'Готовы перейти на автоматизацию?',
            subtitle: 'Оптимизируйте свой обменный бизнес с FinExi уже сегодня',
            button: 'Закажите бесплатное демо'
        },
        footer: {
            description: 'Учет и контроль для финансового бизнеса',
            contacts: 'Контакты',
            documents: 'Документы',
            privacy: 'Политика конфиденциальности',
            terms: 'Условия использования',
            copyright: '© 2024 FinExi.io. Все права защищены.'
        },
        modal: {
            title: 'Запросить демо FinExi',
            nameLabel: 'Имя',
            emailLabel: 'Email',
            companyLabel: 'Компания',
            phoneLabel: 'Телефон',
            messageLabel: 'Сообщение',
            messagePlaceholder: 'Расскажите о вашем бизнесе и требованиях...',
            submitBtn: 'Отправить запрос',
            sending: 'Отправка...',
            successMessage: 'Спасибо! Ваш запрос отправлен. Мы свяжемся с вами в ближайшее время.',
            errorMessage: 'Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.'
        }
    },
    en: {
        nav: {
            features: 'Features',
            howItWorks: 'How it Works',
            faq: 'FAQ',
            contact: 'Contact',
            demo: 'Demo'
        },
        hero: {
            title: 'FinExi – Accounting and Control for Financial Business',
            subtitle: 'Automate exchanges, comply with KYC/AML, manage balances and analytics in one system.',
            demoBtn: 'Request Demo',
            learnMoreBtn: 'Learn More'
        },
        problems: {
            title: 'Crypto Exchange Problems',
            items: [
                {
                    title: 'Lack of standardized accounting system',
                    desc: 'Fragmented tools don\'t provide a complete business picture'
                },
                {
                    title: 'AML/KYC compliance risks',
                    desc: 'Difficulties with regulatory requirements and checks'
                },
                {
                    title: 'Balance control and reporting complexities',
                    desc: 'Difficulties in tracking fund movements'
                },
                {
                    title: 'Transparent transaction profitability',
                    desc: 'Lack of clear profitability analytics'
                },
                {
                    title: 'Client history and statistics',
                    desc: 'No centralized client database'
                }
            ]
        },
        solutions: {
            title: 'FinExi Solution',
            items: [
                {
                    title: 'Comprehensive transaction management platform',
                    desc: 'All operations in one interface'
                },
                {
                    title: 'Client database and history',
                    desc: 'Complete interaction history with each client'
                },
                {
                    title: 'Tronscan, Sumsab integration (coming soon)',
                    desc: 'Automatic synchronization with external services'
                },
                {
                    title: 'Support for all exchange types',
                    desc: 'Fiat ↔ crypto, crypto ↔ crypto, fiat ↔ fiat'
                },
                {
                    title: 'Unified workspace',
                    desc: 'Client ↔ manager ↔ cashier ↔ owner in one place'
                },
                {
                    title: 'Website integration (coming soon)',
                    desc: 'Automatic request acceptance from your website'
                }
            ]
        },
        features: {
            title: 'FinExi Features',
            subtitle: 'Complete set of tools for efficient exchange business management',
            items: [
                {
                    title: 'Exchange Accounting',
                    desc: 'Fiat ↔ virtual, virtual ↔ virtual, fiat ↔ fiat'
                },
                {
                    title: 'KYC/AML',
                    desc: 'Client file management and regulatory compliance'
                },
                {
                    title: 'Dashboards and Analytics',
                    desc: 'Detailed statistics and reports on all operations'
                },
                {
                    title: 'Balance Tracking',
                    desc: 'Real-time control of cash and wallet movements'
                },
                {
                    title: 'Integrations',
                    desc: 'Connection to external services and APIs'
                },
                {
                    title: 'Security',
                    desc: 'Data protection and flexible access rights management'
                }
            ]
        },
        howItWorks: {
            title: 'How to Start with FinExi',
            subtitle: 'Simple 3-step launch process',
            steps: [
                {
                    title: 'Exchange Point Setup',
                    desc: 'Configure the system for your business processes and requirements'
                },
                {
                    title: 'Cash Register Connection',
                    desc: 'Integrate all your cash registers and wallets into a unified system'
                },
                {
                    title: 'Launch and Management',
                    desc: 'Start working with full control over operations'
                }
            ]
        },
        trust: {
            title: 'Client Trust',
            subtitle: 'Interface trusted by professionals',
            items: [
                {
                    title: 'Main Dashboard',
                    desc: 'Overview of all operations'
                },
                {
                    title: 'Analytics',
                    desc: 'Detailed statistics'
                },
                {
                    title: 'Client Management',
                    desc: 'Client database and KYC'
                }
            ]
        },
        faq: {
            title: 'Frequently Asked Questions',
            items: [
                {
                    question: 'Who is the platform designed for?',
                    answer: 'Our solution is suitable for currency exchange points, microfinance organizations, banks, and other financial market participants.'
                },
                {
                    question: 'What processes does the system automate?',
                    answer: '• Client request reception and processing<br>• Scoring and risk assessment<br>• Contract and payment management<br>• Client database management (CRM)<br>• Reporting and analytics'
                },
                {
                    question: 'Can the software be adapted to specific business processes?',
                    answer: 'Yes, the system is flexibly configured to meet specific company requirements: from client portal design to business logic and integrations.'
                },
                {
                    question: 'How secure is data storage?',
                    answer: 'Finexi complies with modern security standards, uses encryption and secure communication channels. All data is stored in accordance with legal requirements.'
                },
                {
                    question: 'How quickly can the system be implemented?',
                    answer: 'Implementation time depends on company scale and customization volume. Basic launch is possible within several weeks.'
                },
                {
                    question: 'Do you provide technical support?',
                    answer: 'Yes, we support clients at all stages: from implementation and staff training to 24/7 technical support.'
                },
                {
                    question: 'How is the cost of use calculated?',
                    answer: 'Cost depends on the selected tariff plan, number of users, and required modules. For accurate calculation, you can contact our sales department.'
                },
                {
                    question: 'Can I test the system before purchase?',
                    answer: 'Yes, we provide demo access so you can evaluate functionality and ease of use.'
                },
                {
                    question: 'Where is the company\'s cryptocurrency stored?',
                    answer: 'The company\'s virtual assets are stored in its wallet, and we have no access to manage them.'
                }
            ]
        },
        cta: {
            title: 'Ready to switch to automation?',
            subtitle: 'Optimize your exchange business with FinExi today',
            button: 'Order Free Demo'
        },
        footer: {
            description: 'Accounting and control for financial business',
            contacts: 'Contacts',
            documents: 'Documents',
            privacy: 'Privacy Policy',
            terms: 'Terms of Use',
            copyright: '© 2024 FinExi.io. All rights reserved.'
        },
        modal: {
            title: 'Request FinExi Demo',
            nameLabel: 'Name',
            emailLabel: 'Email',
            companyLabel: 'Company',
            phoneLabel: 'Phone',
            messageLabel: 'Message',
            messagePlaceholder: 'Tell us about your business and requirements...',
            submitBtn: 'Send Request',
            sending: 'Sending...',
            successMessage: 'Thank you! Your request has been sent. We will contact you shortly.',
            errorMessage: 'An error occurred while sending. Please try again or contact us directly.'
        }
    },
    uk: {
        nav: {
            features: 'Можливості',
            howItWorks: 'Як це працює',
            faq: 'FAQ',
            contact: 'Контакти',
            demo: 'Демо'
        },
        hero: {
            title: 'FinExi – Облік та контроль для <span class="gradient-text">фінансового бізнесу</span>',
            subtitle: 'Автоматизуйте обміни, дотримуйтесь KYC/AML, керуйте балансами та аналітикою в одній системі.',
            demoBtn: 'Запросити демо',
            learnMoreBtn: 'Дізнатися більше'
        },
        problems: {
            title: 'Проблеми криптообмінників',
            items: [
                {
                    title: 'Відсутність стандартизованої системи обліку',
                    desc: 'Розрізнені інструменти не дають повної картини бізнесу'
                },
                {
                    title: 'Ризики недотримання AML/KYC',
                    desc: 'Складнощі з регуляторними вимогами та перевірками'
                },
                {
                    title: 'Складності з контролем балансів та звітністю',
                    desc: 'Труднощі у відстеженні руху коштів'
                },
                {
                    title: 'Прозора прибутковість по операціях',
                    desc: 'Відсутність чіткої аналітики прибутковості'
                },
                {
                    title: 'Історія та статистика роботи з клієнтами',
                    desc: 'Немає централізованої бази даних клієнтів'
                }
            ]
        },
        solutions: {
            title: 'Рішення від FinExi',
            items: [
                {
                    title: 'Комплексна платформа для управління угодами',
                    desc: 'Всі операції в одному інтерфейсі'
                },
                {
                    title: 'База клієнтів та історія по них',
                    desc: 'Повна історія взаємодій з кожним клієнтом'
                },
                {
                    title: 'Інтеграція tronscan, sumsab (незабаром)',
                    desc: 'Автоматична синхронізація з зовнішніми сервісами'
                },
                {
                    title: 'Підтримка всіх типів обмінів',
                    desc: 'Фіат ↔ криптовалюта, криптовалюта ↔ криптовалюта, фіат ↔ фіат'
                },
                {
                    title: 'Єдиний робочий простір',
                    desc: 'Клієнт ↔ менеджер ↔ касир ↔ власник в одному місці'
                },
                {
                    title: 'Інтеграція з сайтом (незабаром)',
                    desc: 'Автоматичний прийом заявок з вашого сайту'
                }
            ]
        },
        features: {
            title: 'Можливості FinExi',
            subtitle: 'Повний набір інструментів для ефективного управління обмінним бізнесом',
            items: [
                {
                    title: 'Облік обміну',
                    desc: 'Фіат ↔ віртуальна, віртуальна ↔ віртуальна, фіат ↔ фіат'
                },
                {
                    title: 'KYC/AML',
                    desc: 'Ведення клієнтських досьє та дотримання регуляторних вимог'
                },
                {
                    title: 'Дашборди та аналітика',
                    desc: 'Детальна статистика та звіти по всіх операціях'
                },
                {
                    title: 'Облік залишків',
                    desc: 'Контроль рухів по касах та гаманцях в реальному часі'
                },
                {
                    title: 'Інтеграції',
                    desc: 'Підключення до зовнішніх сервісів та API'
                },
                {
                    title: 'Безпека',
                    desc: 'Захист даних та гнучке розмежування прав доступу'
                }
            ]
        },
        howItWorks: {
            title: 'Як почати роботу з FinExi',
            subtitle: 'Простий процес запуску за 3 кроки',
            steps: [
                {
                    title: 'Налаштування точок обміну',
                    desc: 'Конфігуруємо систему під ваші бізнес-процеси та вимоги'
                },
                {
                    title: 'Підключення кас',
                    desc: 'Інтегруємо всі ваші каси та гаманці в єдину систему'
                },
                {
                    title: 'Запуск та управління',
                    desc: 'Починаєте працювати з повним контролем над операціями'
                }
            ]
        },
        trust: {
            title: 'Довіра клієнтів',
            subtitle: 'Інтерфейс, якому довіряють професіонали',
            items: [
                {
                    title: 'Головна панель',
                    desc: 'Огляд всіх операцій'
                },
                {
                    title: 'Аналітика',
                    desc: 'Детальна статистика'
                },
                {
                    title: 'Управління клієнтами',
                    desc: 'База клієнтів та KYC'
                }
            ]
        },
        faq: {
            title: 'Часто задавані питання',
            items: [
                {
                    question: 'Для кого призначена платформа?',
                    answer: 'Наше рішення підходить для пунктів обміну валют, мікрофінансових організацій, банків та інших учасників фінансового ринку.'
                },
                {
                    question: 'Які процеси автоматизує система?',
                    answer: '• Прийом та обробку заявок клієнтів<br>• Скоринг та оцінку ризиків<br>• Управління договорами та платежами<br>• Ведення клієнтської бази (CRM)<br>• Звітність та аналітика'
                },
                {
                    question: 'Чи можна адаптувати ПЗ під конкретні бізнес-процеси?',
                    answer: 'Так, система гнучко налаштовується під вимоги конкретної компанії: від дизайну клієнтського кабінету до бізнес-логіки та інтеграцій.'
                },
                {
                    question: 'Наскільки безпечне зберігання даних?',
                    answer: 'Finexi відповідає сучасним стандартам безпеки, використовує шифрування та захищені канали зв\'язку. Всі дані зберігаються відповідно до вимог законодавства.'
                },
                {
                    question: 'Як швидко можна впровадити систему?',
                    answer: 'Термін впровадження залежить від масштабу компанії та обсягу кастомізацій. Базовий запуск можливий протягом кількох тижнів.'
                },
                {
                    question: 'Чи надаєте ви технічну підтримку?',
                    answer: 'Так, ми супроводжуємо клієнтів на всіх етапах: від впровадження та навчання співробітників до цілодобової технічної підтримки.'
                },
                {
                    question: 'Як розраховується вартість використання?',
                    answer: 'Вартість залежить від обраного тарифного плану, кількості користувачів та необхідних модулів. Для точного розрахунку ви можете зв\'язатися з нашим відділом продажів.'
                },
                {
                    question: 'Чи можна протестувати систему перед покупкою?',
                    answer: 'Так, ми надаємо демо-доступ, щоб ви могли оцінити функціонал та зручність роботи.'
                },
                {
                    question: 'Де зберігається криптовалюта компанії?',
                    answer: 'Віртуальні активи компанії зберігаються у неї на гаманці і ми не маємо жодного доступу для управління ними.'
                }
            ]
        },
        cta: {
            title: 'Готові перейти на автоматизацію?',
            subtitle: 'Оптимізуйте свій обмінний бізнес з FinExi вже сьогодні',
            button: 'Замовте безкоштовне демо'
        },
        footer: {
            description: 'Облік та контроль для фінансового бізнесу',
            contacts: 'Контакти',
            documents: 'Документи',
            privacy: 'Політика конфіденційності',
            terms: 'Умови використання',
            copyright: '© 2024 FinExi.io. Всі права захищені.'
        },
        modal: {
            title: 'Запросити демо FinExi',
            nameLabel: 'Ім\'я',
            emailLabel: 'Email',
            companyLabel: 'Компанія',
            phoneLabel: 'Телефон',
            messageLabel: 'Повідомлення',
            messagePlaceholder: 'Розкажіть про ваш бізнес та вимоги...',
            submitBtn: 'Відправити запит',
            sending: 'Відправка...',
            successMessage: 'Дякуємо! Ваш запит відправлено. Ми зв\'яжемося з вами найближчим часом.',
            errorMessage: 'Сталася помилка при відправці. Будь ласка, спробуйте ще раз або зв\'яжіться з нами напряму.'
        }
    },
    pl: {
        nav: {
            features: 'Funkcje',
            howItWorks: 'Jak to działa',
            faq: 'FAQ',
            contact: 'Kontakt',
            demo: 'Demo'
        },
        hero: {
            title: 'FinExi – Księgowość i kontrola dla <span class="gradient-text">biznesu finansowego</span>',
            subtitle: 'Zautomatyzuj wymiany, przestrzegaj KYC/AML, zarządzaj saldami i analityką w jednym systemie.',
            demoBtn: 'Poproś o demo',
            learnMoreBtn: 'Dowiedz się więcej'
        },
        problems: {
            title: 'Problemy giełd kryptowalut',
            items: [
                {
                    title: 'Brak standardowego systemu księgowego',
                    desc: 'Rozproszone narzędzia nie dają pełnego obrazu biznesu'
                },
                {
                    title: 'Ryzyko nieprzestrzegania AML/KYC',
                    desc: 'Trudności z wymogami regulacyjnymi i kontrolami'
                },
                {
                    title: 'Trudności z kontrolą sald i raportowaniem',
                    desc: 'Problemy ze śledzeniem przepływu środków'
                },
                {
                    title: 'Przejrzysta rentowność operacji',
                    desc: 'Brak jasnej analityki rentowności'
                },
                {
                    title: 'Historia i statystyki pracy z klientami',
                    desc: 'Brak scentralizowanej bazy danych klientów'
                }
            ]
        },
        solutions: {
            title: 'Rozwiązanie FinExi',
            items: [
                {
                    title: 'Kompleksowa platforma zarządzania transakcjami',
                    desc: 'Wszystkie operacje w jednym interfejsie'
                },
                {
                    title: 'Baza klientów i ich historia',
                    desc: 'Pełna historia interakcji z każdym klientem'
                },
                {
                    title: 'Integracja tronscan, sumsab (wkrótce)',
                    desc: 'Automatyczna synchronizacja z zewnętrznymi usługami'
                },
                {
                    title: 'Obsługa wszystkich typów wymian',
                    desc: 'Fiat ↔ krypto, krypto ↔ krypto, fiat ↔ fiat'
                },
                {
                    title: 'Ujednolicona przestrzeń robocza',
                    desc: 'Klient ↔ menedżer ↔ kasjer ↔ właściciel w jednym miejscu'
                },
                {
                    title: 'Integracja ze stroną (wkrótce)',
                    desc: 'Automatyczne przyjmowanie wniosków z Twojej strony'
                }
            ]
        },
        features: {
            title: 'Funkcje FinExi',
            subtitle: 'Kompletny zestaw narzędzi do efektywnego zarządzania biznesem wymiany',
            items: [
                {
                    title: 'Księgowość wymiany',
                    desc: 'Fiat ↔ wirtualne, wirtualne ↔ wirtualne, fiat ↔ fiat'
                },
                {
                    title: 'KYC/AML',
                    desc: 'Prowadzenie akt klientów i zgodność z przepisami'
                },
                {
                    title: 'Pulpity i analityka',
                    desc: 'Szczegółowe statystyki i raporty wszystkich operacji'
                },
                {
                    title: 'Śledzenie sald',
                    desc: 'Kontrola przepływów kas i portfeli w czasie rzeczywistym'
                },
                {
                    title: 'Integracje',
                    desc: 'Połączenie z zewnętrznymi usługami i API'
                },
                {
                    title: 'Bezpieczeństwo',
                    desc: 'Ochrona danych i elastyczne zarządzanie prawami dostępu'
                }
            ]
        },
        howItWorks: {
            title: 'Jak zacząć z FinExi',
            subtitle: 'Prosty proces uruchomienia w 3 krokach',
            steps: [
                {
                    title: 'Konfiguracja punktów wymiany',
                    desc: 'Konfigurujemy system pod Twoje procesy biznesowe i wymagania'
                },
                {
                    title: 'Podłączenie kas',
                    desc: 'Integrujemy wszystkie Twoje kasy i portfele w jeden system'
                },
                {
                    title: 'Uruchomienie i zarządzanie',
                    desc: 'Zaczynasz pracować z pełną kontrolą nad operacjami'
                }
            ]
        },
        trust: {
            title: 'Zaufanie klientów',
            subtitle: 'Interfejs, któremu ufają profesjonaliści',
            items: [
                {
                    title: 'Panel główny',
                    desc: 'Przegląd wszystkich operacji'
                },
                {
                    title: 'Analityka',
                    desc: 'Szczegółowe statystyki'
                },
                {
                    title: 'Zarządzanie klientami',
                    desc: 'Baza klientów i KYC'
                }
            ]
        },
        faq: {
            title: 'Często zadawane pytania',
            items: [
                {
                    question: 'Dla kogo przeznaczona jest platforma?',
                    answer: 'Nasze rozwiązanie nadaje się dla punktów wymiany walut, organizacji mikrofinansowych, banków i innych uczestników rynku finansowego.'
                },
                {
                    question: 'Jakie procesy automatyzuje system?',
                    answer: '• Przyjmowanie i przetwarzanie wniosków klientów<br>• Scoring i ocena ryzyka<br>• Zarządzanie umowami i płatnościami<br>• Prowadzenie bazy klientów (CRM)<br>• Raportowanie i analityka'
                },
                {
                    question: 'Czy można dostosować oprogramowanie do konkretnych procesów biznesowych?',
                    answer: 'Tak, system jest elastycznie konfigurowany pod wymagania konkretnej firmy: od projektu panelu klienta po logikę biznesową i integracje.'
                },
                {
                    question: 'Jak bezpieczne jest przechowywanie danych?',
                    answer: 'Finexi odpowiada nowoczesnym standardom bezpieczeństwa, używa szyfrowania i zabezpieczonych kanałów komunikacji. Wszystkie dane są przechowywane zgodnie z wymogami prawa.'
                },
                {
                    question: 'Jak szybko można wdrożyć system?',
                    answer: 'Czas wdrożenia zależy od skali firmy i zakresu dostosowań. Podstawowe uruchomienie jest możliwe w ciągu kilku tygodni.'
                },
                {
                    question: 'Czy zapewniacie wsparcie techniczne?',
                    answer: 'Tak, wspieramy klientów na wszystkich etapach: od wdrożenia i szkolenia pracowników po całodobowe wsparcie techniczne.'
                },
                {
                    question: 'Jak obliczana jest koszt użytkowania?',
                    answer: 'Koszt zależy od wybranego planu taryfowego, liczby użytkowników i potrzebnych modułów. Aby uzyskać dokładne wyliczenie, możesz skontaktować się z naszym działem sprzedaży.'
                },
                {
                    question: 'Czy można przetestować system przed zakupem?',
                    answer: 'Tak, zapewniamy dostęp do wersji demonstracyjnej, abyś mógł ocenić funkcjonalność i łatwość użytkowania.'
                },
                {
                    question: 'Gdzie przechowywana jest kryptowaluta firmy?',
                    answer: 'Aktywa wirtualne firmy są przechowywane w jej portfelu i nie mamy żadnego dostępu do zarządzania nimi.'
                }
            ]
        },
        cta: {
            title: 'Gotowy na automatyzację?',
            subtitle: 'Zoptymalizuj swój biznes wymiany z FinExi już dziś',
            button: 'Zamów bezpłatne demo'
        },
        footer: {
            description: 'Księgowość i kontrola dla biznesu finansowego',
            contacts: 'Kontakt',
            documents: 'Dokumenty',
            privacy: 'Polityka prywatności',
            terms: 'Warunki użytkowania',
            copyright: '© 2024 FinExi.io. Wszystkie prawa zastrzeżone.'
        },
        modal: {
            title: 'Poproś o demo FinExi',
            nameLabel: 'Imię',
            emailLabel: 'Email',
            companyLabel: 'Firma',
            phoneLabel: 'Telefon',
            messageLabel: 'Wiadomość',
            messagePlaceholder: 'Opowiedz nam o swoim biznesie i wymaganiach...',
            submitBtn: 'Wyślij zapytanie',
            sending: 'Wysyłanie...',
            successMessage: 'Dziękujemy! Twoje zapytanie zostało wysłane. Skontaktujemy się z Tobą wkrótce.',
            errorMessage: 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.'
        }
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'ru';

// Function to update page language
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(i18n[lang], key);
        if (translation) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });
    
    // Update document language attribute
    document.documentElement.lang = lang === 'uk' ? 'uk' : (lang === 'pl' ? 'pl' : (lang === 'en' ? 'en' : 'ru'));
}

// Helper function to get nested translation
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    updateLanguage(currentLang);
    
    // Language selector functionality
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            navbar.style.transform = 'translateY(0)';
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            // Scrolling down
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
            navbar.style.transform = 'translateY(-100%)';
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            // Scrolling up
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .step, .problem-item, .solution-item, .screenshot');
    animateElements.forEach(el => observer.observe(el));
    
    // Stats counter animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const statsSection = document.querySelector('.dashboard-content');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    function animateStats() {
        const statValues = document.querySelectorAll('.stat-value');
        statValues.forEach(stat => {
            const finalValue = stat.textContent;
            const isNumber = /\d/.test(finalValue);
            
            if (isNumber) {
                const number = finalValue.match(/[\d,]+/)[0].replace(/,/g, '');
                const suffix = finalValue.replace(/[\d,]+/, '');
                
                animateNumber(stat, 0, parseInt(number), suffix, 2000);
            }
        });
    }
    
    function animateNumber(element, start, end, suffix = '', duration = 2000) {
        const startTime = performance.now();
        
        function updateNumber(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentNumber = Math.floor(start + (end - start) * easeOut);
            
            element.textContent = formatNumber(currentNumber) + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        }
        
        requestAnimationFrame(updateNumber);
    }
    
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    // Form handling for demo requests
    const demoButtons = document.querySelectorAll('a[href="#demo"], a[href="#contact"]');
    
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create modal for demo request
            createDemoModal();
        });
    });
    
    function createDemoModal() {
        // Remove existing modal if any
        const existingModal = document.querySelector('.demo-modal');
        if (existingModal) {
            existingModal.remove();
        }
        
        const modal = document.createElement('div');
        modal.className = 'demo-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 data-i18n="modal.title">Запросить демо FinExi</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form class="demo-form">
                            <div class="form-group">
                                <label for="name" data-i18n="modal.nameLabel">Имя *</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email" data-i18n="modal.emailLabel">Email *</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="company" data-i18n="modal.companyLabel">Компания</label>
                                <input type="text" id="company" name="company">
                            </div>
                            <div class="form-group">
                                <label for="phone" data-i18n="modal.phoneLabel">Телефон</label>
                                <input type="tel" id="phone" name="phone">
                            </div>
                            <div class="form-group">
                                <label for="message" data-i18n="modal.messageLabel">Сообщение</label>
                                <textarea id="message" name="message" rows="4" data-i18n="modal.messagePlaceholder" placeholder="Расскажите о вашем бизнесе и требованиях..."></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary btn-lg">
                                <i class="fas fa-paper-plane"></i>
                                <span data-i18n="modal.submitBtn">Отправить запрос</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Update modal language
        modal.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = getNestedTranslation(i18n[currentLang], key);
            if (translation) {
                if (element.tagName === 'TEXTAREA' && key === 'modal.messagePlaceholder') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });
        
        // Add modal styles
        const modalStyles = `
            .demo-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .demo-modal.show {
                opacity: 1;
            }
            
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            
            .modal-content {
                background: white;
                border-radius: 12px;
                max-width: 500px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem 2rem;
                border-bottom: 1px solid #f3f4f6;
            }
            
            .modal-header h3 {
                margin: 0;
                color: var(--dark-color);
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--gray-medium);
                transition: color 0.3s ease;
            }
            
            .modal-close:hover {
                color: var(--dark-color);
            }
            
            .modal-body {
                padding: 2rem;
            }
            
            .form-group {
                margin-bottom: 1.5rem;
            }
            
            .form-group label {
                display: block;
                margin-bottom: 0.5rem;
                font-weight: 500;
                color: var(--dark-color);
            }
            
            .form-group input,
            .form-group textarea {
                width: 100%;
                padding: 0.75rem;
                border: 2px solid #e5e7eb;
                border-radius: 8px;
                font-size: 1rem;
                transition: border-color 0.3s ease;
            }
            
            .form-group input:focus,
            .form-group textarea:focus {
                outline: none;
                border-color: var(--primary-color);
            }
            
            .demo-form .btn {
                width: 100%;
                justify-content: center;
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = modalStyles;
        document.head.appendChild(styleSheet);
        
        // Show modal with animation
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        
        // Close modal events
        const closeBtn = modal.querySelector('.modal-close');
        const overlay = modal.querySelector('.modal-overlay');
        
        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeModal();
            }
        });
        
        // Close modal on Escape key
        const handleEscape = function(e) {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
        
        // Form submission
        const form = modal.querySelector('.demo-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = form.querySelector('.btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${i18n[currentLang].modal.sending}`;
            submitBtn.disabled = true;
            
            // Prepare simple Slack message
            const messageText = `🚀 Новый запрос демо FinExi!
            
Имя: ${data.name || 'Не указано'}
Email: ${data.email || 'Не указано'}
Компания: ${data.company || 'Не указано'}
Телефон: ${data.phone || 'Не указано'}
${data.message ? `\nСообщение: ${data.message}` : ''}

Время: ${new Date().toLocaleString('ru-RU')}`;

            const slackMessage = {
                text: messageText
            };
            
            // Log the message being sent
            console.log('Sending message to Slack:', slackMessage);
            
            // Use webhook URL from config file
            const webhookUrl = SLACK_WEBHOOK_URL;
            
            // Send to Slack webhook
            fetch(webhookUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(slackMessage)
            })
            .then(response => {
                console.log('Slack response:', response);
                
                // With no-cors mode, we can't read the response
                // But if we get here without error, assume success
                alert(i18n[currentLang].modal.successMessage);
                closeModal();
            })
            .catch(error => {
                console.error('Detailed error:', error);
                console.error('Error message:', error.message);
                
                // Restore button state
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Show more detailed error message
                alert(`${i18n[currentLang].modal.errorMessage}: ${error.message}`);
            });
        });
        
        function closeModal() {
            modal.classList.remove('show');
            // Restore body scroll immediately when closing
            document.body.style.overflow = '';
            // Remove escape key listener
            document.removeEventListener('keydown', handleEscape);
            setTimeout(() => {
                modal.remove();
                styleSheet.remove();
            }, 300);
        }
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }
    
    // Parallax effect for hero background elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-element');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.1 + (index * 0.05);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.opacity = '1';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }
    
    // Add loading effect to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 2000);
            }
        });
    });
});

// Add CSS for button loading effect
const buttonLoadingStyles = `
    .btn.loading {
        pointer-events: none;
        opacity: 0.7;
    }
    
    .btn.loading::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        margin: auto;
        border: 2px solid transparent;
        border-top-color: currentColor;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const loadingStyleSheet = document.createElement('style');
loadingStyleSheet.textContent = buttonLoadingStyles;
document.head.appendChild(loadingStyleSheet);

