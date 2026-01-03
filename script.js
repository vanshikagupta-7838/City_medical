const medicineArray = [
  { id: 1, name: "Lignocaine HCl injection I.P 1%", category: "Anaesthetics" },
  { id: 2, name: "Lignocaine +nifedipine ointment", category: "Anaesthetics" },
  { id: 3, name: "Prilocaine lignocaine       inj", category: "Anaesthetics" },
  {
    id: 4,
    name: "Alprazolam tab I.P 0.25 mg,",
    category: "Preanaesthetic medications",
  },
  { id: 5, name: "Alprazolam tab I.P 0.5 mg", category: "" },
  {
    id: 6,
    name: "Amitriptyline tab I.P 10 mg",
    category: "Preanaesthetic medications",
  },
  {
    id: 7,
    name: "Midazolam   inj 5 mg/ml",
    category: "Preanaesthetic medications",
  },
  {
    id: 8,
    name: "Midazolam  I nj 5 mg/5 ml",
    category: "Preanaesthetic medications",
  },
  {
    id: 9,
    name: "Midazolam nasal spray 5mg/ml",
    category: "Preanaesthetic medications",
  },
  {
    id: 10,
    name: "Propantheline tab 15 mg",
    category: "Preanaesthetic medications",
  },
  { id: 11, name: "Paracetamol suppository 100 mg", category: "NSAIDS" },
  { id: 12, name: "Paracetamol inj 500 mg", category: "NSAIDS" },
  { id: 13, name: "Paracetamol tab 650 mg", category: "NSAIDS" },
  { id: 14, name: "Paracetamol tab 1000 mg", category: "NSAIDS" },
  { id: 15, name: "Paracetamol drops 100 mg/ml", category: "NSAIDS" },
  { id: 16, name: "Diclofenac sodium spray", category: "NSAIDS" },
  {
    id: 17,
    name: "Diclofenac sodium +  Serratiopeptidase Tab (50mg+10mg)",
    category: "NSAIDS",
  },
  { id: 18, name: "Diclofenac potassium tab 75 mg,", category: "NSAIDS" },
  { id: 19, name: "Diclofenac potassium tab 100 mg", category: "" },
  { id: 20, name: "Diclofenac potassium gel 1 %", category: "NSAIDS" },
  { id: 21, name: "Piroxicam  Inj 20mg/ml", category: "NSAIDS" },
  { id: 22, name: "Piroxicam     gel 0.5%", category: "NSAIDS" },
  { id: 23, name: "Piroxicam Tab I.P  20 mg", category: "" },
  { id: 24, name: "Mefenamic acid syr 100 mg/5ml", category: "NSAIDS" },
  { id: 25, name: "Mefenamic acid DT 500 mg", category: "" },
  { id: 26, name: "Mefenamic acid spray", category: "NSAIDS" },
  { id: 27, name: "Mefenamic acid capsules I.P 250 mg", category: "NSAIDS" },
  { id: 28, name: "Aceclofenac gel", category: "NSAIDS" },
  { id: 29, name: "Serratiopeptidase I.P  tab 5 mg,", category: "NSAIDS" },
  { id: 30, name: "Lornoxicam tab 8 mg,", category: "NSAIDS" },
  { id: 31, name: "Lornoxicam tab 4 mg", category: "" },
  { id: 32, name: "Etoricoxib tab 60 mg,", category: "NSAIDS" },
  { id: 33, name: "Etoricoxib tab 90mg,", category: "" },
  { id: 34, name: "Etoricoxib tab 120 mg", category: "" },
  { id: 35, name: "Tramadol tab 50 mg,", category: "OPIOID ANALGESICS" },
  { id: 36, name: "Tramadol inj 100 mg/ml", category: "OPIOID ANALGESICS" },
  { id: 37, name: "Pentazocine  inj I.P60mg/ml", category: "" },
  { id: 38, name: "Morphine inj 2 mg/ml", category: "OPIOID ANALGESICS" },
  { id: 39, name: "Fentanyl inj 50 mcg/ml", category: "OPIOID ANALGESICS" },
  { id: 40, name: "Febuxostat", category: "Drugs for Gout" },
  { id: 41, name: "Allopurinol tab I.P 100 mg,", category: "Drugs for Gout" },
  { id: 42, name: "Allopurinol tab I.P 300 mg", category: "" },
  { id: 43, name: "Colchicine tab 0.5 mg", category: "Drugs for Gout" },
  { id: 44, name: "Methotrexate tab  5 mg ,", category: "DMARDs" },
  { id: 45, name: "Methotrexate tab7.5 mg", category: "" },
  { id: 46, name: "Methotrexate tab 10 mg", category: "DMARDs" },
  { id: 47, name: "Azathioprine tab 25 mg,", category: "DMARDs" },
  { id: 48, name: "Azathioprine tab 50 mg", category: "" },
  { id: 49, name: "Hydroxy chloroquine tab 100 mg,", category: "DMARDs" },
  { id: 50, name: "Sulfasalazine tab 1000 mg", category: "" },
  { id: 51, name: "Diacerein cap 50 mg", category: "DMARDs" },
  { id: 52, name: "Adrenaline 1 in 1000", category: "ANTIALLERGICS" },
  { id: 53, name: "Pheniramine maleate", category: "ANTIALLERGICS" },
  { id: 54, name: "Sodium chromoglycate eye drops", category: "ANTIALLERGICS" },
  { id: 55, name: "Ebastine  tab 10 mg,", category: "ANTIALLERGICS" },
  { id: 56, name: "Ebastine  tab 20 mg", category: "" },
  { id: 57, name: "Loratadine  tab 5mg", category: "ANTIALLERGICS" },
  { id: 58, name: "Desloratadine  tab 5mg", category: "ANTIALLERGICS" },
  { id: 59, name: "Rupatadine tab 10 mg", category: "ANTIALLERGICS" },
  { id: 60, name: "Olopatadine  tab 5 mg", category: "ANTIALLERGICS" },
  {
    id: 61,
    name: "Azelastine nasal spray 140 mcg/puff",
    category: "ANTIALLERGICS",
  },
  { id: 62, name: "Diazepam tab I.P  5 mg,", category: "ANTIEPILEPTICS" },
  { id: 63, name: "Diazepam tab I.P 10 mg", category: "" },
  { id: 64, name: "Phenobarbitone syr 30 mg/5ml", category: "ANTIEPILEPTICS" },
  { id: 65, name: "Phenytoin Tab I.P  50 mg,", category: "ANTIEPILEPTICS" },
  { id: 66, name: "Phenytoin Inj I.P  2 ml amp", category: "ANTIEPILEPTICS" },
  { id: 67, name: "Sodium valproate inj 300 mg/ml", category: "" },
  { id: 68, name: "Levetiracetam tab 250 mg", category: "ANTIEPILEPTICS" },
  { id: 69, name: "Levetiracetam inj  500 mg/2ml", category: "ANTIEPILEPTICS" },
  { id: 70, name: "Gabapentin 300mg", category: "" },
  { id: 71, name: "Gabapentin 400mg", category: "" },
  { id: 72, name: "Lorazepam", category: "ANTIEPILEPTICS" },
  { id: 73, name: "Clobazam  tab10 mg", category: "" },
  {
    id: 74,
    name: "Mebendazole tab I.P 100 mg",
    category: "ANTIHELMINTHIC AGENTS",
  },
  { id: 75, name: "Mebendazole tab 200 mg", category: "ANTIHELMINTHIC AGENTS" },
  {
    id: 76,
    name: "Piperazine citrate syr  I.P 750 mg/5 ml",
    category: "ANTIHELMINTHIC AGENTS",
  },
  { id: 77, name: "DEC tab I.P 50 mg,", category: "ANTIFILARIALS" },
  { id: 78, name: "Ivermectin tab 12 mg", category: "ANTIFILARIALS" },
  { id: 79, name: "Ampicillin  cap 1000 mg", category: "ANTIBACTERIALS" },
  { id: 80, name: "Amoxycillin  DT I.P 250 mg", category: "" },
  {
    id: 81,
    name: "Amoxycillin + Clavulanic acid dry syr [500+ 125]",
    category: "ANTIBACTERIALS",
  },
  {
    id: 82,
    name: "Amoxycillin + Clavulanic acid tab 228.5,457, 1000mg",
    category: "ANTIBACTERIALS",
  },
  {
    id: 83,
    name: "Amoxycillin + Clavulanic acid inj  0.3g/10ml",
    category: "ANTIBACTERIALS",
  },
  {
    id: 84,
    name: "Amoxycillin + Clavulanic acid inj 0.6g/10 ml",
    category: "",
  },
  {
    id: 85,
    name: "Crystalline penicillin inj 10 lakh",
    category: "ANTIBACTERIALS",
  },
  { id: 86, name: "Penicillin V tab 500 mg", category: "ANTIBACTERIALS" },
  { id: 87, name: "Penicillin V tab 125 mg", category: "ANTIBACTERIALS" },
  {
    id: 88,
    name: "Ampicillin + cloxacillin tab [250+ 250 mg]",
    category: "ANTIBACTERIALS",
  },
  { id: 89, name: "Cefuroxime syr 125 mg/5ml", category: "ANTIBACTERIALS" },
  { id: 90, name: "Cefuroxime tab 250 mg", category: "ANTIBACTERIALS" },
  { id: 91, name: "Cefuroxime inj 500 mg", category: "ANTIBACTERIALS" },
  { id: 92, name: "Cefuroxime inj 250 mg", category: "" },
  { id: 93, name: "Cefixime syr 50mg/5ml", category: "ANTIBACTERIALS" },
  { id: 94, name: "Cefixime tab I.P  100 mg", category: "ANTIBACTERIALS" },
  { id: 95, name: "Cefixime tab 250 mg", category: "ANTIBACTERIALS" },
  {
    id: 96,
    name: "Cefadroxyl syr I.P  125 mg/5ml",
    category: "ANTIBACTERIALS",
  },
  { id: 97, name: "Cefadroxyl tab 250 mg", category: "ANTIBACTERIALS" },
  { id: 98, name: "Cephalexin syr I.P 125 mg/5ml", category: "ANTIBACTERIALS" },
  {
    id: 99,
    name: "Cephalexin syr I.P 250 mg/5 ml",
    category: "ANTIBACTERIALS",
  },
  { id: 100, name: "Cephalexin tab 250 mg I.P", category: "ANTIBACTERIALS" },
  { id: 101, name: "Cephalexin tab 500 mg I.P", category: "ANTIBACTERIALS" },
  { id: 102, name: "Ceftriaxone inj 500 mg I.P", category: "ANTIBACTERIALS" },
  { id: 103, name: "Ceftriaxone  inj 1 g I.P", category: "ANTIBACTERIALS" },
  { id: 104, name: "Ceftriaxone  in j 2 g I.P", category: "ANTIBACTERIALS" },
  { id: 105, name: "Cefepime   inj 500 mg I.P", category: "ANTIBACTERIALS" },
  { id: 106, name: "Ceftazidime  inj 500 mg I.P", category: "ANTIBACTERIALS" },
  { id: 107, name: "Ceftazidime inj 1 g  I.P", category: "ANTIBACTERIALS" },
  { id: 108, name: "Ceftazidime inj 2 g", category: "ANTIBACTERIALS" },
  { id: 109, name: "Cefotaxime inj    500 mg", category: "ANTIBACTERIALS" },
  { id: 110, name: "Cefotaxime inj 1 g I.P", category: "ANTIBACTERIALS" },
  { id: 111, name: "Cefotaxime inj 2 g I.P", category: "ANTIBACTERIALS" },
  { id: 112, name: "Meropenem    inj 1 g", category: "ANTIBACTERIALS" },
  { id: 113, name: "Meropenem inj 500 mg", category: "ANTIBACTERIALS" },
  { id: 114, name: "Cefditoren   inj", category: "ANTIBACTERIALS" },
  { id: 115, name: "Cefazolin  inj", category: "ANTIBACTERIALS" },
  {
    id: 116,
    name: "Cefoperazone inj 1g,Cefoperazone inj2 g",
    category: "ANTIBACTERIALS",
  },
  {
    id: 117,
    name: "Cefpodoxime proxetil  tab 100 mg",
    category: "ANTIBACTERIALS",
  },
  {
    id: 118,
    name: "Cefpodoxime  + clavulanic acid tab 200 mg, 125 mg",
    category: "ANTIBACTERIALS",
  },
  {
    id: 119,
    name: "Ceftriaxone + sulbactam ( 1+ 0.5) g",
    category: "ANTIBACTERIALS",
  },
  { id: 120, name: "Piperacillin", category: "ANTIBACTERIALS" },
  { id: 121, name: "Piperacillin  inj 1500mg/ml", category: "ANTIBACTERIALS" },
  { id: 122, name: "Piperacillin    inj 2 g", category: "ANTIBACTERIALS" },
  { id: 123, name: "Doxycycline cap  200 mg I.P", category: "ANTIBACTERIALS" },
  { id: 124, name: "Gentamicin inj 40 mg/ml", category: "ANTIBACTERIALS" },
  { id: 125, name: "Gentamicin  inj 60 mg/ml", category: "ANTIBACTERIALS" },
  { id: 126, name: "Amikacin inj 1 g/2ml", category: "ANTIBACTERIALS" },
  { id: 127, name: "Amikacin  inj 100 mg  I.P", category: "ANTIBACTERIALS" },
  { id: 128, name: "Amikacin  inj 150 mg", category: "ANTIBACTERIALS" },
  { id: 129, name: "Amikacin inj 250 mg", category: "ANTIBACTERIALS" },
  { id: 130, name: "Vancomycin inj 100 mg/ml", category: "ANTIBACTERIALS" },
  { id: 131, name: "Ciprofloxacin  tab 1 g", category: "ANTIBACTERIALS" },
  { id: 132, name: "Tinidazole  tab I.P 1 g", category: "" },
  { id: 133, name: "Ornidazole tab 500 mg  I.P", category: "ANTI INFECTIVE" },
  { id: 134, name: "Linezolid  inj 100 mg/100 ml", category: "ANTIBACTERIALS" },
  { id: 135, name: "Linezolid  tab 200 mg I.P", category: "ANTIBACTERIALS" },
  { id: 136, name: "Teicoplanin inj 200 mg", category: "ANTIBACTERIALS" },
  {
    id: 137,
    name: "Azithromycin  syr 200 mg/5ml  I.P",
    category: "ANTIBACTERIALS",
  },
  { id: 138, name: "Erythromycin syr 125 mg/5ml", category: "ANTIBACTERIALS" },
  {
    id: 139,
    name: "Clarithromycin tab 250 mg  I.P",
    category: "ANTIBACTERIALS",
  },
  {
    id: 140,
    name: "Clindamycin  vaginal tablet 200 mg",
    category: "ANTIBACTERIALS",
  },
  { id: 141, name: "Clindamycin inj 300 mg", category: "ANTIBACTERIALS" },
  { id: 142, name: "Clindamycin cap 150 mg  I.P", category: "ANTIBACTERIALS" },
  {
    id: 143,
    name: "Chloramphenicoleye drops 0.05 % w/v I.P",
    category: "ANTIBACTERIALS",
  },
  {
    id: 144,
    name: "Nalidixic acid tab 250 mg,500 mg",
    category: "ANTIBACTERIALS",
  },
  {
    id: 145,
    name: "Nalidixic acid syr  300 mg/5ml",
    category: "ANTIBACTERIALS",
  },
  {
    id: 146,
    name: "Nitrofurantoin tab 50 mg  I.P",
    category: "ANTIBACTERIALS",
  },
  { id: 147, name: "Bacitracin ointment", category: "ANTIBACTERIALS" },
  {
    id: 148,
    name: "Roxithromycin tab 150 mg  I.P",
    category: "ANTIBACTERIALS",
  },
  { id: 149, name: "Ofloxacin tab 400 mg", category: "ANTIBACTERIALS" },
  { id: 150, name: "Levofloxacin  tab 750 mg", category: "ANTIBACTERIALS" },
  { id: 151, name: "Minocycline tab 100 mg", category: "ANTIBACTERIALS" },
  {
    id: 152,
    name: "Povidone iodine +metronidazole ointment  ( 5% +1%)",
    category: "ANTIBACTERIALS",
  },
  { id: 153, name: "Fusidic acid  cream 2 %", category: "ANTIBACTERIALS" },
  { id: 154, name: "Rifaximin  tab", category: "ANTIBACTERIALS" },
  { id: 155, name: "Cotrimoxazole syr 40 mg/5 ml", category: "ANTI INFECTIVE" },
  {
    id: 156,
    name: "Cotrimoxazole syr ( 200 + 40 ) mg/5ml",
    category: "ANTI INFECTIVE",
  },
  { id: 157, name: "INH Tablet :300mg  I.P", category: "ANTI -TB DRUGS" },
  { id: 158, name: "Rifampicin Tablet :450mg", category: "ANTI -TB DRUGS" },
  { id: 159, name: "Rifampicin tab 600 mg", category: "ANTI -TB DRUGS" },
  {
    id: 160,
    name: "Ethambutol Tablet :400mg  I.P",
    category: "ANTI -TB DRUGS",
  },
  {
    id: 161,
    name: "Pyrazinamide Tablet :500mg  I.P",
    category: "ANTI -TB DRUGS",
  },
  {
    id: 162,
    name: "Streptomycin Injection:1gm  I.P",
    category: "ANTI -TB DRUGS",
  },
  { id: 163, name: "Clotrimazole vaginal tab 100mg", category: "ANTIFUNGAL" },
  { id: 164, name: "Clotrimazole vaginal tab 500mg", category: "" },
  { id: 165, name: "Fluconazole tab 100 mg  I.P", category: "ANTIFUNGAL" },
  { id: 166, name: "Fluconazole tab 50 mg  I.P", category: "ANTIFUNGAL" },
  { id: 167, name: "Itraconazole cap  100 mg", category: "ANTIFUNGAL" },
  { id: 168, name: "Amphotericin inj 50 mg/ml", category: "ANTIFUNGAL" },
  {
    id: 169,
    name: "Amphotericin inj colloid dispersion",
    category: "ANTIFUNGAL",
  },
  { id: 170, name: "Voriconazole inj", category: "ANTIFUNGAL" },
  { id: 171, name: "Acyclovir tab 200 mg  I.P", category: "ANTIVIRAL DRUGS" },
  { id: 172, name: "Acyclovir tab 400 mg  I.P", category: "ANTIVIRAL DRUGS" },
  { id: 173, name: "Primaquine tab  I.P", category: "ANTIMALARIAL DRUGS" },
  { id: 174, name: "Artesunate tab 60 mg", category: "ANTIMALARIAL DRUGS" },
  { id: 175, name: "Artesunate tab120 mg", category: "ANTIMALARIAL DRUGS" },
  { id: 176, name: "Propranolol LA 80 mg", category: "ANTI MIGRAINE DRUGS" },
  {
    id: 177,
    name: "Cyproheptadine tab 2 mg,",
    category: "ANTI MIGRAINE DRUGS",
  },
  { id: 178, name: "Cyproheptadine tab 4 mg", category: "" },
  { id: 179, name: "Sumatriptan tab 25 mg", category: "ANTI MIGRAINE DRUGS" },
  {
    id: 180,
    name: "Sumatriptan s/c inj 6 mg",
    category: "ANTI MIGRAINE DRUGS",
  },
  {
    id: 181,
    name: "Ergotamine tab  1 mg I.P",
    category: "ANTI MIGRAINE DRUGS",
  },
  {
    id: 182,
    name: "Ergotamine sublingual tab",
    category: "ANTI MIGRAINE DRUGS",
  },
  {
    id: 183,
    name: "Cyclophosphamide Inj 200 mg  I.P",
    category: "ANTICANCER DRUGS",
  },
  {
    id: 184,
    name: "Cyclophosphamide inj 500 mg  I.P",
    category: "ANTICANCER DRUGS",
  },
  { id: 185, name: "Cyclosporine", category: "IMMUNOSUPPRESSANT" },
  {
    id: 186,
    name: "Bevacizumab inj 1000mg/4 ml",
    category: "MONOCLONAL ANTIBODY",
  },
  {
    id: 187,
    name: "Human Insulin plain 100 m IU/ml",
    category: "HORMONES ANDANTIHORMONES",
  },
  { id: 188, name: "Human Insulin NPH", category: "HORMONES ANDANTIHORMONES" },
  {
    id: 189,
    name: "Human Insulin Lente",
    category: "HORMONES ANDANTIHORMONES",
  },
  {
    id: 190,
    name: "Human Insulin analogues- aspart,lispro",
    category: "HORMONES ANDANTIHORMONES",
  },
  { id: 191, name: "Terlipressin inj", category: "HORMONES ANDANTIHORMONES" },
  {
    id: 192,
    name: "Prednisolone inj I.P  20 mg/ ml ,",
    category: "HORMONES ANDANTIHORMONES",
  },
  { id: 193, name: "Methyl prednisolone inj 125 mg", category: "" },
  {
    id: 194,
    name: "Methyl prednisolone tab I.P  4 mg,Methyl prednisolone tab I.P  16 mg",
    category: "HORMONES AND ANTIHORMONES",
  },
  {
    id: 195,
    name: "Betamethasone inj 12 mg/ ml",
    category: "HORMONES ANDANTIHORMONES",
  },
  {
    id: 196,
    name: "Betamethasone tab I.P  0.5mg,Betamethasone tab I.P 1 mg",
    category: "HORMONES AND ANTIHORMONES",
  },
  {
    id: 197,
    name: "Hydrocortisone tab",
    category: "HORMONES AND ANTIHORMONES",
  },
  {
    id: 198,
    name: "L thyroxinetab 200 mcg",
    category: "HORMONES ANDANTIHORMONES",
  },
  { id: 199, name: "Carbimazole tab I.P 20 mg", category: "" },
  { id: 200, name: "Propyl thio uracil tab100 mg", category: "" },
  {
    id: 201,
    name: "Natural progesterone tab 500 mg",
    category: "HORMONES ANDANTIHORMONES",
  },
  {
    id: 202,
    name: "Alpha hydroxy progesterone caproate inj",
    category: "HORMONES AND ANTIHORMONES",
  },
  {
    id: 203,
    name: "Ormeloxifene  HCl tab I.P 30 mg",
    category: "HORMONES AND ANTIHORMONES",
  },
  {
    id: 204,
    name: "Erythropoetin Recombinant inj",
    category: "HORMONES AND ANTIHORMONES",
  },
  { id: 205, name: "Erythropoetin Recombinant inj 2000  IU", category: "" },
  { id: 206, name: "Cholecalciferol", category: "HORMONES AND ANTIHORMONES" },
  {
    id: 207,
    name: "Triamcinolone acetonide nasal spray   110 mcg",
    category: "HORMONES AND ANTIHORMONES",
  },
  {
    id: 208,
    name: "Triamcinolone acetonide buccal paste 0.1 %",
    category: "HORMONES AND ANTIHORMONES",
  },
  {
    id: 209,
    name: "Beclomethasone nasal spray 50 mcg",
    category: "HORMONES ANDANTIHORMONES",
  },
  {
    id: 210,
    name: "Fluticasone propionate Nasal spray 50mcg",
    category: "HORMONES AND ANTIHORMONES",
  },
  {
    id: 211,
    name: "Fluticasone furoate Nasal spray 27.5mcg",
    category: "HORMONES AND ANTIHORMONES",
  },
  {
    id: 212,
    name: "Mometasone furoate Nasal spray 50mcg",
    category: "HORMONES AND ANTIHORMONES",
  },
  {
    id: 213,
    name: "Mometasone furoate cream 0. 1%",
    category: "HORMONES ANDANTIHORMONES",
  },
  {
    id: 214,
    name: "Budesonide aqueous Nasal spray 50mcg",
    category: "HORMONES AND ANTIHORMONES",
  },
  {
    id: 215,
    name: "Ciclesonide Nasal spray 50mcg",
    category: "HORMONES ANDANTIHORMONES",
  },
  {
    id: 218,
    name: "Alendronate + Cholecalceferol tab 70 mg/1500 IU",
    category: "HORMONES AND ANTIHORMONES",
  },
  {
    id: 219,
    name: "Calcitonin nasal spray  200 IU/ puff",
    category: "HORMONES ANDANTIHORMONES",
  },
  { id: 220, name: "Teriparatide inj", category: "HORMONES ANDANTIHORMONES" },
  { id: 221, name: "Levodopa+carbidopa", category: "ANTIPARKINSONISM DRUGS" },
  {
    id: 222,
    name: "Cabergoline tab 0.25 mg,",
    category: "ANTIPARKINSONISM DRUGS",
  },
  {
    id: 223,
    name: "Levodopa  500 mg tab I.P",
    category: "ANTIPARKINSONISM DRUGS",
  },
  { id: 224, name: "Iron syr", category: "ANTIANAEMIC DRUGS" },
  {
    id: 225,
    name: "Ferrous sulphate  tab I.P 200 mg",
    category: "ANTIANAEMIC DRUGS",
  },
  {
    id: 226,
    name: "Ferrous fumarate tab 300 mg",
    category: "ANTIANAEMIC DRUGS",
  },
  { id: 227, name: "Sodium feredetate", category: "ANTIANAEMIC DRUGS" },
  { id: 228, name: "Carbonyl iron", category: "ANTIANAEMIC DRUGS" },
  { id: 229, name: "Iron dextrose", category: "ANTIANAEMIC DRUGS" },
  { id: 230, name: "Folic acid    tab 100 mcg I.P", category: "" },
  { id: 231, name: "Iron + folic acid tab", category: "ANTIANAEMIC DRUGS" },
  { id: 232, name: "Factor 8", category: "BLOOD PRODUCTS" },
  { id: 233, name: "Factor9", category: "BLOOD PRODUCTS" },
  { id: 234, name: "IV IG 2.5 g,", category: "BLOOD PRODUCTS" },
  { id: 235, name: "IV IG 5 g", category: "" },
  { id: 236, name: "Haes steril", category: "PLASMA EXPANDERS" },
  { id: 237, name: "Colloids", category: "PLASMA EXPANDERS" },
  {
    id: 238,
    name: "Tranexemic acid tab 750 mg, 1 g",
    category: "DRUGS ACTING ON BLOOD",
  },
  {
    id: 239,
    name: "Ethamsylate tab 250 mg,Ethamsylate tab500 mg",
    category: "DRUGS ACTING ON BLOOD",
  },
  {
    id: 240,
    name: "Warfarin sodium tab 1 mg,",
    category: "DRUGS ACTING ON BLOOD",
  },
  { id: 241, name: "Glyceryl trinitrate Tab", category: "" },
  {
    id: 242,
    name: "Glyceryl trinitratepatch5 mg, 10 mg",
    category: "Antianginal",
  },
  { id: 243, name: "Isosorbide MononitrateTab 30mg", category: "" },
  { id: 244, name: "Diltiazem Tab.I.P60mg", category: "" },
  { id: 245, name: "Diltiazem gel 2%", category: "antihaemorrhoidal" },
  {
    id: 246,
    name: "Acetyl salicylic acid Tab.I.P  75/Acetyl salicylic acid Tab.I.P 150mg",
    category: "antiplatelet",
  },
  { id: 247, name: "Clopidogrel Tab.75mg", category: "antiplatelet" },
  { id: 248, name: "Heparin inj 5000 iu", category: "antiplatelet" },
  { id: 249, name: "Low molecular weight heparin", category: "antiplatelet" },
  { id: 250, name: "Amiodarone Tab.I.P 200mg", category: "antiarrhythmic" },
  { id: 251, name: "Atropine inj", category: "antiarrhythmic" },
  { id: 252, name: "Atropine 100ml/infusion", category: "antiarrhythmic" },
  { id: 253, name: "Ramipril Tab10mg", category: "antihypertensive" },
  { id: 254, name: "TelmisartanTabI.P 80mg", category: "antihypertensive" },
  { id: 255, name: "IndapamideTab 2.5mg  I.P", category: "antihypertensive" },
  { id: 256, name: "ChlorthiazideTab 12.5mg", category: "antihypertensive" },
  { id: 257, name: "Prazosin", category: "antihypertensive" },
  { id: 258, name: "Nifedipine TabI.P .5mg", category: "antihypertensive" },
  {
    id: 259,
    name: "Nifedipine SR  tab I.P 10mg",
    category: "antihypertensive",
  },
  { id: 260, name: "Nifedipine ointment", category: "antihaemorrhoidal" },
  { id: 261, name: "Labetalol", category: "antihypertensive" },
  {
    id: 262,
    name: "Labetalol Injection 20mg/4ml,",
    category: "antihypertensive",
  },
  { id: 263, name: "Hydralazine", category: "antihypertensive" },
  { id: 264, name: "Hydralazine Injection 10mg", category: "" },
  { id: 265, name: "Hydralazine Tab.25mg,50mg", category: "antihypertensive" },
  { id: 266, name: "Lisinopril", category: "antihypertensive" },
  { id: 267, name: "Nicardipine Injection", category: "antihypertensive" },
  { id: 268, name: "/50/,500mg", category: "" },
  { id: 269, name: "Frusemide Inj", category: "antihypertensive" },
  { id: 270, name: "Frusemide syrup", category: "antihypertensive" },
  { id: 271, name: "Frusemide drops 10mg/5 ml", category: "antihypertensive" },
  { id: 272, name: "Digoxin drops 50 mcg/ml", category: "antihypertensive" },
  { id: 273, name: "Digoxin elixir 40 mg", category: "antihypertensive" },
  { id: 274, name: "Glycerol syp 100 ml", category: "osmotic diuretic" },
  {
    id: 275,
    name: "Dopamine inj 200mg/5ml,40 mg/5 ml",
    category: "drugs in heart failure",
  },
  {
    id: 276,
    name: "Dobutamine inj 250mg/5ml",
    category: "drugs in heart failure",
  },
  { id: 277, name: "Adrenaline inj", category: "drugs in heart failure" },
  {
    id: 278,
    name: "Noradrenaline inj2 mg/1ml",
    category: "drugs in heart failure",
  },
  {
    id: 279,
    name: "Milrinone inj 10mg/10 ml",
    category: "drugs in heart failure",
  },
  {
    id: 280,
    name: "Torsemide 10 /20/100 mg tab",
    category: "drugs in heart failure",
  },
  { id: 281, name: "Inj Prostaglandin E1", category: "drugs in heart failure" },
  {
    id: 282,
    name: "Atorvastatin  tab 5///40/80 mg",
    category: "hypolipidemic",
  },
  { id: 283, name: "Fenofibrate", category: "hypolipidemic" },
  { id: 284, name: "Salicylic acid ointment", category: "topical medicines" },
  { id: 285, name: "Salicylic acid ointment 6%", category: "" },
  { id: 286, name: "", category: "topical medicines" },
  { id: 287, name: "Metronidazole gel", category: "topical medicines" },
  { id: 288, name: "Metronidazole oral gel", category: "topical medicines" },
  { id: 289, name: "Povidone iodine", category: "topical medicines" },
  { id: 290, name: "Povidone iodine ointment", category: "topical medicines" },
  {
    id: 291,
    name: "Povidone iodine solution  I.P",
    category: "topical medicines",
  },
  { id: 292, name: "Clotrimazole", category: "topical medicines" },
  {
    id: 293,
    name: "Clotrimazole vaginal tab 1000/200/600 mg",
    category: "topical medicines",
  },
  {
    id: 294,
    name: "Clotrimazole topical cream  1%, 2%",
    category: "topical medicines",
  },
  { id: 295, name: "Clotrimazole  cream 1%", category: "topical medicines" },
  { id: 296, name: "Permethrin", category: "topical medicines" },
  {
    id: 297,
    name: "Hydrocortisone ointment 1%",
    category: "topical medicines",
  },
  { id: 298, name: "plain vaseline", category: "topical medicines" },
  { id: 299, name: "Emmolients", category: "topical medicines" },
  { id: 300, name: "Pantoprazole", category: "anti peptic ulcer" },
  { id: 301, name: "Pantoprazole tab 20/", category: "anti peptic ulcer" },
  {
    id: 302,
    name: "Pantoprazole sustained release  release tab 40 mg  I.P",
    category: "anti peptic ulcer",
  },
  { id: 303, name: "Ranitidine inj 150 mg/ml", category: "anti peptic ulcer" },
  { id: 304, name: "Ranitidine inj 50 mg /ml", category: "" },
  { id: 305, name: "Rabeprazole tab 20 mg", category: "anti peptic ulcer" },
  {
    id: 306,
    name: "Aluminium /Mg hydroxide(antacid) tab",
    category: "anti peptic ulcer",
  },
  {
    id: 307,
    name: "Aluminium /Mg hydroxide(antacid) syrup",
    category: "anti peptic ulcer",
  },
  { id: 308, name: "Lactobacillus tab", category: "anti peptic ulcer" },
  { id: 309, name: "Omeprazole cap 40 mg", category: "" },
  {
    id: 310,
    name: "Omeprazole+domperidone cap 20/10 mg",
    category: "anti peptic ulcer",
  },
  {
    id: 311,
    name: "Rabeprazole+ domperidone cap 20 /10 mg",
    category: "anti peptic ulcer",
  },
  { id: 312, name: "Lanzoprazole 15 mg tab", category: "anti peptic ulcer" },
  { id: 313, name: "Lanzoprazole DT  ,4 mg", category: "anti peptic ulcer" },
  {
    id: 314,
    name: "Domperidone mouth dissolving tab 10mg",
    category: "antiemetic",
  },
  { id: 315, name: "Domperidone syrup 1mg/ml,", category: "antiemetic" },
  { id: 316, name: "Domperidone inj 1mg/ml", category: "antiemetic" },
  { id: 317, name: "Ondansetron tab I.P 8 mg", category: "" },
  { id: 318, name: "Ondansetron inj I.P 2mg/ml,", category: "antiemetic" },
  { id: 319, name: "Ondansetron syrup 2mg/5ml", category: "antiemetic" },
  {
    id: 320,
    name: "Promethazine tab I.P  10mg  Promethazine tab I.P25mg",
    category: "antiemetic",
  },
  { id: 321, name: "Betahistine tab 16,24 mg", category: "" },
  { id: 322, name: "prochlorperazine", category: "antivertigo" },
  {
    id: 323,
    name: "prochlorperazine suppository 5mg,25mg",
    category: "antivertigo",
  },
  { id: 324, name: "metoclopramide tab 5,", category: "antivertigo" },
  { id: 325, name: "metoclopramide inj 10mg/ml", category: "" },
  { id: 326, name: "Simethicone", category: "antiulcer" },
  { id: 327, name: "Cyclominol Tab 10mg", category: "antispasmodic" },
  { id: 328, name: "Bisacodyl Tab.5mg", category: "" },
  { id: 329, name: "Bisacodyl suppository 5mg, I.P", category: "laxatives" },
  { id: 330, name: "Lactulose", category: "laxatives" },
  { id: 331, name: "Lactulose enema 100ml", category: "laxatives" },
  { id: 332, name: "Isphagulla husk", category: "laxatives" },
  { id: 333, name: "Racecadotril Tab 100mg", category: "antidiarrhoeal" },
  { id: 334, name: "Reduced osmolar WHO", category: "antidiarrhoeal" },
  { id: 335, name: "Zinc sulphate 20mg", category: "antidiarrhoeal" },
  { id: 336, name: "Zinc sulphate syrup 20mg/5ml", category: "antidiarrhoeal" },
  { id: 337, name: "Zinc sulphate DT 20mg", category: "antidiarrhoeal" },
  { id: 338, name: "Prebiotics  and probiotics", category: "antidiarrhoeal" },
  {
    id: 339,
    name: "Calcium dobesilate  500 mg cap",
    category: "antihaemorrhoidal",
  },
  { id: 340, name: "Hexastarch", category: "solutions" },
  { id: 341, name: "Dextran colloid", category: "solutions" },
  { id: 342, name: "K binding agent", category: "solutions" },
  { id: 343, name: "Isolyte P Inj", category: "solutions" },
  { id: 344, name: "Potassium chloride syrup", category: "solutions" },
  {
    id: 345,
    name: "Sodium Polystyrene sulphonate 15g/60ml",
    category: "solutions",
  },
  { id: 346, name: "Normal saline 1/2", category: "solutions" },
  { id: 347, name: "Amino acid solution 10%", category: "solutions" },
  { id: 348, name: "lipid- MVI 10%", category: "solutions" },
  { id: 349, name: "haesteril", category: "plasma volume expander" },
  { id: 350, name: "Gliclazide Tab 40 mg", category: "hypoglycaemics" },
  { id: 351, name: "Gliclazide Tab 80mg", category: "" },
  { id: 352, name: "Glibenclamide + metformin", category: "hypoglycaemics" },
  { id: 353, name: "Metformin Tab.250 mg", category: "hypoglycaemics" },
  { id: 354, name: "Pioglitazone 15/30mg", category: "hypoglycaemics" },
  { id: 355, name: "Clomiphene citrate Tab 100mg", category: "" },
  {
    id: 356,
    name: "Misoprostol Tab.25 mcg, 200mcg,600mcg",
    category: "oxytocics",
  },
  {
    id: 357,
    name: "Natural Progesterone Tab 100mg,200mg,500mg",
    category: "progestins",
  },
  { id: 358, name: "Medroxy Progesterone  Tab 10mg", category: "progestins" },
  { id: 359, name: "Norethisterone Tab 5mg", category: "progestins" },
  { id: 360, name: "Dinoprostone gel", category: "prostaglandin analogues" },
  { id: 361, name: "Dydrogestone Tab 10mg", category: "progesterone" },
  {
    id: 362,
    name: "Alpha hydroxy progesterone caproatenj250mg,500mg",
    category: "progesterone",
  },
  {
    id: 363,
    name: "Progesterone + estrogen pill",
    category: "oral contraceptive pills",
  },
  { id: 364, name: "Diphtheria Antitoxin Inj", category: "vaccines" },
  { id: 365, name: "IVIG 2.5g", category: "" },
  { id: 366, name: "Baclofen Tab 10mg", category: "" },
  { id: 367, name: "Metaxalone", category: "muscle relaxants" },
  { id: 368, name: "acid concentrate can", category: "dialysis solutions" },
  { id: 369, name: "bicarbonate powder", category: "dialysis solutions" },
  { id: 370, name: "renalin bottles", category: "dialysis solutions" },
  { id: 371, name: "citric acid bottles", category: "dialysis solutions" },
  {
    id: 372,
    name: "peritoneal dialysis solution IP 1L",
    category: "dialysis solutions",
  },
  { id: 373, name: "repition", category: "mood stabilisers" },
  { id: 374, name: "repition", category: "mood stabilisers" },
  { id: 375, name: "prochlorperazine", category: "antiemetic" },
  { id: 376, name: "Syrup Expectorant", category: "Respiratory drugs" },
  {
    id: 377,
    name: "Deriphylline Syrup 100mg/5ml",
    category: "Respiratory drugs",
  },
  { id: 378, name: "Deriphylline Inj 100mg", category: "Respiratory drugs" },
  {
    id: 379,
    name: "Terbutaline tab 2.5 mg I.P",
    category: "Respiratory drugs",
  },
  { id: 380, name: "Salbutamol", category: "Respiratory drugs" },
  { id: 381, name: "Salbutamol Tab 2mg", category: "Respiratory drugs" },
  {
    id: 382,
    name: "Salbutamol rotacaps powder puff",
    category: "Respiratory drugs",
  },
  { id: 383, name: "Salbutamol inj", category: "Respiratory drugs" },
  { id: 384, name: "Salbutamol Respules", category: "Respiratory drugs" },
  {
    id: 385,
    name: "Salbutamol Nebulising solution 2mg/5ml",
    category: "Respiratory drugs",
  },
  {
    id: 386,
    name: "Salbutamol respiratory solution 2mg/5ml",
    category: "Respiratory drugs",
  },
  { id: 387, name: "Surfactant 8ml", category: "Respiratory drugs" },
  {
    id: 388,
    name: "Dexamethasone nebuliser solution 8ml",
    category: "Respiratory drugs",
  },
  { id: 389, name: "caffeine citrate 3ml", category: "Respiratory drugs" },
  { id: 390, name: "Albuterol respules", category: "Respiratory drugs" },
  {
    id: 391,
    name: "Levo salbutamol syrup 1mg/ml",
    category: "Respiratory drugs",
  },
  {
    id: 392,
    name: "Levo salbutamol Respiratory solution 0.0625 mg/ml",
    category: "Respiratory drugs",
  },
  { id: 393, name: "Budesonide", category: "Respiratory drugs" },
  { id: 394, name: "Budesonide MDI 100 mcg", category: "Respiratory drugs" },
  { id: 395, name: "Budesonide MDI 200 mcg", category: "" },
  { id: 396, name: "Budesonide respules 1mg", category: "Respiratory drugs" },
  {
    id: 397,
    name: "Budesonide Nebulising solution",
    category: "Respiratory drugs",
  },
  {
    id: 398,
    name: "Fluticasone+ salmeterol rotacap,DPI",
    category: "Respiratory drugs",
  },
  { id: 399, name: "Monteleukast", category: "Respiratory drugs" },
  { id: 400, name: "Monteleukast Tab 4mg", category: "Respiratory drugs" },
  { id: 401, name: "Monteleukast Tab 5mg", category: "" },
  { id: 402, name: "Monteleukast Tab 10mg", category: "" },
  { id: 403, name: "Monteleukast Sachet 4mg", category: "Respiratory drugs" },
  {
    id: 404,
    name: "Magnesium sulphate Inj 50%",
    category: "Respiratory drugs",
  },
  {
    id: 405,
    name: "Ipratropium nasal spray0.03%",
    category: "Respiratory drugs",
  },
  {
    id: 406,
    name: "Ipratropium MDI,DPI,rotacap",
    category: "Respiratory drugs",
  },
  { id: 407, name: "Beclomethasone rotacaps", category: "Respiratory drugs" },
  { id: 408, name: "Salmeterol", category: "Respiratory drugs" },
  { id: 409, name: "Theophylline", category: "Respiratory drugs" },
  { id: 410, name: "Aminophylline", category: "Respiratory drugs" },
  { id: 411, name: "Acebrophylline", category: "Respiratory drugs" },
  { id: 412, name: "Thiotropium", category: "Respiratory drugs" },
  {
    id: 413,
    name: "Levosalbutamol+ Ipratropium",
    category: "Respiratory drugs",
  },
  {
    id: 414,
    name: "Formoterol+ Budesonide MDI,DPI,Rotacap",
    category: "Respiratory drugs",
  },
  {
    id: 415,
    name: "Formoterol+ Budesonide Rotahaler,Inhaler",
    category: "Respiratory drugs",
  },
  {
    id: 416,
    name: "Cough medications/mucolytics,expectorant",
    category: "Respiratory drugs",
  },
  {
    id: 417,
    name: "ipratropium+salbutamol MDI",
    category: "Respiratory drugs",
  },
  { id: 418, name: "xylometazoline nasal drops 0.05%", category: "" },
  {
    id: 419,
    name: "phenyl ephrine 10mg +pheniramine maleate 20mgTab",
    category: "Respiratory drugs",
  },
  {
    id: 420,
    name: "phenyl ephrine 5mg +pheniramine maleate 10mgsyrup",
    category: "Respiratory drugs",
  },
  { id: 421, name: "phenylephrine+CPM+PCM", category: "Respiratory drugs" },
  {
    id: 422,
    name: "pseudoephedrine ER tab 120mg",
    category: "Respiratory drugs",
  },
  {
    id: 423,
    name: "ambroxol sodium+salbutamol tablet",
    category: "Respiratory drugs",
  },
  { id: 424, name: "bromhexine tab", category: "Respiratory drugs" },
  {
    id: 425,
    name: "salbutamol+ theophylline tab",
    category: "Respiratory drugs",
  },
  { id: 426, name: "deflazacort 24mg", category: "Respiratory drugs" },
  { id: 427, name: "calcium carbonate tablets 1000mg", category: "" },
  { id: 428, name: "calcium carbonate tablets250mg", category: "" },
  { id: 429, name: "calcium carbonate tablets250mg", category: "" },
  {
    id: 430,
    name: "calcium gluconate injection",
    category: "vitamins & supplements",
  },
  { id: 431, name: "Vitamin D drops", category: "" },
  { id: 432, name: "vitamin D3", category: "vitamins & supplements" },
  { id: 433, name: "glucosamine", category: "vitamins & supplements" },
  { id: 434, name: "L ornithine", category: "vitamins & supplements" },
  { id: 435, name: "B complex", category: "vitamins & supplements" },
  { id: 436, name: "B complex injection", category: "vitamins & supplements" },
  { id: 437, name: "B complex cap", category: "vitamins & supplements" },
  { id: 438, name: "B complex elixir", category: "vitamins & supplements" },
  { id: 439, name: "vitamin E cap 600mg", category: "vitamins & supplements" },
  { id: 440, name: "vitamin E drops", category: "" },
  {
    id: 441,
    name: "vitamin A capsule 25000U",
    category: "vitamins & supplements",
  },
  {
    id: 442,
    name: "calcium acetate tablet 667mg",
    category: "vitamins & supplements",
  },
  {
    id: 443,
    name: "sodium fluoride tab 20mg",
    category: "vitamins & supplements",
  },
  { id: 444, name: "calcium citrate tab", category: "vitamins & supplements" },
  {
    id: 445,
    name: "L-ornithine, L-aspartate Inj",
    category: "vitamins & supplements",
  },
  { id: 446, name: "chondroitin", category: "vitamins & supplements" },
  {
    id: 447,
    name: "Hyaluronic acid injection",
    category: "vitamins & supplements",
  },
  { id: 448, name: "Suture materials", category: "Miscellaneous" },
  { id: 449, name: "Oxygen inhalation", category: "Miscellaneous" },
  {
    id: 450,
    name: "Elastocrepe bandage 7.5 cm width",
    category: "Miscellaneous",
  },
  {
    id: 451,
    name: "Cutting needle( medium and small)",
    category: "Miscellaneous",
  },
  { id: 452, name: "Benzydamine", category: "vitamins & supplements" },
  { id: 453, name: "oral rinse 0.15% w/v", category: "vitamins & supplements" },
  {
    id: 454,
    name: "cream/gel 1% w/w,5% w/w",
    category: "vitamins & supplements",
  },
  { id: 455, name: "Alendronate tab. 5mg,35mg", category: "wax softener" },
  {
    id: 456,
    name: "Alendronate+ cholecalciferol tab. 70mg/2800 IU",
    category: "Miscellaneous",
  },
  {
    id: 457,
    name: "Paradichlorobenzene 2% + chlorbutanol 5% + benzocaine 2.7%+turpentine oil 15% ear drops",
    category: "Miscellaneous",
  },
  {
    id: 458,
    name: "Paradichlorobenzene 2%+ benzocaine 2.7% ear drops",
    category: "Miscellaneous",
  },
  { id: 459, name: "hand disinfectant", category: "Miscellaneous" },
  { id: 460, name: "bleach", category: "Miscellaneous" },
  { id: 461, name: "flunarizine tab 5 /10 mg", category: "Miscellaneous" },
  { id: 462, name: "flavoxate", category: "Miscellaneous" },
  { id: 463, name: "IV fat emulsion", category: "Miscellaneous" },
  { id: 464, name: "esmolol inj", category: "antihypertensive" },
  { id: 465, name: "terazocin", category: "antihypertensive" },
  { id: 466, name: "Botox inj", category: "OPHTHALMIC PREPARATIONS" },
  {
    id: 467,
    name: "Two component fibrin glue",
    category: "OPHTHALMIC PREPARATIONS",
  },
  { id: 468, name: "cyano acrylate glue", category: "OPHTHALMIC PREPARATIONS" },
  {
    id: 469,
    name: "Indocyamine green 25 mg powder for inj",
    category: "OPHTHALMIC PREPARATIONS",
  },
  {
    id: 470,
    name: "Deferasirox Tab : Tab 500/250mg",
    category: "Iron chelator",
  },
  { id: 471, name: "Blood leucocyte filter Set", category: "Miscellaneous" },
  { id: 472, name: "6MP  50 mg i.p", category: "ANTICANCER DRUGS" },
  { id: 473, name: "Daunorubicin inj", category: "ANTICANCER DRUGS" },
  { id: 474, name: "D – Penicillamine", category: "ANTICANCER DRUGS" },
  { id: 475, name: "Bleomycin Inj. 15 mg/iu", category: "ANTICANCER DRUGS" },
  { id: 476, name: "Etoposide Inj.", category: "ANTICANCER DRUGS" },
  {
    id: 477,
    name: "Leucovorrin calcium Inj. 50mg/5ml",
    category: "ANTICANCER DRUGS",
  },
  {
    id: 478,
    name: "Leucovorrin calcium Tab 50mg/5ml",
    category: "ANTICANCER DRUGS",
  },
  {
    id: 479,
    name: "Cytosine Arabinoside Inj. 100mg",
    category: "ANTICANCER DRUGS",
  },
  { id: 480, name: "Doxurubicin HCL Inj. 50mg", category: "ANTICANCER DRUGS" },
  { id: 481, name: "Filgrastim Inj. 500mg", category: "Cytokine" },
  { id: 482, name: "Ifosfamide Inj. 1gm/200mg", category: "ANTICANCER DRUGS" },
  { id: 483, name: "Mesna Inj.", category: "ANTICANCER DRUGS" },
  { id: 484, name: "Vinblastine 10mg/10ml", category: "ANTICANCER DRUGS" },
  { id: 485, name: "L-Asparaginase inj 500 IU", category: "ANTICANCER DRUGS" },
  { id: 486, name: "Hydroxy urea cap/tab 500mg", category: "ANTISICKLING" },
  {
    id: 487,
    name: "Cetral line cannula, PICC and central line",
    category: "Miscellaneous",
  },
  { id: 488, name: "All trans retenoic Acid", category: "ANTICANCER DRUGS" },
  { id: 489, name: "Wysolone", category: "HORMONES ANDANTIHORMONES" },
  { id: 490, name: "Lamivudine tab", category: "ANTIVIRAL" },
  { id: 491, name: "Dacarbazine", category: "ANTICANCER DRUGS" },
  {
    id: 492,
    name: "Calcerol sachet (60,000IU)",
    category: "vitamins & supplements",
  },
  {
    id: 493,
    name: "Pamidronate inj IV use (30mg)",
    category: "HORMONES ANDANTIHORMONES",
  },
  {
    id: 494,
    name: "Thyroxin  tab (Eltroxin)100 mg/50 mg",
    category: "HORMONES ANDANTIHORMONES",
  },
  { id: 495, name: "Methylphenidate  SR  10 mg", category: "antidepressants" },
  {
    id: 496,
    name: "Calcium, phosphorus & vit D suspension (Ca:P ratio2:1)",
    category: "vitamins & supplements",
  },
  { id: 497, name: "Escitalopram", category: "antidepressants" },
  { id: 498, name: "Levamisole", category: "Immune mediators" },
  { id: 499, name: "Methotrexate inj 50g/2ml", category: "ANTICANCER DRUGS" },
  { id: 500, name: "Mycophenolate mofetil", category: "Immune mediators" },
];

