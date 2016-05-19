from datetime import datetime

from elasticsearch import Elasticsearch
from elasticsearch import helpers

import simplejson

es = Elasticsearch()

actions = []


with open('jobs2016-04-24_B.json') as data_file:
    data = simplejson.load(data_file)
    print "a"
    for item in data:
        action = {
            "_index": "jobs-index",
            "_type": "string",
            "_id": item['j_id'],
            "_source": {
                "company": item['company'],
                "title": item["title"],
                "tags": item["tags"],
                "timestamp": datetime.now()
                }
            }

        actions.append(action)

if len(actions) > 0:
    helpers.bulk(es, actions)