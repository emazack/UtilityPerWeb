// dicitura per rendere la pagina pronta a ricevere funzioni e terminologia jQuery
$(document).ready(function(){

  // serve per riferire un evento ad un elemento in pagina che è stato caricato dopo il caricamento iniziale delle pagina (magari perchè è stato creato)
  $(ElementoGiaPresenteACuiRiferirsi).on(EventoTriggerante, ElementoCreatoDopoACheScatenaLevento,
    function(){
      // QUELLO CHE DEVE SUCCEDERE;
    }
  );

  // gestione Handlebars:
  // Prendo quello che è contenuto nello script selezionandolo tramite id
  var source = $("#template-mex-inviato").html();
  // ciò che ho preso lo do a Handlebars e glielo faccio smaneggiare
  var template = Handlebars.compile(source);
  // creo una variabile che contiene l'informazione completa del tamplate + il testo inserito dinamicamente
  var html = template(testoInputObject);
  // inserisco l'informazione del template "html" dove voglio io
  $(".DoveVoglioIo").append(html);

  // chiamate AJAX per utilizzare api
  $.ajax({
    url : "https://flynn.boolean.careers/exercises/api/random/int",
    method : "GET",
    success: function (data,stato) {
      // quello che succede se tutto va bene
    },
    error : function (richiesta, stato, errore) {
      // quello che succede se c'è un errore. Ex:
      alert("E' avvenuto un errore. " + errore);
    }
  });

});
