export interface Act {
  /**
   * 0: 서막, 1 ... n
   */
  index: number;
  /**
   * 액트 제목
   */
  title: string;
  /**
   * 액트에 포함된 챕터 정보
   */
  chapters: Chapter[];
}

export interface Chapter {
  /**
   * 챕터 정보
   */
  index: number;
}

// 퀘스트 종류: 메인, 서브, 일일, 주간, 세력

export const enum QuestType {

}

// export const enum Quest {

// }

export interface Quest {
  type: `메인` | `서브` | `일일` | `주간` | `세력`;
  name: ``;
}
