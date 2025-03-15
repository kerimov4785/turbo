let cars = [
  {
    brand: "Abath",
    model: "Seltos",
    banType: "Offroader / SUV",
    odometer: 30000,
    odometerUnit: "km",
    price: 44000,
    currency: "AZN",
    year: "2005",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F11%2F11%2F19%2F41%2F5f34c8eb-5138-4d0c-b78e-8c817d98aa5f%2F52522_Mu2ZZs1LqQkRDJpgK-R_xw.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {

    brand: "Audi",
    model: "A5",
    banType: "Sedan",
    odometer: 165000,
    odometerUnit: "km",
    price: 16000,
    currency: "USD",
    year: "2013",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F08%2F31%2F23%2F10%2F15%2F729c8b30-ea56-45d3-bdf7-f8a7b0e9e950%2F3015_eyJujDX3UzCcNboINLPl_g.jpg",
    ],
    city: "Masallı",
    dates: "Bu gün  14:30",
  },
  {
    id: "3",
    brand: "Toyota",
    model: "Camry",
    banType: "Sedan",
    odometer: 191000,
    odometerUnit: "km",
    price: 17300,
    currency: "AZN",
    year: "2007",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F12%2F22%2F10%2F26%2F59%2F9f754715-d306-49f2-b2e2-60ab36f771e6%2F80870_wrsWRRQ-A4ySXmcF4jOpXg.jpg",
    ],
    city: "Ağdam",
    dates: "Bu gün  14:30",
  },
  {
    id: "4",
    brand: "Ford",
    model: "Transit",
    banType: "Karvan",
    odometer: 11000,
    odometerUnit: "km",
    price: 44500,
    currency: "USD",
    year: "2008",
    credit: true,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F09%2F02%2F17%2F28%2F48%2Fa0bc3142-1854-48f9-9c81-ff7d7010c1ae%2F59959_CCv7BAr0Tlz1x7lQiFAsQA.jpg",
    ],
    city: "Naftalan",
    dates: "Bu gün  14:30",
  },
  {
    id: "5",
    brand: "Bestune",
    model: "T77",
    banType: "Offroader / SUV",
    odometer: 0,
    odometerUnit: "km",
    price: 45900,
    currency: "AZN",
    year: "2022",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F09%2F19%2F17%2F33%2F45%2F027df0e9-c5df-46a1-8428-2a356ee17d45%2F44832_yspkMx-Q-VQPULaAOI_MSw.jpg",
    ],
    city: "Oğuz",
    dates: "Bu gün  14:30",
  },
  {
    id: "6",
    brand: "Honggi",
    model: "H9",
    banType: "Sedan",
    odometer: 0,
    odometerUnit: "km",
    price: 94000,
    currency: "AZN",
    year: "2005",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F04%2F19%2F15%2F59%2F38%2F716b705f-e564-4d55-995a-7762e6881f4c%2F5883_vLXDlraa-zAkIkuXUdl05w.jpg",
    ],
    city: "Qax",
    dates: "Bu gün  14:30",
  },
  {
    id: "7",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 141622,
    odometerUnit: "km",
    price: 19500,
    currency: "AZN",
    year: "2015",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F29%2F15%2F18%2F37%2F46fbb03a-0cd9-4409-bbc6-03023e588329%2F67200_jmTFoB8S36kCqexBERvuhA.jpg",
    ],
    city: "Gədəbəy",
    dates: "Bu gün  14:30",
  },
  {
    id: "8",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 129000,
    odometerUnit: "km",
    price: 25900,
    currency: "AZN",
    year: "2017",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F29%2F18%2F08%2F03%2F20fc5e31-1f10-4b83-ade8-2d513db1c746%2F67209_O84rpgQMDkok2-nwStiHpg.jpg",
    ],
    city: "Gəncə",
    dates: "Bu gün  14:30",
  },
  {
    id: "9",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 46000,
    odometerUnit: "km",
    price: 21200,
    currency: "USD",
    year: "2020",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F11%2F11%2F19%2F52%2F19%2F56291fd3-453f-426f-a911-3ca4f2e26362%2F17663_stveq78AA4WtPo3oyvVbHA.jpg",
    ],
    city: "Baki",
    dates: "Bu gün  14:30",
  },
  {
    id: "10",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 24945,
    odometerUnit: "km",
    price: 18500,
    currency: "AZN",
    year: "2015",
    credit: true,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F19%2F14%2F59%2F27%2F530eae46-d07d-4abc-bacb-de36d3088f0f%2F64922_Iu72BGd2C_OFe3WxVk-qGQ.jpg",
    ],
    city: "Ağcabədi",
    dates: "Bu gün  14:30",
  },
  {
    id: "11",
    brand: "Kia",
    model: "Seltos",
    banType: "Offroader / SUV",
    odometer: 30000,
    odometerUnit: "km",
    price: 40000,
    currency: "AZN",
    year: "2005",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F10%2F20%2F20%2F19%2F37%2Ff0d40936-67d4-47b2-8f88-39e95c546ae3%2F57379_yzPNLn7TAwj6RDByWKgvOA.jpg",
    ],
    city: "Baki",
    dates: "Bu gün  14:30",
  },
  {
    id: "12",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 192000,
    odometerUnit: "km",
    price: 23500,
    currency: "AZN",
    year: "2014",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F30%2F15%2F48%2F00%2F097e698b-cbe7-4539-ab25-9a13a2a753fd%2F75247_xWTTEaAst4sLzUzIUkthPg.jpg",
    ],
    city: "Ağdaş",
    dates: "Bu gün  14:30",
  },
  {
    id: "13",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 20500,
    odometerUnit: "km",
    price: 42000,
    currency: "AZN",
    year: "2015",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F22%2F20%2F08%2F29%2F52caefc7-1570-4c7c-a077-fd1f816203cb%2F64916_MHdPUxu1eQ3kLAtY4hEzYg.jpg",
    ],
    city: "Ağsu",
    dates: "Bu gün  14:30",
  },
  {
    id: "14",
    brand: "Fusion",
    model: "Ford",
    banType: "Sedan",
    odometer: 30000,
    odometerUnit: "km",
    price: 40000,
    currency: "AZN",
    year: "2005",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F06%2F18%2F51%2F58%2Fc79abd63-a69c-48eb-b071-37506b868231%2F57686_CzbKH3fGBbBdGyq3D-qstQ.jpg",
    ],
    city: "Ağdaş",
    dates: "Bu gün  14:30",
  },
  {
    id: "15",
    brand: "Ford",
    model: "Sedan",
    banType: "Sedan",
    odometer: 122000,
    odometerUnit: "km",
    price: 40000,
    currency: "AZN",
    year: "2015",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F28%2F22%2F00%2F43%2F37fc61b4-f0e5-46c2-af9d-80f0b15b12c1%2F67189_ktr5R2gTZl44Bt3WKDgx2w.jpg",
    ],
    city: "Bərdə",
    dates: "Bu gün  14:30",
  },
  {
    id: "16",
    brand: "Ford",
    model: "Sedan",
    banType: "Sedan",
    odometer: 122000,
    odometerUnit: "km",
    price: 40000,
    currency: "AZN",
    year: "2015",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F28%2F22%2F00%2F43%2F37fc61b4-f0e5-46c2-af9d-80f0b15b12c1%2F67189_ktr5R2gTZl44Bt3WKDgx2w.jpg",
    ],
    city: "Bərdə",
    dates: "Bu gün  14:30",
  },
  {
    id: "17",
    brand: "Ford",
    model: "Sedan",
    banType: "Sedan",
    odometer: 12000,
    odometerUnit: "km",
    price: 40000,
    currency: "EUR",
    year: "2015",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F22%2F15%2F32%2F14%2F772966ba-5666-475a-a372-f12bf29a6393%2F78864_UB3_bVH_R5hoI0WN_uPsDQ.jpg",
    ],
    city: "Bərdə",
    dates: "Bu gün  14:30",
  },
  {
    id: "18",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 10000,
    odometerUnit: "km",
    price: 33000,
    currency: "AZN",
    year: "2005",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F22%2F21%2F06%2F21%2F7fc2989d-5606-4bba-84d5-91a7c1e3c11b%2F86601_iBRqpWaL3FFHzWvi-4ZGNQ.jpg",
    ],
    city: "Yevlax",
    dates: "Bu gün  14:30",
  },
  {
    id: "19",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 30000,
    odometerUnit: "km",
    price: 40000,
    currency: "EUR",
    year: "2005",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F12%2F19%2F55%2F07%2F9e2ccf81-d944-4b2f-8e63-a63bb368dfeb%2F8520_gtkNyAHKA6hUsNhuKMZOxw.jpg",
    ],
    city: "Göyçay",
    dates: "Bu gün  14:30",
  },
  {
    id: "20",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 50000,
    odometerUnit: "km",
    price: 12000,
    currency: "USD",
    year: "2005",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F06%2F13%2F55%2F32%2Facf4c052-5a2e-4bd0-a0df-e28ecc595151%2F11719_z5jP8sffJjJ_qsKGBXbQsw.jpg",
    ],
    city: "İmişli",
    dates: "Bu gün  14:30",
  },
  {
    id: "21",
    brand: "Mercedes",
    model: "A 140",
    banType: "Hetçbek",
    odometer: 50000,
    odometerUnit: "km",
    price: 12000,
    currency: "USD",
    year: "2005",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F29%2F19%2F39%2F48%2Fbae4dd1b-0f4e-4894-9e9b-7d4ed873ab27%2F67204_3_Uie01KEoSx4Ki0QWYwnA.jpg",
    ],
    city: "Bərdə",
    dates: "Bu gün  14:30",
  },
  {
    id: "22",
    brand: "Chevrolet",
    model: "Gatsby",
    banType: "Kabriolet",
    odometer: 16900,
    odometerUnit: "km",
    price: 126000,
    currency: "USD",
    year: "1986",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F09%2F16%2F12%2F50%2F42%2Febf8e8a9-4b9e-42d1-bb0c-725555a056e1%2F54915_qtOrHDVrjjW3-GNgDyN8vg.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "23",
    brand: "Jaguar",
    model: "F-Type R",
    banType: "Kupe",
    odometer: 23000,
    odometerUnit: "km",
    price: 53000,
    currency: "USD",
    year: "2014",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F07%2F08%2F11%2F07%2F31%2Fd5fce961-38e1-47dd-8cf2-0eafc47ddb85%2F48187_u9isVaR_H7KHZwjuTS97bA.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "24",
    brand: "Mercedes",
    model: "E 430",
    banType: "Kupe",
    odometer: 20200,
    odometerUnit: "km",
    price: 22000,
    currency: "AZN",
    year: "2000",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F30%2F18%2F47%2F06%2F92202a2f-1f27-453f-a37e-c03b988d1187%2F49755_qZklKVXHkSfjWtrA_iHn_A.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "25",
    brand: "C.Moto",
    model: "CM250R- HY",
    banType: "Motosiklet",
    odometer: 0,
    odometerUnit: "km",
    price: 5400,
    currency: "AZN",
    year: "2023",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F31%2F16%2F42%2F46%2Fb60abf3c-aff7-450d-b793-bf93ceff3a06%2F15660_QvgVQpBtt9j4-9bpnj5N8Q.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "26",
    brand: "Tayota",
    model: "Sienna",
    banType: "Minivan",
    odometer: 22000,
    odometerUnit: "km",
    price: 51400,
    currency: "USD",
    year: "2020",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F12%2F29%2F00%2F03%2F08%2F2ac930d3-3d5a-4b19-94fb-b63850ff5693%2F15334_aQbJ3Ea3Oz_WMOo_hHKCAg.jpg",
    ],
    city: "Horadiz",
    dates: "Bu gün  14:30",
  },
  {
    id: "27",
    brand: "Tayota",
    model: "Prius",
    banType: "Liftbek",
    odometer: 188293,
    odometerUnit: "km",
    price: 13900,
    currency: "EUR",
    year: "2020",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F24%2F14%2F33%2F40%2F0f9b3be6-4ae5-417a-bcf1-db0f39927d4e%2F33485_P0YBt9TmP9pEv29rCuhWLg.jpg",
    ],
    city: "İsmayıllı",
    dates: "Bu gün  14:30",
  },
  {
    id: "28",
    brand: "Porsche",
    model: "Panamera GTS",
    banType: "Liftbek",
    odometer: 188293,
    odometerUnit: "km",
    price: 55000,
    currency: "EUR",
    year: "2020",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F02%2F01%2F01%2F26%2F17%2Ffb77794e-9d37-424e-944d-3b233bc03467%2F12003_RjupQqZAh9kZFu-IaHqJ7g.jpg",
    ],
    city: "Şahbuz",
    dates: "Bu gün  14:30",
  },
  {
    id: "29",
    brand: "Paz",
    model: "672",
    banType: "Avtobus",
    odometer: 50000,
    odometerUnit: "km",
    price: 12000,
    currency: "USD",
    year: "2005",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F23%2F21%2F49%2F47%2F18227380-ca87-4ecc-8497-3c972bce2db1%2F42127_wKRyc3J6-wogJe-WZMY-ug.jpg",
    ],
    city: "İmişli",
    dates: "Bu gün  14:30",
  },
  {
    id: "30",
    brand: "Ferrari",
    model: "California",
    banType: "Rodster",
    odometer: 20000,
    odometerUnit: "km",
    price: 135000,
    currency: "USD",
    year: "2017",
    credit: true,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F12%2F28%2F15%2F40%2F48%2Fb18d5c9e-58d7-4e2e-9bba-1c29cbce9940%2F61425_r8Og48iy5Jr9GvOTtAnnyQ.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "31",
    brand: "Mercedes",
    model: "E 280",
    banType: "Sedan",
    odometer: 129000,
    odometerUnit: "km",
    price: 19700,
    currency: "AZN",
    year: "2009",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F31%2F21%2F26%2F41%2Fa8168d7c-d02e-495f-8f01-69fcdc5e3e03%2F11997_tG1Qr36Aqkf171mt0oZG7Q.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "32",
    brand: "Mercedes",
    model: "E 200",
    banType: "Sedan",
    odometer: 315000,
    odometerUnit: "km",
    price: 14000,
    currency: "AZN",
    year: "2001",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F02%2F01%2F00%2F51%2F52%2F5638fb6b-7249-4f46-abd0-aa1efc451203%2F15643_AMLCTJrCWlvBJ6SXlF8fpg.jpg",
    ],
    city: "Sumqayıt",
    dates: "Bu gün  14:30",
  },
  {
    id: "33",
    brand: "Mercedes",
    model: "C 240",
    banType: "Sedan",
    odometer: 451000,
    odometerUnit: "km",
    price: 9500,
    currency: "AZN",
    year: "1997",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F02%2F01%2F00%2F50%2F33%2Fd092e0d3-04c1-4af7-a730-c240c35f5f7d%2F15649_bymZBq9rqL0M4TLjYtXR4A.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "34",
    brand: "Mercedes",
    model: "A 170",
    banType: "Hetçbek",
    odometer: 199000,
    odometerUnit: "km",
    price: 10200,
    currency: "AZN",
    year: "2006",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F30%2F20%2F06%2F23%2F76cef983-6b3b-47b8-a58d-dfb3cf469b5d%2F75221_xUr0C4Z--56j6RIijVBWVA.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "35",
    brand: "Mercedes",
    model: "Actros 1841",
    banType: "Dartqı",
    odometer: 1300000,
    odometerUnit: "km",
    price: 67500,
    currency: "AZN",
    year: "2008",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F11%2F09%2F08%2F03%2F05%2Fcabbc910-8026-456f-a642-62ab99fc313e%2F10369_bNrqvfrJMy63hz0DwhXPcg.jpg",
    ],
    city: "Lənkəran",
    dates: "Bu gün  14:30",
  },
  {
    id: "36",
    brand: "Mercedes",
    model: "G 63 AMG",
    banType: "Offroader / SUV",
    odometer: 28000,
    odometerUnit: "km",
    price: 90200,
    currency: "AZN",
    year: "2016",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F31%2F20%2F36%2F16%2Ffb49abb0-fdf6-4595-87b0-27bdd3c3d226%2F12009_q1FoKTnpPA3uE3dtRcZZUA.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "37",
    brand: "Mercedes",
    model: "200 D",
    banType: "Sedan",
    odometer: 552000,
    odometerUnit: "km",
    price: 5200,
    currency: "AZN",
    year: "1990",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F31%2F19%2F25%2F15%2F3aa9741d-4cc3-4ea0-9c3f-66ae5de0516b%2F6316_s0p7GRbRLVyaXdPugbuHeA.jpg",
    ],
    city: "Saatlı",
    dates: "Bu gün  14:30",
  },
  {
    id: "38",
    brand: "Mercedes",
    model: "0403",
    banType: "Avtobus",
    odometer: 700000,
    odometerUnit: "km",
    price: 110000,
    currency: "AZN",
    year: "2000",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F21%2F15%2F25%2F13%2F02798cb4-1129-4629-93af-b6dccb089966%2F78886_JqpeH6a5xab8QHW6E7dXKg.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "39",
    brand: "Mercedes",
    model: "GLC 300 Coupe",
    banType: "Kupe",
    odometer: 7000,
    odometerUnit: "km",
    price: 72000,
    currency: "USD",
    year: "2021",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F12%2F12%2F32%2F34%2Fef66aacc-979f-4824-9c38-4151faad457e%2F45824__18habOQ883XXQctAU0TAg.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "40",
    brand: "Mercedes",
    model: "AMG GT 53",
    banType: "Sedan",
    odometer: 0,
    odometerUnit: "km",
    price: 210000,
    currency: "EUR",
    year: "2023",
    credit: true,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F11%2F24%2F15%2F43%2F27%2Ff071d240-bc97-412c-a94a-bd3d676a51b2%2F23828_xAXUnAgmfcF8tuCOsfkz8Q.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "41",
    brand: "Mercedes",
    model: "170 V",
    banType: "Kupe",
    odometer: 82000,
    odometerUnit: "km",
    price: 500000,
    currency: "AZN",
    year: "1938",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F10%2F27%2F14%2F39%2F36%2F923ef17d-e1f9-4149-9e94-f925cf7661b7%2F42871_umKrn-lPv1BfkzuD5arziA.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "42",
    brand: "Jaguar",
    model: "XF",
    banType: "Sedan",
    odometer: 95000,
    odometerUnit: "km",
    price: 35000,
    currency: "AZN",
    year: "2014",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F28%2F12%2F48%2F02%2Fe5c1b65a-c97f-4f94-ab4d-fcac497b20b6%2F67186_iILaSiss0FC-yQLMTjYR9A.jpg",
    ],
    city: "Sumqayıt",
    dates: "Bu gün  14:30",
  },
  {
    id: "43",
    brand: "Jaguar",
    model: "S-Type",
    banType: "Sedan",
    odometer: 190000,
    odometerUnit: "km",
    price: 17000,
    currency: "AZN",
    year: "2007",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F30%2F20%2F01%2F36%2Fb8325e8f-b0b1-4423-8163-59ab513c0445%2F49759_qjtKYlmSfvuA_6JFNFa8AQ.jpg",
    ],
    city: "Gəncə",
    dates: "Bu gün  14:30",
  },
  {
    id: "44",
    brand: "Jaguar",
    model: "XF",
    banType: "Sedan",
    odometer: 9500,
    odometerUnit: "km",
    price: 58000,
    currency: "USD",
    year: "2019",
    credit: true,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2021%2F02%2F04%2F11%2F55%2F52%2Ff3ddd4c9-1600-4d6d-b34f-5853f3c1ff71%2F19864_8RtK5APm1te6PSMZ3o2MLg.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "45",
    brand: "Jaguar",
    model: "F-Type R,",
    banType: "Sedan",
    odometer: 500,
    odometerUnit: "km",
    price: 60000,
    currency: "EUR",
    year: "2020",
    credit: true,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F12%2F31%2F11%2F03%2F22%2Fb774f69d-3dc8-45d8-bf74-7fe3b1e68012%2F16508_ZEyGXYpx-MxvNSzE3M3s7A.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "46",
    brand: "Acura",
    model: "MDX",
    banType: "Offroader / SUV",
    odometer: 500,
    odometerUnit: "km",
    price: 60000,
    currency: "EUR",
    year: "2020",

    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F31%2F13%2F41%2F14%2F30be4e7e-c9ac-455d-8616-616f096d6da7%2F71593_f9yNl7lW4FO-spgOift6dw.jpg",
    ],
    city: "Mingecevir",
    dates: " Bu gün  14:30",
  },
]
let input = document.querySelector('.marka')
let input2 = document.querySelector('.model')
let input4 = document.querySelector('.seher')
let input7 = document.querySelector('.ban')
let downIcon = document.querySelector('.fa-chevron-down')
let downIcon2 = document.querySelector('.down2')
let downIcon4 = document.querySelector('.down4')
let downIcon6 = document.querySelector('.down6')
let downIcon7 = document.querySelector('.down7')
let downIcon8 = document.querySelector('.down8')
let downIcon8_8 = document.querySelector('.down8_8')
let dropdownInput = document.querySelector('.dropdownInput')
let dropdownInput4 = document.querySelector('.dropdownInput4')
let sifir = document.querySelector('.sifir')
let input_title = document.querySelector('.inputTitle')
let input_title2 = document.querySelector('.inputTitle2')
let input_title4 = document.querySelector('.inputTitle4')
let input_title7 = document.querySelector('.inputTitle7')
let dropdownInput2 = document.querySelector('.dropdownInput2')
let disabled = document.querySelector('.disabled')
let cityMap = []
let banMap = []
let brands = []
for(i of cars){
  i.islike = false
}
function createBrandList(a) {
  brands = []
  if (a.length == 0) {
    dropdownInput.innerHTML = '<p class="sifir">Heç nə tapılmadı</p>'
  }
  else if (a.length == cars.length) {
    dropdownInput.innerHTML = '<p  class="sifir" onmousedown = sifirla() id="sifir"><i class="fa-solid fa-xmark"></i>Sifirla</p>'
    dropdownInput.style.overflowY = 'scroll'
  }
  else {
    dropdownInput.style.overflowY = 'hidden'
  }

  for (let i of a) {
    if (!brands.includes(i.brand)) {
      brands.push(i.brand)
      dropdownInput.innerHTML += `<p class = 'cars_option' onmousedown = selectBrand('${i.brand}') id = '${i.brand}'>${i.brand} </p>`
    }
    if (document.getElementById(i.brand).id == lastBrand) {
      document.getElementById(i.brand).classList.add('red')
    }
  }

}
let lastBrand = 'Markani secin'
function inputFocus() {
  createBrandList(cars)
  input.value = ''
  input.style.border = '1px solid #8d94ad'
  input.placeholder = lastBrand
  input.style.paddingBlock = '14px'
  downIcon.style.transform = 'translateY(-50%) rotate(180deg)'
  dropdownInput.classList.add('dropVisible')
  input_title.classList.remove('titleVisible')
}
function inputBlur() {
  downIcon.style.transform = 'translateY(-50%) rotate(0deg)'
  dropdownInput.classList.remove('dropVisible')
  if (lastBrand != 'Markani secin') {
    input.value = lastBrand
    input_title.classList.add('titleVisible')
    input.style.paddingBlock = '21px 7px'
  }
  else {
    input.style.border = '1px solid #dfe3e9'
    input2.style.border = '1px solid #dfe3e9'
  }
  if (input.placeholder == 'Markani secin') {
    input.placeholder = 'Marka'
  }
}
function sifirla() {
  input.placeholder = 'Marka'
  lastBrand = 'Markani secin'
  input.style.border = '1px solid #dfe3e9'
  input2.value = ''
  input2.style.paddingBlock = '14px'
  input_title2.style.display = 'none'
  if (input.value == '') {
    disabled.style.display = 'block'
  }
  sifirla2()
}
function selectBrand(a) {
  input.value = a
  lastBrand = a
  disabled.style.display = 'none'
  selectedModel = []
  input2.placeholder = 'Model'
  input2.style.border = '1px solid #dfe3e9'
  input_title2.style.display = 'none'
  input2.value = ''
  input2.style.paddingBlock = '14px'
  createModelList()
}
input.onfocus = inputFocus
input.onblur = inputBlur
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
let listMap
function inputNewList() {
  listMap = []
  cars.forEach(function (value) {
    if (value.brand.includes(capitalizeFirstLetter(input.value))) {
      listMap.push(value)
    }
  })
  dropdownInput.innerHTML = ''
  createBrandList(listMap)
}
input.oninput = inputNewList

