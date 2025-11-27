export type BibleVersion = 'NVI' | 'AA';

export interface BibleVerse {
  number: number;
  text: string;
}

export interface BibleChapter {
  number: number;
  verses: BibleVerse[];
}

export interface BibleBook {
  name: string;
  chapters: BibleChapter[];
}

export interface BibleData {
  [key: string]: { // Version key (NVI, AA)
    name: string;
    books: BibleBook[];
  };
}

// Sample data with a few chapters for demonstration
export const BIBLE_DATA: BibleData = {
  NVI: {
    name: 'Nova Versão Internacional',
    books: [
      {
        name: 'Gênesis',
        chapters: [
          {
            number: 1,
            verses: [
              { number: 1, text: "No princípio Deus criou os céus e a terra." },
              { number: 2, text: "Era a terra sem forma e vazia; trevas cobriam a face do abismo, e o Espírito de Deus se movia sobre a face das águas." },
              { number: 3, text: "Disse Deus: \"Haja luz\", e houve luz." },
              { number: 4, text: "Deus viu que a luz era boa, e separou a luz das trevas." },
              { number: 5, text: "Deus chamou à luz dia, e às trevas chamou noite. Passaram-se a tarde e a manhã; esse foi o primeiro dia." },
              { number: 6, text: "Depois disse Deus: \"Haja entre as águas um firmamento que separe águas de águas\"." },
              { number: 7, text: "Então Deus fez o firmamento e separou as águas que ficaram abaixo do firmamento das que ficaram por cima. E assim foi." },
              { number: 8, text: "Ao firmamento Deus chamou céu. Passaram-se a tarde e a manhã; esse foi o segundo dia." }
            ]
          }
        ]
      },
      {
        name: 'Salmos',
        chapters: [
          {
            number: 23,
            verses: [
              { number: 1, text: "O Senhor é o meu pastor; de nada terei falta." },
              { number: 2, text: "Em verdes pastagens me faz repousar e me conduz a águas tranquilas;" },
              { number: 3, text: "restaura-me o vigor. Guia-me nas veredas da justiça por amor do seu nome." },
              { number: 4, text: "Mesmo quando eu andar por um vale de trevas e morte, não temerei perigo algum, pois tu estás comigo; a tua vara e o teu cajado me protegem." },
              { number: 5, text: "Preparas um banquete para mim à vista dos meus inimigos. Tu unges a minha cabeça com óleo, e o meu cálice transborda." },
              { number: 6, text: "Sei que a bondade e a fidelidade me acompanharão todos os dias da minha vida, e voltarei à casa do Senhor enquanto eu viver." }
            ]
          }
        ]
      },
      {
        name: 'João',
        chapters: [
          {
            number: 3,
            verses: [
              { number: 16, text: "Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna." },
              { number: 17, text: "Pois Deus enviou o seu Filho ao mundo, não para condenar o mundo, mas para que este fosse salvo por meio dele." },
              { number: 18, text: "Quem nele crê não é condenado, mas quem não crê já está condenado, por não crer no nome do Filho Unigênito de Deus." }
            ]
          }
        ]
      }
    ]
  },
  AA: {
    name: 'Almeida Atualizada',
    books: [
      {
        name: 'Gênesis',
        chapters: [
          {
            number: 1,
            verses: [
              { number: 1, text: "No princípio criou Deus os céus e a terra." },
              { number: 2, text: "A terra era sem forma e vazia; e havia trevas sobre a face do abismo, mas o Espírito de Deus pairava sobre a face das águas." },
              { number: 3, text: "Disse Deus: haja luz. E houve luz." },
              { number: 4, text: "Viu Deus que a luz era boa; e fez separação entre a luz e as trevas." },
              { number: 5, text: "E Deus chamou à luz Dia, e às trevas chamou Noite. E foi a tarde e a manhã, o dia primeiro." },
              { number: 6, text: "E disse Deus: Haja uma expansão no meio das águas, e haja separação entre águas e águas." },
              { number: 7, text: "E fez Deus a expansão, e fez separação entre as águas que estavam debaixo da expansão e as águas que estavam sobre a expansão. E assim foi." },
              { number: 8, text: "E chamou Deus à expansão Céus, e foi a tarde e a manhã, o dia segundo." }
            ]
          }
        ]
      },
      {
        name: 'Salmos',
        chapters: [
          {
            number: 23,
            verses: [
              { number: 1, text: "O Senhor é o meu pastor, nada me faltará." },
              { number: 2, text: "Deitar-me faz em verdes pastos, guia-me mansamente a águas tranqüilas." },
              { number: 3, text: "Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome." },
              { number: 4, text: "Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam." },
              { number: 5, text: "Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda." },
              { number: 6, text: "Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do Senhor por longos dias." }
            ]
          }
        ]
      },
      {
        name: 'João',
        chapters: [
          {
            number: 3,
            verses: [
              { number: 16, text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna." },
              { number: 17, text: "Porque Deus enviou o seu Filho ao mundo, não para que condenasse o mundo, mas para que o mundo fosse salvo por ele." },
              { number: 18, text: "Quem crê nele não é condenado; mas quem não crê já está condenado, porquanto não crê no nome do unigênito Filho de Deus." }
            ]
          }
        ]
      }
    ]
  }
};