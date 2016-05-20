from pyramid.config import Configurator


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    config = Configurator(settings=settings)
    config.include('pyramid_chameleon')
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_route('home', '/')
    config.scan()

    config.include('prf')
    config.include('prf.mongodb')
    root = config.get_root_resource()
    job = root.add('job', 'jobs', view='nullexceptionapp.views.jobs.JobsView')

    return config.make_wsgi_app()
