class UcrSign extends HTMLElement {
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
          --poster-color-1: #d18d32;
          --poster-color-2: #c9822c;
          --poster-color-3: #b9702b;

          --poster-radius: 8px;

          --headline-primary: #28a9de;
          --headline-secondary: #633093;

          --message-color: #592b8d;

          --poster-text-color: #ffffff;
        }

        .poster {
          width: min(320px, calc(100vw - 32px));
          aspect-ratio: 320 / 425;

          background:
            radial-gradient(
              circle at 18% 18%,
              rgba(255, 255, 255, 0.16),
              transparent 24%
            ),

            linear-gradient(
              160deg,
              var(--poster-color-1) 0%,
              var(--poster-color-2) 42%,
              var(--poster-color-3) 100%
            );

          border-radius: var(--poster-radius);

          overflow: hidden;
          position: relative;

          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);

          color: var(--poster-text-color);
        }

        .poster::before {
          content: "";

          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.06) 1px,
              transparent 1px
            ),

            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );

          background-size: 18px 18px;

          opacity: 0.28;

          pointer-events: none;
        }

        .poster__pin {
          width: 8px;
          height: 8px;

          border-radius: 50%;

          background: #2f4f73;

          box-shadow:
            inset 1px 1px 1px rgba(255, 255, 255, 0.5);

          position: absolute;

          z-index: 3;
        }

        .poster__pin--top {
          top: 72px;
          right: -2px;
        }

        .poster__pin--middle {
          top: 195px;
          left: -2px;
        }

        .poster__pin--bottom {
          bottom: 102px;
          left: -2px;
        }

        .poster__content {
          position: relative;

          z-index: 2;

          height: 100%;

          display: flex;
          flex-direction: column;
          align-items: center;

          padding: 28px 18px 12px;

          box-sizing: border-box;
        }

        .headline {
          width: 226px;
          height: 92px;

          position: relative;

          margin-bottom: 18px;

          z-index: 3;
        }

        .headline__info {
          position: absolute;

          left: 0;
          top: 2px;

          color: var(--headline-secondary);

          font-size: 36px;
          font-weight: 800;

          transform: rotate(-4deg);
        }

        .headline__mark {
          position: absolute;

          right: 4px;
          top: 1px;

          color: #0ea4e3;

          font-size: 58px;
          font-weight: 900;

          transform: rotate(12deg);

          text-shadow:
            3px 0 0 var(--headline-secondary);
        }

        .headline__row {
          position: absolute;

          display: inline-block;

          padding: 4px 7px;

          font-weight: 900;

          line-height: 1;

          text-transform: uppercase;

          box-sizing: border-box;
        }

        .headline__row--primary {
          left: 24px;
          top: 5px;

          background: var(--headline-primary);

          font-size: 24px;

          transform: rotate(-2deg);
        }

        .headline__row--small {
          left: 40px;
          top: 42px;

          background: #ffffff;

          color: #d8902e;

          font-size: 18px;

          transform: rotate(7deg);
        }

        .headline__row--secondary {
          left: 72px;
          top: 39px;

          background: var(--headline-secondary);

          font-size: 21px;

          transform: rotate(-4deg);
        }

        .message {
          color: var(--message-color);

          font-size: 16px;
          font-weight: 900;

          line-height: 1.04;

          text-align: center;

          margin: 0 0 24px;

          z-index: 3;
        }

        .qr-zone {
          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 4px;

          margin-bottom: 0;

          z-index: 4;
        }

        .qr-zone__label {
          color: #ffffff;

          font-size: 7px;
          font-weight: 700;

          line-height: 1.1;

          text-align: center;
        }

        .qr-zone__image {
          width: 43px;
          height: 43px;

          display: block;

          object-fit: cover;

          background: #ffffff;

          border: 1px solid #ffffff;

          box-shadow:
            0 0 0 1px rgba(0, 0, 0, 0.18);
        }

        .people {
          width: 100%;
          height: 216px;

          position: absolute;

          left: 0;
          bottom: 34px;

          display: flex;
          justify-content: center;
          align-items: flex-end;

          overflow: hidden;

          z-index: 2;
        }

        .people__image {
          width: 350px;

          max-width: none;

          height: auto;

          display: block;

          position: absolute;

          top: -82px;
          left: 50%;

          transform: translateX(-50%);

          filter:
            drop-shadow(0 7px 7px rgba(0, 0, 0, 0.24));
        }

        .logos {
          width: 100%;

          min-height: 50px;

          display: grid;

          grid-template-columns:
            0.95fr 1fr 1fr 1.2fr;

          align-items: end;

          margin-top: auto;

          position: relative;

          z-index: 5;
        }

        .logo {
          min-height: 42px;

          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;

          gap: 3px;

          color: rgba(255, 255, 255, 0.92);

          text-align: left;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          padding: 0 5px;

          box-sizing: border-box;

          border-right:
            2px solid rgba(255, 255, 255, 0.78);
        }

        .logo:last-child {
          border-right: 0;
        }

        .logo__brand {
          width: 100%;

          display: block;

          font-size: 27px;

          line-height: 1;

          border-bottom:
            2px solid rgba(255, 255, 255, 0.82);
        }

        .logo__text {
          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 7.5px;

          font-weight: 800;

          line-height: 0.98;

          text-transform: uppercase;
        }

        .logo--sg .logo__brand {
          border-bottom: 0;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 23px;

          font-weight: 800;

          margin-bottom: 1px;
        }

        .logo--sg .logo__text {
          font-size: 12px;

          line-height: 1.04;

          text-transform: none;
        }

      </style>

      <main
        class="poster"
        part="poster"
        aria-label="Cartel La Sede te acompaña"
      >

        <span class="poster__pin poster__pin--top"></span>
        <span class="poster__pin poster__pin--middle"></span>
        <span class="poster__pin poster__pin--bottom"></span>

        <section class="poster__content">

          <div
            class="headline"
            part="headline"
            aria-label="La Sede te acompaña"
          >

            <slot name="titulo">

              <span class="headline__info">i</span>

              <span class="headline__row headline__row--primary">
                La Sede
              </span>

              <span class="headline__row headline__row--small">
                te
              </span>

              <span class="headline__row headline__row--secondary">
                acompa&ntilde;a
              </span>

              <span class="headline__mark">!</span>

            </slot>

          </div>

          <p class="message" part="message">

            <slot name="mensaje">

              El respeto no se negocia
              <br>
              &iexcl;Par&aacute; ya de acosar!

            </slot>

          </p>

          <div class="qr-zone" part="qr-zone">

            <slot name="qr">

              <span class="qr-zone__label">
                Si necesit&aacute;s ayuda,
                <br>
                escane&aacute; este QR.
              </span>

              <img
                class="qr-zone__image"
                src="./assets/img/image.png"
                alt="Código QR decorativo"
              >

            </slot>

          </div>

          <div class="people" aria-hidden="true">
            <img
              class="people__image"
              src="./assets/img/personas.png"
              alt=""
            >
          </div>

          <footer
            class="logos"
            part="logos"
            aria-label="Logos institucionales"
          >

            <slot name="logos">

              <div class="logo">
                <span class="logo__brand">UCR</span>

                <span class="logo__text">
                  Libre acoso
                </span>
              </div>

              <div class="logo">
                <span class="logo__brand">UCR</span>

                <span class="logo__text">
                  Libre de
                  <br>
                  acoso sexual
                </span>
              </div>

              <div class="logo">
                <span class="logo__brand">UCR</span>

                <span class="logo__text">
                  Libre de
                  <br>
                  acoso sexual
                </span>
              </div>

              <div class="logo logo--sg">
                <span class="logo__brand">SG</span>

                <span class="logo__text">
                  Sede
                  <br>
                  Guanacaste
                </span>
              </div>

            </slot>

          </footer>

        </section>

      </main>
    `;
  }
}

customElements.define("ucr-sign", UcrSign);