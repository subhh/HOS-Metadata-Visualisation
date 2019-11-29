export default {
  responseHeader: {
    status: 0,
    QTime: 4,
    params: {
      q: '*',
      'json.facet':
        '{"locations":{"type":"terms","field":"internal_geoLocation_facet","limit":100,"facet":{"collection":{"type":"terms","field":"internal_institution"}}}}',
      rows: '0',
    },
  },
  response: { numFound: 69434, start: 0, docs: [] },
  facets: {
    count: 69434,
    locations: {
      buckets: [
        {
          val: '53.566570,9.984491',
          count: 59514,
          collection: {
            buckets: [
              {
                val: 'Universität Hamburg',
                count: 59514,
              },
            ],
          },
        },
        {
          val: '53.556675,10.022076',
          count: 4407,
          collection: {
            buckets: [
              {
                val: 'HAW Hamburg',
                count: 4407,
              },
            ],
          },
        },
        {
          val: '53.463558,9.969581',
          count: 2214,
          collection: {
            buckets: [
              {
                val: 'Technische Universität Hamburg',
                count: 2214,
              },
            ],
          },
        },
        {
          val: '53.567047,9.976418',
          count: 2148,
          collection: {
            buckets: [
              {
                val: 'Deutsches Klimarechenzentrum',
                count: 2148,
              },
            ],
          },
        },
        {
          val: '53.568590,10.110153',
          count: 696,
          collection: {
            buckets: [
              {
                val: 'Helmut-Schmidt-Universität',
                count: 696,
              },
            ],
          },
        },
        {
          val: '53.540253,10.004717',
          count: 455,
          collection: {
            buckets: [
              {
                val: 'HafenCity Universität',
                count: 455,
              },
            ],
          },
        },
      ],
    },
  },
}
