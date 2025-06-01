// Dados do gráfico
const ctx = document.getElementById('vendasChart').getContext('2d');
const vendasChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [{
      label: 'Vendas por dia (R$)',
      data: [120, 150, 180, 90, 200, 160, 130],
      backgroundColor: '#007BFF'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
