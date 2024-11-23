// Prontuario.js
import React, { useState } from 'react';
import axios from 'axios';
import './Prontuario.css';

function Prontuario() {
  const [activeSubSection, setActiveSubSection] = useState('dados');
  const [currentDate] = useState(new Date().toLocaleDateString('pt-BR'));
  const [formData, setFormData] = useState({
    nome: '',
    dataNascimento: '',
    genero: '',
    email: '',
    telefone: '',
    contatoEmergencia: '',
    ocupacao: '',
    escolaridade: '',
    necessidadeEspecial: '',
    endereco: '',
    cep: '',
    numero: '',
    complemento: ''
  });

  const subSections = [
    { id: 'dados', label: 'Dados do Paciente' },
    { id: 'historicoFamiliar', label: 'Histórico Familiar' },
    { id: 'historicoSocial', label: 'Histórico Social' },
    { id: 'consideracoesFinais', label: 'Considerações Finais' },
    { id: 'observacoes', label: 'Observações' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui, faz a requisição para o backend com os dados do formulário
    axios.post('URL_DO_SEU_BACKEND', formData)
      .then(response => {
        console.log('Dados enviados com sucesso:', response.data);
        alert('Dados enviados com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao enviar os dados:', error);
        alert('Erro ao enviar os dados. Por favor, tente novamente.');
      });
  };

  const renderSubSection = () => {
    switch (activeSubSection) {
      case 'dados':
        return (
          <div>
            <h2>Prontuário: Dados do Paciente</h2>
            <form onSubmit={handleSubmit}>
              {/* Formulário de dados do paciente */}
              <div className="form-group">
                <label>Nome</label>
                <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Data de Nascimento</label>
                <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Gênero</label>
                <input type="text" name="genero" value={formData.genero} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Telefone</label>
                <input type="text" name="telefone" value={formData.telefone} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Contato Emergência</label>
                <input type="text" name="contatoEmergencia" value={formData.contatoEmergencia} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Ocupação</label>
                <input type="text" name="ocupacao" value={formData.ocupacao} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Escolaridade</label>
                <input type="text" name="escolaridade" value={formData.escolaridade} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Necessidade Especial</label>
                <select name="necessidadeEspecial" value={formData.necessidadeEspecial} onChange={handleInputChange} required>
                  <option value="">Selecione...</option>
                  <option value="cognitiva">Cognitiva</option>
                  <option value="locomocao">Locomoção</option>
                  <option value="visao">Visão</option>
                  <option value="audicao">Audição</option>
                  <option value="psicossocial">Psicossocial</option>
                  <option value="outras">Outras</option>
                </select>
              </div>
              <div className="form-group">
                <label>Endereço</label>
                <input type="text" name="endereco" value={formData.endereco} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>CEP</label>
                <input
                  type="text"
                  name="cep"
                  value={formData.cep}
                  onChange={handleInputChange}
                  required
                  pattern="\d{5}-\d{3}"
                  title="Informe um CEP no formato 00000-000."
                />
              </div>
              <div className="form-group">
                <label>Número</label>
                <input type="text" name="numero" value={formData.numero} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Complemento</label>
                <input type="text" name="complemento" value={formData.complemento} onChange={handleInputChange} />
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
            <h2>Histórico Familiar:</h2>
            <p>
              • Composição familiar (como era/como é) - Dinâmica familiar (com quem mora, se tem contato ou não, suas ocupações, como é o relacionamento entre eles), Eventos significativos (perdas, separações, abusos, doenças graves...)
            </p>
            <div className="anotacoes-form-container">

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
            <p>
              • Vida Social, Hábitos de lazer, inserção em grupos e redes de apoio.
            </p>
            <textarea placeholder="Digite o histórico social aqui..." className="anotacoes-textarea"></textarea>
            <button type="submit" className="submit-button">Confirmar</button>
          </div>
        );
      case 'consideracoesFinais':
        return (
          <div>
            <h2>Considerações Finais:</h2>
            <h3>

            </h3>
            <p>Utilize o proximo espaço caso ache necessário, para acrescentar alguma informação que não foi conteplada nas perguntas anteriores
Questionar o paciente com a pergunta - “Tem algo que eu não te perguntei e você queira me falar?”
Também pode utilizar para anotar as percepções que o estudante teve.
Preferencia de período/horário para receber os atendimentos (manhâ, início ou final da tarde).
Informar que a preferência é por atendimentos presenciais, anotar se a pessoa só puder no formato online
Informar que não há previsão para o inicio dos atendimentos, pois ser chamado para o atendimento depende de uma série de variáveis , tais como: número de estagiários/formandos que estarão atendendo, carga horária prevista para o estágio, vagas abertas no período, disponibilidade de horários dos pacientesx estágiários, número de salas disponíveis para este horário...</p>
            <textarea placeholder="Digite as considerações finais aqui..." className="anotacoes-textarea"></textarea>
            <button type="submit" className="submit-button">Confirmar</button>
          </div>
        );
      case 'observacoes':
        return (
          <div>
            <h2>Observações:</h2>
            <label htmlFor="data-hora" className="anotacoes-label">Data e Hora</label>
              <input type="datetime-local" id="data-hora" className="anotacoes-input" />
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
          <button
            key="dados"
            className="tab-button"
            onClick={() => setActiveSubSection('dados')}
          >
            Dados do Paciente
          </button>
          <button
            key="data"
            className="tab-button"
            disabled
          >
            Data Atual: {currentDate}
          </button>
        </div>
        <ul className="prontuario-menu">
          {subSections.map(({ id, label }) => (
            <li
              key={id}
              className={`menu-item ${activeSubSection === id ? 'selected' : ''}`}
              onClick={() => setActiveSubSection(id)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
      <div className="form-container">{renderSubSection()}</div>
    </div>
  );
}

export default Prontuario;