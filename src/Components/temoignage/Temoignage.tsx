const TemoignagesCard = () => {
  const temoignages = [
    {
      id: 1,
      nom: "Yanis, 15 ans",
      description:
        "En septembre j'étais au fond du gouffre, perdu et désespéré, seul avec mon secret  depuis 3 ans. J'avais des idées noires. Je me faisais du mal. C'était trop lourd à porter. Un soir, j'ai contacté l'association, et Steffy m'a immédiatement mis en confiance. Elle m'a accompagné et grâce à son soutien, j'ai trouvé la force de parler à mes parents, que l'association a aussi soutenus, et mon agresseur a pu être placé en détention provisoire... Je sais désormais que je ne suis plus tout seul et je peux enfin me reconstruire. Un grand merci !",
    },
    {
      id: 2,
      nom: "Pauline, 39 ans   maman de Louis",
      description:
        "Quand mon fils m’a révélé être victime d’inceste de la part de son père, il n'avait même pas 5 ans. J'étais terriblement seule et perdue dans ce combat. Une proche m'a suggéré de faire appel à cette association et grâce à cette dernière, mon fils et moi avons pu avancer dans ce long tunnel obscur. J’ai changé d’avocat (merci Steffy!), et je suis aujourd’hui accompagnée, entendue, conseillée. La parole de mon fils est légitimée. Sans cette aide, je me serais effondrée et je ne pourrais pas être une maman solide qui se bat pour son enfant.",
    },
    {
      id: 3,
      nom: "Iris, 13 ans",
      description:
        "Je n'en aais jamais parlé à personne avant. J'avais peur de décevoir ma maman, comme si j'allais briser la famille qu'elle avait reconstruite. Steffy et ses bénévoles m'ont rassurée. Ils ont été super gentils, et surtout, ils ne m'ont jamais jugée. Je me suis sentie comprise et ça m'a donné la force de parler. J'ai déposé plainte depuis. Je n'y serais jamais arrivé sans eux. Aujourd'hui je suis enfin protégée. Je ne subis plus celui qui m'a démolie. Je vous remercie du fond du coeur pour tout. ",
    },
  ];


return (
    <div className="temoignages-cards-container">
      {temoignages.map(({ id, nom, description }) => {
        // Vérifie si 'ans' est suivi d'autres textes
        const parts = nom.split("ans");
        const nomAffiche = parts.length > 1
          ? (<span>{parts[0]}ans<br />{parts[1]}</span>)
          : nom;

        return (
          <div key={id} className="temoignage">
            <div className="temoignage-symbol">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 120 120"><g>
//         <path d="M40 160v-45.9c0-40.9 14.8-65 47.1-74.1v25.1c-15.4 6.6-21.5 20.3-21 45.4h21V160H40z" fill="#f9ec00" data-color="1"></path>
//         <path d="M112.9 160v-45.9c0-40.9 14.8-65 47.1-74.1v25.1c-15.4 6.6-21.5 20.4-21 45.4h21V160h-47.1z" fill="#f9ec00" data-color="1"></path>
//     </g></svg>
            </div>
            <div><h3 className="temoignage-title">{nomAffiche}</h3></div>
            <p className="temoignage-description">{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TemoignagesCard;
