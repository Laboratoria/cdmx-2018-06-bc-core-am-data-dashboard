const objectLima = {
    generacion:"tercera, cuarta, quinta"
    }
   const objectMex = {
    generacion:"tercera, cuarta, quinta",
   }
   const objectSant = {
    generacion:"tercera, cuarta, quinta",
   }
   
   const objetoSedes = [objectLima,objectMex,objectSant];
   
   window.generaciones = {
    computeStudentsStats: () => {
      for (var i = 0; i < objetoSedes.length; i++) {
        return objetoSedes[i].generacion
   
      }
    }
   };