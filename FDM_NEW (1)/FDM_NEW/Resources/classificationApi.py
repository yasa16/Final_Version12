from flask import Response, request, jsonify, abort
from flask_restful import Resource


class classificationApi(Resource):
    def get(self):
        return Response("kk", mimetype="application/json", status=200)


    def post(self):

        classif = request.form['Gender']
        print(classif)
        print('ss')
        return classif,200 