//-----------Model------------
let modelMap
function makeIdModel(a) {
  return a.split(' ').join('') + 'Model'
}
function sifirla2() {
  dropdownInput2.classList.remove('dropVisible')
  input2.style.border = '1px solidrgb(3, 3, 3)'
  input2.placeholder = 'Model'
  selectedModel = []
  createModelList()
}
function createModelList() {
  dropdownInput2.innerHTML = '<p  class="sifir" onmousedown = sifirla2() id="sifir"><i class="fa-solid fa-xmark"></i>Sifirla</p>'
  modelMap = []
  cars.forEach(function (item) {
    if (item.brand === input.value && !modelMap.includes(item.model)) {
      modelMap.push(item.model)
    }
  })
  modelMap.forEach(function (item) {
    let modelId = makeIdModel(item)
    dropdownInput2.innerHTML += `
    <label class="modelCheck cars_option" for="${modelId}input" onclick = "selectModel('${modelId}')">
      <p id = '${modelId}'>${item}</p>
      <input id='${modelId}input' type="checkbox">
      <div class="checkButton" id = "${modelId}button">
        <i class="fa-solid fa-check"></i>  
      </div>
    </label>`
  })
}
document.addEventListener('mousedown', function (event) {
  if (!dropdownInput2.contains(event.target) && event.target !== input2) {
    dropdownInput2.classList.remove('dropVisible')
    downIcon2.style.transform = 'translateY(-50%) rotate(0deg)'
    if (selectedModel != 'Modeli yazin' && selectedModel.length != 0) {
      input2.style.paddingBlock = '21px 7px'
      input2.value = selectedModel
      input_title2.style.display = 'block'
    }
    else {
      input2.style.border = '1px solid #dfe3e9'
      input2.placeholder = 'Model'
    }
  }

  if (!dropdownInput4.contains(event.target) && event.target !== input4) {
    dropdownInput4.classList.remove('dropVisible')
    downIcon4.style.transform = 'translateY(-50%) rotate(0deg)'
    if (!cityMap.includes(input4.value)) {
      input4.value = ''
    }
    if (selectedSeher != 'Seher' && selectedSeher.length != 0) {
      input4.style.paddingBlock = '21px 7px'
      input4.value = selectedSeher
      input_title4.style.display = 'block'
    }
    else {
      input4.style.border = '1px solid #dfe3e9'
    }
  }

  if (!dropdownInput7.contains(event.target) && event.target !== input7) {
    dropdownInput7.classList.remove('dropVisible')
    downIcon7.style.transform = 'translateY(-50%) rotate(0deg)'
    if (!banMap.includes(input7.value)) {
      input7.value = ''
    }
    if (selectedBan != 'Seher' && selectedBan.length != 0) {
      input7.style.paddingBlock = '21px 7px'
      input7.value = selectedBan
      input_title7.style.display = 'block'
    }
    else {
      input7.style.border = '1px solid #dfe3e9'
    }
    if (input7.placeholder == 'Ban novu') {
      input7.value = ''
      input_title7.style.display = 'none'
      input7.style.paddingBlock = '14px'
    }
  }
})
function input2Focus() {
  dropdownInput2.classList.add('dropVisible')
  input2.style.border = '1px solid #8d94ad'
  downIcon2.style.transform = 'translateY(-50%) rotate(180deg)'
  input2.value = ''
  input2.style.paddingBlock = '14px'
  input_title2.style.display = 'none'
  if (input2.placeholder == 'Model') {
    input2.placeholder = 'Modeli yazin'
  }
}
let selectedModel = []
function selectModel(a) {
  let modelButton = document.getElementById(`${a}button`)
  let modelInput = document.getElementById(`${a}input`)
  let model = document.getElementById(a)
  if (selectedModel == 'Modeli yazin' && modelInput.checked) {
    selectedModel = []
  }
  if (modelInput.checked) {
    modelButton.classList.add('checkedButton')
    model.classList.add('red')
    if (!selectedModel.includes(model.innerHTML)) {
      selectedModel.push(model.innerHTML)
    }
    else {
      selectedModel.splice(selectedModel.indexOf(model.innerHTML), 1)
      if (selectedModel.length == 0) {
        selectedModel = 'Modeli yazin'
      }
    }
  }
  else {
    modelButton.classList.remove('checkedButton')
    model.classList.remove('red')
  }
  input2.placeholder = selectedModel
}
input2.onfocus = input2Focus
//----------input3-------------
let all_cars = document.querySelector('.type_1')
let input3 = document.querySelector('#input3')

