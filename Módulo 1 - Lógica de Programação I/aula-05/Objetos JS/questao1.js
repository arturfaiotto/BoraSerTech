let cachorro = {
    nome: 'Bob',
    idade: 2,
    dono: 'Carlos',
    latir: () => console.log('Woof'),
    comer: function(comida){
      console.log(this.nome+' está comendo '+comida)
    }
  }
  
  cachorro.comer('ração');