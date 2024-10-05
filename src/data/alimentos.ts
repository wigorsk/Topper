type Alimento = {
    mealTime: 'Café da Manhã' | 'Almoço' | 'Jantar' | 'Lanche';
    nome: string;
    gramas: number;
    calorias: number;
    carboidratos: number;
    proteinas: number;
    gorduras: number;
  };
  
  const alimentos: Alimento[] = [
    {
      mealTime: 'Café da Manhã',
      nome: 'Ovo cozido',
      gramas: 100,
      calorias: 155,
      carboidratos: 1.1,
      proteinas: 13,
      gorduras: 11
    },
    {
      mealTime: 'Almoço',
      nome: 'Arroz branco',
      gramas: 100,
      calorias: 130,
      carboidratos: 28,
      proteinas: 2.4,
      gorduras: 0.2
    },
    {
      mealTime: 'Almoço',
      nome: 'Feijão preto',
      gramas: 100,
      calorias: 77,
      carboidratos: 14,
      proteinas: 4.7,
      gorduras: 0.5
    },
    {
      mealTime: 'Jantar',
      nome: 'Peito de frango grelhado',
      gramas: 100,
      calorias: 165,
      carboidratos: 0,
      proteinas: 31,
      gorduras: 3.6
    },
    {
      mealTime: 'Lanche',
      nome: 'Batata doce cozida',
      gramas: 100,
      calorias: 86,
      carboidratos: 20,
      proteinas: 1.6,
      gorduras: 0.1
    }
  ];
  
  export default alimentos;