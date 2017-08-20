$(document).ready(function(){
	var $pseudo = $('#pseudo'),
		$mdp = $('#mdp'),
		$confirmation = $('#confirmation'),
		$mail = $('#mail'),
		$envoi = $('#envoi'),
		$rafraichir = $('#rafraichir'),
		$erreur = $('.erreur'),
		$champ = $('.champ');	
		$erreurconfirmation = $('.erreurconfirmation');
		$erreurpseudo = $('.erreurpseudo');
		$erreurmdp = $('.erreurmdp');
		$erreurmail = $('.erreurmail');

		$erreur.css('display', 'none');
		$erreurconfirmation.css('display', 'none');
		$erreurpseudo.css('display', 'none');
		$erreurmdp.css('display', 'none');
		$erreurmail.css('display', 'none');


	$pseudo.keyup(function(){
		if($(this).val().length<=5){
		$(this).css({
			borderColor : "red",
			color: "red"
		}),
		$erreurpseudo.css('display', 'block');	
		}
		else
		$(this).css({
			borderColor : "green",
			color: "green"
		}),
		$erreurpseudo.css('display', 'none');
	});

	$mdp.keyup(function(){
		if($(this).val().length<=5){
		$(this).css({
			borderColor : "red",
			color : "red"
		}),
		$erreurmdp.css('display', 'block');
		}
		else
		$(this).css({
			borderColor: 'green',
			color: 'green'
		}),
		$erreurmdp.css('display', 'none');
	})

	$confirmation.keyup(function(){
		if($(this).val() != $mdp.val()){
		$erreurconfirmation.css('display', 'block'),
		$(this).css({
			borderColor: "red",
			color: "red"
		});
		}
		else
		$erreurconfirmation.css('display', 'none'),
		$(this).css({
			borderColor: "green",
			color: "green"
		});		
	});

	$mail.keyup(function(){
		if($(this).val().indexOf("@") < 0){
			$(this).css({
				borderColor : "red",
				color : "red"
			}),
			$erreurmail.css('display', 'block');
		}
		else 
		$(this).css({
			borderColor : "green",
			color : "green"
		}),
		$erreurmail.css('display', 'none');
	})

	function verifier(champ){
		if(champ.val() == ""){
			$erreur.css('display', 'block');
			champ.css({
				borderColor : 'red',
				color : 'red'
			});
		}
	}

	$envoi.click(function(e){
		e.preventDefault();

		verifier($pseudo);
		verifier($mdp);
		verifier($confirmation);
		verifier($mail);
	});

	$rafraichir.click(function(){
		$champ.css({
			borderColor : '#ccc',
			color : '#555'
		});
	$erreur.css('display', 'none');
	})

});