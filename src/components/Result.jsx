import React from 'react';
import facetDescriptions from './FacetDescriptions';  // ファセットの具体例をインポート
import QuestionsList from './QuestionsList';  // 質問リストをインポート

// スコアが高いと見なされる閾値
const HIGH_SCORE_THRESHOLD = 4;
const LOW_SCORE_THRESHOLD = 2.5;

// スコアへの影響を反映するマッピング
const scoreImpact = {
  "N1: Anxiety": -1,  // 高いとマイナス
  "N5: Impulsiveness": -1,  // 高いとマイナス
  "E4: Activity": 1,  // 高いとプラス
  "O4: Actions": 1,  // 高いとプラス
  "A1: Trust": 1,  // 高いとプラス
  "A5: Modesty": -1,  // 高いとマイナス
  "C1: Competence": 1,  // 高いとプラス
  "C2: Order": 1,  // 高いとプラス
  "C3: Dutifulness": 1,  // 高いとプラス
  "C4: Achievement Striving": 1,  // 高いとプラス
  "C5: Self-discipline": 1,  // 高いとプラス
  "C6: Deliberation": 1  // 高いとプラス
};

// 正規分布に基づいた最終結果メッセージの決定ロジック
const getFinalResultMessage = (totalScore) => {
  const mean = 18;  // 平均
  const stdDev = 6;  // 標準偏差

  if (totalScore >= mean + 3 * stdDev) { // 18 + 18 = 36  (最上位)
    return "あなた様々な面において、非常に優秀な起業家としての素質を持っています。強いリーダーシップと自信を持ってベンチャーに挑戦しましょう。";
  } else if (totalScore >= mean + 2 * stdDev) { // 18 + 12 = 30
    return "あなたは、優秀な起業家として成功する素質があります。いくつかの弱点を補うことで、仲間と一緒に成功する確率が高まります。計画的に行動し、積極的に挑戦しましょう。";
  } else if (totalScore >= mean + stdDev) { // 18 + 6 = 24
    return "あなたは、起業家としての素質を多少は持っており、成功する可能性は小〜中程度です。リスクを恐れず、仲間と協力してベンチャーを立ち上げましょう。";
  } else if (totalScore >= mean) { // 18
    return "あなたは、起業家ではなく一般人の性質を持っています。起業を考える場合、慎重な計画が必要ですが、適切なサポートを得ることで成功する可能性はあります。";
  } else if (totalScore >= mean - stdDev) { // 18 - 6 = 12
    return "あなたは、やや起業家としての素質が不足しているかもしれません。起業を考える場合、ライバルとの差別化の徹底、リスク管理と十分な準備が必要です。周りのサポートを積極的に求めましょう。";
  } else if (totalScore >= mean - 2 * stdDev) { // 18 - 12 = 6
    return "あなたは、起業に向いているとは言い難いです。起業する際は、慎重な計画と信頼できるパートナーが不可欠です。準備が整っていない場合、リスクを最小限に抑えましょう。";
  } else if (totalScore >= mean - 3 * stdDev) { // 18 - 18 = 0
    return "あなたは、起業家としての素質がかなり低いです。起業を考えるよりも、他のキャリアパスや安定した仕事を選ぶ方が賢明かもしれません。";
  } else { // totalScore < mean - 3 * stdDev (0以下)
    return "あなたは、起業には全く向いていない可能性があります。現在の状況では、起業は非常にリスクが高く、他の選択肢を検討することを強くお勧めします。";
  }
};

function Result({ answers }) {
  // ファセットごとのスコアを計算
  const calculateFacetScores = () => {
    const facetIndices = {
      "N1: Anxiety": [0, 1, 2, 3],
      "N5: Impulsiveness": [4, 5, 6, 7],
      "E4: Activity": [8, 9, 10, 11],
      "O4: Actions": [12, 13, 14, 15],
      "A1: Trust": [16, 17, 18, 19],
      "A5: Modesty": [20, 21, 22, 23],
      "C1: Competence": [24, 25, 26, 27],
      "C2: Order": [28, 29, 30, 31],
      "C3: Dutifulness": [32, 33, 34, 35],
      "C4: Achievement Striving": [36, 37, 38, 39],
      "C5: Self-discipline": [40, 41, 42, 43],
      "C6: Deliberation": [44, 45, 46, 47]
    };

    const facetScores = {};
    let totalScore = 0; // 総合得点を計算

    // 各ファセットのスコアを計算
    Object.keys(facetIndices).forEach(facet => {
      const indices = facetIndices[facet];
      let totalFacetScore = 0;

      // 各質問のスコアを取得
      indices.forEach(index => {
        let score = answers[index] || 0;  // 回答スコアを取得

        // リバーススコアの場合、スコアを反転させる
        if (QuestionsList[index].isReverse) {
          score = 6 - score;  // リバース: 1→5, 2→4, 3→3, 4→2, 5→1
        }

        totalFacetScore += score;
      });

      const averageFacetScore = totalFacetScore / indices.length;
      facetScores[facet] = averageFacetScore;

      // スコアへの影響に基づいてプラスまたはマイナスを計算
      const impact = scoreImpact[facet] || 1; // デフォルトはプラス
      totalScore += averageFacetScore * impact; // 影響を反映して総合得点に加算
    });

    return { facetScores, totalScore };
  };

  const { facetScores, totalScore } = calculateFacetScores();
  const finalResultMessage = getFinalResultMessage(totalScore); // 最終結果メッセージを取得

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">検査結果</h2>
      <ul className="mb-6">
        {Object.keys(facetScores).map(facet => {
          const score = facetScores[facet];
          const description = facetDescriptions[facet];

          // スコアへの影響に基づいて結果を逆転
          const impact = scoreImpact[facet] || 1;
          const isPositive = impact === 1;

          return (
            <li key={facet} className="mb-4">
              <h3 className="text-xl font-medium text-gray-700">{description.name} (スコア: {score.toFixed(2)})</h3>
              {isPositive ? (
                <>
                  {score >= HIGH_SCORE_THRESHOLD && <p className="text-green-600">{description.highScoreExample}</p>}
                  {score < LOW_SCORE_THRESHOLD && <p className="text-red-600">{description.lowScoreExample}</p>}
                </>
              ) : (
                <>
                  {score >= HIGH_SCORE_THRESHOLD && <p className="text-red-600">{description.lowScoreExample}</p>}
                  {score < LOW_SCORE_THRESHOLD && <p className="text-green-600">{description.highScoreExample}</p>}
                </>
              )}
            </li>
          );
        })}
      </ul>

      {/* 総合得点と最終結果の表示 */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">総合得点: {totalScore.toFixed(2)}</h2>
      <p className="text-lg text-gray-700">{finalResultMessage}</p>
    </div>
  );
}

export default Result;