all_cars.classList.add('input3_checked')
function selectType() {
  setTimeout(() => {
    for (let i = 1; i <= 3; i++) {
      if (document.getElementById(`type${i}`).checked) {
        document.querySelector(`.type_${i}`).classList.add('input3_checked')
        input3.value = document.querySelector(`.type_${i}`).innerHTML
      }
      else {
        document.querySelector(`.type_${i}`).classList.remove('input3_checked')
      }
    }
  }, 0);
}
//----------seher----------
function sifirla4() {
  input4.placeholder = 'Seher'
  selectedSeher = []
  input4.value = ''
  input4.style.border = '1px solid #dfe3e9'
  dropdownInput4.classList.remove('dropVisible')
}
function createSeherList(a) {
  dropdownInput4.innerHTML = '<p  class="sifir" onmousedown = sifirla4() id="sifir"><i class="fa-solid fa-xmark"></i>Sifirla</p>'
  let seherMap = new Set(a.map(item => item.city).sort())
  if (a.length == 0) {
    dropdownInput4.innerHTML = '<p class="sifir">Heç nə tapılmadı</p>'
  } else {
    seherMap.forEach(function (item) {
      dropdownInput4.innerHTML += `
    <label class="seherCheck cars_option" for="${item}input" onclick = "selectSeher('${item}')">
      <p id = '${item}'>${item}</p>
      <input id='${item}input' type="checkbox">
      <div class="checkButton" id = "${item}button">
        <i class="fa-solid fa-check"></i>  
      </div>
    </label>`
      setTimeout(() => {
        if (selectedSeher.includes(item)) {
          document.getElementById(`${item}input`).checked = true
          document.getElementById(item).classList.add('red')
          document.getElementById(`${item}button`).classList.add('checkedButton')
        }
      }, 0);
    })
  }
}
let selectedSeher = []
function selectSeher(a) {
  let seherButton = document.getElementById(`${a}button`)
  let seherInput = document.getElementById(`${a}input`)
  let seher = document.getElementById(a)
  input4.value = ''
  if (selectedSeher == 'Seher' && seherInput.checked) {
    selectedSeher = []
  }
  if (seherInput.checked) {
    seherButton.classList.add('checkedButton')
    seher.classList.add('red')
    if (!selectedSeher.includes(seher.innerHTML)) {
      selectedSeher.push(seher.innerHTML)
    }
    else {
      selectedSeher.splice(selectedSeher.indexOf(seher.innerHTML), 1)
      if (selectedSeher.length == 0) {
        selectedSeher = 'Seher'
      }
    }
  }
  else {
    seherButton.classList.remove('checkedButton')
    seher.classList.remove('red')
  }
  lastSeher = selectedSeher
  input4.placeholder = selectedSeher
}
function input4Focus() {
  dropdownInput4.classList.add('dropVisible')
  input4.style.border = '1px solid #8d94ad'
  downIcon4.style.transform = 'translateY(-50%) rotate(180deg)'
  input4.value = ''
  input4.style.paddingBlock = '14px'
  input_title4.style.display = 'none'
  createSeherList(cars)
}
function input4NewList() {
  cityMap = []
  cars.forEach(function (item) {
    if (item.city.includes(capitalizeFirstLetter(input4.value))) {
      cityMap.push(item)
    }
  })
  createSeherList(cityMap)
}
createSeherList(cars)
input4.onfocus = input4Focus
input4.oninput = input4NewList

