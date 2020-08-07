import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/29068826?s=460&u=488b529fd3aaf3dd947c72d97f24b18a73b5b388&v=4" alt="Cesar Augusto" />
                <div>
                    <strong>Cesar Augusto</strong>
                    <span>Botânica</span>
                </div>
            </header>
            <p>
                Estudo da fisiologia, morfologia, ecologia, evolução, anatomia, classificação, doenças, distribuição, dentre outros aspectos das plantas.
                        <br /><br />
                        Essa ciência foi reconhecida como tal em 1979, juntamente com os cursos de Biologia.
                    </p>
            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 162,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;