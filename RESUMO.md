# Clinare — Resumo do Projeto

## Descrição
Site institucional da **Clinare – Clínica Natural de Recuperação e Estética, Lda.**  
Ervanária & Estética em Vila Nova de Famalicão desde 1984.

**URL:** https://mrpintz.github.io/Clinare/  
**Repositório:** https://github.com/Mrpintz/Clinare

---

## Estrutura de Ficheiros

```
Clinare/
├── index.html          # Página principal
├── privacidade.html    # Política de Privacidade
├── cookies.html        # Política de Cookies
├── termos.html         # Termos e Condições
├── styles.css          # Estilos globais
├── app.js              # Interações (idioma, nav, scroll, formulário)
├── favicon.svg         # Favicon SVG (folha verde)
├── sitemap.xml         # Sitemap para motores de busca
├── robots.txt          # Instruções para crawlers
├── images/
│   ├── loja-shopping.jpeg
│   └── loja-avenida.jpeg
└── screenshots/        # Screenshots de referência
```

---

## O que foi feito

### 1. Repositório e Deploy
- Inicialização do repositório Git local
- `.gitignore` criado (exclui `uploads/` e `.thumbnail`)
- Push para https://github.com/Mrpintz/Clinare
- Deploy via **GitHub Pages** (branch `main`, raiz `/`)
- Site online e gratuito em `mrpintz.github.io/Clinare`

### 2. SEO
- **Canonical URL** — evita conteúdo duplicado
- **Open Graph** — og:title, og:description, og:image, og:url, og:locale para partilhas no Facebook e WhatsApp
- **Twitter/X Card** — summary_large_image
- **JSON-LD structured data** — `HealthAndBeautyBusiness` para as duas lojas com morada, telefone e horários
- **Favicon SVG** — folha Clinare sobre fundo verde
- **sitemap.xml** — indexação pelo Google
- **robots.txt** — com referência ao sitemap
- **Nota:** falta criar `og-image.jpg` (1200×630px) para preview nas partilhas sociais

### 3. Imagens
- Fotos reais das duas lojas adicionadas em `images/`
- Substituição dos placeholders SVG na secção "As lojas"
- CSS `object-fit: cover` para preenchimento correto

### 4. Páginas Legais
Todas com o mesmo design do site, header e footer consistentes.

#### Política de Privacidade (`privacidade.html`)
- Corrigido erro crítico: ano do RGPD (2006 → **2016**)
- Morada oficial corrigida para Rua Luís Barroso, Shopping Town, Loja R-20
- Prazos de conservação específicos (dados fiscais 10 anos, reclamações 3 anos)
- Formulário de contacto mencionado como método de recolha
- Referência ao WhatsApp e à Meta
- Data de última atualização

#### Política de Cookies (`cookies.html`)
- Reescrita de raiz — a original era um template genérico com informações falsas:
  - Afirmava ter e-commerce (falso)
  - Afirmava usar Google Analytics (falso)
  - Afirmava ter plugins de redes sociais (falso)
- Nova versão documenta apenas o que existe: `localStorage` para preferência de idioma
- Tabela com o único item de armazenamento (`clinare_lang`)
- Menção ao Google Fonts como única fonte externa
- Instruções para limpar localStorage em Chrome, Firefox e Safari

#### Termos e Condições (`termos.html`)
- Criados de raiz (não existiam)
- 10 secções: identificação, objeto do site, marcações, informação sobre produtos, propriedade intelectual, limitação de responsabilidade, links externos, legislação, alterações e contacto
- Referência ao Livro de Reclamações e plataforma europeia ODR

---

## Pendente

- [ ] Imagem Open Graph (`og-image.jpg`, 1200×630px) — foto da loja para preview nas partilhas
- [ ] Fotos do hero, equipa, produtos e tratamentos
- [ ] Confirmação do cliente

---

## Tecnologias

- HTML5, CSS3, JavaScript (vanilla)
- Fontes: Cormorant Garamond, Hanken Grotesk, Marcellus (Google Fonts)
- Alojamento: GitHub Pages (gratuito)
- Sem frameworks, sem dependências, sem cookies de rastreio
