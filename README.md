# PoC MicroFrontEnd

In the root folder just run

`npm run dev`

Or deep dive into the folders and for each use the same command.

## Current MFE

- Container [`React`]
- Products [`React`]

## Luca Mezzalira's Decision Framework

- Definition: _how will the application be divided?_
  - **Horizontal division**
  - Vertical division
- Composition: _where will the composition of the micro-frontends take place?_
  - **Client Side Composition** + **app shell**
  - Server Side Composition
  - Edge Side Composition
- Routing: _who will do the routing?_
  - **Client Side Composition** (container's react-router)
  - Server Side Composition
  - Edge Side Composition
- Communication: _if I need to make micro-frontends communicate, how will this communication take place?_
  - Injection of the communication bus by the shell app
  - Using the URLs
  - Storages (localStorage, sessionStorage, cookies, etc.)
  - Web Workers
  - Props and callbacks
  - **Custom Events**

---

## Todo

1. Expose microfrontend via web-component.
1. Implement production webpack configurations.
1. Add a `Vue`-based microfrontend.
1. Update webpack configurations to manage css, upload, etc.

## Citazioni

> Qualsiasi organizzazione che progetta un sistema produrrà inevitabilmente un progetto la cui struttura è una copia della struttura della comunicazione dell’organizzazione. - Melvin Conway

## Appunti

- Single Responsability Principle — SRP
