export default {
  responseHeader: {
    status: 0,
    QTime: 4,
    params: {
      q: '"Hochschulschrift"',
      'json.facet':
        '{"collections":{"type":"terms","field":"internal_institution","limit":100,"facet":{"subjects":{"type":"terms","field":"subject","limit":6,"facet":{"related":{"type":"terms","field":"subject","limit":20}}}}}}',
      rows: '0',
    },
  },
  response: { numFound: 719, start: 0, docs: [] },
  facets: {
    count: 719,
    collections: {
      buckets: [
        {
          val: 'Universität Hamburg',
          count: 719,
          subjects: {
            buckets: [
              {
                val: 'Hochschulschrift',
                count: 719,
                related: {
                  buckets: [
                    {
                      val: 'Hochschulschrift',
                      count: 719,
                    },
                    {
                      val: 'Elementarteilchenphysik',
                      count: 71,
                    },
                    {
                      val: 'Experimentalphysik',
                      count: 71,
                    },
                    {
                      val: 'Deutschland',
                      count: 66,
                    },
                    {
                      val: 'LHC',
                      count: 44,
                    },
                    {
                      val: 'Proton-Proton-Streuung',
                      count: 28,
                    },
                    {
                      val: 'Quantenoptik',
                      count: 27,
                    },
                    {
                      val: 'nichtlineare Optik',
                      count: 27,
                    },
                    {
                      val: 'Atmosphäre',
                      count: 26,
                    },
                    {
                      val: 'HERA <Teilchenbeschleuniger>',
                      count: 26,
                    },
                    {
                      val: 'CMS-Detektor',
                      count: 25,
                    },
                    {
                      val: 'Klimatologie',
                      count: 25,
                    },
                    {
                      val:
                        'Physik der Elementarteilchen und Felder: Allgemeines',
                      count: 25,
                    },
                    {
                      val: 'Quantenfeldtheorie',
                      count: 24,
                    },
                    {
                      val: 'Elektron-Proton-Streuung',
                      count: 22,
                    },
                    {
                      val: 'Quantenchromodynamik',
                      count: 22,
                    },
                    {
                      val: 'Tiefinelastische Streuung',
                      count: 21,
                    },
                    {
                      val: 'Paperback / softback',
                      count: 20,
                    },
                    {
                      val: 'Wirkungsquerschnitt',
                      count: 19,
                    },
                    {
                      val: 'Freie-Elektronen-Laser',
                      count: 18,
                    },
                  ],
                },
              },
              {
                val: 'Elementarteilchenphysik',
                count: 71,
                related: {
                  buckets: [
                    {
                      val: 'Elementarteilchenphysik',
                      count: 71,
                    },
                    {
                      val: 'Hochschulschrift',
                      count: 71,
                    },
                    {
                      val: 'Experimentalphysik',
                      count: 42,
                    },
                    {
                      val: 'HERA <Teilchenbeschleuniger>',
                      count: 24,
                    },
                    {
                      val: 'LHC',
                      count: 23,
                    },
                    {
                      val: 'Elektron-Proton-Streuung',
                      count: 19,
                    },
                    {
                      val: 'Tiefinelastische Streuung',
                      count: 19,
                    },
                    {
                      val: 'H1',
                      count: 16,
                    },
                    {
                      val: 'Wirkungsquerschnitt',
                      count: 16,
                    },
                    {
                      val: 'Quantenchromodynamik',
                      count: 14,
                    },
                    {
                      val: 'CMS-Detektor',
                      count: 13,
                    },
                    {
                      val: 'Proton-Proton-Streuung',
                      count: 13,
                    },
                    {
                      val: 'ZEUS',
                      count: 12,
                    },
                    {
                      val: 'ATLAS',
                      count: 9,
                    },
                    {
                      val: 'Positron-Proton-Streuung',
                      count: 9,
                    },
                    {
                      val: 'Quantenfeldtheorie',
                      count: 9,
                    },
                    {
                      val: 'ILC',
                      count: 8,
                    },
                    {
                      val: 'Supersymmetrie',
                      count: 8,
                    },
                    {
                      val: 'Feldtheorien',
                      count: 7,
                    },
                    {
                      val: 'Monte-Carlo-Simulation',
                      count: 7,
                    },
                  ],
                },
              },
              {
                val: 'Experimentalphysik',
                count: 71,
                related: {
                  buckets: [
                    {
                      val: 'Experimentalphysik',
                      count: 71,
                    },
                    {
                      val: 'Hochschulschrift',
                      count: 71,
                    },
                    {
                      val: 'Elementarteilchenphysik',
                      count: 42,
                    },
                    {
                      val: 'Quantenoptik',
                      count: 22,
                    },
                    {
                      val: 'nichtlineare Optik',
                      count: 22,
                    },
                    {
                      val: 'LHC',
                      count: 16,
                    },
                    {
                      val: 'Freie-Elektronen-Laser',
                      count: 15,
                    },
                    {
                      val: 'HERA <Teilchenbeschleuniger>',
                      count: 14,
                    },
                    {
                      val: 'Tiefinelastische Streuung',
                      count: 12,
                    },
                    {
                      val: 'Elektron-Proton-Streuung',
                      count: 11,
                    },
                    {
                      val: 'Proton-Proton-Streuung',
                      count: 11,
                    },
                    {
                      val: 'Wirkungsquerschnitt',
                      count: 10,
                    },
                    {
                      val: 'Strahlüberwachung',
                      count: 9,
                    },
                    {
                      val: 'CMS-Detektor',
                      count: 8,
                    },
                    {
                      val: 'H1',
                      count: 8,
                    },
                    {
                      val: 'ZEUS',
                      count: 8,
                    },
                    {
                      val: 'ATLAS',
                      count: 7,
                    },
                    {
                      val: 'FLASH',
                      count: 7,
                    },
                    {
                      val: 'ILC',
                      count: 7,
                    },
                    {
                      val: 'Elektronenstrahl',
                      count: 6,
                    },
                  ],
                },
              },
              {
                val: 'Deutschland',
                count: 66,
                related: {
                  buckets: [
                    {
                      val: 'Deutschland',
                      count: 66,
                    },
                    {
                      val: 'Hochschulschrift',
                      count: 66,
                    },
                    {
                      val: 'Germany',
                      count: 7,
                    },
                    {
                      val:
                        'Deutsche Geschichte des 19. Jahrhunderts bis zur Gegenwart',
                      count: 6,
                    },
                    {
                      val: 'Paperback / softback',
                      count: 6,
                    },
                    {
                      val: 'Europäische Union',
                      count: 5,
                    },
                    {
                      val: 'Grundrechte',
                      count: 4,
                    },
                    {
                      val: 'Law and legislation',
                      count: 4,
                    },
                    {
                      val: 'Medienrecht',
                      count: 4,
                    },
                    {
                      val: 'Strafrecht: Besonderer Teil',
                      count: 4,
                    },
                    {
                      val: 'Einwanderer',
                      count: 3,
                    },
                    {
                      val: 'Grundrecht',
                      count: 3,
                    },
                    {
                      val: 'Kartellrecht',
                      count: 3,
                    },
                    {
                      val: 'Recht',
                      count: 3,
                    },
                    {
                      val: 'Recht einzelner Länder, Gebiete und Völker',
                      count: 3,
                    },
                    {
                      val: 'Rechtsvereinheitlichung',
                      count: 3,
                    },
                    {
                      val: 'Rechtsvergleichung',
                      count: 3,
                    },
                    {
                      val: 'Regulierung',
                      count: 3,
                    },
                    {
                      val: 'Tatbestand',
                      count: 3,
                    },
                    {
                      val: 'USA',
                      count: 3,
                    },
                  ],
                },
              },
              {
                val: 'LHC',
                count: 44,
                related: {
                  buckets: [
                    {
                      val: 'Hochschulschrift',
                      count: 44,
                    },
                    {
                      val: 'LHC',
                      count: 44,
                    },
                    {
                      val: 'Proton-Proton-Streuung',
                      count: 26,
                    },
                    {
                      val: 'CMS-Detektor',
                      count: 24,
                    },
                    {
                      val: 'Elementarteilchenphysik',
                      count: 23,
                    },
                    {
                      val: 'Experimentalphysik',
                      count: 16,
                    },
                    {
                      val: 'ATLAS',
                      count: 10,
                    },
                    {
                      val: 'Supersymmetrie',
                      count: 10,
                    },
                    {
                      val: 't-Quark',
                      count: 10,
                    },
                    {
                      val:
                        'Physik der Elementarteilchen und Felder: Allgemeines',
                      count: 8,
                    },
                    {
                      val: 'Wirkungsquerschnitt',
                      count: 8,
                    },
                    {
                      val: 'Higgs-Teilchen',
                      count: 7,
                    },
                    {
                      val: 'Quantenchromodynamik',
                      count: 7,
                    },
                    {
                      val: 'Hadronenjet',
                      count: 5,
                    },
                    {
                      val: 'Paarerzeugung',
                      count: 5,
                    },
                    {
                      val: 'Tauon',
                      count: 5,
                    },
                    {
                      val: 'Zwei-Jet-Ereignis',
                      count: 5,
                    },
                    {
                      val: 'Hintergrundstrahlung',
                      count: 4,
                    },
                    {
                      val: 'Leptonischer Zerfall',
                      count: 4,
                    },
                    {
                      val: 'Teilchenerzeugung',
                      count: 4,
                    },
                  ],
                },
              },
              {
                val: 'Proton-Proton-Streuung',
                count: 28,
                related: {
                  buckets: [
                    {
                      val: 'Hochschulschrift',
                      count: 28,
                    },
                    {
                      val: 'Proton-Proton-Streuung',
                      count: 28,
                    },
                    {
                      val: 'LHC',
                      count: 26,
                    },
                    {
                      val: 'CMS-Detektor',
                      count: 20,
                    },
                    {
                      val: 'Elementarteilchenphysik',
                      count: 13,
                    },
                    {
                      val: 'Experimentalphysik',
                      count: 11,
                    },
                    {
                      val: 't-Quark',
                      count: 10,
                    },
                    {
                      val: 'Wirkungsquerschnitt',
                      count: 7,
                    },
                    {
                      val: 'Higgs-Teilchen',
                      count: 6,
                    },
                    {
                      val: 'ATLAS',
                      count: 5,
                    },
                    {
                      val: 'Paarerzeugung',
                      count: 5,
                    },
                    {
                      val: 'Zwei-Jet-Ereignis',
                      count: 5,
                    },
                    {
                      val: 'Hadronenjet',
                      count: 4,
                    },
                    {
                      val: 'Quantenchromodynamik',
                      count: 4,
                    },
                    {
                      val: 'Supersymmetrie',
                      count: 4,
                    },
                    {
                      val: 'Differentieller Wirkungsquerschnitt',
                      count: 3,
                    },
                    {
                      val: 'Drell-Yan-Prozess',
                      count: 3,
                    },
                    {
                      val: 'Monte-Carlo-Simulation',
                      count: 3,
                    },
                    {
                      val: 'Querimpuls',
                      count: 3,
                    },
                    {
                      val: 'Teilchenerzeugung',
                      count: 3,
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