const medicineApi = [];

for (let i = 0; i < medicineArray.length; i++) {
  medicineApi[i] = {
    medID: medicineArray[i].id,
    medicineName: medicineArray[i].name,
    category: medicineArray[i].category,
    tableContains: 10,
    price: 10,
    TotalStock: 2000,
    AvailableStock: 300,
  };
}

console.log(medicineApi);

const progressBar = document.querySelector(".progress-bar");
const textAnimation = document.querySelector(".text-animation");
const loadingPage = document.querySelector(".loading-page");
const innerDiv = document.querySelector(".inner-div");
setTimeout(() => {
  progressBar.style.display = "none";
  textAnimation.style.display = "block";
  setTimeout(() => {
    loadingPage.style.overflow = "hidden";
    loadingPage.style.width = "0%";
    innerDiv.style.width = "100%";
  }, 2000);
}, 2010);

const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.querySelector(".login");
const loginPage = document.querySelector(".login-page");
const logoutBtn = document.querySelector(".logout");
const dashboard = document.querySelector(".dashboard");

loginBtn.addEventListener("click", () => {
  if (!username.value && !password.value) {
    username.style.border = "1px solid red";
    password.style.border = "1px solid red";
  } else {
    if (!username.value) {
      username.style.border = "1px solid red";
    } else {
      password.style.border = "1px solid red";
    }
  }

  if (username.value === "admin" && password.value === "admin") {
    loginPage.style.overflow = "hidden";
    loginPage.style.width = "0%";
    dashboard.style.width = "100%";
  }
});

