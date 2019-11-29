const config = {
  collectionField: 'internal_institution',
  topNSubject: 6,
  topMCoSubjects: 20,
  queryLimits: {
    internal_institution: 100,
    internal_geoLocation_facet: 100,
    language: 100,
    publicationYear: 25,
    resourceType: 100,
  },
  minResolution: {
    width: 1200,
    height: 980,
  },
}

export default config
