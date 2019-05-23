from app import app

app.add_url_rule('/create-event'    , methods=['POST'], endpoint='/create-event')
app.add_url_rule('/search-event'    , methods=['POST'], endpoint='/search-event')
app.add_url_rule('/delet-event'     , methods=['POST'], endpoint='/delete-event')
app.add_url_rule('/update-event'    , methods=['POST'], endpoint='/update-event')
