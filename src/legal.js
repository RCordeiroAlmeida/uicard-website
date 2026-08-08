// Entry das páginas legais (/privacidade, /termos, /entrega).
//
// Existe só para o Vite processar e versionar o CSS — no build ele vira um
// <link rel="stylesheet"> injetado no HTML, então as páginas continuam
// legíveis com JavaScript desativado. Isso é intencional: um documento legal
// que só existe depois do JS rodar não serve como prova nem é lido por
// crawlers, que é justamente o motivo destas páginas existirem.
import './styles/legal.css';
