from pyramid.view import view_config
from nullexceptionapp.model.job import Job


@view_config(route_name='home', renderer='templates/mytemplate.pt')
def my_view(request):
    #print Job.get_collection(limit=-1)
    #import pdb;pdb.set_trace()
    return {'project': 'NullExceptionApp - StackOverflow Jobs',
             'jobs': Job.get_collection(_limit=20)
            }


