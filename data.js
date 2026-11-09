const STORE_DATA = {
  "languages": [
    {
      "code": "ko",
      "label": "KO",
      "fullName": "한국어"
    },
    {
      "code": "en",
      "label": "EN",
      "fullName": "English"
    },
    {
      "code": "ja",
      "label": "JP",
      "fullName": "日本語"
    },
    {
      "code": "zh-CN",
      "label": "CN",
      "fullName": "中文 (简体)"
    },
    {
      "code": "zh-TW",
      "label": "TW",
      "fullName": "中文 (繁體)"
    },
    {
      "code": "vi",
      "label": "VI",
      "fullName": "Tiếng Việt"
    }
  ],
  "categoryMap": {
    "ko": {
      "all": "전체",
      "sig": "시그니처 메뉴",
      "set": "세트 메뉴",
      "single": "단품 메뉴",
      "noodle": "면류",
      "side": "사이드",
      "addon": "별도추가",
      "drink": "음료 · 주류"
    },
    "en": {
      "all": "All",
      "sig": "Signature Menu",
      "set": "Set Menu",
      "single": "Cutlet Single",
      "noodle": "Noodles",
      "side": "Side Dishes",
      "addon": "Add-ons",
      "drink": "Beverages & Alcoholic Drinks"
    },
    "ja": {
      "all": "すべて",
      "sig": "シグネチャー",
      "set": "セットメニュー",
      "single": "単品メニュー",
      "noodle": "麺類",
      "side": "サイドメニュー",
      "addon": "追加・トッピング",
      "drink": "飲料・酒類"
    },
    "vi": {
      "all": "Tất cả",
      "sig": "Món đặc trưng",
      "set": "Món theo Set",
      "single": "Món gọi riêng",
      "noodle": "Món mì",
      "side": "Món phụ",
      "addon": "Gọi thêm",
      "drink": "Đồ uống & Rượu"
    },
    "zh-CN": {
      "all": "全部",
      "sig": "招牌菜单",
      "set": "套餐",
      "single": "单品菜单",
      "noodle": "面类",
      "side": "小吃配餐",
      "addon": "额外加料",
      "drink": "饮品 · 酒水"
    },
    "zh-TW": {
      "all": "全部",
      "sig": "招牌菜單",
      "set": "套餐",
      "single": "單品菜單",
      "noodle": "麵類",
      "side": "精選小食",
      "addon": "額外追加",
      "drink": "飲品 · 酒水"
    }
  },
  "storeInfo": {
    "ko": {
      "name": "돈까스에 빠지다",
      "subName": "",
      "category": "퓨전 음식",
      "badge": "수제 돈까스 전문 브랜드",
      "desc": "돈까스에 빠지다는 경양식 돈까스와 한상 메뉴, 우동, 모밀, 떡볶이 등을 함께 즐길 수 있는 돈까스 전문점입니다. 바삭한 돈까스와 다양한 곁들임 메뉴가 준비되어 있어, 혼밥, 가족 식사, 간단한 점심 식사에 잘 어울립니다."
    },
    "en": {
      "name": "Fall in Love with Pork Cutlet",
      "subName": "",
      "category": "Fusion Food",
      "badge": "Handcrafted Pork Cutlet Brand",
      "desc": "Fall in Love with Pork Cutlet is a specialty pork cutlet restaurant where you can enjoy Western-style cutlets, full set meals, udon, cold buckwheat noodles, and tteokbokki. With crispy cutlets and various side dishes, it's perfect for solo dining, family meals, or a casual lunch."
    },
    "ja": {
      "name": "トンカツにハマる",
      "subName": "",
      "category": "フュージョン料理",
      "badge": "手作りトンカツ専門ブランド",
      "desc": "「トンカツにハマる」は、洋食風トンカツや御膳メニュー、うどん、そば、トッポッキなどが楽しめるトンカツ専門店です。サクサクのトンカツと多彩なサイドメニューをご用意しており、一人ご飯や家族での食事、気軽なランチにぴったりです。"
    },
    "vi": {
      "name": "Say Mê Donkatsu",
      "subName": "",
      "category": "Món ăn kết hợp",
      "badge": "Thương hiệu Donkatsu thủ công",
      "desc": "Say Mê Donkatsu là nhà hàng chuyên về donkatsu, nơi bạn có thể thưởng thức thịt heo chiên xù kiểu Tây, các mâm cơm trọn gói, mì udon, mì kiều mạch và bánh gạo cay tteokbokki. Với lớp vỏ giòn rụm cùng các món ăn kèm phong phú, quán là lựa chọn hoàn hảo cho bữa ăn một mình, sum họp gia đình hay bữa trưa nhẹ nhàng."
    },
    "zh-CN": {
      "name": "沉醉于炸猪排",
      "subName": "",
      "category": "融合料理",
      "badge": "手工炸猪排专业品牌",
      "desc": "“沉醉于炸猪排”是一家提供西式炸猪排、丰盛套餐、乌冬面、荞麦面和辣炒年糕等美食的炸猪排专门店。酥脆的炸猪排搭配丰富的配菜，非常适合单人独享、家庭聚餐或简便午餐。"
    },
    "zh-TW": {
      "name": "沉醉於炸豬排",
      "subName": "",
      "category": "融合料理",
      "badge": "手工炸豬排專業品牌",
      "desc": "「沉醉於炸豬排」是一家提供西式炸豬排、豐盛套餐、烏龍麵、蕎麥麵和辣炒年糕等美食的炸豬排專門店。酥脆的炸豬排搭配豐富的配菜，非常適合單人獨享、家庭聚餐或簡便午餐。"
    }
  },
  "items": [
    {
      "id": 1255,
      "catKey": "sig",
      "price": "9,500원",
      "image": "images/don_01.webp",
      "isSig": true,
      "names": {
        "ko": "경양식 첫단추",
        "en": "Your First Western Pork Cutlet",
        "ja": "軽洋食の第一歩",
        "vi": "Donkatsu kiểu Tây cổ điển",
        "zh-CN": "轻洋食第一步",
        "zh-TW": "輕洋食第一步"
      },
      "descs": {
        "ko": "옛날 왕돈까스 스타일로 즐기는 경양식 돈까스 메뉴입니다. 넓게 튀겨낸 돈까스에 특제 소스를 곁들여 추억의 경양식 맛을 느낄 수 있습니다.",
        "en": "A classic Western-style jumbo pork cutlet served with rich savory sauce for a nostalgic taste.",
        "ja": "昔懐かしいビッグカツスタイル。薄く広く揚げたカツに特製ソースをかけた思い出の味。",
        "vi": "Thịt heo cốt lết chiên xù bản to phong cách thập niên 90 với lớp vỏ giòn rụm và sốt đậm đà hoài niệm.",
        "zh-CN": "老式超大炸猪排风味，配上特制秘酱，品味记忆中的经典西餐滋味。",
        "zh-TW": "是以復古超大炸豬排風格呈現的韓式洋食炸豬排。"
      }
    },
    {
      "id": 1251,
      "catKey": "sig",
      "price": "9,500원",
      "image": "images/don_03.webp",
      "isSig": true,
      "names": {
        "ko": "돈빠 한상",
        "en": "Donppa Full Table Set",
        "ja": "ドンパ 御膳(2人前以上)",
        "vi": "Mâm cơm Donkatsu Donppa",
        "zh-CN": "Donppa 一桌套餐",
        "zh-TW": "Donppa 一桌套餐"
      },
      "descs": {
        "ko": "돈까스 2장을 선택해 밥, 국, 샐러드, 반찬과 함께 즐기는 든든한 한상 메뉴입니다. 푸짐하고 알찬 구성을 자랑합니다.",
        "en": "A generous set featuring a choice of two pork cutlets served with rice, soup, salad, and sides.",
        "ja": "カツ2枚を選んでご飯、スープ、サラダ、おかずと一緒に楽しむ大満足のボリューム御膳。",
        "vi": "Set cơm no nê gồm 2 miếng thịt cốt lết tự chọn kèm cơm trắng, súp, salad tươi và món phụ.",
        "zh-CN": "自选2块炸猪排，搭配米饭、例汤、沙拉和小菜，分量十足的一桌套餐。",
        "zh-TW": "可選擇兩塊炸豬排，搭配白飯、湯品、沙拉及小菜享用的豐盛套餐。"
      }
    },
    {
      "id": 1252,
      "catKey": "sig",
      "price": "9,500원",
      "image": "images/don_05.webp",
      "isSig": true,
      "names": {
        "ko": "돈빠 반상",
        "en": "Donppa Individual Set",
        "ja": "ドンパ 御膳(1人前)",
        "vi": "Khay cơm Donkatsu đơn Donppa",
        "zh-CN": "Donppa 半桌套餐",
        "zh-TW": "Donppa 半桌套餐"
      },
      "descs": {
        "ko": "바삭한 돈까스와 면을 취향에 따라 선택하는 돈빠의 베스트 셀러",
        "en": "Donppa's best seller featuring crispy pork cutlet paired with your choice of noodles.",
        "ja": "サクサクのとんかつとお好みの麺を選べるドンパのベストセラー御膳。",
        "vi": "Món bán chạy nhất của Donppa với thịt heo chiên giòn kết hợp cùng món mì tự chọn theo sở thích.",
        "zh-CN": "可按个人喜好自选炸猪排与面类的Donppa畅销招牌套餐。",
        "zh-TW": "可依個人喜好自選炸豬排與麵食享用的Donppa人氣暢銷套餐。"
      }
    },
    {
      "id": 1905,
      "catKey": "sig",
      "price": "11,000원",
      "image": "images/don_08.webp",
      "isSig": true,
      "names": {
        "ko": "돈빠네 김치동",
        "en": "Pork Cutlet & Kimchi Udon",
        "ja": "ドンパネ キムチ丼",
        "vi": "Mì Udon Kimchi & Donkatsu Donppa",
        "zh-CN": "Donpanne 辛奇饭",
        "zh-TW": "Donpanne 辛奇飯"
      },
      "descs": {
        "ko": "얼큰하고 시원한 김치우동에 바삭한 돈까스를 함께 곁들여 먹는 인기 메뉴입니다. 칼칼한 국물과 육즙의 환상적인 조화!",
        "en": "Spicy and refreshing kimchi udon paired with crispy pork cutlet for a deeply satisfying flavor.",
        "ja": "ピリ辛でコク深いキムチうどんにサクサクのカツを添えた大人気メニュー。",
        "vi": "Mì udon kim chi chua cay ấm nóng kết hợp thịt heo chiên xù giòn tan ngập tràn hương vị.",
        "zh-CN": "辛辣开胃的辛奇乌冬面搭配香脆炸猪排，浓郁汤底与香脆口感完美融合。",
        "zh-TW": "是在香辣爽口的辛奇烏龍麵中搭配炸豬排享用的菜品。"
      }
    },
    {
      "id": 1906,
      "catKey": "sig",
      "price": "11,000원",
      "image": "images/don_11.webp",
      "isSig": true,
      "names": {
        "ko": "핵불365",
        "en": "Haek-Bul 365 (Super Spicy Cutlet)",
        "ja": "ヘップル365（激辛カツ）",
        "vi": "Donkatsu Siêu Cay 365",
        "zh-CN": "核火365特辣炸猪排",
        "zh-TW": "核火365極辣炸豬排"
      },
      "descs": {
        "ko": "辛 경양식, 부드러운 한입 뒤에 몰아치는 대구식 매운맛! (치즈추가 +1,000원)",
        "en": "Spicy Western-style cutlet, an intense Daegu-style spicy kick right after a tender bite! (Extra cheese +1,000 KRW)",
        "ja": "辛口の洋食カツ、柔らかい一口の後に押し寄せる大邱流の辛さ！（チーズ追加 +1,000KRW）",
        "vi": "Donkatsu kiểu Tây cay nồng, vị cay bùng nổ kiểu Daegu ngay sau miếng cắn mềm mọng! (Thêm phô mai +1.000 KRW)",
        "zh-CN": "辛辣洋食风味，柔嫩一口后席卷而来的大邱式香辣滋味！（加芝士 +1,000 KRW）",
        "zh-TW": "辛辣洋食風味，柔嫩一口後席捲而來的大邱式香辣滋味！（加起司 +1,000 KRW）"
      }
    },
    {
      "id": 1258,
      "catKey": "set",
      "price": "14,000원",
      "image": "images/don_06.webp",
      "isSig": false,
      "names": {
        "ko": "돈빠네 혼밥왕",
        "en": "Solo Pork Cutlet Set",
        "ja": "ドンパネ 一人飯キング",
        "vi": "Set Vua Cơm Đơn Donppa",
        "zh-CN": "Donpanne 单人套餐王",
        "zh-TW": "Donpanne 單人套餐王"
      },
      "descs": {
        "ko": "혼자서도 푸짐하고 다양하게 즐기는 알찬 가성비 1인 세트 메뉴.",
        "en": "A generous solo dining set offering great value and diverse flavors.",
        "ja": "1人でも贅沢に色々な味を楽しめる高コスパな特別セット。",
        "vi": "Set ăn thịnh soạn đầy đủ dành riêng cho 1 người với mức giá cực kỳ tiết kiệm.",
        "zh-CN": "单人专属的高性价比豪华套餐，一个人也能享受丰盛美味。",
        "zh-TW": "单人专属的高性价比豪华套餐，一个人也能享受丰盛美味。"
      }
    },
    {
      "id": 1257,
      "catKey": "set",
      "price": "26,000원",
      "image": "images/don_10.webp",
      "isSig": false,
      "names": {
        "ko": "엄마는 외출중",
        "en": "Mom’s Out for the Day Set",
        "ja": "お母さんは外出中セット",
        "vi": "Set Mẹ Vắng Nhà (Gia đình)",
        "zh-CN": "妈妈外出了套餐",
        "zh-TW": "媽媽外出了"
      },
      "descs": {
        "ko": "온 가족이나 친구들과 함께 넉넉하게 나눠 먹을 수 있는 푸짐한 모둠 세트.",
        "en": "A hearty combination set designed for family or friends to share.",
        "ja": "家族や友人と一緒にシェアして楽しめる大満足の盛り合わせセット。",
        "vi": "Set ăn kết hợp phong phú nhiều món cho gia đình hoặc nhóm bạn cùng thưởng thức.",
        "zh-CN": "适合家庭聚餐或好友分享的多人丰盛组合套餐。",
        "zh-TW": "适合家庭聚餐或好友分享的多人丰盛组合套餐。"
      }
    },
    {
      "id": 1253,
      "catKey": "single",
      "price": "9,000원",
      "image": "images/don_04.webp",
      "isSig": false,
      "names": {
        "ko": "돈빠 정식",
        "en": "Donppa Pork Cutlet Set",
        "ja": "ドンパ 定食",
        "vi": "Cơm phần Donkatsu Donppa",
        "zh-CN": "Donppa 猪排定食",
        "zh-TW": "Donppa 定食"
      },
      "descs": {
        "ko": "기본에 충실한 바삭하고 고소한 정통 돈까스 정식.",
        "en": "Classic crisp pork cutlet served with signature dipping sauce.",
        "ja": "基本に忠実なサクサクの香ばしい正統派トンカツ定食。",
        "vi": "Cơm phần thịt heo chiên xù truyền thống giòn rụm thơm ngon.",
        "zh-CN": "忠于原味的金黄香脆正宗炸猪排定食。",
        "zh-TW": "忠于原味的金黄香脆正宗炸猪排定食。"
      }
    },
    {
      "id": 1254,
      "catKey": "single",
      "price": "9,000원",
      "image": "images/don_09.webp",
      "isSig": false,
      "names": {
        "ko": "카레왕",
        "en": "Curry King Cutlet",
        "ja": "カレーキング",
        "vi": "Cơm Donkatsu Cà Ri Vua",
        "zh-CN": "咖喱王猪排",
        "zh-TW": "咖哩王"
      },
      "descs": {
        "ko": "깊고 진한 풍미의 수제 카레와 돈까스의 완벽한 페어링.",
        "en": "Crispy cutlet served over deep, rich Japanese curry.",
        "ja": "コク深く濃厚な手作りカレーとトンカツの絶品コラボレーション。",
        "vi": "Sự kết hợp hoàn hảo giữa sốt cà ri thơm lừng và thịt heo chiên giòn.",
        "zh-CN": "浓郁手工日式咖喱与香脆炸猪排的完美搭配。",
        "zh-TW": "浓郁手工日式咖喱与香脆炸猪排的完美搭配。"
      }
    },
    {
      "id": 1256,
      "catKey": "single",
      "price": "9,500원",
      "image": "images/don_02.webp",
      "isSig": false,
      "names": {
        "ko": "빨간 경양식 불돈",
        "en": "Spicy Red Western Pork Cutlet",
        "ja": "赤い軽洋食 ブルトン",
        "vi": "Donkatsu sốt cay đỏ Bul-Don",
        "zh-CN": "红色轻洋食辣味猪排",
        "zh-TW": "紅色輕洋食辣味豬肉"
      },
      "descs": {
        "ko": "매콤한 특제 불소스가 입맛을 당기는 중독성 강한 매운 돈까스.",
        "en": "Addictively spicy cutlet drenched in fiery house sauce.",
        "ja": "特製旨辛ソースが食欲をそそるやみつきスパイシートンカツ。",
        "vi": "Thịt heo chiên giòn phủ sốt cay nồng đặc chế kích thích vị giác.",
        "zh-CN": "裹上特制香辣酱汁，开胃过瘾的招牌辣味炸猪排。",
        "zh-TW": "裹上特制香辣酱汁，开胃过瘾的招牌辣味炸猪排。"
      }
    },
    {
      "id": 1259,
      "catKey": "noodle",
      "price": "8,000원",
      "image": "images/noodle_07.webp",
      "isSig": false,
      "names": {
        "ko": "김치우동",
        "en": "Kimchi Udon",
        "ja": "キムチうどん",
        "vi": "Mì Udon Kimchi cay",
        "zh-CN": "辛奇乌冬面",
        "zh-TW": "辛奇烏龍麵"
      },
      "descs": {
        "ko": "칼칼하고 깊은 김치 국물에 쫄깃한 면발이 어우러진 우동.",
        "en": "Chewy udon noodles served in spicy, tangy kimchi broth.",
        "ja": "ピリッと辛いコク旨キムチスープとコシのあるうどん麺。",
        "vi": "Mì udon dai ngon trong nước dùng kim chi chua cay đậm đà.",
        "zh-CN": "酸辣浓郁的辛奇汤底搭配劲道爽滑的乌冬面。",
        "zh-TW": "酸辣浓郁的辛奇汤底搭配劲道爽滑的乌冬面。"
      }
    },
    {
      "id": 1262,
      "catKey": "noodle",
      "price": "6,500원",
      "image": "images/noodle_cold.webp",
      "isSig": false,
      "names": {
        "ko": "냉모밀 · 온모밀",
        "en": "Cold · Hot Buckwheat Soba",
        "ja": "冷そば・温そば",
        "vi": "Mì soba kiều mạch Lạnh · Nóng",
        "zh-CN": "冷 · 温荞麦面",
        "zh-TW": "冷 · 溫蕎麥麵"
      },
      "descs": {
        "ko": "살얼음 동동 띄운 시원한 냉모밀과 깊고 따뜻한 온모밀 중 선택 가능한 별미.",
        "en": "Refreshing chilled soba in icy broth or comforting warm dashi soba, available to your preference.",
        "ja": "キリッと冷たいつゆの冷そば、または出汁香る温かいそばから選べる人気メニュー。",
        "vi": "Lựa chọn mì kiều mạch lạnh thanh mát hoặc mì kiều mạch nước dùng nóng thơm dịu.",
        "zh-CN": "可自由选择冰爽开胃的冷荞麦面或温润鲜香的热汤荞麦面。",
        "zh-TW": "可自由選擇冰爽開胃的冷蕎麥麵或溫潤鮮香的熱湯蕎麥麵。"
      }
    },
    {
      "id": 1260,
      "catKey": "noodle",
      "price": "6,500원",
      "image": "images/noodle_udon.webp",
      "isSig": false,
      "names": {
        "ko": "돈빠우동",
        "en": "Donppa Classic Udon",
        "ja": "ドンパうどん",
        "vi": "Mì Udon Donppa truyền thống",
        "zh-CN": "Donpanne 经典乌冬",
        "zh-TW": "Donpanne 烏龍麵"
      },
      "descs": {
        "ko": "가쓰오부시를 우려낸 맑고 깊은 정통 온우동.",
        "en": "Traditional warm udon in a comforting bonito dashi broth.",
        "ja": "かつお出汁が香る澄んだ深い味わいの定番温うどん。",
        "vi": "Mì udon thanh ngọt nấu từ nước dùng cá ngừ bào chuẩn vị Nhật.",
        "zh-CN": "柴鱼熬制的澄澈温润传统日式清汤乌冬。",
        "zh-TW": "柴鱼熬制的澄澈温润传统日式清汤乌冬。"
      }
    },
    {
      "id": 1261,
      "catKey": "noodle",
      "price": "6,500원",
      "image": "images/noodle_jjol.webp",
      "isSig": false,
      "names": {
        "ko": "맵달 쫄면",
        "en": "Sweet and Spicy Chewy Noodles",
        "ja": "甘辛チョルミョン",
        "vi": "Mì dai Jjolmyeon chua cay",
        "zh-CN": "酸甜辣拌面",
        "zh-TW": "酸甜辣拌麵"
      },
      "descs": {
        "ko": "신선한 야채와 매콤달콤한 비빔장이 어우러진 쫄깃한 쫄면.",
        "en": "Chewy noodles tossed with fresh crisp veggies and spicy-sweet sauce.",
        "ja": "シャキシャキ野菜と甘辛タレが絡み合うもちもちチョルミョン。",
        "vi": "Mì sợi dai trộn rau củ tươi giòn và sốt chua ngọt đậm vị giải ngấy.",
        "zh-CN": "爽脆蔬菜配上酸甜辣拌酱的劲道韩国拌面。",
        "zh-TW": "爽脆蔬菜配上酸甜辣拌酱的劲道韩国拌面。"
      }
    },
    {
      "id": 1264,
      "catKey": "noodle",
      "price": "6,500원",
      "image": "images/noodle_bibim.webp",
      "isSig": false,
      "names": {
        "ko": "비빔모밀",
        "en": "Spicy Buckwheat Soba",
        "ja": "混ぜそば",
        "vi": "Mì soba trộn sốt cay ngọt",
        "zh-CN": "拌荞麦面",
        "zh-TW": "拌蕎麥麵"
      },
      "descs": {
        "ko": "매콤새콤 특제 양념장에 비벼 먹는 별미 모밀 국수.",
        "en": "Cold soba noodles tossed in tangy, spicy seasoning sauce.",
        "ja": "甘酸っぱく辛い特製タレで和えて食べる絶品ビビンそば。",
        "vi": "Mì kiều mạch trộn sốt cay ngọt đậm đà thơm mùi dầu mè.",
        "zh-CN": "特制酸辣酱拌匀食用的风味拌荞麦面。",
        "zh-TW": "特制酸辣酱拌匀食用的风味拌荞麦面。"
      }
    },
    {
      "id": 1267,
      "catKey": "side",
      "price": "6,500원",
      "image": "images/side_tteok.webp",
      "isSig": false,
      "names": {
        "ko": "모듬 떡볶이",
        "en": "Assorted Tteokbokki",
        "ja": "トッポッキ盛り合わせ",
        "vi": "Bánh gạo cay Tteokbokki thập cẩm",
        "zh-CN": "什锦炒年糕",
        "zh-TW": "什錦炒年糕"
      },
      "descs": {
        "ko": "돈까스와 환상 궁합을 자랑하는 매콤달콤 모둠 떡볶이.",
        "en": "Spicy and sweet chewy rice cakes, the perfect pair for cutlets.",
        "ja": "トンカツとの相性抜群、甘辛モチモチトッポッキ盛り合わせ。",
        "vi": "Bánh gạo dẻo sốt ớt cay ngọt kèm topping đa dạng ăn kèm thịt cực ngon.",
        "zh-CN": "与炸猪排堪称绝配的甜辣浓郁什锦炒年糕。",
        "zh-TW": "与炸猪排堪称绝配的甜辣浓郁什锦炒年糕。"
      }
    },
    {
      "id": 1265,
      "catKey": "side",
      "price": "4,500원",
      "image": "images/side_sando.webp",
      "isSig": false,
      "names": {
        "ko": "카츠산도",
        "en": "Katsu Sando Sandwich",
        "ja": "カツサンド",
        "vi": "Bánh mì kẹp Katsu Sando",
        "zh-CN": "猪排三明治",
        "zh-TW": "豬排三明治"
      },
      "descs": {
        "ko": "도톰한 수제 돈까스를 부드러운 식빵 사이에 넣은 샌드위치.",
        "en": "Tender, thick cutlet tucked between fluffy soft bread.",
        "ja": "分厚いカツをふわふわの食パンで挟んだ人気サンド。",
        "vi": "Bánh mì sandwich mềm kẹp thịt cốt lết giòn rụm và sốt ngọt bùi.",
        "zh-CN": "松软面包中夹入厚实香脆炸猪排的经典三明治。",
        "zh-TW": "松软面包中夹入厚实香脆炸猪排的经典三明治。"
      }
    },
    {
      "id": 1266,
      "catKey": "side",
      "price": "5,000원",
      "image": "images/side_shrimp.webp",
      "isSig": false,
      "names": {
        "ko": "왕새우 튀김(3pc)",
        "en": "Jumbo Fried Shrimp (3pcs)",
        "ja": "エビフライ(3pc)",
        "vi": "Tôm sú chiên xù giòn (3 con)",
        "zh-CN": "炸大虾（3只）",
        "zh-TW": "炸大蝦（3隻）"
      },
      "descs": {
        "ko": "바삭바삭하게 튀겨낸 큼직한 왕새우 튀김 3조각.",
        "en": "Crisp, golden jumbo deep-fried shrimp served with dipping sauce.",
        "ja": "サックリ香ばしく揚げた大ぶりエビフライ3本。",
        "vi": "Tôm sú cỡ lớn tẩm bột xù chiên vàng ruộm thơm giòn.",
        "zh-CN": "炸得金黄酥脆的特大明虾3只。",
        "zh-TW": "炸得金黄酥脆的特大明虾3只。"
      }
    },
    {
      "id": 1268,
      "catKey": "addon",
      "price": "2,000원",
      "image": "",
      "isSig": false,
      "names": {
        "ko": "어묵채튀김",
        "en": "Crispy Fried Fishcake Strips",
        "ja": "練り物フライ",
        "vi": "Chả cá sợi chiên giòn thơm",
        "zh-CN": "油炸鱼糕丝",
        "zh-TW": "油炸魚糕絲"
      },
      "descs": {
        "ko": "바삭하게 튀겨내어 자꾸만 손이 가는 별미 어묵 튀김.",
        "en": "Crispy fried thin strips of fish cake, a great addictive snack.",
        "ja": "香ばしく揚げて手が止まらないスナック感覚の練り物フライ。",
        "vi": "Chả cá Hàn Quốc cắt sợi chiên giòn tan, món ăn vặt lý tưởng.",
        "zh-CN": "炸至香脆可口、越嚼越香的特色炸鱼糕丝。",
        "zh-TW": "炸至香脆可口、越嚼越香的特色炸鱼糕丝。"
      }
    },
    {
      "id": 1269,
      "catKey": "addon",
      "price": "1,000원",
      "image": "",
      "isSig": false,
      "names": {
        "ko": "공기밥",
        "en": "Steamed Rice",
        "ja": "ご飯",
        "vi": "Cơm trắng thêm",
        "zh-CN": "米饭",
        "zh-TW": "米飯"
      },
      "descs": {
        "ko": "찰지고 윤기 나는 따뜻한 백미 공기밥.",
        "en": "Warm bowl of freshly cooked fluffy rice.",
        "ja": "ふっくら炊き立ての温かい白ご飯。",
        "vi": "Bát cơm trắng dẻo thơm ấm nóng.",
        "zh-CN": "香软温润的白米饭。",
        "zh-TW": "香软温润的白米饭。"
      }
    },
    {
      "id": 1270,
      "catKey": "addon",
      "price": "500원",
      "image": "",
      "isSig": false,
      "names": {
        "ko": "매콤소스",
        "en": "Extra Spicy Sauce",
        "ja": "スパイシーソース",
        "vi": "Sốt cay đặc chế thêm",
        "zh-CN": "特制辣味酱",
        "zh-TW": "辣味醬"
      },
      "descs": {
        "ko": "돈까스의 느끼함을 싹 잡아주는 매콤한 추가 소스.",
        "en": "Zesty spicy dipping sauce to add extra kick to your cutlet.",
        "ja": "カツの美味しさを引き立てるピリ辛追加ソース。",
        "vi": "Chén sốt ớt cay đậm đà chấm cùng donkatsu giải ngấy.",
        "zh-CN": "解腻开胃的特制辛辣沾酱。",
        "zh-TW": "解腻开胃的特制辛辣沾酱。"
      }
    },
    {
      "id": 1271,
      "catKey": "addon",
      "price": "3,000원",
      "image": "",
      "isSig": false,
      "names": {
        "ko": "카레 추가",
        "en": "Extra Curry Sauce",
        "ja": "カレー 追加",
        "vi": "Sốt Cà ri thêm",
        "zh-CN": "追加浓咖喱",
        "zh-TW": "追加咖哩"
      },
      "descs": {
        "ko": "밥과 돈까스 어디에나 잘 어울리는 진한 풍미의 카레.",
        "en": "A bowl of rich homemade curry sauce to dip or pour.",
        "ja": "ご飯にもカツにもよく合う風味豊かな追加カレー。",
        "vi": "Một chén sốt cà ri Nhật Bản thơm lừng dùng kèm cơm hoặc chấm thịt.",
        "zh-CN": "搭配米饭或炸猪排均极为美味的浓郁咖喱汁。",
        "zh-TW": "搭配米饭或炸猪排均极为美味的浓郁咖喱汁。"
      }
    },
    {
      "id": 1279,
      "catKey": "drink",
      "price": "2,000원",
      "image": "",
      "isSig": false,
      "names": {
        "ko": "콜라(355ml)",
        "en": "Cola (355ml)",
        "ja": "コーラ (355ml)",
        "vi": "Nước ngọt Cola (355ml)",
        "zh-CN": "可乐（355ml）",
        "zh-TW": "可樂（355ml）"
      },
      "descs": {
        "ko": "시원하고 톡 쏘는 탄산음료",
        "en": "Classic refreshing cola",
        "ja": "爽快な味わいのコーラ",
        "vi": "Nước ngọt có gas giải khát sảng khoái",
        "zh-CN": "清爽畅快的经典可乐",
        "zh-TW": "清爽暢快的經典可樂"
      }
    },
    {
      "id": 1278,
      "catKey": "drink",
      "price": "2,000원",
      "image": "",
      "isSig": false,
      "names": {
        "ko": "제로 콜라(355ml)",
        "en": "Zero Sugar Cola (355ml)",
        "ja": "ゼロ コーラ (355ml)",
        "vi": "Cola không calo (355ml)",
        "zh-CN": "零度可乐（355ml）",
        "zh-TW": "零度可樂（355ml）"
      },
      "descs": {
        "ko": "부담 없는 제로 칼로리 탄산음료",
        "en": "Zero-calorie refreshing cola",
        "ja": "すっきりゼロカロリーコーラ",
        "vi": "Nước ngọt có gas không đường tươi mát",
        "zh-CN": "零糖零卡的清爽碳酸可乐",
        "zh-TW": "零糖零卡的清爽碳酸可樂"
      }
    },
    {
      "id": 1276,
      "catKey": "drink",
      "price": "2,000원",
      "image": "",
      "isSig": false,
      "names": {
        "ko": "사이다(355ml)",
        "en": "Cider (Lemon-Lime Soda 355ml)",
        "ja": "サイダー (355ml)",
        "vi": "Nước ngọt Cider (355ml)",
        "zh-CN": "汽水（355ml）",
        "zh-TW": "汽水（355ml）"
      },
      "descs": {
        "ko": "맑고 깨끗한 청량 탄산음료",
        "en": "Crisp and clear refreshing lemon-lime soda",
        "ja": "澄んだ爽快感の炭酸飲料",
        "vi": "Nước giải khát vị chanh thanh mát truyền thống",
        "zh-CN": "清爽畅快的经典汽水",
        "zh-TW": "清爽暢快的經典汽水"
      }
    },
    {
      "id": 1280,
      "catKey": "drink",
      "price": "4,500원",
      "image": "",
      "isSig": false,
      "names": {
        "ko": "맥주",
        "en": "Beer",
        "ja": "ビール",
        "vi": "Bia",
        "zh-CN": "啤酒",
        "zh-TW": "啤酒"
      },
      "descs": {
        "ko": "시원하고 청량한 맥주",
        "en": "Refreshing chilled beer",
        "ja": "爽快な喉越しの冷たいビール",
        "vi": "Bia ướp lạnh sảng khoái",
        "zh-CN": "清凉爽口的啤酒",
        "zh-TW": "清涼爽口的啤酒"
      }
    },
    {
      "id": 1274,
      "catKey": "drink",
      "price": "4,500원",
      "image": "",
      "isSig": false,
      "names": {
        "ko": "소주",
        "en": "Soju",
        "ja": "焼酎",
        "vi": "Rượu Soju",
        "zh-CN": "烧酒",
        "zh-TW": "燒酒"
      },
      "descs": {
        "ko": "깔끔하고 부드러운 소주",
        "en": "Clean and smooth traditional Korean soju",
        "ja": "澄んだすっきりとした口当たりの焼酎",
        "vi": "Rượu soju truyền thống êm dịu",
        "zh-CN": "纯净温润的韩国传统烧酒",
        "zh-TW": "純淨溫潤的韓國傳統燒酒"
      }
    }
  ]
};
