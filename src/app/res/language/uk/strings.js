export default {
    statement: {
        __index: "виписка",
        load_more: "загрузити ще",
        no_operations_for_last_week: "ви не користувались цим рахунком протягом останніх семи днів",
        warning: "попередження",
        requests_throttling: `Цей акаунт прив'язано використовуючи персональний токен. 
        Через те, що monobank обмежує частоту надання доступу до виписки, дані завантажуватимуться повільно. 
        Рекомендовано підключення рахунку з використанням спрощеної авторизації.`,
        hint_customize: "Не те, що очікували?",
        hint_customize_text: "Керуйте порядком карток та їх зовнішнім виглядом у меню \"Мої картки\"",
        open: "відкрити",
    },
    customization: {
        open: "мої картки",
        card: "картка",
        bank: "банк",
        look: "тип картки",
        cardholder: "носій",
        currency: "валюта",
        looks: {
            black: "чорна",
            grey: "сіра",
            pink: "рожева",
            white: "біла",
            iron: "залізна",
            yellow: "жовта",
        },
        warning: "Через обмеження monobank API застосунок не може визначити тип вашої картки. Тим не менш, ви можете задати її власноруч",
    },
    menu: "меню",
    auth: {
        __index: "Авторизація",
        you_were_unlogined: "вас було деавторизовано",
        reload: "перегрузити",
        login_params_changed: "параметри входу було змінено. Оберіть \"Налаштування\", якщо бажаєте повернути їх до початкового стану",
        login_promo: "увійдіть, щоб використовувати всі можливості mono PWA",
        log_in: "увійти",
        skip_step: "минути крок",
        unknown_auth_method: "невідомий метод входу",
        success: "успіх",
        fail: "Не вдалось підтвердити достовірність даних",
        login_data_fetch_fail: "Не вдалось отримати дані для входу",
        settings: {
            __index: "налаштування",
            token: {
                __index: "Використовувати власний токен",
                description: "Застосунок надсилатиме запити до monobank напряму. Ви можете отримати токен на порталі api.monobank.ua",
                title: "Власний токен",

                token: "токен",
            },
            domain: {
                __index: "Змінити корпоративний сервер",
                description: "Якщо ви не довіряєте серверу, на який надсилаються запити при спрощеній авторизації, ви можете змінити його",
                title: "Змінити сервер",

                unsupported_server: "несумісний сервер",
                url: "адреса",

                proto_detected: "виявлено сервер",
                name: "назва",
                author: "автор",
                proto_ver: "версія протокола",
                visit_homepage: "домашня сторінка",
                server_message: "повідомлення від",
                see_link: "відкрити посилання",
            },
            revert: {
                __index: "Продовжити як зазвичай",
                description: "Відмовитись від розширеного налаштування авторизації та повернутись до вмовчань",
            },
        },
        stage: {
            link: "посилання",
            opening: "відкриваємо monobank...",
            copied: "Посилання скопійовано до буферу обміну, надалі керуйтесь нижче зазначеними кроками",
            auto_link: "Вхід має відбутись автоматично. Якщо ж цього не сталося, керуйтесь нижче зазначеними кроками",
            open: "відкрити",
            qr: "QR",
            cancel: "скасувати",
            authed: "авторизовано",
            error: "виникла помилка",
            timeout: "час вичерпано",
            instructions: {
                scan: {
                    __index: "Зіскануйте QR код",
                    description: "Використовуючи будь-який засіб для сканування QR кодів на пристрої з встановленим monobank (наприклад, Google Lens)",
                },
                follow: {
                    __index: "Перейдіть за посиланням",
                    description: "Відкрийте посилання, або ж скопіюйте URL адресу у браузер на вашому мобільному пристрої",
                },
                permissions: {
                    __index: "Надайте доступ",
                    description: "Підтвердіть у вікні застосунку monobank доступ до деяких даних",
                },
            },
        },
    },
    p4: {
        __index: "покупка частинами",
        partners: "партнери",
        fetch_fail: "помилка отримання списку партнерів",
        try_later: "спробуйте пізніше",
        retry: "повторити",
        cached_title: "дані можуть бути неактуальними",
        cache_for: "це збережена копія станом на",
        online: "замовлення онлайн",
        delivery: "з доставкою",
        delivery_exp: "цей індикатор означає, що при покупці частинами партнер надає можливість оформити замовлення онлайн з доставкою",
        online_exp: "цей індикатор означає, що при покупці частинами партнер надає можливість оформити замовлення онлайн, але потрібно відвідувати магазин",
        categories: "категорії",
        category: "категорія",
        choose_category: "оберіть категорію",
        all: "усі",
        no_data: "нема даних для показу",
    },
    currency: {
        __index: "курси валют",
        one: "валюта",
        numbers: "курс",
        buy: "купівля",
        sell: "продаж",
        refresh: "оновити",
        payment_systems: "курси платіжних систем",
        result: "результат",
        amount: "кількість",
        convert: "конвертер валют",
        refreshing: "оновлення...",
        refreshed: "оновлено",
        error_refresh: "помилка оновлення",
        cached_title: "дані можуть бути неактуальними",
        cache_for: "це збережена копія станом на",
        fetch_fail: "помилка одержання курсу валют",
        try_later: "спробуйте пізніше",
        rerty: "повторити",
    },
    recovery_mode: {
        __index: "Аварійний режим",
        enter: "перезавантажте застосунок для входу у Аварійний режим",
        now: "Аварійний режим активний",
        back_to_normal: "Перезавантажте застосунок без спеціального хешу, щоб покинути його",
        idb_fail: {
            warning: "увага",
            description: "у mono PWA виникли труднощі при спробі використання сховища браузера. Використовуйте Google Chrome або Mozilla Firefox",
            dl_chrome: "завантажити Chrome",
            dl_ff: "завантажити Firefox",
        },
    },
    units: {
        min: {
            type: "func",
            name: "plural",
            data: ["хвилина", "хвилини", "хвилин"],
        },
    },
    dateformats: {
        week: {
            __index: "тиждень",
            days: {
                __index: "дні тижня",
                7: "неділя",
                1: "понеділок",
                2: "вівторок",
                3: "середа",
                4: "четвер",
                5: "п'ятниця",
                6: "субота",
            },
        },
        relative: {
            today: "сьогодні",
            yesterday: "вчора",
            tomorrow: "завтра",
        },

        month: {
            __index: "місяць",
            1: "січень",
            2: "лютий",
            3: "березень",
            4: "квітень",
            5: "травень",
            6: "червень",
            7: "липень",
            8: "серпень",
            9: "вересень",
            10: "жовтень",
            11: "листопад",
            12: "грудень",
            months: {
                __index: "місяця",
                1: "січня",
                2: "лютого",
                3: "березня",
                4: "квітня",
                5: "травня",
                6: "червня",
                7: "липня",
                8: "серпня",
                9: "вересня",
                10: "жовтня",
                11: "листопада",
                12: "грудня",
            },
        },
        at: "о",
    },
    settings: {
        __index: "налаштування",
        locked_item: "Підказка: Ви не можете вносити тут зміни",
        restart_to_apply: "перезавантажте для застосування змін",
        errors: {
            no_page: "такої сторінки налаштувань нема",
            layout_failed: "схоже, у нас не вийшло завантажити Налаштування",
        },
        auth: {
            __index: "авторизація",
            log_in: "увійти",
            not_logined_title: "ви не увійшли в акаунт",
            not_logined_text: "увійдіть, щоб використовувати всі функції",
            personal_token: "персональний токен",
            monobank_account: "акаунт monobank",
            add_account: "додати акаунт",
        },
        actions: {
            open_about: "про програму",
            go_main: "на головну",
            restart: "перезавантажити",
        },
        general: {
            __index: "загальні",
            information: "інформація",
        },
        language: "мова",
        storage: {
            __index: "сховище",
            used: "використано",
            of: "з",
            calculating: "розрахунок",
            cleanup_planned: "наступного запуску буде виконано очищення",
            over_quota: "сховище перевищило ліміт, але не підтримує автоматичне очищення",
            dbs: {
                logs: {
                    __index: "звіти",
                    description: "основна інформація про роботу програми для налагодження",
                },
                offline_cache: {
                    __index: "автономні дані",
                    description: "збережена інформація, отримана з Інтернету, для роботи з нею без підключення до мережі",
                },
                accounts: {
                    __index: "акаунти",
                    description: "ваші авторизовані профілі monobank",
                },
                statement_cache: {
                    __index: "виписка",
                    description: "збережена копія виписок з ваших акаунтів",
                },
            },
            actions: {
                clear: "очистити",
                export: "експорт",
                import: "імпорт",
                log_out: {
                    __index: "вийти",
                    you_will_log_out: "продовжуючи, ви вийдете з усіх акаунтів",
                },
            },
        },
        updates: {
            __index: "оновлення",
            ready: "оновлення вже тут",
            tell_more: "більше",
            later: "пізніше",
            restart_now: "застосувати зараз",
            new_update: "нова версія готова до встановлення",
        },

        tf: {
            __index: "трансформатори",
            tf_instances: "екземпляри",
            unlocked: "розблоковано",
            locked: "заблоковано",
            tf_methods: "методи",
        },
    },
    about: {
        __index: "про",
        app: "про програму",
        version: "версія",
        build_date: "дата збирання",
        branch: "гілка",
        debug: "зневаджування",
        disclaimer_title: "дисклеймер",
        disclaimer: `mono PWA не є офіційним додатком і не стосується monobank будь-яким чином.
Додаток використовує загальнодоступне API і не передає дані про використання на зберігання будь-кому.
Якщо ви проти передачі своїх особистих даних для підтримки роботи сервісу, ви повинні відмовитися від сервісу спрощеної авторизації.
Ви завжди в праві використовувати авторизацію за допомогою персонального токена, щоб дані передавалися
безпосередньо в monobank. Ви берете на себе відповідальність за будь-які вихідні запити від імені цієї програми, зроблені
вами свідомо.
Застосунок збирає деякі деперсоніфіковані дані, такі як кількість прив'язаних акаунтів, наявність придбаної валюти, 
найчастіша категорія транзакції, тощо, через сервіс Google Analytics. Ваші ім'я, прізвище, унікальні ідентифікатори 
та інші чутливі дані не підлягають передачі будь-кому. Усі дані, що передаються, використовуються розробником виключно 
з метою аналізу аудиторії, покращуючи у такий спосіб досвід використання програми. Ви завжди можете відмовитись від збирання 
даних у меню "Експерименти" (/flags) або включивши функцію "Do Not Track" у налаштуваннях браузера. 
Ви завжди в праві звернутися за сирцевим кодом програми за адресою me@sominemo.com,
змінювати, публікувати, виконувати код в будь-якій формі, при цьому відповідальність за вміст вже буде саме на вас.`,
    },
    experiments: {
        __index: "експерименти",
        miscellaneous: "різне",
        warning: "попередження",
        harmful_actions: `ці опції експериментальні і деякі з них можуть викликати проблеми, порушувати стабільність програми або зовсім перешкоджати її роботі.
        Після застосування змін варто перезавантажити застосунок.`,
        reload_page: "перезавантажити",
        reset_flags: "скинути",
        list: "список",
        no_exps_placeholder: "зараз тестувати нічого",
    },
    unexpected_error: "ой!",
    select_option: "оберіть зі списку",
    tap_to_change: "натисніть, щоб змінити",
    done: "готово",
    select_file: "оберіть файл",
    success: "успіх",
    failure: "невдача",
    dev_warn: "ця функція знаходиться у стані розробки",
    preview_warn: "ця функція зараз тестується та може працювати неправильно",
    close: "закрити",
    next: "далі",
    accept: "приняти",
    continue: "далі",
    search: "пошук",
    offline_mode: "автономний режим",
    quick_settings: "опції",
    show_minor_part: "показувати копійки",
}
