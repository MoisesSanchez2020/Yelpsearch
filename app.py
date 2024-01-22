from flask import Flask, request, jsonify, render_template
import requests

app = Flask(__name__)

API_KEY = 'Ek8zOvr4GbmeYX5mIVVuxEIcd9Xphhcm_KujQv_yiZsvB9ZcjSJ-XRlKqw0v0YHXuaUFZN25M7mvuSt6NHS644Af9cBrhSiAF5BtncZPZTvOvoXQCuogcMmU2DFEZXYx'
YELP_ENDPOINT = 'https://api.yelp.com/v3/businesses/search'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search():
    data = request.json
    term = data['term']
    location = data['location']

    headers = {'Authorization': f'Bearer {API_KEY}'}
    params = {'term': term, 'location': location}

    response = requests.get(YELP_ENDPOINT, headers=headers, params=params)
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)
