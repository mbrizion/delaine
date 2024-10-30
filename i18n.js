import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Translation files
// i18n configuration
const resources = {
  en: {
    translation: {
      pottery: 'Ceramics',
      crochet: 'Crochet',
      contact: 'Contact',
      welcome: 'Handmade ceramics & crochet made in Normandy',
      subtitle: '',
      siteTitle: "De laine et d'argile",
      potteryPageTitle: "Delaine & D'argile - Ceramics",
      potteryDescription: 'Bring a special touch to your home.',
      potteryDescriptionP2:
        "I'm creating wheel thrown ceramics in my home studio (aka my parents' garage). Never making the same piece twice, each piece is entierly unique and one of a kind. Each collection is created in small batches throughout different periods of my life, ebbing and flowing along with me. My intention is to create pieces that can be cherished in your home.",
      categoryTitle: '{{title}}',
      ourStory: '',
      ourStoryDescription: '',
      ourMission: '',
      ourMissionDescription: '',
      contactMe: 'Contact me',
      inquiries: 'For all inquiries feel free to reach out at :',
      checkInstagram: 'My instagram',
      dmInsta: 'Or DM me on instagram :',
      process: 'The process',
      shop: 'Shop',
    },
  },
  fr: {
    translation: {
      pottery: 'Poterie',
      crochet: 'Crochet',
      contact: 'Contact',
      welcome: 'Céramique artisanale & crochet made in Normandie',
      subtitle:
        'Découvrez notre passion pour l’artisanat à travers des créations uniques faites main. Que vous soyez amateur de poterie ou adepte du crochet, nous vous invitons à explorer nos collections de pièces artistiques et utilitaires, conçues avec soin et amour du détail.',
      siteTitle: "De laine et d'argile",
      potteryPageTitle: "Delaine & D'argile - Poterie",
      potteryDescription: 'Apportez une touche spéciale à votre intérieur.',
      potteryDescriptionP2:
        'Je crée des céramiques tournées à la main dans mon atelier à domicile. Ne créant jamais deux fois la même pièce, chaque création est entièrement unique. Chaque collection est produite en petites séries à différentes périodes de ma vie, évoluant au rythme de mon parcours. Mon intention est de créer des pièces qui pourront être chéries dans votre foyer.',
      categoryTitle: '{{title}}',
      ourStory: 'Notre histoire',
      ourStoryDescription:
        'Nous sommes une petite équipe d’artisans passionnés qui partagent une même vision : valoriser les techniques artisanales anciennes en les modernisant à travers des designs contemporains. Depuis plusieurs années, nous créons des objets de poterie et des pièces en crochet qui racontent une histoire, celle d’un savoir-faire minutieux et d’une créativité sans limite.',
      ourMission: 'Notre mission',
      ourMissionDescription:
        "Faire entrer l’art dans votre quotidien. Nous croyons en l’importance des objets faits main, en leur capacité à embellir la vie et à raconter des histoires. Chaque pièce est unique, façonnée avec attention pour apporter une touche d'authenticité à votre intérieur.",
      contactMe: 'Contactez-moi',
      inquiries:
        "Pour toute question ou projet, n'hésitez pas à me contacter par mail :",
      checkInstagram: 'Découvrez notre Instagram',
      dmInsta: 'ou sur instagram :',
      shop: 'Boutique',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
