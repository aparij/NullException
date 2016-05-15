import mongoengine as mongo
from prf.mongodb import Base


class Job(Base):

    j_id = mongo.StringField(required=False)
    salary = mongo.StringField(required=False)
    company = mongo.StringField(required=True)
    title = mongo.StringField(required=True)
    tags = mongo.ListField(mongo.StringField())
    location = mongo.StringField(required=True)
    remote = mongo.StringField(required=True)