logoutBtn.addEventListener("click", () => {
  dashboard.style.overflow = "hidden";
  dashboard.style.width = "0%";
  loginPage.style.width = "100%";
  username.value = "";
  password.value = "";
  password.style.border = "none";
});

const box = document.querySelectorAll(".box");
const second = document.querySelectorAll(".second");
const service = document.querySelectorAll(".service");
const container = document.querySelector(".container");
const backBtn = document.querySelectorAll(".back");
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("mouseover", () => {
    second[i].style.bottom = "0%";
    second[i].style.borderRadius = "10px";
  });
  box[i].addEventListener("mouseout", () => {
    second[i].style.borderRadius = "50%";
    second[i].style.bottom = "-70%";
  });

  second[i].addEventListener("click", () => {
    container.style.overflow = "hidden";
    container.style.width = "0%";
    service[i].style.width = "100%";
  });

  backBtn[i].addEventListener("click", () => {
    service[i].style.overflow = "hidden";
    service[i].style.width = "0%";
    container.style.width = "100%";
  });
}

const select = document.querySelectorAll(".select");
for (let i = 0; i < select.length; i++) {
  for (let j = 0; j < medicineApi.length; j++) {
    const data = `<option value="${medicineApi[j].medicineName}">${medicineApi[j].medicineName}</option>`;
    select[i].insertAdjacentHTML("beforeend", data);
  }
}

