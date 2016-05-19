from nullexceptionapp.model.job import Job
from nullexceptionapp.es.search import search
from prf.view import BaseView

class JobsView(BaseView):
    _model = Job

    def index(self):
        if 'q' in self._params:
            return search(self._params['q'])

        #r = Job.get_collection(_limit=-1)
        r = Job.get_collection(**self._params)
        return r

    def show(self, **kw):
        pass