//--------input5----------

function title_add(a) {
  let title = document.querySelector(`.${a}`)
  title.classList.add('title_change')
}
function title_remove(a, b) {
  let price = document.querySelector(`.${a}`)
  let title = document.querySelector(`.${b}`)
  if (price.value == '') {
    title.classList.remove('title_change')
  }
}
function showDelete(a, b) {
  let price = document.querySelector(`.${a}`)
  let delete_icon = document.getElementById(b)
  if (price.value != '') {
    delete_icon.style.display = 'flex'
  }
  else {
    delete_icon.style.display = 'none'
  }
}
function deleteIcon(a, b, c) {
  let delete_icon = document.getElementById(a)
  let title = document.querySelector(`.${b}`)
  let price = document.querySelector(`.${c}`)
  delete_icon.style.display = 'none'
  title.classList.remove('title_change')
  price.value = ''
}
//-----------box6-----------
let currency_box = document.querySelector('.currency-box')
let valyuta = document.querySelector('#currency')
let dropdownInput6 = document.querySelector('.dropdownInput6')

document.addEventListener('click', function (event) {
  if (event.target.id == 'currency-box' || event.target.id == 'currency' || event.target.id == 'down4') {
    currency_box.style.border = '1px solid #8d94ad'
    for (let i = 1; i <= 3; i++) {
      if (document.querySelector(`#cur${i}`).innerHTML == lastValyuta) {
        document.querySelector(`#cur${i}`).classList.add('red')
      }
      else {
        document.querySelector(`#cur${i}`).classList.remove('red')
      }
    }
    dropdownInput6.classList.add('dropVisible')
    downIcon6.style.transform = 'translateY(-50%) rotate(180deg)'
  }
  else {
    dropdownInput6.classList.remove('dropVisible')
    downIcon6.style.transform = 'translateY(-50%) rotate(00deg)'
  }
})
let lastValyuta
function selectCurrency(a) {
  valyuta.innerHTML = document.getElementById(a).innerHTML
  lastValyuta = document.getElementById(a).innerHTML
  document.getElementById(a).classList.add('red')
  if (a == 'cur1') {
    currency_box.style.border = '1px solid #dfe3e9'
  }
}
function changeBorder(event) {
  if (event.target.style.border != '1px solid #ca0f16') {
    event.target.style.border = '1px solid #8d94ad'
  }
}
function changeBorder2(event) {
  event.target.style.border = '1px solid #dfe3e9'
}
function kreditAndBarter(event) {
  event.target.classList.toggle('kreditAndBarterVisible')
}
document.querySelector(".kredit").onclick = kreditAndBarter
document.querySelector(".kredit").onmouseenter = changeBorder
document.querySelector(".kredit").onmouseleave = changeBorder2
document.querySelector(".barter").onclick = kreditAndBarter
document.querySelector(".barter").onmouseenter = changeBorder
document.querySelector(".barter").onmouseleave = changeBorder2