const addBtn = document.querySelector(".add");

var cnt = 1,
  sum = 0;

addBtn.addEventListener("click", () => {
  const select = document.querySelectorAll(".select");
  const billTable = document.querySelector(".bill-table");
  const qty = document.getElementById("qty");
  const total = document.querySelector(".total");

  var price;

  for (let i = 0; i < medicineApi.length; i++) {
    if (medicineApi[i].medicineName === select[0].value) {
      price = (medicineApi[i].price / medicineApi[i].tableContains) * qty.value;
      medicineApi[i].AvailableStock -= Number(qty.value);
    }
  }

  const data = `<tr><td>${cnt}</td><td>${select[0].value}</td><td>${
    qty.value
  } Tablets</td><td>${Math.floor(price)} Rupees</td></tr>`;

  billTable.insertAdjacentHTML("beforeend", data);
  sum = sum + price;
  total.innerHTML = `${sum} Rupees`;
  cnt = cnt + 1;
});

const resetBtn = document.querySelector(".reset");
const printBtn = document.querySelector(".print-bill");
const downloadBtn = document.querySelector(".download-bill");

resetBtn.addEventListener("click", () => {
  const billTable = document.querySelector(".bill-table");
  const qty = document.getElementById("qty");
  const total = document.querySelector(".total");

  qty.value = "";
  total.innerHTML = "0 Rupees";
  billTable.innerHTML = `<tr>
                                            <th>S.NO</th>
                                            <th>MEDICINE NAME</th>
                                            <th>QTY <br>(Per Tablet)</th>
                                            <th>PRICE <br>(in Rupees)</th></tr>`;
});

