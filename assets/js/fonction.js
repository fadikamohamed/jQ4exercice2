$(function() {
  //Déclachement de l'évenement
  $('#valider').click(function() {
    //Déclaration des variables et intégration des valeurs du formulaire
    var note1 = parseFloat($('#note1').val());
    var note2 = parseFloat($('#note2').val());
    var note3 = parseFloat($('#note3').val());
    var note4 = parseFloat($('#note4').val());
    var note5 = parseFloat($('#note5').val());
    //Déclaration de la régex
    var regex = /^[\d]$|^[\d][.][5]$|^[1][\d]$|^[1][\d][.][5]$|^20$/;
    //Teste de la régex
    if (regex.test(note1 && note2 && note3 && note4 && note5)) {
      $('#afficher').text(note1 + note2 + note3 + note4 + note5);
      //moyen des valeurs et intégration dans une variable
      var moyen = (note1 + note2 + note3 + note4 + note5) / 5;
      //Si l moyen est comprise entre 0 et 10
      if (moyen >= 0 && moyen < 10) {
        appreciation = "En dessous de la moyenne";
        //Si la moyen est comprise entre 10 et 13
        } else if (moyen >= 10 && moyen < 13) {
          appreciation = "Moyen";
        //Si la moyen est comprise entre 13 et 16
        } else if (moyen >= 13 && moyen < 16) {
          appreciation = "Bien";
        //Si la moyen est comprise entre 16 et 20
        } else if (moyen >= 16 && moyen < 20) {
          appreciation = "Tres bien";
        //Si la moyen est égal a 20
        } else if (moyen == 20) {
          appreciation = "Excellent";
        //Sinon
        } else {
          alert('La il y a un soucis sur la deuxieme condition !');
          }
      //Afficher la moyenne et l'appréciation
      $('#afficher').text(moyen + ' : ' + appreciation);
    //Sinon...
    } else {
      //Mettre les bordure des input en rouge
      $('input').css('border', '2px red solid');
      alert('Seul les nombres compris entre 0 et 20 sont autorisé.' + '\nSeul les 0.5 décimales sont autorisé.')
      }
});
});
