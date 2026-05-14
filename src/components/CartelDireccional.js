class CartelDireccional extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: Arial, Helvetica, sans-serif;

          /* Variables CSS */
          --cartel-bg: #1e73be;
          --cartel-text-color: white;
          --cartel-footer-bg: #d0d0d0;
          --cartel-footer-text: #1e73be;
          --cartel-radius: 4px;
        }

        .cartel {
          width: min(320px, calc(100vw - 32px));
          background-color: var(--cartel-bg);
          border-radius: var(--cartel-radius);
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          color: var(--cartel-text-color);
          position: relative;
        }

        .cartel__lista {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .cartel__lista li,
        .doble-linea {
          padding: 18px;
          border-bottom: 2px solid white;
          font-size: 17px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .doble-linea-texto {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .doble-linea-texto div:first-child {
          font-weight: bold;
          margin-bottom: 4px;
        }

        .flecha {
          font-weight: bold;
          font-size: 20px;
          color: var(--cartel-text-color);
        }

        .pie-ucr {
          width: 100%;
          height: 30px;
          background: var(--cartel-footer-bg);
          display: flex;
          justify-content: center;
          align-items: center;
          border-top-left-radius: 50% 15px;
          border-top-right-radius: 50% 15px;
        }

        .pie-ucr span {
          color: var(--cartel-footer-text);
          font-weight: bold;
          font-size: 24px;
          letter-spacing: 2px;
        }
      </style>

      <main
        class="cartel"
        part="cartel"
        aria-label="Cartel direccional UCR"
      >

        <ul class="cartel__lista" part="lista">

          <li>
            Aulas 5, 6 y 7
            <span class="flecha">&rarr;</span>
          </li>

          <li>
            Apoyo Inform&aacute;tico
            <span class="flecha">&rarr;</span>
          </li>

          <li>
            Servidores
            <span class="flecha">&rarr;</span>
          </li>

          <li>
            Laboratorio 1 y 2
            <span class="flecha">&rarr;</span>
          </li>

          <li class="doble-linea">
            <div class="doble-linea-texto">
              <div>Coordinaci&oacute;n</div>
              <div>Inform&aacute;tica Empresarial</div>
            </div>

            <span class="flecha">&rarr;</span>
          </li>

          <!-- Slot agregado sin romper diseño -->

          <slot name="extra-item"></slot>

        </ul>

        <div class="pie-ucr" part="footer">
          <span part="footer-text">UCR</span>
        </div>

      </main>
    `;
  }
}

customElements.define("cartel-direccional", CartelDireccional);