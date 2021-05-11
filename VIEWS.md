# Dashboard - MUI ALMOST DONE

 - '/' (address correct)
    - statystyki dzisiejszych zamowień (zdalne i lokalne) (not yet ready)
    - lista rezerwacji i eventów na dzisiaj (checked)

# Logowanie - MUI DONE

- '/login' (address correct)
    - pola na login i hasło (checked)
    - guzik do zalogowania (link do dashboardu) (checked&checked)

# Widok dostępności stolików - MUI ALMOST DONE 

- '/tables' (address correct)
    - wybór daty i godziny (still to implement)
    - tabela z listą rezerwacji oraz wydarzeń (checked)
        - każda kolumna = 1 stolik (checked)
        - każdy wiersz = 30  (checked)
        - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki (hmm?!)
        - po kliklnięciu rezerwacji lub eventu przechodzimy na stronę szczegółów (checked)

- '/tables/booking/:id'
    - zawiera wszystkie informacje dotyczące rezerwacji 
    - umożliwia edycję i zapisanie zmian

- '/tables/booking/new'
    - analogicznie do powyżej, bez początkowych informacji 

- '/tables/events/:id'
    - analogicznie do powyżej, dla eventów

- '/tables/events/new'
    - analogicznie do powyżej, dla eventów, bez początkowych informacji


# Widok kelnera - MUI DONE (visual aspect needs refurbishing)

- '/waiter' (address correct)
    - tabela
        - w wierszach stoliki (checked)
        - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności) (checked)
        - dostępne akcje dla danego stolika (checked)

- '/waiter/order/new' (address correct) - this view in the making.
    - numer stolika (edytowalny) (checked)
    - menu produktów dostępnych w restauracji (checked)
    - opcje wybranego produktu (kinda checked)
    - zamówienie (zamówione produkty z opcjami i ceną) (kinda checked)
    - kwotę zamówienia (not yet working, but is thr)

- '/waiter/order/:id' (address correct)
    - jak powyższa (checked)

# Widok kuchni - MUI DONE

- '/kitchen' (address correct)
    - wyświetla widok zamówień w kolejności ich tworzenia (checked)
    - lista musi zawierać:
        - numer stolika (lub zamówienia zdalnego) (checked)
        - pełne informacje dotyczące zamówionych dań (checked)
    - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane (checked)


