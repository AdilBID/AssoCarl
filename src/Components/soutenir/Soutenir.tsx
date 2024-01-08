import React from "react";

interface Section {
  title: string;
  link: string;
  subtitles?: string;
  content: string;
}

const Soutenir: React.FC = () => {
  const sections: Section[] = [
    {
      title: "Adhérer pour 1 euro",
      link: "https://www.helloasso.com/associations/association-carl/adhesions/adherer-a-l-association-carl",
      subtitles: "Adhérer à notre association = soutenir notre cause",
      content:
        "C'est pourquoi nous avons volontairement fixé un tarif annuel symbolique d'1€. Le fait d'adhérer ne vous oblige à rien. C'est simplement un soutien de votre part, car plus d'adhérents nous avons, et plus forte est notre voix !",
    },
    {
      title: "Faire un don unique",
      link: "https://www.helloasso.com/associations/association-carl/formulaires/1",
      subtitles: "Il n'y a pas de petit don, pas de petite contribution !",
      content:
        "Vous pouvez faire un don à l'association à partir de 0,50 centimes d'euro. ATTENTION : la contribution à la plateforme de dons (HelloAsso) n'est pas obligatoire, il suffit de remplacer le montant qui vous est proposé par 0.",
    },
    {
      title: "Mettre en place un don mensuel",
      link: "https://www.helloasso.com/associations/association-carl/formulaires/1",
      subtitles: "",
      content:
        "Il est possible de mettre en place un don mensuel du montant de votre choix, à partir de 0,50 centimes d'euro, sans engagement et résiliable à tout moment. Nous priorisons ce format de dons qui nous permet de budgétiser nos fonds et de construire nos actions sur la base prévisionnelle de ceux-ci. ATTENTION : la contribution à la plateforme de dons (HelloAsso) n'est pas obligatoire, il suffit de remplacer le montant qui vous est proposé par 0.",
    },
    {
      title: "Devenir partenaire",
      link: "mailto:contact@associationcarl.com",
      subtitles: "",
      content:
        "Vous exercez une profession et souhaitez nous reverser un pourcentage de vos bénéfices ? Vous êtes un groupe d'étudiants et avez pour projet de lever des fonds pour notre association ? Vous pouvez nous écrire en nous exposant votre idée à contact@associationcarl.com.",
    },
    {
      title: "S'engager comme bénévole",
      link: "mailto:contact@associationcarl.com",
      subtitles: "",
      content:
        "Nous organisions régulièrement des campagnes de recrutement pour les postes d'écoutants téléphoniques. Pour ne rien manquer, restez connectés sur nos réseaux sociaux où nous vous tiendrons informés. Le recrutement des psychologues et avocats partenaires s'effectue quant à lui en continu. Si l'idée de travailler bénévolement à nos côtés vous tente, merci de nous écrire avec votre CV, vos disponibilités (quelques heures par mois suffisent), et vos coordonnées (téléphone, ville de résidence) par mail à contact@associationcarl.com.",
    },
    {
      title: "Partager pour sensibiliser",
      link: "https://www.instagram.com/associationcarl",
      subtitles: "",
      content:
        "Vous n'avez pas les moyens de faire un don, ou vous les avez et souhaitez faire plus pour nous aider ? Pour ce faire, nous vous invitons à partager le plus régulièrement possible nos publications Instagram, Facebook, et twitter, postées sur @associationcarl et @steffylosophie. Notre credo : Partager c'est sensibiliser ! Et c'est gratuit !",
    },
    {
      title: "Témoigner",
      link: "mailto:contact@associationcarl.com ",
      subtitles: "",
      content:
        "Vous souhaitez libérer votre parole et témoigner des maltraitances (psychologiques, physiques, ou sexuelles) que vous avez subies enfant ? Nous recueillons votre parole en interne et postons vos témoignages sur nos réseaux sociaux (veillez à bien nous préciser si vous souhaitez rester anonyme). Pour ce faire, vous pouvez soit nous adresser votre témoignage écrit par mail à contact@associationcarl.com, soit une vidéo (via la plateforme WeTransfer) également par mail à contact@associationcarl.com. Pensez à nous laisser vos coordonnées !",
    },
  ];

  const renderContent = (content: string, sectionIndex: number) => {
    const parts = content.split(/(contact@associationcarl.com|@associationcarl|@steffylosophie|Pensez à nous laisser vos coordonnées !|Le recrutement des psychologues et avocats partenaires s'effectue quant à lui en continu.|ATTENTION : la contribution à la plateforme de dons \(HelloAsso\) n'est pas obligatoire, il suffit de remplacer le montant qui vous est proposé par 0\.)/);

    return parts.map((part, partIndex) => {
      if (part === "contact@associationcarl.com") {
        return <a key={`${sectionIndex}-${partIndex}`} href="mailto:contact@associationcarl.com" className="email-link">{part}</a>;
      } else if (part === "ATTENTION : la contribution à la plateforme de dons (HelloAsso) n'est pas obligatoire, il suffit de remplacer le montant qui vous est proposé par 0.") {
        return (<span key={`${sectionIndex}-${partIndex}`} className="warning"><br />{part}</span>);
      }else if (part === "Le recrutement des psychologues et avocats partenaires s'effectue quant à lui en continu.") {
        return <span key={`${sectionIndex}-${partIndex}`} className="highlighted-text">{part}</span>;
      } else if (part === "@associationcarl" || part === "@steffylosophie") {
        return <span key={`${sectionIndex}-${partIndex}`} className="special-text">{part}</span>;
      }else if (part === "Pensez à nous laisser vos coordonnées !") {
        return <span key={`${sectionIndex}-${partIndex}`} className="thinking-text">{part}</span>;
      } 
       else {
        return part;
      }
    });
  };

  return (
    <div className="support">
      <div className="support-intro">
        <h1>Comment<br></br>nous soutenir ?</h1>
        <p>
          C'est LA QUESTION que vous nous posez quotidiennement. Vous trouverez
          ici un récapitulatif de ce qu'il est possible de faire, à différents
          niveaux, pour nous aider. Nous vous sommes très reconnaissants pour
          votre soutien.
        </p>
      </div>

      <div className="support-options">
        {sections.map((section, index) => (
          <div key={index} className="support-item">
            <h2>
              <a href={section.link}>{section.title}</a>
            </h2>
            {section.subtitles && <h3>{section.subtitles}</h3>}
            <p>{renderContent(section.content, index)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Soutenir;
