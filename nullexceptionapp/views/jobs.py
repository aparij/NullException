from nullexceptionapp.model.job import Job
from prf.view import BaseView

class JobsView(BaseView):
    _model = Job

    def index(self):
        r = Job.get_collection(**self._params)
        return r

    def show(self, **kw):
        pass