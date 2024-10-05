const QuestionsList = [
    // N1: Anxiety
    { text: "心配性だ", isReverse: false, facet: "N1: Anxiety" },
    { text: "最悪の結果を恐れがちだ", isReverse: false, facet: "N1: Anxiety" },
    { text: "さまざまなことに対して不安がある", isReverse: false, facet: "N1: Anxiety" },
    { text: "ストレスを感じやすい", isReverse: false, facet: "N1: Anxiety" },

    // N5: Impulsiveness
    { text: "暴飲暴食をしがちだ", isReverse: false, facet: "N5: Impulsiveness" },
    { text: "羽目を外すことはめったにない", isReverse: true, facet: "N5: Impulsiveness" },  // (R)
    { text: "誘惑に打ち勝つことは簡単だ", isReverse: true, facet: "N5: Impulsiveness" },    // (R)
    { text: "欲求をコントロールできるほうだ", isReverse: true, facet: "N5: Impulsiveness" },  // (R)

    // E4: Activity
    { text: "いつも忙しいほうだ", isReverse: false, facet: "E4: Activity" },
    { text: "いつも働き詰めだ", isReverse: false, facet: "E4: Activity" },
    { text: "自由時間にはたくさんのことをするほうだ", isReverse: false, facet: "E4: Activity" },
    { text: "気楽にやることが好きだ", isReverse: true, facet: "E4: Activity" },  // (R)

    // O4: Actions
    { text: "いつも同じよりも変化に富むことを好む", isReverse: false, facet: "O4: Actions" },
    { text: "知っている世界から出たくない", isReverse: true, facet: "O4: Actions" },  // (R)
    { text: "変化を好まない", isReverse: true, facet: "O4: Actions" },  // (R)
    { text: "伝統的なやり方に固執しがちだ", isReverse: true, facet: "O4: Actions" },  // (R)

    // A1: Trust
    { text: "他人を信頼するほうだ", isReverse: false, facet: "A1: Trust" },
    { text: "人はみな善意を持っていると思う", isReverse: false, facet: "A1: Trust" },
    { text: "人々が言うことは信じるほうだ", isReverse: false, facet: "A1: Trust" },
    { text: "他人は信用しないほうだ", isReverse: true, facet: "A1: Trust" },  // (R)

    // A5: Modesty
    { text: "自分は他人よりも優れていると思う", isReverse: true, facet: "A5: Modesty" },  // (R)
    { text: "自尊心は高いほうだ", isReverse: true, facet: "A5: Modesty" },  // (R)
    { text: "自己評価は高いほうだ", isReverse: true, facet: "A5: Modesty" },  // (R)
    { text: "自慢しがちだ", isReverse: true, facet: "A5: Modesty" },  // (R)

    // C1: Competence
    { text: "仕事は完璧にこなすほうだ", isReverse: false, facet: "C1: Competence" },
    { text: "得意なことを仕事にしている", isReverse: false, facet: "C1: Competence" },
    { text: "仕事はスムーズにこなすほうだ", isReverse: false, facet: "C1: Competence" },
    { text: "要領が良いほうだ", isReverse: false, facet: "C1: Competence" },

    // C2: Order
    { text: "きれい好きだ", isReverse: false, facet: "C2: Order" },
    { text: "ものを所定の位置に戻すことを忘れがちだ", isReverse: true, facet: "C2: Order" }, // (R)
    { text: "自分の部屋は散らかりがちだ", isReverse: true, facet: "C2: Order" },  // (R)
    { text: "自分の所有物を放置しがちだ", isReverse: true, facet: "C2: Order" },  // (R)

    // C3: Dutifulness
    { text: "約束は守るほうだ", isReverse: false, facet: "C3: Dutifulness" },
    { text: "本当のことを言うほうだ", isReverse: false, facet: "C3: Dutifulness" },
    { text: "規則を破りがちだ", isReverse: true, facet: "C3: Dutifulness" },  // (R)
    { text: "約束を反故にしがちだ", isReverse: true, facet: "C3: Dutifulness" },  // (R)

    // C4: Achievement Striving
    { text: "一生懸命に働くほうだ", isReverse: false, facet: "C4: Achievement Striving" },
    { text: "求められている以上のことをしがちだ", isReverse: false, facet: "C4: Achievement Striving" },
    { text: "必要最低限のことだけをするほうだ", isReverse: true, facet: "C4: Achievement Striving" },  // (R)
    { text: "仕事に時間や労力を割きたくない", isReverse: true, facet: "C4: Achievement Striving" },  // (R)

    // C5: Self-discipline
    { text: "いつも準備万端だ", isReverse: false, facet: "C5: Self-discipline" },
    { text: "自分の計画はうまく実行できるほうだ", isReverse: false, facet: "C5: Self-discipline" },
    { text: "時間を浪費しがちだ", isReverse: true, facet: "C5: Self-discipline" },  // (R)
    { text: "仕事を始めることは難しい", isReverse: true, facet: "C5: Self-discipline" },  // (R)

    // C6: Deliberation
    { text: "考えなしに行動しがちだ", isReverse: true, facet: "C6: Deliberation" },  // (R)
    { text: "衝動的な意思決定をしがちだ", isReverse: true, facet: "C6: Deliberation" },  // (R)
    { text: "慌てて行動しがちだ", isReverse: true, facet: "C6: Deliberation" },  // (R)
    { text: "考えなしに行動するほうだ", isReverse: true, facet: "C6: Deliberation" },  // (R)
];

export default QuestionsList;
