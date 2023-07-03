from flask import Flask, render_template, request
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.ensemble import RandomForestClassifier
import nltk
from nltk.sentiment import SentimentIntensityAnalyzer

app = Flask(__name__)

# Charger le modèle de machine learning
df = pd.read_csv("amazon_reviews.csv")
X = df['reviewText']
y = df['overall']
vectorizer = CountVectorizer()
X_vec = vectorizer.fit_transform(X.astype(str))
classifier = RandomForestClassifier()
classifier.fit(X_vec, y)

# Charger le sentiment analyzer VADER
nltk.download('vader_lexicon')
sia = SentimentIntensityAnalyzer()

# Page d'accueil
@app.route('/')
def home():
    return render_template('commentaires.html')

# Prédire le sentiment
@app.route('/predict', methods=['POST'])
def predict():
    comment = request.form['comment']
    
    # Prédire le sentiment avec le modèle de machine learning
    comment_vec = vectorizer.transform([comment])
    sentiment_ml = classifier.predict(comment_vec)[0]
    
    # Prédire le sentiment avec le sentiment analyzer VADER
    sentiment_vader = sia.polarity_scores(comment)['compound']
    if sentiment_vader >= 0.05:
        sentiment_vader = 1  # Positif
    elif sentiment_vader <= -0.05:
        sentiment_vader = 3  # Négatif
    else:
        sentiment_vader = 2  # Neutre
    
    return render_template('resultat.html', comment=comment, sentiment_ml=sentiment_ml, sentiment_vader=sentiment_vader)

if __name__ == '__main__':
    app.run(debug=True)
