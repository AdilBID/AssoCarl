// import { Checkbox } from '@mui/material'
// import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import React, { FocusEvent, useEffect, useRef, useState } from 'react';

const Formulaire = () => {

  // const handleRecaptchaChange = () => {
  //   // Cette fonction sera appelée lorsque l'état du reCAPTCHA change
  //   console.log("reCAPTCHA value:");
  // };

  // Définition de l'état initial des cases à cocher
  const [checkboxes, setCheckboxes] = useState({
    victime: true,
    victime1: true,
    victime2: false,
    victime3: false,
    victime4: false,
  });

  // État pour suivre si toutes les cases sont décochées
  const [allUnChecked, setAllUnChecked] = useState(false);

  // Fonction appelée lorsqu'une case à cocher change d'état
  function handleChange(e: any) {
    setCheckboxes({
      ...checkboxes,
      [e.target.id]: e.target.checked
    })
  }

  // Effet secondaire: useEffect pour réagir aux changements d'état des cases à cocher
  useEffect(() => {
    // Vérifie si toutes les valeurs des cases à cocher sont fausses (non cochées)
    const result = Object.values(checkboxes).every(valeur => !valeur);

    console.log(result);

     // Obtient une référence vers le formulaire
     // Utilisez la référence formRef pour obtenir le formulaire
    const form = formRef.current;
   
    // Vérifie si le formulaire existe 
    if (form) {
      // Sélectionne toutes les cases à cocher dans le formulaire
      const inputs = form.querySelectorAll('.checkboxborder'); 

      // Parcourt chaque case à cocher et ajoute ou retire une classe 
      inputs.forEach((input) => {
        if (result) {
          input.classList.add("allUnChecked");
        } else {
          input.classList.remove("allUnChecked");
        }
      });
    }
    setAllUnChecked(result);
  }, [checkboxes, allUnChecked]);

  const formRef = useRef<HTMLFormElement>(null);

  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const handleInputChange = () => {
    const form = formRef.current;
    if (form) {
      const inputs = form.querySelectorAll('input[required]');
      let isValid = true;

      inputs.forEach((input) => {
        if (!(input instanceof HTMLInputElement) || !input.value.trim()) {
          isValid = false;
        } else {
          // Retirer la classe empty si le champ n'est pas vide
          input.classList.remove('empty');
        }
      });

      // Mettez à jour l'état pour refléter si tous les champs sont remplis
      setButtonDisabled(!isValid);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    // Empêche la soumission par défaut du formulaire
    event.preventDefault();

    const form = formRef.current;
    if (form) {
      
      form.submit();
    }
  };

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>): void {
    const { value } = event.target;
    console.log('value : ' + value);

    // Vérifie si le champ est vide
    const isEmpty = !value.trim();
    console.log('isEmpty : ', isEmpty);

    console.log('event.target.classList : ' + event.target.classList);
    if (isEmpty) {
      event.target.classList.add('empty');
    } else {
      event.target.classList.remove('empty');
    }
  }

  return (
    <div className='containe'>
      <div className='formulaire'>

        <div>
          <h1>Besoin d'aide ?</h1>
        </div>

        <form ref={formRef} className='monFormulaire' onSubmit={handleSubmit}>
          {/* // NOM PRENOM */}
          <div className='flex'>
            <label htmlFor="prenom">
              Prénom *
              <input id="prenom" name='prenom' type="text" required onChange={handleInputChange} onBlur={handleBlur} />
            </label>
            <label htmlFor="nom">
              Nom de famille *
              <input id="nom" name='nom' type="text" required onChange={handleInputChange} onBlur={handleBlur} />
            </label>
          </div>

          {/* // email objet */}
          <div className='flex'>
            <label htmlFor="email">
              E-mail *
              <input id="email" type="email" required onChange={handleInputChange} onBlur={handleBlur} />
            </label>
            <label htmlFor="objet">
              Objet *
              <input id="objet" name='objet' type="text" required onChange={handleInputChange} onBlur={handleBlur} />
            </label>
          </div>

          {/* checkbox */}
          <div className='flex2'>
            <div className='checkbox'>
              Vous êtes:*
              <label htmlFor="victime">
                <input className='checkboxborder' id="victime" type="checkbox" name="victime" defaultChecked onChange={handleChange} />
                Victime
              </label>
              <label htmlFor="victime1">
                <input className='checkboxborder' id="victime1" type="checkbox" name="victime1" defaultChecked onChange={handleChange} />
                Parent d'une victime
              </label>
              <label htmlFor="victime2">
                <input className='checkboxborder' id="victime2" type="checkbox" name="victime2" onChange={handleChange} />
                Proche d'une victime
              </label>
              <label htmlFor="victime3">
                <input className='checkboxborder' id="victime3" type="checkbox" name="victime3" onChange={handleChange} />
                Professionel
              </label>
              <label htmlFor="victime4">
                <input className='checkboxborder' id="victime4" type="checkbox" name="victime4" onChange={handleChange} />
                Autre
              </label>
            </div>

            {/* TEL et AGE */}
            <div className='coord'>
              <label htmlFor="Portable">
                Votre téléphone*
                <input id="Portable" type="tel" placeholder='Portable...' required onChange={handleInputChange} onBlur={handleBlur} />
              </label>
              <label htmlFor="age">
                Votre âge et/ou celui de la victime*
                <input id="age" type="text" placeholder='Indiquez-le ici' required onChange={handleInputChange} onBlur={handleBlur} />
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="ville">
              Merci d'indiquer la ville et la région concernée*
              <input id="ville" type="text" placeholder="J'habite OU il/elle habite" required onChange={handleInputChange} onBlur={handleBlur} />
            </label>
            <label htmlFor="situation">
              Résumé de la situation...*
              <input id="situation" type="text" placeholder="Ajouter votre réponse ici" required onChange={handleInputChange} onBlur={handleBlur} />
            </label>
            <label htmlFor="procédures">
              Des procédures judiciaires sont-elles en cours ? Des antécédents ? Si oui, lesquels ?*
              <input id="procédures" type="text" placeholder="Ajouter votre réponse ici" required onChange={handleInputChange} onBlur={handleBlur} />
            </label>
            <label htmlFor="psychologique">
              Un suivi psychologique a-t-il été mis en place ? Si oui, lequel et depuis quand ?*
              <input id="psychologique" type="text" placeholder="Ajouter votre réponse ici" required onChange={handleInputChange} onBlur={handleBlur} />
            </label>
            <label htmlFor="avocat">
              Un avocat a-t-il été désigné ? Si oui, qui et en êtes-vous (ou la victime) satisfait(e) ?*
              <input id="avocat" type="text" placeholder="Ajouter votre réponse ici" required onChange={handleInputChange} onBlur={handleBlur} />
            </label>
            <label htmlFor="aide">
              Quel type d'aide attendez-vous de notre part ?*
              <input id="aide" type="text" placeholder="Ajouter votre réponse ici" required onChange={handleInputChange} onBlur={handleBlur} />
            </label>
          </div>

          <div className='mailto'>
            <div>
              Si vous souhaitez témoigner, merci d'adresser votre témoignage écrit ou vidéo (avec lien wetransfer à&nbsp;
              <a
                href="mailto:contact@associationcarl.com"> contact@associationcarl.com
              </a>
              ) en précisant si vous souhaitez, ou non, rester anonyme.
            </div>
            <div>
              Pour toute proposition de partenariat pour nous reverser des fonds,
              merci de nous écrire directement à&nbsp;
              <a
                href="mailto:contact@associationcarl.com">contact@associationcarl.com
              </a>
            </div>
            <div className='newsletter'>
              <label htmlFor="newsletter">
                <input className='newslettercheckbox' id="newsletter" type="checkbox" name="newsletter" value="newsletter" />
                Je veux m'inscrire à la newsletter.
              </label>
            </div>
          </div>

          <div className='recaptcha'>
            {/* Autres éléments de votre composant */}
            {/* <div></div> */}
            <ReCAPTCHA
              sitekey="6LcbgyopAAAAANyr79ligc34FYet-2MMVCPLl4u3"
              // onChange={handleRecaptchaChange}
              theme="light" // Vous pouvez utiliser "light" ou "dark" selon vos préférences
            />
          </div>

          <div className='button'>
            <button disabled={isButtonDisabled || allUnChecked} onClick={handleSubmit}>ENVOYER</button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default Formulaire