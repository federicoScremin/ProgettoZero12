from pymongo import MongoClient 
import numpy as np
import pandas as pd 

# costanti
MIN_TEMPERATURE = 18.0
MAX_TEMPERATURE = 39.0
TOTAL_OCCURRENCES = 20
START_TIMESTAMP = "01-01-2018 08:30:00"
END_TIMESTAMP = "31-10-2018 20:30:00"

# array per la simulazione di letture del sensore
IDS = list(range(1,21))
VALUES = np.random.uniform(low=MIN_TEMPERATURE, high=MAX_TEMPERATURE, size=(TOTAL_OCCURRENCES,))
TIMESTAMPS = pd.date_range(start='2016-01-15', periods=20, freq='1M').strftime('%Y-%m-%d').flatten()

# creazione client (localhost)
client = MongoClient("mongodb://localhost:27017/")

# connesione db
db = client["zero12_db"]

# collegamento collection Temperatures
collectionTemperatures = db["temperatures"]

# inserimento occorrenze nel db
for index in range(TOTAL_OCCURRENCES):
	temp = {
	    '_id': str(IDS[index]),
	    'value': str(VALUES[index]),
	    'timestamp': str(TIMESTAMPS[index])
	}
	result = collectionTemperatures.insert_one(temp)

# lettura occorrenze presenti nel db
for data in collectionTemperatures.find():
	print(data)

# eliminazione collection Temperatures dal db
#collectionTemperatures.drop()