// dicitura per rendere la pagina pronta a ricevere funzioni e terminologia jQuery
$(document).ready(function(){

  // serve per riferire un evento ad un elemento in pagina che è stato caricato dopo il caricamento iniziale delle pagina (magari perchè è stato creato)
  $(ElementoGiaPresenteACuiRiferirsi).on(EventoTriggerante, ElementoCreatoDopoACheScatenaLevento,
    function(){
      // QUELLO CHE DEVE SUCCEDERE;
    }
  );

});
