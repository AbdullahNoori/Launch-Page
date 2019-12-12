from flask import Flask, render_template

app = Flask(__name__)

@app.route('/songs_list')
def song_list():
# list of songs
    list_songs = ["Hailmary"
     "Changes", "Rear View",
     "Until the End of time"]

    return render_template('songs_list.html', songs = list_songs)




# # A function that takes in 2 numbers and returns their sum.
# def multiply(a, b):
    
#   """  Paramaters:
#     a (2): the first operand
#     b (5): the second operand

#     Returns:
#     int: The product of the 2 numbers
#     """
# a = 2
# b = 5