//-------------ban-------------
let dropdownInput7 = document.querySelector(".dropdownInput7")
function sifirla7() {
  input7.placeholder = 'Ban novu'
  selectedBan = []
  input7.value = ''
  input7.style.border = '1px solid #dfe3e9'
  dropdownInput7.classList.remove('dropVisible')
  setTimeout(() => {
    createBanList(cars)
  }, 100);
}
function createBanList(a) {
  dropdownInput7.innerHTML = '<p  class="sifir" onmousedown = sifirla7() id="sifir"><i class="fa-solid fa-xmark"></i>Sifirla</p>'
  let banMap = new Set(a.map(item => item.banType).sort())
  if (a.length == 0) {
    dropdownInput7.innerHTML = '<p class="sifir">Heç nə tapılmadı</p>'
  } else {
    banMap.forEach(function (item) {
      let banId = makeIdModel(item)
      dropdownInput7.innerHTML += `
    <label class="banCheck cars_option" for="${banId}input" onclick = "selectBan('${banId}')">
      <p id = '${banId}'>${item}</p>
      <input id='${banId}input' type="checkbox">
      <div class="checkButton" id = "${banId}button">
        <i class="fa-solid fa-check"></i>  
      </div>  
    </label>`
      if (selectedBan.includes(item)) {
        setTimeout(() => {
          document.getElementById(`${banId}input`).checked = true
          document.getElementById(banId).classList.add('red')
          document.getElementById(`${banId}button`).classList.add('checkedButton')
        }, 0);
      }
    })
  }
}
let selectedBan = []
function selectBan(a) {
  let banButton = document.getElementById(`${a}button`)
  let banInput = document.getElementById(`${a}input`)
  let ban = document.getElementById(a)
  input7.value = ''
  if (selectedBan == 'Ban novu' && banInput.checked) {
    selectedBan = []
  }
  if (banInput.checked) {
    banButton.classList.add('checkedButton')
    ban.classList.add('red')
    if (!selectedBan.includes(ban.innerHTML)) {
      selectedBan.push(ban.innerHTML)
    }
    else {
      selectedBan.splice(selectedBan.indexOf(ban.innerHTML), 1)
      if (selectedBan.length == 0) {
        selectedBan = 'Ban novu'
      }
    }
  }
  else {
    banButton.classList.remove('checkedButton')
    ban.classList.remove('red')
  }
  lastBan = selectedBan
  input7.placeholder = selectedBan
}
function input7Focus() {
  dropdownInput7.classList.add('dropVisible')
  input7.style.border = '1px solid #8d94ad'
  downIcon7.style.transform = 'translateY(-50%) rotate(180deg)'
  input7.value = ''
  input7.style.paddingBlock = '14px'
  input_title7.style.display = 'none'
  createBanList(cars)
}
function input7NewList() {
  banMap = []
  cars.forEach(function (item) {
    if (item.banType.includes(capitalizeFirstLetter(input7.value))) {
      banMap.push(item)
    }
  })
  createBanList(banMap)
}
createBanList(cars)
input7.onfocus = input7Focus
input7.oninput = input7NewList

