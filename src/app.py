from flask import Flask, request, session, jsonify, make_response
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
from flask import render_template
app = Flask(__name__)
SESSION_TYPE  =  'redis'
#----------------------------------------------------Conexion con servidor react(FrontEnd)-----------------------------------------------------------

CORS(app)
#----------------------------------------------------Configuracio de la base de datos-----------------------------------------------------------

app.config['MONGO_URI'] = 'mongodb://localhost/littleamazon'

mongo = PyMongo(app)
product_table = mongo.db.product


@app.route('/', methods=['GET'])
def index():
	return render_template('index.html')


@app.route('/insertnew', methods=['GET'])
def insert():
	return 'hora de insertar'

@app.route("/add_p", methods=['POST'])
def add_p():
    if request.method == 'POST':
        name = request.form['name']
        price = request.form['price']
        desc = request.form['desc']
        url = request.form['url_s_i']

        id = product_table.insert({
            'name': name,
            'price': price,
            'desc': desc,
            'url': url
        })
        if id:
            return 'Genial ya esta el producto: '+request.form['name']
        else:
            return 'UPs! no se a podido guardar el producto: '+ request.form['name']

if __name__ == '__main__':
	app.secret_key = '*//56/7*//*y*/i*/´pp´+/78*/'
	app.run(debug=True)
	