// pages/NotreEquipe.tsx
import React from 'react';
import { img_1, img_2, img_3, img_4, img_5, img_6, facebook, instagram, linkedin, twitter, } from '../../assets/index';

const Equipe: React.FC = () => {
    return (
        <div className="asso__equipe section__padding" id="equipe">
            <div className="asso__equipe-heading">
                <h1>Notre équipe</h1>
                <h2>Humaine.Engagée.Solidaire.</h2>
                <p>Avec plus de 50 bénévoles, notre team travaille chaque jour à soutenir <br /> psychologiquement, juridiquement et socialement les victimes intrafamiliales</p>
            </div>
            <div className='asso__equipe_container'>
                {[
                    { img: img_1, nom: 'STEPHY', fonction: 'Fondatrice & Présidente', description: 'Responsable des pôles accompagnement des victimes & aide à la résilience', networks: { facebook: true, linkedin: true, twitter: true, instagram: true } },
                    { img: img_2, nom: 'JEANNE CHARPENTIER', fonction: 'Secretaire Générale', description: 'Responsable Partenariats Responsable Recrutement', networks: { facebook: true, linkedin: true, twitter: true, instagram: true } },
                    { img: img_3, nom: 'CLAIRE HEMMING', fonction: "Psychologue clinicienne à l'Aide Sociale à l'Enfance", description: 'Responsable Pôle soutien psychologique', networks: { facebook: false, linkedin: false, twitter: false, instagram: false } },
                    { img: img_4, nom: 'ISABELLE BRONZO', fonction: 'Diplôme de Notaire', description: 'Co-responsable des pôles partenariats & aide à la résilience', networks: { facebook: false, linkedin: false, twitter: false, instagram: false } },
                    { img: img_5, nom: 'Maître JULIE TAXIL', fonction: 'Docteur en Droit', description: "Avocate associée au bureau de M & Référente nationale de l'association", networks: { facebook: false, linkedin: true, twitter: false, instagram: true } },
                    { img: img_6, nom: 'Maître IAN OUAKNINE', fonction: 'Avocat associé au barreau de Paris', description: 'Directeur juridique & Trésorier', networks: { facebook: false, linkedin: true, twitter: false, instagram: false } },
                ].map((personne, index) => (
                    <div key={index} className="asso__equipe_container-item">
                        <div className="asso__equipe_container-image">
                            <img src={personne.img} alt={`img${index + 1}`} />
                        </div>
                        <div className='asso__equipe_container-div'>
                            <div className="asso__equipe_container-text">
                                <p className="nom">{personne.nom}</p>
                                <p className="fonction">{personne.fonction}</p>
                                <p className="description">{personne.description}</p>
                            </div>
                            {personne.networks && (
                                <div className="asso__equipe_container-text-icon">
                                    {personne.networks.facebook && <img src={facebook} alt={`facebook${index + 1}`} />}
                                    {personne.networks.linkedin && <img src={linkedin} alt={`linkedin${index + 1}`} />}
                                    {personne.networks.twitter && <img src={twitter} alt={`twitter${index + 1}`} />}
                                    {personne.networks.instagram && <img src={instagram} alt={`instagram${index + 1}`} />}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Equipe;
