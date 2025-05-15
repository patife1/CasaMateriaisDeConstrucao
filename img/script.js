// Quando clicar no botão "Conheça nossos produtos", rola até a seção de produtos
document.querySelector('.btn').addEventListener('click', function(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
});

// Exemplo: ação ao clicar em uma categoria
document.querySelectorAll('.categoria').forEach(div => {
  div.addEventListener('click', () => {
    alert('Você clicou em uma categoria!');
  });
});