# Iris API [![Waffle.io - Issues in progress](https://badge.waffle.io/BeccaHyland/iris_app.png?label=in%20progress&title=In%20Progress)](http://waffle.io/BeccaHyland/iris_app)

### Normalizing the database with raw SQL
Recording my steps on an agile board is a way of communicating progress to teammates.
<img width="997" alt="waffle card for db normalization" src="https://user-images.githubusercontent.com/39714935/53176906-45034500-35ac-11e9-9e30-a1657107a740.png">
Instead of a column on the `irises` table listing the name of the class, an indexed foreign key is now used:
![new table - classes](https://user-images.githubusercontent.com/39714935/53176918-4c2a5300-35ac-11e9-9bce-5b66b218e927.png)
The new `classes` table:
![irises table normalized](https://user-images.githubusercontent.com/39714935/53176916-4af92600-35ac-11e9-9a8d-d5170cf57cca.png)


The Iris API ingests the classic [iris data set](https://archive.ics.uci.edu/ml/datasets/iris) and provides the following API endpoints:

*DOCUMENTATION COMING SOON*