//---------year---------

let dropdownInput8 = document.querySelector('.dropdownInput8')
let dropdownInput8_8 = document.querySelector('.dropdownInput8_8')
let min_year = document.querySelector('.min_year')
let max_year = document.querySelector('.max_year')
let min_year_box = document.querySelector('.min_year_box')
let max_year_box = document.querySelector('.max_year_box')
let input_title8 = document.querySelector('.inputTitle8')
let input_title8_8 = document.querySelector('.inputTitle8_8')
let last_min_year
let last_max_year

min_year_list()
max_year_list()
function min_year_list(a) {
  dropdownInput8.innerHTML = '<p  class="sifir" onmousedown = sifirla8("dropdownInput8") id="sifir"><i class="fa-solid fa-xmark"></i>Sifirla</p>'
  for (let i = 2025; i >= 1905; i--) {
    dropdownInput8.innerHTML += `<p class="cars_option" id='${i}' onclick="selectMinYear('${i}')">${i}</p>`
    if (i == a) {
      document.getElementById(i).style.color = 'red'
    }
  }
}
function max_year_list(a) {
  dropdownInput8_8.innerHTML = '<p  class="sifir" onmousedown = sifirla8_8("dropdownInput8_8") id="sifir"><i class="fa-solid fa-xmark"></i>Sifirla</p>'
  for (let i = 2025; i >= 1905; i--) {
    dropdownInput8_8.innerHTML += `<p class="cars_option" id='${i}max' onclick="selectMaxYear('${i}')">${i}</p>`
    if (i == a) {
      document.getElementById(`${i}max`).style.color = 'red'
    }
  }
}
function sifirla8(a) {
  min_year.style.alignContent = 'center'
  min_year.style.paddingBottom = '0px'
  input_title8.style.display = 'none'
  min_year.innerHTML = 'Il, min.'
  min_year.style.color = '#8d94ad'
  document.querySelector(`.${a}`).classList.remove('dropVisible8')
  min_year_list()
}
function sifirla8_8(a) {
  max_year.style.alignContent = 'center'
  max_year.style.paddingBottom = '0px'
  input_title8_8.style.display = 'none'
  max_year.innerHTML = 'maks.'
  max_year.style.color = '#8d94ad'
  document.querySelector(`.${a}`).classList.remove('dropVisible8')
  max_year_list()
}
function showYearList(a) {
  document.querySelector(`.${a}`).classList.add('dropVisible8')
  downIcon8.style.transform = 'translateY(-50%) rotate(180deg)'
  min_year.style.alignContent = 'center'
  min_year.style.paddingBottom = '0px'
  input_title8.style.display = 'none'
  if (min_year.innerHTML != 'Il, min.') {
    min_year.innerHTML = last_min_year
    min_year.style.color = 'black'
  }
}
function showYearList2(a) {
  document.querySelector(`.${a}`).classList.add('dropVisible8')
  downIcon8_8.style.transform = 'translateY(-50%) rotate(180deg)'
  max_year.style.alignContent = 'center'
  max_year.style.paddingBottom = '0px'
  input_title8_8.style.display = 'none'
  if (max_year.innerHTML != 'maks.') {
    max_year.innerHTML = last_max_year
    max_year.style.color = 'black'
  }
}
function selectMinYear(a) {
  min_year.innerHTML = a
  last_min_year = a
  input_title8.style.display = 'block'
  min_year.style.alignContent = 'end'
  min_year.style.paddingBottom = '6px'
  min_year.style.color = 'black'
  dropdownInput8.classList.remove('dropVisible8')
  downIcon8.style.transform = 'translateY(-50%) rotate(0deg)'
  min_year_list(a)
}
function selectMaxYear(a) {
  max_year.innerHTML = a
  last_max_year = a
  input_title8_8.style.display = 'block'
  max_year.style.alignContent = 'end'
  max_year.style.paddingBottom = '6px'
  max_year.style.color = 'black'
  dropdownInput8_8.classList.remove('dropVisible8')
  downIcon8_8.style.transform = 'translateY(-50%) rotate(0deg)'
  max_year_list(a)
}
document.addEventListener('mousedown', function (event) {
  if (!dropdownInput8.contains(event.target) && event.target != min_year) {
    downIcon8.style.transform = 'translateY(-50%) rotate(0deg)'
    dropdownInput8.classList.remove('dropVisible8')
    if (min_year.innerHTML != 'Il, min.') {
      input_title8.style.display = 'block'
      min_year.style.alignContent = 'end'
      min_year.style.paddingBottom = '6px'
    }
  }
  if (!dropdownInput8_8.contains(event.target) && event.target != max_year) {
    downIcon8_8.style.transform = 'translateY(-50%) rotate(0deg)'
    dropdownInput8_8.classList.remove('dropVisible8')
    if (max_year.innerHTML != 'maks.') {
      input_title8_8.style.display = 'block'
      max_year.style.alignContent = 'end'
      max_year.style.paddingBottom = '6px'
    }
  }
})

