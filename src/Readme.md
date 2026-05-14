# Lab 10 - Web Components Personalizables

## Descripción

Este laboratorio utiliza Web Components aplicando:

- Shadow DOM
- CSS Variables
- Slots
- CSS Parts

Los componentes creados son:

- `ucr-sign`
- `cartel-direccional`

---

# Shadow DOM

Los componentes utilizan Shadow DOM para encapsular estilos y estructura interna.

Ejemplo:

```javascript
this.attachShadow({ mode: "open" });
```

---

# CSS Variables

Los componentes permiten personalizar colores y estilos usando variables CSS.

## Ejemplo

```html
<ucr-sign
  style="
    --poster-radius:20px;
    --headline-primary:red;
    --message-color:blue;
  "
></ucr-sign>
```

## Variables disponibles en `ucr-sign`

- `--poster-color-1`
- `--poster-color-2`
- `--poster-color-3`
- `--poster-radius`
- `--headline-primary`
- `--headline-secondary`
- `--message-color`

## Variables disponibles en `cartel-direccional`

- `--cartel-bg`
- `--cartel-text-color`
- `--cartel-footer-bg`
- `--cartel-footer-text`
- `--cartel-radius`

---

# Slots

Los componentes permiten reemplazar contenido interno usando slots.

## Ejemplo en `ucr-sign`

```html
<ucr-sign>
  <span slot="mensaje">
    Mensaje personalizado
  </span>
</ucr-sign>
```

## Ejemplo en `cartel-direccional`

```html
<cartel-direccional>
  <li slot="items">
    Biblioteca →
  </li>
</cartel-direccional>
```

---

# CSS Parts

Los componentes exponen partes internas usando `part`.

## Ejemplo

```css
ucr-sign::part(message) {
  color: red;
  font-size: 22px;
}
```

## Parts disponibles

### `ucr-sign`

- `poster`
- `headline`
- `message`
- `qr-zone`
- `logos`

### `cartel-direccional`

- `cartel`
- `lista`
- `footer`
- `footer-text`

---

# Ejecución

ver en github pages: 