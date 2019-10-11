export default {
  facets: {
    count: 300,
    collections: {
      buckets: [
        {
          val: 'c1',
          count: 100,
          subjects: {
            buckets: [
              {
                val: 's1',
                count: 10,
                related: {
                  buckets: [
                    {
                      val: 's1',
                      count: 10,
                    },
                    {
                      val: 's2',
                      count: 5,
                    },
                  ],
                },
              },
              {
                val: 's2',
                count: 20,
                related: {
                  buckets: [
                    {
                      val: 's2',
                      count: 20,
                    },
                    {
                      val: 's1',
                      count: 5,
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          val: 'c2',
          count: 200,
          subjects: {
            buckets: [
              {
                val: 's3',
                count: 100,
                related: {
                  buckets: [
                    {
                      val: 's3',
                      count: 100,
                    },
                  ],
                },
              },
              {
                val: 's1',
                count: 10,
                related: {
                  buckets: [
                    {
                      val: 's1',
                      count: 10,
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
