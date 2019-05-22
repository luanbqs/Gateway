from app import app

from werkzeug.routing import Rule

app.add_url_rule('/create-guest'    , methods=['POST'], endpoint='/create-guest')
app.add_url_rule('/search-guest', methods=['POST'], endpoint='/search-guest')
app.add_url_rule('/delet-guest'  , methods=['POST'], endpoint='/delete-guest')
app.add_url_rule('/update-guest'   , methods=['POST'], endpoint='/update-guest')
