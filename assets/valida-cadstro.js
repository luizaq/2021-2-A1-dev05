function check()
{
var group = document.salvar.RadioCadastro;
for (var i=0; i<group.length; i++) {
if (group[i].checked)
break;
}
if (i==group.length)
return alert("No radio button is checked");
alert("Radio Button " + (i+1) + " is checked.");
}