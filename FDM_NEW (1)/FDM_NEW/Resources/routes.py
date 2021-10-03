from .classificationApi import classificationApi

def initialize_routes(api):
    # user api
    api.add_resource(classificationApi, '/api/users')

    