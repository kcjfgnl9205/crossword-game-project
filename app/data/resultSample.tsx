export const sampleResultArr = [
  {
    id: 1,
    name: "JAVA",
    name_en: "java",
    parts: [
      {
        id: 100,
        name: "超入門",
        chapters: [
          {
            id: 101,
            name: "1章",
            title: "変数",
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : null,
                answers: [
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 80,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
          { 
            id: 102,
            name: "2章",
            title: "メソッド",
            score: 80,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 80,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                    { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                    { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                    { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                    { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                    { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  },
                  {
                    id: 1020,
                    times: 2,
                    score: 60,
                    correctCnt: 3,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "コンピュータに与える明確な指示を何と呼ぶか", answer:"プログラム", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "ソースコードを一括して実行可能な形式に翻訳し、コンピュータで実行するソフトウェアを何と呼ぶか", answer:"コンパイラ", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "プログラムの実行時に1行ずつ解釈し、コンピュータで実行するソフトウェアは何か", answer:"インタプリタ", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "ソースコードを記述したファイルを何と呼ぶか", answer:"ソースファイル", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.class」というファイルを何と呼ぶか", answer:"クラスファイル", isCorrect: true }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 60,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
          { 
            id: 103,
            name: "3章",
            title: "クラス",
            score: 80,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                    { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                    { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                    { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                    { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                    { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  },
                  {
                    id: 1020,
                    times: 2,
                    score: 60,
                    correctCnt: 3,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "コンピュータに与える明確な指示を何と呼ぶか", answer:"プログラム", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "ソースコードを一括して実行可能な形式に翻訳し、コンピュータで実行するソフトウェアを何と呼ぶか", answer:"コンパイラ", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "プログラムの実行時に1行ずつ解釈し、コンピュータで実行するソフトウェアは何か", answer:"インタプリタ", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "ソースコードを記述したファイルを何と呼ぶか", answer:"ソースファイル", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.class」というファイルを何と呼ぶか", answer:"クラスファイル", isCorrect: true }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
          { 
            id: 104,
            name: "総合",
            title: "総合",
            score: 80,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                    { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                    { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                    { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                    { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                    { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  },
                  {
                    id: 1020,
                    times: 2,
                    score: 60,
                    correctCnt: 3,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "コンピュータに与える明確な指示を何と呼ぶか", answer:"プログラム", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "ソースコードを一括して実行可能な形式に翻訳し、コンピュータで実行するソフトウェアを何と呼ぶか", answer:"コンパイラ", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "プログラムの実行時に1行ずつ解釈し、コンピュータで実行するソフトウェアは何か", answer:"インタプリタ", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "ソースコードを記述したファイルを何と呼ぶか", answer:"ソースファイル", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.class」というファイルを何と呼ぶか", answer:"クラスファイル", isCorrect: true }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
        ]
      }
    ]
  },
  {
    id: 2,
    name: "PHP",
    name_en: "php",
    parts: [
      {
        id: 200,
        name: "超入門",
        chapters: [
          {
            id: 201,
            name: "1章",
            title: "変数",
            score: 80,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 80,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                    { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                    { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                    { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                    { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                    { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  },
                  {
                    id: 1020,
                    times: 2,
                    score: 60,
                    correctCnt: 3,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "コンピュータに与える明確な指示を何と呼ぶか", answer:"プログラム", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "ソースコードを一括して実行可能な形式に翻訳し、コンピュータで実行するソフトウェアを何と呼ぶか", answer:"コンパイラ", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "プログラムの実行時に1行ずつ解釈し、コンピュータで実行するソフトウェアは何か", answer:"インタプリタ", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "ソースコードを記述したファイルを何と呼ぶか", answer:"ソースファイル", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.class」というファイルを何と呼ぶか", answer:"クラスファイル", isCorrect: true }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 202,
            name: "2章",
            title: "条件処理",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                    { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                    { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                    { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                    { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                    { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  },
                  {
                    id: 1020,
                    times: 2,
                    score: 60,
                    correctCnt: 3,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "コンピュータに与える明確な指示を何と呼ぶか", answer:"プログラム", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "ソースコードを一括して実行可能な形式に翻訳し、コンピュータで実行するソフトウェアを何と呼ぶか", answer:"コンパイラ", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "プログラムの実行時に1行ずつ解釈し、コンピュータで実行するソフトウェアは何か", answer:"インタプリタ", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "ソースコードを記述したファイルを何と呼ぶか", answer:"ソースファイル", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.class」というファイルを何と呼ぶか", answer:"クラスファイル", isCorrect: true }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 203,
            name: "3章",
            title: "クラス",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                    { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                    { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                    { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                    { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                    { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  },
                  {
                    id: 1020,
                    times: 2,
                    score: 60,
                    correctCnt: 3,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "コンピュータに与える明確な指示を何と呼ぶか", answer:"プログラム", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "ソースコードを一括して実行可能な形式に翻訳し、コンピュータで実行するソフトウェアを何と呼ぶか", answer:"コンパイラ", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "プログラムの実行時に1行ずつ解釈し、コンピュータで実行するソフトウェアは何か", answer:"インタプリタ", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "ソースコードを記述したファイルを何と呼ぶか", answer:"ソースファイル", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.class」というファイルを何と呼ぶか", answer:"クラスファイル", isCorrect: true }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 60,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 205,
            name: "総合",
            title: "総合",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                    { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                    { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                    { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                    { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                    { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  },
                  {
                    id: 1020,
                    times: 2,
                    score: 60,
                    correctCnt: 3,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "コンピュータに与える明確な指示を何と呼ぶか", answer:"プログラム", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "ソースコードを一括して実行可能な形式に翻訳し、コンピュータで実行するソフトウェアを何と呼ぶか", answer:"コンパイラ", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "プログラムの実行時に1行ずつ解釈し、コンピュータで実行するソフトウェアは何か", answer:"インタプリタ", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "ソースコードを記述したファイルを何と呼ぶか", answer:"ソースファイル", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.class」というファイルを何と呼ぶか", answer:"クラスファイル", isCorrect: true }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
        ]
      },
      {
        id: 201,
        name: "入門",
        chapters: [
          {
            id: 201,
            name: "1章",
            title: "変数",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                    { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                    { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                    { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                    { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                    { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  },
                  {
                    id: 1020,
                    times: 2,
                    score: 60,
                    correctCnt: 3,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "コンピュータに与える明確な指示を何と呼ぶか", answer:"プログラム", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "ソースコードを一括して実行可能な形式に翻訳し、コンピュータで実行するソフトウェアを何と呼ぶか", answer:"コンパイラ", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "プログラムの実行時に1行ずつ解釈し、コンピュータで実行するソフトウェアは何か", answer:"インタプリタ", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "ソースコードを記述したファイルを何と呼ぶか", answer:"ソースファイル", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.class」というファイルを何と呼ぶか", answer:"クラスファイル", isCorrect: true }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 202,
            name: "2章",
            title: "条件処理",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                    { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                    { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                    { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                    { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                    { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  },
                  {
                    id: 1020,
                    times: 2,
                    score: 60,
                    correctCnt: 3,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "コンピュータに与える明確な指示を何と呼ぶか", answer:"プログラム", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "ソースコードを一括して実行可能な形式に翻訳し、コンピュータで実行するソフトウェアを何と呼ぶか", answer:"コンパイラ", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "プログラムの実行時に1行ずつ解釈し、コンピュータで実行するソフトウェアは何か", answer:"インタプリタ", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "ソースコードを記述したファイルを何と呼ぶか", answer:"ソースファイル", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.class」というファイルを何と呼ぶか", answer:"クラスファイル", isCorrect: true }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 203,
            name: "3章",
            title: "クラス",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                    { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                    { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                    { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                    { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                    { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  },
                  {
                    id: 1020,
                    times: 2,
                    score: 60,
                    correctCnt: 3,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "コンピュータに与える明確な指示を何と呼ぶか", answer:"プログラム", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "ソースコードを一括して実行可能な形式に翻訳し、コンピュータで実行するソフトウェアを何と呼ぶか", answer:"コンパイラ", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "プログラムの実行時に1行ずつ解釈し、コンピュータで実行するソフトウェアは何か", answer:"インタプリタ", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "ソースコードを記述したファイルを何と呼ぶか", answer:"ソースファイル", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.class」というファイルを何と呼ぶか", answer:"クラスファイル", isCorrect: true }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 204,
            name: "4章",
            title: "継承",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                    { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                    { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                    { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                    { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                    { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  },
                  {
                    id: 1020,
                    times: 2,
                    score: 60,
                    correctCnt: 3,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "コンピュータに与える明確な指示を何と呼ぶか", answer:"プログラム", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "ソースコードを一括して実行可能な形式に翻訳し、コンピュータで実行するソフトウェアを何と呼ぶか", answer:"コンパイラ", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "プログラムの実行時に1行ずつ解釈し、コンピュータで実行するソフトウェアは何か", answer:"インタプリタ", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "ソースコードを記述したファイルを何と呼ぶか", answer:"ソースファイル", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.class」というファイルを何と呼ぶか", answer:"クラスファイル", isCorrect: true }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 299,
            name: "5章",
            title: "5章",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 80,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                    { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                    { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                    { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                    { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                    { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  },
                  {
                    id: 1020,
                    times: 2,
                    score: 60,
                    correctCnt: 3,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "コンピュータに与える明確な指示を何と呼ぶか", answer:"プログラム", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "ソースコードを一括して実行可能な形式に翻訳し、コンピュータで実行するソフトウェアを何と呼ぶか", answer:"コンパイラ", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "プログラムの実行時に1行ずつ解釈し、コンピュータで実行するソフトウェアは何か", answer:"インタプリタ", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "ソースコードを記述したファイルを何と呼ぶか", answer:"ソースファイル", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.class」というファイルを何と呼ぶか", answer:"クラスファイル", isCorrect: true }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 205,
            name: "総合",
            title: "総合",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 60,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                    { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                    { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                    { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                    { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                    { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  },
                  {
                    id: 1020,
                    times: 2,
                    score: 60,
                    correctCnt: 3,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "コンピュータに与える明確な指示を何と呼ぶか", answer:"プログラム", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "ソースコードを一括して実行可能な形式に翻訳し、コンピュータで実行するソフトウェアを何と呼ぶか", answer:"コンパイラ", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "プログラムの実行時に1行ずつ解釈し、コンピュータで実行するソフトウェアは何か", answer:"インタプリタ", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "ソースコードを記述したファイルを何と呼ぶか", answer:"ソースファイル", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.class」というファイルを何と呼ぶか", answer:"クラスファイル", isCorrect: true }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 40,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
        ]
      },
      {
        id: 202,
        name: "基礎",
        chapters: [
          {
            id: 201,
            name: "1章",
            title: "変数",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 80,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                    { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                    { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                    { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                    { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                    { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  },
                  {
                    id: 1020,
                    times: 2,
                    score: 60,
                    correctCnt: 3,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "コンピュータに与える明確な指示を何と呼ぶか", answer:"プログラム", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "ソースコードを一括して実行可能な形式に翻訳し、コンピュータで実行するソフトウェアを何と呼ぶか", answer:"コンパイラ", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "プログラムの実行時に1行ずつ解釈し、コンピュータで実行するソフトウェアは何か", answer:"インタプリタ", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "ソースコードを記述したファイルを何と呼ぶか", answer:"ソースファイル", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.class」というファイルを何と呼ぶか", answer:"クラスファイル", isCorrect: true }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 202,
            name: "2章",
            title: "条件処理",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 80,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                    { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                    { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                    { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                    { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                    { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  },
                  {
                    id: 1020,
                    times: 2,
                    score: 60,
                    correctCnt: 3,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "コンピュータに与える明確な指示を何と呼ぶか", answer:"プログラム", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "ソースコードを一括して実行可能な形式に翻訳し、コンピュータで実行するソフトウェアを何と呼ぶか", answer:"コンパイラ", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "プログラムの実行時に1行ずつ解釈し、コンピュータで実行するソフトウェアは何か", answer:"インタプリタ", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "ソースコードを記述したファイルを何と呼ぶか", answer:"ソースファイル", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.class」というファイルを何と呼ぶか", answer:"クラスファイル", isCorrect: true }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 80,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 203,
            name: "3章",
            title: "クラス",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                    { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                    { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                    { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                    { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                    { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  },
                  {
                    id: 1020,
                    times: 2,
                    score: 60,
                    correctCnt: 3,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "コンピュータに与える明確な指示を何と呼ぶか", answer:"プログラム", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "ソースコードを一括して実行可能な形式に翻訳し、コンピュータで実行するソフトウェアを何と呼ぶか", answer:"コンパイラ", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "プログラムの実行時に1行ずつ解釈し、コンピュータで実行するソフトウェアは何か", answer:"インタプリタ", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "ソースコードを記述したファイルを何と呼ぶか", answer:"ソースファイル", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.class」というファイルを何と呼ぶか", answer:"クラスファイル", isCorrect: true }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 60,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 204,
            name: "4章",
            title: "継承",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                    { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                    { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                    { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                    { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                    { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  },
                  {
                    id: 1020,
                    times: 2,
                    score: 60,
                    correctCnt: 3,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "コンピュータに与える明確な指示を何と呼ぶか", answer:"プログラム", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "ソースコードを一括して実行可能な形式に翻訳し、コンピュータで実行するソフトウェアを何と呼ぶか", answer:"コンパイラ", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "プログラムの実行時に1行ずつ解釈し、コンピュータで実行するソフトウェアは何か", answer:"インタプリタ", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "ソースコードを記述したファイルを何と呼ぶか", answer:"ソースファイル", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.class」というファイルを何と呼ぶか", answer:"クラスファイル", isCorrect: true }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 0,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 205,
            name: "総合",
            title: "総合",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : null,
                answers: [
                ]
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "「OSに依存しない」「オブジェクト指向である」「ネットワークとの親和性が高い」という特徴のあるプログラミング言語は何か", answer:"Java", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "　〇に当てはまる文字は何か。「〇〇〇〇〇 ソースファイル名」というコマンドを実行すると、コンパイルが行われます", answer:"javac", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "インタプリタの機能を持ち、OSに依存せずに動作する、Javaのプログラムを動かすために必要なソフトウェアは何か", answer:"JVM", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Javaファイル（ソースコード）をコンパイルするのに、必要なツールが含まれているソフトウェアは何か", answer:"JDK", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "バイトコードに変換された拡張子が「.WindowsやMacなどのオペレーティングシステムを何と呼ぶか", answer:"OS", isCorrect: true }
                    ]
                  }
                ]
              }
            ]
          },
        ]
      },
      {
        id: 203,
        name: "JDBC",
        chapters: [
          {
            id: 201,
            name: "1章",
            title: "変数",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : null,
                answers: []
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : null,
                answers: []
              }
            ]
          },
          {
            id: 202,
            name: "2章",
            title: "条件処理",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : null,
                answers: []
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : null,
                answers: []
              }
            ]
          },
          {
            id: 203,
            name: "3章",
            title: "クラス",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : null,
                answers: []
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : null,
                answers: []
              }
            ]
          },
          {
            id: 204,
            name: "4章",
            title: "継承",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : null,
                answers: []
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : null,
                answers: []
              }
            ]
          },
          {
            id: 205,
            name: "総合",
            title: "総合",
            score: 60,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : null,
                answers: []
              },
              {
                id: 2,
                name: "英語",
                name_en: "en",
                score : null,
                answers: []
              }
            ]
          },
        ]
      },
    ]
  },
  {
    id: 3,
    name: "日本語",
    name_en: "japanese",
    parts: [
      {
        id: 1,
        name: "ビジネス日本語",
        chapters: [
          {
            id: 301,
            name: "1章",
            title: "ビジネス日本語 タイトル1",
            score: 100,
            lang: [
              
              {
                id: 2,
                name: "ひら",
                name_en: "jp-hira",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "Investmentをひらがなで答えてください。", answer:"とうし", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "Collaborationをひらがなで答えてください。", answer:"きょうどう", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "Feedbackをひらがなで答えてください。", answer:"ふぃーどばっく", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Successをひらがなで答えてください。", answer:"せいこう", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "Leadershipをひらがなで答えてください。", answer:"りーだーしっぷ", isCorrect: true }
                    ]
                  },
                  {
                    id: 1010,
                    times: 2,
                    score: 80,
                    correctCnt: 4,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "Investmentをひらがなで答えてください。", answer:"とうし", isCorrect: false},
                      { id: 1022, direction: "across", number: 2, clue: "Collaborationをひらがなで答えてください。", answer:"きょうどう", isCorrect: true },
                      { id: 1023, direction: "across", number: 3, clue: "Feedbackをひらがなで答えてください。", answer:"ふぃーどばっく", isCorrect: true },
                      { id: 1024, direction: "down", number: 1, clue: "Successをひらがなで答えてください。", answer:"せいこう", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "Leadershipをひらがなで答えてください。", answer:"りーだーしっぷ", isCorrect: true }
                    ]
                  },
                ]
              }
            ]
          },
          {
            id: 302,
            name: "2章",
            title: "ビジネス日本語 タイトル2", 
            score: 100,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-hira",
                score : null,
                answers: []
              },
              {
                id: 2,
                name: "ひら",
                name_en: "jp-hira",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "Meetingをひらがなで答えてください。", answer:"かいぎ", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "Presentationをひらがなで答えてください。", answer:"ぷれぜんてーしょん", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "Projectをひらがなで答えてください。", answer:"ぷろじぇくと", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Deadlineをひらがなで答えてください。", answer:"しめきり", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "Reportをひらがなで答えてください。", answer:"れぽーと", isCorrect: true }
                    ]
                  },
                ]
              }
            ]            
          }
        ]
      },
      {
        id: 2,
        name: "生活日本語",
        chapters: [
          { 
            id: 302,
            name: "1章",
            title: "生活日本語 漢字→ひらがな", 
            score: 80,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : null,
                answers: []
              },
              {
                id: 2,
                name: "ひら",
                name_en: "jp-hira",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "電話をかけました。で電話をひらがなで答えてください。", answer:"でんわ", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "朝ご飯を食べました。で朝ご飯をひらがなで答えてください。", answer:"あさごはん", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "学校に行きます。で学校をひらがなで答えてください。", answer:"がっこう", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "本棚に本を並べました。で本棚をひらがなで答えてください。", answer:"ほんだな", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "映画館で映画を見ました。で映画館をひらがなで答えてください。", answer:"えいがかん", isCorrect: true }
                    ]
                  },
                ]
              },
            ]
           },
          { 
            id: 303,
            name: "2章",
            title: "生活日本語 英語→ひらがな", 
            score: 80,
            lang: [
              {
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : null,
                answers: []
              },
              {
                id: 2,
                name: "ひら",
                name_en: "jp-hira",
                score : 100,
                answers: [
                  {
                    id: 1010,
                    times: 1,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1011, direction: "across", number: 1, clue: "Customerをひらがなで答えてください。", answer:"きゃく", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "Strategyをひらがなで答えてください。", answer:"せんりゃく", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "Investmentをひらがなで答えてください。", answer:"とうし", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Collaborationをひらがなで答えてください。", answer:"きょうどう", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "Teamworkをひらがなで答えてください。", answer:"ちいむわーく", isCorrect: true }
                    ]
                  },
                ]
              },
            ]
           }
        ]
      },
    ]
  }
]


