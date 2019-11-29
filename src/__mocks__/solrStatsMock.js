export default {
  responseHeader: {
    status: 0,
    QTime: 10,
    params: {
      q: '*',
      'json.facet':
        '{"rightsOA":{"type":"terms","field":"rightsOA"},"language":{"type":"terms","field":"language","mincount":0,"limit":100},"publicationYear":{"type":"terms","field":"publicationYear","mincount":0,"limit":25,"sort":{"index":"desc"}},"resourceType":{"type":"terms","field":"resourceType","mincount":0,"limit":100},"unbekannt":{"type":"query","q":"-subject:[* TO *]"},"bekannt":{"type":"query","q":"subject:[* TO *]"}}',
      rows: '0',
    },
  },
  response: { numFound: 69434, start: 0, docs: [] },
  facets: {
    count: 69434,
    rightsOA: {
      buckets: [
        {
          val: 'zugriffsbeschränkt',
          count: 49988,
        },
        {
          val: 'Open Access',
          count: 19446,
        },
      ],
    },
    language: {
      buckets: [
        {
          val: 'de',
          count: 36400,
        },
        {
          val: 'en',
          count: 32590,
        },
        {
          val: 'fr',
          count: 94,
        },
        {
          val: 'es',
          count: 89,
        },
        {
          val: 'ru',
          count: 30,
        },
        {
          val: 'it',
          count: 28,
        },
        {
          val: 'pt',
          count: 21,
        },
        {
          val: 'nl',
          count: 9,
        },
        {
          val: 'zh',
          count: 5,
        },
        {
          val: 'el',
          count: 4,
        },
        {
          val: 'pl',
          count: 4,
        },
        {
          val: 'tk',
          count: 3,
        },
        {
          val: 'no',
          count: 2,
        },
        {
          val: 'fin',
          count: 1,
        },
        {
          val: 'ja',
          count: 1,
        },
        {
          val: 'por',
          count: 1,
        },
      ],
    },
    publicationYear: {
      buckets: [
        {
          val: '2019',
          count: 832,
        },
        {
          val: '2018',
          count: 3875,
        },
        {
          val: '2017',
          count: 3750,
        },
        {
          val: '2016',
          count: 6241,
        },
        {
          val: '2015',
          count: 6375,
        },
        {
          val: '2014',
          count: 7145,
        },
        {
          val: '2013',
          count: 6510,
        },
        {
          val: '2012',
          count: 7194,
        },
        {
          val: '2011',
          count: 6211,
        },
        {
          val: '2010',
          count: 5695,
        },
        {
          val: '2009',
          count: 5616,
        },
        {
          val: '2008',
          count: 1890,
        },
        {
          val: '2007',
          count: 1734,
        },
        {
          val: '2006',
          count: 1203,
        },
        {
          val: '2005',
          count: 940,
        },
        {
          val: '2004',
          count: 788,
        },
        {
          val: '2003',
          count: 762,
        },
        {
          val: '2002',
          count: 695,
        },
        {
          val: '2001',
          count: 625,
        },
        {
          val: '2000',
          count: 296,
        },
        {
          val: '1999',
          count: 245,
        },
        {
          val: '1998',
          count: 50,
        },
        {
          val: '1997',
          count: 46,
        },
        {
          val: '1996',
          count: 17,
        },
        {
          val: '1995',
          count: 16,
        },
      ],
    },
    resourceType: {
      buckets: [
        {
          val: 'Article',
          count: 46813,
        },
        {
          val: 'Dissertation',
          count: 8158,
        },
        {
          val: 'Thesis',
          count: 5167,
        },
        {
          val: 'Book',
          count: 4774,
        },
        {
          val: 'Digital',
          count: 2148,
        },
        {
          val: 'Working Paper',
          count: 604,
        },
        {
          val: 'Technical Report',
          count: 512,
        },
        {
          val: 'Other',
          count: 395,
        },
        {
          val: 'Research Paper',
          count: 357,
        },
        {
          val: 'Proceedings Part',
          count: 207,
        },
        {
          val: 'Book Part',
          count: 103,
        },
        {
          val: 'Journal',
          count: 64,
        },
        {
          val: 'Preprint',
          count: 38,
        },
        {
          val: 'Proceedings',
          count: 33,
        },
        {
          val: 'Poster',
          count: 16,
        },
        {
          val: 'Presentation',
          count: 8,
        },
        {
          val: 'Software',
          count: 8,
        },
        {
          val: 'Habilitation',
          count: 7,
        },
        {
          val: 'Dataset',
          count: 5,
        },
        {
          val: 'Festschrift',
          count: 5,
        },
        {
          val: 'Interactive Resource',
          count: 4,
        },
        {
          val: 'Manual',
          count: 4,
        },
        {
          val: 'Learning Object',
          count: 2,
        },
        {
          val: 'Diagram',
          count: 1,
        },
        {
          val: 'Patent',
          count: 1,
        },
      ],
    },
    unbekannt: {
      count: 34208,
    },
    bekannt: {
      count: 35226,
    },
  },
}
