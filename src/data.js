const objectLima = {
    generacion:"tercera, cuarta, quinta"
    }
   const objectMexico = {
    generacion:"tercera, cuarta, quinta",
   }
   const objectSantiago = {
    generacion:"tercera, cuarta, quinta",
   }
   
   const objetoSedes = [objectLima,objectMexico,objectSantiago];
   
   window.generaciones = {
    computeStudentsStats: () => {
      for (var i = 0; i < objetoSedes.length; i++) {
        return objetoSedes[i].generacion
   
      }
    }
   };