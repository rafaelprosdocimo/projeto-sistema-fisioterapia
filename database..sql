CREATE DATABASE IF NOT EXISTS prontuario_fisioterapia;
USE fisioterapia;


-- Tabela paciente
CREATE TABLE paciente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    endereco VARCHAR(255),
    telefone VARCHAR(20),
    peso DECIMAL(5,2),
    altura DECIMAL(5,2),
    data_nascimento DATE,
    idade INT,
    genero VARCHAR(10),
    estado_civil VARCHAR(20),
    numero_gestacoes INT,
    numero_filhos INT,
    tipos_partos VARCHAR(255),
    nivel_escolaridade VARCHAR(50),
    profissao VARCHAR(50),
    ocupacao VARCHAR(50),
    condicao_fisica VARCHAR(255),
    tabagista ENUM('Sim', 'Não', 'Ex') DEFAULT 'Não',
    tempo_tabagismo VARCHAR(50),
    etilista ENUM('Sim', 'Não', 'Ex') DEFAULT 'Não',
    tempo_etilismo VARCHAR(50)
);

-- Tabela comorbidade
CREATE TABLE comorbidade (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    descricao VARCHAR(255),
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);

-- Tabela medicamento_continuo
CREATE TABLE medicamento_continuo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    descricao VARCHAR(255),
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);

-- Tabela medicamento_atual
CREATE TABLE medicamento_atual (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    descricao VARCHAR(255),
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);

-- Tabela tratamento_complementar
CREATE TABLE tratamento_complementar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    descricao VARCHAR(255),
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);

-- Tabela diagnostico_clinico
CREATE TABLE diagnostico_clinico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    descricao VARCHAR(255),
    cid VARCHAR(10),
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);

-- Tabela queixa
CREATE TABLE queixa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    tipo ENUM('Principal', 'Outra'),
    descricao TEXT,
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);

-- Tabela historia_doenca_atual
CREATE TABLE historia_doenca_atual (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    descricao TEXT,
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);

-- Tabela historia_doenca_pregressa
CREATE TABLE historia_doenca_pregressa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    descricao TEXT,
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);

-- Tabela antecedente_cirurgico
CREATE TABLE antecedente_cirurgico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    descricao TEXT,
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);

-- Tabela avaliacao_postural
CREATE TABLE avaliacao_postural (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    cabeca ENUM('Alinhada', 'Rodada', 'Inclinada'),
    ombro ENUM('Alinhado', 'Elevado', 'Deprimido'),
    clavicula ENUM('Alinhada', 'Elevada', 'Saliente'),
    cotovelo ENUM('Alinhado', 'Valgo', 'Varo'),
    antebraco ENUM('Neutro', 'Pronado', 'Supinado'),
    eias ENUM('Alinhada', 'Mais baixa'),
    eips ENUM('Alinhadas', 'Mais baixa'),
    joelho ENUM('Alinhado', 'Valgo', 'Varo', 'Rot. Medial', 'Rot. Lateral'),
    patela ENUM('Alinhada', 'Lateralizada', 'Medializada', 'Elevada'),
    tornozelo ENUM('Alinhado', 'Valgo', 'Varo'),
    pes ENUM('Alinhado', 'Valgo', 'Varo', 'Plano', 'Cavo'),
    coluna_cervical ENUM('Retificada', 'Normal', 'Hiperlordose'),
    coluna_toracica ENUM('Retificada', 'Normal', 'Hipercifose'),
    coluna_lombar ENUM('Retificada', 'Normal', 'Hiperlordose'),
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);

-- Tabela avaliacao_amplitude_movimento
CREATE TABLE avaliacao_amplitude_movimento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    articulacao VARCHAR(255),
    movimento VARCHAR(255),
    grau_direito DECIMAL(5,2),
    grau_esquerdo DECIMAL(5,2),
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);

-- Tabela forca_muscular
CREATE TABLE forca_muscular (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    grau ENUM('0', '1', '2', '3', '4', '5'),
    descricao VARCHAR(255),
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);

-- Tabela perimetria
CREATE TABLE perimetria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    regiao VARCHAR(50),
    medida1 DECIMAL(5,2),
    medida2 DECIMAL(5,2),
    medida3 DECIMAL(5,2),
    data1 DATE,
    data2 DATE,
    data3 DATE,
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);

-- Tabela sensibilidade
CREATE TABLE sensibilidade (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    local VARCHAR(50),
    tatil ENUM('Normal', 'Alterado'),
    dolorosa ENUM('Normal', 'Alterado'),
    termica ENUM('Normal', 'Alterado'),
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);

-- Tabela testes_especiais
CREATE TABLE testes_especiais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    descricao TEXT,
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);

-- Tabela exame_complementar
CREATE TABLE exame_complementar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    descricao TEXT,
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);

-- Tabela objetivo_terapeutico
CREATE TABLE objetivo_terapeutico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    objetivo TEXT,
    conduta TEXT,
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);

-- Tabela objetivo_paciente
CREATE TABLE objetivo_paciente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    descricao TEXT,
    FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE
);
