// Sistema de Proteção de Créditos - Fábio Wlademir
class ProtecaoCreditos {
    constructor() {
        this.autor = {
            nome: "Fábio Wlademir",
            portfolio: "https://fabiowlademir.github.io/",
            blog: "https://f2ti.blogspot.com/",
            whatsapp: "https://wa.me/5551998883187"
        };
        
        this.creditosHTML = `
            <div id="creditos-autor-2025" style="
                background: linear-gradient(135deg, #1a202c, #2d3748);
                color: white;
                padding: 2rem 1rem;
                text-align: center;
                border-top: 4px solid #4299e1;
                margin-top: 4rem;
                font-family: 'Inter', sans-serif;
                position: relative;
            ">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <div style="
                        background: #4299e1;
                        color: white;
                        padding: 0.5rem 1rem;
                        border-radius: 25px;
                        display: inline-block;
                        margin-bottom: 1rem;
                        font-weight: 600;
                        font-size: 0.9rem;
                    ">
                        🔒 Créditos Protegidos
                    </div>
                    
                    <p style="margin: 0.5rem 0; font-size: 1.2rem; font-weight: 600;">
                        © 2025 Design by 
                        <a href="${this.autor.blog}" 
                           target="_blank" 
                           style="color: #90cdf4; text-decoration: none; font-weight: 700;">
                            ${this.autor.nome}
                        </a>
                    </p>
                    
                    <div style="margin-top: 1rem; display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; font-size: 0.95rem;">
                        <a href="${this.autor.portfolio}" 
                           target="_blank" 
                           style="color: #cbd5e0; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
                            🌐 Portfólio GitHub
                        </a>
                        <a href="${this.autor.blog}" 
                           target="_blank" 
                           style="color: #cbd5e0; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
                            🎨 Blog F2TI
                        </a>
                        <a href="${this.autor.whatsapp}" 
                           target="_blank" 
                           style="color: #cbd5e0; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
                            📱 WhatsApp: (51) 99888-3187
                        </a>
                    </div>
                    
                    <p style="margin-top: 1rem; font-size: 0.85rem; color: #a0aec0;">
                        Este template é distribuído sob licença MIT. É obrigatório manter estes créditos.
                    </p>
                </div>
            </div>
        `;
        
        this.init();
    }

    init() {
        this.inserirCreditos();
        this.iniciarProtecao();
    }

    inserirCreditos() {
        if (document.getElementById('creditos-autor-2025')) return;
        
        const footer = document.querySelector('footer') || document.body;
        footer.insertAdjacentHTML('beforeend', this.creditosHTML);
    }

    iniciarProtecao() {
        setInterval(() => this.verificarIntegridade(), 2000);
        this.observarMudancas();
    }

    verificarIntegridade() {
        const creditos = document.getElementById('creditos-autor-2025');
        
        if (!creditos) {
            this.inserirCreditos();
            return;
        }

        if (!creditos.innerHTML.includes(this.autor.nome)) {
            creditos.remove();
            this.inserirCreditos();
        }

        const styles = window.getComputedStyle(creditos);
        if (styles.display === 'none') {
            creditos.style.display = 'block';
        }
    }

    observarMudancas() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.removedNodes.forEach((node) => {
                    if (node.nodeType === 1 && node.id === 'creditos-autor-2025') {
                        this.inserirCreditos();
                    }
                });
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new ProtecaoCreditos());
} else {
    new ProtecaoCreditos();
}
