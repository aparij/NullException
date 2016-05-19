# NullException


NullException is a demo of Pyramid/PRF/MongoDB/ElasticSearch. <br/>
It contains jobs data scraped from StackOverflow Careers.<br/>


Install mongodb
Install ElasticSearch + https://github.com/mobz/elasticsearch-head


##To insert job data into MongoDB run :

``mongoimport --collection job --type json --file scripts/jobs2016-04-24_B.json --jsonArray``

##To index job data into ElasticSearch run scripts/es_load_json.py


##API endpoints

/jobs

