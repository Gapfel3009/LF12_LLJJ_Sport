# Sportapplikation

## Voraussetzungen

Um die Applikation starten zu können, benötigen Sie folgende Komponenten:

### Backend

- [JDK 21](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)
- [Docker](https://www.docker.com/)

### Frontend (Angular)

- [Node.js v22](https://nodejs.org/)

---

## Projektstruktur

Nach dem Klonen des Repositories finden Sie zwei Ordner:

- `Sportapplikation` – enthält das **Backend**
- `Sportapplikation-Frontend` – enthält das **Frontend**

---

## Projekt Starten Frontend

Starten sie ihre Frontend IDE und Öffnen sie das Geklonte Projekt
führen sie darauf hin folgende befehle im terminal aus
```bash
cd sportapplikation-frontend 
```

Darauf hin müssen sie alle node Packete runter geladen werden 
```bash
npm install
```

Zu guter letzt können sie so das Projekt starten 
```bash
npm start 
```

---

## Projekt Star Backend 

Öffnen sie den Ordner SportApplicaton in einer für Java geiegneten IDE und führen sie im Terminal folgende Befehle Aus
```bash
 cd Docker
```
```Docker
Docker compose up --build
```
Darauf hin wird docker initzialisiert und das Projekt ist Start bereit 
