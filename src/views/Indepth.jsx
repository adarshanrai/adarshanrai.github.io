import React from 'react';

const INDEPTH_DATA = {
  Rai: {
    title: "Rai (Kirat Rai)",
    subtitle: "Pioneers of the Himalayas & Custodians of Mundhum",
    script: "Dhamu Script / Devanagari",
    location: "Eastern Nepal, Sikkim, Darjeeling, and Kalimpong",
    intro: "The Rai people are one of the most ancient ethnolinguistic groups of the Eastern Himalayas. Their life, customs, and beliefs are guided by 'Mundhum', an ancient oral body of scripture and philosophical thought that emphasizes ancestral worship and harmony with nature.",
    history: {
      title: "Origins & Geographic Footprint",
      text: "The Rai belong to the Kirat coalition, whose history in the Himalayan foothills dates back thousands of years. They settled along the fertile valleys and high ridges of the Koshi river basin. Historically self-governing clans, they developed distinct regional dialects. Today, Sikkim serves as a vibrant cultural center where the Rai community preserves their unique lineage.",
      image: "https://i.pinimg.com/736x/8b/9c/90/8b9c906b6069498f3a2ff034263d7496.jpg"
    },
    culture: {
      title: "Udhauli, Ubhauli & Sakela Rituals",
      text: "Nature defines Rai rituals. Ubhauli is celebrated in spring to seek blessings for agricultural crops before the sowing season, while Udhauli in winter marks the descent of birds and animals from the cold mountains. Central to these is the Sakela dance—performed in large circles to the beats of the Dhol (drum) and Jhyamta (cymbals), mimicking birds, insects, and farming activities.",
      image: "https://i.pinimg.com/736x/70/2d/0a/702d0afe85b2a24a0635e89c59dee5d8.jpg"
    },
    language: {
      title: "Linguistic Heritage & Kirat Scripts",
      text: "The Rai language belongs to the Tibeto-Burman family. Uniquely, the Rai group consists of over 30 distinct dialects, such as Bantawa, Chamling, and Khaling. The Dhamu script has been preserved through ancient texts, and modern educational programs in Sikkim continue to transcribe and teach these rich vocabularies in local schools.",
      image: "https://i.pinimg.com/736x/62/de/e4/62dee4b1f2460bc195f3345d0256393f.jpg"
    }
  },
  Bhutia: {
    title: "Bhutia (Lhopo)",
    subtitle: "Guardians of Vajrayana Buddhism & Sikkimese Royalty",
    script: "Tibetan Script (Uchen / Ume)",
    location: "Sikkim, Darjeeling, Bhutan, and Tibet borders",
    intro: "The Bhutias, historically known as the Lhopo, migrated to Sikkim from Tibet around the 15th century. Practitioners of Tibetan Buddhism, they played a central role in establishing the Namgyal dynasty (Chogyal rulers) of Sikkim, shaping the state's cultural and political history.",
    history: {
      title: "The Lhopo Migration & Kingdom",
      text: "Guided by sacred prophecies, Bhutias migrated southward across the high passes of the eastern Himalayas, settling in the valleys of Sikkim. Under the treaty of Lo-Men-Chong, they entered into a sacred blood brotherhood with the Lepchas. Their settlements feature large stone houses, Buddhist shrines (Chortens), and terrace farming setups.",
      image: "https://i.pinimg.com/736x/1e/60/1e/1e601edd2378dc08ea79049f419dc2d1.jpg"
    },
    culture: {
      title: "Monastic Dances & Winter New Year",
      text: "Bhutia festivals are vibrant, religious, and community-centered. Losar marks the Buddhist New Year, celebrated with family feasts and prayer flags. During Pang Lhabsol, the community worships Mount Khangchendzonga as a protective deity, featuring the 'Chaam'—spectacular masked dances performed by monks in monastery courtyards.",
      image: "https://i.pinimg.com/736x/a8/40/42/a840423834d9ee7b01cc03ca6b7ad593.jpg"
    },
    language: {
      title: "Sikkimese Lhoke & Literary Tradition",
      text: "The Bhutia speak Sikkimese (Lhoke), a Tibetic language closely related to Dzongkha. Written in the classical Tibetan Uchen script, their language contains a rich corpus of religious, medical, and historical literature. Monasteries serve as vital repositories, archiving ancient manuscripts written on handmade woodblock paper.",
      image: "https://i.pinimg.com/736x/cf/1f/98/cf1f98a76eb2cbe481ded81c946c6bea.jpg"
    }
  },
  Subba: {
    title: "Subba (Limbu)",
    subtitle: "Pioneers of Limbuwan & Masters of Chyabrung Beats",
    script: "Sirijunga Script",
    location: "Eastern Nepal, Sikkim, and West Bengal Hills",
    intro: "The Subba, or Limbu (Yakthung), are an ancient indigenous group belonging to the Kirati coalition. They have a proud warrior heritage, a unique script, and a spiritual philosophy centered on Mundhum oral guidelines.",
    history: {
      title: "Limbuwan Borders & Autonomy",
      text: "The Limbus occupied a historical territory known as Limbuwan in the eastern Himalayas. They maintained high degrees of political autonomy through centuries by guarding their borders and trading. Limbu architecture is recognizable by the use of mud-and-stone houses decorated with wooden carvings.",
      image: "https://i.pinimg.com/736x/95/f6/94/95f6949311845afa37f21879adfdf7c1.jpg"
    },
    culture: {
      title: "Chyabrung Drumming & Social Ties",
      text: "Music and community dances are integral to Subba life. The Chyabrung (Ke) dance is a drum dance performed during weddings and housewarmings, where dancers mimic birds and wild animals in sync with the beat. They are also known for Tongba, a traditional warm millet brew shared as a symbol of hospitality.",
      image: "https://i.pinimg.com/736x/b2/22/dd/b222dd07eaf916e11fe75d3a574556dd.jpg"
    },
    language: {
      title: "Sirijunga Script Revival",
      text: "The Limbu language has its own writing system: the Sirijunga script, created in the 9th century and revived in the 18th century by scholar Te-ongsi Sirijunga. Today, Limbu is officially recognized in Sikkim, with textbooks, magazines, and radio broadcasts published in the Sirijunga script.",
      image: "https://i.pinimg.com/736x/5e/97/7c/5e977cdef9cd0fe1de6f1735dbb1f826.jpg"
    }
  },
  Tamang: {
    title: "Tamang",
    subtitle: "Masters of Wood Carving & Players of the Damphu",
    script: "Tam-Yig / Devanagari",
    location: "Sikkim, Central Hills of Nepal, Darjeeling, and Assam",
    intro: "The Tamang are one of the largest indigenous ethnic groups in the Himalayan region. Historically horse traders and warriors, they have developed a rich Buddhist culture combined with ancient shamanistic traditions.",
    history: {
      title: "Ancient Himalayan Horse Traders",
      text: "The word Tamang is derived from 'Ta' (horse) and 'Mang' (warrior/trader). They settled along the steep hills surrounding the Kathmandu valley and migrated across the Himalayas to Darjeeling and Sikkim in search of land. They are renowned builders, constructing temples and wood-carved houses.",
      image: "https://i.pinimg.com/736x/95/0f/65/950f6504f7e114febaef045889904afb.jpg"
    },
    culture: {
      title: "The Damphu Rhythm & Choho Festivals",
      text: "The core of Tamang music is the Damphu, a circular single-sided frame drum. According to legend, the Damphu was created to bring joy to a grieving wife. Tamang also celebrate Sonam Lhosar (Agricultural New Year) with house cleaning, monastery prayers, and group dances wearing traditional colorful caps.",
      image: "https://i.pinimg.com/736x/4f/9c/65/4f9c651fba95d6c5b4455515fe9d4b47.jpg"
    },
    language: {
      title: "Tam-Yig Writing & Animist Roots",
      text: "Tamang is a Tibeto-Burman language with distinct tones. Written in Devanagari and increasingly in the native Tam-Yig script, it is preserved by local community councils. Their spiritual life is guided by the 'Lama' (Buddhist priest) and 'Bonpo' (shamanic priest), protecting ancestral tales.",
      image: "https://i.pinimg.com/736x/fe/66/e6/fe66e635b1113fe5d3f861fae69a67dc.jpg"
    }
  }
};

