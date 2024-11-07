import { LitElement, html, css } from 'lit';

class ProjectCarousel extends LitElement {
    static properties = {
        currentProject: { type: Number },
        projects: { type: Array }
    };

    constructor() {
        super();
        this.currentProject = 0;
        this.projects = [
            {
                title: 'PrestService',
                description: 'Proyecto java con SpringBoot e implementación de Spring Security, en colaboracion con Mauricio Diaz y Karol Ramirez.',
                link: 'https://github.com/Karol-Ramirez03/proservicehub.git',
                img: 'public/prest-removebg-preview.png',
                id: 'img1'
            },
            {
              title: '¿Cuánto cuesta mi App?',
              description: 'Aplicativo web con Lit, donde los usuarios pueden cotizar creación de páginas web.Colaboración con Mauricio Diaz y Karol Ramirez.',
              link: 'https://github.com/Karol-Ramirez03/costo-app',
              img: 'public/costoApp.png',
              id:'img2'
          },
          {
              title: 'Burger Fest',
              description: 'Proyecto HTML y CSS, basado en una interfaz sencilla de una tienda virtual de productos alimenticios.',
              link: 'https://github.com/Lauraw100/WebBurguer',
              img: 'public/hamburguesa.png',
              id:'img3'
          }
        ];
    }

    handleNextProject() {
        this.currentProject = (this.currentProject + 1) % this.projects.length;
    }

    handlePreviousProject() {
        this.currentProject = (this.currentProject - 1 + this.projects.length) % this.projects.length;
    }

    render() {
        const project = this.projects[this.currentProject];

        return html`
            <div class="proyectos">
                <button class="arrow left" @click="${this.handlePreviousProject}">&#10094;</button>
                
                <div class="project-panel">
                    <div class="project">
                        <h3 class="titulo-proyecto">${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.link}" target="_blank">
                            ${project.img ? html`<img id="${project.id}" src="${project.img}" alt="${project.title}" />` : ''}
                            <p class="click">Haz click en la imagen para saber más...</p>
                        </a>
                    </div>
                </div>
                
                <button class="arrow right" @click="${this.handleNextProject}">&#10095;</button>
            </div>
        `;
    }

    static styles = css`
         .proyectos {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .arrow {
            cursor: pointer;
            font-size: 15px;
            padding: 5px;
        }
        .project-panel {
            text-align: center;
            margin: 0 10px;
            width: 600px; 
            height: 350px; 
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .project {
            max-width: 50%; /* Asegura que el contenido no se desborde */
            max-height: 100%;
        }
        img {
            width: 200px;
            height: auto;
        }
        .click {
            font-size: 14px;
            color: #666;
        }
            @media (max-width: 768px) {
    .project-panel {
        width: 80%; /* Reduce el ancho del contenedor */
        height: auto; 
    }
    img {
        width: 150px; 
    }
    .arrow {
        font-size: 20px; //
    }
}


@media (max-width: 480px) {
    .project-panel {
        width: 90%; /* Ocupa casi todo el ancho de la pantalla */
        height: auto;
        margin: 0 5px;
    }
    img {
        width: 120px; /* Reduce aún más el tamaño de la imagen en pantallas pequeñas */
    }
    .arrow {
        font-size: 18px;
        padding: 3px;
    }
    .click {
        font-size: 12px; /* Reduce el tamaño del texto */
    }
}
    `;
}

customElements.define('project-carousel', ProjectCarousel);
