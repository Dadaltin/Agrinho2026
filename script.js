function simular(){

  let irrigacao =
    document.getElementById("irrigacao").value;

  let fertilizante =
    document.getElementById("fertilizante").value;

  let agrotoxico =
    document.getElementById("agrotoxico").value;

  let preservacao =
    document.getElementById("preservacao").value;

  let rotacao =
    document.getElementById("rotacao").value;

  let produtividade = 50;
  let sustentabilidade = 50;
  let lucro = 10000;

  // Irrigação
  if(irrigacao === "alta"){
    produtividade += 15;
    sustentabilidade -= 10;
  }

  if(irrigacao === "media"){
    produtividade += 8;
  }

  // Fertilizante
  if(fertilizante === "organico"){
    sustentabilidade += 20;
  }else{
    produtividade += 10;
    sustentabilidade -= 10;
  }

  // Agrotóxicos
  if(agrotoxico === "alto"){
    produtividade += 10;
    sustentabilidade -= 25;
  }

  if(agrotoxico === "moderado"){
    produtividade += 5;
    sustentabilidade -= 10;
  }

  // Preservação
  if(preservacao === "alta"){
    sustentabilidade += 25;
  }

  if(preservacao === "media"){
    sustentabilidade += 10;
  }

  // Rotação
  if(rotacao === "sim"){
    sustentabilidade += 20;
    produtividade += 5;
  }

  lucro += produtividade * 300;

  let classificacao = "";

  if(sustentabilidade >= 80){
    classificacao =
      "<p class='sustentavel'>🌿 Fazenda Muito Sustentável</p>";
  }
  else if(sustentabilidade >= 50){
    classificacao =
      "<p>⚠ Sustentabilidade Moderada</p>";
  }
  else{
    classificacao =
      "<p class='alerta'>❌ Alto Impacto Ambiental</p>";
  }

  document.getElementById("resultado").innerHTML = `
  
    <p>🌾 Produção Estimada:
    <strong>${produtividade} sacas/hectare</strong></p>

    <p>💰 Lucro Estimado:
    <strong>R$ ${lucro}</strong></p>

    <p>🌱 Índice de Sustentabilidade:
    <strong>${sustentabilidade}%</strong></p>

    ${classificacao}

  `;
}