from nullexceptionapp.model.job import Job
from nullexceptionapp.es.search import search
from prf.view import BaseView

class JobsView(BaseView):
    _model = Job

    def index(self):
        if 'q' in self._params and self._params['q']:
            return search(self._params['q'],self._params['_limit'],None)

        #r = Job.get_collection(_limit=-1)

        r = Job.get_collection(**self._params)
        return r
        #import pdb;pdb.set_trace()
        #return {"results": r, "total": r.count(), "from": int(self._params['_limit']) + int(self._params['_start'])}

    def show(self, **kw):
        pass