var doc = new jsPDF();

function saveDiv(divId, title) {
  doc.fromHTML(
    `<html><head><title>${title}</title></head><body>` +
      document.getElementById(divId).innerHTML +
      `</body></html>`
  );
  doc.save("bill.pdf");
}

function printDiv(divId, title) {
  let mywindow = window.open(
    "",
    "PRINT",
    "height=650,width=900,top=100,left=150"
  );

  mywindow.document.write(`<html><head><title>${title}</title>`);
  mywindow.document.write("</head><body >");
  mywindow.document.write(document.getElementById(divId).innerHTML);
  mywindow.document.write("</body></html>");

  mywindow.document.close(); // necessary for IE >= 10
  mywindow.focus(); // necessary for IE >= 10*/

  mywindow.print();
  mywindow.close();

  return true;
}

printBtn.addEventListener("click", () => {
  printDiv("list", "Bill");
});

downloadBtn.addEventListener("click", () => {
  saveDiv("list", "Bill");
});

const getStockBtn = document.querySelector(".get-stock");
getStockBtn.addEventListener("click", () => {
  const stockInfoTable = document.querySelector(".stock-info-table");
  const select = document.querySelectorAll(".select");
  for (let i = 0; i < medicineApi.length; i++) {
    if (medicineApi[i].medicineName === select[1].value) {
      const data = `<tr><th>medicine name</th><th>total stock</th><th>available stock</th></tr><tr><td>${medicineApi[i].medicineName}</td><td>${medicineApi[i].TotalStock}</td><td>${medicineApi[i].AvailableStock}</td></tr>`;

      stockInfoTable.innerHTML = data;
    }
  }
});

const addStockBtn = document.querySelector(".add-stock");
addStockBtn.addEventListener("click", () => {
  const select = document.querySelectorAll(".select");
  const qtyToAdd = document.getElementById("qtytoadd");

  if (!qtyToAdd.value) {
    qtyToAdd.style.border = "2px solid red";
  } else {
    for (let i = 0; i < medicineApi.length; i++) {
      if (medicineApi[i].medicineName === select[2].value) {
        medicineApi[i].TotalStock += Number(qtyToAdd.value);
        medicineApi[i].AvailableStock += Number(qtyToAdd.value);
        alert("Stock Added Sucessfully !!");
        qtyToAdd.value = "";
      }
    }
  }
});