//--------cards----------
let elanlar = document.querySelector('.elanlar')
let min_price = document.querySelector('.min_price')
let max_price = document.querySelector('.max_price')
let kredit_box = document.querySelector(".kredit")
let barter_box = document.querySelector(".barter")
let cardsMap
newCards(cars)
function newCards(a) {
  if (a.length != 0) {
    elanlar.style.display = 'flex'
    cardsMap = a.map(createCards)
    setTimeout(() => {
      let cards_all = document.querySelectorAll('.card')
      for (let i = 0; i < cards_all.length; i++) {
        cards_all[i].classList.add(`likes${i}`)
        console.log(a[i].id);
        cards_all[i].innerHTML +=
          `<i id = '${i}' onclick = like_car(event,'${i}') class="fa-regular fa-heart heart1"></i>
          <i id = '${i}bg' class="fa-solid fa-heart heartbg" style ='visibility:${cars[a[i].id].islike ?'visible' :'hidden'};' ></i>`
      }
    }, 0);
  }
  else {
    elanlar.style.display = 'block'
    elanlar.innerHTML = `<div id="none-box">
            <img src="none.png" alt="" id="none">
            <p style="color: #212c3a;">Təəssüf ki, axtarışınız əsasında heç nə tapılmadı.</p>
            <p style="color: #8d94ad;">Zəhmət olmasa, daha uyğun axtarış filtrləri seçin.</p>
        </div>`
    return
  }
  elanlar.innerHTML = cardsMap.join('')
}
function createCards(value, index) {
  const carUrl = `car.html?id=${index}&brand=${encodeURIComponent(value.brand)}&model=${encodeURIComponent(value.model)}&price=${encodeURIComponent(value.price)}&currency=${encodeURIComponent(value.currency)}&year=${encodeURIComponent(value.year)}&engine=${encodeURIComponent(value.engine)}&odometer=${encodeURIComponent(value.odometer)}&odometerUnit=${encodeURIComponent(value.odometerUnit)}&city=${encodeURIComponent(value.city)}&dates=${encodeURIComponent(value.dates)}&image=${encodeURIComponent(value.images[0])}`;

  return `
    <a href="${carUrl}" class="card" target="_blank">
        <img src="${value.images[0]}" alt="">
        <div class="card-info">
            <div class="car-barter-kredit">
            ${value.barter ? `
                <div class="car-barter">
                    <i class="fa-solid fa-repeat"></i>
                    <p class="barter-drop">Barter mumkundur </p>
                </div>` : ''}
            ${value.credit ? `
                <div class="car-kredit">
                    <i class="fa-solid fa-percent"></i>
                    <p class="kredit-drop">Kreditdedir</p>
                </div>`: ''}
            </div>
            <div class="price">${value.price} <span>${value.currency}</span></div>
            <div>
                <p class="car-brand">${value.brand}</p>
                <p class="car-model">${value.model}</p>
            </div>
            <div>
                <p class="car-year">${value.year}, </p>
                ${value.engine ? `<p class="car-engine">${value.engine} L, </p>` : ''}
                <p class="car-odometer">${value.odometer}</p>
                <p class="car-odometerUnit">${value.odometerUnit}</p>
            </div>
            <div>
                <p class="car-city">${value.city}, </p>
                <p class="car-date">${value.dates}</p>
            </div>
        </div>
    </a>
  `;

}

let cards_all = document.querySelectorAll('.card')
let liked_boxes = document.getElementById('secilmis_cars_box')
let element
let liked_element
let liked_cars = []
for (let i = 0; i < cards_all.length; i++) {
  cars[i].id = i
}
function like_car(event, a) {
  cars[a].islike = true
  event.preventDefault()
  liked_element = document.querySelector(`.likes${a}`)
  element = document.getElementById(`${a}bg`)
  if (element.style.visibility === 'hidden') {
    element.style.visibility = 'visible'
    liked_cars.push(liked_element)
  }
  else {
    element.style.visibility = 'hidden'
    cars[a].islike = false
    liked_cars.splice(liked_cars.indexOf(liked_element), 1)
    if (liked_boxes.contains(liked_element)) {
      liked_element.style.display = 'none'
      if (liked_cars.length == 0) {
        liked_boxes.innerHTML = `
        <div id="none-likes1">
        <img src="none-likes.svg" alt="">
        <p style="font: 500 18px Helvetica;color: black;">Bəyəndiyiniz elanları ürək işarəsinə klik edərək
        seçilmişlərə əlavə edin.</p>
        </div>
        `
      }
    }  
  }  


}  


