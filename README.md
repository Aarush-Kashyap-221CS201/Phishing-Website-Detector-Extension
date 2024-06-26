# Phishing-Website-Detector-Extension 

## Description

This Phishing Website detector extension is an easy-to-use Chrome extension which allows the users to enter any URL and check if the corresponding website is a phishing website or a legit website

## Resources Used

1. For legit sites, the file legit_urls.csv is used (saved inside the resources folder)
2. For phishing sites, the file phishing_urls.csv is used (saved inside the resources folder)
3. The features extracted from the URLs are mentioned in Phishing Websites Features.docx (saved inside the resources folder)

## Feature Extraction

1. 5000 legit and phishing URLs each are chosen randomly
2. Their features are extracted: only address bar based features are used in this project
3. Their individual dataframes (obtained using feature extraction) are combined and shuffled

## Making and Saving the Model

1. Train Test split is employed on the combined dataframe
2. XGBoostClassifier is used to train the data
3. Final accuracy: Training: 81.9% , Testing: 80.4%
4. The model is saved

## Using the model in the extension

1. The extension allows you to enter a custom URL
2. The model is employed using the Fetch API from JS
3. The result is directly shown in the extension itself - Legit or Phishing
