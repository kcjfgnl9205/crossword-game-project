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
            id: 102,
            name: "2章",
            title: "メソッド",
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
                id: 1,
                name: "カタ",
                name_en: "jp-kata",
                score : 100,
                answers: [
                  {
                    id: 1020,
                    times: 1,
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
                      { id: 1011, direction: "across", number: 1, clue: "Investment", answer:"とうし", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "Collaboration", answer:"きょうどう", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "Feedback", answer:"ふぃーどばっく", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Success", answer:"せいこう", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "Leadership", answer:"りーだーしっぷ", isCorrect: true }
                    ]
                  },
                  {
                    id: 1010,
                    times: 2,
                    score: 40,
                    correctCnt: 2,
                    totalCnt: 5,
                    result: [
                      { id: 1021, direction: "across", number: 1, clue: "Business Trip", answer:"しゅっちょう", isCorrect: true},
                      { id: 1022, direction: "across", number: 2, clue: "Sales", answer:"えいぎょう", isCorrect: false },
                      { id: 1023, direction: "across", number: 3, clue: "Customer", answer:"きゃく", isCorrect: false },
                      { id: 1024, direction: "down", number: 1, clue: "Marketing", answer:"まーけてぃんぐ", isCorrect: true },
                      { id: 1025, direction: "down", number: 2, clue: "Strategy", answer:"せんりゃく", isCorrect: true }
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
                      { id: 1011, direction: "across", number: 1, clue: "Meeting", answer:"かいぎ", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "Presentation", answer:"ぷれぜんてーしょん", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "Project", answer:"ぷろじぇくと", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Deadline", answer:"しめきり", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "Report", answer:"れぽーと", isCorrect: true }
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
            title: "生活日本語 タイトル1", 
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
                      { id: 1011, direction: "across", number: 1, clue: "School", answer:"がっこう", isCorrect: false},
                      { id: 1012, direction: "across", number: 2, clue: "Sun", answer:"たいよう", isCorrect: false },
                      { id: 1013, direction: "across", number: 3, clue: "Thank you", answer:"ありがとう", isCorrect: false },
                      { id: 1014, direction: "down", number: 1, clue: "Music", answer:"おんがく", isCorrect: true },
                      { id: 1015, direction: "down", number: 2, clue: "Dog", answer:"いぬ", isCorrect: true }
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