export default function Indepth({ langName, setView }) {
  const data = INDEPTH_DATA[langName];

  // Fallback if language info doesn't exist
  if (!data) {
    return (
      <div className="bento-container">
        <div className="bento-header">
          <h2 className="community-info-title">Profile Not Found</h2>
          <button onClick={() => setView('translate')} className="bento-back-btn">
            <span className="material-symbols-outlined">arrow_back</span>
            <span>Back</span>
          </button>
        </div>
        <div className="glass-card bento-card">
          <p className="bento-card-text">We are currently compiling in-depth details for this language profile. Check back soon!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bento-container">
      {/* Header Row */}
      <div className="bento-header">
        <div>
          <span className="community-info-subtitle">Sikkim Indigenous Heritage</span>
          <h2 className="community-info-title" style={{ fontSize: '1.75rem', marginTop: '4px' }}>{data.title}</h2>
        </div>
        <button onClick={() => setView('translate')} className="bento-back-btn">
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
          <span>Back</span>
        </button>
      </div>

      {/* Bento Grid layout */}
      <div className="bento-grid">
        
        {/* Intro Banner - Full Width (3 Columns) */}
        <div className="glass-card bento-card bento-col-3" style={{ borderLeft: '4px solid var(--primary)' }}>
          <div className="bento-card-header">
            <span className="material-symbols-outlined bento-card-icon">diversity_3</span>
            <h3 className="bento-card-title">{data.subtitle}</h3>
          </div>
          <p className="bento-card-text" style={{ fontSize: '14.5px', marginTop: '0.5rem' }}>
            {data.intro}
          </p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid var(--outline)', paddingTop: '0.85rem', marginTop: '0.5rem' }}>
            <div>
              <span className="stat-label">Traditional Script</span>
              <div className="stat-value" style={{ color: 'var(--primary)', marginTop: '2px' }}>{data.script}</div>
            </div>
            <div>
              <span className="stat-label">Core Settlement</span>
              <div className="stat-value" style={{ color: 'var(--secondary)', marginTop: '2px' }}>{data.location}</div>
            </div>
          </div>
        </div>

        {/* Box 1: History - 2 Columns wide */}
        <div className="glass-card bento-card bento-col-2 bento-row-layout">
          <div className="bento-card-text-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <div className="bento-card-header">
              <span className="material-symbols-outlined bento-card-icon">history_edu</span>
              <h3 className="bento-card-title">{data.history.title}</h3>
            </div>
            <p className="bento-card-text" style={{ margin: '0.75rem 0' }}>
              {data.history.text}
            </p>
          </div>
          <div className="bento-card-image-wrap bento-card-img-col" style={{ height: '430px', maxHeight: '340px' }}>
            <img 
              src={data.history.image} 
              alt={data.history.title} 
              className="bento-card-image" 
              style={{ objectPosition: 'top' }}
            />
          </div>
        </div>

        {/* Box 2: Spotlights / Festivals - 1 Column wide */}
        <div className="glass-card bento-card bento-col-1">
          <div className="bento-card-header">
            <span className="material-symbols-outlined bento-card-icon">theater_comedy</span>
            <h3 className="bento-card-title">{data.culture.title}</h3>
          </div>
          <div className="bento-card-image-wrap" style={{ margin: '0.5rem 0', height: '110px', maxHeight: '110px' }}>
            <img src={data.culture.image} alt={data.culture.title} className="bento-card-image" />
          </div>
          <p className="bento-card-text" style={{ fontSize: '12.5px' }}>
            {data.culture.text}
          </p>
        </div>

        {/* Box 3: Language nuances - 3 Columns wide */}
        <div className="glass-card bento-card bento-col-3 bento-row-layout">
          <div className="bento-card-image-wrap" style={{ flex: '1 1 35%' }}>
            <img src={data.language.image} alt={data.language.title} className="bento-card-image" />
          </div>
          <div style={{ flex: '1 1 65%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '0.5rem' }}>
            <div className="bento-card-header">
              <span className="material-symbols-outlined bento-card-icon">spellcheck</span>
              <h3 className="bento-card-title">{data.language.title}</h3>
            </div>
            <p className="bento-card-text" style={{ marginTop: '0.75rem' }}>
              {data.language.text}
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <button onClick={() => setView('translate')} className="learn-more-btn" style={{ margin: 0 }}>
                <span>Back to Workspace</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>translate</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
