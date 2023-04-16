const arrMedicamentos = [
  {
    nombre: "AB",
    laboratorio: "SAVAL",
  },
  {
    nombre: "AB ANTITUSIVO",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ABACTEN",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ABACTEN FORTE",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ABALGIN Gotas",
    laboratorio: "CHILE",
  },
  {
    nombre: "ABALGIN Supositorio Adulto-Supositorio Infantil",
    laboratorio: "CHILE",
  },
  {
    nombre: "ABECIDIN A C D",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "ABETAL ODT Comprimidos Dispersables",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ABIOLEX",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ABIOLEX DUO",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ABIOSTAL ODT",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ABRAXANE® Liofilizado para Suspensión Inyectable",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "ABRETIA",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ABRILAR",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ACANTEX",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ACCU-CHEK FASTCLIX Sistema de Punción",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ACCU-CHEK FASTCLIX LANCETAS",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ACCU-CHEK PERFORMA GLUCOSE",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ACCU-CHEK PERFORMA NANO KIT",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ACCU-CHEK ACTIVE GLUCOSE",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ACCU-CHEK ACTIVE KIT",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ACCU-CHEK SOFTCLIX",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ACCU-CHEK SOFTCLIX LANCETAS",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ACCUPRIL®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "ACCURETIC®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "ACCUTREND COLESTEROL",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ACCUTREND GLICEMIA Tiras Reactivas",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ACCUTREND LACTATO Tiras Reactivas",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ACCUTREND PLUS",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ACCUTREND TRIGLICERIDOS",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ACEBRON",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ACECNOU 3 G Granulado para Solución Oral",
    laboratorio: "FAES FARMA",
  },
  {
    nombre: "ACEMUK Jarabe",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "ACEPRAN",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ACERDIL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ACERDIL D",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ACETATO DE SODIO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "ACETAZOLAMIDA Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ACEVIT Solución Oral para Gotas",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "AC FORTE Jarabe",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "ACICLOVIR Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ACICLOVIR Crema",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ACICLOVIR Liofilizado para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "ACICLOVIR Liofilizado para Solución Inyectable",
    laboratorio: "RAFFO",
  },
  {
    nombre: "ACICLOVIR® Solución para Infusión I.V.",
    laboratorio: "PFIZER",
  },
  {
    nombre: "ACICLOVIR L.CH. Comprimidos",
    laboratorio: "CHILE",
  },
  {
    nombre: "ACICLOVIR L.CH. Crema Dérmica",
    laboratorio: "CHILE",
  },
  {
    nombre: "ACIDO ACETILSALICILICO",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "ACIDO ACETILSALICILICO Comprimidos Masticables",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ACIDO ASCORBICO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "ACIDO ASCORBICO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "ACIDO DEHIDROCOLICO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "ACIDO FOLINICO",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "ACIDO FOLINICO Solución para Inyección",
    laboratorio: "PFIZER",
  },
  {
    nombre: "ACIDO MEFENAMICO",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ACIDO MEFENAMICO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "ACIDO ZOLEDRONICO",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ACIDO ZOLEDRONICO Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "ACIFIN Comprimidos Masticables",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "AC INFANTIL Jarabe",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "ACLASTA",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "ACNERAL Cápsulas Blandas",
    laboratorio: "CHILE",
  },
  {
    nombre:
      "ACNIBEN REPAIR TEEN SKIN ISDIN RX BALS. RENOVADOR Renovador Labial",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ACNIBEN REPAIR-TEEN SKIN ISDIN RX-EMUL. LIMPIADORA Emulsión",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ACNIBEN REPAIR-TEEN SKIN ISDIN RX-GEL-CR. HIDRAT. Gel Crema",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ACNIBEN-TEEN SKIN ISDIN ESPUMA-GEL LIMP.PURIFICANT Espuma",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ACNIBEN- TEEN SKIN ISDIN- GEL- CREMA EQUILIBRANTE Gel Crema",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ACNIBEN TEEN SKIN ISDIN TOALL.HIG.MINIMIZA IMPERF. Toallitas",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ACNOTIN Cápsulas Blandas",
    laboratorio: "BAGO",
  },
  {
    nombre: "ACOTOL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ACTACEL",
    laboratorio: "SANOFI PASTEUR",
  },
  {
    nombre: "ACTAN / ACTAN CD",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ACTEMRA",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ACT-HIB",
    laboratorio: "SANOFI PASTEUR",
  },
  {
    nombre: "ACTIGERON",
    laboratorio: "BAGO",
  },
  {
    nombre: "ACTILYSE® Liofilizado p/Sol. Iny.-Perfusión I.V.",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "ACTIPRAM",
    laboratorio: "CHILE",
  },
  {
    nombre: "ACTISER-T",
    laboratorio: "SILESIA",
  },
  {
    nombre: "ACTISER-T Pump",
    laboratorio: "SILESIA",
  },
  {
    nombre: "ACTIVELLE",
    laboratorio: "SILESIA",
  },
  {
    nombre: "ACTRAPID® Solución Inyectable 10 MUI/ml",
    laboratorio: "NOVO NORDISK",
  },
  {
    nombre: "ACUALIPS FPS 20 Gel Hidratante de Labios con Factor Solar",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "ACULAR®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "ACULAR® LS",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "ACUODE 50.000 UI",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ACUODE 300.000 UI Solución Oral",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ACUS",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ADACEL Inyectable",
    laboratorio: "SANOFI PASTEUR",
  },
  {
    nombre: "ADALAT Cápsulas Blandas",
    laboratorio: "BAYER",
  },
  {
    nombre: "ADALAT OROS",
    laboratorio: "BAYER",
  },
  {
    nombre: "ADAPAC Gel Dérmico 0.1%",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "ADAPAC Gel Dérmico 0.3%",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "ADAX / ADAX RETARD",
    laboratorio: "SAVAL",
  },
  {
    nombre: "A-DERMA Dermalibour+",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "A-DERMA Dermopan",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "A-DERMA Exomega Aceite Ducha y Baño",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "A-DERMA Exomega Crema y Bálsamo Emoliente",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "ADESNA®",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ADIAMIL DUO Gel Tópico",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ADINE",
    laboratorio: "CHILE",
  },
  {
    nombre: "ADOLEX",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "ADOLEX PLUS Comprimidos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "ADORMIX 10 MG",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "ADROXEF",
    laboratorio: "CHILE",
  },
  {
    nombre: "AEROTROP HFA Aerosol para Inhalación 20 mcg/Dosis",
    laboratorio: "CASSARA",
  },
  {
    nombre: "AERIUS® Comprimidos Recubiertos",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "AERIUS® Jarabe",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "AERIUS Solución Oral",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "AERIUS D Comprimidos de Liberación Prolongada",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "AERO-BUD Libre de Freón Aerosol para Inhalación",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "AEROCHAMBER®",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "AERO-FACIDOSE A.E.",
    laboratorio: "CHILE",
  },
  {
    nombre: "AEROGASTROL",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "AEROITAN Cápsulas",
    laboratorio: "SAVAL",
  },
  {
    nombre: "AEROLIN Inyectable",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AEROLIN Solución para Inhalación por Nebulizador",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AEROLIN LF Aerosol para Inhalación 100 mcg/dosis",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AEROMED",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "AERO-PLUS Libre de Freón Aerosol para Inhalación",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "AERO-SAL Libre de Freón Aerosol para Inhalación",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "AEROTROP SPRAY NASAL Spray Nasal",
    laboratorio: "CASSARA",
  },
  {
    nombre: "AEROVIAL AEROSOL PARA INHALACION",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "AFINITOR Comprimidos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "AFTAGEL",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "AGATON Comprimidos Recubiertos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "AGE PROTECT CONTORNO DE OJOS MULTIACCION",
    laboratorio: "URIAGE",
  },
  {
    nombre: "AGE PROTECT CREMA",
    laboratorio: "URIAGE",
  },
  {
    nombre: "AGE PROTECT CREMA DE NOCHE DETOX",
    laboratorio: "URIAGE",
  },
  {
    nombre: "AGE PROTECT CREMA DE NOCHE PEELING MULTI-ACCION",
    laboratorio: "URIAGE",
  },
  {
    nombre: "AGE PROTECT CREMA SPF 30 Crema",
    laboratorio: "URIAGE",
  },
  {
    nombre: "AGE PROTECT FLUIDO MULTI ACCION",
    laboratorio: "URIAGE",
  },
  {
    nombre: "AGE PROTECT SERUM MULTIACCION Serum",
    laboratorio: "URIAGE",
  },
  {
    nombre: "AGGLAD OFTENO® Solución Oftálmica al 0.2%",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "AGUA BIDESTILADA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "AGUA BIDESTILADA Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "AGUA DEL CARMEN®",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "AGUA DE MELISA CARMINATIVA",
    laboratorio: "SANITAS",
  },
  {
    nombre: "AGUA DESMAQUILLANTE MICELAR TERMAL P/INTOLERANTE",
    laboratorio: "URIAGE",
  },
  {
    nombre: "AGUA DESMAQUILLANTE MICELAR TERMAL P/MIXTA A GRASA",
    laboratorio: "URIAGE",
  },
  {
    nombre: "AGUA DESMAQUILLANTE MICELAR TERMAL P/NORMAL A SECA",
    laboratorio: "URIAGE",
  },
  {
    nombre: "AGUALA",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "AGUA OXIGENADA Solución Tópica",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "AGUA PARA INYECTABLES",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "AGUA PARA INYECTABLES Agua para Inyectables",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "AGUA TERMAL Spray",
    laboratorio: "URIAGE",
  },
  {
    nombre: "AGUA TERMAL CONTORNO DE OJOS Agua Termal",
    laboratorio: "URIAGE",
  },
  {
    nombre: "AGUA TERMAL CREMA DE MANOS Agua Termal",
    laboratorio: "URIAGE",
  },
  {
    nombre: "AGUA TERMAL CREMA LIGERA",
    laboratorio: "URIAGE",
  },
  {
    nombre: "AGUA TERMAL CREMA LIGERA SPF 20",
    laboratorio: "URIAGE",
  },
  {
    nombre: "AGUA TERMAL DE LA ROCHE-POSAY Agua Termal",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "AGUA TERMAL MASCARA DE NOCHE Agua Termal",
    laboratorio: "URIAGE",
  },
  {
    nombre: "AGUA TERMAL SERUM",
    laboratorio: "URIAGE",
  },
  {
    nombre: "AINARA Gel Hidratante Vaginal",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "AKAN® Comprimidos Masticables 4 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "AKAN® Comprimidos Masticables 5 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ALBEOLER Libre de Freón Aerosol para Inhalación",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ALBUMINA HUMANA 20%",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "ALBUMINA HUMANA GRIFOLS AL 5%",
    laboratorio: "GRIFOLS",
  },
  {
    nombre:
      "ALBUMINA HUMANA GRIFOLS AL 20% Albúmina Humana solución inyectable",
    laboratorio: "GRIFOLS",
  },
  {
    nombre: "ALBUNORM 20%",
    laboratorio: "BAGO",
  },
  {
    nombre: "ALCOLEX® Solución Tópica",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "ALCON CILO-DEX",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "ALDINAM",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ALDROX",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "ALENYS Suspensión para Nebulización Nasal",
    laboratorio: "ETEX",
  },
  {
    nombre: "ALERPRIV®",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "ALERTEX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ALERTOP",
    laboratorio: "CHILE",
  },
  {
    nombre: "ALERTOP-D",
    laboratorio: "CHILE",
  },
  {
    nombre: "ALEXAN",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ALEXIA/ALEXIA FORTE Comprimidos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ALEXIA D",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ALFADOXIN",
    laboratorio: "CHILE",
  },
  {
    nombre: "ALFAPASS COMPUESTO",
    laboratorio: "KNOP",
  },
  {
    nombre: "ALFIN",
    laboratorio: "SANITAS",
  },
  {
    nombre: "ALFLOREX® Cápsulas",
    laboratorio: "AXON PHARMA",
  },
  {
    nombre: "ALGIAFIN®",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "ALGIASOL FORTE Suspensión Oral",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "ALGION",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ALIBET® Gotas Orales",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "ALIMTA®",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "ALITOL",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "ALIVAX Cápsulas",
    laboratorio: "CHILE",
  },
  {
    nombre: "ALLEDRYL",
    laboratorio: "PRATER",
  },
  {
    nombre: "ALLEDRYL D Jarabe Infantil",
    laboratorio: "PRATER",
  },
  {
    nombre: "ALLEDRYL-D CAPSULAS",
    laboratorio: "PRATER",
  },
  {
    nombre: "ALLEGRA Suspensión Oral 30 mg/5 ml",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "ALLEGRA® 120 MG",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "ALLEGRA® 180 MG",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "ALLEGRA® D",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "ALL OUT PIOJOS Loción",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ALL OUT PIOJOS PREVENTIVO Spray",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ALMAXOL Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ALODIL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ALOE-CASCARA SAGRADA Cápsulas",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "ALOELAX Cápsulas",
    laboratorio: "KNOP",
  },
  {
    nombre: "ALONDRA Comprimidos Recubiertos",
    laboratorio: "SILESIA",
  },
  {
    nombre: "ALOPEK",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "ALOPURINOL",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ALOPURINOL 300 MG Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ALPHAGAN®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "ALPHAGAN® P",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "ALPRAZOLAM",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ALPRAZOLAM L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "ALRESKATE FEST Sobres",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ALTAZINC®",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ALTESSE",
    laboratorio: "SILESIA",
  },
  {
    nombre: "ALTRULINE®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "ALUMINIO HIDROXIDO S.O.",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "AMARYL® 2 MG Comprimidos",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "AMARYL® 4 MG Comprimidos",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "AMARYL® M (2/1000) Comprimidos Recubiertos",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "AMARYL® M (4/1000) Comprimidos Recubiertos",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "AMATO Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "AMBILAN",
    laboratorio: "CHILE",
  },
  {
    nombre: "AMBILAN BID",
    laboratorio: "CHILE",
  },
  {
    nombre: "AMBILAN BID FORTE",
    laboratorio: "CHILE",
  },
  {
    nombre: "AMBROXOL L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "AMFOTERICINA B Polvo Liofilizado para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "AMIKACINA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "AMIKACINA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "AMIKACINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "AMINOFILINA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "AMINOFILINA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "AMINOFILINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "AMINOFILINA COMPUESTA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "AMIOCAR",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "AMIODARONA Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "AMIODARONA CLORHIDRATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "AMIODARONA CLORHIDRATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "AMIODARONA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "AMITRIPTILINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "AMLODIPINO",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "AMLODIPINO",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "AMLODIPINO 10 MG Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "AMLODIPINO 5 MG Comprimidos",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "AMLODIPINO 5 MG Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "AMLODIPINO COMPRIMIDOS 10 MG Comprimidos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "AMOBIOTIC",
    laboratorio: "CHILE",
  },
  {
    nombre: "AMOLEX DUO",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "AMOLEX DUO FORTE",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "AMOVAL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "AMOVAL DUO 400",
    laboratorio: "SAVAL",
  },
  {
    nombre: "AMOVAL DUO 800",
    laboratorio: "SAVAL",
  },
  {
    nombre: "AMOVAL DUO 1000",
    laboratorio: "SAVAL",
  },
  {
    nombre: "AMOVAL DUO POLVO PARA SUSPENSION ORAL Suspensión",
    laboratorio: "SAVAL",
  },
  {
    nombre: "AMOVAL 1 G",
    laboratorio: "SAVAL",
  },
  {
    nombre: "AMOXICILINA",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "AMOXICILINA/ACIDO CLAVULANICO 875/125 MG Comprimidos Recubiertos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "AMOXICILINA/ACIDO CLAVULANICO 875/125 Comprimidos",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "AMOXICILINA CAPSULAS 500 MG Cápsulas",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "AMOXICILINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "AMPARAX ORAL Comprimidos Orales",
    laboratorio: "PFIZER",
  },
  {
    nombre: "AMPARAX SUBLINGUAL",
    laboratorio: "PFIZER",
  },
  {
    nombre: "AMPICILINA Cápsulas",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "AMPICILINA Polvo para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "AMPICILINA/SULBACTAM Polvo para Solución Inyectable 1.5 g",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "AMPINO Comprimidos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "AMPLEX L.CH. Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "AMPLIRON Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "AMPLIRON VL Cápsulas",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "AMPLIRON VLH",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "AMULSIN®",
    laboratorio: "SANITAS",
  },
  {
    nombre: "ANACIN Comprimidos Recubiertos",
    laboratorio: "PFIZER CONSUMER HEALTHCARE",
  },
  {
    nombre: "ANACIN CLASICO Comprimidos Recubiertos",
    laboratorio: "PFIZER CONSUMER HEALTHCARE",
  },
  {
    nombre: "ANACIN MAX Comprimidos Recubiertos",
    laboratorio: "PFIZER CONSUMER HEALTHCARE",
  },
  {
    nombre: "ANAFRANIL",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "ANAGEN Loción Capilar 5%",
    laboratorio: "CASSARA",
  },
  {
    nombre: "ANALGEX GOTAS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ANALGEX SAP",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ANASVITAE Comprimidos Recubiertos",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "ANDES PHARMA® CREMA CORPORAL HUMECTANTE Crema Corporal-Hidratante",
    laboratorio: "ANDES PHARMA",
  },
  {
    nombre: "ANDES PHARMA® CREMA DE MANOS SPF 20 HIDRATANTE Crema",
    laboratorio: "ANDES PHARMA",
  },
  {
    nombre: "ANDES PHARMA® CREMA FACIAL ANTIAGE Crema Facial",
    laboratorio: "ANDES PHARMA",
  },
  {
    nombre: "ANDROGEL® Gel",
    laboratorio: "BIOPAS",
  },
  {
    nombre: "ANEFOL Inyectable",
    laboratorio: "CHILE",
  },
  {
    nombre: "ANESTALCON",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "ANFETAMINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "ANFIBOL Comprimidos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ANGELIQ®",
    laboratorio: "BAYER",
  },
  {
    nombre: "ANGICON",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "ANGIN-HEEL® Comprimidos Sublinguales",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "ANIMOXINE PLUS Cápsulas",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "ANORO ELLIPTA 55/22 mcg Polvo para Inhalación",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ANOVULATORIOS L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "ANSIETIL Comprimidos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "ANSOLAR DAILY USE FPS 30 Gel-Crema",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "ANSOLAR FLUID FPS 50+ Loción",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "ANSOLAR LOCION FPS 50+ Loción",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "ANSOLAR SPORT FPS 50+ Loción",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "ANTABUS",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "ANTALIN / ANTALIN FORTE Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ANTHELIOS ANTI-IMPERFECCIONES - MEDICAL RANGE FPS 50+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTHELIOS BRUMA DE ROSTRO FPS 50",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTHELIOS DERMO-PEDIATRICS LECHE FPS 50+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTHELIOS DERMO-PEDIATRICS SPRAY FPS 50+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTHELIOS DERMO-PEDIATRICS WETSKIN FPS 50+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTHELIOS PIGMENTATION FPS 50+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTHELIOS SUN INTOLERANCE FPS 50+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTHELIOS WETSKIN ADULTO FPS 50+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTHELIOS XL ACEITE INVISIBLE FPS50+ FPS 50+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTHELIOS XL BRUMA INVISIBLE FPS50+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTHELIOS XL COMPACTO CREMA Crema",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTHELIOS XL FLUIDO ULTRA - LIGERO FPS 50 + FPS 50+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTHELIOS XL FLUIDO ULTRA-LIGERO FPS 50+ COLOR FPS 50+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTHELIOS XL GEL-CREMA TOQUE SECO FPS 50+ FPS 50+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTHELIOS XL GEL-CREMA TOQUE SECO FPS 50+ COLOR FPS 50+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTHELIOS XL LOCION BEBE FPS50+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTHELIOS XL SPRAY SPF50 FPS 50+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTHELIOS XL STICK PROTECTOR SOLAR FPS 50+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ANTIAX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ANTITROMBINA III GRIFOLS",
    laboratorio: "GRIFOLS",
  },
  {
    nombre: "ANUAR",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "ANULETTE",
    laboratorio: "SILESIA",
  },
  {
    nombre: "ANULETTE C.D.",
    laboratorio: "SILESIA",
  },
  {
    nombre: "ANULETTE 20-C.D.",
    laboratorio: "SILESIA",
  },
  {
    nombre: "ANXIUM",
    laboratorio: "KNOP",
  },
  {
    nombre: "ANZAP Comprimidos Recubiertos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "APEPLUS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "APETROL",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "APIDRA® Solución Inyectable",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "APIDRA® SOLOSTAR® 100 U/ml Solución Inyectable",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "APLACID®",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "APO-GO",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "APROVASC® 150/5 MG Comprimidos",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "APROVASC® 300/5 MG Comprimidos",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "APROVEL 150 MG",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "APROVEL 300 MG",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "AQUAFRESH EXTRA FRESH",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AQUAFRESH EXTREME CLEAN EMPOWERMINT",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AQUAFRESH EXTREME CLEAN ORIGINAL",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AQUAFRESH EXTREME CLEAN POWER WHITE",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AQUAFRESH KIDZ MINT",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AQUAFRESH TRIPLE PROTECCION",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AQUAFRESH TRIPLE PROTECCION FOR KIDS",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AQUAFRESH ULTIMATE WHITE",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AQUAFRESH WHITE & SHINE",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre:
      "AQUALIA THERMAL CONTORNO OJOS Anti-bolsas, y líneas de deshidratación.",
    laboratorio: "VICHY",
  },
  {
    nombre: "AQUALIA THERMAL LIGERA Gel crema acuoso y muy fresco",
    laboratorio: "VICHY",
  },
  {
    nombre:
      "AQUALIA THERMAL SERUM Gel acuoso ultra fluido, fác. de apli., abs. inmd.",
    laboratorio: "VICHY",
  },
  {
    nombre: "AQUA RUBORIL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "AQUASOL® ACD",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "AQUATOP® Crema Restauradora Intensiva",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "AQUALIA THERMAL RICA Crema textura rica y envolvente",
    laboratorio: "VICHY",
  },
  {
    nombre: "ARADIX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ARADIX RETARD",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ARATAN",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ARATAN-D",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ARATAN-D-FORTE Comprimidos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ARAVA®",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "ARCALION Comprimidos Recubiertos",
    laboratorio: "FERRER",
  },
  {
    nombre: "ARCOLANE",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "ARCOXIA® Comprimidos Recubiertos",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "ARCOXIA® Comprimidos Recubiertos",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "ARENDAL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ARENDAL D3 Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ARGIUM 200 mg Comprimidos",
    laboratorio: "CHILE",
  },
  {
    nombre: "ARILEX FT®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ARIMIDEX 1 MG Comprimidos Recubiertos",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "ARIVITAE® Comprimidos",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "ARLETTE 28",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ARMONYL",
    laboratorio: "MAVER",
  },
  {
    nombre: "ARNELA",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ARNELA 500",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ARNIKADERM Gel",
    laboratorio: "KNOP",
  },
  {
    nombre: "ARNUITY ELLIPTA Polvo para Inhalación",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AROMASIN®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "AROTEX Comprimidos Recubiertos 20 mg",
    laboratorio: "RAFFO",
  },
  {
    nombre: "AROXAT®",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AROXAT CR Comprimidos de Liberación Prolongada",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AROXAT CR 12.5 mg Comprimidos de Liberación Prolongada",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AROXAT CR 25 mg Comprimidos de Liberación Prolongada",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ARRUMAL Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ARTESOL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ARTHROZEEL® Comprimidos Sublinguales",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "ARTHROZEEL® Pomada",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "ARTHROZEEL® T Solución Inyectable",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "ARTHRUM Jeringas Pre-cargadas",
    laboratorio: "BAGO",
  },
  {
    nombre: "ARTREN GOTAS Gotas",
    laboratorio: "MERCK",
  },
  {
    nombre: "ARTRIDOL Cápsulas-Polvo para Suspensión Oral (Sachets)",
    laboratorio: "CHILE",
  },
  {
    nombre: "ARTRIDOL DUO / ARTRIDOL DUO FORTE",
    laboratorio: "CHILE",
  },
  {
    nombre: "ARTRILAB® 20 Comprimidos Recubiertos 20 mg",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "ARTRIZONA",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ARTROPLEX",
    laboratorio: "KNOP",
  },
  {
    nombre: "ARTROTIN",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ARVIGIL Comprimidos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ASAX",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "ASICOT",
    laboratorio: "CHILE",
  },
  {
    nombre: "ASMAVENT-B SF Aerosol para Inhalación Oral",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ASMAVENT® SF Aerosol para Inhalación Oral",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ASONOR® Spray Nasal",
    laboratorio: "AXON PHARMA",
  },
  {
    nombre: "ASPIRINA 100 Comprimidos 100 mg",
    laboratorio: "BAYER",
  },
  {
    nombre: "ASPIRINA 500 Comprimidos 500 mg",
    laboratorio: "BAYER",
  },
  {
    nombre: "ASPIRINA 650 Comprimidos 650 mg",
    laboratorio: "BAYER",
  },
  {
    nombre: "ASVENTOL Comprimidos Masticables",
    laboratorio: "CHILE",
  },
  {
    nombre: "ATACAND 8-16 mg Comprimidos",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "ATACAND PLUS 16/12.5 mg Comprimidos",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "ATEMPERATOR Comprimidos Recubiertos",
    laboratorio: "FERRER",
  },
  {
    nombre: "ATEMPERATOR Gotas",
    laboratorio: "FERRER",
  },
  {
    nombre: "ATENFAR 20 MG Comprimidos Recubiertos 20 mg",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "ATENOLOL 50 MG",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ATENOLOL 100 MG Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ATENOLOL L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "ATGAM® Solución Inyectable",
    laboratorio: "PFIZER",
  },
  {
    nombre: "ATHELIOS UNIFIANT Mousse con Color FPS 50",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ATIDEX Solución",
    laboratorio: "OPHTHA",
  },
  {
    nombre: "ATLANSIL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ATOPIX Crema",
    laboratorio: "CASSARA",
  },
  {
    nombre: "ATOPIX Loción",
    laboratorio: "CASSARA",
  },
  {
    nombre: "ATORVASTATINA Comprimidos",
    laboratorio: "CHILE",
  },
  {
    nombre: "ATORVASTATINA Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ATORVASTATINA Comprimidos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "ATORVASTATINA Comprimidos Recubiertos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "ATRACURIO BESILATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "ATRACURIO BESILATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "ATRINAT",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ATROPINA",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ATROPINA SULFATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "ATROPINA SULFATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "ATROPINA SULFATO Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "ATROVENT® Solución para Nebulizar",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "ATROVENT® HFA Aerosol Dosificador",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "AUCUSIK",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "AUGMENTIN 1000/125 Polvo para Suspensión Oral en Sobres",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AUGMENTIN BID 400/57 Polvo para Suspensión Oral en Sobres",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AUGMENTIN BID 875/125 Comprimidos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AUGMENTIN BID 875/125 Polvo para Suspensión Oral en Sobres",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AUGMENTIN ES-600 Polvo para Suspensión Oral",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AUGMENTIN I.V. 1.2 G",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AURITUSS 25/125",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "AURITUSS 25/250",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "AUSENTRON",
    laboratorio: "CHILE",
  },
  {
    nombre: "AUTOHELIOS GEL CREMA",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "AUXXIL",
    laboratorio: "CHILE",
  },
  {
    nombre: "AUXXIL 750",
    laboratorio: "CHILE",
  },
  {
    nombre: "AVAMYS Suspensión para Nebulización Nasal",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AVASTIN",
    laboratorio: "ROCHE",
  },
  {
    nombre: "AVAXIM 80",
    laboratorio: "SANOFI PASTEUR",
  },
  {
    nombre: "AVAXIM 160",
    laboratorio: "SANOFI PASTEUR",
  },
  {
    nombre: "AVELOX®",
    laboratorio: "BAYER",
  },
  {
    nombre: "AVIATUS Jarabe - Sol. Oral para Gotas Orales",
    laboratorio: "PRATER",
  },
  {
    nombre: "AVITIL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "AVODART",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "AVOLVE Cápsulas Blandas",
    laboratorio: "ETEX",
  },
  {
    nombre: "AXANT Solución Oral",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "AXOGEN Viales",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "AZACIMIL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "AZARGA",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "AZATIOPRINA COMPRIMIDOS 50 MG Comprimidos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "AZIMIT®",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "AZITROM Comprimidos-Suspensión",
    laboratorio: "CHILE",
  },
  {
    nombre: "AZITROM FORTE Suspensión",
    laboratorio: "CHILE",
  },
  {
    nombre: "AZITROMICINA",
    laboratorio: "SANITAS",
  },
  {
    nombre: "AZITROMICINA Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "AZITROMICINA Comprimidos Recubiertos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "AZITROMICINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "AZMASOL HFA Suspensión Aerosol para Inhalación Oral",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "AZ OFTENO Solución Oftálmica al 0.05%",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "AZOPT",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "AZULFIDINE / AZULFIDINE-EN Comprimidos - Comprimidos Rec.",
    laboratorio: "PFIZER",
  },
  {
    nombre: "AZYDROP Colirio",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "AZYMOL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BABYX Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BACITRACINA Ungüento",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "BACTEROL - BACTEROL FORTE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BACTRIMEL",
    laboratorio: "ROCHE",
  },
  {
    nombre: "BACTROBAN Ungüento",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "BACTROBAN® CREMA Crema Dérmica",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "BACTROBAN® NASAL Ungüento Nasal",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "BAGOMICINA",
    laboratorio: "BAGO",
  },
  {
    nombre: "BAGOMIGRAL",
    laboratorio: "BAGO",
  },
  {
    nombre: "BAGOVIT-A Crema",
    laboratorio: "BAGO",
  },
  {
    nombre: "BAGOVIT-A Emulsión",
    laboratorio: "BAGO",
  },
  {
    nombre: "BAGOVITAL INMUNE Polvo",
    laboratorio: "BAGO",
  },
  {
    nombre: "BAJATEN-D",
    laboratorio: "SANITAS",
  },
  {
    nombre: "BALDMIN® Solución para Gotas Orales",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "BALSAMO ANALGESICO",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "BALSAMO ANALGESICO CON FENILBUTAZONA",
    laboratorio: "SANITAS",
  },
  {
    nombre: "BALSAMO DESODORANTE ALLERGIKA Roll-On",
    laboratorio: "ALLERGIKA CHILE",
  },
  {
    nombre: "BALSAMO- SHAMPOO Shampoo-Bálsamo",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "BALSAN",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "BANTIX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BARACLUDE Comprimidos",
    laboratorio: "BRISTOL - MYERS SQUIBB",
  },
  {
    nombre: "BARIEDERM CICA CREMA",
    laboratorio: "URIAGE",
  },
  {
    nombre: "BARIEDERM CICA LABIOS",
    laboratorio: "URIAGE",
  },
  {
    nombre: "BARIEDERM CREMA MANOS",
    laboratorio: "URIAGE",
  },
  {
    nombre: "BARIEDERM FISURAS Y GRIETAS UNGÜENTO",
    laboratorio: "URIAGE",
  },
  {
    nombre: "BARIESUN ACEITE EFECTO SECO SPF 30 Y SPF 50+",
    laboratorio: "URIAGE",
  },
  {
    nombre: "BARIESUN BRUMA SECA 50+",
    laboratorio: "URIAGE",
  },
  {
    nombre: "BARIESUN CREMA CON COLOR",
    laboratorio: "URIAGE",
  },
  {
    nombre: "BARIESUN CREMA SIN PERFUME",
    laboratorio: "URIAGE",
  },
  {
    nombre: "BARIESUN FLUIDO ULTRA LIGERO SPF 50+",
    laboratorio: "URIAGE",
  },
  {
    nombre: "BARIESUN LECHE CON PERFUME CUERPO",
    laboratorio: "URIAGE",
  },
  {
    nombre: "BARIESUN LECHE PARA NIÑOS SIN PERFUME",
    laboratorio: "URIAGE",
  },
  {
    nombre: "BARIESUN MAT FLUIDO SPF 50+ (PIELES GRASAS)",
    laboratorio: "URIAGE",
  },
  {
    nombre: "BARIESUN PANTALLA MINERAL",
    laboratorio: "URIAGE",
  },
  {
    nombre: "BARIESUN STICK INVISIBLE",
    laboratorio: "URIAGE",
  },
  {
    nombre: "BASAGLAR® Solución Inyectable",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "BAUXOL Jarabe",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "BAYCIP IV Solución Inyectable",
    laboratorio: "BAYER",
  },
  {
    nombre: "BAYCIP XR",
    laboratorio: "BAYER",
  },
  {
    nombre: "BBIND MASCARA NEOENDORFINAS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BCG Inyectable",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "BECTAM",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "BEDIATIL",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "BEDIATIL FORTE",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "BEEZ®",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "BELARA",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "BELARA CD Comprimidos Recubiertos",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "BELOMET",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BEMETAD Solución Inyectable",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre:
      "BENCILPENICILINA1.000.000 U.I./2.000.000 U.I. Polvo para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre:
      "BENCILPENICILINA BENZATINA 1.200.000 U.I. Polvo para Suspensión Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre:
      "BENCILPENICILINA BENZATINA 600.000 U.I. Polvo para Suspensión Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "BENDORIN 160/4.5 SIN CFC Aerosol para Inhalación",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BENLYSTA® 120 mg/5 ml Liofilizado para Solución para Perfusión",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "BENLYSTA® 400 mg/ml Liofilizado para Solución para Perfusión",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "BENTLEY GEL LUBRICANTE INTIMO",
    laboratorio: "PRATER",
  },
  {
    nombre: "BENZAC AC",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "BENZAC AC WASH",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "BENZAMYCIN",
    laboratorio: "FINN-VITA",
  },
  {
    nombre: "BEOF",
    laboratorio: "SAVAL",
  },
  {
    nombre: "BEPANTHOL Ungüento 5%",
    laboratorio: "BAYER",
  },
  {
    nombre: "BEQUIUM",
    laboratorio: "SAVAL",
  },
  {
    nombre: "BERBERIS-HEELACCORD Solución Oral para Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "BEROCCA PLUS COMPRIMIDOS EFERVESCENTES",
    laboratorio: "BAYER",
  },
  {
    nombre: "BEROCCA PLUS COMPRIMIDOS RECUBIERTOS",
    laboratorio: "BAYER",
  },
  {
    nombre: "BERODUAL® Solución para Nebulizar",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "BERODUAL® HFA Aerosol Dosificador",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "BERSEN® COMPRIMIDOS Comprimidos Birranurados",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "BERSEN MD Suspensión Oral",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "BERSEN S.O. Suspensión Oral",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "BETA COMPLEX Cápsulas",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "BETACORT Solución Oral para Gotas",
    laboratorio: "CASSARA",
  },
  {
    nombre: "BETAFERON Liofilizado para Solución Inyectable",
    laboratorio: "BAYER",
  },
  {
    nombre: "BETAGEN® 0.5",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "BETALFATRUS Laca",
    laboratorio: "ISDIN",
  },
  {
    nombre: "BETALOC ZOK 25-50-100-200 mg Comprimidos de Liberación Prolongada",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "BETAMETASONA",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "BETAMETASONA",
    laboratorio: "SANITAS",
  },
  {
    nombre: "BETAMETASONA CREMA Crema",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "BETAMETASONA FOSFATO DISODICO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "BETAMETASONA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "BETAMETASONA DIPROPIONATO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "BETAMETASONA NEOMICINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "BETAMETASONA SODIO FOSFATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "BETAPLEX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BETAPLEX CR Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BETASERC Comprimidos 16 mg",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BETASERC Comprimidos 24 mg",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BETAVOL Inyectable",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "BETAXOLOL L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "BETINA Comprimidos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "BETIS Comprimidos Recubiertos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "BETOPTIC",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "BETOPTIC S",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "BEVITEX",
    laboratorio: "PRATER",
  },
  {
    nombre: "BEVITEX COMPUESTO Gotas",
    laboratorio: "PRATER",
  },
  {
    nombre: "BEVITEX FORTE",
    laboratorio: "PRATER",
  },
  {
    nombre: "BICARBONATO DE SODIO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "BICAVAN Liofilizado para Solución Inyectable",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "BIFOSFATO DE POTASIO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "BILATEN-D",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "BILAXIL Granulado",
    laboratorio: "BAYER",
  },
  {
    nombre: "BILIDREN Comprimidos",
    laboratorio: "FAES FARMA",
  },
  {
    nombre: "BINAX® Cápsulas con Gránulos con Recubrimiento Entérico",
    laboratorio: "CHILE",
  },
  {
    nombre: "BINAX® Cápsulas con Gránulos con Recubrimiento Entérico",
    laboratorio: "CHILE",
  },
  {
    nombre: "BIOACTIV L",
    laboratorio: "KNOP",
  },
  {
    nombre: "BIOACTIV V",
    laboratorio: "KNOP",
  },
  {
    nombre: "BIOCEL Cápsulas",
    laboratorio: "PRATER",
  },
  {
    nombre: "BIOCORD ACTIVE",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "BIOFERR HIERRO Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "BIOFLORA",
    laboratorio: "MAVER",
  },
  {
    nombre: "BIOGAIA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BIOGAIA GOTAS PROBIOTICAS Gotas",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BIOGAIA PROBIOTICOS Comprimidos Masticables",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BIOGAIA PRODENTIS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BIOGEL",
    laboratorio: "PRATER",
  },
  {
    nombre: "BIOGRIP FORTE",
    laboratorio: "SANITAS",
  },
  {
    nombre: "BIOINSUGEN - 30/70",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "BIOINSUGEN-N",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "BIOINSUGEN-R",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "BIOLACTUS",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "BIOLEV Comprimidos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "BIOMOOD® Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "BION 3 Comprimidos",
    laboratorio: "MERCK",
  },
  {
    nombre: "BION ALLERGO Cápsulas",
    laboratorio: "MERCK",
  },
  {
    nombre: "BION ALLERGO MASTICABLE",
    laboratorio: "MERCK",
  },
  {
    nombre: "BION BB Gotas",
    laboratorio: "MERCK",
  },
  {
    nombre: "BION® INTIME Cápsulas",
    laboratorio: "MERCK",
  },
  {
    nombre: "BION 3 MINI",
    laboratorio: "MERCK",
  },
  {
    nombre: "BION 3 SENIOR® Comprimidos Recubiertos",
    laboratorio: "MERCK",
  },
  {
    nombre: "BION TRANSIT",
    laboratorio: "MERCK",
  },
  {
    nombre: "BIOPIEL GEL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BIOPSOL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BIOPSOL ER",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BIORGAN® MAX Cápsulas",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "BIOSOL LC Solución Oftálmica",
    laboratorio: "NOVOPLOS",
  },
  {
    nombre: "BIOSUL CAPSULAS Cápsulas",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "BIOTICAPS TRANSITO INTESTINAL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BIOTIPLUS® Cápsulas",
    laboratorio: "ABBOTT",
  },
  {
    nombre:
      "BIOVAC-FLU ANTIINFLUENZA FRACCIONADA INACTIVADA Suspensión Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "BIOXET® CERA DEPILATORIA CALIENTE",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "BIOXET® CREMA & GEL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "BIOXET® DESODORANTE ROLL ON",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "BIOXET® SUERO FORTE",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "BIOXSINE® SHAMPOO FEMINA CABELLO GRASO",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "BIOXSINE® SHAMPOO FEMINA CABELLO SECO/NORMAL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "BIOXSINE® SHAMPOO FEMINA POST PARTO",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "BIOXSINE® SHAMPOO FORTE",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "BIOXSINE® SHAMPOO PARA CABELLO GRASO",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "BIOXSINE® SHAMPOO P/CABELLO SECO/NORMAL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "BIOXSINE® SPRAY FORTE",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "BIRETIX - DUO Gel",
    laboratorio: "BAGO",
  },
  {
    nombre: "BIRETIX MASK",
    laboratorio: "BAGO",
  },
  {
    nombre: "BIRETIX MICROPEEL",
    laboratorio: "BAGO",
  },
  {
    nombre: "BISBACTER Comprimidos Masticables",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BISBACTER Suspensión Oral",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BISOPRIL 5-6.25 Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "BISOPRIL D 2.5-6.25 Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "BISOPRIL FUMARATO 1.25 Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "BISOPRIL FUMARATO 2.5 Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "BISOPRIL FUMARATO 5 Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "BLADURIL Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "BLAUTRIM Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "BLAXITEC Comprimidos 20 mg",
    laboratorio: "PFIZER",
  },
  {
    nombre: "BLEFASENSE® Gel",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "BLEOMICINA",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "BLEOMICINA TEVA Frasco-Ampolla",
    laboratorio: "CHILE",
  },
  {
    nombre: "BLEPHAGEL DUO Gel Limpiador",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "BLISPROTEX",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "BLISSEL GEL VAGINAL 0.005% Gel Vaginal",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "BLISTEX Crema Labial Medicada",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "BLISTEX FRUIT SMOOTHIES SPF 15 - BALSAMO LABIAL Crema Labial",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "BLISTEX RASPBERRY LEMONADE BLAST - Bálsamo Labial Crema Labial",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "BLISTIK (LINEA BLISTEX)",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "BLOCAR",
    laboratorio: "BAGO",
  },
  {
    nombre: "BLONAX® Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "BLOX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "BLOX-D",
    laboratorio: "SAVAL",
  },
  {
    nombre: "BONALFA POMADA Pomada",
    laboratorio: "ISDIN",
  },
  {
    nombre: "BONAVID® Solución Oral",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "BONDRONAT INTRAVENOSO",
    laboratorio: "ROCHE",
  },
  {
    nombre: "BONVIVA Comprimidos Recubiertos",
    laboratorio: "ROCHE",
  },
  {
    nombre: "BONVIVA INTRAVENOSO",
    laboratorio: "ROCHE",
  },
  {
    nombre: "BOOSTRIX® Suspensión Inyectable",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "BOZIX Liofilizado para Solución Inyectable",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BRAMEDIL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "BRAMEDIL COMPUESTO",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "BRAVELLE 75 U.I. Inyectable",
    laboratorio: "FERRING",
  },
  {
    nombre: "BREVEX",
    laboratorio: "BAGO",
  },
  {
    nombre: "BREXOTIDE DISKUS 50-500 Polvo para Inhalación",
    laboratorio: "ETEX",
  },
  {
    nombre: "BREXOTIDE DISKUS 50-100 Polvo para Inhalación",
    laboratorio: "ETEX",
  },
  {
    nombre: "BREXOTIDE DISKUS 50-250 Polvo para Inhalación",
    laboratorio: "ETEX",
  },
  {
    nombre: "BREXOTIDE LF 50/25 Inhalador",
    laboratorio: "ETEX",
  },
  {
    nombre: "BREXOTIDE LF 125/25 Inhalador",
    laboratorio: "ETEX",
  },
  {
    nombre: "BREXOTIDE LF 250/25 Inhalador",
    laboratorio: "ETEX",
  },
  {
    nombre: "BREXOVENT® LF Inhalador 125 mcg",
    laboratorio: "ETEX",
  },
  {
    nombre: "BREXOVENT® LF Inhalador 50 mcg",
    laboratorio: "ETEX",
  },
  {
    nombre: "BRIDION Solución Inyectable",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "BRILINTA® 90 mg Comprimidos Recubiertos",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "BRIMOF Solución Oftálmica al 0.2%",
    laboratorio: "SAVAL",
  },
  {
    nombre: "BRIMOPRESS",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "BRIMOPRESS T Solución Oftálmica",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "BRINTELLIX Comprimidos Recubiertos",
    laboratorio: "LUNDBECK CHILE",
  },
  {
    nombre: "BRITAXOL",
    laboratorio: "BRISTOL - MYERS SQUIBB",
  },
  {
    nombre: "BRIXIA",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "BRODIFAC® Comprimidos Recubiertos 10 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "BROKAST Solución Oral",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "BROLIN Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "BROLIN FORTE Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "BROMAZEPAM 3 MG Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "BROMEX SF",
    laboratorio: "CHILE",
  },
  {
    nombre: "BROMFIN Jarabe",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "BROMHEXINA 4 MG Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "BROMURO DE IPRATROPIO/SALBUTAMOL SULFATO Solución para Nebulizar",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "BROMURO DE IPRATROPIO SF AEROSOL",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "BRONCARD",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "BRONCARD COMPRIMIDOS 60 mg Comprimidos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "BRONCARD SOLUCION PARA GOTAS ORALES 60 mg/ml",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "BRONCATOX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "BRONCHALIS® Comprimidos Sublinguales",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "BRONCHO-VAXOM®",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "BRONCODEINA",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "BRONCODUAL",
    laboratorio: "CHILE",
  },
  {
    nombre: "BRONCODUAL COMPUESTO",
    laboratorio: "CHILE",
  },
  {
    nombre: "BRONCOT G.F.T. GEL FLUIDO TERAPEUTICO",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BRONCOT G.F.T. FORTE GEL FLUIDO TERAPEUTICO",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BRONCOT GOTAS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BRONCOTUSILAN",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "BRONDILAT",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BRONDILAT 10 MG",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BRONDILAT SACHETS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BRONLIVAL EASYHALER Polvo para Inhalación",
    laboratorio: "SAVAL",
  },
  {
    nombre: "BRONTAL",
    laboratorio: "SANITAS",
  },
  {
    nombre: "BRONTEC Jarabe",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "BROPIL LF",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "BUCOGERM Comprimidos Masticables",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "BUDASMAL SF Aerosol",
    laboratorio: "CHILE",
  },
  {
    nombre: "BUDENOFALK Cápsulas con Gránulos Gastrorresistentes",
    laboratorio: "BIOTOSCANA",
  },
  {
    nombre: "BUDENOFALK Espuma Rectal",
    laboratorio: "BIOTOSCANA",
  },
  {
    nombre: "BUPIVACAINA CLORHIDRATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "BUPIVACAINA CLORHIDRATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "BUPIVACAINA CLORHIDRATO HIPERBARICA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "BUPIVACAINA HIPERBARICA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "BUPREDOL Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "SANITAS",
  },
  {
    nombre: "BURTEN",
    laboratorio: "CHILE",
  },
  {
    nombre: "BURTEN® SL Comprimidos Sublinguales",
    laboratorio: "CHILE",
  },
  {
    nombre: "BUTOCORT HFA Aerosol para Inhalación",
    laboratorio: "CASSARA",
  },
  {
    nombre: "BUTON® Comprimidos Recubiertos 10 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "BUTOTAL Aerosol para Inhalación",
    laboratorio: "CASSARA",
  },
  {
    nombre: "BUTRINO Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "BUXON Comprimidos de Liberación Prolongada",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CABERTRIX",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "CADUET Comprimidos Recubiertos",
    laboratorio: "PFIZER",
  },
  {
    nombre: "CAFIASPIRINA Comprimidos",
    laboratorio: "BAYER",
  },
  {
    nombre: "CALCEFOR",
    laboratorio: "CHILE",
  },
  {
    nombre: "CALCEFOR D",
    laboratorio: "CHILE",
  },
  {
    nombre: "CALCEFOR D FORTE",
    laboratorio: "CHILE",
  },
  {
    nombre: "CALCIO 500 mg + VITAMINA D3 400 UI Comprimidos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "CALCIMAX® D3 400 Comprimidos",
    laboratorio: "PHARMATECH CHILE",
  },
  {
    nombre: "CALCIO CLORURO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "CALCIO PLUS",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "CALCIO 320 mg + VITAMINA D3 125 UI Comprimidos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "CALCIUM PASTEUR",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "CALDAR-D FORTE",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "CALDEVAL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CALEOBROL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CALMATOL",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "CALMOBET® Gel",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "CALMOSEDAN",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CALMURID",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "CALTRATE 600 + D Comprimidos Recubiertos",
    laboratorio: "PFIZER CONSUMER HEALTHCARE",
  },
  {
    nombre: "CALTRATE 600 + D MASTICABLE Tabletas",
    laboratorio: "PFIZER CONSUMER HEALTHCARE",
  },
  {
    nombre: "CALTRATE 600 + D PLUS Comprimidos Recubiertos",
    laboratorio: "PFIZER CONSUMER HEALTHCARE",
  },
  {
    nombre: "CAM",
    laboratorio: "CHILE",
  },
  {
    nombre: "CAMPTOSAR",
    laboratorio: "PFIZER",
  },
  {
    nombre: "CANCIDAS Polvo Liofilizado para Solución Inyectable",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "CANESTEN® 1% Solución Tópica 1%",
    laboratorio: "BAYER",
  },
  {
    nombre: "CAPEFAS Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "CAPENT",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "CAPILET CHAMPU Champú Estimulante Capilar",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "CAPILET CM Champú Estimulante Capilar",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "CAPILET LOCION CAPILAR Loción Capilar Anti-caída",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "CAPIMAX LOCION ESPUMA ANTICAIDA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CAPIMAX SHAMPOO",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CAPRIMIDA D",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CAPRIMIDA D FORTE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CAPSURE® Cápsulas",
    laboratorio: "PFIZER",
  },
  {
    nombre: "CAPTOPRIL 25 MG Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CARBAMAZEPINA Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CARBAMAZEPINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "CARBOPLATINO",
    laboratorio: "PFIZER",
  },
  {
    nombre: "CARBOPLATINO",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "CARBORON",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "CARBORON RETARD Comprimidos de Liberación Prolongada",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "CARDICON RETARD COMPRIMIDOS 20 MG Comprimidos recubiertos 20 mg",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "CARDIOASPIRINA 100 EC",
    laboratorio: "BAYER",
  },
  {
    nombre: "CARDIOLEN",
    laboratorio: "SANITAS",
  },
  {
    nombre: "CARDIOMIN",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "CARDIOPLUS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CARDIOPLUS D",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CARDIOSMILE Sachets",
    laboratorio: "NUTRARTIS S.A.",
  },
  {
    nombre: "CARDIOXANE",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "CARDURA®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "CARDURA XL®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "CAREZA",
    laboratorio: "SILESIA",
  },
  {
    nombre: "CARIAMYL Crema",
    laboratorio: "PRATER",
  },
  {
    nombre: "CARIAMYL Loción",
    laboratorio: "PRATER",
  },
  {
    nombre: "CARIAMYL Solución Spray",
    laboratorio: "PRATER",
  },
  {
    nombre: "CARIAX GINGIVAL Enjuague Bucal",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "CARIAX GINGIVAL Pasta Dentífrica",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "CARISTOP Colutorio Uso Diario",
    laboratorio: "MAVER",
  },
  {
    nombre: "CARISTOP Colutorio Uso Semanal",
    laboratorio: "MAVER",
  },
  {
    nombre: "CARISTOP Pasta Dental",
    laboratorio: "MAVER",
  },
  {
    nombre: "CARISTOP 5000",
    laboratorio: "MAVER",
  },
  {
    nombre: "CARISTOP REVELADOR DUAL TONE Gel Dental",
    laboratorio: "MAVER",
  },
  {
    nombre: "CARISTOP SENSITIVE PASTA DENTAL",
    laboratorio: "MAVER",
  },
  {
    nombre: "CARTILAR® Polvo",
    laboratorio: "CHILE",
  },
  {
    nombre: "CARVEDILOL",
    laboratorio: "SANITAS",
  },
  {
    nombre: "CARVITOL Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CASODEX 50-150 Comprimidos Recubiertos",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "CATAFLAM Grageas",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "CATAFLAM Solución Inyectable",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "CATAFLAM D",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "CATAFLAM D.A.L. Suspensión Oral",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "CATAFLAM GOTAS 1.5%",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "CATAPRESAN® Comprimidos",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "CATEGOR 150-500 MG Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CATHEJELL Gel",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "CAVAMED Anticoagulante Oral",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "CAVERJECT",
    laboratorio: "PFIZER",
  },
  {
    nombre: "CEBION 1G EFERVESCENTE Comprimidos Efervescentes",
    laboratorio: "MERCK",
  },
  {
    nombre: "CEBION GOTAS Gotas",
    laboratorio: "MERCK",
  },
  {
    nombre: "C+E CKL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "CEFADROXILO CAPSULAS Cápsulas",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CEFADROXILO POLVO PARA SUSPENSION Polvo para Suspensión Oral",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CEFALHER B",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "CEFALMIN",
    laboratorio: "SANITAS",
  },
  {
    nombre: "CEFAZOLINA Polvo para Suspensión Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CEFAZOLINA L.CH. Inyectable",
    laboratorio: "CHILE",
  },
  {
    nombre: "CEFIN Shampoo 2%",
    laboratorio: "BAGO",
  },
  {
    nombre: "CEFIRAX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CEFOTAXIMA Polvo para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CEFRADINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "CEFTIOL",
    laboratorio: "CHILE",
  },
  {
    nombre: "CEFTRIAXONA Polvo para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CEFUROXIMA COMPRIMIDOS RECUBIERTOS 500 MG Comprimidos Recubiertos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "CELEBRA Cápsulas",
    laboratorio: "PFIZER",
  },
  {
    nombre: "CELEBRA FEM® Cápsulas",
    laboratorio: "PFIZER",
  },
  {
    nombre: "CELEBRA MAX 200/400 Cápsulas",
    laboratorio: "PFIZER",
  },
  {
    nombre: "CELECOXIB 200 MG Cápsulas",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "CELEDOX Comprimidos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "CELLCEPT",
    laboratorio: "ROCHE",
  },
  {
    nombre: "CELLU-DESTOCK SERUM FLASH",
    laboratorio: "VICHY",
  },
  {
    nombre: "CELLUDESTOCK Trat.reductor intensivo y anticelulitis",
    laboratorio: "VICHY",
  },
  {
    nombre:
      "CELLU-DESTOCK OVERNIGHT Tratamiento Nocturno Anticelulitis y Reductor",
    laboratorio: "VICHY",
  },
  {
    nombre: "CELSENTRI 150 mg Comprimidos Recubiertos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "CELSENTRI 300 mg Comprimidos Recubiertos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "CELTIUM",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CELULASE- CELULASE PLUS Ungüento-Comprimidos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "CENTRUM",
    laboratorio: "PFIZER CONSUMER HEALTHCARE",
  },
  {
    nombre: "CENTRUM CARDIO Comprimidos Recubiertos",
    laboratorio: "PFIZER CONSUMER HEALTHCARE",
  },
  {
    nombre: "CENTRUM EFERVESCENTE Comprimidos Efervescentes",
    laboratorio: "PFIZER CONSUMER HEALTHCARE",
  },
  {
    nombre: "CENTRUM HOMBRE Comprimidos Recubiertos",
    laboratorio: "PFIZER CONSUMER HEALTHCARE",
  },
  {
    nombre: "CENTRUM MUJER Comprimidos Recubiertos",
    laboratorio: "PFIZER CONSUMER HEALTHCARE",
  },
  {
    nombre: "CENTRUM SILVER",
    laboratorio: "PFIZER CONSUMER HEALTHCARE",
  },
  {
    nombre: "CERADERM Crema",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "CERADERM Gel",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "CERADERM BODY MILK Emulsión",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "CERADERM MIMETIC Emulsión",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "CERADERM SERUM Emulsión",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "CERADERM SPRAY",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "CERAVE CREMA HIDRATANTE",
    laboratorio: "CERAVE",
  },
  {
    nombre: "CERAVE CREMA HIDRATANTE PARA CONTORNO DE OJOS",
    laboratorio: "CERAVE",
  },
  {
    nombre: "CERAVE CREMA RENOVADORA DE PIES",
    laboratorio: "CERAVE",
  },
  {
    nombre: "CERAVE GEL LIMPIADOR ESPUMOSO",
    laboratorio: "CERAVE",
  },
  {
    nombre: "CERAVE LIMPIADOR HIDRATANTE",
    laboratorio: "CERAVE",
  },
  {
    nombre: "CERAVE LOCION HIDRATANTE FACIAL",
    laboratorio: "CERAVE",
  },
  {
    nombre: "CERAVE LOCION HIDRATANTE FACIAL FPS +25",
    laboratorio: "CERAVE",
  },
  {
    nombre: "CERAZETTE® Comprimidos Recubiertos",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "CERCIORA T® Comprimidos",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "CEREBRUM COMPOSITUM NM Solución Inyectable",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "CEREVAX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CERNEVIT",
    laboratorio: "BAXTER",
  },
  {
    nombre: "CERTICAN Comprimidos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "CERVARIX Suspensión Inyectable",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "CETAPHIL AB BARRA DE LIMPIEZA HUMECTANTE 120 G Barra",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL BARRA LIMPIADORA 120 G Barra",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL CREMA HIDRATANTE 453 G Crema",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL DAYLONG AFTER SUN REPAIR 100 ML Loción Liposomal",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL DAYLONG SPF 50+ GEL LIGERO 100 ML",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL DAYLONG KIDS SPF 50+LOCION LIPOSOMAL 150",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL DAYLONG SPF30 LOCIÓN HIDRATANTE FACIAL 50",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL DAYLONG SPF 30 LOCION LIPOSOMAL SPRAY 150",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL DAYLONG SPF 30 GEL ULTRA LIGERO FACIAL 30",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL DERMACONTROL ESPUMA LIMPIADORA",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL DERMACONTROL HIDRATANTE PROT. SOLAR SPF30",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL EMULSION HIDRATANTE 473 ML Emulsión",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL HIDRATANTE FACIAL DIARIO SPF 50",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL LOCION HIDRATANTE SPF 15 118 ML",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL LOCION LIMPIADORA 237/473 ML Loción",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL LOCION LIMPIADORA PIEL GRASA 237 ML Loción",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL LOCION ULTRA HUMECTANTE 226 G Loción",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL RESTORADERM HIDRATANTE CORPORAL Crema",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL RESTORADERM LIMPIADOR CORPORAL Limpiador Corporal",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL SHAMPOO Shampoo",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETAPHIL UVA/ UVB DEFENSE SPF 50+ Crema",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CETIRIZINA Comprimidos Recubiertos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "CETRAXAL OTICO 0.3% Solución para Gotas Oticas",
    laboratorio: "FAES FARMA",
  },
  {
    nombre: "CETRAXAL PLUS 3/0.25 ml Solución para Gotas Oticas",
    laboratorio: "FAES FARMA",
  },
  {
    nombre: "CETRIL Comprimidos",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "CETROTIDE Solución Inyectable",
    laboratorio: "MERCK",
  },
  {
    nombre: "CEUMID",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "CG210",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "CHAMPIX® Comprimidos Recubiertos",
    laboratorio: "PFIZER",
  },
  {
    nombre: "CHAPSTICK CLASICO Bálsamo Labial",
    laboratorio: "PFIZER CONSUMER HEALTHCARE",
  },
  {
    nombre: "CHAPSTICK HUMECTANTE SPF 10 Barra Humectante Labial",
    laboratorio: "PFIZER CONSUMER HEALTHCARE",
  },
  {
    nombre: "CHAPSTICK MENTA VERDE Bálsamo Labial",
    laboratorio: "PFIZER CONSUMER HEALTHCARE",
  },
  {
    nombre: "CHAPSTICK ULTRA SOLAR SPF 25 Bálsamo Labial",
    laboratorio: "PFIZER CONSUMER HEALTHCARE",
  },
  {
    nombre: "CHELTIN Suspensión Oral",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "CHELTIN FC Comprimidos Recubiertos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "CHELTIN IV",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "CHIROCAINA Solución Inyectable",
    laboratorio: "ABBVIE",
  },
  {
    nombre: "CIALIS® Comprimidos Recubiertos 20 mg",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "CIALIS® Comprimidos Recubiertos 5 mg",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "CIANOCOBALAMINA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CIANOCOBALAMINA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "CIBLEX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CICABIO Crema",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "CICABIO Crema SPF 50+",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "CICAPLAST",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "CICAPLAST BAUME B5 Agua Termal",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "CICAPLAST LABIOS",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "CICAPOST CREMA Crema",
    laboratorio: "ISDIN",
  },
  {
    nombre: "CICLIDON",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CICLIDON 20",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CICLIDON 20 CD",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CICLOBENZAPRINA",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CICLOBENZAPRINA Comprimidos",
    laboratorio: "CHILE",
  },
  {
    nombre: "CICLOFOSFAMIDA",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "CICLOMEX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CICLOMEX-15",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CICLOMEX-20",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CICLOMEX CD",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CICLOMEX 20 CD",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CIDIMUS Cápsulas",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "CIDOTEN INYECTABLE",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "CIDOTEN RAPILENTO Inyectable",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "CIDOTEN RAPILENTO CON LIDOCAINA",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "CIDOTEN SOLUCION ORAL Gotas",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "CILOKARE 12.5 MG Comprimidos Recubiertos",
    laboratorio: "ETEX",
  },
  {
    nombre: "CILOKARE 25 MG Comprimidos Recubiertos",
    laboratorio: "ETEX",
  },
  {
    nombre: "CILOKARE 6.25 MG Comprimidos Recubiertos",
    laboratorio: "ETEX",
  },
  {
    nombre: "CILOSVITAE Comprimidos Recubiertos",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "CIMAL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CIMETIDINA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "CIMICIFUGA-HEELACCORD® Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "CIMZIA® Solución Inyectable",
    laboratorio: "BIOPAS",
  },
  {
    nombre: "CINABEL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "CINARIZINA",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CINARIZINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "CIPRAMIL® Comprimidos Recubiertos",
    laboratorio: "LUNDBECK CHILE",
  },
  {
    nombre: "CIPRODEX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CIPRODEX OTICO",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CIPROFIBRATO Cápsulas 100 mg",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "CIPROFLOXACINO",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CIPROFLOXACINO 500 MG Comprimidos Recubiertos",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "CIPROFLOXACINO Solución Inyectable 200 mg/100 ml",
    laboratorio: "BIOSANO",
  },
  {
    nombre:
      "CIPROFLOXACINO COMPRIMIDOS RECUBIERTOS 500 MG Comprimidos Recubiertos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "CIPROFLOXACINO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "CIPROFLOXACINO S.O. 0.3%/5ML",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CIPROVAL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CIPROVAL OFTALMICO",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CIPROVAL OTICO",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CIRCLET® Anillo Vaginal",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "CIRIAX 500 Comprimidos Recubiertos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "CISORDINOL® Comprimidos Recubiertos 10 mg",
    laboratorio: "LUNDBECK CHILE",
  },
  {
    nombre: "CISORDINOL® ACUTARD Inyectable",
    laboratorio: "LUNDBECK CHILE",
  },
  {
    nombre: "CISORDINOL® DEPOT Inyectable",
    laboratorio: "LUNDBECK CHILE",
  },
  {
    nombre: "CISPLATINO",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CISPLATINO",
    laboratorio: "PFIZER",
  },
  {
    nombre: "CISPLATINO",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "CISTICID Comprimidos",
    laboratorio: "MERCK",
  },
  {
    nombre: "CITABAX 150® Comprimidos Recubiertos",
    laboratorio: "PHARMAVITA",
  },
  {
    nombre: "CITABAX 500® Comprimidos Recubiertos",
    laboratorio: "PHARMAVITA",
  },
  {
    nombre: "CITALOPRAM 20 MG Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CITARABINA®",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "CITARABINA® Inyectable",
    laboratorio: "PFIZER",
  },
  {
    nombre: "CITONEURON Cápsulas",
    laboratorio: "FERRER",
  },
  {
    nombre: "CITRACAL Comprimidos",
    laboratorio: "BAYER",
  },
  {
    nombre: "CLARAGINE® Comprimidos de Disolución Bucal",
    laboratorio: "PRATER",
  },
  {
    nombre: "CLARAGINE® MIEL-LIMON Comprimidos de Disolución Bucal",
    laboratorio: "PRATER",
  },
  {
    nombre: "CLARIGEL® BARRA Jabón Barra",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "CLARIGEL® GEL Gel-Crema",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "CLARIMIR",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "CLARIMIR F",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "CLARINASE Jarabe",
    laboratorio: "BAYER",
  },
  {
    nombre: "CLARITROMICINA",
    laboratorio: "CHILE",
  },
  {
    nombre: "CLARITROMICINA",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "CLATIC®",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "CLAUTER Comprimidos 50 - 100 mg",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "CLAVAM DUO Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "CLAVAM DUO 400/57 Polvo para Suspensión Oral",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "CLAVINEX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CLAVINEX DUO",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CLAVINEX DUO CD Comprimidos Dispersables",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CLAVINEX DUO FORTE",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CLAVINEX FORTE",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CLAVINEX XR",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CLAVOXILINA-BID",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CLAVOXILINA-BID PEDIATRICA",
    laboratorio: "ABBOTT",
  },
  {
    nombre:
      "CLEANDES® SOLUCION LIMPIEZA FACIAL PIEL SENSIBLE Solución Limpiadora",
    laboratorio: "ANDES PHARMA",
  },
  {
    nombre: "CLEANDES® SOLUCION MICELAR AR Solución",
    laboratorio: "ANDES PHARMA",
  },
  {
    nombre: "CLEARBLUE DIGITAL Prueba de Embarazo",
    laboratorio: "CHILE",
  },
  {
    nombre: "CLEARBLUE DIGITAL Prueba de Ovulación",
    laboratorio: "CHILE",
  },
  {
    nombre: "CLEARBLUE PLUS Prueba de Embarazo",
    laboratorio: "CHILE",
  },
  {
    nombre: "CLENTEL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "CLEXANE® 20 MG Solución Inyectable",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "CLEXANE® 40 MG Solución Inyectable",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "CLEXANE® 60 MG Solución Inyectable",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "CLEXANE® 80 MG Solución Inyectable",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "CLIANE® Comprimidos",
    laboratorio: "BAYER",
  },
  {
    nombre: "CLIDAN-B Gel Dermico",
    laboratorio: "CASSARA",
  },
  {
    nombre: "CLIDAN GEL DERMICO 1% Gel Dermico",
    laboratorio: "CASSARA",
  },
  {
    nombre: "CLIDETS Gel 1%-Solución 1%",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "CLIDETS Solución 1%",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "CLIMAFEM",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "CLIMENE Grageas",
    laboratorio: "BAYER",
  },
  {
    nombre: "CLINDAMICINA FOSFATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "CLINIMIX 5/15 LIBRE DE SULFITOS",
    laboratorio: "BAXTER",
  },
  {
    nombre: "CLINIUM",
    laboratorio: "SANITAS",
  },
  {
    nombre: "CLINOMAT",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CLOBAZAM Comprimidos 10 mg",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "CLOBETASOL",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "CLOBETASOL PROPIONATO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "CLOB X CREMA",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CLOB X SHAMPOO Shampoo",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CLOB X SPRAY",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "CLODAVAN Crema Dérmica 0.05%",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "CLODAVAN Solución Tópica 0.05%",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "CLOFAZIC Solución Inyectable",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "CLOFEXAN",
    laboratorio: "BAGO",
  },
  {
    nombre: "CLONALGIN",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "CLONAPAM",
    laboratorio: "CHILE",
  },
  {
    nombre: "CLONAZEPAM",
    laboratorio: "CHILE",
  },
  {
    nombre: "CLONAZEPAM 0.5 y 2 mg Comprimidos Recubiertos",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "CLONAZEPAN 0.5 MG",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CLONAZEPAN 2 MG Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CLONEX CD",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CLONIXINATO DE LISINA",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CLONIXINATO DE LISINA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CLONIXINATO DE LISINA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "CLOPIVITAE® Comprimidos Recubiertos",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "CLORANFENICOL Solución Oftálmica",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CLORANFENICOL JARABE",
    laboratorio: "CHILE",
  },
  {
    nombre: "CLORANFENICOL NICOLICH",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CLORANFENICOL SOLUCION OFTALMICA",
    laboratorio: "CHILE",
  },
  {
    nombre: "CLORFENAMINA 4 MG Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CLORFENAMINA Comprimidos Recubiertos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "CLORFENAMINA MALEATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CLORFENAMINA MALEATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "CLORFENAMINA MALEATO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "CLORMEZANONA",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CLOROQUINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "CLORPRIMETON Inyectable",
    laboratorio: "BAYER",
  },
  {
    nombre: "CLORPRIMETON COMPRIMIDOS Comprimidos",
    laboratorio: "BAYER",
  },
  {
    nombre: "CLORPROMAZINA CLORHIDRATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CLORPROMAZINA CLORHIDRATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "CLORURO DE POTASIO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CLORURO DE POTASIO 10% Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CLORURO DE SODIO 0.9%",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CLORURO DE SODIO 0.9% Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CLORURO DE SODIO 0.9% Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CLORURO DE SODIO 0.9%",
    laboratorio: "BAXTER",
  },
  {
    nombre: "CLORURO DE SODIO 0.9% Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CLORURO DE SODIO 10%",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CLORURO DE SODIO 10% Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CLOTINAB",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CLOTRIMAZOL Crema",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "CLOTRIMAZOL Ovulos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "CLOTRIMAZOL Polvo",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "CLOTRIMAZOL Solución Tópica 1%",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "CLOTRIMAZOL + BETAMETASONA",
    laboratorio: "SANITAS",
  },
  {
    nombre: "CLOTRIMAZOL L.CH. Crema",
    laboratorio: "CHILE",
  },
  {
    nombre: "CLOTRIMAZOL L.CH. Ovulos",
    laboratorio: "CHILE",
  },
  {
    nombre: "CLOTRIMAZOL BETAMETASONA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "CLOTRIMAZOL + BETAMETASONA",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CLOTRIMIN-B",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "CLOTRIMIN Crema Tópica 1%",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "CLOTRIMIN Ovulos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "CLOTRIMIN Polvo Tópico 1%",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "CLOTRIMIN Solución Tópica 1%",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "CLOVAL - CLOVAL FORTE",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CLOVAL COMPUESTO",
    laboratorio: "SAVAL",
  },
  {
    nombre: "CLOXACILINA Polvo para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "CLOXACILINA SODICA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "CLOXYN Frasco-Ampolla",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "CLOZANIL",
    laboratorio: "SANITAS",
  },
  {
    nombre: "CLUVAX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "COAPROVEL 300/12.5 MG Comprimidos Recubiertos",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "COAPROVEL 150/12.5 MG Comprimidos Recubiertos",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "COAPROVEL 300/25 MG Comprimidos Recubiertos",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "COAROL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "COBEFEN",
    laboratorio: "SANITAS",
  },
  {
    nombre: "CODEIPAR",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "CODEISOL",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "CODELASA",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "CODETOL PM",
    laboratorio: "CHILE",
  },
  {
    nombre: "CODETOL PM ADULTO",
    laboratorio: "CHILE",
  },
  {
    nombre: "CODIPZONA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "COENZYME COMPOSITUM Solución Inyectable",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "COLCHICINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "COLENT",
    laboratorio: "ANDROMACO-MASTERCARE",
  },
  {
    nombre: "COLIDIAR® Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "COLIPER Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "COLIPER Solución Oral para Gotas",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "COLMAX",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "COLMIBE® Comprimidos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "COLNATUR COMPLEX 10",
    laboratorio: "BAGO",
  },
  {
    nombre: "COLPOTROPHINE Cápsulas Blandas Vaginales",
    laboratorio: "CHILE",
  },
  {
    nombre: "COMBIGAN®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "COMBIVIR®",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "COMBODART Cáps. blanda y Grán. Entéricos de Lib. Prolongada",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "CONCERTA® Comprimidos Rec. de Liberación Osmótica Prolongada",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "CONCOR Comprimidos Recubiertos",
    laboratorio: "MERCK",
  },
  {
    nombre: "CONCOR AM",
    laboratorio: "MERCK",
  },
  {
    nombre: "CONDONES DUREX",
    laboratorio: "RECKITT BENCKISER",
  },
  {
    nombre: "CONDROSULF 800",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "CONDROSULF FORTE Comprimidos 1.200 mg",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "CONGESTEX CAPSULAS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CONGESTEX GOTAS Y SUSPENSION",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CONPREMIN 0.3 MG Comprimidos",
    laboratorio: "PFIZER",
  },
  {
    nombre: "CONPREMIN® CREMA AL 0.0625% Crema",
    laboratorio: "PFIZER",
  },
  {
    nombre: "CONPREMIN GRAGEAS Grageas",
    laboratorio: "PFIZER",
  },
  {
    nombre: "CONTI-MARVELON 20 Comprimidos Recubiertos",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "CONTRALMOR",
    laboratorio: "CHILE",
  },
  {
    nombre: "CONTUMAX Sobres",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "COOLIPS",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "COPEGUS",
    laboratorio: "ROCHE",
  },
  {
    nombre: "COPLAVIX® 75 MG/100 MG Comprimidos Recubiertos",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "COR®",
    laboratorio: "PRATER",
  },
  {
    nombre: "CORASOL D Comprimidos Recubiertos",
    laboratorio: "SANITAS",
  },
  {
    nombre: "CORDIAX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CORDIAX AM Comprimidos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CORDIAX D - CORDIAX D FORTE Comprimidos",
    laboratorio: "ABBOTT",
  },
  {
    nombre:
      "COREGA® Comfort Seal Almohadillas Adhesivas para Prótesis Dentales",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "COREGA® CREMA DENTAL PARA PROTESIS",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "COREGA® TABS Limpiador de Prótesis Dentales",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "CORENTEL Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "CORENTEL H Comprimidos Recubiertos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "CORITEX",
    laboratorio: "BAGO",
  },
  {
    nombre: "CORODIN",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CORODIN D/CORODIN D FORTE® Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "COROTROPE",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "CORTIGRIP ®",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "CORTIGRIP ® DIA/NOCHE",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "CORTIMENT MMX",
    laboratorio: "FERRING",
  },
  {
    nombre: "CORTIPREX",
    laboratorio: "CHILE",
  },
  {
    nombre: "CORTISOL L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "CORTYK",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "COSENTYX",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "COSOPT® Solución Oftálmica",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "COSPIEL Crema Humectante",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "COTELLIC Comprimidos Recubiertos",
    laboratorio: "ROCHE",
  },
  {
    nombre: "COTIBIN ANALGESICO ANTIPIRETICO",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "COTIBIN ANTIGRIPAL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "COTIBIN DIA Y NOCHE",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "COTIBIN FLU",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "COTIBIN FLU DIA Y NOCHE",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "COTIBIN INFANTIL Comprimidos Masticables",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "COTIBIN INFANTIL GOTAS",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "COTRIMOXAZOL Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "COTRISAN",
    laboratorio: "SANITAS",
  },
  {
    nombre: "COVERAM",
    laboratorio: "FERRER",
  },
  {
    nombre: "COVERSYL A Comprimido Recubierto con película",
    laboratorio: "FERRER",
  },
  {
    nombre: "COXDOS® Cápsulas",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "COXIDOL 60 mg Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "COXIDOL 120 mg Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "CRALONIN® Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "CREMA CONTORNO DE OJOS ALLERGIKA Crema",
    laboratorio: "ALLERGIKA CHILE",
  },
  {
    nombre: "CREMA CORPORAL PRIMROSE OIL 20% ALLERGIKA Crema Corporal",
    laboratorio: "ALLERGIKA CHILE",
  },
  {
    nombre: "CREMA CORPORAL UREA 5% ALLERGIKA Crema Corporal",
    laboratorio: "ALLERGIKA CHILE",
  },
  {
    nombre: "CREMA FACIAL UREA 5% ALLERGIKA Crema Facial",
    laboratorio: "ALLERGIKA CHILE",
  },
  {
    nombre: "CREMA SUAVE DE MANOS ALLERGIKA Crema",
    laboratorio: "ALLERGIKA CHILE",
  },
  {
    nombre: "CREMINEM® Crema Dérmica 1%",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CREMINEM® B Crema Dérmica",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CREMIRIT Crema Dérmica",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "CREON 10.000 / CREON 25.000",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CRESADEX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "CRESTOR 5-10-20-40 mg Comprimidos Recubiertos",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "CREVAGIN Crema Vaginal",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "CRINONE Gel Vaginal",
    laboratorio: "MERCK",
  },
  {
    nombre: "CRISMOL Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "CRONOLEVEL INYECTABLE Inyectable",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "CRONOTAN COMPRIMIDOS Comprimidos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "CRONUS Comprimidos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "CURIOSIN® GEL Gel",
    laboratorio: "GEDEON RICHTER",
  },
  {
    nombre: "CUROCEF 250 Comprimidos Recubiertos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "CUROCEF 250 MG/5 ML Gránulos para Suspensión Oral",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "CUROCEF 250 Gránulos para Suspensión Oral en Sobres",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "CUROCEF 500 Comprimidos Recubiertos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "CUROCEF 500 Gránulos para Suspensión Oral en Sobres",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "CUROCEF INYECTABLE",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "CUTANIL",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "CUTIS COMPOSITUM N Solución Inyectable",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "CYCLOBIOL",
    laboratorio: "SILESIA",
  },
  {
    nombre: "CYCLOGYL",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "CYKLOKAPRON® Inyectable",
    laboratorio: "PFIZER",
  },
  {
    nombre: "CYMBALTA® 30 MG/60 MG",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "CYMEVENE AMPOLLAS",
    laboratorio: "ROCHE",
  },
  {
    nombre: "CYRAMZA® Solución Inyectable",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "DACAM RAPI-LENTO",
    laboratorio: "CHILE",
  },
  {
    nombre: "DACARBAZINA",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "DACLIN",
    laboratorio: "CHILE",
  },
  {
    nombre: "DACNEL Comprimidos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "DACOGEN® Polvo Liofilizado para Solución Inyectable",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "DAFLON Comprimidos",
    laboratorio: "FERRER",
  },
  {
    nombre: "DAFLON SUSPENSION ORAL EN SOBRE 1000 MG Suspensión Oral en Sobres",
    laboratorio: "FERRER",
  },
  {
    nombre: "DAGOTIL Comprimidos-Gotas",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "DAHLIA Comprimidos Recubiertos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "DAHLIA 20",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "DAIVA Inyectable",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "DAIVOBET Gel",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "DAIVOBET UNGÜENTO TÓPICO",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "DAKSOL",
    laboratorio: "PHARMAVITA",
  },
  {
    nombre: "DAKTARIN® Gel Oral",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "DAL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DALACIN C Cápsulas",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DALACIN FOSFATO Inyectable",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DALACIN T Gel Tópico-Solución",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DALGIET® Comprimidos 2 mg",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "DALUN",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "DAMIXAN",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "DAMIZEN",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "DANIELE Comprimidos Recubiertos con Película 2 mg/0.03 mg",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "DANTEX Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "DANTRIUM INTRAVENOSO",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "DARAPRIM",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "DARMAS",
    laboratorio: "CHILE",
  },
  {
    nombre: "DARMAS CAD Cápsulas Blandas",
    laboratorio: "CHILE",
  },
  {
    nombre: "DATIZIC Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "DAUNORUBICINA",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DAXIM Solución Inyectable",
    laboratorio: "ABBVIE",
  },
  {
    nombre: "DAZOLIN ODT",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DDAVP Comprimidos",
    laboratorio: "FERRING",
  },
  {
    nombre: "DDAVP Inyectable",
    laboratorio: "FERRING",
  },
  {
    nombre: "DDAVP Nebulizador",
    laboratorio: "FERRING",
  },
  {
    nombre: "DDAVP Solución Intranasal",
    laboratorio: "FERRING",
  },
  {
    nombre: "DEATEN Comprimidos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "DEBRIDAT® Comprimidos Recubiertos",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DEBRIDAT AP",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DEBRIDAT FORTE Comprimidos Recubiertos 200 mg",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DECADEX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DECA-DURABOLIN® 50 Solución Inyectable",
    laboratorio: "ASPEN",
  },
  {
    nombre: "DECAPEPTYL 3.75 Frasco-Ampolla",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "DECAPEPTYL 11.25 Frasco-Ampolla",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "DECAPEPTYL 22.5 Frasco-Ampolla",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "DEFLAMAT Cápsulas-Gel",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "DEFLAMAT NF INFANTIL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "DEGRALER Comprimidos Recubiertos",
    laboratorio: "BAGO",
  },
  {
    nombre: "DEGRALER FORTE JARABE Jarabe",
    laboratorio: "BAGO",
  },
  {
    nombre: "DEGRALER GOTAS Gotas",
    laboratorio: "BAGO",
  },
  {
    nombre: "DEGRALER JARABE Jarabe",
    laboratorio: "BAGO",
  },
  {
    nombre: "DEGRALER® PLUS 5 MG Comprimidos Bucodispersables",
    laboratorio: "BAGO",
  },
  {
    nombre: "DEMAQUILLANTE DE OJOS WATERPROOF - PURETÉ THERMALE",
    laboratorio: "VICHY",
  },
  {
    nombre: "DENTIK GLOBULOS SANAKIND",
    laboratorio: "KNOP",
  },
  {
    nombre: "DENTOXOL®",
    laboratorio: "INGALFARMA",
  },
  {
    nombre: "DEOSEC DESODORANTE",
    laboratorio: "FEELDERM",
  },
  {
    nombre: "DEPAKENE Cápsulas-Jarabe",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DEPIDERM ANTIMANCHAS",
    laboratorio: "URIAGE",
  },
  {
    nombre: "DEPO-MEDROL",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DEPO-MEDROL LIDOCAINA",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DEPO-PRODASONE Suspensión Inyectable 150 mg/1 ml",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DEPO-PRODASONE Suspensión Inyectable 500 mg/3.3 ml",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DEPRAX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "DEPUROL",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "DEPUROL RETARD Cápsulas de liberación prolongada",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "DERCOS ACONDICIONADOR ENERGIZANTE",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERCOS AMINEXIL CLINICAL 5 HOMBRE Tratamiento Anti-Caída",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERCOS AMINEXIL CLINICAL 5 MUJER Tratamiento Anti-Caída",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERCOS DENSI-SOLUTIONS ACONDICIONADOR Acondicionador",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERCOS DENSI-SOLUTIONS SHAMPOO Shampoo",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERCOS DENSI-SOLUTIONS TRATAMIENTO Solución",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERCOS MASCARILLA NUTRI-REPARADORA",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERCOS SHAMPOO ENERGIZANTE",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERCOS SHAMPOO ANTI-CASPA GRASA",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERCOS SHAMPOO ANTI-CASPA MICRO-PEEL",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERCOS SHAMPOO ANTI-CASPA SECA",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERCOS SHAMPOO SEBO-CORRECTOR",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERCOS SHAMPOO SENSI-COLOR",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERCOS SHAMPOO ULTRA-CALMANTE CUERO CAB.GRASO",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERCOS SHAMPOO ULTRA-CALMANTE CUERO CAB.SECO",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERCOS SHAMPOO Y ACONDICIONADOR NUTRIRREPARADOR",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERMABEL Gel - Solución Tópica",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "DERMABIOTICO",
    laboratorio: "SAVAL",
  },
  {
    nombre: "DERMABLEND BASE DE ALTA COBERTURA POLVO COMPACTO",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERMABLEND 3D BASE DE MAQUILLAJE",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERMABLEND BASE DE MAQUILLAJE CREMA COMPACTA",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERMABLEND BASE DE MAQUILLAJE FLUIDO",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERMABLEND POLVO FIJADOR Talco",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERMABLEND SOS COVER STICK (STICK CORRETOR)",
    laboratorio: "VICHY",
  },
  {
    nombre: "DERMABLOCK CITY Emulsión",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "DERMAC Jabón",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "DERMALIV Crema Tópica",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "DERMATEN®",
    laboratorio: "SANITAS",
  },
  {
    nombre: "DERMATOPIC Barra",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "DERMATOPIC Solución Limpiadora",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "DERMATOPIC SULFUR Barra",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "DERMATOPIC SULFUR Foam",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "DERMATOPIC SYNDET HIDRATANTE",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "DERMODAN",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "DERMODAN® PLUS Gel",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "DERMOSONA",
    laboratorio: "SAVAL",
  },
  {
    nombre: "DERMOTIVIN ORIGINAL BARRA",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "DERMOTIVIN ORIGINAL ESPUMA",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "DERMOTIVIN ORIGINAL LIQUIDO",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "DERMOTIVIN SCRUB",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "DERMOTIVIN SOFT ESPUMA",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "DERMOVATE Crema",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "DERMOVATE Loción Capilar",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "DERMOVATE Pomada",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "DERMOXYL",
    laboratorio: "CHILE",
  },
  {
    nombre:
      "DEROXAT CR 25 MG Comp. Recubierto Entérico de Liberación Prolongada",
    laboratorio: "ETEX",
  },
  {
    nombre: "DEROXAT CR 12.5 MG Comprimidos con Recubrimiento Entérico",
    laboratorio: "ETEX",
  },
  {
    nombre: "DERPIX 2% Ungüento Dérmico",
    laboratorio: "CHILE",
  },
  {
    nombre: "DESDOL",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "DESFERAL",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "DESLORATADINA Comprimidos Recubiertos-Jarabe",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "DESMAQUILLANTE INTEGRAL 3 EN 1 PURETE THERMALE",
    laboratorio: "VICHY",
  },
  {
    nombre: "DESMAQUILLANTE PARA OJOS WATERPROOF",
    laboratorio: "URIAGE",
  },
  {
    nombre: "DESODORANTE ANTI-TRANSPIRANTE 48 HORAS Roll-On",
    laboratorio: "VICHY",
  },
  {
    nombre: "DESODORANTE ANTITRANSPIRANTE FRESCO Spray",
    laboratorio: "URIAGE",
  },
  {
    nombre: "DESODORANTE ANTI-TRANSPIRANTE PIEL SENSIBLE Roll-On",
    laboratorio: "VICHY",
  },
  {
    nombre: "DESODORANTE ANTI-TRANSPIRANTE SPRAY Spray",
    laboratorio: "VICHY",
  },
  {
    nombre: "DESODORANTE FISIOLOGICO 24 HS Desodorante para pieles sensibles",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "DESODORANTE MINERAL 48 HORAS ROLL-ON",
    laboratorio: "VICHY",
  },
  {
    nombre: "DESODORANTE MINERAL 48 HORAS SPRAY",
    laboratorio: "VICHY",
  },
  {
    nombre: "DESODORANTE PIEL SENSIBLE Roll-On",
    laboratorio: "URIAGE",
  },
  {
    nombre: "DESODORANTE POWER 3 Roll-On",
    laboratorio: "URIAGE",
  },
  {
    nombre: "DESOREN® 20",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "DESOREN®",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "DESOWEN",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "DESPEVAL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "DESPEX®",
    laboratorio: "CHILE",
  },
  {
    nombre: "DETRES® Comprimidos",
    laboratorio: "PHARMATECH CHILE",
  },
  {
    nombre: "DETRUCALM",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "DETRUSITOL®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DETRUSITOL SR®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DETTOL GEL DESINFECTANTE",
    laboratorio: "RECKITT BENCKISER",
  },
  {
    nombre: "DETTOL JABON LIQUIDO",
    laboratorio: "RECKITT BENCKISER",
  },
  {
    nombre: "DETTOL TOALLITAS HUMEDAS",
    laboratorio: "RECKITT BENCKISER",
  },
  {
    nombre: "DEUCOALER",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "DEUCODOL Suspensión Oral",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "DEUCODOL FORTE Suspensión Oral",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "DEUCOTOS",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "DEXACORT-C Suspensión Oftálmica",
    laboratorio: "NOVOPLOS",
  },
  {
    nombre: "DEXAGIN OVULOS",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "DEXAMETASONA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "DEXAMETASONA",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "DEXAMETASONA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "DEXAMETASONA FOSFATO",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "DEZARTAL Comprimidos",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "DHA JUNIOR",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "D-HISTAPLUS® Comprimidos-Jarabe",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "DHS CLEAR",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "DHS SAL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "DHS ZINC",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "DIA-BT CREMA PARA PIES",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DIABINESE",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DIABION Cápsulas",
    laboratorio: "MERCK",
  },
  {
    nombre: "DIA-BT CREMA CORPORAL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DIADICON COMPUESTO",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "DIADICON® JARABE PEDIATRICO Jarabe",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "DIAMICRON MR 60 MG Comprimidos de Liberación Prolongada",
    laboratorio: "FERRER",
  },
  {
    nombre: "DIANABEL® Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "DIANE 35® Grageas",
    laboratorio: "BAYER",
  },
  {
    nombre: "DIAPRESAN Comprimidos",
    laboratorio: "BAGO",
  },
  {
    nombre: "DIAREN",
    laboratorio: "SAVAL",
  },
  {
    nombre: "DIARRHEEL SN® Comprimidos Sublinguales",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "DIAVITAL LACTASA",
    laboratorio: "MAVER",
  },
  {
    nombre: "DIAZEPAM",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "DIAZEPAM",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "DIAZEPAM Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "DIAZEPAM L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "DICETEL Comprimidos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DICIL CREMA 1% Crema-Solución",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "DICLOFENACO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "DICLOFENACO GEL",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "DICLOFENACO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "DICLOFENACO SODICO",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "DICLOFENACO SODICO 100 MG Cápsulas",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "DICLOFENACO SODICO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "DICLOTAREN GEL",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "DICOGEL Gel",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "DICOMEX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DICUPAL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "DIENCIL Pasta Dental",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "DIFEXON Solución",
    laboratorio: "BAGO",
  },
  {
    nombre: "DIFFERIN Gel-Crema",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "DIFFERIN 0.3% Gel",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "DIFLUCAN®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DIGENIL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "DIGESPAR®",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre:
      "DIGESPLEN SABOR LIMÓN Polvo Efervescente para solución oral en sobres",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "DIGOXINA",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "DIGOXINA Comprimidos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "DIGOXINA Solución Oral",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "DIGOXINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "DILASEDAN® Comprimidos 10 mg",
    laboratorio: "BAGO",
  },
  {
    nombre: "DILATREND",
    laboratorio: "ROCHE",
  },
  {
    nombre: "DIMECAINA Gel Oral 2%",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "DIMECAINA Solución Tópica (Spray) 10%",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "DIMECAINA Solución Tópica 4%",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "DIMENOX",
    laboratorio: "KNOP",
  },
  {
    nombre: "DIMUXON Suspensión para inhalación",
    laboratorio: "RAFFO",
  },
  {
    nombre: "DINAFLEX DUO Cápsulas",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "DINAFLEX DUO FORTE Gránulos para Solución Oral en Sobres",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "DIOLASA",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "DIONDEL Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "DIOTENSIL 10 MG Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "DIOTENSIL 20 MG Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "DIPATROPIN",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "DIPEMINA Comprimidos Recubiertos",
    laboratorio: "RAFFO",
  },
  {
    nombre: "DIPHERELINE Suspensión Inyectable",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DIPIRIDAMOL L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "DIPROFOL Emulsión Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "DIRTOP®",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "DISALOT® Suspensión",
    laboratorio: "OPHTHA",
  },
  {
    nombre: "DISBRONC",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DISFLAX 30 MG Comprimidos (Bioequivalente)",
    laboratorio: "FAES FARMA",
  },
  {
    nombre: "DISFLAX 6 MG Comprimidos (Bioequivalente)",
    laboratorio: "FAES FARMA",
  },
  {
    nombre: "DISFLAX GOTAS 22.75 MG/ML Suspensión Oral",
    laboratorio: "FAES FARMA",
  },
  {
    nombre: "DISFRUTA",
    laboratorio: "MAVER",
  },
  {
    nombre: "DISGESPLEN Polvo Efervescente para solución oral en sobres",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "DISGREN® AAS 81",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "DISILDEN®",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "DISLEP Comprimidos",
    laboratorio: "FERRER",
  },
  {
    nombre: "DISOPRANIL",
    laboratorio: "PRATER",
  },
  {
    nombre: "DISVEN",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DIUPROL Comprimidos Recubiertos 50 mg",
    laboratorio: "RAFFO",
  },
  {
    nombre: "DIVALPREX® Comprimidos con Recubrimiento Entérico",
    laboratorio: "GADOR PHARMA",
  },
  {
    nombre: "DIVANON Cápsulas Blandas Vaginales",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "DIVARIL Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "DIXI-35",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DOBUTAMINA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "DOBUTAMINA CLORHIDRATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "DOCETAXEL",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "DOCETAXEL Frasco-Ampolla",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DOCIVIN Cápsulas",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "DOCIVIN Suspensión Oral",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "DOLCOPIN",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "DOLDENT",
    laboratorio: "MAVER",
  },
  {
    nombre: "DOLGENAL Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "DOLGENAL Solución Inyectable",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "DOLGENAL SL Comprimidos Sublinguales",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "DOLGEX Suspensión Oral",
    laboratorio: "CHILE",
  },
  {
    nombre: "DOLGEX L 200-400-600 L.CH. Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "DOLIDER",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "DOLIPRAN",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DOLNIX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DOLODROPS Suspensión Oral",
    laboratorio: "SAVAL",
  },
  {
    nombre: "DOLOFAR Cápsulas",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "DOLO-MERPAL® Cápsulas con Microgránulos",
    laboratorio: "PRATER",
  },
  {
    nombre: "DOLONASE",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "DOLONEUROBIONTA Comprimidos Recubiertos",
    laboratorio: "MERCK",
  },
  {
    nombre: "DOLO-OCTIRONA",
    laboratorio: "CHILE",
  },
  {
    nombre: "DOLORUB",
    laboratorio: "MAVER",
  },
  {
    nombre: "DOLOSPAM",
    laboratorio: "CHILE",
  },
  {
    nombre: "DOLOSTAT® 100 MG",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "DOLOTEN",
    laboratorio: "BAGO",
  },
  {
    nombre: "DOLOTEN ODT Comprimidos Bucodispersables",
    laboratorio: "BAGO",
  },
  {
    nombre: "DOLOTOL 12",
    laboratorio: "SAVAL",
  },
  {
    nombre: "DOLOVERINA",
    laboratorio: "SAVAL",
  },
  {
    nombre: "DOLPIC",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "DOMINIUM",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "DOMPERIDONA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "DOMPERIDONA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "DONABEL 2/1® Comprimidos Recubiertos",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "DONEGAL Suspensión para Gotas Orales",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "DONOMIX",
    laboratorio: "CHILE",
  },
  {
    nombre: "DONTER Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "DONTER Crema Dérmica",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "DOOX Comprimidos 5 mg",
    laboratorio: "CHILE",
  },
  {
    nombre: "DOPABEN",
    laboratorio: "CHILE",
  },
  {
    nombre: "DOPAMINA CLORHIDRATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "DOPAMINA CLORHIDRATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "DORFREE",
    laboratorio: "OPHTHA",
  },
  {
    nombre: "DORMIK GLOBULOS SANAKIND",
    laboratorio: "KNOP",
  },
  {
    nombre: "DORMONID AMPOLLAS I.V./I.M.",
    laboratorio: "ROCHE",
  },
  {
    nombre: "DORMONID COMPRIMIDOS",
    laboratorio: "ROCHE",
  },
  {
    nombre: "DORSOF T",
    laboratorio: "CHILE",
  },
  {
    nombre: "DORTIM Solución Oftálmica",
    laboratorio: "OPHTHA",
  },
  {
    nombre: "DOSARA",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "DOSARA-D",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "DOSARA-D FORTE",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "DOSIN",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "DOSTINEX®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DOXICICLINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "DOXITHAL Comprimidos Dispersables",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "DOXITHAL SR Cápsulas con gránulos de liberación prolongada",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "DOXIUM Cápsulas",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "DOXOPEG Suspensión Liposomada Pegilada Inyectable",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "DOXORRUBICINA TEVA Frasco-Ampolla",
    laboratorio: "CHILE",
  },
  {
    nombre: "DOXORUBICINA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DOXORUBICINA",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DOXORUBICINA",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "DOXORUBICINA CLORHIDRATO Solución Inyectable",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DRALITEM",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "DRINA",
    laboratorio: "SILESIA",
  },
  {
    nombre: "DRONAVAL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "DRONAVAL PACK BITERAPIA",
    laboratorio: "SAVAL",
  },
  {
    nombre: "DROPERIDOL",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "DROPERIDOL Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "DROPOL Comprimidos Efervescentes",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "DRYSOL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "DUAGEN® Cápsulas Blandas",
    laboratorio: "ETEX",
  },
  {
    nombre: "DUALTEN",
    laboratorio: "SAVAL",
  },
  {
    nombre: "DUAVIVE Comprimidos Recubiertos de Liberación Modificada",
    laboratorio: "PFIZER",
  },
  {
    nombre: "DUBLINA Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "DUCETEN",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DUCRAY Anacaps",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "DUCRAY Anaphase Shampoo Anticaída",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "DUCRAY Argeal Shampoo",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "DUCRAY Creastim loción anticaída",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "DUCRAY Elution Shampoo",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "DUCRAY Keracnyl Control",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "DUCRAY Keracnyl Gel Espumante",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "DUCRAY Keracnyl PP",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "DUCRAY Melascreen Solar FPS 50+",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "DUCRAY Melascreen despigmentante",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "DUCRAY Neoptide loción anticaída",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "DUCRAY Sensinol Shampoo",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "DUCRAY Shampoo Kelual DS",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "DUCRAY Shampoo Squanorm Caspa Grasa",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "DUCRAY Shampoo Squanorm Caspa Seca",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "DULOXETINA 30 MG Cápsulas con Gránulos con Recubrimiento Entérico",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "DULOXETINA 60 MG Cápsulas con Gránulos con Recubrimiento Entérico",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "DUL-SUC",
    laboratorio: "PRATER",
  },
  {
    nombre: "DUODART® Cápsulas",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "DUOFILM Solución",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "DUOPLANT 27% Gel",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "DUORESP SPIROMAX 160 mcg/4.5 mcg",
    laboratorio: "CHILE",
  },
  {
    nombre: "DUORESP SPIROMAX 320 mcg/9 mcg",
    laboratorio: "CHILE",
  },
  {
    nombre: "DUOTRAV",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "DUOVAL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "DUPHALAC",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DUPHASTON",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DURASHIELD",
    laboratorio: "MAVER",
  },
  {
    nombre: "DURATEARS",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "DURATOCIN",
    laboratorio: "FERRING",
  },
  {
    nombre: "DUROGESIC MATRICIAL®",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "DUSPATALIN 200 MG Cápsulas",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "DVIDA Gotas",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "D´ VIDAMAX Polvo para Solución Oral",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "DYNAXON® Cápsulas",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "EAU THERMALE AVÈNE Agua Termal",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Akérat 10 Crema Corporal",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Cleanance Gel Limpiador",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Cleanance MAT Emulsión",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Cleanance MAT Loción",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Clean. Barra Dermat.Desincrust.",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Cold Cream Crema",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Cold Cream Crema Manos",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Cold Cream Gel Limpiador",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Cold Cream Leche Corporal",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Cold Cream Pan Limpiador",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Compacto coloreado FPS 50+",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Crema Coloreada FPS 50+",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Crema Mineral FPS 50+",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVENÈ Cuidado calmante cont. de ojos",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE D-Pigment ligera y Rica",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Emulsión Toque Seco FPS 50+",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Exfoliante Suave Purificante",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Gel Autobronceante Hidratante",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Hydrance Optimale UV FPS 20",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Leche Mineral FPS 50+",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Loc. Limp. Pieles Intolerantes",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Loción Micelar",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Reflex Solaire FPS 50+",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Sérénage Crema Día y Noche",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Tolérance Extreme Crema",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE TriAcnéal Expert",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE XeraCalm A.D Aceite Limpiador",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE XeraCalm A.D Crema y Bálsamo",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE YsthéAL Cont. de Ojos y Labios",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE YsthéAL Emul. & Cr. antiarrugas",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Anti-rojeces Día Crema Hidra FPS 20",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Anti-rojeces Día Emul. Hidra FPS 20",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Anti-rojeces Fort Cuidado Conc",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Akérat 30 Cr Zonas Localizadas",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre:
      "EAU THERMALE AVÈNE Cicalfate Emulsión reparadora Post-acto dermatológico superficial",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Cleanance Expert",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Cleanance Hydra",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Cold Cream Stick Labios",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Crema Nutritiva Compensadora",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Crema pieles intolerantes",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Emul. Toque Seco FPS 50+ Color",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Leche Limpiadora Suavizante",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Leche Niños FPS 50+",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Mascarilla Calmante Hidratante",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Pediatril Gel Limpiador Bebe",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Physiolift Bálsamo Noche",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Physiolift Contorno Ojos -Noche",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Physiolift Día Crema Alisadora",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE AVÈNE Physiolift Día Emul. Alisadora",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre:
      "EAU THERMALE AVÈNE Physiolift Precisión-Noche Rellenador de Arrugas",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EAU THERMALE Cicalfate Cr. Cicatrizante y Repar.",
    laboratorio: "PIERRE-FABRE DERMOCOSMETIQUE",
  },
  {
    nombre: "EBANTINA Comprimidos Recubiertos 10 mg",
    laboratorio: "RAFFO",
  },
  {
    nombre: "EBIXA® Comprimidos Recubiertos 10 mg y 20 mg",
    laboratorio: "LUNDBECK CHILE",
  },
  {
    nombre: "ECALTA",
    laboratorio: "PFIZER",
  },
  {
    nombre: "ECHINACEA COMPOSITUM SN Solución Inyectable",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "ECHIPROP D6 Comprimidos",
    laboratorio: "KNOP",
  },
  {
    nombre: "ECICLEAN Tabletas Efervescentes",
    laboratorio: "BIOTOSCANA",
  },
  {
    nombre: "ECICLEAN CURVE",
    laboratorio: "BIOTOSCANA",
  },
  {
    nombre: "ECITALEX Comprimidos de Disolución Bucal",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ECOTRIN 100 MG",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ECOTRIN 325 MG",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ECTIBAN",
    laboratorio: "CHILE",
  },
  {
    nombre: "ECTIEN XR Cápsulas de liberación prolongada",
    laboratorio: "CHILE",
  },
  {
    nombre: "EFEDRINA SULFATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "EFEDRINA SULFATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "EFEXOR® XR",
    laboratorio: "PFIZER",
  },
  {
    nombre: "EFFACLAR AGUA MICELAR PURIFICANTE Agua Micelar",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "EFFACLAR SERUM Serum corrector de imperfecciones y arrugas",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "EFFACLAR A.I. Corrector Localizado",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "EFFACLAR BARRA DERMATOLOGICA PURIFICANTE",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "EFFACLAR BB BLUR",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "EFFACLAR DUO+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "EFFACLAR DUO+ FPS 30",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "EFFACLAR DUO+UNIFIANT",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "EFFACLAR GEL ESPUMANTE PURIFICANTE Gel Purificante",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "EFFACLAR H Hidratante, compensador, calmante",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "EFFACLAR K+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "EFFACLAR MAT Piel Grasa Deshidratada",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "EFFICORT",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "EGOGYN",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EGOGYN 400 U.I.",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EGOL",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "EGOL MAX",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "EGOL PLUS",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "ELASTOLABOR Ungüento",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ELATER Crema Dérmica 1%",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "ELBRUS Comprimidos",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "ELCAL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ELCALCI Comprimidos Recubiertos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ELCAL-D",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ELCAL-D 500/800 Cápsulas",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ELCAL-D FORTE",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ELCAL-D PLUS",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ELCAL-D SUPRA",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ELCAL FORTE",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ELCALKID Suspensión Oral",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ELECTRAL 75 Polvo para Solución Oral",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "ELEMIGROL Comprimidos Recubiertos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ELEVAL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ELIPTIC OFTENO Solución Oftálmica",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "ELIPTIC OFTENO® PF Solución Oftálmica",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "ELIQUIS® Comprimidos Recubiertos",
    laboratorio: "PFIZER",
  },
  {
    nombre: "ELITIRAN® Suspensión Oral",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ELITOS ET®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ELITOS ET FORTE®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ELIXINE",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ELOCOM Crema-Loción",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "ELONTRIL® XL Comprimidos 150 mg",
    laboratorio: "ETEX",
  },
  {
    nombre: "ELONTRIL® XL Comprimidos 300 mg",
    laboratorio: "ETEX",
  },
  {
    nombre: "ELONVA Jeringas Pre-cargadas",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "ELTOVEN",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ELVENIR",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMEND® Cápsulas",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "EMERGEN",
    laboratorio: "CHILE",
  },
  {
    nombre: "EMEZOL®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "EMOLAN ACONDICIONADOR",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN BALSAMO CON FILTRO SOLAR",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN BEBE CREMA CORPORAL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN BEBE GEL DE LIMPIEZA TODO EN UNO",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN BEBE JABON ESPUMA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN BEBE SHAMPOO",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN CREMA ULTRA PROTECTORA DE MANOS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN EXFOLIANTE LIMPIEZA PROFUNDA PIEL GRASA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN FLUIDO FACIAL MATIFICANTE C/AC. HIALURONICO",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN FOTOPROTECTOR MINERAL FPS 50+",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN FOTOPROTECTOR SPRAY FPS 50",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN GEL DE LIMPIEZA PURIFICANTE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN GEL PROTECTOR SOLAR FPS 30",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN H",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN MAMA ACEITE ANTIESTRIAS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN MAMA LANOLINA PEZON",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN MAMA POST NATAL CREMA REAFIRMANTE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN MAMA PRENATAL CREMA ANTIESTRIAS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN PROTECTOR SOLAR SPF50",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN PROTECTOR SOLAR ACEITE SPF 30 Aceite",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN PROTECTOR SOLAR TRIPLE PROTECCION SPF30",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN SHAMPOO",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN SHAMPOO CON FILTRO SOLAR",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN SHAMPOO HIOPALERGENICO",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN TRATAMIENTO DESPIGMENTANTE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "EMOLAN PROTECTOR SOLAR SPORT SPF 50 170 ml",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENALAPRIL 5 MG Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ENALAPRIL 10 MG Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ENALAPRIL 20 MG Comprimidos recubiertos 20 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ENALAPRIL MALEATO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "ENALTEN",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ENALTEN-D/ENALTEN DN",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ENANTYUM® Comprimidos",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "ENBREL®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "ENBREL® Liofilizado para solución inyectable con solvente",
    laboratorio: "PFIZER",
  },
  {
    nombre: "ENBREL® Solución Inyectable en Jeringa Prellenada",
    laboratorio: "PFIZER",
  },
  {
    nombre: "ENCIFER Complejo Hidróxido Férrico-Sacarosa",
    laboratorio: "BIOTOSCANA",
  },
  {
    nombre: "ENDOCARE TENSAGE AMPOLLAS",
    laboratorio: "BAGO",
  },
  {
    nombre: "ENDOCARE TENSAGE CONTORNO DE OJOS",
    laboratorio: "BAGO",
  },
  {
    nombre: "ENDOCARE TENSAGE CREMA",
    laboratorio: "BAGO",
  },
  {
    nombre: "ENDOCARE TENSAGE SERUM",
    laboratorio: "BAGO",
  },
  {
    nombre: "ENDOFALK Polvo para Solución Oral",
    laboratorio: "BIOTOSCANA",
  },
  {
    nombre: "ENDOGEL",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "ENDOLCE® Líquido",
    laboratorio: "PRATER",
  },
  {
    nombre: "ENDOLCE® Polvo",
    laboratorio: "PRATER",
  },
  {
    nombre: "ENDOLCE® Tabletas",
    laboratorio: "PRATER",
  },
  {
    nombre: "ENDOXAN",
    laboratorio: "BAXTER",
  },
  {
    nombre: "ENDUX®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "ENERDAY 6 HORAS NO + CAÑA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENERDAY MAXIMUM PIÑA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENERDAY MAXIMUM SANDIA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENERDAY 6 HORAS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENERDAY 6 HORAS ACTIMENTE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENERDAY 6 HORAS EXTRA FUERTE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENERDAY TRADICIONAL LIMA LIMON",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENGERIX-B",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ENGYSTOL® Comprimidos Sublinguales",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "ENSOY ADULTO 400 GRS VAINILLA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENSOY DEFENSE ADULTO SABOR VAINILLA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENSOY FRUTILLA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENSOY LIQUIDO NIÑOS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENSOY MINI CHOCOLATE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENSOY MINI 400 GRS FRESAS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENSOY MINI VAINILLA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENSOY MINI 900 GRS VAINILLA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENSOY VAINILLA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENSURE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENSURE ADVANCE RPB CHOCOLATE Solución Bebible",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENSURE ADVANCE RPB VAINILLA Solución Bebible",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENSURE ADVANCE VAINILLA Polvo",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENSURE NG SWEET CHOCOLATE Polvo",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENSURE NG SWEET FRUTILLA Polvo",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENSURE NG SWEET VAINILLA Polvo",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ENTAXAR",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ENTEROL® S",
    laboratorio: "SANITAS",
  },
  {
    nombre: "ENTRESTO Comprimidos Recubiertos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "EPAXAL",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "EPI-DERM",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "EPIDOXORUBICINA",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "EPIDUO Gel",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "EPI-FOAM",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "EPINEFRINA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "EPINEFRINA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "EPIVIR® 3TC Comprimidos Recubiertos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "EPIVIR® 3TC Solución Oral",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "EPRAL L.CH. Cápsulas",
    laboratorio: "CHILE",
  },
  {
    nombre: "EQUORAL",
    laboratorio: "CHILE",
  },
  {
    nombre: "ERBITUX CETUXIMAB 5 MG/ML Solución para Perfusión",
    laboratorio: "MERCK",
  },
  {
    nombre: "ERGOCALCIFEROL L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "ERGOMETRINA MALEATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "ERGOMETRINA MALEATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "ERITRELAN 2.000 UI - 4.000 UI",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ERITROMAX Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "ERITROMICINA",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ERIVEDGE",
    laboratorio: "ROCHE",
  },
  {
    nombre: "EROSFIL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ERYACNEN GEL 4%",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "ERYLIK GEL Gel Tópico",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "ESBRIET Cápsulas",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ESC Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "ESCAPEL-1 Comprimidos",
    laboratorio: "GEDEON RICHTER",
  },
  {
    nombre: "ESCAPEL-2 Comprimidos",
    laboratorio: "GEDEON RICHTER",
  },
  {
    nombre: "ESCAR T Crema",
    laboratorio: "PRATER",
  },
  {
    nombre: "ESCAR T NEOMICINA",
    laboratorio: "PRATER",
  },
  {
    nombre: "ESCITALOPRAM Comprimidos Recubiertos",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "ESCITALOPRAM 10 MG Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ESCITAVITAE Comprimidos Recubiertos",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "ESCOPOLAMINA N-BUTIL BROMURO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "ESIO 40 mg Comprimidos con Recubrimiento Entérico",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "ESKALIT® SR Comprimidos Recubiertos de Liberación Sostenida",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ESMERON Solución Inyectable",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "ESMYA® Tabletas",
    laboratorio: "GEDEON RICHTER",
  },
  {
    nombre: "ESPERCIL",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "ESPIRONOLACTONA",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ESPIRONOLACTONA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "ESTAPROL®",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "ESTRACYT®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "ESTREDOX Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "ESTREVA GEL Gel",
    laboratorio: "CHILE",
  },
  {
    nombre: "ESVIT C 100 MG",
    laboratorio: "CHILE",
  },
  {
    nombre: "ESVIT C 500 MG",
    laboratorio: "CHILE",
  },
  {
    nombre: "ESZOP Comprimidos 3 mg",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ETACONIL Comprimidos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "ETOPOSIDO",
    laboratorio: "PFIZER",
  },
  {
    nombre: "ETOPOSIDO",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "ETOPOSIDO TEVA Frasco-Ampolla",
    laboratorio: "CHILE",
  },
  {
    nombre: "EUCERIN® ACEITE DE DUCHA PH5",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® ANTIESTRIAS ACEITE PH5 Aceite",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® ANTIPIGMENTO CREMA DIA FPS 20 Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® ANTIPIGMENTO CREMA NOCHE Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® ANTIPIGMENTO FLUIDO FPS 30",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® ANTIPIGMENTO SPOT CORRECTOR",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® AQUAPHOR UNGÜENTO REPARADOR Ungüento",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® AQUAPORIN ACTIVE BODY Loción Corporal Refrescante",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® AQUAPORIN ACTIVE CONTORNO DE OJOS Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® AQUAPORIN ACTIVE FPS 25 Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® AQUAPORIN ACTIVE PIEL NORMAL MIXTA Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® AQUAPORIN ACTIVE PIEL SECA Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® BABY BAÑO Y SHAMPOO Shampoo",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® BABY CREMA CORPORAL Crema Hidratante",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® BABY CREMA PROTECTORA Crema Protectora",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® BAJO LA DUCHA PH5",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® CREMA ANTI-ENROJECIMIENTO SPF 25 Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® CREMA DE MANOS PH5 Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® CREMA PH5 INTENSIVA Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® CREMA PH5 Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® PIEL SECA - DA CONTROL CREMA DE CUIDADO Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® PIEL SECA-DA CONTROL LOCION DE CUIDADO Loción",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® DERMOPURE AGUA MICELAR Agua Micelar",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® DERMOPURE BALS. CALMANTE COMPLEMENTARIO",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® DERMOPURE CREMA FACIAL ACC. INTENSIVA",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® DERMOPURE EXFOLIANTE FACIAL",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre:
      "EUCERIN® DERMOPURE FLUIDO FACIAL MATIFICANTE Fluido Facial Hidratante Matificante",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® DERMOPURE GEL LIMPIADOR Gel",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® DESODORANTE PH5",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® ELASTICITY ACEITE FACIAL Aceite",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® ELASTICITY CREMA DIA FPS 15 Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® ELASTICITY CREMA NOCHE Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® SUN FACIAL FLUIDO MATIFICANTE FPS 50+ FPS 50+",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® HIGIENE INTIMA PH5",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® HYAL-UREA",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® HYALURON-FILLER CC CREAM Fluido",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® HYALURON-FILLER CONCENTRATE Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® HYALURON-FILLER CONTORNO DE OJOS FPS 15 FPS 15",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® HYALURON-FILLER CREMA DE DIA FPS 15 FPS 15",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® HYALURON-FILLER CREMA DE NOCHE Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® HYALURON-FILLER DIA PIEL NORMAL/MIXTA Fluido",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® HYALURON MIST SPRAY Spray",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® LABIAL ACUTE LIP BALM Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre:
      "EUCERIN® LOCION MISCELAR DERMATOCLEAN Loción Micelar limpiadora 3 en 1",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® SUN NIÑOS LOCION FPS 50+ Loción",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® LOCION PH5 Loción",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® MEN ANTI-EDAD CUIDADO REVITALIZANTE Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® MEN BALSAMO AFTER SHAVE Bálsamo",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® PIEL SECA ATOPIC BALSAMO CALMANTE Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® PIEL SECA CREMA PARA PIES 10% UREA Crema Hidratante",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® PIEL SECA UREA REPAIR 5% Loción",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® PIEL SECA UREA REPAIR 10% Loción",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® Q10 CONTORNO DE OJOS Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® Q10 CREMA DIA Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® Q10 CREMA NOCHE Crema",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® Q10 FLUIDO Loción",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre:
      "EUCERIN® SHAMPOO DERMOCAPILLAIRE ANTICASPA CREMA Shampoo Anticaspa",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® SHAMPOO DERMOCAPILLAIRE ANTICASPA GEL Shampoo Anticaspa",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre:
      "EUCERIN® SHAMPOO DERMOCAPILLAIRE REVITALIZANTE Shampoo Revitalizante-Anticaída",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre:
      "EUCERIN® SHAMPOO DERMOCAPILLAIRE TRAT ANTICAIDA Tratamiento Revitalizante Anticaída",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre:
      "EUCERIN® SHAMPOO DERMOCAPILLAIRE TRAT ANTICASPA Tratamiento Anticaspa",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® SHAMPOO PH5 DERMOCAPILLAIRE Shampoo",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® SUN CORPORAL SPRAY FPS 50+ FPS 50+",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® SUN FACIAL ANTI-EDAD FPS 50 Fluido Facial",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® SUN CORPORAL CREMA GEL FPS 50 FPS 50",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® SUN CORPORAL LOCION TEXT LIGERA FPS 50+ FPS 50+",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® SUN FACIAL CC FPS 50+",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® SUN FACIAL CREMA FPS 50+ FPS 50+",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® SUN FACIAL TOQUE SECO CREMA GEL FPS 50+",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® SUN NIÑOS LOCION MICROPIGMENTOS FPS 30 FPS 25",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® SUN NIÑOS SPRAY FPS 50+ FPS 50+",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® SUN SPRAY TRANSPARENTE FPS 50 Spray",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® SUN CORPORAL SPRAY TOQUE SECO FPS 50 FPS 50",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® SYNDET GEL PH5 Gel",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® ULTRASENSITIVE CREMA FACIAL FLUIDA Crema Fluida",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® ULTRASENSITIVE LOCION LIMPIADORA Loción Limpiadora",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® VOLUME FILLER CONTORNO DE OJOS Contorno de Ojos FPS 15",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre:
      "EUCERIN® VOLUME FILLER CREMA DIA FPS 15 Piel Normal a Mixta FPS 15",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® VOLUME FILLER CREMA NOCHE Crema de Noche",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUCERIN® VOLUME FILLER CREMA PIEL SECA FPS15",
    laboratorio: "BEIERSDORF",
  },
  {
    nombre: "EUDINA Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "EUPEN Cápsulas",
    laboratorio: "CHILE",
  },
  {
    nombre: "EUPHORBIUM® COMPOSITUM S Solución para Inhalación Nasal",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "EUPHORBIUM® COMPOSITUM SN Solución Oral para Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "EUROCOR Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "EUROCOR AM Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "EUROCOR D",
    laboratorio: "SAVAL",
  },
  {
    nombre: "EURODERM Crema Tópica 1%",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "EUROFLEX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "EUROGESIC",
    laboratorio: "SAVAL",
  },
  {
    nombre: "EUROGESIC FORTE",
    laboratorio: "SAVAL",
  },
  {
    nombre: "EUROGESIC GEL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "EUROGREL Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "EUROMICINA",
    laboratorio: "SAVAL",
  },
  {
    nombre: "EUROMUCIL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "EUROVIR / EUROVIR FORTE",
    laboratorio: "SAVAL",
  },
  {
    nombre: "EUROZINA-RE Comprimido con Recubrimiento Entérico",
    laboratorio: "SAVAL",
  },
  {
    nombre: "EUTEBROL Comprimidos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "EUTECAINA®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "EUTIROX®",
    laboratorio: "MERCK",
  },
  {
    nombre: "EUVIRAX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "EVADOL XR",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "EVAFEM® 20",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "EVERCLEAN GEL CREMA ANTI IMPERFECCIONES Gel Crema",
    laboratorio: "ISDIN",
  },
  {
    nombre: "EVERCLEAN GEL SECANTE ON THE SPOT Gel Secante",
    laboratorio: "ISDIN",
  },
  {
    nombre: "EVERCLEAN GEL ULTRA MATIFICANTE Gel Crema Toque Seco",
    laboratorio: "ISDIN",
  },
  {
    nombre: "EVILIN",
    laboratorio: "MERCK",
  },
  {
    nombre: "EVIMAL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "EVISTA®",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "EVOCAZ CD COMPRIMIDOS DISPERSABLES Comprimidos Dispersables",
    laboratorio: "SAVAL",
  },
  {
    nombre: "EVRA®",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "EXELON Cápsulas",
    laboratorio: "AXON PHARMA",
  },
  {
    nombre: "EXELON PARCHE",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "EXELRING® Anillo Vaginal",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "EXEMESTANO Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "EXEVITAE Comprimidos Recubiertos",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "EXFOLIANTE INTEGRAL",
    laboratorio: "URIAGE",
  },
  {
    nombre: "EXFORGE",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "EXIFOL Cápsulas Blandas",
    laboratorio: "PRATER",
  },
  {
    nombre: "EXJADE Comprimidos Dispersables",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "EXOPIL Comprimidos Recubiertos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "EXTOSEN",
    laboratorio: "SANITAS",
  },
  {
    nombre: "EYE ADVANCE CREAM CSL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "EYE CREAM CSL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "EYKOSACOL OMEGA 3",
    laboratorio: "KNOP",
  },
  {
    nombre: "EZETROL Comprimidos 10 mg",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "FACIELLE® AR Crema",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "FACIELLE® BARRA Jabón Barra",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "FACIELLE® MICELAR Agua Micelar",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "FACIMIN®",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "FACITOR Cápsulas",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "FACTIVE Comprimidos Recubiertos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "FAMIDAL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "FAMIDAL DUAL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "FAMOTIDINA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "FAMOTIDINA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "FAMOTIDINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "FANDHI® Liofilizado para solución inyectable con solvente",
    laboratorio: "GRIFOLS",
  },
  {
    nombre: "FAPRIS Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "FARMORUBICINA",
    laboratorio: "PFIZER",
  },
  {
    nombre: "FASALCOL Solución Tópica 1%",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "FASALIMP Solución Nasal 0.9%",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "FASAMIGRAL® Comprimidos Recubiertos",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "FASARAX",
    laboratorio: "PRATER",
  },
  {
    nombre: "FASIGYN® FORTE Comprimidos Recubiertos",
    laboratorio: "PFIZER",
  },
  {
    nombre: "FASLODEX 250 mg/5 ml Jeringas Pre-cargadas",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "FATFIN® Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "FEELS",
    laboratorio: "CHILE",
  },
  {
    nombre: "FEIBA",
    laboratorio: "BAXTER",
  },
  {
    nombre: "FELDENE",
    laboratorio: "PFIZER",
  },
  {
    nombre: "FELDENE GEL",
    laboratorio: "PFIZER",
  },
  {
    nombre: "FELSOL®",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "FEMARA",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "FEMELLE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FEMELLE 20",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FEMELLE FOL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FEMELLE 20 FOL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FEMINOL",
    laboratorio: "CHILE",
  },
  {
    nombre: "FEMINOL 15",
    laboratorio: "CHILE",
  },
  {
    nombre: "FEMINOL 20",
    laboratorio: "CHILE",
  },
  {
    nombre: "FEMINOL 20 CD Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "FEMIPLUS 20 Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "FEMIPLUS CD Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "FEMOSTON 1/10",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FEMOSTON CONTI",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FENAX",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "FENITOINA SODICA 250 MG/5 ML",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "FENITOINA SODICA PROMPT L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "FENOBARBITAL SODICO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "FENOTEROL BROMHIDRATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "FENOTEROL BROMHIDRATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "FENTANILO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "FENTANILO CITRATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "FENTEX®",
    laboratorio: "SANITAS",
  },
  {
    nombre: "FERBEX Cápsulas",
    laboratorio: "CHILE",
  },
  {
    nombre: "FERCOVIT",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "FERINJECT Solución",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "FERIUM Gotas",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "FERRANEM",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "FERRANIM",
    laboratorio: "SANITAS",
  },
  {
    nombre: "FERRIGOT",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "FERROPROTINA Granulado para Solución Oral",
    laboratorio: "FAES FARMA",
  },
  {
    nombre: "FERSITOL",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "FESANIL JARABE 30 mg/5 ml Jarabe",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "FESEMA Solución para Respirador",
    laboratorio: "ETEX",
  },
  {
    nombre: "FEX Crema",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FEXIONEL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "FEXIS®",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "FEXURIX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FIBORAN Cápsulas",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FIBRASOL",
    laboratorio: "MAVER",
  },
  {
    nombre: "FIBROLOW LIDOSE CAPSULAS Cápsulas",
    laboratorio: "SAVAL",
  },
  {
    nombre: "FIBRONIL Cápsulas",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "FIBROTINA LIDOSE 160/40 Cápsulas",
    laboratorio: "SAVAL",
  },
  {
    nombre: "FIBROX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "FIBROX XR Comprimidos Recubiertos de Liberación Controlada",
    laboratorio: "SAVAL",
  },
  {
    nombre: "FINAGRIP® Comprimidos Recubiertos",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "FINAGRIP® Suspensión Oral",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "FINAPET Cápsulas",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "FINDALER®",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "FINDALER®-D",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "FINDALER® Gotas",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "FINDALER® Jarabe",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "FINDER SHAMPOO 2% Shampoo 2%",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "FINEX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "FINGOLIMOD Cápsulas",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "FIRMAGON 80 Polvo para Solución Inyectable",
    laboratorio: "FERRING",
  },
  {
    nombre: "FIRMAGON 120 Polvo para Solución Inyectable",
    laboratorio: "FERRING",
  },
  {
    nombre: "FIRST ALLER DEFENSE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FIRST ALLER DEFENSE KIDS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FIRST ALLER DEFENSE MAS POMO 10 G",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FISIOFER FOL Solución Oral",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "FISIOFER MONODOSIS",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "FISIOFER SOLUCION ORAL 800 mg/15 ml Jarabe",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "FISIOGEL Crema-Crema Líquida",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "FISIOGEL AI Crema-Crema Líquida",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "FISIOGEL Dermolimpiador Hidratante Gel",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "FISIOGEL SHAMPOO PLUS Shampoo",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "FISIOLIMP",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "FISIOLIMP H Solución",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "FISIOLIMP LN Lavado Nasal",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "FISIOMAR Solución Isotónica de Agua de Mar",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "FITOFLAVONA® Cápsulas",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "FITOINMUN Solución Oral",
    laboratorio: "KNOP",
  },
  {
    nombre: "FITOMENADIONA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "FITOMENADIONA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "FITTIG ANTIMICOTICO Desodorante",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "FITTIG SPRAY Talco en Aerosol",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "FITTIG DESODORANTE - REFRESCANTE",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "FIXODERM",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "FKD",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "FLAGYL® 500 MG Comprimidos Recubiertos",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "FLAGYL® 125 MG/5 ML Suspensión Oral",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "FLAGYL 0.5% Solución Inyectable",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "FLAMIR Gel",
    laboratorio: "BAGO",
  },
  {
    nombre: "FLAMUS",
    laboratorio: "CHILE",
  },
  {
    nombre: "FLANAX® 275 Comprimidos Recubiertos",
    laboratorio: "BAYER",
  },
  {
    nombre: "FLANAX 550 Comprimidos Recubiertos",
    laboratorio: "BAYER",
  },
  {
    nombre: "FLAPEX",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "FLAPEX E",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "FLARINA® 35 Comprimidos Recubiertos",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "FLEBOGAMMA® 5% Solución inyectable",
    laboratorio: "GRIFOLS",
  },
  {
    nombre: "FLECTANE 500/20 Comprimidos con Recubrimiento Entérico",
    laboratorio: "SANITAS",
  },
  {
    nombre: "FLECTOR GEL Gel",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "FLECTOR GRANULADO PARA SOL. ORAL 50 MG EN SOBRES Granulado",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "FLECTOR PARCHES",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "FLEET ENEMA",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "FLEETGLICOL Polvo para Suspensión Oral",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "FLEMEX JAT Jarabe",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FLEMEX J.A.T. FORTE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FLEMILAR®",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "FLEXONO",
    laboratorio: "SANITAS",
  },
  {
    nombre: "FLIXOTIDE LF 125 mcg Aerosol para Inhalación",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "FLIXOTIDE LF 250 mcg Aerosol para Inhalación",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "FLOBACT SOLUCION OFTALMICA 0.3% Solución Oftálmica",
    laboratorio: "OPHTHA",
  },
  {
    nombre: "FLOGOFIN",
    laboratorio: "CHILE",
  },
  {
    nombre: "FLOGOFIN I.M.-I.V.",
    laboratorio: "CHILE",
  },
  {
    nombre: "FLOGOJET",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "FLOGOTONE®",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "FLORALITE SABOR NARANJA Solución Oral",
    laboratorio: "MERCK",
  },
  {
    nombre: "FLORELL Comprimidos Recubiertos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "FLORINEF Comprimidos",
    laboratorio: "ASPEN",
  },
  {
    nombre: "FLOTAC",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "FLUANXOL Comprimidos Recubiertos",
    laboratorio: "LUNDBECK CHILE",
  },
  {
    nombre: "FLUANXOL DEPOT Solución Inyectable",
    laboratorio: "LUNDBECK CHILE",
  },
  {
    nombre: "FLUARIX®",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "FLUCLOXACILINA SODICA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "FLUCONAZOL",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "FLUCONAZOL 150 MG Cápsulas",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "FLUCONAZOL Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "FLUCONAZOL Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "FLUCTIN Cápsulas",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FLUFENAZINA DECANOATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "FLUFENAZINA DECANOATO 25 mg/1 ml Ampollas",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "FLUFENAZINA DECANOATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "FLUFORTE®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "FLUIBRON",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "FLUIDASA® 100 mg Gránulos para Suspensión Oral",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FLUIDASA® 600 mg",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FLUIDO DE LIMPIEZA ALLERGIKA Fluido",
    laboratorio: "ALLERGIKA CHILE",
  },
  {
    nombre: "FLUK GLOBULOS SANAKIND",
    laboratorio: "KNOP",
  },
  {
    nombre: "FLUMAZENIL Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "FLUMETOL NF OFTENO® Suspensión Oftálmica",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "FLUNARIZINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "FLUNITRAZEPAM L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "FLUOR·AID® 0.05% Colutorio",
    laboratorio: "DENTAID",
  },
  {
    nombre: "FLUOROURACILO",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "FLUOXEM Solución Inyectable",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "FLUOXETINA",
    laboratorio: "SANITAS",
  },
  {
    nombre: "FLUOXETINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "FLUQUADRI Vacunas",
    laboratorio: "SANOFI PASTEUR",
  },
  {
    nombre: "FLUSONA 0.05% Crema",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FLUSONA LF 125 ug Inhalador",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FLUSURE® Suspensión Oftálmica",
    laboratorio: "OPHTHA",
  },
  {
    nombre: "FLUTICORT HFA Inhalador 125 mcg",
    laboratorio: "CASSARA",
  },
  {
    nombre: "FLUTIVATE CREMA",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "FLUXAMOL HFA 125/25 Aerosol para Inhalación",
    laboratorio: "CASSARA",
  },
  {
    nombre: "FLUXAMOL HFA 250/25 Aerosol para Inhalación",
    laboratorio: "CASSARA",
  },
  {
    nombre: "FLUXUS Comprimidos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "FLUYET",
    laboratorio: "PHARMAVITA",
  },
  {
    nombre: "FLÚOR KIN Pasta Dentrífica Anticaries",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "FOAM CLEANSER Espuma",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "FOCUS® 500 Comprimidos",
    laboratorio: "BAYER",
  },
  {
    nombre: "FOILLE",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "FOLACID 5 mg",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "FOLACID 1 MG Comprimidos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "FOLEX Solución",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FOLIFER Cáps.con gránulos de Hierro de Lib. Prolongada",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "FOLIPIL Comprimidos Recubiertos",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "FOLISANIN",
    laboratorio: "SANITAS",
  },
  {
    nombre: "FOLLITRIN Inyectable",
    laboratorio: "FERRING",
  },
  {
    nombre: "FOLTRAN",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "FOLVIT Comprimidos Recubiertos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "FONTUP SABOR CHOCOLATE ALLERGIKA Polvo",
    laboratorio: "ALLERGIKA CHILE",
  },
  {
    nombre: "FORBUDEN 160/4.5 Polvo para Inhalación en Cápsulas Duras",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "FORENE Líquido para Inhalación",
    laboratorio: "ABBVIE",
  },
  {
    nombre: "FORENOL LP Comprimidos con Rec. Entérico de Lib. Retardada",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "FORMOLINE L112 Comprimidos",
    laboratorio: "BAGO",
  },
  {
    nombre: "FORTEO®",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "FORTUM Inyectable 1 g",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "FORXIGA® 10 mg Comprimidos Recubiertos",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "FOSFATO MONOPOTASICO 15%",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "FOSFOSODA CASEN RECORDATI Solución Oral",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "FOSVAL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "FOTOCREM-P CREMA PROTECTORA SOLAR FPS 50+ Crema",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre:
      "FOTOPROTECTOR ISDIN FUSION FLUID PEDIATRICS SPF50+ Protector Solar",
    laboratorio: "ISDIN",
  },
  {
    nombre:
      "FOTOPROTECTOR ISDIN ACTIVE OIL PRO-MELANIN SPF30 Protección con Tecnología Bronceante",
    laboratorio: "ISDIN",
  },
  {
    nombre: "FOTOPROTECTOR ISDIN CORPORAL FUSION AIR SPF 50+ Bruma ultraligera",
    laboratorio: "ISDIN",
  },
  {
    nombre:
      "FOTOPROTECTOR ISDIN CORPORAL FUSION GEL SPF 50+ Gel con Tecnología Fusión de Alta Hidratación",
    laboratorio: "ISDIN",
  },
  {
    nombre:
      "FOTOPROTECTOR ISDIN CORPORAL TRANSP. SPRAY SPF 50+ Gel Transparente en Spray de Alta Hidratación",
    laboratorio: "ISDIN",
  },
  {
    nombre: "FOTOPROTECTOR ISDIN ERYFOTONA AK-NMSC SPF50+ Crema-Fluido",
    laboratorio: "ISDIN",
  },
  {
    nombre:
      "FOTOPROTECTOR ISDIN FACIAL CREMA COLOR SPF 50+ Emuls. Gel Crema de Alta Hidratación y Toque Seco",
    laboratorio: "ISDIN",
  },
  {
    nombre: "FOTOPROTECTOR ISDIN FACIAL FUSION FLUID 50+ Protector Solar",
    laboratorio: "ISDIN",
  },
  {
    nombre: "FOTOPROTECTOR ISDIN FACIAL FUSION FLUID COLOR 50+ Protector Solar",
    laboratorio: "ISDIN",
  },
  {
    nombre: "FOTOPROTECTOR ISDIN FACIAL FUSION FLUID MINERAL Protector Solar",
    laboratorio: "ISDIN",
  },
  {
    nombre: "FOTOPROTECTOR ISDIN FACIAL FUSION WATER 50+ Protector Solar",
    laboratorio: "ISDIN",
  },
  {
    nombre:
      "FOTOPROTECTOR ISDIN FAC. GEL CR. DRY TOUCH SPF50 Emuls. Gel Crema de Alta Hidratación y Toque Seco",
    laboratorio: "ISDIN",
  },
  {
    nombre:
      "FOTOPROTECTOR ISDIN FACIAL MAQ. COMPACTO SPF50+ Maquillaje Compacto Oil-Free",
    laboratorio: "ISDIN",
  },
  {
    nombre: "FOTOPROTECTOR ISDIN FOTO ULTRA ISDIN AGE REPAIR Fluido Reparador",
    laboratorio: "ISDIN",
  },
  {
    nombre:
      "FOTOPROTECTOR ISDIN FOTO ULTRA ISDIN SOLAR ALLERGY Protector Solar",
    laboratorio: "ISDIN",
  },
  {
    nombre: "FOTOPROTECTOR ISDIN GEL CREMA SPF 50+ Gel - Crema Tacto Ligero",
    laboratorio: "ISDIN",
  },
  {
    nombre:
      "FOTOPROTECTOR ISDIN LOCION CORPORAL SPF 50+ Loción Hidratación Intensa",
    laboratorio: "ISDIN",
  },
  {
    nombre:
      "FOTOPROTECTOR ISDIN PEDIATRICS GEL CREMA SPF 50+ Gel - Crema Tacto Ligero",
    laboratorio: "ISDIN",
  },
  {
    nombre:
      "FOTOPROTECTOR ISDIN PEDIATRICS LOCION SPF 50+ Loción Hidratante Intensa",
    laboratorio: "ISDIN",
  },
  {
    nombre:
      "FOTOPROTECTOR ISDIN PEDIATRICS LOTION SPF 50+ Fotoprotector Pediátrico en Spray",
    laboratorio: "ISDIN",
  },
  {
    nombre:
      "FOTOPROTECTOR ISDIN PEDIAT. TRANS. SPRAY WET SKIN Spray Transparente Resistente al Agua 50+",
    laboratorio: "ISDIN",
  },
  {
    nombre:
      "FOTOPROTECTOR ISDIN TRANSPARENT SPRAY WET SKIN 50+ Spray Transparente Resistente al Agua",
    laboratorio: "ISDIN",
  },
  {
    nombre: "FOTOSOL ULTRA 50 CREMA PROTECTORA SOLAR FPS50 Protector Solar",
    laboratorio: "CASSARA",
  },
  {
    nombre: "FOTOULTRA 100 ISDIN ACTIVE UNIFY FUSION FLUID Fluido Color 50+",
    laboratorio: "ISDIN",
  },
  {
    nombre:
      "FOTOULTRA 100 ISDIN SPOT PREVENT FUSION FLUID 50+ Fluido sin Color",
    laboratorio: "ISDIN",
  },
  {
    nombre: "FRAGIDERM Ungüento Dérmico",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "FRAGMIN®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "FREDOL",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "FREEGEN GEL GOTAS OFTALMICAS 1%",
    laboratorio: "OPHTHA",
  },
  {
    nombre: "FREEGEN SOLUCION OFTALMICA 0.5 % Solución Oftálmica al 0.5%",
    laboratorio: "OPHTHA",
  },
  {
    nombre: "FRENALER-D Grageas",
    laboratorio: "CHILE",
  },
  {
    nombre: "FRENALER-D Jarabe Infantil",
    laboratorio: "CHILE",
  },
  {
    nombre: "FRENOTOS Jarabe",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FRESHCLEAR®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "FRESHMEL",
    laboratorio: "CHILE",
  },
  {
    nombre: "FRESHMEL MULTISABOR",
    laboratorio: "CHILE",
  },
  {
    nombre: "FRESHMEL TOS",
    laboratorio: "CHILE",
  },
  {
    nombre: "FUCICORT® Crema",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "FUCIDIN Crema",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "FUCIDIN Ungüento",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "FUCIDIN H® Crema",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "FUCIDIN® INTERTUL",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "FUNGIUM",
    laboratorio: "SAVAL",
  },
  {
    nombre: "FUNGOPIROX CREMA 1% Crema",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "FUNGOPIROX POLVO 1% Polvo",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "FUNGOS® Crema",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "FUNGOS® Ovulos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "FUNGOS® Polvo 1%",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "FUNGOS®500 Ovulos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "FUNGOS® SOLUCION TOPICA 1% Solución Tópica 1%",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "FURAZOLIDONA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "FURAZOLIDONA INFANTIL L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "FURDIUREN",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "FUROKAL® 250 mg Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "FUROSEMIDA 20 mg/1 ml",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "FUROSEMIDA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "FUROSEMIDA 20 mg/2 ml Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "FUROSEMIDA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "FUSIMED Crema Dérmica 2%",
    laboratorio: "CASSARA",
  },
  {
    nombre: "FUSIMED-B Emulsión Dérmica",
    laboratorio: "CASSARA",
  },
  {
    nombre: "FUZEON",
    laboratorio: "ROCHE",
  },
  {
    nombre: "GAAP OFTENO® Solución Oftálmica al 0.005%",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "GABEX",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "GABICTAL Comprimidos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "GALANVITAE® Comprimidos de Liberación Prolongada",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "GALIUM-HEEL® N Solución Oral para Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "GALVUS Comprimidos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "GALVUS MET Comprimidos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "GAMALATE B6",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "GAMALATE FORTE Comprimidos Recubiertos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "GAMMAGLOBULINA HUMANA ANTI-D PASTEURIZADA",
    laboratorio: "GRIFOLS",
  },
  {
    nombre: "GAMMAGLOBULINA HUMANA ANTIHEPATITIS B PASTEURIZADA",
    laboratorio: "GRIFOLS",
  },
  {
    nombre: "GAMMAGLOBULINA HUMANA ANTITETANICA PASTEURIZADA",
    laboratorio: "GRIFOLS",
  },
  {
    nombre: "GAMMAGLOBULINA HUMANA PASTEURIZADA GRIFOLS",
    laboratorio: "GRIFOLS",
  },
  {
    nombre: "GAMMANORM® Solución Inyectable 165 mg/ml",
    laboratorio: "BAGO",
  },
  {
    nombre: "GANFORT®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "GARDASIL® Suspensión Inyectable",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "GASOPAX® Comprimidos",
    laboratorio: "PRATER",
  },
  {
    nombre: "GASORBOL Gotas",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "GASTRICUMEEL® Comprimidos Sublinguales",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "GASTRIDE",
    laboratorio: "CHILE",
  },
  {
    nombre: "GASTRIUM",
    laboratorio: "SAVAL",
  },
  {
    nombre: "GASTRODINE",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "GASTROLEN",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "GATIF",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "GAVISCON COMPRIMIDOS",
    laboratorio: "RECKITT BENCKISER",
  },
  {
    nombre: "GAVISCON DOBLE ACCION COMPRIMIDOS",
    laboratorio: "RECKITT BENCKISER",
  },
  {
    nombre: "GAVISCON DOBLE ACCION SACHET",
    laboratorio: "RECKITT BENCKISER",
  },
  {
    nombre: "GAVISCON DOBLE ACCION SUSPENSION",
    laboratorio: "RECKITT BENCKISER",
  },
  {
    nombre: "GAVISCON SACHET",
    laboratorio: "RECKITT BENCKISER",
  },
  {
    nombre: "GAVISCON SUSPENSION",
    laboratorio: "RECKITT BENCKISER",
  },
  {
    nombre: "GAZYVA",
    laboratorio: "ROCHE",
  },
  {
    nombre: "GC FLU Vacunas",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "GEA ARTROM",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "GEA MELATONINA Cápsulas",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "GELCLAIR Gel Oral",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "GEL DE LIMPIEZA PURETE THERMALE",
    laboratorio: "VICHY",
  },
  {
    nombre: "GELFOAM",
    laboratorio: "PFIZER",
  },
  {
    nombre: "GELICOL Polvo para Solución Oral",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "GELICOL® MAQUI Polvo para preparar bebida",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "GELIDIX® Sobres",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "GEMCITABINA 1 g/100 ml Frasco-Ampolla",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "GEMFIBROZILO",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "GEMFIBROZILO",
    laboratorio: "CHILE",
  },
  {
    nombre: "GEMFIBROZILO",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "GEMZAR®",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "GENIOL 500 MG Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "GENIOL 160 MG Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "GENIOL FLU DN Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "GENIOL FLU JARABE Jarabe",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "GENIOL INFANTIL Comprimidos Masticables - 80 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "GENIOL SOBRE Sobres",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "GENIOL SOLUCION Solución para Gotas Orales",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "GENOTROPIN",
    laboratorio: "PFIZER",
  },
  {
    nombre: "GENTAMICINA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "GENTAMICINA L.CH. Crema Dérmica",
    laboratorio: "CHILE",
  },
  {
    nombre: "GENTAMICINA L.CH. Inyectable",
    laboratorio: "CHILE",
  },
  {
    nombre: "GENTAMICINA L.CH. Solución Oftálmica",
    laboratorio: "CHILE",
  },
  {
    nombre: "GENTAMICINA SULFATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "GENUTEN",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "GERMISDIN HIGIENE CORPORAL PIEL SECA",
    laboratorio: "ISDIN",
  },
  {
    nombre: "GESDINE® Comprimidos",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "GESDINE 20® Comprimidos",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "GESER 30 mg Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "GESIDOL ADULTO Comprimidos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "GESIDOL COMPRIMIDOS 1 g Comprimidos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "GESIDOL INFANTIL GOTAS",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "GESIDOL INFANTIL Comprimidos Masticables",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "GESIDOL INFANTIL JARABE",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "GESIDOL SUPOSITORIO INFANTIL Supositorio Infantil",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "GESIPROCT Crema rectal",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "GESIX CAPSULAS 200 MG Cápsulas",
    laboratorio: "SAVAL",
  },
  {
    nombre: "GESTEL® Cápsulas Blandas 100 mg",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "GESTEL® Cápsulas Blandas 200 mg",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "GESTREDOS®",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "GIABRI Comprimidos",
    laboratorio: "MERCK",
  },
  {
    nombre: "GIANDA® Comprimidos Recubiertos",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "GIANDA CD® Comprimidos Recubiertos",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "GILENYA Cápsulas",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "GINECOPAST DUAL",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "GINECOPAST OVULOS Ovulos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "GINEDAZOL",
    laboratorio: "CHILE",
  },
  {
    nombre: "GINEDAZOL DUAL",
    laboratorio: "CHILE",
  },
  {
    nombre: "GINEMAXIM Comprimidos",
    laboratorio: "KNOP",
  },
  {
    nombre: "GINESSE® Comprimidos Recubiertos",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "GINKGO BILOBA Comprimidos",
    laboratorio: "GNC-FASA",
  },
  {
    nombre: "GINKGO BILOBA 40 MG Cápsulas Blandas",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "GINLAC®",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "GINODERM 0.06% Gel",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "GINODIEST Comprimidos Recubiertos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "GINSENG",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "GINTOL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "GIOTRIF Comprimidos Recubiertos",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "GLAFORNIL Comprimidos Recubiertos",
    laboratorio: "MERCK",
  },
  {
    nombre: "GLAFORNIL XR 500",
    laboratorio: "MERCK",
  },
  {
    nombre: "GLAFORNIL XR 750",
    laboratorio: "MERCK",
  },
  {
    nombre: "GLAFORNIL XR 1000 Comprimidos de Liberación Prolongada",
    laboratorio: "MERCK",
  },
  {
    nombre: "GLAUCOPROST Solución Oftálmica",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "GLAUCOTENSIL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "GLAUCOTENSIL T",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "GLAUPAX 750 XR Comprimidos de Liberación Prolongada",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "GLAUPAX 500 Comprimidos Recubiertos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "GLAUPAX 850 Comprimidos Recubiertos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "GLAUPAX 500 XR Comprimidos de Liberación Prolongada",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "GLAUPAX 1000 XR Comprimidos de Liberación Prolongada",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "GLEMAZ Comprimidos",
    laboratorio: "BAGO",
  },
  {
    nombre: "GLIBENCLAMIDA",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "GLIBENCLAMIDA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "GLICENEX Comprimidos",
    laboratorio: "BAGO",
  },
  {
    nombre: "GLICENEX® DUO Comprimidos",
    laboratorio: "BAGO",
  },
  {
    nombre: "GLICENEX® SR Comprimidos de Liberación Prolongada",
    laboratorio: "BAGO",
  },
  {
    nombre: "GLICOISDIN ANTIAGING CREMA 8 Crema",
    laboratorio: "ISDIN",
  },
  {
    nombre: "GLICOISDIN ANTIAGING GEL 10 Gel",
    laboratorio: "ISDIN",
  },
  {
    nombre: "GLICOISDIN ANTIAGING CREMA 15 Crema",
    laboratorio: "ISDIN",
  },
  {
    nombre: "GLICOISDIN ANTIAGING GEL 15 Gel",
    laboratorio: "ISDIN",
  },
  {
    nombre: "GLICOISDIN ANTIAGING GEL 25 Gel",
    laboratorio: "ISDIN",
  },
  {
    nombre: "GLIDANIL Comprimidos Recubiertos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "GLIDANIL-G Comprimidos Recubiertos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "GLIFORTEX",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "GLIFORTEX XR 1000 Comprimidos Recubiertos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "GLIFORTEX G",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "GLIFORTEX XR 750 Comprimidos Recubiertos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "GLIFORTEX XR 500 Comprimidos Recubiertos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "GLIVEC Comprimidos Recubiertos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "GLOBIFER®",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "GLUCAGEN® HYPOKIT 1 MG (U.I.)",
    laboratorio: "NOVO NORDISK",
  },
  {
    nombre: "GLUCALBOTT RTH",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "GLUCERNA TRIPLECARE VAINILLA POLVO Polvo",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "GLUCERNA TRIPLECARE VAINILLA RPB Solución Bebible",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "GLUCOBAY",
    laboratorio: "BAYER",
  },
  {
    nombre: "GLUCONATO DE CALCIO 10%",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "GLUCONATO DE CALCIO 10% Ampollas",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "GLUCONATO DE CALCIO 10% Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "GLUCOPHAGE",
    laboratorio: "ROCHE",
  },
  {
    nombre: "GLUCOPHAGE 500 MG XR",
    laboratorio: "ROCHE",
  },
  {
    nombre: "GLUCOPHAGE 750 MG XR",
    laboratorio: "ROCHE",
  },
  {
    nombre: "GLUCOSA Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "GLUCOSAMINA 750 + CONDROITINA 600 Comprimidos",
    laboratorio: "GNC-FASA",
  },
  {
    nombre: "GLUCOSAMINA SULFATO Cápsulas",
    laboratorio: "GNC-FASA",
  },
  {
    nombre: "GLUCOSAMINA SULFATO- CONDROITINA SULFATO Comprimidos",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "GLUCOVANCE",
    laboratorio: "MERCK",
  },
  {
    nombre: "GLUKAUT",
    laboratorio: "SANITAS",
  },
  {
    nombre: "GLYCYLPRESSIN Liofilizado para Solución Inyectable",
    laboratorio: "FERRING",
  },
  {
    nombre: "GLYXAMBI Comprimidos Recubiertos",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "GOFYL",
    laboratorio: "AXON PHARMA",
  },
  {
    nombre: "GONACOR",
    laboratorio: "FERRING",
  },
  {
    nombre: "GONADOTROFINA Inyectable",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "GONAL-F Polvo Liofilizado para Solución Inyectable",
    laboratorio: "MERCK",
  },
  {
    nombre: "GONAL-F PEN Solución Inyectable",
    laboratorio: "MERCK",
  },
  {
    nombre: "GONAPEPTYL DAIL Y Solución Inyectable",
    laboratorio: "FERRING",
  },
  {
    nombre: "GOTALGIC Solución Otica",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "GOTELY Cápsulas",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "GOTELY DUO Cápsulas",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "GOVAL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "GRACIAL Comprimidos",
    laboratorio: "ASPEN",
  },
  {
    nombre: "GRAPHITES-HEELACCORD® Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "GREENGENE 500 Liofilizado para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "GREEN VIII Liofilizado para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "GRIFOCIPROX",
    laboratorio: "CHILE",
  },
  {
    nombre: "GRIFOCLOBAM",
    laboratorio: "CHILE",
  },
  {
    nombre: "GRIFODILZEM",
    laboratorio: "CHILE",
  },
  {
    nombre: "GRIFOGEMZILO",
    laboratorio: "CHILE",
  },
  {
    nombre: "GRIFONITREN",
    laboratorio: "CHILE",
  },
  {
    nombre: "GRIFOPARKIN",
    laboratorio: "CHILE",
  },
  {
    nombre: "GRIFOPRIL-D",
    laboratorio: "CHILE",
  },
  {
    nombre: "GRIFOTAXIMA",
    laboratorio: "CHILE",
  },
  {
    nombre: "GRIFOTENOL",
    laboratorio: "CHILE",
  },
  {
    nombre: "GRIFOTRIAXONA",
    laboratorio: "CHILE",
  },
  {
    nombre: "GRIPASAN COMPUESTO DN",
    laboratorio: "CHILE",
  },
  {
    nombre: "GRIPASAN COMPUESTO NUEVA FORMULA",
    laboratorio: "CHILE",
  },
  {
    nombre: "GRIPP-HEEL® Comprimidos Sublinguales",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "GRISEOFULVINA",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "GUTRON",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "GUTTALAX",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "GYNACOHEEL N® Solución Oral para Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "GYNERA Grageas",
    laboratorio: "BAYER",
  },
  {
    nombre: "GYNERA GRAGEAS 75/20 Grageas",
    laboratorio: "BAYER",
  },
  {
    nombre: "GYNOCANESTEN Comprimidos Vaginales",
    laboratorio: "BAYER",
  },
  {
    nombre: "GYNOCANESTEN Cápsulas Blandas Vaginales",
    laboratorio: "BAYER",
  },
  {
    nombre: "GYNODIAN DEPOT® Solución Inyectable",
    laboratorio: "BAYER",
  },
  {
    nombre: "GYNOPHILUS Cápsulas Vaginales",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "GYNORELLE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "GYNOSTAT / GYNOSTAT 20",
    laboratorio: "CHILE",
  },
  {
    nombre: "HALDOL Comprimidos, Soluc.p/Gotas Orales, Soluc.Inyect.",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "HALDOL DECANOAS Solución Inyectable",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "HALITA",
    laboratorio: "DENTAID",
  },
  {
    nombre: "HALOPERIDOL",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "HALOPERIDOL Comprimidos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "HALOPERIDOL Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "HARMONET®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "HASSAPIRIN",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "HAVRIX JUNIOR Suspensión Inyectable",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "HAVRIX ADULTO",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "HAXPA Vacunas",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "H-B-VAX®",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "HEADOL 160 MG Comprimidos Masticables",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "HEADOL COMPUESTO DIA Y NOCHE Comprimidos Recubiertos",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "HEBERBIOVAC HB",
    laboratorio: "BAGO",
  },
  {
    nombre: "HEBERIN",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "HEDILAR FORTE",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "HEDILAR JARABE",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "HEEL-KIT® Solución Oral para Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "HELIOCARE",
    laboratorio: "BAGO",
  },
  {
    nombre:
      "HELIOCARE COMPACTO OIL-FREE SPF 50 BROWN-LIGHT Pieles normales a grasas",
    laboratorio: "BAGO",
  },
  {
    nombre: "HELIOCARE COMPACTO SPF 50 LIGHT Pieles normales a secas",
    laboratorio: "BAGO",
  },
  {
    nombre: "HELIOCARE 360° FLUIDO CREAM - SPF 50+ Crema",
    laboratorio: "BAGO",
  },
  {
    nombre: "HELIOCARE GEL CREAM SPF 50 LIGHT-BROWN",
    laboratorio: "BAGO",
  },
  {
    nombre: "HELIOCARE 360° GEL OIL FREE - SPF 50 Gel",
    laboratorio: "BAGO",
  },
  {
    nombre:
      "HELIOCARE GEL ULTRA SPF 50+ Pieles normales a grasas y con tendencia acneica",
    laboratorio: "BAGO",
  },
  {
    nombre: "HELIOCARE GEL XF SPF 50 XF Pieles normales, mixtas y grasas",
    laboratorio: "BAGO",
  },
  {
    nombre: "HELIOCARE 360° MINERAL - SPF 50+",
    laboratorio: "BAGO",
  },
  {
    nombre: "HELIOCARE TOQUE DE SOL SPF 50 Todo tipo de pieles",
    laboratorio: "BAGO",
  },
  {
    nombre: "HELIOFOL 1 MG Y 5 MG Comprimidos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "HEMIBE Comprimidos - Gotas Orales",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "HEMOFOLIC® Cápsulas Blandas",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "HEMOVAL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "HEPAR COMPOSITUM N Solución Inyectable",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "HEPARINA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "HEPARINA 50.000 U.I./10 ml Frasco-Ampolla",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "HEPARINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "HEPARINA SODICA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "HEPEEL® Comprimidos Sublinguales",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "HEPTA",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "HERCEPTIN IV",
    laboratorio: "ROCHE",
  },
  {
    nombre: "HERCEPTIN SC",
    laboratorio: "ROCHE",
  },
  {
    nombre: "HEROLAN",
    laboratorio: "CHILE",
  },
  {
    nombre: "HEXALECTOL Comprimidos Recubiertos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "HEXAXIM Vacunas",
    laboratorio: "SANOFI PASTEUR",
  },
  {
    nombre: "HIALTEARS Solución Oftálmica al 0.4%",
    laboratorio: "OPHTHA",
  },
  {
    nombre: "HIDRALAZINA CLORHIDRATO Comprimidos Recubiertos 50 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "HIDRALAZINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "HIDRASEC Cápsulas",
    laboratorio: "FERRER",
  },
  {
    nombre: "HIDRASEC 10 mg Gránulos para Solución Oral en Sobres",
    laboratorio: "FERRER",
  },
  {
    nombre: "HIDRASEC 30 mg Gránulos para Solución Oral en Sobres",
    laboratorio: "FERRER",
  },
  {
    nombre: "HIDRASOR CREMA HIDRATANTE Crema",
    laboratorio: "FEELDERM",
  },
  {
    nombre: "HIDRIUM",
    laboratorio: "SAVAL",
  },
  {
    nombre: "HIDROCLOROTIAZIDA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "HIDROCORTISONA 100/500 Polvo Liofilizado para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "HIDROLOTIO CORPORAL SENSITIVE ALLERGIKA Loción Corporal",
    laboratorio: "ALLERGIKA CHILE",
  },
  {
    nombre: "HIDRORONOL",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "HIDRORONOL T",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "HIDROXICARBAMIDA",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "HIEDRIX",
    laboratorio: "CHILE",
  },
  {
    nombre: "HIERRO SACARATO Solución Inyectable 100 mg/5 ml",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "HIPERFLEX K FORTE Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "HIPERFLEX UD Polvo para Solución Oral",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "HIPEXAL ®5 MG",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "HIPOGLOS®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "HIPOGLUCIN",
    laboratorio: "CHILE",
  },
  {
    nombre: "HIPOGLUCIN 1000 LP Comprimidos de Liberación Prolongada",
    laboratorio: "CHILE",
  },
  {
    nombre: "HIPOGLUCIN 750 LP Comprimidos de Liberación Prolongada",
    laboratorio: "CHILE",
  },
  {
    nombre: "HIPOGLUCIN 500 LP Comprimidos de Liberación Prolongada",
    laboratorio: "CHILE",
  },
  {
    nombre: "HIPOGLUCIN D A Comprimidos",
    laboratorio: "CHILE",
  },
  {
    nombre: "HIPOLIXAN",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "HIPOSTEROL",
    laboratorio: "CHILE",
  },
  {
    nombre: "HIPREX® Comprimidos",
    laboratorio: "CHILE",
  },
  {
    nombre: "HIRUDOID® Crema",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "HISTALEN",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "HMG MENOTROPINA 75 UI Frasco-Ampolla",
    laboratorio: "FERRING",
  },
  {
    nombre: "HOLADREN 7D",
    laboratorio: "CHILE",
  },
  {
    nombre: "HOLOXAN",
    laboratorio: "BAXTER",
  },
  {
    nombre: "HORMEEL®S Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "HORMOGEL® Pump Gel Transdérmico",
    laboratorio: "SILESIA",
  },
  {
    nombre: "HORMORAL-200 Cápsulas Blandas",
    laboratorio: "SILESIA",
  },
  {
    nombre: "HUMIRA Solución Inyectable en Jeringa Prellenada",
    laboratorio: "ABBVIE",
  },
  {
    nombre: "HUMYLUB NF OFTENO Solución Oftálmica",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "HUMYLUB OFTENO Solución Oftálmica",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "HUSTEEL® Solución Oral para Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "H-VIT Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "HYABAK Solución Oftálmica",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "HYACYST Solución",
    laboratorio: "RAFFO",
  },
  {
    nombre: "HYALGAN",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "HYALSENSE FINE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "HYALSENSE ULTRA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "HYALU B5 CREMA",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "HYALU B5 OJOS",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "HYALU B5 SERUM",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "HYCAMTIN Cápsulas",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "HYDRA FILLER",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "HYDRAGEL B5 CKL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "HYDRA HYAL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "HYDRAPHASE INTENSE LIGERA Piel Mixta a Grasa",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "HYDRAPHASE INTENSE OJOS",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "HYDRAPHASE INTENSE SERUM Agua Termal",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "HYDRAPHASE UV INTENSE LEGERE Piel Mixta a Grasa FPS 20",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "HYDRAPHASE UV INTENSE RICHE Agua Termal",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "HYFLEX Comprimidos",
    laboratorio: "CHILE",
  },
  {
    nombre: "HYPERCRIT® Liofilizado para solución inyectable con solvente",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "HYSEAC BI-STICK",
    laboratorio: "URIAGE",
  },
  {
    nombre: "HYSEAC GEL LIMPIADOR",
    laboratorio: "URIAGE",
  },
  {
    nombre: "HYSEAC MATIFICANTE",
    laboratorio: "URIAGE",
  },
  {
    nombre: "HYSEAC 3 REGUL",
    laboratorio: "URIAGE",
  },
  {
    nombre: "HYSEAC 3 REGUL CUIDADO GLOBAL CON COLOR Y SPF 30",
    laboratorio: "URIAGE",
  },
  {
    nombre: "HYSEAC SOS PASTA (PATE)",
    laboratorio: "URIAGE",
  },
  {
    nombre: "HYSTICLAR® Jarabe",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "HYZAAR®/HYZAAR FORTE® Comprimidos",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "IBAMES®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "IBAMES CD",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "IBANOX® Comprimidos Recubiertos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "IBARIN",
    laboratorio: "CHILE",
  },
  {
    nombre: "IBRANCE® Cápsulas",
    laboratorio: "PFIZER",
  },
  {
    nombre: "IBUFAS-T FORTE Suspensión 200 mg/ 5 ml",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "IBUFAS-T JARABE Suspensión Oral 100 mg/ 5 ml.",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "IBUKIDS FORTE Suspensión Oral",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "IBUPIRAC® FLU /IBUPIRAC® FLU FORTE Comprimidos",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "IBUPIRAC® FLU /IBUPIRAC® FLU FORTE Suspensión Oral",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "IBUPIRAC FORTE SUSPENSION",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "IBUPIRAC® LC Cápsulas Blandas",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "IBUPIRAC® LC Cápsulas Blandas",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "IBUPIRAC SUSPENSION",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "IBUPROFENO",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "IBUPROFENO Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "IBUPROFENO 400 MG Comprimidos Recubiertos",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "IBUPROFENO Comprimidos-Suspensión",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "IBUPROFENO 600 MG Comprimidos Recubiertos",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "IBUPROFENO COMPRIMIDOS RECUBIERTOS 400 MG Comprimidos Recubiertos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "IBUPROFENO COMPRIMIDOS RECUBIERTOS 600 MG Comprimidos Recubiertos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "IBUPROFENO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "ICAPS",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "IDEALIA Antiedad",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEALIA CONTORNO OJOS",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEALIA NOCHE Antiedad",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEALIA PEELING",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEALIA SERUM Serum",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL AGUA DE PROT SOLAR HIDRATANTE FPS 30",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL AGUA DE PROT SOLAR ANTIOX. FPS 30",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL AGUA DE PROT SOLAR BRONCEADORA FPS 30",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL ANTI-ARENA FPS 50+",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL ANTI-EDAD",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL ANTI-IMPERFECCIONES FPS 30",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL ANTI-MANCHAS FPS 50+",
    laboratorio: "VICHY",
  },
  {
    nombre:
      "IDEAL SOLEIL BB CREMA ATERCIOPELADA FPS 50 Protección solar rostro piel normal a seca",
    laboratorio: "VICHY",
  },
  {
    nombre:
      "IDEAL SOLEIL BB EMULSIÓN TOQUE SECO SPF 50+ Protección Solar Rostro",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL BRONZE FPS 50+",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL BRUMA DE ROSTRO FPS 50",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL CREMA ATERCIOPELADA FPS 50",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL CREMA TOQUE SECO FPS50 FPS 50",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL FLUIDO FPS 50",
    laboratorio: "VICHY",
  },
  {
    nombre:
      "IDEAL SOLEIL HYDRA MIST FPS 50 Spray hidratante inv. SPF50 Cuerpo. Sin Alcohol",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL LECHE AUTOBRONCEADORA HIDRATANTE",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL LECHE FAMILIAR CUERPO FPS 50+ FPS 50+",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL NIÑOS LECHE FPS 50+ Rostro y Cuerpo",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL NIÑOS SPRAY FPS 50+",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL STICK FPS 50+ Zonas Sensibles",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDENA Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "IDON",
    laboratorio: "SAVAL",
  },
  {
    nombre: "IFOSFAMIDA",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "IFOSFAMIDA TEVA Frasco-Ampolla",
    laboratorio: "CHILE",
  },
  {
    nombre: "IGAMAD Solución Inyectable",
    laboratorio: "GRIFOLS",
  },
  {
    nombre:
      "IGANTET 250 UI / IGANTET 500 UI Solución Inyectable en Jeringa Prellenada",
    laboratorio: "GRIFOLS",
  },
  {
    nombre: "IGANTIBE 1000 U.I./5 ML",
    laboratorio: "GRIFOLS",
  },
  {
    nombre: "IGNATIA - HEELACCORD® Solución Oral para Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "ILARIS Polvo para Solución Inyectable",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "ILAST Solución Oftálmica",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ILIADIN NASAL SPRAY ADULTO",
    laboratorio: "MERCK",
  },
  {
    nombre: "ILIMIT Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ILINOL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ILOSTAL",
    laboratorio: "MERCK",
  },
  {
    nombre: "ILTUX Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "ILTUX HCT Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "IMBRUVICA® Cápsulas",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "IMIDEP Comprimidos Recubiertos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "IMIPENEM + CILASTATINA Polvo para Solución para Infusión",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "IMIPRAMINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "IMIX",
    laboratorio: "CHILE",
  },
  {
    nombre: "IMPLANON NXT Implante",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "IMPLICANE Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "IMPLICANE Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "IMURAN Comprimidos",
    laboratorio: "ASPEN",
  },
  {
    nombre: "INCRUSE ELLIPTA POLVO PARA INHALACIÓN 55 MCG",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "INDAPRESS",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "INDIRAB VACUNA ANTIRABICA Liofilizado para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "INDOMETACINA Comprimidos",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "INDOXYL GEL DÉRMICO",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "INDUCTAL® Comprimidos Recubiertos",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "INEM",
    laboratorio: "CHILE",
  },
  {
    nombre: "INFACARE® 1 Fórmulas Lácteas Infantiles",
    laboratorio: "ASPEN",
  },
  {
    nombre: "INFACARE® 2 Fórmulas Lácteas Infantiles",
    laboratorio: "ASPEN",
  },
  {
    nombre: "INFANRIX HEXA",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "INFEX 500 mg Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "INFEX 125 mg/5 ml-250 mg/ml Gránulos para Suspensión Oral",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "INFLADER Cápsulas",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "INFLUMIX 20 ug/dosis Inhalador",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "INFLUVAC",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "INFOR",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFOR E",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFOR JARABE",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFOR® OMEGA Cápsulas Blandas",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFOR® PRO 3 Comprimidos Recubiertos",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFOR Q10",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFORTIN Comprimidos Masticables",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFORTIN Jarabe Pediátrico",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFORTIN ACD Gotas",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFORTIN KIDKAL® Suspensión-Caramelos Masticables",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFORTIN® PROBIOTICO Comprimidos Masticables",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFOR VIT D3 Comprimidos",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFOR VIT D3 Gotas",
    laboratorio: "PRATER",
  },
  {
    nombre: "INHIBACE",
    laboratorio: "ROCHE",
  },
  {
    nombre: "INHIBACE PLUS",
    laboratorio: "ROCHE",
  },
  {
    nombre: "INHIVIR Jarabe Adultos",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "INHIVIR Jarabe Infantil",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "INLYTA Comprimidos Recubiertos",
    laboratorio: "PFIZER",
  },
  {
    nombre: "INMUCEL PLUS Comprimidos Masticables",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "INMUFEN Comprimidos Recubiertos 500 mg",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "INMUFEN Cápsulas",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "INMUNOPRIN Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "INNOVA CD",
    laboratorio: "CHILE",
  },
  {
    nombre: "INSPRA® Comprimidos Recubiertos",
    laboratorio: "PFIZER",
  },
  {
    nombre: "INSULATARD® Suspensión Inyectable",
    laboratorio: "NOVO NORDISK",
  },
  {
    nombre: "INSULINA HUMALOG",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "INSULINA HUMALOG® KWIKPEN Inyectable Vía S.C.",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "INSULINA HUMALOG® MIX Inyectable Vía S.C.",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "INSULINA HUMULIN® N - R - 70/30 Inyectable Vía S.C.",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "INSULINA HUMULIN® N",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "INSUMAN® R Solución Inyectable",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "INSUMAN® N Solución Inyectable",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "INTAXEL Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "INTELENCE® Comprimidos",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "INTELIN CAPSULAS Cápsulas",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "INTERFERON ALFA-2b HUMANO RECOMBINANTE",
    laboratorio: "BAGO",
  },
  {
    nombre: "INUCAL GOTAS Solución Oral",
    laboratorio: "PRATER",
  },
  {
    nombre: "INVANZ Polvo Liofilizado para Solución Inyectable",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "INVIRASE Comprimidos Recubiertos",
    laboratorio: "ROCHE",
  },
  {
    nombre: "INVOKANA® Comprimidos Recubiertos",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "IONAX SCRUB",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "IONIL T",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "IPHSAFLEX®",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "IPRAN 10 mg Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "IPRICAL",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "IPSON",
    laboratorio: "SAVAL",
  },
  {
    nombre: "IPSON D",
    laboratorio: "SAVAL",
  },
  {
    nombre: "IPSON D FORTE",
    laboratorio: "SAVAL",
  },
  {
    nombre: "IPSON FORTE",
    laboratorio: "SAVAL",
  },
  {
    nombre: "IRALFARIS CHAMPU",
    laboratorio: "ISDIN",
  },
  {
    nombre: "IRALFARIS CREMA ZONAS ESPECIFICAS",
    laboratorio: "ISDIN",
  },
  {
    nombre: "IRALFARIS HIGIENE CORPORAL",
    laboratorio: "ISDIN",
  },
  {
    nombre: "IRALFARIS LOCION CORPORAL",
    laboratorio: "ISDIN",
  },
  {
    nombre: "IRAZEM Comprimidos",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "IRBEVITAE Comprimidos Recubiertos",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "IRESSA 250 mg Comprimidos Recubiertos",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "IRRIGOR",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ISDIBEN 10 / 20 Cápsulas Blandas",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ISDIN FLUNUTRAC 0.05% Crema",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ISDIN ISDINCEUTICS FLAVO-C",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ISDIN ISDINCEUTICS FLAVO-C ULTRAGLICAN",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ISDIN ISDINCEUTICS K-OX-EYES",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ISDIN ISDINCEUTICS MELACLEAR",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ISDIN ISDINCEUTICS SKIN DROPS",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ISENTRESS Comprimidos Recubiertos",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "ISKIMIL Comprimidos Recubiertos",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "ISOFLUORANO USP",
    laboratorio: "BAXTER",
  },
  {
    nombre: "ISOPRINOSINE",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ISOPROTERENOL CLORHIDRATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "ISOPTINA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ISOPTINA SR Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ISOSORBIDA DINITRATO Comprimidos 10 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ISOSORBIDE DINITRATO",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ISO STRUCTURE",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "ISOTOPIC SERUM HUMECTANTE Y REGENERADOR DERMICO Serum",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "ISOTREX 0.05% Gel",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "ISO-UREA LECHE Leche Corporal",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ISO-UREA LOCIÓN Loción",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ISOX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ISQUELIUM",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "ISTEFRAL® Cápsulas",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ITAN",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ITODAL",
    laboratorio: "CHILE",
  },
  {
    nombre: "ITRAC 100 Cápsulas",
    laboratorio: "CASSARA",
  },
  {
    nombre: "IVAREST",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "IVERCREM Crema Tópica 1%",
    laboratorio: "CASSARA",
  },
  {
    nombre: "IVIG-SN 5% Solución para Perfusión",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "IXEMPRA",
    laboratorio: "BRISTOL - MYERS SQUIBB",
  },
  {
    nombre: "IZINOVA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "IZOFRAN Comprimidos Recubiertos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "IZOFRAN Solución Inyectable",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "IZOFRAN Supositorios",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "IZOFRAN Zydis Tabletas Liofilizadas de Dispersión Bucal",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "IBAMES®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "IBAMES CD",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "IBANOX® Comprimidos Recubiertos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "IBARIN",
    laboratorio: "CHILE",
  },
  {
    nombre: "IBRANCE® Cápsulas",
    laboratorio: "PFIZER",
  },
  {
    nombre: "IBUFAS-T FORTE Suspensión 200 mg/ 5 ml",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "IBUFAS-T JARABE Suspensión Oral 100 mg/ 5 ml.",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "IBUKIDS FORTE Suspensión Oral",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "IBUPIRAC® FLU /IBUPIRAC® FLU FORTE Comprimidos",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "IBUPIRAC® FLU /IBUPIRAC® FLU FORTE Suspensión Oral",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "IBUPIRAC FORTE SUSPENSION",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "IBUPIRAC® LC Cápsulas Blandas",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "IBUPIRAC® LC Cápsulas Blandas",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "IBUPIRAC SUSPENSION",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "IBUPROFENO",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "IBUPROFENO Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "IBUPROFENO 400 MG Comprimidos Recubiertos",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "IBUPROFENO Comprimidos-Suspensión",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "IBUPROFENO 600 MG Comprimidos Recubiertos",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "IBUPROFENO COMPRIMIDOS RECUBIERTOS 400 MG Comprimidos Recubiertos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "IBUPROFENO COMPRIMIDOS RECUBIERTOS 600 MG Comprimidos Recubiertos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "IBUPROFENO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "ICAPS",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "IDEALIA Antiedad",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEALIA CONTORNO OJOS",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEALIA NOCHE Antiedad",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEALIA PEELING",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEALIA SERUM Serum",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL AGUA DE PROT SOLAR HIDRATANTE FPS 30",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL AGUA DE PROT SOLAR ANTIOX. FPS 30",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL AGUA DE PROT SOLAR BRONCEADORA FPS 30",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL ANTI-ARENA FPS 50+",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL ANTI-EDAD",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL ANTI-IMPERFECCIONES FPS 30",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL ANTI-MANCHAS FPS 50+",
    laboratorio: "VICHY",
  },
  {
    nombre:
      "IDEAL SOLEIL BB CREMA ATERCIOPELADA FPS 50 Protección solar rostro piel normal a seca",
    laboratorio: "VICHY",
  },
  {
    nombre:
      "IDEAL SOLEIL BB EMULSIÓN TOQUE SECO SPF 50+ Protección Solar Rostro",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL BRONZE FPS 50+",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL BRUMA DE ROSTRO FPS 50",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL CREMA ATERCIOPELADA FPS 50",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL CREMA TOQUE SECO FPS50 FPS 50",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL FLUIDO FPS 50",
    laboratorio: "VICHY",
  },
  {
    nombre:
      "IDEAL SOLEIL HYDRA MIST FPS 50 Spray hidratante inv. SPF50 Cuerpo. Sin Alcohol",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL LECHE AUTOBRONCEADORA HIDRATANTE",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL LECHE FAMILIAR CUERPO FPS 50+ FPS 50+",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL NIÑOS LECHE FPS 50+ Rostro y Cuerpo",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL NIÑOS SPRAY FPS 50+",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDEAL SOLEIL STICK FPS 50+ Zonas Sensibles",
    laboratorio: "VICHY",
  },
  {
    nombre: "IDENA Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "IDON",
    laboratorio: "SAVAL",
  },
  {
    nombre: "IFOSFAMIDA",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "IFOSFAMIDA TEVA Frasco-Ampolla",
    laboratorio: "CHILE",
  },
  {
    nombre: "IGAMAD Solución Inyectable",
    laboratorio: "GRIFOLS",
  },
  {
    nombre:
      "IGANTET 250 UI / IGANTET 500 UI Solución Inyectable en Jeringa Prellenada",
    laboratorio: "GRIFOLS",
  },
  {
    nombre: "IGANTIBE 1000 U.I./5 ML",
    laboratorio: "GRIFOLS",
  },
  {
    nombre: "IGNATIA - HEELACCORD® Solución Oral para Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "ILARIS Polvo para Solución Inyectable",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "ILAST Solución Oftálmica",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ILIADIN NASAL SPRAY ADULTO",
    laboratorio: "MERCK",
  },
  {
    nombre: "ILIMIT Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ILINOL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ILOSTAL",
    laboratorio: "MERCK",
  },
  {
    nombre: "ILTUX Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "ILTUX HCT Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "IMBRUVICA® Cápsulas",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "IMIDEP Comprimidos Recubiertos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "IMIPENEM + CILASTATINA Polvo para Solución para Infusión",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "IMIPRAMINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "IMIX",
    laboratorio: "CHILE",
  },
  {
    nombre: "IMPLANON NXT Implante",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "IMPLICANE Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "IMPLICANE Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "IMURAN Comprimidos",
    laboratorio: "ASPEN",
  },
  {
    nombre: "INCRUSE ELLIPTA POLVO PARA INHALACIÓN 55 MCG",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "INDAPRESS",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "INDIRAB VACUNA ANTIRABICA Liofilizado para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "INDOMETACINA Comprimidos",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "INDOXYL GEL DÉRMICO",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "INDUCTAL® Comprimidos Recubiertos",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "INEM",
    laboratorio: "CHILE",
  },
  {
    nombre: "INFACARE® 1 Fórmulas Lácteas Infantiles",
    laboratorio: "ASPEN",
  },
  {
    nombre: "INFACARE® 2 Fórmulas Lácteas Infantiles",
    laboratorio: "ASPEN",
  },
  {
    nombre: "INFANRIX HEXA",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "INFEX 500 mg Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "INFEX 125 mg/5 ml-250 mg/ml Gránulos para Suspensión Oral",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "INFLADER Cápsulas",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "INFLUMIX 20 ug/dosis Inhalador",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "INFLUVAC",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "INFOR",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFOR E",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFOR JARABE",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFOR® OMEGA Cápsulas Blandas",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFOR® PRO 3 Comprimidos Recubiertos",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFOR Q10",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFORTIN Comprimidos Masticables",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFORTIN Jarabe Pediátrico",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFORTIN ACD Gotas",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFORTIN KIDKAL® Suspensión-Caramelos Masticables",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFORTIN® PROBIOTICO Comprimidos Masticables",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFOR VIT D3 Comprimidos",
    laboratorio: "PRATER",
  },
  {
    nombre: "INFOR VIT D3 Gotas",
    laboratorio: "PRATER",
  },
  {
    nombre: "INHIBACE",
    laboratorio: "ROCHE",
  },
  {
    nombre: "INHIBACE PLUS",
    laboratorio: "ROCHE",
  },
  {
    nombre: "INHIVIR Jarabe Adultos",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "INHIVIR Jarabe Infantil",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "INLYTA Comprimidos Recubiertos",
    laboratorio: "PFIZER",
  },
  {
    nombre: "INMUCEL PLUS Comprimidos Masticables",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "INMUFEN Comprimidos Recubiertos 500 mg",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "INMUFEN Cápsulas",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "INMUNOPRIN Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "INNOVA CD",
    laboratorio: "CHILE",
  },
  {
    nombre: "INSPRA® Comprimidos Recubiertos",
    laboratorio: "PFIZER",
  },
  {
    nombre: "INSULATARD® Suspensión Inyectable",
    laboratorio: "NOVO NORDISK",
  },
  {
    nombre: "INSULINA HUMALOG",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "INSULINA HUMALOG® KWIKPEN Inyectable Vía S.C.",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "INSULINA HUMALOG® MIX Inyectable Vía S.C.",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "INSULINA HUMULIN® N - R - 70/30 Inyectable Vía S.C.",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "INSULINA HUMULIN® N",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "INSUMAN® R Solución Inyectable",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "INSUMAN® N Solución Inyectable",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "INTAXEL Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "INTELENCE® Comprimidos",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "INTELIN CAPSULAS Cápsulas",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "INTERFERON ALFA-2b HUMANO RECOMBINANTE",
    laboratorio: "BAGO",
  },
  {
    nombre: "INUCAL GOTAS Solución Oral",
    laboratorio: "PRATER",
  },
  {
    nombre: "INVANZ Polvo Liofilizado para Solución Inyectable",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "INVIRASE Comprimidos Recubiertos",
    laboratorio: "ROCHE",
  },
  {
    nombre: "INVOKANA® Comprimidos Recubiertos",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "IONAX SCRUB",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "IONIL T",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "IPHSAFLEX®",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "IPRAN 10 mg Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "IPRICAL",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "IPSON",
    laboratorio: "SAVAL",
  },
  {
    nombre: "IPSON D",
    laboratorio: "SAVAL",
  },
  {
    nombre: "IPSON D FORTE",
    laboratorio: "SAVAL",
  },
  {
    nombre: "IPSON FORTE",
    laboratorio: "SAVAL",
  },
  {
    nombre: "IRALFARIS CHAMPU",
    laboratorio: "ISDIN",
  },
  {
    nombre: "IRALFARIS CREMA ZONAS ESPECIFICAS",
    laboratorio: "ISDIN",
  },
  {
    nombre: "IRALFARIS HIGIENE CORPORAL",
    laboratorio: "ISDIN",
  },
  {
    nombre: "IRALFARIS LOCION CORPORAL",
    laboratorio: "ISDIN",
  },
  {
    nombre: "IRAZEM Comprimidos",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "IRBEVITAE Comprimidos Recubiertos",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "IRESSA 250 mg Comprimidos Recubiertos",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "IRRIGOR",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ISDIBEN 10 / 20 Cápsulas Blandas",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ISDIN FLUNUTRAC 0.05% Crema",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ISDIN ISDINCEUTICS FLAVO-C",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ISDIN ISDINCEUTICS FLAVO-C ULTRAGLICAN",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ISDIN ISDINCEUTICS K-OX-EYES",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ISDIN ISDINCEUTICS MELACLEAR",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ISDIN ISDINCEUTICS SKIN DROPS",
    laboratorio: "ISDIN",
  },
  {
    nombre: "ISENTRESS Comprimidos Recubiertos",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "ISKIMIL Comprimidos Recubiertos",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "ISOFLUORANO USP",
    laboratorio: "BAXTER",
  },
  {
    nombre: "ISOPRINOSINE",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ISOPROTERENOL CLORHIDRATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "ISOPTINA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ISOPTINA SR Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ISOSORBIDA DINITRATO Comprimidos 10 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ISOSORBIDE DINITRATO",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ISO STRUCTURE",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "ISOTOPIC SERUM HUMECTANTE Y REGENERADOR DERMICO Serum",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "ISOTREX 0.05% Gel",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "ISO-UREA LECHE Leche Corporal",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ISO-UREA LOCIÓN Loción",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ISOX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ISQUELIUM",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "ISTEFRAL® Cápsulas",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ITAN",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ITODAL",
    laboratorio: "CHILE",
  },
  {
    nombre: "ITRAC 100 Cápsulas",
    laboratorio: "CASSARA",
  },
  {
    nombre: "IVAREST",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "IVERCREM Crema Tópica 1%",
    laboratorio: "CASSARA",
  },
  {
    nombre: "IVIG-SN 5% Solución para Perfusión",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "IXEMPRA",
    laboratorio: "BRISTOL - MYERS SQUIBB",
  },
  {
    nombre: "IZINOVA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "IZOFRAN Comprimidos Recubiertos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "IZOFRAN Solución Inyectable",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "IZOFRAN Supositorios",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "IZOFRAN Zydis Tabletas Liofilizadas de Dispersión Bucal",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "JAKAVI Comprimidos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "JALRA® Comprimidos",
    laboratorio: "MERCK",
  },
  {
    nombre: "JALRA® M Comprimidos",
    laboratorio: "MERCK",
  },
  {
    nombre: "JANUMET Comprimidos Recubiertos",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "JANUMET® XR Comprimidos de Liberación Prolongada",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "JANUVIA Comprimidos Recubiertos",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "JARDIANCE® Comprimidos Recubiertos",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "JARDIANCE DUO® Comprimidos Recubiertos",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "JOLIAN® Comprimidos Recubiertos",
    laboratorio: "GEDEON RICHTER",
  },
  {
    nombre: "JULIETTE Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "JUVENEX® Comprimidos",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "JUVENIT",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "KADCYLA",
    laboratorio: "ROCHE",
  },
  {
    nombre: "KADIR Comprimidos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "KAION RETARD",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "KALETRA Comprimidos Recubiertos",
    laboratorio: "ABBVIE",
  },
  {
    nombre: "KALITIUM Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "KALOBA Comprimidos-Gotas",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "KANACITRIN",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "KANK-EZE",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "KANK-EZE PLUS",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "KAONOL Comprimidos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "KELOPLAST® SCARS SPF 50+",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "KENALER Solución Oftálmica al 0.5%",
    laboratorio: "OPHTHA",
  },
  {
    nombre: "KEPPRA 1000 mg Comprimidos Recubiertos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "KEPPRA® Concentrado Para Solución Para Infusión",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "KEPPRA® Solución Oral",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "KEPPRA 500 mg Comprimidos Recubiertos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "KEPRODOL Cápsulas",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "KERIUM Shampoo Anticaspa Caspa Grasa",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "KERIUM Shampoo Anticaspa Caspa Seca",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "KERIUM ANTICAIDA Tratamiento Anti-Caída",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "KERIUM DS Shampoo Anticaspa Intensivo",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "KERIUM DS CREMA Agua Termal",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "KERIUM SHAMPOO ANTICAIDA",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "KETAMINA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "KETAMINA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "KETANOR Comprimidos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "KETANOR Solución Inyectable",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "KETANOR SL 30 MG Comprimidos sublinguales",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "KETOCONAZOL",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "KETOCONAZOL Comprimidos 200 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "KETOCONAZOL L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "KETOMED",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "KETOPROFENO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "KETOPROFENO",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "KETOPROFENO Cápsulas",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "KETOPROFENO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "KETOPROFENO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "KETOPROFENO TU Comprimidos con Recubrimiento Entérico",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "KETOROLACO",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "KETOROLACO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "KETOROLACO TROMETAMOL Comprimidos Recubiertos 10 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "KETOROLACO TROMETAMOL Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "KEVAL Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "KEYTRUDA®",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "K-GEL PLUS Gel",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "KIDCALM",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "KILIOS",
    laboratorio: "PFIZER",
  },
  {
    nombre: "KILNITS Shampoo",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "KILNITS CREMA® Crema Lavable",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "KIN CREMA",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "KIN ORO Crema adhesiva para Protesis Dentales",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "KIN ORO Tabletas Limpiadoras de Prótesis Dentales",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "KINTAVA Comprimidos",
    laboratorio: "ETEX",
  },
  {
    nombre: "KITADOL",
    laboratorio: "CHILE",
  },
  {
    nombre: "KIVEXA Comprimidos Recubiertos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "KLARICID Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "KLARICID IV Liofilizado para Solución Inyectable",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "KLARICID PEDIATRICO Gránulos para Suspensión Oral",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "KLIMAKT-HEEL® Comprimidos Sublinguales",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "KLINA ONE Gel",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "KLINER®",
    laboratorio: "SANITAS",
  },
  {
    nombre: "KOIDE D Jarabe",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "KOLIC GLOBULOS SANAKIND",
    laboratorio: "KNOP",
  },
  {
    nombre: "KOLLGEEN MAX Sachets",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre:
      "KOMBIGLYZE 2.5/1000- 5/1000 mg Comprimidos Recubiertos de Liberación Extendida",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "KONAKION MM",
    laboratorio: "ROCHE",
  },
  {
    nombre: "KOPODEX 500 mg",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "KOPODEX 100 mg/ml",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "KOPODEX XR 500 mg",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "KOVAN",
    laboratorio: "CHILE",
  },
  {
    nombre: "KRANBERRY C",
    laboratorio: "KNOP",
  },
  {
    nombre: "KREDIT Comprimidos",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "KYTRIL",
    laboratorio: "ROCHE",
  },
  {
    nombre: "LABIMIQ®",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "LABOSALIC",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "LABOSONA G",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "SERUM 15 CKL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "LACRI-LUBE®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "LACRYVISC",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "LACTACYD® PRO BIO Jabón Líquido Intimo",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "LACTAFEM Comprimidos Recubiertos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "LACTIBON FEM Loción",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "LACTIBON pH 3.5 Limpiador Suave y Restaurador del Manto Acido",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "LACTIL",
    laboratorio: "CHILE",
  },
  {
    nombre: "LACTOFLORA",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "LACTULOSA",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "LACTULOSA Solución Oral",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "LACTULOSA Solución Oral",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "LADEE® Comprimidos Recubiertos",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "LADEE® 20 Comprimidos Recubiertos",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "LADYGEX Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "LADYGEX 20 Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "LADY-TEN 35",
    laboratorio: "CHILE",
  },
  {
    nombre: "LAFIGIN 25 mg Comprimidos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "LAGRICEL OFTENO® Solución Oftálmica al 0.4%",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "LAGRICEL OFTENO PF® Solución Oftálmica",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "LALERGIC® 2.5 mg/5 ml Solución para Gotas Orales",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "LALERGIC® 5 mg/5 ml Gotas Orales",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "LALERGIC® 5 mg/5 ml Solución Oral",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "LAMICTAL 25 mg Comprimidos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "LAMICTAL 100 mg Comprimidos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "LAMICTAL DISPERSABLE/MASTICABLE 5 mg Comprimidos 5 mg",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "LAMICTAL DISPERSABLE/MASTICABLE 25 mg Comprimidos 25 mg",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "LAMICTAL DISPERSABLE/MASTICABLE 50 mg Comprimidos 50 mg",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "LAMICTAL DISPERSABLE/MASTICABLE 100 mg Comprimidos 100 mg",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "LAMISIL Comprimidos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "L-AMPHO ANFOTERICINA B COMPLEJO LIPIDICO Suspensión Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "LAMPIT® Comprimidos",
    laboratorio: "BAYER",
  },
  {
    nombre: "LANATOSIDO C Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "LANEXAT",
    laboratorio: "ROCHE",
  },
  {
    nombre: "LANSOPRAZOL Cápsulas com Microgránulos Gastrorresistentes",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "LANSOPRAZOL Cápsulas con Gránulos con Recubrimiento Entérico",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "LANTUS® 100 U/ML Solución Inyectable",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "LANZOPRAL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "LANZOPRAL HELI-PACK",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "LANZOPRAL® DB Comprimidos de Disolución Bucal",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "LANZOPRAL IV",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "LARGACTIL® Comprimidos Recubiertos-Vía oral",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "LARIAM",
    laboratorio: "ROCHE",
  },
  {
    nombre: "LAROTABE Cápsulas Blandas",
    laboratorio: "BAYER",
  },
  {
    nombre: "LASEA® Cápsulas Blandas",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "LASTACAFT®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "LATISSE®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "LATOF",
    laboratorio: "SAVAL",
  },
  {
    nombre: "LATOF-T",
    laboratorio: "SAVAL",
  },
  {
    nombre: "LAUNOL Loción",
    laboratorio: "CHILE",
  },
  {
    nombre: "LAUNOL Shampoo",
    laboratorio: "CHILE",
  },
  {
    nombre: "LAUNOL PEINE TECNOLOGICO",
    laboratorio: "CHILE",
  },
  {
    nombre: "LAVASEPT",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "LAX 3350 Sobres",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "LAXANTIL",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "LAXONAROL",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "LEBLON UNGÜENTO LABIAL Ungüento",
    laboratorio: "MAVER",
  },
  {
    nombre: "LEBRINA Cápsulas",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "LECHE DE MAGNESIA PHILLIPS",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "LECHE DESMAQUILLANTE FISIOLOGICA Leche Desmaquillante",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre:
      "LECHE DESMAQUILLANTE PURETE THERMALE Detoxificante Piel Normal-mixta/Seca-sensible",
    laboratorio: "VICHY",
  },
  {
    nombre: "LEFKAFLAM Emulsión",
    laboratorio: "KNOP",
  },
  {
    nombre: "LEFKUR Cápsulas Blandas",
    laboratorio: "KNOP",
  },
  {
    nombre: "LEFLONEX Comprimidos Recubiertos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "LEGOFER SOLUCION ORAL 40 mg/15 ml",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "LEGOFER SOLUCION ORAL 800 mg/15 ml Jarabe",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "LEKARNA Polvo Liofilizado para Solución Inyectable",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "LEMYX® Solución para Perfusión",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "LENZETTO®",
    laboratorio: "GEDEON RICHTER",
  },
  {
    nombre: "LEODRIN Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "LEODRIN PLUS 5600 Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "LEODRIN DUO BITERAPIA Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "LEOVAL® Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "LEOVAL® INYECTABLE Viales",
    laboratorio: "SAVAL",
  },
  {
    nombre: "LEOVAL® SOLUCION Solución Oral",
    laboratorio: "SAVAL",
  },
  {
    nombre: "LEPONEX",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "LEROGIN Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "LERTUS",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "LERTUS 75 Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "LERTUS GEL Gel Tópico",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "LERTUS RL Comprimidos de Liberación Prolongada",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "LERTUS SOLUCION INYECTABLE",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "LERVITAN Cápsulas",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "LETI AT4 INTENSIVE",
    laboratorio: "BAGO",
  },
  {
    nombre: "LETI AT4 Champú",
    laboratorio: "BAGO",
  },
  {
    nombre: "LETI AT4 Crema Corporal",
    laboratorio: "BAGO",
  },
  {
    nombre: "LETI AT4 Gel de Baño Dermograso",
    laboratorio: "BAGO",
  },
  {
    nombre: "LETI AT4 Leche Corporal",
    laboratorio: "BAGO",
  },
  {
    nombre: "LETI AT4 FACIAL - LETI AT4 FACIAL SOLAR Crema Facial",
    laboratorio: "BAGO",
  },
  {
    nombre: "LETIXER Q Crema Corporal-Hidratante",
    laboratorio: "BAGO",
  },
  {
    nombre: "LETROVITAE Comprimidos Recubiertos",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "LEVEMIR",
    laboratorio: "NOVO NORDISK",
  },
  {
    nombre: "LEVEVITAE® Comprimidos Recubiertos",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "LEVITRA® Comprimidos Recubiertos",
    laboratorio: "BAYER",
  },
  {
    nombre: "LEVITRA ODT Comprimidos de Disolución Bucal",
    laboratorio: "BAYER",
  },
  {
    nombre: "LEVOFAMIL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "LEVOFLOXACINO Comprimidos Recubiertos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "LEVOFLOXACINO Solución Inyectable 5 mg/ml",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "LEVOFLOXACINO Solución Inyectable 500 mg/100 ml",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "LEVOGASTROL Comprimidos",
    laboratorio: "FAES FARMA",
  },
  {
    nombre: "LEVONORGESTREL - ETINILESTRADIOL",
    laboratorio: "CHILE",
  },
  {
    nombre: "LEVORIGOTAX® Cápsulas Blandas",
    laboratorio: "PRATER",
  },
  {
    nombre: "LEVORIGOTAX® Gotas",
    laboratorio: "PRATER",
  },
  {
    nombre: "LEVORIGOTAX® / LEVORIGOTAX FORTE JARABE",
    laboratorio: "PRATER",
  },
  {
    nombre: "LEVOTIROXINA SODICA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "LEVOXIN Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "LEVROX Inyectable",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "LEVUCAL Comprimidos Masticables",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "LEXAPRO® Comprimidos Recubiertos",
    laboratorio: "LUNDBECK CHILE",
  },
  {
    nombre: "LEXIE® Comprimidos Recubiertos",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "LEXIE 20® Comprimidos Recubiertos",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "LEXOTANIL",
    laboratorio: "ROCHE",
  },
  {
    nombre: "LIBERAT",
    laboratorio: "CHILE",
  },
  {
    nombre: "LIBRAXIN",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "LIDOCAINA 5% HIPERBARICA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "LIDOCAINA CLORHIDRATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "LIDOCAINA CLORHIDRATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "LIDOCAINA CLORHIDRATO Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "LIDOCAINA CLORHIDRATO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "LIFESTYLES",
    laboratorio: "PRATER",
  },
  {
    nombre: "LIFTACTIVE SUPREME",
    laboratorio: "VICHY",
  },
  {
    nombre: "LIFTACTIV FLEXILIFTEINT",
    laboratorio: "VICHY",
  },
  {
    nombre: "LIFTACTIV FRESH SHOT",
    laboratorio: "VICHY",
  },
  {
    nombre: "LIFTACTIV RETINOL HA ADVANCE",
    laboratorio: "VICHY",
  },
  {
    nombre: "LIFTACTIV SERUM 10 OJOS Y PESTAÑAS",
    laboratorio: "VICHY",
  },
  {
    nombre: "LIFTACTIV SERUM 10 SUPREME",
    laboratorio: "VICHY",
  },
  {
    nombre: "LIFTACTIV SUPREME NOCHE",
    laboratorio: "VICHY",
  },
  {
    nombre: "LIFTER",
    laboratorio: "SAVAL",
  },
  {
    nombre: "LINCOMICINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "LINEZET Comprimidos Recubiertos - Solución Inyectable",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "LINFONEX 250 mg Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "LIOPLIM 30 MU Solución Inyectable",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "LIORESYL",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "LIPIKAR BAÑO Y SHAMPOO",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "LIPIKAR BAUME AP [+] Emoliente Corporal",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "LIPIKAR FLUIDO Emoliente Corporal p/bebés, niños y adultos",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "LIPIKAR LECHE CORPORAL Emoliente Corporal",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "LIPIKAR STICK AP+",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "LIPIKAR SURGRAS Jabón",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "LIPIKAR SYNDET",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "LIPIKAR XERAND Manos",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "LIPISTAT 400 MG Cápsulas",
    laboratorio: "KNOP",
  },
  {
    nombre: "LIPITOR®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "LIPOTEN",
    laboratorio: "PHARMAVITA",
  },
  {
    nombre: "LIPOTROPIC 10 mg Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "LIPOX",
    laboratorio: "CHILE",
  },
  {
    nombre: "LIPTRUZET® Comprimidos Recubiertos",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "LIRACOL Comprimidos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "LIREX",
    laboratorio: "SILESIA",
  },
  {
    nombre: "LISACNE",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "LISIX Frasco-Ampolla",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "LISODER",
    laboratorio: "CHILE",
  },
  {
    nombre: "LISOVYR Comprimidos-Crema",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "LISUR Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "LITASINA Inyectable",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "LIVERTOX Comprimidos Recubiertos",
    laboratorio: "BAGO",
  },
  {
    nombre: "LIVIAL®",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "LOCIÓN CORPORAL DÚO SENSITIVE ALLERGIKA Loción Corporal",
    laboratorio: "ALLERGIKA CHILE",
  },
  {
    nombre: "LOCION CORPORAL LIPOLOTIO SENSITIVE ALLERGIKA Loción Corporal",
    laboratorio: "ALLERGIKA CHILE",
  },
  {
    nombre: "LOCION CORPORAL LIPOLOTIO UREA 5% ALLERGIKA Loción Corporal",
    laboratorio: "ALLERGIKA CHILE",
  },
  {
    nombre: "LOCION CORPORAL LIPOLOTIO UREA 10% ALLERGIKA Loción Corporal",
    laboratorio: "ALLERGIKA CHILE",
  },
  {
    nombre: "LOCION CORPORAL LIPOLOTIO UREA 5% F ALLERGIKA Loción Corporal",
    laboratorio: "ALLERGIKA CHILE",
  },
  {
    nombre: "CERAVE LOCION HIDRATANTE",
    laboratorio: "CERAVE",
  },
  {
    nombre: "LOCRIM",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "LODIPRES",
    laboratorio: "CHILE",
  },
  {
    nombre: "LODUX Comprimidos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "LOMEX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "LOMEX Inyectable",
    laboratorio: "SAVAL",
  },
  {
    nombre: "LOPERAMIDA CLORHIDRATO Comprimidos 2 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "LOPERAMIDA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "LOPID",
    laboratorio: "PFIZER",
  },
  {
    nombre: "LOPREN Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "LOPREN®-D Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "LOPTAME® 10 MG",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "LORATADINA",
    laboratorio: "CHILE",
  },
  {
    nombre: "LORATADINA Comprimidos 10 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "LORATADINA Jarabe",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "LORAZEPAM",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "LORAZEPAM Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "LORAZEPAM L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "LORCALINE Comprimidos Recubiertos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "LOREXAN Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "LOSAPRES",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "LOSAPRES-D",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "LOSARTAN",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "LOSARTAN",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "LOSARTAN POTASICO Comprimidos 100 mg",
    laboratorio: "CHILE",
  },
  {
    nombre: "LOSARTAN POTASICO Comprimidos 50 mg",
    laboratorio: "CHILE",
  },
  {
    nombre:
      "LOSARTAN POTASICO COMPRIMIDOS RECUBIERTOS 50 MG Comprimidos Recubiertos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre:
      "LOSARTAN POTASICO COMPRIMIDOS RECUBIERTOS 100 MG Comprimidos Recubiertos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "LOSEC MUPS®",
    laboratorio: "MERCK",
  },
  {
    nombre: "LOSIRAL Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "LOSOPIL",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "LOUTEN",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "LOUTEN T Solución Oftálmica",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "LOVACOL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "LOVASTATINA",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "LOVASTATINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "LOVELLE CICLICO",
    laboratorio: "SILESIA",
  },
  {
    nombre: "LOVELLE CONTINUO 1/0.125",
    laboratorio: "SILESIA",
  },
  {
    nombre: "LOWDEN",
    laboratorio: "SAVAL",
  },
  {
    nombre: "LUCASTE Comprimidos Masticables",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "LUCENTIS Solución Inyectable",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "LUFFEEL® Solución para Inhalación Nasal",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "LUKANEX Comprimidos Rec.- Comprimidos Mast.- Granulado",
    laboratorio: "SAVAL",
  },
  {
    nombre: "LUMBOPLEX",
    laboratorio: "KNOP",
  },
  {
    nombre: "LUMIGAN®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "LUMIGAN® RC",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "LUPRON Solución Inyectable",
    laboratorio: "ABBVIE",
  },
  {
    nombre: "LUPRON DEPOT Polvo para Suspensión Inyectable",
    laboratorio: "ABBVIE",
  },
  {
    nombre: "LUTAMIDAL 50 mg",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "LUTAMIDAL 150 mg",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "LUTENYL Comprimidos",
    laboratorio: "CHILE",
  },
  {
    nombre: "LUTRATE DEPOT Liofilizado para Solución Inyectable",
    laboratorio: "RAFFO",
  },
  {
    nombre: "LUVAT 100 MG Comprimidos Recubiertos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "LUVIS NF Solución Oftálmica",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "LUVOX Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "LYMPHOMYOSOT N® Solución Inyectable",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "LYMPHOMYOSOT N® Solución Oral para Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "LYRICA Cápsulas 25 mg",
    laboratorio: "PFIZER",
  },
  {
    nombre: "LYRICA Cápsulas 75 mg y 150 mg",
    laboratorio: "PFIZER",
  },
  {
    nombre: "LYSSAVAC N VACUNA ANTIRRABICA Polvo para Suspensión Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "LYXUMIA® 10 MCG Solución Inyectable",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "LYXUMIA® 20 MCG Solución Inyectable",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "MAALOX Suspensión",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "MAALOX® PLUS Comprimidos Masticables",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "MABTHERA",
    laboratorio: "ROCHE",
  },
  {
    nombre: "MACRODANTINA® Cápsulas",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "MACROSAN",
    laboratorio: "SANITAS",
  },
  {
    nombre: "MADECASSOL Crema",
    laboratorio: "BAYER",
  },
  {
    nombre: "MADELEN Comprimidos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "MADOZIDE Comprimidos",
    laboratorio: "CHILE",
  },
  {
    nombre: "MAGNATIL Comprimidos Efervescentes",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "MAGNATIL CALCICO Comprimidos Efervescentes",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "MAGNESIA LIQUIDA PASTEUR",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "MAG-TAB S.R. Comprimidos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "MAILEN Comprimidos-Jarabe",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "MALARONEMR",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "MALTOFER Ampollas Bebibles",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MALTOFER Comprimidos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MALTOFER Gotas",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MALTOFER Jarabe",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MALTOFER FOL PLUS®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MALTOFER VIT",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MANGROL Comprimidos Recubiertos",
    laboratorio: "RAFFO",
  },
  {
    nombre: "MANHAE Cápsulas",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "MANOL",
    laboratorio: "SANITAS",
  },
  {
    nombre: "MANOL PLUS",
    laboratorio: "SANITAS",
  },
  {
    nombre: "MARCATO Comprimidos Bucodispersables",
    laboratorio: "RAFFO",
  },
  {
    nombre: "MAREAMIN",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "MARILOW Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "MARVELON",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "MARVELON 20 Comprimidos Orales",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "MASCARILLA HIDRATANTE PURETÉ THERMAL",
    laboratorio: "VICHY",
  },
  {
    nombre: "MASCARILLA ILUMINADORA PURETÉ THERMAL",
    laboratorio: "VICHY",
  },
  {
    nombre: "MASCARILLA PURIFICANTE PURETÉ THERMAL",
    laboratorio: "VICHY",
  },
  {
    nombre: "MASIVOL® Gel",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "MASKREAM ACTIVE UNIFY ISDIN MASCARA HIDROGEL",
    laboratorio: "ISDIN",
  },
  {
    nombre: "MASKREAM ANTIAGING ISDIN MASCARA HIDROGEL",
    laboratorio: "ISDIN",
  },
  {
    nombre: "MASKREAM MATIFICANTE ISDIN MASCARA HIDROGEL",
    laboratorio: "ISDIN",
  },
  {
    nombre: "MASTERELAX",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MATIDAN® Cápsulas",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "MATIKOMP Ungüento Tópico",
    laboratorio: "KNOP",
  },
  {
    nombre: "MATINAC Comprimidos Recubiertos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "MATINOR",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "MAXIDEX",
    laboratorio: "ALCON",
  },
  {
    nombre: "MAXIMOX Comprimidos Recubiertos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "MEBENDAZOL",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "MEBENDAZOL Comprimidos Masticables 100 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "MEBENDAZOL L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "MEBRAL® Comprimidos Recubiertos 10 mg",
    laboratorio: "GADOR PHARMA",
  },
  {
    nombre: "MECOLZINE Comprimidos Recubiertos",
    laboratorio: "FAES FARMA",
  },
  {
    nombre: "MEDAZOL GEL TOPICO 0.75%",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "MEDBLOCK SPF 50+ PROTECTOR SOLAR CREMA COLOR Crema",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "MEDBLOCK SPF 50+ COMPACTO Crema",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "MEDBLOCK SPF 50+ PROTECTOR SOLAR CREMA BLANCA Crema",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "MEDIKLIN PUNTOS NEGROS Crema",
    laboratorio: "MAVER",
  },
  {
    nombre: "MEDIKLIN SKIN COLOR",
    laboratorio: "MAVER",
  },
  {
    nombre: "MEDITOINA®",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "MEDITOINA® RETARD",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "MEDROL",
    laboratorio: "PFIZER",
  },
  {
    nombre: "MEGANOX 50 mg Comprimidos Dispersables/Masticables",
    laboratorio: "ETEX",
  },
  {
    nombre: "MEGANOX 25 mg Comprimidos Dispersables/Masticables",
    laboratorio: "ETEX",
  },
  {
    nombre: "MEGANOX 100 mg Comprimidos Dispersables/Masticables",
    laboratorio: "ETEX",
  },
  {
    nombre: "MEGANOX 200 mg Comprimidos Dispersables/Masticables",
    laboratorio: "ETEX",
  },
  {
    nombre: "MEKINIST Comprimidos Recubiertos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "MELANDES® LOCION DESPIGMENTANTE SPF 20 Loción",
    laboratorio: "ANDES PHARMA",
  },
  {
    nombre: "MELATONINA Comprimidos",
    laboratorio: "GNC-FASA",
  },
  {
    nombre: "MELIC",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "MELIC® B.D. Comprimidos Bucodispersables",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "MELIPASS",
    laboratorio: "KNOP",
  },
  {
    nombre: "MELITASE Comprimidos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "MELODOL",
    laboratorio: "RAFFO",
  },
  {
    nombre: "MELOXICAM",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "MELOXICAM Comprimidos",
    laboratorio: "CHILE",
  },
  {
    nombre: "MELOXICAM Comprimidos 15 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "MELOXICAM Comprimidos 7.5 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "MEMANVITAE® Comprimidos Recubiertos",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "MEMAX",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "MEMIFORT",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "MEMOREX JARABE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "MEMOREX CAPSULAS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "MENACTRA® Vacunas",
    laboratorio: "SANOFI PASTEUR",
  },
  {
    nombre: "MENOPUR",
    laboratorio: "FERRING",
  },
  {
    nombre: "MENOPUR MULTIDOSIS 1200 UI Liofilizado para Solución Inyectable",
    laboratorio: "FERRING",
  },
  {
    nombre: "MENOTROPINA Viales",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "MENTALOL",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "MENTANIA",
    laboratorio: "SAVAL",
  },
  {
    nombre: "MENTHOSE",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "MENTIUM Comprimidos Recubiertos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "MENTIX Comprimidos",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "MENT VITAL",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "MENUIX Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "MENVEO® Solución Inyectable",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "MERIDIAN Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "MERITAL® Comprimidos Recubiertos",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "MEROPENEM 500-1000 mg Polvo para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "MEROPENEM Polvo para Solución Inyectable 1000 mg",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "MEROPENEM Polvo para Solución Inyectable 500 mg",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "MERPAL® Cápsulas",
    laboratorio: "PRATER",
  },
  {
    nombre: "MERPAL® Gel",
    laboratorio: "PRATER",
  },
  {
    nombre: "MERPAL® Gotas",
    laboratorio: "PRATER",
  },
  {
    nombre: "MERPAL® Inyectable",
    laboratorio: "PRATER",
  },
  {
    nombre: "MERPAL® Solución Tópica Spray 1.16%",
    laboratorio: "PRATER",
  },
  {
    nombre: "MERPAL® Supositorios",
    laboratorio: "PRATER",
  },
  {
    nombre: "MERPAL 50 MG Comprimidos con Recubrimiento Entérico",
    laboratorio: "PRATER",
  },
  {
    nombre: "MERPAL D.A.L. Suspensión Oral",
    laboratorio: "PRATER",
  },
  {
    nombre: "MERPAL GEL ROLL ON® Roll-On",
    laboratorio: "PRATER",
  },
  {
    nombre: "MERPAL MICRONIZER",
    laboratorio: "PRATER",
  },
  {
    nombre: "MESIGYNA Solución Inyectable",
    laboratorio: "BAYER",
  },
  {
    nombre: "M-ESLON",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "MESNA TEVA Frasco-Ampolla",
    laboratorio: "CHILE",
  },
  {
    nombre: "MESO +",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "MESO MASK",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "MESTINON Comprimidos",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "METADONA CLORHIDRATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "METADONA CLORHIDRATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "METALYSE® Liofilizado para Solución Inyectable",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "METAMIZOL SODICO",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "METAMIZOL SODICO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "METAMIZOL SODICO (DIPIRONA) L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "METAMIZOL SODICO MONOHIDRATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "METAMIZOL SODICO MONOHIDRATO (DIPIRONA) Comprimidos 300 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "METAMUCIL Polvo para Suspensión Oral",
    laboratorio: "CHILE",
  },
  {
    nombre: "METAPAD",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "METFORMINA",
    laboratorio: "SANITAS",
  },
  {
    nombre: "METFORMINA Comprimidos Recubiertos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "METFORMINA CLORHIDRATO Comprimidos Recubiertos",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "METFORMINA CLORHIDRATO Comprimidos Recubiertos 850 mg",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "METICEL OFTENO® Solución Oftálmica",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "METILDOPA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "METOCLOPRAMIDA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "METOCLOPRAMIDA Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "METOCLOPRAMIDA CLORHIDRATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "METOCLOPRAMIDA L.CH. 10 MG",
    laboratorio: "CHILE",
  },
  {
    nombre: "METOJECT®",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "METOJECT Jeringas Pre-cargadas",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "METORENE Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "METOTREXATO",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "METOTREXATO Comprimidos-Inyectable",
    laboratorio: "PFIZER",
  },
  {
    nombre: "METOTREXATO TEVA Frasco-Ampolla",
    laboratorio: "CHILE",
  },
  {
    nombre: "METRANS XR Comprimidos de Liberación Prolongada",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "METROCREAM",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "METROGEL",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "METRONIDAZOL Comprimidos 250 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "METRONIDAZOL Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "METRONIDAZOL Solución Inyectable 500 mg/100 ml",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "METRONIDAZOL L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "METROPAST Comprimidos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "METROPAST Ovulos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "METROPAST 1000®",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "METVIX Crema",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "MEVAC-A Vacunas",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "MEXAN® Comprimidos 15 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "MIAFEM® Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "MIAFEM 20 Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "MIAFEM CD Comprimidos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "MIBLOC FT®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MICARDIS® Comprimidos",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "MICARDIS® AMLO Comprimidos",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "MICARDIS® PLUS Comprimidos",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "MICODERM® Crema",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MICOFENOLATO Comprimidos-Cápsulas",
    laboratorio: "CHILE",
  },
  {
    nombre: "MICOLIS",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "MICOMICEN® 1% Crema",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "MICOPIROX Champú",
    laboratorio: "CASSARA",
  },
  {
    nombre: "MICOPIROX CREMA Crema Dérmica 1%",
    laboratorio: "CASSARA",
  },
  {
    nombre: "MICOPIROX LACA Laca para Uñas 8%",
    laboratorio: "CASSARA",
  },
  {
    nombre: "MICOSEPDEO AEROSOL TOPICO 1%",
    laboratorio: "CASSARA",
  },
  {
    nombre: "MICOSET Comprimidos",
    laboratorio: "BAGO",
  },
  {
    nombre: "MICOSET Crema",
    laboratorio: "BAGO",
  },
  {
    nombre: "MICROGEN 20 CD",
    laboratorio: "SILESIA",
  },
  {
    nombre: "MICROGYNON Grageas",
    laboratorio: "BAYER",
  },
  {
    nombre: "MICROGYNON CD Grageas",
    laboratorio: "BAYER",
  },
  {
    nombre: "MICROSER",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "MIDALET 20",
    laboratorio: "SILESIA",
  },
  {
    nombre: "MIDAZOLAM",
    laboratorio: "PFIZER",
  },
  {
    nombre: "MIDAZOLAM",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "MIDAZOLAM Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "MIFLONIDE® Polvo para ihalación en cápsulas duras",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "MIGRAGESIC®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MIGRANEFERSIL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "MIGRANOL",
    laboratorio: "BAGO",
  },
  {
    nombre: "MIGRATAM",
    laboratorio: "CHILE",
  },
  {
    nombre: "MIGRAX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "MIGTAL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "MILISER Comprimidos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "MILK THISTLE Cápsulas",
    laboratorio: "GNC-FASA",
  },
  {
    nombre: "MILTEX",
    laboratorio: "BAXTER",
  },
  {
    nombre: "MIMETIX ODT Comprimidos Dispersables",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "MINEVA E 20 Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "MINFEL® 18 Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "CHILE",
  },
  {
    nombre: "MINFEL® 27 Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "CHILE",
  },
  {
    nombre: "MINFEL® 36 Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "CHILE",
  },
  {
    nombre: "MINFEL® 54 Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "CHILE",
  },
  {
    nombre: "MINIDIAB",
    laboratorio: "PFIZER",
  },
  {
    nombre: "MINIDOL Gotas Orales",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MINIDOL PLUS Comprimidos Recubiertos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MINIESTREL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MINIESTREL-20",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MINIGEST",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MINIGEST-15",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MINIGEST-20",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MINIRIN MELT 120 mcg",
    laboratorio: "FERRING",
  },
  {
    nombre: "MINIRIN MELT 60 mcg",
    laboratorio: "FERRING",
  },
  {
    nombre: "MINOCTRE Solución Inyectable",
    laboratorio: "RAFFO",
  },
  {
    nombre: "MINTAMOX Jarabe",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "MINULET®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "MINÉRAL 89",
    laboratorio: "VICHY",
  },
  {
    nombre: "MIORELAX Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "MIRAGRAN Comprimidos Recubiertos",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "MIRANDA® Comprimidos Recubiertos",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "MIRANOVA Grageas",
    laboratorio: "BAYER",
  },
  {
    nombre: "MIRCERA",
    laboratorio: "ROCHE",
  },
  {
    nombre: "MIRELLE® Comprimidos",
    laboratorio: "BAYER",
  },
  {
    nombre: "MIRENA",
    laboratorio: "BAYER",
  },
  {
    nombre: "MIRVASO",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "MISOTROL®200 µg",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "MITOMICINA",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "MITOXANTRONA",
    laboratorio: "BAXTER",
  },
  {
    nombre: "MITRUL Cápsulas de liberación prolongada",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "MIVACRON",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "MI VIT-C Comprimidos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "MIXGEN Crema",
    laboratorio: "CHILE",
  },
  {
    nombre: "MIXGEN Solución Oftálmica",
    laboratorio: "CHILE",
  },
  {
    nombre: "MIXTARD 30 Suspensión Inyectable",
    laboratorio: "NOVO NORDISK",
  },
  {
    nombre: "MIZONASE Ovulos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "MIZONASE SET",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "MOBEX® Comprimidos-Solución Inyectable",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "MODULCASS CREMA TOPICA 5% Crema Tópica",
    laboratorio: "CASSARA",
  },
  {
    nombre: "MODURA Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "MODUSIK-A OFTENO® Solución Oftálmica al 0.1%",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "MOLCA",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MONEZ Suspensión en Spray Nasal",
    laboratorio: "CHILE",
  },
  {
    nombre: "MONKAST COMPRIMIDOS Comprimidos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "MONOPROST® Solución Oftálmica",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MONTICINA Ungüento",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "MORELIN",
    laboratorio: "CHILE",
  },
  {
    nombre: "MORFINA CLORHIDRATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "MORFINA CLORHIDRATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "MORFINA CLORHIDRATO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "MOUSSE DE LIMPIEZA ILUMINADOR PURETE THERMALE",
    laboratorio: "VICHY",
  },
  {
    nombre: "MOVIDOL® Cápsulas con gránulos de liberación prolongada",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "MOVIGIL Comprimidos",
    laboratorio: "BAGO",
  },
  {
    nombre: "MOVINOL",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "MOVIPLUS",
    laboratorio: "BAGO",
  },
  {
    nombre: "MOXAVAL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "MOXICINO®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "MOXOF",
    laboratorio: "SAVAL",
  },
  {
    nombre: "MUCIVIL® Comprimidos",
    laboratorio: "PRATER",
  },
  {
    nombre: "MUCIVIL Crema Tópica 1%",
    laboratorio: "PRATER",
  },
  {
    nombre: "MUCIVIL Solución Tópica 1%",
    laboratorio: "PRATER",
  },
  {
    nombre: "MUCOLITICO",
    laboratorio: "SANITAS",
  },
  {
    nombre: "MUCOSA COMPOSITUM Solución Inyectable",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "MULCATEL",
    laboratorio: "MAVER",
  },
  {
    nombre: "MULTI-12/K1 PEDIATRICO",
    laboratorio: "BAXTER",
  },
  {
    nombre: "MULTIFLORA Gotas",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "MULTIFLORA Sachets",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "MULTIFLORA PLUS Cápsulas",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "MUNO Comprimidos Masticables",
    laboratorio: "AXON PHARMA",
  },
  {
    nombre: "MUPAX Crema Tópica",
    laboratorio: "RAFFO",
  },
  {
    nombre: "MUPAX Ungüento Dérmico",
    laboratorio: "RAFFO",
  },
  {
    nombre: "MUPAX Ungüento Nasal",
    laboratorio: "RAFFO",
  },
  {
    nombre: "MUPICIL Crema Dérmica 2%",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "MUPICIL Ungüento Dérmico",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "MUS®",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "MUS® SUSPENSION Suspensión",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "MUVEND Comprimidos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "MUXELIX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "MUXOL Comprimidos-Suspensión",
    laboratorio: "SAVAL",
  },
  {
    nombre: "MUXOL Inyectable",
    laboratorio: "SAVAL",
  },
  {
    nombre: "MYCAMINE® Polvo Liofilizado para Solución Inyectable",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "MYCOSPORAN",
    laboratorio: "BAYER",
  },
  {
    nombre: "MYDFRIN",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "MYDRIACYL",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "MYFORTIC",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "NABILA Comprimidos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "NANDROLONA DECANOATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "NAPHCON-A",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "NAPHTEARS",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "NAPROXENO SODICO Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "NAPROXENO SODICO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "NARAMIG",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "NARTAN L.CH. Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "NASAMIST Spray Nasal",
    laboratorio: "NEILMED",
  },
  {
    nombre: "NASIVIN",
    laboratorio: "MERCK",
  },
  {
    nombre: "NASOGEL",
    laboratorio: "NEILMED",
  },
  {
    nombre: "NASOLVER Jarabe",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "NASOMIN",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "NASONEX® Suspensión Nasal para Nebulización 50 mcg/dosis",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "NASOPLEX",
    laboratorio: "KNOP",
  },
  {
    nombre: "NASPIRA",
    laboratorio: "NEILMED",
  },
  {
    nombre: "NASTIFRIN",
    laboratorio: "CHILE",
  },
  {
    nombre: "NASTIFRIN COMPUESTO",
    laboratorio: "CHILE",
  },
  {
    nombre: "NASTIFRIN COMPUESTO DN",
    laboratorio: "CHILE",
  },
  {
    nombre: "NASTIGRIP® DIA-NOCHE Antigripal",
    laboratorio: "BAGO",
  },
  {
    nombre: "NASTIZOL",
    laboratorio: "BAGO",
  },
  {
    nombre: "NASTIZOL COMPOSITUM",
    laboratorio: "BAGO",
  },
  {
    nombre: "NASTIZOL DIA - NOCHE Comprimidos",
    laboratorio: "BAGO",
  },
  {
    nombre: "NASTUL COMPUESTO Comprimidos",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "NASTUL COMPUESTO JARABE",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "NASTUL® DIA Y NOCHE",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "NASTUL GOTAS",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "NAT100 Polvo",
    laboratorio: "BOSTON",
  },
  {
    nombre: "NATABEC® Cápsulas",
    laboratorio: "SILESIA",
  },
  {
    nombre: "NATA DHA",
    laboratorio: "SILESIA",
  },
  {
    nombre: "NAT100 DIABETICO Polvo",
    laboratorio: "BOSTON",
  },
  {
    nombre: "NAT100 FIBRA Polvo",
    laboratorio: "BOSTON",
  },
  {
    nombre: "NATICARE LAT Cápsulas",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "NATICARE PRE",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "NATICARE SUPRA CAPSULAS Cápsulas",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "NATIK Polvo para Solución Oral",
    laboratorio: "RAFFO",
  },
  {
    nombre: "NATIK Polvo para Solución Oral",
    laboratorio: "RAFFO",
  },
  {
    nombre: "NAT100 MODULO CALORICO Polvo",
    laboratorio: "BOSTON",
  },
  {
    nombre: "NAT100 MODULO PROTEICO Polvo",
    laboratorio: "BOSTON",
  },
  {
    nombre: "NATRILAM Comprimidos Recubiertos de Liberación Sostenida",
    laboratorio: "FERRER",
  },
  {
    nombre: "NATRILIX SR Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "FERRER",
  },
  {
    nombre: "NATURALIST",
    laboratorio: "PRATER",
  },
  {
    nombre: "NATUREL",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "NAVELBINE",
    laboratorio: "BAXTER",
  },
  {
    nombre: "NAXODOL Solución para Gotas Orales",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "N-BUTILBROMURO DE ESCOPOLAMINA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "N-BUTILBROMURO+METAMIZOL SODICO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "NEBAPUL Comprimidos",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "NEBIDO® Solución Inyectable",
    laboratorio: "BAYER",
  },
  {
    nombre: "NEBILET®",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "NEBULEX",
    laboratorio: "CHILE",
  },
  {
    nombre: "NEFERSIL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "NEFERSIL-B",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "NEFERSIL FAST",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "NEFERSIL GEL TOPICO 5%",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "NEISVAC",
    laboratorio: "BAXTER",
  },
  {
    nombre: "NENEGLOSS ADVANCED",
    laboratorio: "MAVER",
  },
  {
    nombre: "NEOALERTOP Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "NEOALERTOP Jarabe",
    laboratorio: "CHILE",
  },
  {
    nombre: "NEOALERTOP GOTAS Gotas",
    laboratorio: "CHILE",
  },
  {
    nombre: "NEO-ALLEDRYL®",
    laboratorio: "PRATER",
  },
  {
    nombre:
      "NEO-ALLEDRYL D 30 Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "PRATER",
  },
  {
    nombre: "NEO-ALLEDRYL® JARABE 2.5 mg/5 ml Jarabe",
    laboratorio: "PRATER",
  },
  {
    nombre: "NEOARADIX Comprimidos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NEO-BUTARTROL",
    laboratorio: "SANITAS",
  },
  {
    nombre: "NEOCICA",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "NEOHYSTICLAR Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "NEOHYSTICLAR Jarabe",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "NEOLARMAX",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "NEOLETTE",
    laboratorio: "SILESIA",
  },
  {
    nombre: "NEOMICINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "NEO PANKREOFLAT Grageas",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "NEOPRESOL® 10 mg",
    laboratorio: "BAGO",
  },
  {
    nombre: "NEOQUIN FORTE CREMA DERMICA 4% Crema Dérmica",
    laboratorio: "CASSARA",
  },
  {
    nombre: "NEORESOTYL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NEORETIN DISCROM CONTROL Despigmentante",
    laboratorio: "BAGO",
  },
  {
    nombre: "NEO-SINTROM",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "NEOSTIGMINA METILSULFATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "NEOSTIGMINA METILSULFATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "NEOSTRATA BIONIC EYE CREAM PLUS Crema Contorno de Ojos Plus",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "NEOSTRATA BIONIC FACE CREAM Crema Facial",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "NEOSTRATA BIONIC FACE SERUM Serum Humectante",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "NEOSTRATA ENLIGHTEN ILLUMINATING SERUM Serum",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "NEOSTRATA ENLIGHTEN PIGMENT CONTROLLER Controlador de Pigmento",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre:
      "NEOSTRATA ENLIGHTEN ULTRA BRIGHTENING CLEANSER Controlador de Pigmento",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "NEOSTRATA FOAMING GLICOLIC WASH Limpiador Facial",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "NEOSTRATA GEL PLUS Gel Forte",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "NEOSTRATA NAIL CONDITIONING Acondicionador de Uñas",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "NEOSTRATA PIGMENT LIGHTENING GEL Gel Despigmentante",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "NEOSTRATA RENEWAL CREAM Crema Facial",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "NEOSTRATA SHEER HYDRATION Emulsión Hidratante",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre:
      "NEOSTRATA SKIN ACTIVE ANTIOXIDANT DEFENSE SERUM Serum Antioxidante",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre:
      "NEOSTRATA SKIN ACTIVE CELLULAR RESTORATION Crema Restauradora Facial Noche",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre:
      "NEOSTRATA SKIN ACTIVE COLLAGEN BOOSTER SERUM Serum Reforzador de Colágeno",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre:
      "NEOSTRATA SKIN ACTIVE DERMAL REPLENISHMENT Crema de Hidratación Profunda",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "NEOSTRATA SKIN ACTIVE EXFOLIATING WASH Limpiador Facial",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre:
      "NEOSTRATA SKIN ACTIVE INTENSIVE EYE THERAPY Contorno de Ojo Intensivo",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "NEOSTRATA SKIN ACTIVE MATRIX SUPPORT SPF 30 Crema Facial Día",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "NEOSTRATA SMOOTH SURFACE DAILY PEEL Suavizante Diario de la Piel",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre:
      "NEOSTRATA SKIN ACTIVE TRIPLE FIRMING NECK CREAM Crema Reafirmante para Cuello",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "NEOSTRATA ULTRA SMOOTHING CREAM Crema Suavizante",
    laboratorio: "MEDSTYLE",
  },
  {
    nombre: "NEOTONE®",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "NEOTONE RADIANCE®",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "NEOVADIOL COMPLEJO SUSTITUTIVO DIA",
    laboratorio: "VICHY",
  },
  {
    nombre: "NEOVADIOL COMPLEJO SUSTITUTIVO NOCHE",
    laboratorio: "VICHY",
  },
  {
    nombre: "NEOVADIOL COMPLEJO SUSTITUTIVO SERUM",
    laboratorio: "VICHY",
  },
  {
    nombre: "NEOVADIOL CONTORNO DE LABIOS Y OJOS",
    laboratorio: "VICHY",
  },
  {
    nombre: "NEOVADIOL MAGISTRAL",
    laboratorio: "VICHY",
  },
  {
    nombre: "NEOVADIOL MAGISTRAL ELIXIR",
    laboratorio: "VICHY",
  },
  {
    nombre: "NEOZENTIUS",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "NEPHRON Solución para Inhalación",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "NEPHRON UNIDOSIS Solución para Inhalación",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "NEPRO",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NERVAL Cápsulas",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "NERVOHEEL® N Comprimidos Sublinguales",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "NERVOTON",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "NETAF",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "NEULASTIM Solución Inyectable Recombinante",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "NEULEPTIL® 1% Solución Oral para Gotas",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "NEULEPTIL® 4% Solución Oral para Gotas",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "NEUMOCORT HFA Aerosol para Inhalación 100 mcg/dosis",
    laboratorio: "CASSARA",
  },
  {
    nombre: "NEUMOCORT PLUS 160/4.5 Aerosol para Inhalación",
    laboratorio: "CASSARA",
  },
  {
    nombre: "NEUPOGEN Jeringas/Frasco-Ampolla",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "NEUPRO® Parches",
    laboratorio: "BIOPAS",
  },
  {
    nombre: "NEUREXAN® Comprimidos Sublinguales",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "NEUROBION® DC 10.000 Solución Inyectable",
    laboratorio: "MERCK",
  },
  {
    nombre: "NEUROBIONTA Comprimidos Recubiertos",
    laboratorio: "MERCK",
  },
  {
    nombre: "NEUROCAM Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NEUROPRON FT Comprimidos de Desintegración Bucal",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "NEUROSANDE® Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "NEUROVAL CD Comprimidos dispersables",
    laboratorio: "SAVAL",
  },
  {
    nombre: "NEURUM",
    laboratorio: "SAVAL",
  },
  {
    nombre: "NEURYL Comprimidos",
    laboratorio: "BAGO",
  },
  {
    nombre: "NEVANAC",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "NEWELLE Comprimidos Recubiertos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "NEXAVAR®",
    laboratorio: "BAYER",
  },
  {
    nombre: "NEXIUM 20-40 mg Comprimidos con Recubrimiento Entérico",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre:
      "NEXIUM SACHET 10 mg Gránulos con Recubrimiento Entérico p/Susp. Oral",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "NEXIUM I.V. 40 mg Polvo Liofilizado para Solución Inyectable",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "NEZEL® XR Cápsulas de Microgránulos de Liberación Prolongada",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "NEZEL® XR Cápsulas de Microgránulos de Liberación Prolongada",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "NICO TEARS",
    laboratorio: "SAVAL",
  },
  {
    nombre: "NICO DROPS",
    laboratorio: "SAVAL",
  },
  {
    nombre: "NICOTEARS GEL Gel oftálmico",
    laboratorio: "SAVAL",
  },
  {
    nombre: "NIFECOR Solución Oftálmica",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "NIFEDIPINO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "NIKABLEOCINA®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "NIMBEX® INYECTABLE Inyectable",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "NIMODIPINO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "NIMOTOP Comprimidos Recubiertos",
    laboratorio: "BAYER",
  },
  {
    nombre: "NIMOTOP I.V. Solución para Infusión I.V.",
    laboratorio: "BAYER",
  },
  {
    nombre: "NIMUS RETARD",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "NIOFEN COLD HBP",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NIOFEN® COLD HBP SUSPENSION",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NIOFEN FLU/NIOFEN FLU FORTE Cápsulas Blandas",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NIOFEN NEO FORTE Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NIOFEN NEO FORTE Suspensión",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NIOFEN SUSPENSION",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NIOFEN SUSPENSION FORTE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NIPOLEN Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "NIRHES 130 Solución para Infusión I.V.",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "NIRMIN PLUS Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "NIRPID Emulsión",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "NIRVAN Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "NISTAGLOS",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "NISTATINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "NISTATINA METRONIDAZOL L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "NISTORAL",
    laboratorio: "CHILE",
  },
  {
    nombre: "NISURAL",
    laboratorio: "CHILE",
  },
  {
    nombre: "NITRENDIPINO",
    laboratorio: "CHILE",
  },
  {
    nombre: "NITEXOL®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "NITRENDIPINO Comprimidos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "NITRENDIPINO Comprimidos 20 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "NITRODERM TTS",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "NITROFURANTOINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "NITROFURANTOINA MACROCRISTALES Cápsulas 100 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "NITROGLICERINA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "NITROGLICERINA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "NITROGLICERINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "NO+AKN JABON CONTROL SEBO PIEL SENSIBLE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NO+AKN JABON CONTROL SEBO EXFOLIANTE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NO+AKN MAQUILLAJE LIQUIDO ANTIESPINILLAS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NO+AKN MASCARA TRATAMIENTO ANTIESPINILLAS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NO+AKN CREMA FACIAL MATIFICANTE ANTIESPINILLA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NO+AKN GEL EXFOLIANTE ESPINILLAS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NO+AKN JABON CONTROL SEBO ANTIESPINILLA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NOCOF JARABE Solución Oral",
    laboratorio: "CHILE",
  },
  {
    nombre: "NOCTIDEM® Comprimidos Recubiertos",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "NOCTON",
    laboratorio: "SAVAL",
  },
  {
    nombre: "NODOCIB Cápsulas",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "NODUTAX Comprimidos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "NOGESTA",
    laboratorio: "CHILE",
  },
  {
    nombre: "NOKATAR",
    laboratorio: "PRATER",
  },
  {
    nombre: "NOLAIS Crema Capilar",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "NOLAIS Shampoo 1%",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "NOLVADEX-D 20 mg Comprimidos Recubiertos",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "NONTOX Solución Oral",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NOOTROPYL® Comprimidos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "NOPTIC",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "NORAH Comprimidos",
    laboratorio: "CHILE",
  },
  {
    nombre: "NORDETTE",
    laboratorio: "PFIZER",
  },
  {
    nombre:
      "NORDITROPIN® NORDILET® Solución Inyectable en Dispositivo Prellenado",
    laboratorio: "NOVO NORDISK",
  },
  {
    nombre: "NORDOX",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "NO-REF",
    laboratorio: "SANITAS",
  },
  {
    nombre: "NORITATE",
    laboratorio: "FINN-VITA",
  },
  {
    nombre: "NORMADERM BARRA DE LIMPIEZA DERMATOLOGICA",
    laboratorio: "VICHY",
  },
  {
    nombre: "NORMADERM BB CLEAR",
    laboratorio: "VICHY",
  },
  {
    nombre: "NORMADERM GEL DE LIMPIEZA PROFUNDO",
    laboratorio: "VICHY",
  },
  {
    nombre: "NORMADERM HYALUSPOT",
    laboratorio: "VICHY",
  },
  {
    nombre: "NORMADERM LIMPIEZA 3 EN 1",
    laboratorio: "VICHY",
  },
  {
    nombre: "NORMADERM SKIN BALANCE",
    laboratorio: "VICHY",
  },
  {
    nombre: "NORMADERM SKIN CORRECTOR",
    laboratorio: "VICHY",
  },
  {
    nombre: "NORMADERM SOLUCIÓN MICELAR",
    laboratorio: "VICHY",
  },
  {
    nombre: "NORMADERM STICK",
    laboratorio: "VICHY",
  },
  {
    nombre: "NORMADERM TONICO ASTRINGENTE PURIFICANTE",
    laboratorio: "VICHY",
  },
  {
    nombre: "NORMALAC Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NORMATEN",
    laboratorio: "BAGO",
  },
  {
    nombre: "NORMATEN PLUS",
    laboratorio: "BAGO",
  },
  {
    nombre: "NORMIX Comprimidos Recubiertos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "NORMIX Comprimidos Recubiertos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "NORPILEN",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "NORSIC",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "NORSPAN® Sistema Terapéutico Transdérmico",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "NORVASC®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "NORVETAL Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NORVETAL 20 CD Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NORVETAL CD® Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "NORVIR Cápsulas Blandas-Solución Oral",
    laboratorio: "ABBVIE",
  },
  {
    nombre: "NOSCAPINA Comprimidos 20 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "NOSCAPINA Jarabe",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "NOSPASMIN",
    laboratorio: "SANITAS",
  },
  {
    nombre: "NOSPASMIN COMPUESTO",
    laboratorio: "SANITAS",
  },
  {
    nombre: "NOSTADEN Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "NOVACETOL",
    laboratorio: "PRATER",
  },
  {
    nombre: "NOVACILINA 500 mg",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "NOVACILINA 750 mg",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "NOVADREL",
    laboratorio: "PRATER",
  },
  {
    nombre: "NOVAFEM",
    laboratorio: "SILESIA",
  },
  {
    nombre: "NOVAMOX Comprimidos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "NOVARNELA",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "NOVOFINE® Aguja para Administración Subcutánea",
    laboratorio: "NOVO NORDISK",
  },
  {
    nombre: "NOVO INSOMNIUM® Comprimidos Recubiertos",
    laboratorio: "GADOR PHARMA",
  },
  {
    nombre: "NOVOMIX® 30 FLEXPEN® Suspensión Inyectable",
    laboratorio: "NOVO NORDISK",
  },
  {
    nombre: "NOVONORM® Comprimidos",
    laboratorio: "NOVO NORDISK",
  },
  {
    nombre: "NOVORAPID® 100 U/ML Solución Inyectable",
    laboratorio: "NOVO NORDISK",
  },
  {
    nombre: "NOVORAPID® FLEXPEN® Solución Inyectable",
    laboratorio: "NOVO NORDISK",
  },
  {
    nombre: "NOVORAPID® PENFILL® Solución Inyectable en Cartuchos",
    laboratorio: "NOVO NORDISK",
  },
  {
    nombre:
      "NOVOSEVEN® RT MIXPRO® 2 MG Polvo y Solvente para Solución Inyectable",
    laboratorio: "NOVO NORDISK",
  },
  {
    nombre: "NOVOTEARS",
    laboratorio: "SAVAL",
  },
  {
    nombre: "NOVOTHYRAL",
    laboratorio: "MERCK",
  },
  {
    nombre: "NOXAFIL Solución Oral",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "NOXIPAR Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "NOXIPAR Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "NP-27®",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "NPLATE Frasco-Ampolla",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "NUCALA Liofilizado para Solución Inyectable",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "NULACID Comprimidos Masticables",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "NUMOSOL",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "NUMOSOL INFANTIL",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "NUM-ZIT",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "NU-ROX",
    laboratorio: "CHILE",
  },
  {
    nombre: "NUTRACORT",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "NUTRADEICA GEL CREMA FACIAL Estados Seborreicos Faciales",
    laboratorio: "ISDIN",
  },
  {
    nombre:
      "NUTRADEICA CHAMPU DERMATOLOGICO ANTICASPA Estados Seborreicos Leves a Moderados",
    laboratorio: "ISDIN",
  },
  {
    nombre:
      "NUTRADEICA RX CHAMPU DERMATOLOGICO ANTICASPA Estados Seborreicos Severos",
    laboratorio: "ISDIN",
  },
  {
    nombre: "NUTRADERM",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "NUTRAISDIN GEL-CHAMPU Gel-Champú",
    laboratorio: "ISDIN",
  },
  {
    nombre: "NUTRAISDIN HIDRATANTE FACIAL Crema Hidratante",
    laboratorio: "ISDIN",
  },
  {
    nombre: "NUTRAISDIN LOCION HIDRATANTE",
    laboratorio: "ISDIN",
  },
  {
    nombre: "NUTRAISDIN REPARADOR PERIORAL Crema",
    laboratorio: "ISDIN",
  },
  {
    nombre: "NUTRAISDIN ZN 40 Ungüento",
    laboratorio: "ISDIN",
  },
  {
    nombre: "NUTRATOPIC PRO AMP FACIALUTRATOPIC PRO AMP FACIAL",
    laboratorio: "ISDIN",
  },
  {
    nombre: "NUTRATOPIC PRO AMP GEL LIMPIADOR EMOLIENTE",
    laboratorio: "ISDIN",
  },
  {
    nombre: "NUTRATOPIC PRO AMP LOCION EMOLIENTE",
    laboratorio: "ISDIN",
  },
  {
    nombre: "NUTRATOPIC RX-COADYUVANTE DERMATOLOGICO Crema",
    laboratorio: "ISDIN",
  },
  {
    nombre: "NUTRI FILLER",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "NUTRI FILLER LIPS",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "NUVARING® Anillo Vaginal",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "NUX VOMICA-HEELACCORD® Solución Oral para Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "NYSKIN",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OBEXOL Cápsulas",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OBLEAS CHINAS",
    laboratorio: "MAVER",
  },
  {
    nombre: "OCTAGAM",
    laboratorio: "BAGO",
  },
  {
    nombre: "OCTANATE Polvo Liofilizado para Soluc. Inyect. c/solvente",
    laboratorio: "BAGO",
  },
  {
    nombre: "OCTANINE F Polvo Liofilizado para Soluc. Inyect. c/solvente",
    laboratorio: "BAGO",
  },
  {
    nombre: "OCTAPLEX",
    laboratorio: "BAGO",
  },
  {
    nombre: "OCTICAIR® Solución Oftálmica",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "OCTOSTIM",
    laboratorio: "FERRING",
  },
  {
    nombre: "OCUREL LC Solución Oftálmica al 0.25%",
    laboratorio: "NOVOPLOS",
  },
  {
    nombre: "ODANEX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ODATRON 4 MG-8 MG Comprimidos Bucodispersables",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "OFLOX®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "OFTABIOTICO Solución Oftálmica",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTABIOTICO Ungüento Oftálmico",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTACON",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTAFILM",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTAFILM Solución Oftálmica",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTAFILM SP Solución Oftálmica",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTAGEN",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTAGEN COMPUESTO",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTALER",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTALER FORTE Solución Oftálmica",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTALIRIO",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTASONA-N",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTASONA-P",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTAVIR",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTAVITA Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTIC",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTOL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTOL FORTE",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OFTOL PLUS Suspensión Oftálmica",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OILTOPIC Crema",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "OLANFAR Comprimidos Recubiertos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "OLANVITAE Comprimidos Recubiertos",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "OLANZYL Comprimidos",
    laboratorio: "AXON PHARMA",
  },
  {
    nombre: "OLDEX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "OLICLINOMEL",
    laboratorio: "BAXTER",
  },
  {
    nombre: "OLIGOELEMENTOS",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "OLIVIN Comprimidos Recubiertos",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "OLOF Gotas Oftálmicas",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OLTAN Comprimidos Recubiertos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "OLTAN AMLO 20/10 Comprimidos Recubiertos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "OLTAN AMLO 40/5 Comprimidos Recubiertos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "OLTAN AMLO 40/10 Comprimidos Recubiertos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "OLTAN D 20/12.5 Comprimidos Recubiertos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "OLTAN D 40/12.5 Comprimidos Recubiertos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "OLYSIO®",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "OMACOR",
    laboratorio: "FERRER",
  },
  {
    nombre: "OMEPRAZOL Cápsulas con Gránulos con Recubrimiento Entérico",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "OMEPRAZOL Cápsulas con Gránulos con Recubrimiento Entérico",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "OMEPRAZOL Liofilizado para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "OMEPRAZOL Polvo Liofilizado para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "OMEPRAZOL L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "OMNIC® OCAS",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "ONBREZ® BREEZHALER® Polvo para Inhalación en Cápsulas Duras",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "ONBRIZE Cápsulas",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "ONDANSETRON",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "ONDANSETRON Comprimidos",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "ONDANSETRON Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "ONDANSETRON INYECTABLE",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "ONDANVITAE Comprimidos Recubiertos",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "ONDAX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ONGLYZA 2.5-5 mg Comprimidos Recubiertos",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "ONICIT Solución Inyectable",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "ONICIT-PONV Solución Inyectable",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "O-PLAT",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "OPTAMOX 875",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "OPTIM EYES",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "OPTIVE®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "OPTIVE® ADVANCE",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "OPTYLINE MANZANILLA 0.25 mg/ml Solución Oftálmica",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ORADIET®",
    laboratorio: "SANITAS",
  },
  {
    nombre: "ORALAFI Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ORALFRESH",
    laboratorio: "MAVER",
  },
  {
    nombre: "ORALFRESH LAMINT",
    laboratorio: "MAVER",
  },
  {
    nombre: "ORALGENE Colutorio",
    laboratorio: "MAVER",
  },
  {
    nombre: "ORALGENE Gel Dental",
    laboratorio: "MAVER",
  },
  {
    nombre: "ORALNE Cápsulas Blandas",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "ORGALUTRAN Solución Inyectable",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "ORTHOKIN Enjuague Bucal",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ORTHOKIN Pasta Dental",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "OSCILLOCOCCINUM",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "OSMOLITE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "OSTEOFIX",
    laboratorio: "KNOP",
  },
  {
    nombre: "OSTEOKER Solución Inyectable",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "OTANDROL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "OTEX HC Gotas Estériles",
    laboratorio: "CASSARA",
  },
  {
    nombre: "OTICUM",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OTIPAX® Solución para Gotas Oticas",
    laboratorio: "AXON PHARMA",
  },
  {
    nombre: "OTOCLEAN GOTAS OTICAS 10%",
    laboratorio: "CASSARA",
  },
  {
    nombre: "OTOLISAN",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "OVARIUM COMPOSITUM Solución Inyectable",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "OVESTIN Comprimidos",
    laboratorio: "ASPEN",
  },
  {
    nombre: "OVESTIN Crema",
    laboratorio: "ASPEN",
  },
  {
    nombre: "OVESTIN Ovulos",
    laboratorio: "ASPEN",
  },
  {
    nombre: "OVIDREL Solución Inyectable",
    laboratorio: "MERCK",
  },
  {
    nombre: "OVUKALEN Ovulos Vaginales",
    laboratorio: "KNOP",
  },
  {
    nombre: "OXALIPLATINO",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "OXALIPLATINO Liofilizado para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "OXALIPLATINO 50 Y 100 MG Liofilizado para Solución Inyectable",
    laboratorio: "RAFFO",
  },
  {
    nombre: "OXIBAMATE",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "OXICODAL Comprimidos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "OXILER D SOLUCION NASAL 0.05%",
    laboratorio: "CASSARA",
  },
  {
    nombre: "OXILIN",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "OXITOCINA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "OXITOCINA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "OXITOCINA 10 U.I./1 ml Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "OXO-VAL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "OXYRAPID®",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "OZURDEX®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "PACLITAXEL Solución Inyectable",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PACLITAXEL TEVA Frasco-Ampolla",
    laboratorio: "CHILE",
  },
  {
    nombre: "PACLITAXEL 30 MG",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "PACLITAXEL 100 MG",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "PACLITAXEL 300 MG",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "PALEXIS",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "PALEXIS RETARD",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "PALTOMIEL ADULTO",
    laboratorio: "KNOP",
  },
  {
    nombre: "PALTOMIEL INFANTIL",
    laboratorio: "KNOP",
  },
  {
    nombre: "PALTOMIEL PLUS",
    laboratorio: "KNOP",
  },
  {
    nombre: "PAMAX",
    laboratorio: "SANITAS",
  },
  {
    nombre: "PAMIDRONATO",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PAMIDRONATO DISODICO Frasco-Ampolla",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "PANADOLMR ADULTOS",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "PANADOLMR INFANTIL Comprimidos Masticables 80 mg - 160 mg",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "PANADOL JARABE",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "PANADOL NIÑOS Solución para Gotas Orales",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "PANAGESIC ADULTOS Comprimidos",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "PANAGESIC INFANTIL Gotas",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "PANAGESIC PERIODO MENSTRUAL",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "PANCRIT",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "PANDEL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "PANGASTREN",
    laboratorio: "CHILE",
  },
  {
    nombre: "PANTOCAL Comprimidos con Recubrimiento Entérico",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "PANTOMICINA Polvo Liofilizado para Solución Inyectable",
    laboratorio: "BAGO",
  },
  {
    nombre: "PAPAVERINA CLORHIDRATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "PAPAVERINA CLORHIDRATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "PAPENZIMA",
    laboratorio: "PFIZER",
  },
  {
    nombre: "PARA Loción-Acond. c/Enjuague",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "PARACETAMOL",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "PARACETAMOL Jarabe-Gotas",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "PARACETAMOL INFANTIL Comprimidos Masticables",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "PARACETAMOL L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "PARACETAMOL/TRAMADOL HCL Comprimidos Recubiertos",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "PARALYMPHINE",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "PARGEVERINA CLORHIDRATO Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "PARLODEL",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "PARMITAL Comprimidos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "PARODOX 20 MG",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "PAROX MELTAB",
    laboratorio: "SAVAL",
  },
  {
    nombre: "PASSEDYL",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "PASTA LASSAR",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "PATANOL",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "PATANOL S",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "PAVEDAL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "PAXON",
    laboratorio: "SAVAL",
  },
  {
    nombre: "PAZBRONQ JBE. ADULTO Jarabe",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "PAZBRONQ JBE. INFANTIL Jarabe",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "PECTORAL PASTEUR",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "PEDIALYTE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PEDIAMIST Spray Nasal",
    laboratorio: "NEILMED",
  },
  {
    nombre: "PEDIASURE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PEDIASURE COMPLETE CHOCOLATE POLVO Polvo",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PEDIASURE COMPLETE FRUTILLA POLVO Polvo",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PEDIASURE COMPLETE VAINILLA POLVO Polvo",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PEDIASURE COMPLETE VAINILLA RPB Solución Bebible",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PEGASYS",
    laboratorio: "ROCHE",
  },
  {
    nombre: "PEMEKER Liofilizado para Solución Inyectable",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "PENSULAN",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "PENTASA 500 MG",
    laboratorio: "FERRING",
  },
  {
    nombre: "PENTASA SUPOSITORIOS 1 GR",
    laboratorio: "FERRING",
  },
  {
    nombre: "PENTASA SACHETS® 1 GR",
    laboratorio: "FERRING",
  },
  {
    nombre: "PENTASA SACHETS® 2 GR",
    laboratorio: "FERRING",
  },
  {
    nombre: "PENTOXIFILINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "PEPTIVEL Q®",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "PERATIVE R.T.H.",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PERCOF Jarabe",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "PEREBRON",
    laboratorio: "CHILE",
  },
  {
    nombre: "PERENTERYL Cápsulas",
    laboratorio: "AXON PHARMA",
  },
  {
    nombre: "PERENTERYL Sobres",
    laboratorio: "AXON PHARMA",
  },
  {
    nombre: "PERFUNGOL",
    laboratorio: "BAGO",
  },
  {
    nombre: "PERGOVERIS Polvo y Solvente para Solución Inyectable",
    laboratorio: "MERCK",
  },
  {
    nombre: "PERIO-AID 0.12% Gel Dentífrico",
    laboratorio: "DENTAID",
  },
  {
    nombre: "PERIO-AID C/CCP MANTENIMIENTO",
    laboratorio: "DENTAID",
  },
  {
    nombre: "PERIO-AID C/CCP TRATAMIENTO Colutorio",
    laboratorio: "DENTAID",
  },
  {
    nombre: "PERIOKIN GEL Gel",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "PERJETA",
    laboratorio: "ROCHE",
  },
  {
    nombre: "PEROXIBEN PLUS Gel",
    laboratorio: "ISDIN",
  },
  {
    nombre: "PERSANTIN® Solución Inyectable",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "PERSPIREX LOCION",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "PERSPIREX ROLLON",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "PERTIUM",
    laboratorio: "SAVAL",
  },
  {
    nombre: "PERTUSSIN",
    laboratorio: "KNOP",
  },
  {
    nombre: "PERVIORAL Comprimidos Recubiertos",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "PETIDINA CLORHIDRATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "PETIDINA CLORHIDRATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "PHEZAM Frasco-Ampolla",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "PHOSLO",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "PHOSPHOR-HEELACCORD® Solución Oral para Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "PHOTODERM AKN SPF 30 Fotoprotector",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "PHOTODERM AR SPF 50+ Fotoprotector",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "PHOTODERM MAX AQUAFLUIDE SPF 50+ Fotoprotector",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "PHOTODERM MAX AQUAFLUIDE SPF 50+ TEINTE CLARE Fotoprotector",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "PHOTODERM MAX AQUAFLUIDE SPF 50+ TEINTE DORE Fotoprotector",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "PHOTODERM MAX COMPACT SPF 50+/UVA 24 TONO DORADO Fotoprotector",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "PHOTODERM MAX LECHE SPF50+ Loción",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "PHOTODERM MAX COMPACT SPF 50+ TONO CLARO Fotoprotector",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "PHOTODERM SPOT Crema",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "PHYTO SPOT",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "PHYTO SOYA CREMA FACIAL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "PHYTO SOYA GEL VAGINAL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "PIASCLEDINE",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "PICOPREP Polvo para Solución Oral",
    laboratorio: "FERRING",
  },
  {
    nombre: "PIESAN® Crema-Polvo",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "PIGMENTCLAR OJOS",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "PIGMENTCLAR SERUM",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "PIGMENTCLAR UV Tratamiento Antimanchas",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "PIGMENT PERFECT",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "PILEXIL® ANTICAIDA Ampollas",
    laboratorio: "BAGO",
  },
  {
    nombre: "PILEXIL® ANTICAIDA Champú",
    laboratorio: "BAGO",
  },
  {
    nombre: "PILEXIL CAPSULAS Cápsulas",
    laboratorio: "BAGO",
  },
  {
    nombre: "PILOCARPINA",
    laboratorio: "SAVAL",
  },
  {
    nombre: "PIOFIN® Loción",
    laboratorio: "SANITAS",
  },
  {
    nombre: "PIPERACILINA + TAZOBACTAM Polvo para Solución Inyectable",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PIPERACILINA + TAZOBACTAM Polvo para Suspensión Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "PIPLEX Cápsulas Blandas",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PIRETANYL",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "PIREXYL",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "PIRIDOXINA CLORHIDRATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "PIRIDOXINA CLORHIDRATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "PIRITINOL L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "PIROBAC MINI Botellas Orales",
    laboratorio: "KNOP",
  },
  {
    nombre: "PIROFLAM® CAPSULAS",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "PIROFLAM® GEL",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre:
      "PIROFLAM® SUSPENSION PARA GOTAS ORALES 1.5% Solución Oral para Gotas",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "PIRONAL FLU FORTE SUSP. / PIRONAL FLU FORTE COMP.",
    laboratorio: "BAGO",
  },
  {
    nombre: "PIRONAL FORTE SUSPENSION",
    laboratorio: "BAGO",
  },
  {
    nombre: "PIROXICAM Comprimidos 20 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "PIROXICAM L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "PLANIDEN ODT Comprimidos Dispersables",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PLANTABEN",
    laboratorio: "BIOTOSCANA",
  },
  {
    nombre: "PLAQUETIL",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "PLAQUINOL® 200 MG Comprimidos Recubiertos",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "PLATSUL-A",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "PLAVIX® 75 MG Comprimidos Recubiertos",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "PLAVIX® 300 MG Comprimidos Recubiertos",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "PLAZOLIT® COMPUESTO Solución para Gotas Orales",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "PLAZOLIT FORTE Solución para Gotas Orales",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "PLAZOLIT GOTAS Solución para Gotas Orales",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "PLENAIR Comprimidos Recubiertos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "PLENICA Cápsulas",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "PLENITEX Cápsulas",
    laboratorio: "RAFFO",
  },
  {
    nombre: "PLESSIR Comprimidos Recubiertos 3 mg",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "PLEXUS Comprimidos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PLEXUS Jarabe",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PLURIAMIN Comp. Recubierto Entérico de Liberación Prolongada",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PLUSCAL Comprimidos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "PLUSEFEC® Comprimidos Recubiertos",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "PLUSGIN Cápsulas",
    laboratorio: "RAFFO",
  },
  {
    nombre: "PLUSTER",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "PLUS UP Comprimidos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "PLUTOS JARABE",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "PNEUMO 23",
    laboratorio: "SANOFI PASTEUR",
  },
  {
    nombre: "PNEUMOVAX 23 Inyectable",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "POEM FEM Comprimidos Recubiertos",
    laboratorio: "SILESIA",
  },
  {
    nombre: "POENCAINA",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "POENTOBRAL PLUS",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "POLIVITAMINICO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "POLPROTEC Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "POMADA AMARILLA NICOLICH",
    laboratorio: "SAVAL",
  },
  {
    nombre: "POMADA VITAMINICA",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "POMALYST Cápsulas",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "POSIVYL",
    laboratorio: "CHILE",
  },
  {
    nombre: "POTASIO CLORURO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "POTASIO GLUCONATO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "POVIDONA YODADA Solución Tópica",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "POVIN",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "PRADAXA® Cápsulas",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "PRAXBIND® Solución Inyectable",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "PRAXIS Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "PRAYANOL",
    laboratorio: "SANITAS",
  },
  {
    nombre: "PREBB Comprimidos Recubiertos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "PREBICTAL Cápsulas",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "PRECENID Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "PRECLAR",
    laboratorio: "CHILE",
  },
  {
    nombre: "PRED FORTE®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "PREDNISONA",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "PREDNISONA L.CH. Comprimidos 20 mg",
    laboratorio: "CHILE",
  },
  {
    nombre: "PREDNISONA L.CH. Comprimidos 5 mg",
    laboratorio: "CHILE",
  },
  {
    nombre: "PREDUAL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "PREDUAL D.I.",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "PREFAXIL Cápsulas",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "PREGABALINA CAPSULAS 75 MG Cápsulas",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "PREGABALINA CAPSULAS 150 MG Cápsulas",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "PREGABAX® Cápsulas",
    laboratorio: "GADOR PHARMA",
  },
  {
    nombre: "PREGALEX®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "PREGALIN 75 MG Comprimidos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "PREGALIN 150 MG Comprimidos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "PREGNYL",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "PREGOBIN",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PREMIER REPELENTE DE INSECTOS CON PROTECTOR SOLAR",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PREMIER REPELENTE KIDS SPRAY",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PREMIER REPELENTE SPRAY",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PRENAL Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "PRENAMIN",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PRENAMIN N",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PRENAMIN PRO CAPSULAS Cápsulas",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PRESTAT 50-75-150 MG Comprimidos",
    laboratorio: "BAGO",
  },
  {
    nombre: "PRESYC",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "PREVALINA",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "PREVENAR® 13 V",
    laboratorio: "PFIZER",
  },
  {
    nombre: "PREVIDOL® Comprimidos Recubiertos",
    laboratorio: "BAGO",
  },
  {
    nombre: "PREZISTA® Comprimidos Recubiertos",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "PRIMAQUIN Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PRIMIDONA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "PRIORA® Sachets",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PRISTIQ Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "PFIZER",
  },
  {
    nombre: "PRIVEX® Solución Tópica Laca para uñas",
    laboratorio: "BAGO",
  },
  {
    nombre: "PRIXIS Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PROAL",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "PROAVEN CREMA Y LOCION Crema-Loción",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "PRO-BEXTRA",
    laboratorio: "PFIZER",
  },
  {
    nombre: "PROBIFLORA ADULTO Cápsulas",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PROBIFLORA GOMITAS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PROBIFLORA KIDS 2+ Sachets",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PROBIFLORA SENIOR 50+ Cápsulas",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PROBIFLORA WOMAN Cápsulas",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PROBIOTIC DROPS",
    laboratorio: "V&P PHARMA",
  },
  {
    nombre: "PROBIOTICS VIAL",
    laboratorio: "V&P PHARMA",
  },
  {
    nombre: "PROCELAR",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "PROCION 20 MG",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "PROCION Suspensión",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "PROCORALAN Comprimidos Recubiertos",
    laboratorio: "FERRER",
  },
  {
    nombre: "PROCTOGEL",
    laboratorio: "MAVER",
  },
  {
    nombre: "PROCTORAN POMADA 1%",
    laboratorio: "FAES FARMA",
  },
  {
    nombre: "PRODASONE®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "PRODEL Comprimidos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "PRODEL Jarabe",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "PRODEL B Comprimidos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "PRODEL B Jarabe",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "PROFENID® Comprimidos con Recubrimiento Entérico",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "PROFENID® Cápsulas",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "PROFENID-BI® Comprimidos de Liberación Prolongada",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "PROFENID® I.M. Solución Inyectable 100 mg/2 ml",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "PROFENID® I.V. Polvo para Solución Inyectable",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "PROFISIN",
    laboratorio: "SANITAS",
  },
  {
    nombre: "PROGENDO Cápsulas Blandas",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PROGERING",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "PROGRESS® GOLD",
    laboratorio: "ASPEN",
  },
  {
    nombre: "PROGYNOVA 1 Grageas",
    laboratorio: "BAYER",
  },
  {
    nombre: "PROGYNOVA 2 Grageas",
    laboratorio: "BAYER",
  },
  {
    nombre: "PROHAIR Comprimidos",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "PROLERTUS 140 mg",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "PROLIA Solución Inyectable",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "PROLIFT®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "PROLONG",
    laboratorio: "MAVER",
  },
  {
    nombre: "PROLOPA",
    laboratorio: "ROCHE",
  },
  {
    nombre: "PROMERPAL® Cápsulas de liberación prolongada",
    laboratorio: "PRATER",
  },
  {
    nombre: "PROMIL® GOLD",
    laboratorio: "ASPEN",
  },
  {
    nombre: "PROMISE® PE GOLD",
    laboratorio: "ASPEN",
  },
  {
    nombre: "PROPANOLOL CLORHIDRATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "PROPESS® Ovulos Vaginales",
    laboratorio: "FERRING",
  },
  {
    nombre: "PROPILTIOURACILO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "PROPOFOL Emulsión Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "PROPOLIS SPRAY",
    laboratorio: "KNOP",
  },
  {
    nombre: "PROPRANOLOL CLORHIDRATO Comprimidos 10 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "PROPRANOLOL CLORHIDRATO Comprimidos 40 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "PROPRANOLOL CLORHIDRATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "PROPRANOLOL L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "PROSCAR",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "PROSIL®",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "PROSINA Cápsulas de Microgránulos de Liberación Prolongada",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "PROSTALL Comp. Recubierto Entérico de Liberación Prolongada",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PROSTAVITE",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "PROSTIN® PEDIATRICO",
    laboratorio: "PFIZER",
  },
  {
    nombre: "PROTECCION ULTRA (LINEA BLISTEX)",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "PROTECTUM",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "PROTIUM FEM Cápsulas",
    laboratorio: "SAVAL",
  },
  {
    nombre: "PROTIUM INMUNE Cápsulas",
    laboratorio: "SAVAL",
  },
  {
    nombre: "PROTIUM INMUNE MINI Sachets",
    laboratorio: "SAVAL",
  },
  {
    nombre: "PROTIUM TRANSIT Cápsulas",
    laboratorio: "SAVAL",
  },
  {
    nombre: "PROTIUM TRANSIT PLUS Sachets",
    laboratorio: "SAVAL",
  },
  {
    nombre: "PROVOCHOLINE Polvo para Inhalación Oral",
    laboratorio: "ALLERGIKA CHILE",
  },
  {
    nombre: "PROZAC® DISPERSABLE",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "PROZONE BASE COMPACTA Base Compacta",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "PROZONE GEL Gel",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "PRUCALEX® Comprimidos Recubiertos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "PRURIX Loción",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "PRUVAL Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "PSICOLIT",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "PSORINOHEEL® N Solución Oral para Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "PULMAGOL",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "PULMICORT TURBUHALER 200 mcg/dosis Polvo para Inhalación Oral",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "PULMOCARE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "PULSATILLA COMPOSITUM Solución Inyectable",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "PURA FIBRA",
    laboratorio: "KNOP",
  },
  {
    nombre: "PUREGON Solución Inyectable",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "PUREGON Solución Inyectable en Cartuchos",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "PURE VITAMIN C10",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "PYRIPED Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "PYRIPED Suspensión Oral",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "PYRIPED BL",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "PYRIPED FORTE Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "PYRIPED FORTE Suspensión Oral",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "QLAIRA Comprimidos Recubiertos",
    laboratorio: "BAYER",
  },
  {
    nombre: "QUASSIA SHAMPOO AL 4% P/P Shampoo",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "QUEPIMAX Comprimidos Recubiertos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "QUERATOPIL Emulsión Fluida Queratorreguladora",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "QUETEX® Comprimidos Recubiertos",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "QUETEX XR® Comprimidos Recubiertos",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "QUETIAPINA Comprimidos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "QUETIAPINA Comprimidos Recubiertos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "QUETIAPINA Comprimidos Recubiertos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "QUETIAPINA COMPRIMIDOS RECUBIERTOS 200 MG Comprimidos Recubiertos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "QUETIAPINA COMPRIMIDOS RECUBIERTOS 300 MG Comprimidos Recubiertos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "QUETIAZIC Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "QUETIDIN 25-100-200-300 MG",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "QUETIDIN XR",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "QUETIUM® Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "QUIMOX Solución Oftálmica",
    laboratorio: "OPHTHA",
  },
  {
    nombre: "QUINOBIOT",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "QUINVAXEM Inyectable",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "QUITACALLOS",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "QURAX Comprimidos",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "RADIGEN® Comprimidos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "RADIGEN® Gotas orales",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "RAMIPRES",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "RANITAX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "RANITIDINA",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "RANITIDINA Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "RANITIDINA Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "RANITIDINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "RAPAMUNE® Solución-Grageas",
    laboratorio: "PFIZER",
  },
  {
    nombre: "RASAGILINA Comprimidos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "RASILEZ",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "RASILEZ D Comprimidos Recubiertos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "RAVOTRIL",
    laboratorio: "ROCHE",
  },
  {
    nombre: "RAVOTRIL SUBLINGUAL",
    laboratorio: "ROCHE",
  },
  {
    nombre: "REAGE 200 U POLVO LIOFILIZ. SOL. INY. 1 1 F. AM.",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "REAGE 50 U POLVO LIOFILIZ. SOL. INY. 1 1 F. AM",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "REAGE 100 U POLVO LIOFILIZ. SOL. INY. 1 1 F. AM",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "REALTA Cápsulas con Gránulos con Recubrimiento Entérico",
    laboratorio: "SAVAL",
  },
  {
    nombre: "REAX Comprimidos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "REBIF",
    laboratorio: "MERCK",
  },
  {
    nombre: "RECAMICINA Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "RECAXIN Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "RECAXIN DUO",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "RECOMVAX B",
    laboratorio: "SANOFI PASTEUR",
  },
  {
    nombre: "RECORMON",
    laboratorio: "ROCHE",
  },
  {
    nombre: "RECOVER OL®",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "REDERMIC R Agua Termal",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "REDERMIC HYALU [C] OJOS Agua Termal",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "REDERMIC HYALU [C] PIEL NORMAL/MIXTA Agua Termal",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "REDERMIC HYALU [C] PIEL SECA Agua Termal",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "REDERMIC HYALU [C] UV Agua Termal",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "REDERMIC R OJOS Agua Termal",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "REDITUX Concentrado Para Solución Para Infusión",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "RED OFF",
    laboratorio: "CHILE",
  },
  {
    nombre: "RED OFF PLUS",
    laboratorio: "CHILE",
  },
  {
    nombre: "REDOXON DOBLE ACCION",
    laboratorio: "BAYER",
  },
  {
    nombre: "REFLEXAN",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "REFRESH® LIQUIGEL",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "REFRESH® TEARS",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "REGENESIS Cápsulas",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "REGENESIS MAX® Cápsulas Blandas",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "REGENESIS NEXT® Cápsulas Blandas",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "REGENESIS UP® Cápsulas Blandas",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "REGENTAL Comprimidos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "REGENTAL FORTE",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "REGINA-CD Comprimidos",
    laboratorio: "GEDEON RICHTER",
  },
  {
    nombre: "REHSAL",
    laboratorio: "CHILE",
  },
  {
    nombre: "RELATENE Comprimidos con Recubrimiento Entérico",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "RELATENE T.U. Comprimidos con Recubrimiento Entérico",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "RELENZA ROTADISK Polvo para Inhalación",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "RELESTAT®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "RELEXIL",
    laboratorio: "CHILE",
  },
  {
    nombre: "RELPAX®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "RELVAR ELLIPTA 92/22 MCG Polvo para Inhalación",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "RELVAR ELLIPTA 184/22 MCG Polvo para Inhalación",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "REMICADE® Liofilizado para Solución Inyectable",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "REMIFENTANILO Liofilizado para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "REMITEX Comprimidos",
    laboratorio: "BAGO",
  },
  {
    nombre: "REMITEX Gotas-Jarabe",
    laboratorio: "BAGO",
  },
  {
    nombre: "REMITEX D",
    laboratorio: "BAGO",
  },
  {
    nombre: "REMODULIN Solución Inyectable",
    laboratorio: "FERRER",
  },
  {
    nombre: "RENACENZ",
    laboratorio: "PHARMAVITA",
  },
  {
    nombre: "RENEEL® NT Comprimidos Sublinguales",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "REPECTISSIME MÁSCARA DE VOLUMEN",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "REPELEX Crema Tópica",
    laboratorio: "SANITAS",
  },
  {
    nombre: "REPELEX Gel Tópico",
    laboratorio: "SANITAS",
  },
  {
    nombre: "REPELEX FORTE Aerosol",
    laboratorio: "SANITAS",
  },
  {
    nombre: "REPELEX NF Solución",
    laboratorio: "SANITAS",
  },
  {
    nombre: "REPENTIL Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "REPOSIL",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "REQUIP® PD 2 mg Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "REQUIP® PD 4 mg Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "REQUIP® PD 8 mg Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "RESOTYL Comprimidos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "RESPECTISSIME MÁSCARA WATERPROOF",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "RESPIBRON",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "RESTASIS®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "RESTAURAL Comprimidos Recubiertos",
    laboratorio: "PHARMAVITA",
  },
  {
    nombre: "RESTOL",
    laboratorio: "CHILE",
  },
  {
    nombre: "RETACNYL",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "RETROVIR Jarabe",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "RETROVIR Solución Inyectable",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "REUMAZINE® Comprimidos Recubiertos",
    laboratorio: "SANITAS",
  },
  {
    nombre: "REVIL",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "REVIL VITAMINADO B12",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "REVIL VITAMINADO B12 FORTE",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "REVLIMID CAPSULAS 5 mg; 10 mg; 15 mg y 25 mg Cápsulas",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "REVOLADE Comprimidos Recubiertos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "REXANEL 30 Comprimidos 10 mg",
    laboratorio: "PRATER",
  },
  {
    nombre: "RHEUMA-HEEL® Comprimidos Sublinguales",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "RIBOLAC Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "RIBOMUSTIN Polvo concentrado p/soluc.de Infusión IV",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "RICILINA COMPRIMIDOS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "RICILINA FORTE Suspensión Oral",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "RICILINA SUSPENSION SACHET",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "RIFAMPICINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "RIGINAL Comprimidos Recubiertos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "RIGOTAX",
    laboratorio: "PRATER",
  },
  {
    nombre: "RIGOTAX-D",
    laboratorio: "PRATER",
  },
  {
    nombre: "RILUTEK®",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "RIMIVAT Cápsulas-Suspensión",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "RIMOX® Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "RIMOX® Solución Oral 10 mg/ml",
    laboratorio: "CHILE",
  },
  {
    nombre: "RINAID",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "RINAID Jarabe 2.5 mg/5 ml",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "RINITEK",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "RINITEK FREE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "RINOBANEDIF",
    laboratorio: "BAGO",
  },
  {
    nombre: "RINO-B AQUA Suspensión Nasal para Nebulización 100 mcg/dosis",
    laboratorio: "CASSARA",
  },
  {
    nombre: "RINOFILAX COMPRIMIDOS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "RINOFILAX JARABE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "RINOKID® Solución Nasal para Nebulización 3%",
    laboratorio: "CASSARA",
  },
  {
    nombre: "RINOKID® GOTAS Solución Nasal para Nebulización 3%",
    laboratorio: "CASSARA",
  },
  {
    nombre: "RINOMEX Jarabe",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "RINOPARIN Solución Oral para Gotas",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "RINOPLEX",
    laboratorio: "KNOP",
  },
  {
    nombre: "RINOSTERYL",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "RINOVAL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "RINOVEN",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "RINOVEN COMPUESTO",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "RIPOL",
    laboratorio: "CHILE",
  },
  {
    nombre: "RISPERDAL® Comprimidos recubiertos-Suspensión oral",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "RISPERDAL CONSTA® Pvo.p/ Susp.Iny.de Lib.Prolongada con Solvente",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "RISPYL Comprimidos Recubiertos",
    laboratorio: "AXON PHARMA",
  },
  {
    nombre: "RITALIN",
    laboratorio: "AXON PHARMA",
  },
  {
    nombre: "RITMENAL",
    laboratorio: "SANITAS",
  },
  {
    nombre: "RITMOCOR Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "RIZE",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ROACNETAN",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ROCALTROL",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ROFERON",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ROKAN",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ROPSIL",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "ROSALIAC AR INTENSE Concentrado Activo Antirojeces localizadas",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre:
      "ROSALIAC CC CREMA Trat. anti. que cubre y corrige el tono de la piel",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ROSALIAC UV Piel Sensible con Rojeces",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ROSALIAC GEL MICELAR Gel Micelar de Limpieza",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "ROSAT Comprimidos Recubiertos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "ROSELIANE CREMA ANTIRROJECES",
    laboratorio: "URIAGE",
  },
  {
    nombre: "ROSELIANE CREMA ANTIRROJECES SPF30",
    laboratorio: "URIAGE",
  },
  {
    nombre: "ROSELIANE FLUIDO DERMOLIMPIADOR",
    laboratorio: "URIAGE",
  },
  {
    nombre: "ROSINA CD® Comprimidos Recubiertos",
    laboratorio: "GEDEON RICHTER",
  },
  {
    nombre: "ROSUGRAS Comprimidos Recubiertos",
    laboratorio: "RAFFO",
  },
  {
    nombre: "ROSUMED",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "ROSUVASTATINA 10 MG Comprimidos",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "ROSUVASTATINA 20 MG Comprimidos",
    laboratorio: "MDK S.A.",
  },
  {
    nombre:
      "ROSUVASTATINA COMPRIMIDOS RECUBIERTOS 10 MG Comprimidos Recubiertos",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre:
      "ROSUVASTATINA COMPRIMIDOS RECUBIERTOS 10 MG Comprimidos Recubiertos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre:
      "ROSUVASTATINA COMPRIMIDOS RECUBIERTOS 20 MG Comprimidos Recubiertos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre:
      "ROSUVASTATINA COMPRIMIDOS RECUBIERTOS 20 MG Comprimidos Recubiertos",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "ROSUVITAE® Comprimidos Recubiertos",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "ROSVEL",
    laboratorio: "CHILE",
  },
  {
    nombre: "ROSELIANE CC CREAM",
    laboratorio: "URIAGE",
  },
  {
    nombre: "ROTARIX",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ROTA TEQ Vacunas",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "ROVARTAL Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "RSP Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "RUBIFEN 10 MG IR-20 MG SR Comprimidos",
    laboratorio: "PHARMAVITA",
  },
  {
    nombre: "RUBORIL 50+ EXPERT Crema",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "RUBORIL S EXPERT Crema",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "RUBRIMET Gel Dérmico 0.75%",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "RUBRIMET CREMA TOPICA 1% Crema",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "RUPAFIN Comprimidos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "RUPAFIN SOLUCION ORAL 1 mg/ml",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "RUX Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "RUX Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "SABRIL®",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "SAE",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "SAGRAS Cápsulas",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "SAIZEN 6, 12 y 20 mg Solución Inyectable",
    laboratorio: "MERCK",
  },
  {
    nombre: "SAIZEN CLICK EASY® Liofilizado para Solución Inyectable",
    laboratorio: "MERCK",
  },
  {
    nombre: "SALBUTAMOL Jarabe",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "SALBUTAMOL Solución para Nebulizar",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "SALBUTAMOL AEROSOL L.F. (Libre de Freones)",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "SALBUTAMOL CON BECLOMETASONA",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "SALBUTAMOL L.CH. Aerosol",
    laboratorio: "CHILE",
  },
  {
    nombre: "SALBUTAMOL L.CH. Jarabe",
    laboratorio: "CHILE",
  },
  {
    nombre: "SALBUTRAL AC Aerosol para Inhalación",
    laboratorio: "CASSARA",
  },
  {
    nombre: "SALCAL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "SAL DE FRUTA ENOMR",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "SALES DE REHIDRATACION ORAL Sachets",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "SALFLUTOP 250/50 Polvo para Inhalación en Cápsulas Duras",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "SALFLUTOP 100/50 Polvo para Inhalación en Cápsulas Duras",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "SALICORT LOCION CAPILAR",
    laboratorio: "CASSARA",
  },
  {
    nombre: "SALMETEROL Aerosol para Inhalación",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SALOFALK",
    laboratorio: "BIOTOSCANA",
  },
  {
    nombre: "SALOFALK ESPUMA",
    laboratorio: "BIOTOSCANA",
  },
  {
    nombre: "SALOFALK ODD Gránulos con Recubrimiento Entérico de Lib. Prol.",
    laboratorio: "BIOTOSCANA",
  },
  {
    nombre: "SALOFALK ODD Supositorios",
    laboratorio: "BIOTOSCANA",
  },
  {
    nombre: "SALONPAS",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "SALVIS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SAMEXID 30-50-70 MG",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SAMOR Solución Oral",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "SANDIMMUN",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "SANDIMMUN NEORAL",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "SANDOGLOBULINA® Polvo Liofilizado para Solución Inyectable",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "SANDOSTATIN",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "SANDOSTATIN LAR",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "SANDRENA 0.1% GEL",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "SANIGERMIN",
    laboratorio: "SANITAS",
  },
  {
    nombre: "SANIGLOS® POMADA Crema",
    laboratorio: "SANITAS",
  },
  {
    nombre: "SANILENT®",
    laboratorio: "SANITAS",
  },
  {
    nombre: "SANIMAR® Solución",
    laboratorio: "SANITAS",
  },
  {
    nombre: "SANIPROSTOL",
    laboratorio: "SANITAS",
  },
  {
    nombre: "SANITER COMPUESTO",
    laboratorio: "SANITAS",
  },
  {
    nombre: "SANORAL 2TONE",
    laboratorio: "BIOTOSCANA",
  },
  {
    nombre: "SATIVEX Solución para Pulverización Bucal",
    laboratorio: "BIOPAS",
  },
  {
    nombre: "SAXENDA® Solución Inyectable de un Dispositivo Prellenado",
    laboratorio: "NOVO NORDISK",
  },
  {
    nombre: "SAYANA®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "SCADAN Comprimidos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "SCADAN JARABE",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "SEASONIQUE Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "SEBIUM GEL MOUSSANT Gel de Limpieza",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "SEBIUM GLOBAL Gel",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "SEBIUM H2O Solución Tópica",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "SEBIUM HYDRA Crema Hidratante",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "SEBOCLEAN®",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "SEBODEX® CHAMPU ANTICASPA Champú",
    laboratorio: "FEELDERM",
  },
  {
    nombre: "SEBOLIC Jabón",
    laboratorio: "FINN-VITA",
  },
  {
    nombre: "SEBOLIC Shampoo",
    laboratorio: "FINN-VITA",
  },
  {
    nombre: "SEBOLIC BARRA Jabón Limpiador",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "SEBOLIC CHAMPU Champú Seborregulador para Cabello Graso",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "SEBOLIC FLUIDO SPF 30 Protector Solar",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "SEBOLIC K GEL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "SEDOPECT",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "SEDORAN Comprimidos",
    laboratorio: "RAFFO",
  },
  {
    nombre: "SEEBRITM BREEZHALER® Polvo para inhalación de cápsulas duras",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "SELENIUM-HEELACCORD® Solución Oral para Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "SELERUP 100 Comprimidos Recubiertos",
    laboratorio: "PHARMATECH CHILE",
  },
  {
    nombre: "SELERUP 50 Comprimidos Masticables",
    laboratorio: "PHARMATECH CHILE",
  },
  {
    nombre: "SELERUP 50 Comprimidos Recubiertos",
    laboratorio: "PHARMATECH CHILE",
  },
  {
    nombre: "SELGINA",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "SENEXON SR",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SENSAID Colutorio",
    laboratorio: "DENTAID",
  },
  {
    nombre: "SENSAID Pasta Dentífrica",
    laboratorio: "DENTAID",
  },
  {
    nombre: "SENSEI",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "SENSIBIO AR Crema",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "SENSIBIO DS Crema",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "SENSIBIO EYE",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "SENSIBIO FORTE Crema",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "SENSIBIO H2O Solución Limpiadora",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "SENSICLEAN®",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "SENSIKIN ENJUAGUE BUCAL Colutorio Desensibilizante",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "SENSIKIN GEL BIOADHESIVO Gel Dental",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "SENSIKIN PASTA DENTIFRICA DESENSIBILIZANTE Pasta Dentífrica",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "SENSIKIN PASTA DENTIFRICA DESENSIBILIZANTE Sustituto del Jabón",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "SENSODYNE® ANTISARRO+BLANQUEADOR CON FLUOR",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "SENSODYNE® BICARBONATO DE SODIO",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "SENSODYNE® COOL GEL EXTRA FRESH MINT",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "SENSODYNE® F",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "SENSODYNE® PROTECCION TOTAL",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "SENTIDOL",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "SENTIS Comprimidos",
    laboratorio: "CHILE",
  },
  {
    nombre: "SERENATA 20® Comprimidos Recubiertos",
    laboratorio: "SILESIA",
  },
  {
    nombre: "SEREPRID",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "SERETIDE® 50/25 Aerosol para Inhalación",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "SERETIDE® 125/25 Aerosol para Inhalación",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "SERETIDE® DISKUS® 50/250 Polvo para Inhalación",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "SERETIDE® DISKUS® 50/500 Polvo para Inhalación",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "SERETRAN",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SEREVENT® LF Aerosol para Inhalación",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "SERONEX Comprimidos Recubiertos",
    laboratorio: "PHARMAVITA",
  },
  {
    nombre: "SERO-TET INMUNOGLOBULINA ANTITETÁNICA HUMANA Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "SEROZINC Bruma ultraligera",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "SERTAC®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "SERTAC GOTAS Gotas",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "SERTRALINA Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "SERTRALINA Comprimidos Recubiertos 50 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "SEVEDOL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SEVORANE Líquido para Inhalación",
    laboratorio: "ABBVIE",
  },
  {
    nombre: "SHAMPOO SUAVE UREA 5% ALLERGIKA Shampoo",
    laboratorio: "ALLERGIKA CHILE",
  },
  {
    nombre: "SHOVIT Comprimidos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "SHOVIT PROBIOTICO Comprimidos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "SHOVIT SILVER Comprimidos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "SIAFIL",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "SIBILLA® Comprimidos",
    laboratorio: "GEDEON RICHTER",
  },
  {
    nombre: "SICADOL FORTE",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "SICCAFLUID Solución Oftálmica",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "SIFROL® Comprimidos",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "SIFROL® ER Comprimidos de Liberación Prolongada",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "SIGNIFOR Solución Inyectable",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "SILIGAZ Suspensión",
    laboratorio: "PRATER",
  },
  {
    nombre: "SIMCOR®",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "SIMILAC ADVANCE / SIMILAC ADVANCE 2",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SIMILAC ADVANCE SIN LACTOSA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SIMILAC NATURAL CARE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SIMILAC NEOSURE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SIMILAC 1 POLVO Polvo",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SIMILAC 2 POLVO Polvo",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SIMILAC 3 POLVO Polvo",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SIMILAC SENSITIVE SIN LACTOSA Polvo",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SIMILAC SPECIAL CARE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SIMILAC TC 1 & 2 Polvo",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SIMILAC TC 3 Polvo",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SIMILAC 1 / SIMILAC 2",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SIMILIBUS",
    laboratorio: "KNOP",
  },
  {
    nombre: "SIMITRI Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SIMPERTEN",
    laboratorio: "CHILE",
  },
  {
    nombre: "SIMPERTEN-D",
    laboratorio: "CHILE",
  },
  {
    nombre: "SIMPONI Soluc.Iny.(Pluma prell.- Autoiny./Jga.prell)",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "SIMPONI I.V.® Solución Inyectable",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "SIMULECT",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "SINASMAL Aerosol",
    laboratorio: "CHILE",
  },
  {
    nombre: "SINCOM Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SINCRIS",
    laboratorio: "CHILE",
  },
  {
    nombre: "SINGOTEX Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "RAFFO",
  },
  {
    nombre: "SINGULAIR",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "SINOGAN®",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "SINOMARIN Solución Hipertónica de Agua de Mar",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "SINPIOX® LOCION Loción",
    laboratorio: "ANDES PHARMA",
  },
  {
    nombre: "SINPIOX® SHAMPOO PREVENCION Shampoo",
    laboratorio: "ANDES PHARMA",
  },
  {
    nombre: "SINTOSIN JARABE Jarabe",
    laboratorio: "MAVER",
  },
  {
    nombre: "SINURINSE KIT Sachets",
    laboratorio: "NEILMED",
  },
  {
    nombre: "SINURINSE KIT BASICO Sobres",
    laboratorio: "NEILMED",
  },
  {
    nombre: "SINURINSE NIÑOS Sachets",
    laboratorio: "NEILMED",
  },
  {
    nombre: "SINURINSE RECARGA Sachets",
    laboratorio: "NEILMED",
  },
  {
    nombre: "SIRDALUD Comprimidos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "SIXACINA Comprimidos Recubiertos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "SKIN FIRMING CREAM®",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "SKIN MOISTURIZER CKL®",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "SKIN STRUCTURE",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "SLEEP AND PEEL Crema",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "SLEEP RECOVER",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "SLOW AGE CONTORNO OJOS",
    laboratorio: "VICHY",
  },
  {
    nombre: "SLOW AGE CREMA",
    laboratorio: "VICHY",
  },
  {
    nombre: "SLOW AGE FLUIDO",
    laboratorio: "VICHY",
  },
  {
    nombre: "SLOW-K",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "SNORESTOP",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "SOCIAN® 50 MG",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "SODIO CLORURO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "SOLACTIVE CREMA I.R. FPS 50+® Crema",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SOLACTIVE GEL I.R. FPS 50+® Gel",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SOLACTIVE FLUIDO I.R. FPS 50+® Fluido",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SOLACTIVE NIGHT REPAIR Fluido",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SOLIN",
    laboratorio: "SAVAL",
  },
  {
    nombre: "SOLUCION BICARBONATO DE SODIO",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "SOLUCION CLORURO DE SODIO 0.9%",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "SOLUCION DIALISIS PERITONEAL HIPERTONICA",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "SOLUCION DIALISIS PERITONEAL ISOTONICA",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "SOLUCIONES DE GLUCOSA",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "SOLUCION GLUCOSALINA HIPERTONICA",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "SOLUCION GLUCOSALINA ISOTONICA",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "SOLUCION INYECTABLE DE DEXTROSA AL 5%",
    laboratorio: "BAXTER",
  },
  {
    nombre: "SOLUCION IRRIGACION VESICAL",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "SOLUCION MICELAR FISIOLOGICA Para todo tipo de piel",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "SOLUCION MICELAR PURETE THERMALE",
    laboratorio: "VICHY",
  },
  {
    nombre: "SOLUCION POLIIONICA",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "SOLUCION RINGER LACTATO",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "SOLUCION SUERO RINGER",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "SOLU-CORTEF®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "SOLUGEL 4% Gel Dérmico",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "SOLU-MEDROL",
    laboratorio: "PFIZER",
  },
  {
    nombre: "SOLUNA Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "SOLUNA E 20 Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "SOLUNA E Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "SOLVOBIL Comprimidos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "SOMATRAN",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "SOMAZINA 1000 MG Solución Oral",
    laboratorio: "FERRER",
  },
  {
    nombre: "SOMESE®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "SOMIT® CR Comprimidos Recubiertos",
    laboratorio: "GADOR PHARMA",
  },
  {
    nombre: "SOMNIL",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "SOMNIPAX® Comprimidos",
    laboratorio: "BAGO",
  },
  {
    nombre: "SOMNIPRON",
    laboratorio: "SANITAS",
  },
  {
    nombre: "SOMNO",
    laboratorio: "SAVAL",
  },
  {
    nombre: "SOMNO XR",
    laboratorio: "SAVAL",
  },
  {
    nombre: "SOP Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "SOPHIPREN OFTENO® Suspensión Oftálmica",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "SOPHIXIN DX OFTENO® Solución Oftálmica",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "SOPHIXIN DX UNGENA Ungüento Oftálmico",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "SOPHIXIN OFTENO® Solución Oftálmica",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "SOSTAC",
    laboratorio: "CHILE",
  },
  {
    nombre: "SPASCUPREEL® Comprimidos Sublinguales",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "SPASCUPREEL® Solución Inyectable",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "SPASMEX",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "SPASMODOX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SPIGELON® Comprimidos Sublinguales",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "SPIOLTO RESPIMAT Solución para Inhalación",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "SPIRIVA® RESPIMAT® Solución para Inhalación",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "SPIRON Comprimidos",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "SPIRON Gotas",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "SPIRON FT®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre:
      "SPLENDIL ER® 5-10 mg Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "SPORANOX ® Cápsulas",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "SPRAINER Espuma",
    laboratorio: "OPHTHA",
  },
  {
    nombre: "SPRAINER T4 O Toallitas",
    laboratorio: "OPHTHA",
  },
  {
    nombre: "SPRYCEL Comprimidos Recubiertos",
    laboratorio: "BRISTOL - MYERS SQUIBB",
  },
  {
    nombre: "STALEVO",
    laboratorio: "AXON PHARMA",
  },
  {
    nombre: "STAMARIL",
    laboratorio: "SANOFI PASTEUR",
  },
  {
    nombre: "STELARA® Solución Inyectable (Jga.Prellenada)",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "STERIMAR BEBE",
    laboratorio: "TS GROUP",
  },
  {
    nombre: "STERIMAR HYPERTONIC",
    laboratorio: "TS GROUP",
  },
  {
    nombre: "STERIMAR INFANTIL",
    laboratorio: "TS GROUP",
  },
  {
    nombre: "STERIMAR USO DIARIO",
    laboratorio: "TS GROUP",
  },
  {
    nombre: "STIEVA A CREMA",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "STIEVAMYCIN GEL 0.025%",
    laboratorio: "STIEFEL",
  },
  {
    nombre: "STOCRIN",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "STP FERTILITY TEST-TEST DE LH Dispositivo Médico",
    laboratorio: "GEDEON RICHTER",
  },
  {
    nombre: "STRATTERA®",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "STREPFEN MIEL LIMON",
    laboratorio: "RECKITT BENCKISER",
  },
  {
    nombre: "STRESAM Cápsulas",
    laboratorio: "AXON PHARMA",
  },
  {
    nombre: "STRUENDOX® Loción Capilar con Enjuangue",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "STUGERON Comprimidos",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "SUALIM CHAMPU Champú para Piel Sensible",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "SUALIM EMULSION LIMPIADORA Emulsión Sustituta del Jabón",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "SUAVICORT CREMA TÓPICA 0.1% Crema Tópica",
    laboratorio: "CASSARA",
  },
  {
    nombre:
      "SUAVICORT SPRAY NASAL Suspensión Nasal para Nebulización 50 mcg/dosis",
    laboratorio: "CASSARA",
  },
  {
    nombre: "SUAVICREM® Crema Suavizante",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "SUAVIGEL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "SUBELAN XR",
    laboratorio: "PHARMAVITA",
  },
  {
    nombre: "SUBSTIANE+ Para todo tipo de piel",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "SUBSTIANE (+) EXTRA-RICHE Piel muy madura y extramadamente seca",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "SUBSTIANE OJOS",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "SUBSTIANE (+) SERUM FPS 15",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "SUBSTIANE (+) UV FPS 15",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "SUCEDAL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "SUGAFOR STEVIA + PROPOLEO 250 ML",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SUGAFOR STEVIA + PROPOLEO 440 Tabletas",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SUGAFOR SUCRALOSA LIQUIDO 250 ML",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SUGAFOR SUCRALOSA TABLETAS X 440",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SULBAMOX IBL",
    laboratorio: "BAGO",
  },
  {
    nombre: "SULCRAN",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "SULDIAZAN",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "SULFATO DE MAGNESIO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "SULFATO DE MAGNESIO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "SULFATO DE ZINC",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "SULFATO DE ZINC Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "SULFATO FERROSO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "SULFUR-HEEL® Comprimidos Sublinguales",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "SULIX",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "SULIX LC",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "SULPERAZON®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "SULPILAN 50 mg",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "SULPILAN FORTE",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "SULPILAN® SOLUCION 0.5%",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "SULPIVOL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "SUMMAVIT Gotas",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "SUNCARE FPS 50+ Crema",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SUNCARE FPS 50+ Gel",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SUNCARE 100 CITY PROTECTION FPS 50+ Fluido",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SUNCARE 100 COMPACTO FPS 50+",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SUNCARE 100 FLUID COLOR FPS 50+ Fluido",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SUNCARE FLUIDO BOV FPS 50® Fluido",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SUNCARE 100 GEL CREAM FPS 50+ Gel Crema",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SUNCARE KIDS EMULSION FPS 50+ Emulsión",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SUNCARE LIPS FPS 50+ Barra",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SUNCARE 100 TRANSPARENT SPRAY FPS 50+ Spray",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SUNFREE® GEL SPF 50-ALTA PROTECCION SOLAR Gel",
    laboratorio: "ANDES PHARMA",
  },
  {
    nombre: "SUNFREE® LOCION ANHIDRA SPF 30-ALTA PROTECCION Loción",
    laboratorio: "ANDES PHARMA",
  },
  {
    nombre: "SUNWORK FEM® FPS 50+ Gel con Color",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SUNWORK FPS 50+ Gel",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SUNWORK LIPS FPS 50 + Barra",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SUNWORK SPRAY FPS 50+ Loción",
    laboratorio: "DEUTSCHE PHARMA",
  },
  {
    nombre: "SUPLASYN/SUPLASYN 1-SHOT",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "SUPOVIOL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "SUPRACALM",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "SUPRADYN ACTIVE Comprimidos Recubiertos",
    laboratorio: "BAYER",
  },
  {
    nombre: "SUPRADYN GRAGEAS Grageas",
    laboratorio: "BAYER",
  },
  {
    nombre: "SUPRADYN PRENATAL® Comprimidos Recubiertos",
    laboratorio: "BAYER",
  },
  {
    nombre: "SUPRAHYAL",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "SUPRANE",
    laboratorio: "BAXTER",
  },
  {
    nombre: "SUPRIMUN® Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "SUPRIMUN® Cápsulas",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "SURVANTA Suspensión Inyectable Intratraqueal",
    laboratorio: "ABBVIE",
  },
  {
    nombre: "SUSTENAN 250 Solución Inyectable",
    laboratorio: "ASPEN",
  },
  {
    nombre: "SUTENT Cápsulas",
    laboratorio: "PFIZER",
  },
  {
    nombre: "SUXAMETONIO CLORURO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "S-26® AR GOLD",
    laboratorio: "ASPEN",
  },
  {
    nombre: "S-26® COMFORT GOLD",
    laboratorio: "ASPEN",
  },
  {
    nombre: "S-26® GOLD",
    laboratorio: "ASPEN",
  },
  {
    nombre: "S-26® HA GOLD",
    laboratorio: "ASPEN",
  },
  {
    nombre: "S-26® SIN LACTOSA GOLD",
    laboratorio: "ASPEN",
  },
  {
    nombre: "SYMBICORT TURBUHALER 160/4.5 µg/dosis Polvo para Inhalación Bucal",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "SYMBICORT TURBUHALER 320/9 µg/dosis Polvo para Inhalación Bucal",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "SYMBIOLACT Sobres",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "SYMFONA®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "SYNAGIS",
    laboratorio: "ABBVIE",
  },
  {
    nombre: "SYNALLER",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "SYNDOL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "SYNDOL SL Comprimidos Sublinguales",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "SYNFLORIX® Suspensión Inyectable",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "SYNTOCINON",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "SYNVISC/SYNVISC ONE",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "SYSTANE",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "SYSTANE BALANCE Gotas Oftálmicas",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "SYSTANE ULTRA",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "SYSTANE ULTRA UD Gotas Oftálmicas",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "T4- BAGO 100 Y 150 MCG Comprimidos",
    laboratorio: "BAGO",
  },
  {
    nombre: "T4®- BAGO 50 y 75 mcg Comprimidos",
    laboratorio: "BAGO",
  },
  {
    nombre: "TABLETAS ANTIACIDAS PASTEUR",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "TABLETAS PHILLIPS",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "TACHYBEN",
    laboratorio: "PHARMAVITA",
  },
  {
    nombre: "TACROLIMUS 5 MG Cápsulas",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "TACROLIMUS 0.5 MG Cápsulas",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "TACROLIMUS 1 MG Cápsulas",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "TAFINLAR Cápsulas",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "TALFLEX",
    laboratorio: "BAGO",
  },
  {
    nombre: "TALFLEX BI Comprimidos",
    laboratorio: "BAGO",
  },
  {
    nombre: "TALOF Suspensión Oftálmica",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "TALOL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TAMIFLU",
    laboratorio: "ROCHE",
  },
  {
    nombre: "TAMISA 30/75 Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "TAMOXIFENO",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "TANSTON®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "TAPSIN ANALGESICO ROJO Comprimidos",
    laboratorio: "MAVER",
  },
  {
    nombre: "TAPSIN CALIENTE DIA Día",
    laboratorio: "MAVER",
  },
  {
    nombre: "TAPSIN CALIENTE NOCHE Noche",
    laboratorio: "MAVER",
  },
  {
    nombre: "TAPSIN DN Cápsulas",
    laboratorio: "MAVER",
  },
  {
    nombre: "TAPSIN FORTE Comprimidos",
    laboratorio: "MAVER",
  },
  {
    nombre: "TAPSIN INFANTIL COMPRIMIDOS Comprimidos",
    laboratorio: "MAVER",
  },
  {
    nombre: "TAPSIN INFANTIL GOTAS Gotas",
    laboratorio: "MAVER",
  },
  {
    nombre: "TAPSIN INSTAFLU",
    laboratorio: "MAVER",
  },
  {
    nombre: "TAPSIN NIÑOS Comprimidos Masticables",
    laboratorio: "MAVER",
  },
  {
    nombre: "TAPSIN NOCTURNO",
    laboratorio: "MAVER",
  },
  {
    nombre: "TAPSIN PERIODO MENSTRUAL",
    laboratorio: "MAVER",
  },
  {
    nombre: "TAPSIN PURO PARACETAMOL",
    laboratorio: "MAVER",
  },
  {
    nombre: "TARCEVA",
    laboratorio: "ROCHE",
  },
  {
    nombre: "TAREG",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "TAREG-D",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "TARGINACT® Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "TARGOCID®",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "TARGRETIN Cápsulas Blandas",
    laboratorio: "FERRER",
  },
  {
    nombre: "TARTEPHEDREEL® Solución Oral para Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "TASIGNA",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "TAVANIC Solución para Infusión I.V.",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "TAVIST® XR Comprimidos de Liberación Prolongada",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "TAVIST® XR Comprimidos de Liberación Prolongada",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "TAVOR",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "TAXODIOL 30 mg",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "TAXODIOL 150 mg",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "TAXUS",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "TAZONAM NF®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "TEARS NATURALE",
    laboratorio: "ALCON",
  },
  {
    nombre: "TEARS NATURALE FREE",
    laboratorio: "ALCON",
  },
  {
    nombre: "TEARS NATURALE II",
    laboratorio: "ALCON",
  },
  {
    nombre: "TECENTRIQ Inyectable",
    laboratorio: "ROCHE",
  },
  {
    nombre: "TEEN DERM AQUA",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "TEEN DERM GEL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "TEEN DERM K CONCENTRATE SERUM",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "TEGRETAL",
    laboratorio: "AXON PHARMA",
  },
  {
    nombre: "TEJANIA® Comprimidos Recubiertos",
    laboratorio: "GEDEON RICHTER",
  },
  {
    nombre: "TELLMI Comprimidos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TELLMI-D Comprimidos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TELMISARTAN COMPRIMIDOS 40 MG Comprimidos",
    laboratorio: "ASCEND LABORATORIES",
  },
  {
    nombre: "TELSET CREMA DERMICA 1%",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "TELZIR Comprimidos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "TELZIR Suspensión Oral",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "TEMODAL® Cápsulas",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "TEMPOTANE Polvo para Solución Oral",
    laboratorio: "RAFFO",
  },
  {
    nombre: "TENARON Comprimidos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "TENSIOMAX",
    laboratorio: "BAGO",
  },
  {
    nombre: "TENSODOX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "TENSODOX XR",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "TENSOLIV",
    laboratorio: "CHILE",
  },
  {
    nombre: "TERATOS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "TERBIMIC® Crema Tópica 1%",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "TERFEX CREMA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "TERLOC",
    laboratorio: "CHILE",
  },
  {
    nombre: "TERMO-NIOFEN",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "TESTISAN Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "TESTIS COMPOSITUM N Solución Inyectable",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "TESTOVITAL",
    laboratorio: "ABBOTT",
  },
  {
    nombre:
      "TETATOX TOXOIDE TETÁNICO PURIFICADO ADSORBIDO Suspensión Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "TETAVAX",
    laboratorio: "SANOFI PASTEUR",
  },
  {
    nombre: "TETMODIS Comprimidos",
    laboratorio: "AXON PHARMA",
  },
  {
    nombre: "TETRACICLINA CLORHIDRATO Cápsulas 500 mg",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "TETRACICLINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "TETRALYSAL Cápsulas",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "TEXGEL® Gel",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "THEALOZDUO® Gotas",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "THROMBOFLUX Polvo Liofilizado para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "THYROZOL",
    laboratorio: "MERCK",
  },
  {
    nombre: "TIADIS Comprimidos Recubiertos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "TIAMINA CLORHIDRATO",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "TIAMINA CLORHIDRATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "TIAMINA CLORHIDRATO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "TIENAM I.V.",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "TIENT IDEAL Base de Maquillaje Crema",
    laboratorio: "VICHY",
  },
  {
    nombre: "TIENT IDEAL Base de Maquillaje Fluido",
    laboratorio: "VICHY",
  },
  {
    nombre: "TIENT IDEAL Polvo Bronceante",
    laboratorio: "VICHY",
  },
  {
    nombre: "TIENT IDEAL Polvo Compacto",
    laboratorio: "VICHY",
  },
  {
    nombre: "TIGEL PH CONTROLADO Shampoo Neutro",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "TIGEL® T Shampoo",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "TIGINA®",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "TILDIEM",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "TILDIEM 90",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "TIMAROL",
    laboratorio: "CHILE",
  },
  {
    nombre: "TIMAROL PAR",
    laboratorio: "CHILE",
  },
  {
    nombre: "TIME FILLER",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "TIME FILLER EYES",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "TIME ZERO",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "TIMOPTOL-XE 0.5%® Solución Oftálmica",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre: "TINELLE",
    laboratorio: "SILESIA",
  },
  {
    nombre: "TINELLE 3 Comprimidos Recubiertos",
    laboratorio: "SILESIA",
  },
  {
    nombre: "T-INMUN UNGÜENTO",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "T-INMUN UNGÜENTO Cápsulas",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "TINOX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "TIOF",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TIOF PLUS",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TIOPENTAL SODICO 1 G Polvo para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "TIOPENTAL SODICO Polvo para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "TIOPENTAL SODICO 500 MG Polvo para Solución Inyectable 500 mg",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "TIORIDAZINA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "TIRIZ Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "TIVICAY Comprimidos Recubiertos 50 mg",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "TKC Shampoo 2%",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "TOBE",
    laboratorio: "CHILE",
  },
  {
    nombre: "TOBRADEX",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "TOBRAGAN®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "TOBRAGAN® D",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "TOBREX",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "TOCALM",
    laboratorio: "PRATER",
  },
  {
    nombre: "TOCEX® Jarabe",
    laboratorio: "BAGO",
  },
  {
    nombre: "TOL 12 FORTE",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TOL 12 ORAL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TOL 12 PLUS",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TOLEDERM CREMA HIDRO-CALMANTE",
    laboratorio: "URIAGE",
  },
  {
    nombre: "TOLERIANE Piel Normal a Mixta",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "TOLERIANE DERMO NETTOYANT Dermolimpiador",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "TOLERIANE RICHE Piel Seca",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "TOLERIANE SENSITIVE",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "TOLERIANE TEINT Maquillaje Corrector",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "TOLERIANE ULTRA Piel ultra sensible o piel alérgica",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "TOLERIANE ULTRA FLUIDO Fluido Calmante Intenso",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "TOLERIANE ULTRA OJOS",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "TOLEXINE GE Comprimidos 50 - 100 mg",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "TOL GIN",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TOLNAFTATO L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "TOL TOTAL Comprimidos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TOL TOTAL Jarabe",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TONARIL",
    laboratorio: "CHILE",
  },
  {
    nombre: "TONICO CALMANTE FISIOLOGICO Tónico Hidratante",
    laboratorio: "LA ROCHE-POSAY",
  },
  {
    nombre: "TONICO PASTEUR",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "TONICO PURETE THERMALE",
    laboratorio: "VICHY",
  },
  {
    nombre: "TONOPRIN® Cápsulas Blandas",
    laboratorio: "SANITAS",
  },
  {
    nombre: "TONOTENSIL",
    laboratorio: "CHILE",
  },
  {
    nombre: "TONOTENSIL D",
    laboratorio: "CHILE",
  },
  {
    nombre: "TONVAL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TOPAMAX® Comprimidos Recubiertos",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "TOPICTAL",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "TOPIVITAE® Comprimidos Recubiertos",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "TOPREL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "TOPTEAR",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "TORECAN",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "TORISEL® Solución inyectable",
    laboratorio: "PFIZER",
  },
  {
    nombre: "TOSEDRIN® Jarabe",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "TOUJEO® Solución Inyectable Vía S.C.",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "TOXOGONIN",
    laboratorio: "MERCK",
  },
  {
    nombre: "TRACELYTE® (OLIGOELEMENTOS) Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "TRACRIUM 50 mg/2.5 ml Solución Inyectable",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "TRACRIUM 25 mg/2.5 ml Solución Inyectable",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "TRACTOCILE®",
    laboratorio: "FERRING",
  },
  {
    nombre: "TRADIL®",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "TRADOX",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "TRADOX FT Comprimidos Dispersables/Masticables",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "TRAL GOTAS Solución para Gotas Orales 100 mg/ml",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "TRAL P Comprimidos Recubiertos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "TRAMADOL",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "TRAMADOL",
    laboratorio: "SANITAS",
  },
  {
    nombre: "TRAMADOL CLORHIDRATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "TRAMAL",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "TRAMAL LONG",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "TRAM-ONE Cápsulas con gránulos de liberación prolongada",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "TRANEXTON",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "TRANSTEC",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "TRATAMIENTO ANTI-TRANSPIRANTE EN CREMA 7 DIAS",
    laboratorio: "VICHY",
  },
  {
    nombre: "TRAUMEEL® Solución Oral para Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "TRAUMEEL® S Comprimidos Sublinguales",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "TRAUMEEL® S Pomada",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "TRAUMEEL® S Solución Inyectable",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "TRAVATAN",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "TRAVIATA",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "TRAVOF SP Solución Oftálmica",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TRAYENTA® Comprimidos Recubiertos",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "TRAYENTA® DUO Comprimidos Recubiertos",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre:
      "TRAZIDEX OFTENO®/TRAZIDEX UNGENA® Solución Oftálmica-Ungüento Oftálmico",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "TREAPLOS Solución Oftálmica",
    laboratorio: "NOVOPLOS",
  },
  {
    nombre: "TRELIBEC FORTE Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "3-A OFTENO® Solución",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "TRESIBA® Solución Inyectable en Dispositivo Prellenado",
    laboratorio: "NOVO NORDISK",
  },
  {
    nombre: "TREX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TREX FORTE",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TRIBESONA",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "TRICEF",
    laboratorio: "MERCK",
  },
  {
    nombre: "TRICIVIR® Comprimidos Recubiertos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "TRICOLON SIMPLE Solución para Gotas Orales",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "TRICOMAX 2",
    laboratorio: "CASSARA",
  },
  {
    nombre: "TRICOPLUS Comprimidos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "TRICOR®",
    laboratorio: "SANOFI-AVENTIS",
  },
  {
    nombre: "TRICOXANE® Loción Capilar 2%",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "TRICOXANE® Loción Capilar 5%",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "TRIGILAB®",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "TRILEPTAL",
    laboratorio: "AXON PHARMA",
  },
  {
    nombre: "TRILIPIX Cápsulas de liberación prolongada",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "TRI-LUMA",
    laboratorio: "GALDERMA",
  },
  {
    nombre: "TRIM 300",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TRIMEBUTINO 100 MG",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "TRINOMIA",
    laboratorio: "FERRER",
  },
  {
    nombre: "TRIOFENO Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TRIOVAL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TRIOVAL DIA Y NOCHE Sachet",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TRIOVAL DIA Y NOCHE",
    laboratorio: "SAVAL",
  },
  {
    nombre: "TRIOZOL® Gel Tópico",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "TRIQUILAR® Grageas",
    laboratorio: "BAYER",
  },
  {
    nombre: "TRITTICO",
    laboratorio: "CHILE",
  },
  {
    nombre: "TRITTICO AC",
    laboratorio: "CHILE",
  },
  {
    nombre: "TRIUMEQ Comprimidos Recubiertos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "TRIZOL Comprimidos",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "TROLIT",
    laboratorio: "SILESIA",
  },
  {
    nombre: "TRONSALAN",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "TROXXIL",
    laboratorio: "CHILE",
  },
  {
    nombre: "TROZOLET",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "TRU",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "TRULICITY® Solución Inyectable",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "TRUSOPT Gotas",
    laboratorio: "ALPES CHEMIE",
  },
  {
    nombre:
      "TRYPSAN® 0.5 g / 1 g Liofilizado para solución inyectable con solvente",
    laboratorio: "GRIFOLS",
  },
  {
    nombre: "TULOX ADULTO Jarabe",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "TULOX INFANTIL Jarabe",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "TURBOGESIC Crema",
    laboratorio: "CHILE",
  },
  {
    nombre: "TURMERIK 420 MG Cápsulas Blandas",
    laboratorio: "KNOP",
  },
  {
    nombre: "TUSBROX Jarabe",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "TUSIGEN",
    laboratorio: "BAGO",
  },
  {
    nombre: "TUSYN",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "TWINRIX®",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "TYGACIL®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "TYKERB Comprimidos Recubiertos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "TYPBAR VACUNA ANTITIFOIDEA Vacunas",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "TYPHIM VI",
    laboratorio: "SANOFI PASTEUR",
  },
  {
    nombre: "UBICHINON COMPOSITUM Solución Inyectable",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "ULCRATEX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ULCRATEX HP TRITERAPIA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ULTIBRO® BREEZHALER® Polvo para inhalación de cápsulas duras",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "ULTIVA 1 mg Liofilizado para Solución Inyectable",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ULTIVA 2 mg Liofilizado para Solución Inyectable",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ULTIVA 5 mg Liofilizado para Solución Inyectable",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ULTRA COREGA® Adhesivo en Polvo",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ULTRA COREGA® Crema Adhesiva Sabor Menta",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ULTRA COREGA® Crema Adhesiva Sin Sabor",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ULTRAGESIC Cápsulas de liberación prolongada",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "ULTRIMIN Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "UNASYNA",
    laboratorio: "PFIZER",
  },
  {
    nombre: "UNASYN® IM/IV",
    laboratorio: "PFIZER",
  },
  {
    nombre: "UNDERAN",
    laboratorio: "SAVAL",
  },
  {
    nombre: "UPLYSO Polvo para Infusión Intravenosa",
    laboratorio: "PFIZER",
  },
  {
    nombre: "UPTOYOU® Comprimidos Recubiertos",
    laboratorio: "PHARMAVITA",
  },
  {
    nombre: "URAZOL",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "URAZOLMR C.R.",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "UREADIN CREMA DE MANOS REPARADORA",
    laboratorio: "ISDIN",
  },
  {
    nombre: "UREADIN CREMA FACIAL ANTIARRUGAS SPF 15",
    laboratorio: "ISDIN",
  },
  {
    nombre: "UREADIN FACIAL GEL CREMA SPF 15 Gel Crema",
    laboratorio: "ISDIN",
  },
  {
    nombre: "UREADIN FACIAL PIEL SECA",
    laboratorio: "ISDIN",
  },
  {
    nombre: "UREADIN FUSION FLUID SPF30",
    laboratorio: "ISDIN",
  },
  {
    nombre: "UREADIN FUSION MELTING CREAM",
    laboratorio: "ISDIN",
  },
  {
    nombre: "UREADIN GEL CREMA CONTORNO DE OJOS ANTI-EDAD",
    laboratorio: "ISDIN",
  },
  {
    nombre: "UREADIN LOCION DERMOPEDIATRICA",
    laboratorio: "ISDIN",
  },
  {
    nombre: "UREADIN PODOS",
    laboratorio: "ISDIN",
  },
  {
    nombre: "UREADIN RX 10 LOCION",
    laboratorio: "ISDIN",
  },
  {
    nombre: "UREADIN RX 20 CREMA",
    laboratorio: "ISDIN",
  },
  {
    nombre: "UREADIN RX 20 LOCION",
    laboratorio: "ISDIN",
  },
  {
    nombre: "UREADIN RX 30 CREMA HIDRATANTE CORPORAL",
    laboratorio: "ISDIN",
  },
  {
    nombre: "UREADIN RX 40 GEL OIL EXFOLIANTE",
    laboratorio: "ISDIN",
  },
  {
    nombre: "UREADIN RX RD LOCION",
    laboratorio: "ISDIN",
  },
  {
    nombre: "UREADIN SPRAY & GO",
    laboratorio: "ISDIN",
  },
  {
    nombre: "URELIA® 50",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "URELIA® GEL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "UREN",
    laboratorio: "CHILE",
  },
  {
    nombre: "URICONT",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "URICONT TU",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "URODIAL",
    laboratorio: "BAGO",
  },
  {
    nombre: "UROGOTAN A",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "UROMITEXAN",
    laboratorio: "BAXTER",
  },
  {
    nombre: "UROSTOP® Comprimidos Recubiertos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "UROTRICEF",
    laboratorio: "MERCK",
  },
  {
    nombre: "URSOFALK Comprimidos 500 mg",
    laboratorio: "BIOTOSCANA",
  },
  {
    nombre: "URSOFALK Cápsulas",
    laboratorio: "BIOTOSCANA",
  },
  {
    nombre: "URSOFALK Suspensión",
    laboratorio: "BIOTOSCANA",
  },
  {
    nombre: "USENTA",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "UVEBLOCK 50 + FLUIDO INVISIBLE Fluido",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "UVEBLOCK 50 + FLUIDO TINTE Fluido",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "UVEBLOCK® DAY SECURE 50+",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "UVEBLOCK 30 CLEAN DERM Fluido",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "VACIDOX CREMA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "VACIDOX OVULOS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "VACUNA ANTIPOLIOMIELITICA INACTIVADA",
    laboratorio: "SANOFI PASTEUR",
  },
  {
    nombre:
      "VACUNA ANTITUBERCULOSIS BCG VIVA ATENUADA Polvo Liofilizado para Soluc. Inyect. c/solvente",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "VADIRAL",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "VAGIFEM",
    laboratorio: "SILESIA",
  },
  {
    nombre: "VALAPLEX",
    laboratorio: "CHILE",
  },
  {
    nombre: "VALAPLEX-D - VALAPLEX-D FORTE Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "VALAX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "VALAXAM",
    laboratorio: "SAVAL",
  },
  {
    nombre: "VALAXAM D® Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "VALAX D",
    laboratorio: "SAVAL",
  },
  {
    nombre: "VALAX D 80/12.5 Comprimidos Recubiertos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "VALCOTE Comprimidos con Recubrimiento Entérico",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "VALCOTE ER Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "VALCOTE I.V. Solución Inyectable",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "VALCOTE SPRINKLE Cápsulas",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "VALDOXAN Comprimidos Recubiertos",
    laboratorio: "FERRER",
  },
  {
    nombre: "VALDYNE® Cápsulas",
    laboratorio: "PFIZER",
  },
  {
    nombre: "VALERIX",
    laboratorio: "SILESIA",
  },
  {
    nombre: "VALIXA",
    laboratorio: "ROCHE",
  },
  {
    nombre: "VALNOC",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "VALPAX®",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "VALPAX DT",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "VALPIN",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "VALTREX Comprimidos Recubiertos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "VALUPASS",
    laboratorio: "KNOP",
  },
  {
    nombre: "VALVITAE Comprimidos Recubiertos",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "VALVITAE PLUS Comprimidos Recubiertos",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "VANCOMICINA Liofilizado para Solución Inyectable",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "VANDESS® AA ANTIAGE Cápsulas",
    laboratorio: "ANDES PHARMA",
  },
  {
    nombre: "VANDESS® ACONDICIONADOR Acondicionador",
    laboratorio: "ANDES PHARMA",
  },
  {
    nombre: "VANDESS® FN FANEREOS Cápsulas",
    laboratorio: "ANDES PHARMA",
  },
  {
    nombre: "VANDESS® PIEL Sobres",
    laboratorio: "ANDES PHARMA",
  },
  {
    nombre: "VANDESS® SHAMPOO Shampoo",
    laboratorio: "ANDES PHARMA",
  },
  {
    nombre: "VANISH",
    laboratorio: "SILESIA",
  },
  {
    nombre: "VANNAIR 80/4.5 mcg Suspensión para Inhalación Oral",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "VANNAIR 160/4.5 mcg Suspensión para Inhalación Oral",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "VANTUX Cápsulas",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "VANTUX ACONDICIONADOR NUTRI-REPARADOR Acondicionador",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "VANTUX MAX Cápsulas",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "VANTUX PLUS Polvo",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "VANTUX SHAMPOO ENERGIZANTE ANTICAIDA Shampoo",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "VAQTA®",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "VARGATEF Cápsulas Blandas",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "VARILRIX®",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "VARIPLEX",
    laboratorio: "KNOP",
  },
  {
    nombre: "VARIVAX® Vacuna liof.p/susp.iny. con solvente",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "VARTALAN",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "VARTALAN AM",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "VARTALAN AMD Cápsulas",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "VARTALAN D/ D FORTE/ D PLUS Comprimidos Recubiertos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "VASELINA EMULSIONADA L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "VASELINA ESTERIL Aceite Tópico",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "VASELINA LIQUIDA MEDICINAL",
    laboratorio: "MDK S.A.",
  },
  {
    nombre: "VASELINA LIQUIDA MEDICINAL L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "VASELINA MEDICINAL ESTERIL",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "VASTAREL MR Comprimidos Recubiertos",
    laboratorio: "FERRER",
  },
  {
    nombre: "VASTUS",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "VATANAL",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "VAXIGRIP ADULTA",
    laboratorio: "SANOFI PASTEUR",
  },
  {
    nombre: "VAXIGRIP PEDIATRICA",
    laboratorio: "SANOFI PASTEUR",
  },
  {
    nombre: "VECTIBIX Inyectable",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "VEDIPAL Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "VELASTISA ANTIESTRIAS GRIETAS DEL PEZON",
    laboratorio: "ISDIN",
  },
  {
    nombre: "VELASTISA ANTIESTRIAS POTENCIADOR DE ELASTICIDAD",
    laboratorio: "ISDIN",
  },
  {
    nombre: "VELASTISA ANTIESTRIAS REAFIRMANTE POST PARTO",
    laboratorio: "ISDIN",
  },
  {
    nombre: "VELASTISA HIGIENE INTIMA",
    laboratorio: "ISDIN",
  },
  {
    nombre: "VELCADE® Polvo Liofilizado para Solución Inyectable",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "VENARTEL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "VENLAVITAE® Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "GALENICUM CHILE",
  },
  {
    nombre: "VENLAX",
    laboratorio: "SAVAL",
  },
  {
    nombre: "VENLAX XR Comprimidos de Liberación Prolongada",
    laboratorio: "SAVAL",
  },
  {
    nombre: "VENOFER",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "VENOSMIL Cápsulas",
    laboratorio: "FAES FARMA",
  },
  {
    nombre: "VENOSMIL GEL Gel Tópico",
    laboratorio: "FAES FARMA",
  },
  {
    nombre: "VENTAVIS Solución para Inhalación",
    laboratorio: "BAYER",
  },
  {
    nombre: "VERALPRES - 160 MG Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "VERALPRES - 80 MG",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "VERAPAMILO CLORHIDRATO Solución Inyectable",
    laboratorio: "FRESENIUS KABI",
  },
  {
    nombre: "VERMOIL",
    laboratorio: "FARMO QUIMICA DEL PACIFICO",
  },
  {
    nombre: "VERORAB",
    laboratorio: "SANOFI PASTEUR",
  },
  {
    nombre: "VERRUFILM Solución Tópica",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "VERSATIS Parches",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "VERTIGOHEEL® Solución Oral para Gotas",
    laboratorio: "HEEL CHILE LTDA.",
  },
  {
    nombre: "VERTIUM Comprimidos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "VESICARE Comprimidos Recubiertos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "VESNIDAN",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "VEXA 20 Comprimidos Recubiertos",
    laboratorio: "CHILE",
  },
  {
    nombre: "VEXA CD Comprimidos",
    laboratorio: "CHILE",
  },
  {
    nombre: "VFEND® Comp. Rec. 50 y 200 mg - Liof. p/Sol. Iny. 200 mg",
    laboratorio: "PFIZER",
  },
  {
    nombre: "VIADIL",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "VIADIL COMPUESTO",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "VIADIL FORTE",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "VIAGRA®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "VIBRAMICINA",
    laboratorio: "PFIZER",
  },
  {
    nombre: "VICHY HOMME DESODORANTE Antitranspirante Roll-On",
    laboratorio: "VICHY",
  },
  {
    nombre: "VICHY HOMME DESODORANTE SPRAY Antitranspirante Spray",
    laboratorio: "VICHY",
  },
  {
    nombre: "VICHY HOMME ESPUMA ANTI-IRRITACIONES",
    laboratorio: "VICHY",
  },
  {
    nombre: "VICHY HOMME HIDRA MAG C HIDRATANTE FORTICANTE",
    laboratorio: "VICHY",
  },
  {
    nombre: "VICHY HOMME LIFTACTIV",
    laboratorio: "VICHY",
  },
  {
    nombre: "VICHY HOMME SENSI-BAUME Ca",
    laboratorio: "VICHY",
  },
  {
    nombre: "VICTOZA® Solución Inyectable en Dispositivo Prellenado",
    laboratorio: "NOVO NORDISK",
  },
  {
    nombre: "VIDAZA Frasco-Ampolla",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "VIDEX EC",
    laboratorio: "BRISTOL - MYERS SQUIBB",
  },
  {
    nombre: "VIGAMOX",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "VIGISOM® Comprimidos de Liberación Prolongada",
    laboratorio: "BIOPAS",
  },
  {
    nombre: "VIGOREX 50 MG",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "VIGOREX 100 MG",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "VIMAX",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "VIMOVO 500/20 mg Comprimidos Recubiertos de Liberación Modificada",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "VIMPAT® Comprimidos Recubiertos",
    laboratorio: "BIOPAS",
  },
  {
    nombre: "VINBLASTINA TEVA Frasco-Ampolla",
    laboratorio: "CHILE",
  },
  {
    nombre: "VINCRISTINA",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "VINCRISTINA SULFATO Inyectable",
    laboratorio: "PFIZER",
  },
  {
    nombre: "VINORELBINA Ampollas",
    laboratorio: "KAMPAR",
  },
  {
    nombre: "VINTIX",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "VIORA® Comprimidos Recubiertos",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "VIORA® 20 Comprimidos Recubiertos",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "VIORA CD® Comprimidos Recubiertos",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "VIPLAN FORTE GOTAS",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "VIPLAN GOTAS ORALES 5 MG/ML",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "VIPROXIL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "VIPROXIL COMPUESTO",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "VIRAMUNE® Comprimidos-Suspensión",
    laboratorio: "BOEHRINGER INGELHEIM",
  },
  {
    nombre: "VIRGAN Gel oftálmico",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "VIRONIDA",
    laboratorio: "CHILE",
  },
  {
    nombre: "VIRTA Gotas",
    laboratorio: "CHILE",
  },
  {
    nombre: "VISCOZYME",
    laboratorio: "ROCHE",
  },
  {
    nombre: "VISIDIC",
    laboratorio: "CHILE",
  },
  {
    nombre: "VISIONAL",
    laboratorio: "MAVER",
  },
  {
    nombre: "VISKALDIX Comprimidos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "VITABRAL Cápsulas Blandas",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "VITAFUSAL Solución Inyectable y para Perfusión",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "VITAKOLL Solución Inyectable y para Perfusión",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "VITAKRON A-Z® Cápsulas Blandas",
    laboratorio: "SANITAS",
  },
  {
    nombre: "VITAKRON DUO® Comprimidos-Cápsulas",
    laboratorio: "SANITAS",
  },
  {
    nombre: "VITAMINA ADC L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "VITAMINA A L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "VITAMINA B1, B6, B12",
    laboratorio: "BIOSANO",
  },
  {
    nombre: "VITAMINA C 2000 MG Comprimidos Efervescentes",
    laboratorio: "MERCK",
  },
  {
    nombre: "VITAMINA D3 800UI",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "VITAMINA E",
    laboratorio: "SANITAS",
  },
  {
    nombre: "VITAMINAS B1-B6-B12 10.000 L.CH.",
    laboratorio: "CHILE",
  },
  {
    nombre: "VITANAT",
    laboratorio: "CHILE",
  },
  {
    nombre: "VITANGO Comprimidos Recubiertos",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "VITA OIL ACEITE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "VITASTART",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "VITAYDE C",
    laboratorio: "SAVAL",
  },
  {
    nombre: "VITDE-500 Comprimidos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "VITDE-800 Comprimidos",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "VITDE® GOTAS Gotas",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "VITDE®-800 STRIP Láminas de Desintegración Oral",
    laboratorio: "PASTEUR",
  },
  {
    nombre: "VITERNUM",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "VITERNUM VITAMINADO",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "VITIS ALOE PASTA DENTIFRICA Pasta Dentífrica de uso diario",
    laboratorio: "DENTAID",
  },
  {
    nombre: "VITIS ANTICARIES Pasta Dental",
    laboratorio: "DENTAID",
  },
  {
    nombre: "VITIS BLANQUEADORA PASTA DENTIFRICA Pasta Dental",
    laboratorio: "DENTAID",
  },
  {
    nombre: "VITIS ENCIAS COLUTORIO",
    laboratorio: "DENTAID",
  },
  {
    nombre: "VITIS ENCIAS PASTA DENTIFRICA",
    laboratorio: "DENTAID",
  },
  {
    nombre: "VITIS ORTHODONTIC COLUTORIO",
    laboratorio: "DENTAID",
  },
  {
    nombre: "VITIS ORTHODONTIC PASTA DENTIFRICA",
    laboratorio: "DENTAID",
  },
  {
    nombre: "VITIS SENSIBLE COLUTORIO Colutorio",
    laboratorio: "DENTAID",
  },
  {
    nombre: "VITIS SENSIBLE PASTA DENTIFRICA Pasta Dental",
    laboratorio: "DENTAID",
  },
  {
    nombre: "VITOMIT® Comprimidos con Recubrimiento Entérico",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "VIVERA",
    laboratorio: "MERCK",
  },
  {
    nombre: "VIVIMEX Comprimidos",
    laboratorio: "ROYAL PHARMA",
  },
  {
    nombre: "VOKANAMET® Comprimidos Recubiertos",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "VOLIBRIS Comprimidos Recubiertos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "VOLTAREN Comprimidos Recubiertos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "VOLTAREN INYECTABLE Inyectable",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "VOLTAREN SR 75 / VOLTAREN RETARD Grageas de Liberación Prolongada",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "VONILLE 20® Comprimidos Recubiertos",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "VONILLE CD® Comprimidos Recubiertos",
    laboratorio: "EXELTIS CHILE",
  },
  {
    nombre: "VONTROL®",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "VORIFAS Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "VOTRIENT Comprimidos Recubiertos",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "VYTORIN",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "WALIX",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "WELLBUTRIN SR Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "WELLBUTRIN® XL Comp. Rec. de Liberación Extendida 150 mg",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "WELLBUTRIN® XL Comp. Rec. de Liberación Extendida 300 mg",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "WINASORB GOTAS Y JARABE",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "WINASORB FLEX",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "XALACOM® Solución Oftálmica",
    laboratorio: "PFIZER",
  },
  {
    nombre: "XALATAN® Solución Oftálmica",
    laboratorio: "PFIZER",
  },
  {
    nombre: "XALKORI Cápsulas",
    laboratorio: "PFIZER",
  },
  {
    nombre: "XELJANZ® Comprimidos Recubiertos 5 mg",
    laboratorio: "PFIZER",
  },
  {
    nombre: "XELODA",
    laboratorio: "ROCHE",
  },
  {
    nombre: "XEMOSE CERAT",
    laboratorio: "URIAGE",
  },
  {
    nombre: "XEMOSE CREMA RELIPIDIZANTE ANTIIRRITACIONES",
    laboratorio: "URIAGE",
  },
  {
    nombre: "XEMOSE STICK LABIAL",
    laboratorio: "URIAGE",
  },
  {
    nombre: "XEMOSE SYNDET LIMPIADOR SUAVE",
    laboratorio: "URIAGE",
  },
  {
    nombre: "XENICAL",
    laboratorio: "ROCHE",
  },
  {
    nombre: "XERAC AC",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "XERAGEL",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "XEROS® Colutorio",
    laboratorio: "DENTAID",
  },
  {
    nombre: "XEROS® Pasta Dentífrica",
    laboratorio: "DENTAID",
  },
  {
    nombre: "XEROS® Spray",
    laboratorio: "DENTAID",
  },
  {
    nombre: "XGEVA Solución Inyectable",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre:
      "XIGDUO XR 5/1000 MG Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre:
      "XIGDUO XR 10/1000 MG Comprimidos Recubiertos de Liberación Prolongada",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "XINDER Champú 0.05%",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "XINDER Crema Dérmica 0.05%",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "XINDER Espuma Tópica 0.05%",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "XINDER Loción Capilar 0.05%",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "XINDER Ungüento Dérmico 0.05%",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "XOLAIR",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "XOLOF",
    laboratorio: "SAVAL",
  },
  {
    nombre: "XOLOF D",
    laboratorio: "SAVAL",
  },
  {
    nombre: "XTANDI Cápsulas",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "XTRA VITALITY",
    laboratorio: "DISPOLAB",
  },
  {
    nombre: "XUMADOL®",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "XUMADOL® Solución para Gotas Orales",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "XUMADOL 1 G Comprimidos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "XUMER 60 mg Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "XUMER 90 mg Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "XUMER 120 mg Comprimidos Recubiertos",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "XUZAL 5 mg",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "XUZAL 2.5 mg/5 ml Solución Oral",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "XUZAL 5 mg/ml Solución para Gotas Orales",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "XYLISOL Spray Nasal",
    laboratorio: "CASSARA",
  },
  {
    nombre: "XYNTHA® Liofilizado para Solución Inyectable",
    laboratorio: "PFIZER",
  },
  {
    nombre: "YASTA Comprimidos Efervescentes",
    laboratorio: "BAYER",
  },
  {
    nombre: "YAZ Comprimidos Recubiertos",
    laboratorio: "BAYER",
  },
  {
    nombre: "YAZ® FLEX Comprimidos Recubiertos",
    laboratorio: "BAYER",
  },
  {
    nombre: "YERVOY Solución Inyectable",
    laboratorio: "BRISTOL - MYERS SQUIBB",
  },
  {
    nombre: "YES!",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "YES! HOT LUBRICANTE SEXUAL LIQUIDO",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "YES LUBRICANTE SEXUAL SABOR CHERRY",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "YES! GEL LUBRICANTE SEXUAL SABOR CHOCOLATE MENTA",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "YES ICE Lubricante Sexual",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "YONDELIS® Polvo Liofilizado para Solución Inyectable",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "YONKA",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ZABAK® Solución Oftálmica",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ZAFIN",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ZALDIAR/ZALDIAR EFERVESCENTE",
    laboratorio: "GRÜNENTHAL",
  },
  {
    nombre: "ZALEDOR-P",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "ZALEDOR SOLUCION ORAL GOTAS Solución Oral para Gotas",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "ZALUX",
    laboratorio: "CHILE",
  },
  {
    nombre: "ZAPINEX FT®",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ZARCOP Comprimidos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ZASTIC Jabón Barra",
    laboratorio: "FOUCHARD",
  },
  {
    nombre: "ZATROL",
    laboratorio: "ANDROMACO",
  },
  {
    nombre: "ZAVEDOS® Viales",
    laboratorio: "PFIZER",
  },
  {
    nombre: "ZAVIANA FS",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ZEBESTEN Solución Oftálmica",
    laboratorio: "SOPHIA",
  },
  {
    nombre: "ZEITE Comprimidos",
    laboratorio: "ABBOTT",
  },
  {
    nombre: "ZELBORAF",
    laboratorio: "ROCHE",
  },
  {
    nombre: "ZELDOX Cápsulas",
    laboratorio: "PFIZER",
  },
  {
    nombre: "ZEMPLAR Solución Inyectable",
    laboratorio: "ABBVIE",
  },
  {
    nombre: "ZENTEL",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ZENTIUS",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ZETAMAX Comprimidos Recubiertos 500 mg",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "ZETAMAX Polvo para Suspensión Oral",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "ZIAC",
    laboratorio: "MERCK",
  },
  {
    nombre: "ZIAGEN® Comprimidos",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ZIAGEN® Solución Oral 20 mg/ml",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ZIENT Comprimidos",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "ZILFIC 50 MG Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ZILFIC 100 MG Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ZILFIC FLASH Comprimidos Masticables",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ZINAC JABON BARRA Jabón",
    laboratorio: "FEELDERM",
  },
  {
    nombre: "ZINAC ESPUMA LIMPIADORA",
    laboratorio: "FEELDERM",
  },
  {
    nombre: "ZINC 15 MG Comprimidos",
    laboratorio: "MEDIPHARM",
  },
  {
    nombre: "ZINCOVIT",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "ZINCOVIT PLUS COMPRIMIDOS RECUBIERTOS Comprimidos Recubiertos",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "ZINCOVIT PLUS JARABE Jarabe",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "ZINCOVIT SOLUCION ORAL PARA GOTAS 5 mg/ml Gotas",
    laboratorio: "ITF LABOMED FARMACEUTICA",
  },
  {
    nombre: "ZINC PLUS",
    laboratorio: "NUTRACEUTICAL",
  },
  {
    nombre: "ZINNAT Comprimidos",
    laboratorio: "ETEX",
  },
  {
    nombre: "ZITHROMAX®",
    laboratorio: "PFIZER",
  },
  {
    nombre: "ZIVAL Comprimidos",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ZIVAL Solución",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ZIVENAD Comprimidos Recubiertos",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "ZIVENAD Polvo Liofilizado para Solución Inyectable",
    laboratorio: "SYNTHON CHILE",
  },
  {
    nombre: "ZOCAP Cápsulas",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "ZODOL",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ZOELY Comprimidos Recubiertos",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "ZOLADEX LA 10.8 mg Implante subcutáneo",
    laboratorio: "ASTRAZENECA",
  },
  {
    nombre: "ZOLMID",
    laboratorio: "CHILE",
  },
  {
    nombre: "ZOLTUM Comprimidos con Recubrimiento Entérico",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "ZOLTUM Liofilizado para Solución Inyectable",
    laboratorio: "TECNOFARMA",
  },
  {
    nombre: "ZOMEL Cápsulas",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ZOMEL HP TRITERAPIA",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ZOMEPRAL",
    laboratorio: "CHILE",
  },
  {
    nombre: "ZOMEPRAL INYECTABLE",
    laboratorio: "CHILE",
  },
  {
    nombre: "ZOMETA",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "ZOMETIC",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "ZOMIGREN® Comprimidos Recubiertos",
    laboratorio: "CHEMOPHARMA",
  },
  {
    nombre: "ZONIX Comprimidos Recubiertos",
    laboratorio: "MINTLAB",
  },
  {
    nombre: "ZOPERIL Comprimidos Recubiertos",
    laboratorio: "EUROFARMA",
  },
  {
    nombre: "ZOPICLONA",
    laboratorio: "INTERPHARMA S.A.",
  },
  {
    nombre: "ZOPINOM",
    laboratorio: "CHILE",
  },
  {
    nombre: "ZORVOLEX Cápsulas",
    laboratorio: "SAVAL",
  },
  {
    nombre: "ZOSTAVAX® Polvo Liofilizado para Solución Inyectable",
    laboratorio: "MSD CHILE",
  },
  {
    nombre: "ZOTEON",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "ZOTEON PODHALER® Cápsulas",
    laboratorio: "NOVARTIS",
  },
  {
    nombre: "ZOVIRAX® Crema",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ZOVIRAX® Formulaciones Orales",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ZOVIRAX® I.V. para Infusión",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ZOVIRAX® Ungüento Oftálmico",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ZUBAM® ODT Comprimidos Dispersables",
    laboratorio: "CHILE",
  },
  {
    nombre: "ZUBAM® ODT Comprimidos Dispersables",
    laboratorio: "CHILE",
  },
  {
    nombre: "ZUDENINA",
    laboratorio: "PHARMA INVESTI",
  },
  {
    nombre: "ZYLORIC Comprimidos 100 mg",
    laboratorio: "ASPEN",
  },
  {
    nombre: "ZYLORIC Comprimidos 300 mg",
    laboratorio: "ASPEN",
  },
  {
    nombre: "ZYMAR®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "ZYMAR® XD",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "ZYPRED®",
    laboratorio: "ALLERGAN",
  },
  {
    nombre: "ZYPREXA®",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "ZYPREXA® IM",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "ZYPREXA® ZYDIS",
    laboratorio: "ELI LILLY",
  },
  {
    nombre: "ZYRTEC",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ZYRTEC-D",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ZYRTEC SOLUCIÓN ORAL 1 MG/ML",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ZYRTEC SOLUCIÓN ORAL PARA GOTAS 10 MG/ML",
    laboratorio: "GLAXOSMITHKLINE",
  },
  {
    nombre: "ZYTIGA Cápsulas",
    laboratorio: "JANSSEN-CILAG",
  },
  {
    nombre: "ZYVOXTM",
    laboratorio: "PFIZER",
  },
];

export default arrMedicamentos;
