export default {
  responseHeader: {
    status: 0,
    QTime: 45,
    params: {
      q: '*',
      'json.facet':
        '{"collections":{"type":"terms","field":"internal_institution","limit":100,"facet":{"subjects":{"type":"terms","field":"subject","limit":6,"facet":{"related":{"type":"terms","field":"subject","limit":20}}}}}}',
      rows: '0',
    },
  },
  response: { numFound: 69434, start: 0, docs: [] },
  facets: {
    count: 69434,
    collections: {
      buckets: [
        {
          val: 'Universität Hamburg',
          count: 59514,
          subjects: {
            buckets: [
              {
                val: 'Humans',
                count: 4157,
                related: {
                  buckets: [
                    {
                      val: 'Humans',
                      count: 4157,
                    },
                    {
                      val: 'Male',
                      count: 2465,
                    },
                    {
                      val: 'Female',
                      count: 2440,
                    },
                    {
                      val: 'Adult',
                      count: 1572,
                    },
                    {
                      val: 'Middle Aged',
                      count: 1572,
                    },
                    {
                      val: 'Aged',
                      count: 1230,
                    },
                    {
                      val: 'Young Adult',
                      count: 740,
                    },
                    {
                      val: 'Adolescent',
                      count: 672,
                    },
                    {
                      val: 'Aged, 80 and over',
                      count: 555,
                    },
                    {
                      val: 'Treatment Outcome',
                      count: 544,
                    },
                    {
                      val: 'Animals',
                      count: 536,
                    },
                    {
                      val: 'Journal Article',
                      count: 526,
                    },
                    {
                      val: 'Germany',
                      count: 489,
                    },
                    {
                      val: 'Child',
                      count: 427,
                    },
                    {
                      val: 'Retrospective Studies',
                      count: 347,
                    },
                    {
                      val: 'Risk Factors',
                      count: 333,
                    },
                    {
                      val: 'Prognosis',
                      count: 327,
                    },
                    {
                      val: 'Mice',
                      count: 278,
                    },
                    {
                      val: 'Child, Preschool',
                      count: 267,
                    },
                    {
                      val: 'Follow-Up Studies',
                      count: 255,
                    },
                  ],
                },
              },
              {
                val: 'Medical sciences, Medicine',
                count: 3454,
                related: {
                  buckets: [
                    {
                      val: 'Medical sciences, Medicine',
                      count: 3454,
                    },
                    {
                      val: 'Onkologie',
                      count: 356,
                    },
                    {
                      val: 'Chirurgie',
                      count: 262,
                    },
                    {
                      val: 'Kardiologie, Angiologie',
                      count: 235,
                    },
                    {
                      val: 'Psychiatrie, Psychopathologie',
                      count: 194,
                    },
                    {
                      val: 'Innere Medizin',
                      count: 186,
                    },
                    {
                      val: 'Neurologie',
                      count: 185,
                    },
                    {
                      val: 'Zahnmedizin',
                      count: 158,
                    },
                    {
                      val: 'Radiologie',
                      count: 155,
                    },
                    {
                      val: 'Immunologie',
                      count: 149,
                    },
                    {
                      val: 'Kinderheilkunde',
                      count: 142,
                    },
                    {
                      val: 'Pathologie',
                      count: 130,
                    },
                    {
                      val: 'Pharmakologie',
                      count: 129,
                    },
                    {
                      val: 'Rechtsmedizin',
                      count: 129,
                    },
                    {
                      val: 'Molekularbiologie',
                      count: 128,
                    },
                    {
                      val: 'Anästhesiologie',
                      count: 95,
                    },
                    {
                      val: 'Urologie, Nephrologie',
                      count: 92,
                    },
                    {
                      val: 'Medizinische Genetik',
                      count: 85,
                    },
                    {
                      val: 'Diagnostik',
                      count: 83,
                    },
                    {
                      val: 'Rheumatologie, Orthopädie',
                      count: 82,
                    },
                  ],
                },
              },
              {
                val: 'Journal Article',
                count: 3379,
                related: {
                  buckets: [
                    {
                      val: 'Journal Article',
                      count: 3379,
                    },
                    {
                      val: 'Center for Health Care Research (CHCR)',
                      count: 575,
                    },
                    {
                      val:
                        'Cancer Medicine – University Cancer Center Hamburg (UCCH)',
                      count: 537,
                    },
                    {
                      val: 'Humans',
                      count: 526,
                    },
                    {
                      val: 'Hamburg Center of Neuroscience (HCNS)',
                      count: 444,
                    },
                    {
                      val:
                        'Others, not related to the research strengths mentioned above',
                      count: 377,
                    },
                    {
                      val: 'Male',
                      count: 348,
                    },
                    {
                      val: 'Female',
                      count: 341,
                    },
                    {
                      val: 'Review',
                      count: 317,
                    },
                    {
                      val:
                        'Center for Inflammation, Infection and Immunity (C3I)',
                      count: 270,
                    },
                    {
                      val: "Research Support, Non-U.S. Gov't",
                      count: 243,
                    },
                    {
                      val: 'Middle Aged',
                      count: 216,
                    },
                    {
                      val: 'Adult',
                      count: 197,
                    },
                    {
                      val: 'Aged',
                      count: 160,
                    },
                    {
                      val: 'English Abstract',
                      count: 159,
                    },
                    {
                      val: 'AG Statistische Beratung (143)',
                      count: 121,
                    },
                    {
                      val: 'Animals',
                      count: 121,
                    },
                    {
                      val: 'Young Adult',
                      count: 90,
                    },
                    {
                      val: 'Cardiovascular Research Center (CVRC)',
                      count: 82,
                    },
                    {
                      val: 'Treatment Outcome',
                      count: 81,
                    },
                  ],
                },
              },
              {
                val: 'Male',
                count: 2594,
                related: {
                  buckets: [
                    {
                      val: 'Male',
                      count: 2594,
                    },
                    {
                      val: 'Humans',
                      count: 2465,
                    },
                    {
                      val: 'Female',
                      count: 2106,
                    },
                    {
                      val: 'Middle Aged',
                      count: 1374,
                    },
                    {
                      val: 'Adult',
                      count: 1351,
                    },
                    {
                      val: 'Aged',
                      count: 1079,
                    },
                    {
                      val: 'Young Adult',
                      count: 651,
                    },
                    {
                      val: 'Adolescent',
                      count: 586,
                    },
                    {
                      val: 'Aged, 80 and over',
                      count: 492,
                    },
                    {
                      val: 'Treatment Outcome',
                      count: 397,
                    },
                    {
                      val: 'Journal Article',
                      count: 348,
                    },
                    {
                      val: 'Child',
                      count: 345,
                    },
                    {
                      val: 'Germany',
                      count: 344,
                    },
                    {
                      val: 'Retrospective Studies',
                      count: 309,
                    },
                    {
                      val: 'Animals',
                      count: 275,
                    },
                    {
                      val: 'Risk Factors',
                      count: 235,
                    },
                    {
                      val: 'Prognosis',
                      count: 228,
                    },
                    {
                      val: 'Child, Preschool',
                      count: 225,
                    },
                    {
                      val: 'Follow-Up Studies',
                      count: 218,
                    },
                    {
                      val: 'Prospective Studies',
                      count: 202,
                    },
                  ],
                },
              },
              {
                val: 'Female',
                count: 2541,
                related: {
                  buckets: [
                    {
                      val: 'Female',
                      count: 2541,
                    },
                    {
                      val: 'Humans',
                      count: 2440,
                    },
                    {
                      val: 'Male',
                      count: 2106,
                    },
                    {
                      val: 'Middle Aged',
                      count: 1353,
                    },
                    {
                      val: 'Adult',
                      count: 1345,
                    },
                    {
                      val: 'Aged',
                      count: 1063,
                    },
                    {
                      val: 'Young Adult',
                      count: 656,
                    },
                    {
                      val: 'Adolescent',
                      count: 579,
                    },
                    {
                      val: 'Aged, 80 and over',
                      count: 497,
                    },
                    {
                      val: 'Treatment Outcome',
                      count: 390,
                    },
                    {
                      val: 'Journal Article',
                      count: 341,
                    },
                    {
                      val: 'Germany',
                      count: 339,
                    },
                    {
                      val: 'Child',
                      count: 335,
                    },
                    {
                      val: 'Retrospective Studies',
                      count: 295,
                    },
                    {
                      val: 'Prognosis',
                      count: 247,
                    },
                    {
                      val: 'Animals',
                      count: 242,
                    },
                    {
                      val: 'Risk Factors',
                      count: 233,
                    },
                    {
                      val: 'Follow-Up Studies',
                      count: 220,
                    },
                    {
                      val: 'Child, Preschool',
                      count: 218,
                    },
                    {
                      val: 'Prospective Studies',
                      count: 212,
                    },
                  ],
                },
              },
              {
                val: 'Center for Health Care Research (CHCR)',
                count: 2106,
                related: {
                  buckets: [
                    {
                      val: 'Center for Health Care Research (CHCR)',
                      count: 2106,
                    },
                    {
                      val: 'Journal Article',
                      count: 575,
                    },
                    {
                      val: 'Humans',
                      count: 123,
                    },
                    {
                      val: 'Female',
                      count: 89,
                    },
                    {
                      val: 'Male',
                      count: 86,
                    },
                    {
                      val: 'AG Klinische Studien (142)',
                      count: 78,
                    },
                    {
                      val: 'Adult',
                      count: 62,
                    },
                    {
                      val:
                        'Cancer Medicine – University Cancer Center Hamburg (UCCH)',
                      count: 56,
                    },
                    {
                      val: 'English Abstract',
                      count: 56,
                    },
                    {
                      val: 'Middle Aged',
                      count: 56,
                    },
                    {
                      val: 'Review',
                      count: 56,
                    },
                    {
                      val: "Research Support, Non-U.S. Gov't",
                      count: 45,
                    },
                    {
                      val: 'Germany',
                      count: 39,
                    },
                    {
                      val: 'AG Statistische Beratung (143)',
                      count: 35,
                    },
                    {
                      val: 'Hamburg Center of Neuroscience (HCNS)',
                      count: 33,
                    },
                    {
                      val: 'Aged',
                      count: 32,
                    },
                    {
                      val: 'Young Adult',
                      count: 28,
                    },
                    {
                      val: 'Adolescent',
                      count: 27,
                    },
                    {
                      val: 'Quality of Life',
                      count: 27,
                    },
                    {
                      val: 'Treatment Outcome',
                      count: 25,
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          val: 'HAW Hamburg',
          count: 4407,
          subjects: {
            buckets: [
              {
                val: 'Computer science',
                count: 1067,
                related: {
                  buckets: [
                    {
                      val: 'Computer science',
                      count: 1067,
                    },
                    {
                      val: 'Data processing',
                      count: 1067,
                    },
                    {
                      val: 'Simulation',
                      count: 30,
                    },
                    {
                      val: 'Software',
                      count: 30,
                    },
                    {
                      val: 'Ethernet',
                      count: 23,
                    },
                    {
                      val: 'Virtuelle Realität',
                      count: 23,
                    },
                    {
                      val: 'Roboter',
                      count: 22,
                    },
                    {
                      val: 'Maschinelles Lernen',
                      count: 20,
                    },
                    {
                      val: 'Field programmable gate array',
                      count: 17,
                    },
                    {
                      val: 'Android <Systemplattform>',
                      count: 16,
                    },
                    {
                      val: 'Bildverarbeitung',
                      count: 16,
                    },
                    {
                      val: 'Benutzerfreundlichkeit',
                      count: 15,
                    },
                    {
                      val: 'Ubiquitous Computing',
                      count: 15,
                    },
                    {
                      val: 'Massendaten',
                      count: 14,
                    },
                    {
                      val: 'Mehragentensystem',
                      count: 14,
                    },
                    {
                      val: 'Data Mining',
                      count: 13,
                    },
                    {
                      val: 'Mensch-Maschine-Kommunikation',
                      count: 13,
                    },
                    {
                      val: 'Gebäudeleittechnik',
                      count: 12,
                    },
                    {
                      val: 'Mikrocontroller',
                      count: 12,
                    },
                    {
                      val: 'Netzwerk',
                      count: 12,
                    },
                  ],
                },
              },
              {
                val: 'Data processing',
                count: 1067,
                related: {
                  buckets: [
                    {
                      val: 'Computer science',
                      count: 1067,
                    },
                    {
                      val: 'Data processing',
                      count: 1067,
                    },
                    {
                      val: 'Simulation',
                      count: 30,
                    },
                    {
                      val: 'Software',
                      count: 30,
                    },
                    {
                      val: 'Ethernet',
                      count: 23,
                    },
                    {
                      val: 'Virtuelle Realität',
                      count: 23,
                    },
                    {
                      val: 'Roboter',
                      count: 22,
                    },
                    {
                      val: 'Maschinelles Lernen',
                      count: 20,
                    },
                    {
                      val: 'Field programmable gate array',
                      count: 17,
                    },
                    {
                      val: 'Android <Systemplattform>',
                      count: 16,
                    },
                    {
                      val: 'Bildverarbeitung',
                      count: 16,
                    },
                    {
                      val: 'Benutzerfreundlichkeit',
                      count: 15,
                    },
                    {
                      val: 'Ubiquitous Computing',
                      count: 15,
                    },
                    {
                      val: 'Massendaten',
                      count: 14,
                    },
                    {
                      val: 'Mehragentensystem',
                      count: 14,
                    },
                    {
                      val: 'Data Mining',
                      count: 13,
                    },
                    {
                      val: 'Mensch-Maschine-Kommunikation',
                      count: 13,
                    },
                    {
                      val: 'Gebäudeleittechnik',
                      count: 12,
                    },
                    {
                      val: 'Mikrocontroller',
                      count: 12,
                    },
                    {
                      val: 'Netzwerk',
                      count: 12,
                    },
                  ],
                },
              },
              {
                val: 'Medical sciences',
                count: 620,
                related: {
                  buckets: [
                    {
                      val: 'Medical sciences',
                      count: 620,
                    },
                    {
                      val: 'Medicine',
                      count: 620,
                    },
                    {
                      val: 'Prävention',
                      count: 33,
                    },
                    {
                      val: 'Gesundheit',
                      count: 32,
                    },
                    {
                      val: 'Pflege',
                      count: 30,
                    },
                    {
                      val: 'Ernährung',
                      count: 27,
                    },
                    {
                      val: 'Kind',
                      count: 26,
                    },
                    {
                      val: 'Gesundheitsförderung',
                      count: 25,
                    },
                    {
                      val: 'Fettsucht',
                      count: 22,
                    },
                    {
                      val: 'Krankenhaus',
                      count: 21,
                    },
                    {
                      val: 'Hamburg',
                      count: 19,
                    },
                    {
                      val: 'Deutschland',
                      count: 18,
                    },
                    {
                      val: 'Pflegepersonal',
                      count: 18,
                    },
                    {
                      val: 'Patient',
                      count: 16,
                    },
                    {
                      val: 'Diät',
                      count: 14,
                    },
                    {
                      val: 'Evaluation',
                      count: 14,
                    },
                    {
                      val: 'Diabetes mellitus',
                      count: 13,
                    },
                    {
                      val: 'Jugend',
                      count: 13,
                    },
                    {
                      val: 'Brustkrebs',
                      count: 12,
                    },
                    {
                      val: 'Therapie',
                      count: 12,
                    },
                  ],
                },
              },
              {
                val: 'Medicine',
                count: 620,
                related: {
                  buckets: [
                    {
                      val: 'Medical sciences',
                      count: 620,
                    },
                    {
                      val: 'Medicine',
                      count: 620,
                    },
                    {
                      val: 'Prävention',
                      count: 33,
                    },
                    {
                      val: 'Gesundheit',
                      count: 32,
                    },
                    {
                      val: 'Pflege',
                      count: 30,
                    },
                    {
                      val: 'Ernährung',
                      count: 27,
                    },
                    {
                      val: 'Kind',
                      count: 26,
                    },
                    {
                      val: 'Gesundheitsförderung',
                      count: 25,
                    },
                    {
                      val: 'Fettsucht',
                      count: 22,
                    },
                    {
                      val: 'Krankenhaus',
                      count: 21,
                    },
                    {
                      val: 'Hamburg',
                      count: 19,
                    },
                    {
                      val: 'Deutschland',
                      count: 18,
                    },
                    {
                      val: 'Pflegepersonal',
                      count: 18,
                    },
                    {
                      val: 'Patient',
                      count: 16,
                    },
                    {
                      val: 'Diät',
                      count: 14,
                    },
                    {
                      val: 'Evaluation',
                      count: 14,
                    },
                    {
                      val: 'Diabetes mellitus',
                      count: 13,
                    },
                    {
                      val: 'Jugend',
                      count: 13,
                    },
                    {
                      val: 'Brustkrebs',
                      count: 12,
                    },
                    {
                      val: 'Therapie',
                      count: 12,
                    },
                  ],
                },
              },
              {
                val: 'Engineering and applied operations',
                count: 503,
                related: {
                  buckets: [
                    {
                      val: 'Engineering and applied operations',
                      count: 503,
                    },
                    {
                      val: 'Finite-Elemente-Methode',
                      count: 20,
                    },
                    {
                      val: 'Windkraftwerk',
                      count: 17,
                    },
                    {
                      val: 'Flugzeugbau',
                      count: 15,
                    },
                    {
                      val: 'Simulation',
                      count: 15,
                    },
                    {
                      val: 'Field programmable gate array',
                      count: 11,
                    },
                    {
                      val: 'MATLAB',
                      count: 11,
                    },
                    {
                      val: 'Prüfstand',
                      count: 11,
                    },
                    {
                      val: 'Industrie 4.0',
                      count: 10,
                    },
                    {
                      val: 'Windenergie',
                      count: 10,
                    },
                    {
                      val: 'Antiblockiersystem',
                      count: 8,
                    },
                    {
                      val: 'Mikrocontroller',
                      count: 8,
                    },
                    {
                      val: 'Erneuerbare Energien',
                      count: 7,
                    },
                    {
                      val: 'Flugzeug',
                      count: 7,
                    },
                    {
                      val: 'Konzeption',
                      count: 7,
                    },
                    {
                      val: 'LabVIEW',
                      count: 7,
                    },
                    {
                      val: 'Photovoltaik',
                      count: 7,
                    },
                    {
                      val: 'Regelungstechnik',
                      count: 7,
                    },
                    {
                      val: 'Sensor',
                      count: 7,
                    },
                    {
                      val: 'Steuerung',
                      count: 7,
                    },
                  ],
                },
              },
              {
                val: 'Library and information sciences',
                count: 357,
                related: {
                  buckets: [
                    {
                      val: 'Library and information sciences',
                      count: 357,
                    },
                    {
                      val: 'Bibliothek',
                      count: 29,
                    },
                    {
                      val: 'Öffentliche Bibliothek',
                      count: 29,
                    },
                    {
                      val: 'Benutzerfreundlichkeit',
                      count: 15,
                    },
                    {
                      val: 'Leseförderung',
                      count: 14,
                    },
                    {
                      val: 'Suchmaschine',
                      count: 13,
                    },
                    {
                      val: 'Web Site',
                      count: 13,
                    },
                    {
                      val: 'Informationskompetenz',
                      count: 11,
                    },
                    {
                      val:
                        'Hamburg / Stiftung Hamburger Öffentliche Bücherhallen',
                      count: 9,
                    },
                    {
                      val: 'World Wide Web',
                      count: 9,
                    },
                    {
                      val: 'World Wide Web 2.0',
                      count: 9,
                    },
                    {
                      val: 'Google',
                      count: 8,
                    },
                    {
                      val: 'Qualitätsmanagement',
                      count: 8,
                    },
                    {
                      val:
                        'Hamburg / Staats- und Universitätsbibliothek Hamburg Carl von Ossietzky',
                      count: 7,
                    },
                    {
                      val: 'Medienkompetenz',
                      count: 7,
                    },
                    {
                      val: 'Jugend',
                      count: 6,
                    },
                    {
                      val: 'Marketing',
                      count: 6,
                    },
                    {
                      val: 'Bibliothekar',
                      count: 5,
                    },
                    {
                      val: 'Datenbank',
                      count: 5,
                    },
                    {
                      val: 'Kommunikationsstrategie',
                      count: 5,
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          val: 'Technische Universität Hamburg',
          count: 2214,
          subjects: {
            buckets: [
              {
                val: 'Hamburg / Technische Universität',
                count: 50,
                related: {
                  buckets: [
                    {
                      val: 'Hamburg / Technische Universität',
                      count: 50,
                    },
                    {
                      val: 'Zeitschrift',
                      count: 18,
                    },
                    {
                      val: 'Bericht',
                      count: 15,
                    },
                    {
                      val: 'Ingenieurwissenschaften',
                      count: 9,
                    },
                    {
                      val: 'Nachhaltige Entwicklung',
                      count: 9,
                    },
                    {
                      val: 'Universität',
                      count: 9,
                    },
                    {
                      val: 'Hamburg University of Technology (TUHH)',
                      count: 7,
                    },
                    {
                      val: 'annual report',
                      count: 7,
                    },
                    {
                      val: 'engineering',
                      count: 6,
                    },
                    {
                      val: 'sustainability',
                      count: 6,
                    },
                    {
                      val: 'Hamburg University of Technology',
                      count: 4,
                    },
                    {
                      val: 'responsibility',
                      count: 4,
                    },
                    {
                      val: 'Big Data',
                      count: 3,
                    },
                    {
                      val: 'Jahresbericht',
                      count: 3,
                    },
                    {
                      val: 'Nachhaltigkeit',
                      count: 3,
                    },
                    {
                      val: 'recycling',
                      count: 3,
                    },
                    {
                      val: 'reuse of materials',
                      count: 3,
                    },
                    {
                      val: 'sustainability, university',
                      count: 3,
                    },
                    {
                      val: 'university',
                      count: 3,
                    },
                    {
                      val: 'Forschung',
                      count: 2,
                    },
                  ],
                },
              },
              {
                val: 'Luftfahrttechnik',
                count: 27,
                related: {
                  buckets: [
                    {
                      val: 'Luftfahrttechnik',
                      count: 27,
                    },
                    {
                      val: 'Flugzeugbau',
                      count: 25,
                    },
                    {
                      val: 'Klappe <Flugzeug>',
                      count: 6,
                    },
                    {
                      val: 'Aktor',
                      count: 5,
                    },
                    {
                      val: 'Hochauftriebssystem',
                      count: 4,
                    },
                    {
                      val: 'robust control',
                      count: 3,
                    },
                    {
                      val: 'Avionik',
                      count: 2,
                    },
                    {
                      val: 'Endlicher Automat',
                      count: 2,
                    },
                    {
                      val: 'Fahrwerk',
                      count: 2,
                    },
                    {
                      val: 'Fehlertoleranz',
                      count: 2,
                    },
                    {
                      val: 'Flap',
                      count: 2,
                    },
                    {
                      val: 'Flugzeugsystem',
                      count: 2,
                    },
                    {
                      val: 'Power Optimised Aircraft (POA)',
                      count: 2,
                    },
                    {
                      val: 'Zuverlässigkeitsanalyse',
                      count: 2,
                    },
                    {
                      val: 'degradiertes System',
                      count: 2,
                    },
                    {
                      val: 'parameter space design',
                      count: 2,
                    },
                    {
                      val: 'AC motor pump',
                      count: 1,
                    },
                    {
                      val: 'Abtastregler',
                      count: 1,
                    },
                    {
                      val: 'Aerospace fluid power systems',
                      count: 1,
                    },
                    {
                      val: 'Airbus 320',
                      count: 1,
                    },
                  ],
                },
              },
              {
                val: 'Eigenwertproblem',
                count: 26,
                related: {
                  buckets: [
                    {
                      val: 'Eigenwertproblem',
                      count: 26,
                    },
                    {
                      val: 'eigenvalue problem',
                      count: 10,
                    },
                    {
                      val: 'Toeplitz matrix',
                      count: 7,
                    },
                    {
                      val: 'Toeplitz-Matrix',
                      count: 7,
                    },
                    {
                      val: 'condensation',
                      count: 6,
                    },
                    {
                      val: 'Kondensation <Mathematik>',
                      count: 5,
                    },
                    {
                      val: 'Projektionsverfahren',
                      count: 3,
                    },
                    {
                      val: 'global masters',
                      count: 3,
                    },
                    {
                      val: 'parallel method',
                      count: 3,
                    },
                    {
                      val: 'symmetry',
                      count: 3,
                    },
                    {
                      val: 'Arnoldi method',
                      count: 2,
                    },
                    {
                      val: 'Inklusion',
                      count: 2,
                    },
                    {
                      val: 'Jacobi-Davidson method',
                      count: 2,
                    },
                    {
                      val: 'Lanczos method',
                      count: 2,
                    },
                    {
                      val: 'generalized eigenvalue problem',
                      count: 2,
                    },
                    {
                      val: 'projection method',
                      count: 2,
                    },
                    {
                      val: 'rational eigenvalue problem',
                      count: 2,
                    },
                    {
                      val: 'Algorithmus',
                      count: 1,
                    },
                    {
                      val: 'Elektronenzustand',
                      count: 1,
                    },
                    {
                      val: 'Error Estimation',
                      count: 1,
                    },
                  ],
                },
              },
              {
                val: 'India',
                count: 26,
                related: {
                  buckets: [
                    {
                      val: 'India',
                      count: 26,
                    },
                    {
                      val: 'Indien',
                      count: 19,
                    },
                    {
                      val: 'frugal innovation',
                      count: 7,
                    },
                    {
                      val: 'Frugale Innovationen',
                      count: 6,
                    },
                    {
                      val: 'Auslandsdirektinvestitionen',
                      count: 5,
                    },
                    {
                      val: 'FDI',
                      count: 5,
                    },
                    {
                      val: 'Frugal Innovations',
                      count: 5,
                    },
                    {
                      val: 'Germany',
                      count: 5,
                    },
                    {
                      val: 'Innovation',
                      count: 5,
                    },
                    {
                      val: 'Schwellenländer',
                      count: 5,
                    },
                    {
                      val: 'Globalisierung',
                      count: 4,
                    },
                    {
                      val: 'Vorreitermärkte',
                      count: 4,
                    },
                    {
                      val: 'lead markets',
                      count: 4,
                    },
                    {
                      val: 'BRIC',
                      count: 3,
                    },
                    {
                      val: 'Indo-German Economic Relations',
                      count: 3,
                    },
                    {
                      val: 'Leitmärkte',
                      count: 3,
                    },
                    {
                      val: 'globalization',
                      count: 3,
                    },
                    {
                      val: 'reverse innovation',
                      count: 3,
                    },
                    {
                      val: 'Automobilindustrie',
                      count: 2,
                    },
                    {
                      val: 'China',
                      count: 2,
                    },
                  ],
                },
              },
              {
                val: 'Flugzeugbau',
                count: 25,
                related: {
                  buckets: [
                    {
                      val: 'Flugzeugbau',
                      count: 25,
                    },
                    {
                      val: 'Luftfahrttechnik',
                      count: 25,
                    },
                    {
                      val: 'Klappe <Flugzeug>',
                      count: 6,
                    },
                    {
                      val: 'Aktor',
                      count: 5,
                    },
                    {
                      val: 'Hochauftriebssystem',
                      count: 4,
                    },
                    {
                      val: 'robust control',
                      count: 3,
                    },
                    {
                      val: 'Avionik',
                      count: 2,
                    },
                    {
                      val: 'Endlicher Automat',
                      count: 2,
                    },
                    {
                      val: 'Fahrwerk',
                      count: 2,
                    },
                    {
                      val: 'Fehlertoleranz',
                      count: 2,
                    },
                    {
                      val: 'Flap',
                      count: 2,
                    },
                    {
                      val: 'Flugzeugsystem',
                      count: 2,
                    },
                    {
                      val: 'Power Optimised Aircraft (POA)',
                      count: 2,
                    },
                    {
                      val: 'Zuverlässigkeitsanalyse',
                      count: 2,
                    },
                    {
                      val: 'degradiertes System',
                      count: 2,
                    },
                    {
                      val: 'parameter space design',
                      count: 2,
                    },
                    {
                      val: 'AC motor pump',
                      count: 1,
                    },
                    {
                      val: 'Abtastregler',
                      count: 1,
                    },
                    {
                      val: 'Aerospace fluid power systems',
                      count: 1,
                    },
                    {
                      val: 'Airbus 320',
                      count: 1,
                    },
                  ],
                },
              },
              {
                val: 'Produktentwicklung',
                count: 24,
                related: {
                  buckets: [
                    {
                      val: 'Produktentwicklung',
                      count: 24,
                    },
                    {
                      val: 'Produktinnovation',
                      count: 15,
                    },
                    {
                      val: 'Japan',
                      count: 4,
                    },
                    {
                      val: 'Lead User',
                      count: 4,
                    },
                    {
                      val: 'Produktforschung',
                      count: 4,
                    },
                    {
                      val: 'Fuzzy front end',
                      count: 3,
                    },
                    {
                      val: 'Innovationsmanagement',
                      count: 3,
                    },
                    {
                      val: 'Innovationsprozess',
                      count: 3,
                    },
                    {
                      val: 'Marktforschung',
                      count: 3,
                    },
                    {
                      val: 'Operations Research',
                      count: 3,
                    },
                    {
                      val: 'Unternehmen / Innovation',
                      count: 3,
                    },
                    {
                      val: 'idea generation',
                      count: 3,
                    },
                    {
                      val: 'innovation process',
                      count: 3,
                    },
                    {
                      val: 'project planning',
                      count: 3,
                    },
                    {
                      val: 'project selection',
                      count: 3,
                    },
                    {
                      val: 'Benutzer / Beteiligung',
                      count: 2,
                    },
                    {
                      val: 'Firma',
                      count: 2,
                    },
                    {
                      val: 'Innovationsforschung',
                      count: 2,
                    },
                    {
                      val: 'Japanese firms',
                      count: 2,
                    },
                    {
                      val: 'New product development',
                      count: 2,
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          val: 'Deutsches Klimarechenzentrum',
          count: 2148,
          subjects: {
            buckets: [
              {
                val: 'Climate',
                count: 1684,
                related: {
                  buckets: [
                    {
                      val: 'Climate',
                      count: 1684,
                    },
                    {
                      val: 'IPCC-DDC',
                      count: 1436,
                    },
                    {
                      val: 'climate simulation',
                      count: 1409,
                    },
                    {
                      val: 'IPCC',
                      count: 1342,
                    },
                    {
                      val: 'CMIP5',
                      count: 1337,
                    },
                    {
                      val: 'IPCC-AR5',
                      count: 1334,
                    },
                    {
                      val: 'IPCC-AR5_CMIP5',
                      count: 1319,
                    },
                    {
                      val: 'IPCC-AR4',
                      count: 91,
                    },
                    {
                      val: 'IPCC-DDC_AR4',
                      count: 62,
                    },
                    {
                      val: 'observational data',
                      count: 53,
                    },
                    {
                      val: 'model data',
                      count: 51,
                    },
                    {
                      val: 'DPHASE',
                      count: 37,
                    },
                    {
                      val: 'ECHAM5',
                      count: 35,
                    },
                    {
                      val: 'regional modelling',
                      count: 32,
                    },
                    {
                      val: 'regional model forecast',
                      count: 31,
                    },
                    {
                      val: 'IPCC_AR4_ECHAM5/MPIOM',
                      count: 29,
                    },
                    {
                      val: 'scenario run',
                      count: 28,
                    },
                    {
                      val: 'IPCC-DDC_TAR',
                      count: 24,
                    },
                    {
                      val: 'SRES-A2',
                      count: 24,
                    },
                    {
                      val: 'COPS',
                      count: 21,
                    },
                  ],
                },
              },
              {
                val: 'IPCC-DDC',
                count: 1436,
                related: {
                  buckets: [
                    {
                      val: 'Climate',
                      count: 1436,
                    },
                    {
                      val: 'IPCC-DDC',
                      count: 1436,
                    },
                    {
                      val: 'climate simulation',
                      count: 1355,
                    },
                    {
                      val: 'IPCC',
                      count: 1340,
                    },
                    {
                      val: 'IPCC-AR5',
                      count: 1334,
                    },
                    {
                      val: 'CMIP5',
                      count: 1319,
                    },
                    {
                      val: 'IPCC-AR5_CMIP5',
                      count: 1319,
                    },
                    {
                      val: 'IPCC-AR4',
                      count: 62,
                    },
                    {
                      val: 'IPCC-DDC_AR4',
                      count: 62,
                    },
                    {
                      val: 'IPCC-DDC_TAR',
                      count: 20,
                    },
                    {
                      val: '20C3M',
                      count: 18,
                    },
                    {
                      val: 'IPCC-DDC_AR5',
                      count: 16,
                    },
                    {
                      val: 'IPCC-DDC_FAR',
                      count: 14,
                    },
                    {
                      val: 'IPCC-FAR',
                      count: 14,
                    },
                    {
                      val: 'SRES-A2',
                      count: 14,
                    },
                    {
                      val: 'IPCC-TAR',
                      count: 13,
                    },
                    {
                      val: 'SRES-A1B',
                      count: 13,
                    },
                    {
                      val: 'GISS',
                      count: 12,
                    },
                    {
                      val: 'NCAR',
                      count: 12,
                    },
                    {
                      val: 'SRES-B1',
                      count: 11,
                    },
                  ],
                },
              },
              {
                val: 'climate simulation',
                count: 1409,
                related: {
                  buckets: [
                    {
                      val: 'Climate',
                      count: 1409,
                    },
                    {
                      val: 'climate simulation',
                      count: 1409,
                    },
                    {
                      val: 'IPCC-DDC',
                      count: 1355,
                    },
                    {
                      val: 'IPCC',
                      count: 1334,
                    },
                    {
                      val: 'IPCC-AR5',
                      count: 1334,
                    },
                    {
                      val: 'CMIP5',
                      count: 1320,
                    },
                    {
                      val: 'IPCC-AR5_CMIP5',
                      count: 1319,
                    },
                    {
                      val: 'ECHAM5',
                      count: 28,
                    },
                    {
                      val: 'IPCC-AR4',
                      count: 28,
                    },
                    {
                      val: 'IPCC_AR4_ECHAM5/MPIOM',
                      count: 28,
                    },
                    {
                      val: 'scenario run',
                      count: 27,
                    },
                    {
                      val: 'regional modelling',
                      count: 23,
                    },
                    {
                      val: 'CLM_SGA',
                      count: 18,
                    },
                    {
                      val: 'IPCC-DDC_AR5',
                      count: 15,
                    },
                    {
                      val: 'CLM_regional_climate_model_runs',
                      count: 14,
                    },
                    {
                      val: 'IPCC-DDC_FAR',
                      count: 14,
                    },
                    {
                      val: 'IPCC-FAR',
                      count: 14,
                    },
                    {
                      val: 'SRES-A2',
                      count: 9,
                    },
                    {
                      val: 'IPCC-DDC_TAR',
                      count: 7,
                    },
                    {
                      val: 'IPCC-TAR',
                      count: 7,
                    },
                  ],
                },
              },
              {
                val: 'IPCC',
                count: 1342,
                related: {
                  buckets: [
                    {
                      val: 'Climate',
                      count: 1342,
                    },
                    {
                      val: 'IPCC',
                      count: 1342,
                    },
                    {
                      val: 'IPCC-DDC',
                      count: 1340,
                    },
                    {
                      val: 'IPCC-AR5',
                      count: 1334,
                    },
                    {
                      val: 'climate simulation',
                      count: 1334,
                    },
                    {
                      val: 'CMIP5',
                      count: 1319,
                    },
                    {
                      val: 'IPCC-AR5_CMIP5',
                      count: 1319,
                    },
                    {
                      val: 'IPCC-DDC_AR5',
                      count: 16,
                    },
                    {
                      val: 'HAPPI',
                      count: 5,
                    },
                    {
                      val: 'IPCC-SR1.5',
                      count: 5,
                    },
                    {
                      val: 'model data',
                      count: 5,
                    },
                    {
                      val: 'ECHAM4',
                      count: 2,
                    },
                    {
                      val: 'IPCC_TAR_ECHAM4/OPYC',
                      count: 2,
                    },
                    {
                      val: 'IS92a',
                      count: 2,
                    },
                    {
                      val: 'greenhouse gases',
                      count: 2,
                    },
                    {
                      val: 'CAM4-2degree',
                      count: 1,
                    },
                    {
                      val: 'CanAM4',
                      count: 1,
                    },
                    {
                      val: 'ECHAM6.3',
                      count: 1,
                    },
                    {
                      val: 'MIROC5',
                      count: 1,
                    },
                    {
                      val: 'NorESM1-HAPPI',
                      count: 1,
                    },
                  ],
                },
              },
              {
                val: 'CMIP5',
                count: 1337,
                related: {
                  buckets: [
                    {
                      val: 'CMIP5',
                      count: 1337,
                    },
                    {
                      val: 'Climate',
                      count: 1337,
                    },
                    {
                      val: 'climate simulation',
                      count: 1320,
                    },
                    {
                      val: 'IPCC',
                      count: 1319,
                    },
                    {
                      val: 'IPCC-AR5',
                      count: 1319,
                    },
                    {
                      val: 'IPCC-AR5_CMIP5',
                      count: 1319,
                    },
                    {
                      val: 'IPCC-DDC',
                      count: 1319,
                    },
                    {
                      val: 'CORDEX',
                      count: 17,
                    },
                    {
                      val: 'CMIP5_RCM_forcing_MPI-ESM',
                      count: 16,
                    },
                    {
                      val: 'ECHAM6',
                      count: 16,
                    },
                    {
                      val: 'MPI-ESM',
                      count: 16,
                    },
                    {
                      val: 'RCM-forcing',
                      count: 16,
                    },
                    {
                      val: 'decadal',
                      count: 6,
                    },
                    {
                      val: 'amip',
                      count: 2,
                    },
                    {
                      val: 'historical',
                      count: 2,
                    },
                    {
                      val: 'rcp26',
                      count: 2,
                    },
                    {
                      val: 'rcp45',
                      count: 2,
                    },
                    {
                      val: 'rcp85',
                      count: 2,
                    },
                    {
                      val: 'CCAFS-CMIP5_Downscales',
                      count: 1,
                    },
                    {
                      val: 'CORDEX_DDS-CMIP5_native-grid',
                      count: 1,
                    },
                  ],
                },
              },
              {
                val: 'IPCC-AR5',
                count: 1334,
                related: {
                  buckets: [
                    {
                      val: 'Climate',
                      count: 1334,
                    },
                    {
                      val: 'IPCC',
                      count: 1334,
                    },
                    {
                      val: 'IPCC-AR5',
                      count: 1334,
                    },
                    {
                      val: 'IPCC-DDC',
                      count: 1334,
                    },
                    {
                      val: 'climate simulation',
                      count: 1334,
                    },
                    {
                      val: 'CMIP5',
                      count: 1319,
                    },
                    {
                      val: 'IPCC-AR5_CMIP5',
                      count: 1319,
                    },
                    {
                      val: 'IPCC-DDC_AR5',
                      count: 15,
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          val: 'Helmut-Schmidt-Universität',
          count: 696,
          subjects: {
            buckets: [
              {
                val: 'Economics',
                count: 249,
                related: {
                  buckets: [
                    {
                      val: 'Economics',
                      count: 249,
                    },
                    {
                      val: 'Marketing',
                      count: 7,
                    },
                    {
                      val: 'Einzelhandel',
                      count: 6,
                    },
                    {
                      val: 'Wettbewerb',
                      count: 5,
                    },
                    {
                      val: 'Globalisierung',
                      count: 4,
                    },
                    {
                      val: 'Kommunikation',
                      count: 4,
                    },
                    {
                      val: 'Marketingforschung',
                      count: 4,
                    },
                    {
                      val: 'Preispolitik',
                      count: 4,
                    },
                    {
                      val: 'Werbung',
                      count: 4,
                    },
                    {
                      val: 'Demokratie',
                      count: 3,
                    },
                    {
                      val: 'Europäische Wirtschafts- und Währungsunion',
                      count: 3,
                    },
                    {
                      val: 'International Outsourcing',
                      count: 3,
                    },
                    {
                      val: 'Internet',
                      count: 3,
                    },
                    {
                      val: 'Lebensmitteleinzelhandel',
                      count: 3,
                    },
                    {
                      val: 'Lebensmittelhandel',
                      count: 3,
                    },
                    {
                      val: 'Marktwirtschaft',
                      count: 3,
                    },
                    {
                      val: 'Netzneutralität',
                      count: 3,
                    },
                    {
                      val: 'Preis',
                      count: 3,
                    },
                    {
                      val: 'Telekommunikationsmarkt',
                      count: 3,
                    },
                    {
                      val: 'Transformation',
                      count: 3,
                    },
                  ],
                },
              },
              {
                val: 'Engineering & allied operations',
                count: 167,
                related: {
                  buckets: [
                    {
                      val: 'Engineering & allied operations',
                      count: 167,
                    },
                    {
                      val: 'Simulation',
                      count: 10,
                    },
                    {
                      val: 'Modellierung',
                      count: 8,
                    },
                    {
                      val: ' ',
                      count: 6,
                    },
                    {
                      val: '-',
                      count: 6,
                    },
                    {
                      val: 'Verbrennung',
                      count: 5,
                    },
                    {
                      val: 'Elektromagnetische Verträglichkeit',
                      count: 4,
                    },
                    {
                      val: 'Brennkammer',
                      count: 3,
                    },
                    {
                      val: 'Finite-Elemente-Methode',
                      count: 3,
                    },
                    {
                      val: 'Gasturbine',
                      count: 3,
                    },
                    {
                      val: 'Ottomotor',
                      count: 3,
                    },
                    {
                      val: 'Structural Health Monitoring',
                      count: 3,
                    },
                    {
                      val: 'Tonsignal',
                      count: 3,
                    },
                    {
                      val: 'Verbrennungsmotor',
                      count: 3,
                    },
                    {
                      val: 'Wiederverwendung',
                      count: 3,
                    },
                    {
                      val: 'Aerodynamik',
                      count: 2,
                    },
                    {
                      val: 'Anlagenplanung',
                      count: 2,
                    },
                    {
                      val: 'Automation',
                      count: 2,
                    },
                    {
                      val: 'Automatisierungstechnik',
                      count: 2,
                    },
                    {
                      val: 'Bruchmechanik',
                      count: 2,
                    },
                  ],
                },
              },
              {
                val: 'Education',
                count: 136,
                related: {
                  buckets: [
                    {
                      val: 'Education',
                      count: 136,
                    },
                    {
                      val: 'Bildung',
                      count: 13,
                    },
                    {
                      val: 'Weiterbildung',
                      count: 9,
                    },
                    {
                      val: 'DDR',
                      count: 8,
                    },
                    {
                      val: 'Deutschland',
                      count: 8,
                    },
                    {
                      val: 'Erziehung',
                      count: 7,
                    },
                    {
                      val: 'Bildungspolitik',
                      count: 5,
                    },
                    {
                      val: 'Bildungssystem',
                      count: 5,
                    },
                    {
                      val: 'Erwachsenenbildung',
                      count: 5,
                    },
                    {
                      val: 'Schule',
                      count: 5,
                    },
                    {
                      val: 'Ausbildung',
                      count: 4,
                    },
                    {
                      val: 'Hochschule',
                      count: 4,
                    },
                    {
                      val: 'Mosambik',
                      count: 4,
                    },
                    {
                      val: 'education',
                      count: 4,
                    },
                    {
                      val: ' ',
                      count: 3,
                    },
                    {
                      val: 'BRD',
                      count: 3,
                    },
                    {
                      val: 'Germany',
                      count: 3,
                    },
                    {
                      val: 'Schulwesen',
                      count: 3,
                    },
                    {
                      val: 'Soziologie',
                      count: 3,
                    },
                    {
                      val: 'Arbeitsmotivation',
                      count: 2,
                    },
                  ],
                },
              },
              {
                val: 'Library & information sciences',
                count: 30,
                related: {
                  buckets: [
                    {
                      val: 'Library & information sciences',
                      count: 30,
                    },
                    {
                      val: 'Bibliotheks-Info, Bibliothek, Information',
                      count: 8,
                    },
                    {
                      val: ' Bibliotheks-Info, Bibliothek, Information ',
                      count: 7,
                    },
                    {
                      val: 'Hamburg / Helmut-Schmidt-Universität',
                      count: 5,
                    },
                    {
                      val: 'Bibliothek',
                      count: 4,
                    },
                    {
                      val: ' ',
                      count: 2,
                    },
                    {
                      val: 'Armee',
                      count: 2,
                    },
                    {
                      val: 'Bundeswehrreform',
                      count: 2,
                    },
                    {
                      val: 'Kommunikationsstrategie',
                      count: 2,
                    },
                    {
                      val: 'Marketingkonzept',
                      count: 2,
                    },
                    {
                      val: 'Qualitätsmanagement',
                      count: 2,
                    },
                    {
                      val: 'Universitätsbibliothek',
                      count: 2,
                    },
                    {
                      val: '  Bibliotheks-Info, Bibliothek, Information ',
                      count: 1,
                    },
                    {
                      val: ' Service Company',
                      count: 1,
                    },
                    {
                      val: 'Academic Library',
                      count: 1,
                    },
                    {
                      val: 'Benutzerbefragung',
                      count: 1,
                    },
                    {
                      val: 'Beschwerdemanagement',
                      count: 1,
                    },
                    {
                      val: 'Best-Practice-Beispiele',
                      count: 1,
                    },
                    {
                      val: 'Bestandskonzept',
                      count: 1,
                    },
                    {
                      val: 'Bibliotheks-Info, Bibliothek, Information ',
                      count: 1,
                    },
                  ],
                },
              },
              {
                val: 'General statistics',
                count: 25,
                related: {
                  buckets: [
                    {
                      val: 'General statistics',
                      count: 25,
                    },
                    {
                      val: ' SPC',
                      count: 1,
                    },
                    {
                      val:
                        'Double sampling plan by variables, Double-stage t-test',
                      count: 1,
                    },
                    {
                      val: 'EWMA',
                      count: 1,
                    },
                    {
                      val: 'Gaußtest',
                      count: 1,
                    },
                    {
                      val:
                        'Heuristics, Integer/Binary Program, Mathematical Optimization, Mathematical Programming, Scheduling, and Service Operations Management',
                      count: 1,
                    },
                    {
                      val:
                        'M3-Competition; time series; univariate forecasting method; combined',
                      count: 1,
                    },
                    {
                      val: 'MOSUM',
                      count: 1,
                    },
                    {
                      val:
                        'Mixture Models, Number of Components, Likelihood Ratio Tests, Tests for Homogeneity, Bootstrap, Nonparametric Maximum Likelihood Estimation',
                      count: 1,
                    },
                    {
                      val: 'Statistische Prozesskontrolle',
                      count: 1,
                    },
                    {
                      val: 'Statistischer Test',
                      count: 1,
                    },
                    {
                      val: 'Strukturbrüche',
                      count: 1,
                    },
                    {
                      val:
                        'mixture models, globally convergent algorithms, multiple maxima',
                      count: 1,
                    },
                    {
                      val: 't-Test',
                      count: 1,
                    },
                    {
                      val: 'Ökonometrie',
                      count: 1,
                    },
                  ],
                },
              },
              {
                val: 'Bildung',
                count: 14,
                related: {
                  buckets: [
                    {
                      val: 'Bildung',
                      count: 14,
                    },
                    {
                      val: 'Education',
                      count: 13,
                    },
                    {
                      val: 'Erziehung',
                      count: 3,
                    },
                    {
                      val: 'Schule',
                      count: 3,
                    },
                    {
                      val: 'Weiterbildung',
                      count: 3,
                    },
                    {
                      val: 'Bildungssystem',
                      count: 2,
                    },
                    {
                      val: 'UNESCO',
                      count: 2,
                    },
                    {
                      val: 'Ausbildung',
                      count: 1,
                    },
                    {
                      val: 'BRD',
                      count: 1,
                    },
                    {
                      val: 'Berufsbildung',
                      count: 1,
                    },
                    {
                      val: 'Berufsethik',
                      count: 1,
                    },
                    {
                      val: 'Beschäftigungspolitik',
                      count: 1,
                    },
                    {
                      val: 'Bildungsbürgertum',
                      count: 1,
                    },
                    {
                      val: 'Bildungselite',
                      count: 1,
                    },
                    {
                      val: 'Bildungspolitik',
                      count: 1,
                    },
                    {
                      val: 'Bildungsreform',
                      count: 1,
                    },
                    {
                      val: 'Bürgertum',
                      count: 1,
                    },
                    {
                      val: 'Chancengleichheit',
                      count: 1,
                    },
                    {
                      val: 'DDR',
                      count: 1,
                    },
                    {
                      val:
                        'Deutschland <DDR> / Gesetz über das einheitliche sozialistische Bildungssystem',
                      count: 1,
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          val: 'HafenCity Universität',
          count: 455,
          subjects: {
            buckets: [
              {
                val: 'Civic and landscape art',
                count: 362,
                related: {
                  buckets: [
                    {
                      val: 'Civic and landscape art',
                      count: 362,
                    },
                    {
                      val: 'Stadtentwicklung',
                      count: 77,
                    },
                    {
                      val: 'Hamburg',
                      count: 55,
                    },
                    {
                      val: 'Stadtplanung',
                      count: 43,
                    },
                    {
                      val: 'Bürgerbeteiligung',
                      count: 16,
                    },
                    {
                      val: 'Klimaänderung',
                      count: 15,
                    },
                    {
                      val: 'Nachhaltigkeit',
                      count: 15,
                    },
                    {
                      val: 'Wohnungsmarkt',
                      count: 14,
                    },
                    {
                      val: 'Wohnungsbau',
                      count: 13,
                    },
                    {
                      val: 'Nutzungsänderung',
                      count: 12,
                    },
                    {
                      val: 'Einzelhandel',
                      count: 11,
                    },
                    {
                      val: 'Regionalplanung',
                      count: 11,
                    },
                    {
                      val: 'Stadtviertel',
                      count: 11,
                    },
                    {
                      val: 'Hauptstadt',
                      count: 10,
                    },
                    {
                      val: 'Wohnen',
                      count: 9,
                    },
                    {
                      val: 'Innenstadt',
                      count: 8,
                    },
                    {
                      val: 'Öffentlicher Raum',
                      count: 8,
                    },
                    {
                      val: 'Anpassung',
                      count: 7,
                    },
                    {
                      val: 'Migration',
                      count: 7,
                    },
                    {
                      val: 'Raumordnung',
                      count: 7,
                    },
                  ],
                },
              },
              {
                val: 'Stadtentwicklung',
                count: 83,
                related: {
                  buckets: [
                    {
                      val: 'Stadtentwicklung',
                      count: 83,
                    },
                    {
                      val: 'Civic and landscape art',
                      count: 77,
                    },
                    {
                      val: 'Hamburg',
                      count: 17,
                    },
                    {
                      val: 'Stadtplanung',
                      count: 15,
                    },
                    {
                      val: 'Hauptstadt',
                      count: 9,
                    },
                    {
                      val: 'Stadtviertel',
                      count: 7,
                    },
                    {
                      val: 'Bürgerbeteiligung',
                      count: 5,
                    },
                    {
                      val: 'Nachhaltigkeit',
                      count: 5,
                    },
                    {
                      val: 'Transformation',
                      count: 5,
                    },
                    {
                      val: 'Freiraum',
                      count: 4,
                    },
                    {
                      val: 'Baunutzungsverordnung',
                      count: 3,
                    },
                    {
                      val: 'Großprojekt',
                      count: 3,
                    },
                    {
                      val: 'Kairo',
                      count: 3,
                    },
                    {
                      val: 'Kleinstadt',
                      count: 3,
                    },
                    {
                      val: 'Kommunalpolitik',
                      count: 3,
                    },
                    {
                      val: 'Kultur',
                      count: 3,
                    },
                    {
                      val: 'Nutzungsänderung',
                      count: 3,
                    },
                    {
                      val: 'Planungsrecht',
                      count: 3,
                    },
                    {
                      val: 'urban development',
                      count: 3,
                    },
                    {
                      val: 'Architecture',
                      count: 2,
                    },
                  ],
                },
              },
              {
                val: 'Hamburg',
                count: 71,
                related: {
                  buckets: [
                    {
                      val: 'Hamburg',
                      count: 71,
                    },
                    {
                      val: 'Civic and landscape art',
                      count: 55,
                    },
                    {
                      val: 'Stadtentwicklung',
                      count: 17,
                    },
                    {
                      val: 'Natural resources',
                      count: 12,
                    },
                    {
                      val: 'energy and environment',
                      count: 12,
                    },
                    {
                      val: 'Nachhaltigkeit',
                      count: 11,
                    },
                    {
                      val: 'Stadtplanung',
                      count: 11,
                    },
                    {
                      val: 'Carsharing',
                      count: 9,
                    },
                    {
                      val: 'Elektromobilität',
                      count: 9,
                    },
                    {
                      val: 'E-Carsharing',
                      count: 8,
                    },
                    {
                      val: 'Modellregionen Elektromobilität',
                      count: 8,
                    },
                    {
                      val: 'Wohnungsbau',
                      count: 8,
                    },
                    {
                      val: 'e-Quartier Hamburg',
                      count: 8,
                    },
                    {
                      val: 'Wohnungsmarkt',
                      count: 7,
                    },
                    {
                      val: 'Freiraum',
                      count: 5,
                    },
                    {
                      val: 'Transformation',
                      count: 5,
                    },
                    {
                      val: 'Stadtviertel',
                      count: 4,
                    },
                    {
                      val: 'Kreativität',
                      count: 3,
                    },
                    {
                      val: 'Kultur',
                      count: 3,
                    },
                    {
                      val: 'urban development',
                      count: 3,
                    },
                  ],
                },
              },
              {
                val: 'Stadtplanung',
                count: 47,
                related: {
                  buckets: [
                    {
                      val: 'Stadtplanung',
                      count: 47,
                    },
                    {
                      val: 'Civic and landscape art',
                      count: 43,
                    },
                    {
                      val: 'Stadtentwicklung',
                      count: 15,
                    },
                    {
                      val: 'Hamburg',
                      count: 11,
                    },
                    {
                      val: 'Hauptstadt',
                      count: 10,
                    },
                    {
                      val: 'Bürgerbeteiligung',
                      count: 4,
                    },
                    {
                      val: 'Evaluation',
                      count: 2,
                    },
                    {
                      val: 'Flüchtling',
                      count: 2,
                    },
                    {
                      val: 'Förderung',
                      count: 2,
                    },
                    {
                      val: 'Integration',
                      count: 2,
                    },
                    {
                      val: 'Nachhaltigkeit',
                      count: 2,
                    },
                    {
                      val: 'Nachtleben',
                      count: 2,
                    },
                    {
                      val: 'Unterkunft',
                      count: 2,
                    },
                    {
                      val: 'urban design',
                      count: 2,
                    },
                    {
                      val: ' Geschichte 1950-1960',
                      count: 1,
                    },
                    {
                      val: ' Kasachstan',
                      count: 1,
                    },
                    {
                      val: ' Punjab',
                      count: 1,
                    },
                    {
                      val: 'Abuja',
                      count: 1,
                    },
                    {
                      val: 'Ankunft',
                      count: 1,
                    },
                    {
                      val: 'Architecture',
                      count: 1,
                    },
                  ],
                },
              },
              {
                val: 'Nachhaltigkeit',
                count: 31,
                related: {
                  buckets: [
                    {
                      val: 'Nachhaltigkeit',
                      count: 31,
                    },
                    {
                      val: 'Civic and landscape art',
                      count: 15,
                    },
                    {
                      val: 'Natural resources',
                      count: 14,
                    },
                    {
                      val: 'energy and environment',
                      count: 14,
                    },
                    {
                      val: 'Hamburg',
                      count: 11,
                    },
                    {
                      val: 'Elektromobilität',
                      count: 10,
                    },
                    {
                      val: 'Carsharing',
                      count: 8,
                    },
                    {
                      val: 'E-Carsharing',
                      count: 8,
                    },
                    {
                      val: 'Modellregionen Elektromobilität',
                      count: 8,
                    },
                    {
                      val: 'e-Quartier Hamburg',
                      count: 8,
                    },
                    {
                      val: 'Stadtentwicklung',
                      count: 5,
                    },
                    {
                      val: 'Instrument',
                      count: 3,
                    },
                    {
                      val: 'Olympische Spiele',
                      count: 3,
                    },
                    {
                      val: 'Architecture',
                      count: 2,
                    },
                    {
                      val: 'Architektur',
                      count: 2,
                    },
                    {
                      val: 'Charging infrastructure',
                      count: 2,
                    },
                    {
                      val: 'China',
                      count: 2,
                    },
                    {
                      val: 'Elektrofahrzeug',
                      count: 2,
                    },
                    {
                      val: 'Estland',
                      count: 2,
                    },
                    {
                      val: 'Forschungsmethodik in China',
                      count: 2,
                    },
                  ],
                },
              },
              {
                val: 'Natural resources',
                count: 30,
                related: {
                  buckets: [
                    {
                      val: 'Natural resources',
                      count: 30,
                    },
                    {
                      val: 'energy and environment',
                      count: 30,
                    },
                    {
                      val: 'Nachhaltigkeit',
                      count: 14,
                    },
                    {
                      val: 'Hamburg',
                      count: 12,
                    },
                    {
                      val: 'Carsharing',
                      count: 8,
                    },
                    {
                      val: 'E-Carsharing',
                      count: 8,
                    },
                    {
                      val: 'Elektromobilität',
                      count: 8,
                    },
                    {
                      val: 'Modellregionen Elektromobilität',
                      count: 8,
                    },
                    {
                      val: 'e-Quartier Hamburg',
                      count: 8,
                    },
                    {
                      val: 'Kairo',
                      count: 3,
                    },
                    {
                      val: 'Klimaänderung',
                      count: 3,
                    },
                    {
                      val: 'Kreislaufwirtschaft',
                      count: 3,
                    },
                    {
                      val: 'Stadt',
                      count: 3,
                    },
                    {
                      val: 'Gebäude',
                      count: 2,
                    },
                    {
                      val: 'Planung',
                      count: 2,
                    },
                    {
                      val: 'Stadtentwicklung',
                      count: 2,
                    },
                    {
                      val: 'Umwelt',
                      count: 2,
                    },
                    {
                      val: 'Wasser',
                      count: 2,
                    },
                    {
                      val: 'environment',
                      count: 2,
                    },
                    {
                      val: 'sustainability',
                      count: 2,
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
}