let button_elan = document.getElementById('button-elan')
let like_button = document.querySelector('.fa-heart')
button_elan.onclick = function () {
  // liked_cars = []
  let ab
  let kredit_value
  let barter_value
  if (input3.value == 'Yeni') {
    ab = [0]
  }
  else if (input3.value == 'Surulmus') {
    ab = cars.filter(value => value.odometer != 0).map(value => value.odometer)
  }
  else {
    ab = cars.map(value => value.odometer)
  }
  if (kredit_box.classList[1] == 'kreditAndBarterVisible') {
    kredit_value = true
  }
  else {
    kredit_value = false
  }
  if (barter_box.classList[1] == 'kreditAndBarterVisible') {
    barter_value = true
  }
  else {
    barter_value = false
  }

  let cardsFilter = cars.filter(function (item) {
    return (item.brand == input.value || input.value == '') &&
      (input2.value.includes(item.model) || input2.value == '') &&
      (ab.includes(item.odometer)) &&
      (input4.value.includes(item.city) || input4.value == '') &&
      ((+min_price.value <= item.price && item.price <= +max_price.value)
        || (min_price.value == '' && max_price.value == '')
        || (+min_price.value <= item.price && max_price.value == '')
        || (min_price.value == '' && item.price <= +max_price.value)) &&
      (valyuta.innerHTML == item.currency) &&
      (input7.value.includes(item.banType) || input7.value == '') &&
      ((item.barter == barter_value && item.credit == kredit_value)
        || (!barter_value && item.credit && item.credit == kredit_value)
        || (!kredit_value && item.barter && item.barter == barter_value)
        || (!kredit_value && !barter_value)) &&
      ((+min_year.innerHTML <= item.year && item.year <= +max_year.innerHTML)
        || (min_year.innerHTML == 'Il, min.' && max_year.innerHTML == 'maks.')
        || (+min_year.innerHTML <= item.year && max_year.innerHTML == 'maks.')
        || (min_year.innerHTML == 'Il, min.' && item.year <= +max_year.innerHTML))
  })
  newCards(cardsFilter)

}
let sifirla_filter = document.getElementById('filter-none')
let type2 = document.getElementById('type2')
let type3 = document.getElementById('type3')
sifirla_filter.onclick = function () {
  input_title.classList.remove('titleVisible')
  input_title4.style.display = 'none'
  input_title7.style.display = 'none'
  input.style.paddingBlock = '14px'
  input4.style.paddingBlock = '14px'
  input7.style.paddingBlock = '14px'
  input.value = ''
  input4.value = ''
  selectedSeher = []
  input2.style.border = '1px solid #dfe3e9'
  input4.style.border = '1px solid #dfe3e9'
  document.getElementById(`type1`).checked = true
  barter_box.classList.remove('kreditAndBarterVisible')
  kredit_box.classList.remove('kreditAndBarterVisible')
  sifirla()
  sifirla4()
  title_remove('min_price', 'input_title5')
  title_remove('max_price', 'input_title5_5')
  deleteIcon('delete1', 'input_title5', 'min_price')
  deleteIcon('delete2', 'input_title5_5', 'max_price')
  selectCurrency('cur1')
  selectType()
  sifirla7()
  sifirla8("dropdownInput8")
  sifirla8_8("dropdownInput8_8")
}
document.addEventListener('click', function () {
  if ((input.value != '' || (input.placeholder != 'Marka'
    && input.placeholder != 'Markani secin')) || input2.value != '' ||
    (input4.value != '' || input4.placeholder != 'Seher') ||
    (input7.value != '' || input7.placeholder != 'Ban novu') ||
    (min_price.value != '') ||
    (max_price.value != '') ||
    (min_year.innerHTML != 'Il, min.') ||
    (max_year.innerHTML != 'maks.') ||
    (currency.innerHTML != 'AZN') ||
    (barter_box.classList[1] == 'kreditAndBarterVisible') ||
    (kredit_box.classList[1] == 'kreditAndBarterVisible')) {
    sifirla_filter.style.color = '#b80d13'
    sifirla_filter.style.cursor = 'pointer'

  }
  else {
    sifirla_filter.style.color = '#8d94ad'
    sifirla_filter.style.cursor = 'default'
  }
})
document.addEventListener('input', function () {
  if (min_price.value != '' || max_price.value != '' ||
    (input.value != '' || (input.placeholder != 'Marka'
      && input.placeholder != 'Markani secin')) || input2.value != '' ||
    (input4.value != '' || input4.placeholder != 'Seher') ||
    (input7.value != '' || input7.placeholder != 'Ban novu') ||
    (min_price.value != '') ||
    (max_price.value != '') ||
    (min_year.innerHTML != 'Il, min.') ||
    (max_year.innerHTML != 'maks.')
  ) {
    sifirla_filter.style.color = '#b80d13'
    sifirla_filter.style.cursor = 'pointer'
  }
  else {
    sifirla_filter.style.color = '#8d94ad'
    sifirla_filter.style.cursor = 'default'
  }
})
let more_filter = document.querySelector('.plus')
let more_filter_button = document.getElementById('more-filter')
function moreFilter() {
  more_filter.classList.toggle('plus-none')
  if (more_filter.classList[1] != 'plus-none') {
    more_filter_button.innerHTML = 'Gizlet <i class="fa-solid fa-chevron-down down9"></i>'
    document.querySelector('.down9').style.transform = 'rotate(180deg)'
  }
  else {
    more_filter_button.innerHTML = 'Daha cox filter <i class="fa-solid fa-chevron-down down9"></i>'
    document.querySelector('.down9').transform = 'rotate(0deg)'

  }
}
let filter2 = document.getElementById('filter2')
let filter1 = document.getElementById('filter')
let title_main = document.getElementById('title-main')
let title_sec = document.getElementById('sec_title')
function showLikedCars() {
  for(i of cars){
    console.log(i.islike);
  }
  // liked_cars = []
  liked_cars = liked_cars.filter((car, index) => liked_cars.indexOf(car) === index);
  console.log(liked_cars);
  elanlar.style.display = 'none'
  filter1.style.display = 'none'
  filter2.style.display = 'none'
  title_main.style.display = 'none'
  title_sec.style.display = 'block'
  liked_boxes.innerHTML = ''
  liked_boxes.style.display = 'flex'
  if (liked_cars.length == 0) {
    liked_boxes.innerHTML = `
    <div id="none-likes1">
    <img src="none-likes.svg" alt="">
    <p style="font: 500 18px Helvetica;color: black;">Bəyəndiyiniz elanları ürək işarəsinə klik edərək
    seçilmişlərə əlavə edin.</p>
    </div>
    `
  } else {
    for (i of liked_cars) {
      liked_boxes.innerHTML += i.outerHTML
    }
  }
}

