import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const Formulaire = () => {
  // recaptche
  const [capVAl, setCapVal] = useState(null);

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
      [e.target.id]: e.target.checked,
    });
  }

  // Effet secondaire: useEffect pour réagir aux changements d'état des cases à cocher
  useEffect(() => {
    // Vérifie si toutes les valeurs des cases à cocher sont fausses (non cochées)
    const result = Object.values(checkboxes).every((valeur) => !valeur);

    console.log(result);

    // Obtient une référence vers le formulaire
    // Utilisez la référence formRef pour obtenir le formulaire
    const form = formRef.current;

    // Vérifie si le formulaire existe
    if (form) {
      // Sélectionne toutes les cases à cocher dans le formulaire
      const inputs = form.querySelectorAll(".checkboxborder");

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

  const handleInputEvent = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement, Element>
  ) => {
    const form = formRef.current;

    if (form) {
      const inputs = form.querySelectorAll("input[required]"); // all inputs
      let isValid = true;

      inputs.forEach((input) => {
        if (!(input instanceof HTMLInputElement) || !input.value.trim()) {
          isValid = false; // si un input vide

          // Ajouter la classe 'empty' à l'élément actuel
          if (input === event.target) {
            input.classList.add("empty");
          }
        } else {
          // Retirer la classe empty si le champ n'est pas vide
          input.classList.remove("empty");

          const { id, value } = input;

          // // Validation spécifique pour le champ d'email
          // if (id === 'email') {
          //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          //   const isValidEmail = emailRegex.test(value);

          //   if (!isValidEmail) {
          //     input.classList.add('invalidMail');
          //     isValid = false;
          //   } else {
          //     input.classList.remove('invalidMail');
          //   }
          // }

          // Validation spécifique pour le champ de numéro de téléphone
          if (id === "portable") {
            const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
            const isValidPhone = phoneRegex.test(value);

            if (!isValidPhone) {
              input.classList.add("invalidTel");
              isValid = false;
            } else {
              input.classList.remove("invalidTel");
            }
          }
        }
      });

      // Mettre à jour l'état du bouton seulement si tous les champs sont remplis et les validations sont réussies
      setButtonDisabled(!isValid);
    }
  };

  // Utilisez handleInputEvent pour les événements onChange et onBlur
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputEvent(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    handleInputEvent(event);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    // Empêche la soumission par défaut du formulaire
    event.preventDefault();
    const form = formRef.current;
    if (form) {
      const formData = new FormData(form);
      try {
        const response = await axios.post(
          "http://localhost:5000/api/send-email",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };

  return (
    <div className="containe">
      <div className="formulaire">
        <div>
          <h1>Besoin d'aide ?</h1>
        </div>

        <form
          ref={formRef}
          className="monFormulaire"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          {/* // NOM PRENOM */}
          <div className="flex">
            <label htmlFor="prenom">
              Prénom *
              <input
                id="prenom"
                name="prenom"
                type="text"
                required
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </label>
            <label htmlFor="nom">
              Nom de famille *
              <input
                id="nom"
                name="nom"
                type="text"
                required
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </label>
          </div>

          {/* // email objet */}
          <div className="flex">
            <label htmlFor="email">
              E-mail *
              <input
                id="email"
                name="email"
                type="email"
                // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                required
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </label>
            <label htmlFor="objet">
              Objet *
              <input
                id="objet"
                name="objet"
                type="text"
                required
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </label>
          </div>

          {/* checkbox */}
          <div className="flex2">
            <div className="checkbox">
              Vous êtes:*
              <label htmlFor="victime">
                <input
                  className="checkboxborder"
                  id="victime"
                  type="checkbox"
                  name="victime"
                  defaultChecked
                  onChange={handleChange}
                />
                Victime
              </label>
              <label htmlFor="victime1">
                <input
                  className="checkboxborder"
                  id="victime1"
                  type="checkbox"
                  name="victime1"
                  defaultChecked
                  onChange={handleChange}
                />
                Parent d'une victime
              </label>
              <label htmlFor="victime2">
                <input
                  className="checkboxborder"
                  id="victime2"
                  type="checkbox"
                  name="victime2"
                  onChange={handleChange}
                />
                Proche d'une victime
              </label>
              <label htmlFor="victime3">
                <input
                  className="checkboxborder"
                  id="victime3"
                  type="checkbox"
                  name="victime3"
                  onChange={handleChange}
                />
                Professionel
              </label>
              <label htmlFor="victime4">
                <input
                  className="checkboxborder"
                  id="victime4"
                  type="checkbox"
                  name="victime4"
                  onChange={handleChange}
                />
                Autre
              </label>
            </div>

            {/* TEL et AGE */}
            <div className="coord">
              <label htmlFor="portable">
                Votre téléphone*
                <input
                  id="portable"
                  type="tel"
                  placeholder="Portable..."
                  name="portable"
                  required
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                />
              </label>
              <label htmlFor="age">
                Votre âge et/ou celui de la victime*
                <input
                  id="age"
                  type="number"
                  name="age"
                  placeholder="Indiquez-le ici"
                  min="1"
                  max="199"
                  required
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                />
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="ville">
              Merci d'indiquer la ville et la région concernée*
              <input
                id="ville"
                type="text"
                name="ville"
                placeholder="J'habite OU il/elle habite"
                required
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </label>
            <label htmlFor="situation">
              Résumé de la situation...*
              <input
                id="situation"
                type="text"
                name="situation"
                placeholder="Ajouter votre réponse ici"
                required
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </label>
            <label htmlFor="procedures">
              Des procédures judiciaires sont-elles en cours ? Des antécédents ?
              Si oui, lesquels ?*
              <input
                id="procedures"
                type="text"
                name="procedures"
                placeholder="Ajouter votre réponse ici"
                required
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </label>
            <label htmlFor="psychologique">
              Un suivi psychologique a-t-il été mis en place ? Si oui, lequel et
              depuis quand ?*
              <input
                id="psychologique"
                type="text"
                name="psychologique"
                placeholder="Ajouter votre réponse ici"
                required
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </label>
            <label htmlFor="avocat">
              Un avocat a-t-il été désigné ? Si oui, qui et en êtes-vous (ou la
              victime) satisfait(e) ?*
              <input
                id="avocat"
                type="text"
                name="avocat"
                placeholder="Ajouter votre réponse ici"
                required
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </label>
            <label htmlFor="aide">
              Quel type d'aide attendez-vous de notre part ?*
              <input
                id="aide"
                type="text"
                name="aide"
                placeholder="Ajouter votre réponse ici"
                required
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </label>
          </div>

          <div className="mailto">
            <div>
              Si vous souhaitez témoigner, merci d'adresser votre témoignage
              écrit ou vidéo (avec lien wetransfer à&nbsp;
              <a href="mailto:contact@associationcarl.com">
                {" "}
                contact@associationcarl.com
              </a>
              ) en précisant si vous souhaitez, ou non, rester anonyme.
            </div>
            <div>
              Pour toute proposition de partenariat pour nous reverser des
              fonds, merci de nous écrire directement à&nbsp;
              <a href="mailto:contact@associationcarl.com">
                contact@associationcarl.com
              </a>
            </div>
            <div className="newsletter">
              <label htmlFor="newsletter">
                <input
                  className="newslettercheckbox"
                  id="newsletter"
                  type="checkbox"
                  name="newsletter"
                  value="newsletter"
                />
                Je veux m'inscrire à la newsletter.
              </label>
            </div>
          </div>

          <div className="g-recaptcha">
            <ReCAPTCHA
              sitekey="6LdqdC0pAAAAAFwlqB4fKyVTfLEUB5qOEArQpP3R"
              onChange={(val: any) => setCapVal(val)}
              theme="light" // Vous pouvez utiliser "light" ou "dark" selon vos préférences
              // Ajoutez la classe ici
              //  className="g-recaptcha"
            />
          </div>

          <div className="button">
            {/* <button disabled={isButtonDisabled} onClick={handleSubmit}>ENVOYER</button> */}
            <button
              disabled={isButtonDisabled || allUnChecked || !capVAl}
              onClick={handleSubmit}
            >
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulaire;
