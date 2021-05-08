# Dashboard

 - '/'
    - statystyki dzisiejszych zamowień (zdalne i lokalne)
    - lista rezerwacji i eventów na dzisiaj

# Logowanie

- '/login'
    - pola na login i hasło 
    - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- '/tables'
    - wybór daty i godziny
    - tabela z listą rezerwacji oraz wydarzeń
        - każda kolumna = 1 stolik
        - każdy wiersz = 30 minut
        - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki 
        - po kliklnięciu rezerwacji lub eventu przechodzimy na stronę szczegółów

- '/tables/booking/:id'
    - zawiera wszystkie informacje dotyczące rezerwacji 
    - umożliwia edycję i zapisanie zmian

- '/tables/booking/new'
    - analogicznie do powyżej, bez początkowych informacji 

- '/tables/events/:id'
    - analogicznie do powyżej, dla eventów

- '/tables/events/new'
    - analogicznie do powyżej, dla eventów, bez początkowych informacji


# Widok kelnera

- '/waiter'
    - tabela
        - w wierszach stoliki
        - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
        - dostępne akcje dla danego stolika

- '/waiter/order/new'
    - numer stolika (edytowalny)
    - menu produktów dostępnych w restauracji
    - opcje wybranego produktu
    - zamówienie (zamówione produkty z opcjami i ceną)
    - kwotę zamówienia

- '/waiter/order/:id'
    - jak powyższa

# Widok kuchni

- '/kitchen'
    - wyświetla widok zamówień w kolejności ich tworzenia
    - lista musi zawierać:
        - numer stolika (lub zamówienia zdalnego) 
        - pełne informacje dotyczące zamówionych dań
    - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane


