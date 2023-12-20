## HTML-Struktur
Das HTML-Dokument repräsentiert die Benutzeroberfläche eines Javascript ChatGPT-Klons. Es besteht aus den folgenden Abschnitten:
### Meta-Daten
- `<!DOCTYPE html>`: Deklaration für HTML5-Konformität.
- `<html lang="en">`: Starttag für das HTML-Dokument mit der Sprachangabe Englisch.
- `<head>`: Bereich für Metadaten, wie Zeichencodierung und Seitentitel.
  - `<meta charset="UTF-8">`: Zeichencodierung auf UTF-8.
  - `<title>Javascript ChatGPT-Klon</title>`: Seitentitel.
  - `<link rel="stylesheet" href="style.css">`: Verlinkung auf die externe CSS-Datei "style.css".
### Body-Bereich
- `<body onload="getDatabaseTitle()">`: Der Body-Bereich mit einem Laden-Event, das die Funktion `getDatabaseTitle()` aufruft.
### Side-Bar
- `<section class="side-bar">`: Seitenleiste mit den folgenden Elementen:
  - `<button>New chat</button>`: Schaltfläche zum Starten eines neuen Chats.
  - `<div class="history"></div>`: Container für die Chat-Verlaufseinträge.
  - `<nav>`: Navigationsbereich.
    - `<p>Made by me</p>`: Ein Abschnitt mit dem Vermerk "Made by me".
### Main-Bereich
- `<section class="main">`: Hauptbereich mit den folgenden Elementen:
  - `<h1>MeGPT</h1>`: Überschrift "MeGPT".
  - `<p id="output"></p>`: Platz für die Ausgabe der Chatnachrichten.
  - `<div class="bottom-section">`: Unterbereich.
    - `<div class="input-container">`: Container für die Eingabe mit:
      - `<input/>`: Eingabefeld für Nachrichten.
      - `<div id="submit">➢</div>`: Einreichungsschaltfläche mit einem Pfeilsymbol.
  - `<p class="info">`: Informationstext mit Details zur ChatGPT-Version und einem Feedbackaufruf.
### Skript
- `<script src="app.js"></script>`: Verlinkung auf die externe JavaScript-Datei "app.js", die die Logik für die Interaktion mit dem ChatGPT-Klon enthält.
 
# HTML-Dokumentation für Spring REST Client Example
## HTML-Struktur
Das HTML-Dokument repräsentiert eine einfache Webanwendung für das Hinzufügen und Abrufen von Personen-Daten über eine REST-Schnittstelle. Es besteht aus den folgenden Abschnitten:

### Meta-Daten

- `<!DOCTYPE html>`: Deklaration für HTML5-Konformität.
- `<html lang="de">`: Starttag für das HTML-Dokument mit der Sprachangabe Deutsch.
- `<head>`: Bereich für Metadaten, wie Zeichencodierung, Ansichtseinstellungen und Seitentitel.
  - `<meta charset="UTF-8">`: Zeichencodierung auf UTF-8.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Einstellung der Ansichtsgröße und Zoom für Mobilgeräte.
  - `<title>Spring REST Client Example</title>`: Seitentitel.
### Body-Bereich
- `<body>`: Der Hauptteil des HTML-Dokuments.
### Überschriften
- `<h1>Personen-Daten</h1>`: Hauptüberschrift.
- `<h2>Daten hinzufügen:</h2>`: Unterüberschrift für den Abschnitt zum Hinzufügen von Daten.
### Formular zum Hinzufügen von Daten
- `<form id="addForm">`: Ein Formular mit den folgenden Eingabefeldern:
  - Vorname: `<input type="text" id="firstName" required>`
  - Nachname: `<input type="text" id="lastName" required>`
  - `<input type="submit" value="Hinzufügen">`: Einreichungsschaltfläche für das Hinzufügen von Daten.
