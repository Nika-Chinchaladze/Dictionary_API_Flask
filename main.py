from flask import Flask, render_template, request
from api_class import DictionaryClass

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def home_page():
    if request.method == "POST":
        chosen_word = request.form.get("search")
        tool = DictionaryClass()
        meaning_data = tool.get_definition(word=chosen_word)
        return render_template("dictionary.html", meaning=meaning_data)
    return render_template("index.html")


@app.route("/dictionary", methods=["GET", "POST"])
def dictionary_page():
    if request.method == "POST":
        chosen_word = request.form.get("search")
        tool = DictionaryClass()
        meaning_data = tool.get_definition(word=chosen_word)
        return render_template("dictionary.html", meaning=meaning_data)


if __name__ == "__main__":
    app.run(debug=True)
