from elasticsearch import Elasticsearch

def search(q, size, start_from ):
    es = Elasticsearch()
    print q
    res = es.search(index="jobs-index", doc_type="string",
                    body={"query":{"bool":{"should":[{"fuzzy":{"company":{"value":q}}},
                                                     {"fuzzy":{"tags":{"value":q}}},
                                                     {"fuzzy": {"title": {"value": q}}}
                                                   ],

                                           }},
                          "from":0,
                          "size":10,
                          "sort":[],
                          "aggs":{}}
    )
    print("%d documents found:" % res['hits']['total'])
    return [item['_source'] for item in res['hits']['hits']]
