```javascript
const query = { "$expr": { "$gt": [ { "$size": "$arrayField" }, 5 ] } };

// This query uses the aggregation framework operator $expr to compare the size of the array field to 5. 
// It will return documents where the size of the array is greater than 5.
db.collection.find(query); 
```