### Daten abrufen
- `<h2>Daten abrufen:</h2>`: Unterüberschrift für den Abschnitt zum Abrufen von Daten.
- `<button onclick="fetchData()">Daten abrufen</button>`: Schaltfläche zum Auslösen der Datenabruffunktion.
### Liste für die angezeigten Daten
- `<ul id="dataList"></ul>`: Ungeordnete Liste für die Anzeige der abgerufenen Daten.
### Skript
- `<script>`: Bereich für JavaScript-Code, der die Logik für das Hinzufügen und Abrufen von Daten implementiert.
  - Event-Listener für das Hinzufügen von Daten.
  - Funktion zum Abrufen von Daten und Anzeigen in der Liste. 
# CSS-Dokumentation für Styling
## Import von Schriftarten
- `@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Raleway:wght@300&display=swap');`: Import von Schriftarten "Bungee Spice" und "Raleway" von Google Fonts.
## Globale Stile
- `*`: Selektor für alle Elemente.
  - `color: #fff;`: Textfarbe in Weiß.
  - `font-family: 'Bungee+Spice', sans-serif;`: Verwendung der importierten Schriftart "Bungee Spice" und fallback auf generische Sans-Serif-Schrift.
## Body-Stil
- `body`: Selektor für den Body-Tag.
  - `margin: 0; padding: 0;`: Null Rand und Padding.
  - `background-color: #343541;`: Hintergrundfarbe Dunkelgrau.
  - `display: flex;`: Verwendung von Flexbox.
## Überschrift 1 (H1)
- `h1`: Selektor für H1-Elemente.
  - `font-size: 33px; font-weight: 300;`: Schriftgröße und Gewicht.
  - `padding: 200px 0;`: Oberer und unterer Innenabstand.
## Seitenleistenstil
- `.side-bar`: Selektor für Elemente mit der Klasse "side-bar".
  - `background-color: #202123;`: Hintergrundfarbe Dunkelgrau.
  - `width: 244px; height: 100vh;`: Breite und volle Höhe.
  - `display: flex; flex-direction: column; justify-content: space-between;`: Flexbox-Stile.
## Hauptbereichsstil

- `.main`: Selektor für Elemente mit der Klasse "main".
  - `display: flex; flex-direction: column; align-items: center; text-align: center; justify-content: space-between;`: Flexbox-Stile.
  - `height: 100vh; width: 100%;`: Volle Höhe und Breite.
## Unterbereichsstil
- `.bottom-section`: Selektor für Elemente mit der Klasse "bottom-section".
  - `width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;`: Flexbox-Stile.
## Info-Stil
- `.info`: Selektor für Elemente mit der Klasse "info".
  - `color: rgba(255,255,255,0.5); font-size: 11px; padding: 10px;`: Textfarbe, Schriftgröße und Innenabstand.
## Eingabefeldstil
- `input`: Selektor für alle Eingabefelder.
  - Stil für Hintergrundfarbe, Rand, Schriftgröße, Polsterung und Box-Schatten.
- `input:focus`: Stil für den Fokus-Zustand des Eingabefelds.
## Container für Eingabefeld und Schaltfläche
- `.input-container`: Selektor für den Container des Eingabefelds.
  - Stil für Positionierung und maximale Breite.
- `.input-container #submit`: Selektor für die Schaltfläche innerhalb des Containers.
## Schaltflächenstil
- `button`: Selektor für alle Schaltflächen.
  - Stil für Rand, Hintergrundfarbe, Randradius, Polsterung und Marge.
## Navigationsstil
- `nav`: Selektor für das Navigations-Element.
  - Stil für Rand, Polsterung und Marge.
## Verlaufsstil
- `.history`: Selektor für Elemente mit der Klasse "history".
  - Stil für Polsterung, Rand, Flexbox und Höhe.
## Verlaufseintragsstil
- `.history p`: Selektor für alle `<p>`-Elemente innerhalb des Verlaufs.
  - Stil für den Cursor.
