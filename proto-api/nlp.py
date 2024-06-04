import spacy

# Load the pre-trained model
nlp = spacy.load('en_core_web_sm')

# Example text
text = "Apple is looking at buying U.K. startup for $1 billion"

# Process the text
doc = nlp(text)

# Print entities in the text
for ent in doc.ents:
    print(ent.text, ent.label_)