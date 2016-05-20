from nullexceptionapp.model.job import Job
from nullexceptionapp.es.search import search
from prf.view import BaseView

class JobsView(BaseView):
    _model = Job

    def index(self):
        if 'q' in self._params and self._params['q']:
            return search(self._params['q'],self._params['_limit'],self._params['_start'])

        r = Job.get_collection(**self._params)
        return r

    def show(self, **kw):
        pass