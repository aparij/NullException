from pyramid.view import view_config
from nullexceptionapp.model.job import Job


@view_config(route_name='home', renderer='templates/mytemplate.pt')
def my_view(request):
    return {'project': 'NullExceptionApp - StackOverflow Jobs',
             
            }


