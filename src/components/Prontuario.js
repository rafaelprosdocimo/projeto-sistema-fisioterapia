import React, { useState } from 'react';
import './Prontuario.css';

function Prontuario() {
  const [activeSubSection, setActiveSubSection] = useState('dados');
  const [showSpecialNeedsOptions, setShowSpecialNeedsOptions] = useState(false); // Novo estado

  const renderSubSection = () => {
    switch (activeSubSection) {
      case 'dados':
        return (
          <div>
            <h2>Prontuário: Dados do Paciente</h2>
            <form>
              {/* Formulário de dados do paciente */}
              <div className="form-group">
                <label>Nome</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Data de Nascimento</label>
                <input type="date" required />
              </div>
              <div className="form-group">
                <label>Gênero</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>Telefone</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Contato Emergência</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Ocupação</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Escolaridade</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Necessidade Especial</label>
                <input
                  type="text"
                  onFocus={() => setShowSpecialNeedsOptions(true)} // Mostra o campo de seleção ao focar
                />
              </div>
              {showSpecialNeedsOptions && (
                <div className="form-group">
                  <label>Selecione a Necessidade Especial</label>
                  <select required>
                    <option value="">Selecione...</option>
                    <option value="cognitiva">Cognitiva</option>
                    <option value="locomocao">Locomoção</option>
                    <option value="visao">Visão</option>
                    <option value="audicao">Audição</option>
                    <option value="psicossocial">Psicossocial</option>
                    <option value="outras">Outras</option>
                  </select>
                </div>
              )}
              <div className="form-group">
                <label>Endereço</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>CEP</label>
                <input
                  type="text"
                  required
                  pattern="\d{5}-\d{3}"
                  title="Informe um CEP no formato 00000-000."
                />
              </div>
              <div className="form-group">
                <label>Número</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Complemento</label>
                <input type="text" />
              </div>

              <button type="submit" className="submit-button">Confirmar</button>
            </form>
          </div>
        );
        case 'anotacoes':
            return (
              <div>
                <h2>Anotações e Planejamentos:</h2>
                <p>
                  • Avaliação de demanda e definição de objetivos do trabalho - Registro da evolução dos atendimentos e principais observações clínicas - Registro dos procedimentos adotados - Registro de Encaminhamento ou Encerramento.
                </p>
                <div className="anotacoes-form-container">
                  <label htmlFor="data-hora" className="anotacoes-label">Data e Hora</label>
                  <input type="datetime-local" id="data-hora" className="anotacoes-input" />
          
                  <label htmlFor="anotacoes-texto" className="anotacoes-label">Anotações</label>
                  <textarea id="anotacoes-texto" className="anotacoes-textarea" placeholder="Seu texto vai aqui..."></textarea>
          
                  <button type="submit" className="submit-button">Confirmar</button>
                </div>
              </div>
            );
          
      case 'historicoFamiliar':
        return (
            <div>
            <h2>Historico Familiar:</h2>
            <p>
              • Composição familiar (como era/como é) - Dinâmica familiar (com quem mora, se tem contato ou não, suas ocupações, como é o relacionamento entre eles), Eventos significativos (perdas, separações, abusos, doenças graves...)
            </p>
            <div className="anotacoes-form-container">
              <label htmlFor="data-hora" className="anotacoes-label">Data e Hora</label>
              <input type="datetime-local" id="data-hora" className="anotacoes-input" />
      
              <label htmlFor="anotacoes-texto" className="anotacoes-label">Anotações</label>
              <textarea id="anotacoes-texto" className="anotacoes-textarea" placeholder="Seu texto vai aqui..."></textarea>
      
              <button type="submit" className="submit-button">Confirmar</button>
            </div>
          </div>
        );
      case 'historicoSocial':
        return (
          <div>
            <h2>Histórico Social:</h2>
            <textarea placeholder="Digite o histórico social aqui..." className="anotacoes-textarea"></textarea>
            <button type="submit" className="submit-button">Confirmar</button>
          </div>
        );
      case 'consideracoesFinais':
        return (
          <div>
            <h2>Considerações Finais:</h2>
            <textarea placeholder="Digite as considerações finais aqui..." className="anotacoes-textarea"></textarea>
            <button type="submit" className="submit-button">Confirmar</button>
          </div>
        );
      case 'observacoes':
        return (
          <div>
            <h2>Observações:</h2>
            <textarea placeholder="Digite as observações aqui..." className="anotacoes-textarea"></textarea>
            <button type="submit" className="submit-button">Confirmar</button>
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <div className="prontuario-layout">
      <div className="prontuario-sidebar-container">
        <div className="prontuario-buttons">
          <button className="tab-button" onClick={() => setActiveSubSection('dados')}>Dados do Paciente</button>
          <button className="tab-button" onClick={() => setActiveSubSection('anotacoes')}>Anotações e Planejamentos</button>
        </div>
        <ul className="prontuario-menu">
          <li className={`menu-item ${activeSubSection === 'dados' ? 'selected' : ''}`} onClick={() => setActiveSubSection('dados')}>
             Dados do Paciente
          </li>
          <li className={`menu-item ${activeSubSection === 'anotacoes' ? 'selected' : ''}`} onClick={() => setActiveSubSection('anotacoes')}>
             Anotações e Planejamentos
          </li>
          <li className={`menu-item ${activeSubSection === 'historicoFamiliar' ? 'selected' : ''}`} onClick={() => setActiveSubSection('historicoFamiliar')}>
             Histórico Familiar
          </li>
          <li className={`menu-item ${activeSubSection === 'historicoSocial' ? 'selected' : ''}`} onClick={() => setActiveSubSection('historicoSocial')}>
             Histórico Social
          </li>
          <li className={`menu-item ${activeSubSection === 'consideracoesFinais' ? 'selected' : ''}`} onClick={() => setActiveSubSection('consideracoesFinais')}>
             Considerações Finais
          </li>
          <li className={`menu-item ${activeSubSection === 'observacoes' ? 'selected' : ''}`} onClick={() => setActiveSubSection('observacoes')}>
             Observações
          </li>
        </ul>
      </div>
      <div className="form-container">
        {renderSubSection()}
      </div>
    </div>
  );
}

export default Prontuario;
