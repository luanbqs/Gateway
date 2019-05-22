from app import app

from werkzeug.routing import Rule

app.add_url_rule('/creat-user'    , methods=['POST'], endpoint='/create-user')
app.add_url_rule('/search-user', methods=['POST'], endpoint='/search-user')
app.add_url_rule('/delet-user'  , methods=['POST'], endpoint='/delete-user')
app.add_url_rule('/update-user'   , methods=['POST'], endpoint='/update-user')
