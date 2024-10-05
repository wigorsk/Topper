type Alimento = {
    id: number;
    mealTime: 'café da manhã' | 'almoço' | 'lanche' | 'janta';
    nome: string;
    gramas: number;
    calorias: number;
    carboidratos: number;
    proteinas: number;
    gorduras: number;
  };
  
  const alimentos: Alimento[] = [
    {
      id: 1,
      mealTime: 'café da manhã',
      nome: 'Ovo cozido',
      gramas: 100,
      calorias: 155,
      carboidratos: 1.1,
      proteinas: 13,
      gorduras: 11
    },
    {
      id: 2,
      mealTime: 'almoço',
      nome: 'Arroz branco',
      gramas: 100,
      calorias: 130,
      carboidratos: 28,
      proteinas: 2.4,
      gorduras: 0.2
    },
    {
      id: 3,
      mealTime: 'almoço',
      nome: 'Feijão preto',
      gramas: 100,
      calorias: 77,
      carboidratos: 14,
      proteinas: 4.7,
      gorduras: 0.5
    },
    {
      id: 4,
      mealTime: 'janta',
      nome: 'Peito de frango grelhado',
      gramas: 100,
      calorias: 165,
      carboidratos: 0,
      proteinas: 31,
      gorduras: 3.6
    },
    {
      id: 5,
      mealTime: 'lanche',
      nome: 'Batata doce cozida',
      gramas: 100,
      calorias: 86,
      carboidratos: 20,
      proteinas: 1.6,
      gorduras: 0.1
    }
  ];
  
  export default alimentos;